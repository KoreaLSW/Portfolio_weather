import React from 'react';
import { weatherIcon } from '../../javascript/ui';
import { unixTimeConvertDay } from '../../javascript/unixTimeConvert';
import styles from './WeatherItem.module.css';

export default function WeatherItem({ item, index, onclick }) {
    return (
        <li className={styles.item} onClick={() => onclick(index)}>
            <p className={styles.today}>
                {item && unixTimeConvertDay(item.dt)}
            </p>
            <div className={styles.weather_box}>
                <p className={styles.temperature}>
                    {item && Math.round(item.main.temp)}°C
                </p>
                <p className={styles.icon}>{item && weatherIcon(item)}</p>
            </div>
        </li>
    );
}
