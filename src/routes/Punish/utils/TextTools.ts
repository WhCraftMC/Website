export function RawText(str: string) {
    //const newStr = str.replace(/&([a-zA-Z]+)([klmnor])?|&(\d+)/g, '');
    //return newStr;
    return str;
}

export function setLength(str: string, length: number) {
    //const maxLength = length;
    //const newStr = str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
    //return newStr;
    return str;
}

export function formattedTime(timestamp: number, untime: boolean) {
  const date = new Date(timestamp);
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const time = String(`${year}/${month}/${day} ${hours}:${minutes}:${seconds}`);

  if (untime) {
    if (new Date(timestamp) < new Date() && timestamp !== 0) {
      return time + '(已过期)';
    }
    if (timestamp === 0) {
        return '永久';
    }
  }
  return time;
}