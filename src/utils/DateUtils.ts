export function formattedTime(timestamp: number) {
    const date = new Date(timestamp);
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return String(`${year}/${month}/${day} ${hours}:${minutes}:${seconds}`);
}

export function TimestampToDate(timestamp: number) {
    const date = new Date(timestamp);
    return date;
}

export function getNowDate() {
    const date = new Date();
    return date;
}

export function getNowTime() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return String(`${year}/${month}/${day} ${hours}:${minutes}:${seconds}`);
}

export function getNowTimestamp() {
    const date = new Date();
    return date.getTime();
}