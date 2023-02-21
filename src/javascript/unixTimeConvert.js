export function unixTimeConvert(unix) {
    var date = new Date(unix * 1000);
    var year = date.getFullYear();
    var month =
        date.getMonth() + 1 >= 10
            ? date.getMonth() + 1
            : '0' + (date.getMonth() + 1);
    var day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate();

    var hour = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();

    var minute =
        date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();

    var second =
        date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds();

    return year + '-' + month + '-' + day + ' ' + hour;
}

export function unixTimeClock(unix) {
    var date = new Date(unix * 1000);

    var hour = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();

    var minute =
        date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();

    var second =
        date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds();

    return `${hour}:${minute}:${second}`;
}

export function unixTimeConvertDay(unix) {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    var date = new Date(unix * 1000);
    var dayOfTheWeek = week[date.getDay()];

    return dayOfTheWeek + '요일';
}
