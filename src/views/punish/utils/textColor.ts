export function RawText(str: string) {
    const newStr = str.replace(/&([a-zA-Z]+)([klmnor])?|&(\d+)/g, '');
    return newStr;
}

export function setLength(str: string, length: number) {
    const maxLength = length;
    const newStr = str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
    return newStr;
}