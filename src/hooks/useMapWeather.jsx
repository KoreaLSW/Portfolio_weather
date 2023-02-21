import React from 'react';
import { lat, mapWeather, toDayWeather } from '../api/weatherAPIs';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export default function useMapWeather(location) {
    const queryClient = useQueryClient();

    const weatherQuery = useQuery(
        ['mapWeather', location],
        () => mapWeather(location),
        {
            staleTime: 1000 * 60 * 1000,
        }
    );

    const updateWeather = useMutation((location) => mapWeather(location), {
        onSuccess: () => {
            queryClient.invalidateQueries(['mapWeather']);
        },
    });

    return { weatherQuery, updateWeather };
}
