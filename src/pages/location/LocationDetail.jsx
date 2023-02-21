import React, { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { mapWeather } from '../../api/weatherAPIs';
import useMapWeather from '../../hooks/useMapWeather';
import styles from './LocationDetail.module.css';
import { weatherIcon } from '../../javascript/ui';

export default function LocationDetail({ location, address }) {
    const {
        weatherQuery: { data: weather },
    } = useMapWeather(location);

    return (
        <div className={styles.locationDetail}>
            <p className={styles.address}>{address && address}</p>
            <p className={styles.temperature}>
                {weather && Math.round(weather.data.main.temp)}°C
            </p>
            <p className={styles.icon}>
                {weather && weatherIcon(weather.data)}
            </p>
            <p className={styles.description}>
                {weather && weather.data.weather[0].description}
            </p>
        </div>
    );
}
