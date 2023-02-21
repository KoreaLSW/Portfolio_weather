import React, { useEffect, useState } from 'react';
import styles from './Clock.module.css';

export default function Clock() {
    const [time, setTime] = useState(new Date());
    const [week, setWeek] = useState([
        '일',
        '월',
        '화',
        '수',
        '목',
        '금',
        '토',
    ]);
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className={styles.clock}>
            <div className={styles.date_box}>
                <p>{`${time.getFullYear()}년${
                    time.getMonth() + 1
                }월${time.getDate()}일`}</p>
            </div>
            <div className={styles.clock_box}>
                <p className={styles.am_pm}>
                    {time.getHours() > 12 ? 'PM' : 'AM'}
                    &ensp;
                </p>
                <p className={styles.time}>
                    {`${time.getHours()}:${
                        time.getMinutes() >= 10
                            ? time.getMinutes()
                            : '0' + time.getMinutes()
                    }`}
                </p>
            </div>
            <p className={styles.week}>{week[time.getDay()]}요일</p>
        </div>
    );
}
