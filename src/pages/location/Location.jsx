import React, { useEffect, useState } from 'react';
import {
    lat,
    locationlat,
    locationlon,
    lon,
    mapWeather,
    toDayWeather,
} from '../../api/weatherAPIs';
import styles from './Location.module.css';
import LocationDetail from './LocationDetail';
import useMapWeather from '../../hooks/useMapWeather';
import { useQuery } from '@tanstack/react-query';
const { kakao } = window;
let marker = '';
let infowindow = '';
let geocoder = '';
let detailAddr = '';
let addr = '';
let content = '';
let latlng = '';
export default function Location() {
    const { updateWeather } = useMapWeather();

    const [location, setLocation] = useState({ La: lon, Ma: lat });
    const [address, setAddress] = useState('');

    useEffect(() => {
        let container = document.getElementById('map');

        let options = {
            center: new kakao.maps.LatLng(locationlat(), locationlon()),
            level: 3,
        };

        let map = new kakao.maps.Map(container, options);

        marker = new kakao.maps.Marker({
            // 지도 중심좌표에 마커를 생성합니다
            position: map.getCenter(),
        });

        marker.setMap(map);

        infowindow = new kakao.maps.InfoWindow({ zindex: 1 });

        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            message += '경도는 ' + latlng.getLng() + ' 입니다';

            // var resultDiv = document.getElementById('clickLatlng');
            // resultDiv.innerHTML = message;
            searchDetailAddrFromCoords(
                mouseEvent.latLng,
                function (result, status) {
                    if (status === kakao.maps.services.Status.OK) {
                        detailAddr = !!result[0].road_address
                            ? '<div>도로명주소 : ' +
                              result[0].road_address.address_name +
                              '</div>'
                            : '';
                        detailAddr +=
                            '<div>지번 주소 : ' +
                            result[0].address.address_name +
                            '</div>';

                        content =
                            '<div class="bAddr">' +
                            '<span class="title">법정동 주소정보</span>' +
                            detailAddr +
                            '</div>';

                        addr = !!result[0].road_address
                            ? result[0].road_address.address_name
                            : result[0].address.address_name;

                        setAddress(addr);
                        setLocation(latlng);
                        // 마커를 클릭한 위치에 표시합니다

                        marker.setPosition(mouseEvent.latLng);
                        marker.setMap(map);

                        // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                        infowindow.setContent(content);
                        infowindow.open(map, marker);
                    }
                }
            );
        });
    }, []);
    const handleDetail = () => {
        setLocation(latlng);
        setAddress((prev) => prev);
        //updateWeather.mutate(location);
    };

    return (
        <div className={styles.location}>
            <div
                className={styles.map}
                id='map'
                style={{ width: '500px', height: '100%' }}
                onClick={handleDetail}
            ></div>
            <div className={styles.detail}>
                <LocationDetail location={location} address={address} />
            </div>
        </div>
    );
}

function searchDetailAddrFromCoords(coords, callback) {
    geocoder = new kakao.maps.services.Geocoder();
    // 좌표로 법정동 상세 주소 정보를 요청합니다
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
}
