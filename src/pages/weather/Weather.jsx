import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { weekWeather } from '../../api/weatherAPIs';
import WeatherItem from './WeatherItem';
import styles from './Weather.module.css';
import WeatherDetail from './WeatherDetail';
import { unixTimeClock } from '../../javascript/unixTimeConvert';

export default function Weather() {
    const {
        isLoading,
        error,
        data: weather,
    } = useQuery(['weekWeather'], () => weekWeather(), {
        staleTime: 1000 * 60 * 100,
    });
    const [weatherList, setWeatherList] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (weather) {
            setWeatherList('');
            for (let i = 0; i < 8; i++) {
                setWeatherList((prev) => [...prev, weather.data.list[i]]);
            }
        }
    }, [weather]);

    const handleOnclick = (index) => {
        setCount(0);
        setWeatherList('');
        if (
            index === 0 &&
            unixTimeClock(weather.data.list[0].dt) !== '00:00:00'
        ) {
            for (let i = count; i < count + 8; i++) {
                setWeatherList((prev) => [...prev, weather.data.list[i]]);
            }

            return;
        }

        for (let i = index; i < weather.data.list.length; i++) {
            if (i >= 0) {
                if (unixTimeClock(weather.data.list[i].dt) === '00:00:00') {
                    setWeatherList('');
                    for (let j = i; j < i + 8; j++) {
                        setWeatherList((prev) => [
                            ...prev,
                            weather.data.list[j],
                        ]);
                    }

                    return;
                }
            }
        }
    };

    return (
        <div className={styles.weather}>
            <div className={styles.weather_detail}>
                <WeatherDetail item={weatherList} />
            </div>
            <ul className={styles.weather_item}>
                {weather &&
                    weather.data.list.map(
                        (value, index) =>
                            (unixTimeClock(value.dt) === '00:00:00' ||
                                index === 0) && (
                                <WeatherItem
                                    key={value.dt}
                                    item={value}
                                    index={index}
                                    onclick={handleOnclick}
                                />
                            )
                    )}
            </ul>
        </div>
    );
}
