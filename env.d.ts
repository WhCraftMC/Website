/// <reference types="vite/client" />
declare module 'dateUtils' {
    export function formattedTime(timestamp: number): string;
    export function TimestampToDate(timestamp: number): Date;
    export function getNowDate(): Date;
    export function getNowTime(): string;
    export function getNowTimestamp(): number;
}