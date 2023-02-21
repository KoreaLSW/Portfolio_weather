import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { useQuery } from '@tanstack/react-query';
import { toDayWeather } from '../../api/weatherAPIs';
import Clock from '../../component/clock/Clock';
import { clothesSuggestion, weatherIcon } from '../../javascript/ui';

export default function Home() {
    const {
        isLoading,
        error,
        data: weather,
    } = useQuery(['toDayWeather'], () => toDayWeather(), {
        staleTime: 1000 * 60 * 100,
    });
    return (
        <div className={styles.home}>
            <Clock />
            <h1 className={styles.title}>오늘 날씨</h1>
            <div className={styles.temperature_box}>
                <p className={styles.temperature}>
                    {weather && Math.round(weather.data.main.temp)}°C
                </p>
                <div className={styles.icon}>
                    {weather && weatherIcon(weather.data)}
                </div>
            </div>
            {weather && clothesSuggestion(weather.data, styles)}
        </div>
    );
}
