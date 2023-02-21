import React, { useState } from 'react';
import { weatherIcon } from '../../javascript/ui';
import { unixTimeConvert } from '../../javascript/unixTimeConvert';
import styles from './WeatherDetail.module.css';

export default function WeatherDetail({ item }) {
    const [date, setDate] = useState();

    return (
        <div className={styles.weatherDetail}>
            <div className={styles.top}>
                <p className={styles.date}>
                    {item && unixTimeConvert(item[0].dt).split(' ')[0]}
                </p>
            </div>
            <div className={styles.center}>
                <div className={styles.center_box}>
                    <p className={styles.center_temperature}>
                        {item && Math.round(item[0].main.temp)}
                        <span>°C</span>
                    </p>
                    <p className={styles.center_description}>
                        {item && item[0].weather[0].description}
                    </p>
                </div>
                <p className={styles.center_icon}>
                    {item && weatherIcon(item[0])}
                </p>
            </div>
            <ul className={styles.bottom_list}>
                {item &&
                    item.map((value) => (
                        <li className={styles.bottom_item} key={value.dt}>
                            <p className={styles.clock}>
                                {unixTimeConvert(value.dt).split(' ')[1]}
                            </p>
                            <p className={styles.icon}>{weatherIcon(value)}</p>
                            <p className={styles.temperature}>
                                {Math.round(value.main.temp)}
                            </p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
