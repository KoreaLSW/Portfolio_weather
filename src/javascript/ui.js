import {
    BsSun,
    BsCloudSun,
    BsClouds,
    BsCloudRainHeavy,
    BsCloudSnow,
} from 'react-icons/bs';
import { WiDayRain } from 'react-icons/wi';
import { TbCloudStorm } from 'react-icons/tb';
import { RiSunFoggyLine } from 'react-icons/ri';

export function weatherIcon(weather) {
    if (weather) {
        const icon = weather.weather[0].icon;
        if (icon === '02d' || icon === '02n') {
            return <BsCloudSun />;
        } else if (
            icon === '03d' ||
            icon === '03n' ||
            icon === '04d' ||
            icon === '04n'
        ) {
            return <BsClouds />;
        } else if (icon === '09d' || icon === '09n') {
            return <BsCloudRainHeavy />;
        } else if (icon === '10d' || icon === '10n') {
            return <WiDayRain />;
        } else if (icon === '11d' || icon === '11n') {
            return <TbCloudStorm />;
        } else if (icon === '13d' || icon === '13n') {
            return <BsCloudSnow />;
        } else if (icon === '50d' || icon === '50n') {
            return <RiSunFoggyLine />;
        } else {
            return <BsSun />;
        }
    }
}

export function clothesSuggestion(weather, styles) {
    if (weather) {
        const temperature = weather.main.feels_like;
        if (temperature < 4) {
            return (
                <div className={styles.clothes_box}>
                    <h2 className={styles.clothes_title}>옷차림 추천</h2>
                    <img
                        className={styles.clothes_icon}
                        src='/images/padding.png'
                        alt='padding'
                    />
                    <p className={styles.ment}>
                        날씨가 춥습니다! <br />
                        패딩이나 두꺼운 코트를 추천합니다.
                    </p>
                </div>
            );
        } else if (temperature < 11) {
            return (
                <div className={styles.clothes_box}>
                    <h2 className={styles.clothes_title}>옷차림 추천</h2>
                    <img
                        className={styles.clothes_icon}
                        src='/images/coat.png'
                        alt='coat'
                    />
                    <p className={styles.ment}>
                        날씨가 춥습니다!
                        <br />
                        코트를 추천합니다.
                    </p>
                </div>
            );
        } else if (temperature < 18) {
            return (
                <div className={styles.clothes_box}>
                    <h2 className={styles.clothes_title}>옷차림 추천</h2>
                    <img
                        className={styles.clothes_icon}
                        src='/images/jacket.png'
                        alt='jacket'
                    />
                    <p className={styles.ment}>
                        시원한 날씨네요!
                        <br />
                        자켓이나 가디건을 추천합니다!
                    </p>
                </div>
            );
        } else if (temperature < 21) {
            return (
                <div className={styles.clothes_box}>
                    <h2 className={styles.clothes_title}>옷차림 추천</h2>
                    <img
                        className={styles.clothes_icon}
                        src='/images/hood.png'
                        alt='hood'
                    />
                    <p className={styles.ment}>
                        최적의 기온!
                        <br />
                        후드티나 맨투맨을 추천합니다!
                    </p>
                </div>
            );
        } else if (temperature < 25) {
            return (
                <div className={styles.clothes_box}>
                    <h2 className={styles.clothes_title}>옷차림 추천</h2>
                    <img
                        className={styles.clothes_icon}
                        src='/images/long-sleeves.png'
                        alt='long-sleeves'
                    />
                    <p className={styles.ment}>
                        따뜻한 날씨네요!
                        <br />
                        얇은 긴팔티를 추천합니다!
                    </p>
                </div>
            );
        } else {
            return (
                <div className={styles.clothes_box}>
                    <h2 className={styles.clothes_title}>옷차림 추천</h2>
                    <img
                        className={styles.clothes_icon}
                        src='/images/tshirt.png'
                        alt='tshirt'
                    />
                    <p className={styles.ment}>
                        더운 날씨네요!
                        <br />
                        반팔티를 추천합니다!
                    </p>
                </div>
            );
        }
    }
}
