export function formatDate(timestamp: number, format = 'YYYY-MM-DD hh:mm:ss'): string {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const map: { [key: string]: string } = {
        YYYY: String(year),
        MM: month,
        DD: day,
        hh: hours,
        mm: minutes,
        ss: seconds,
        ms: '' + date.getMilliseconds(),
    };
    return format.replace(/YYYY|MM|DD|hh|mm|ss|ms/g, (matched) => map[matched]);
}

//清除应用沙箱缓存
export const clearSanbox = (appName: string) => {
    try {
        //清除沙箱缓存
        window.__WUJIE?.inject?.idToSandboxMap?.delete?.(appName);
        //移除iframe 容器
        window?.__WUJIE?.iframe?.remove?.();
    } catch (err) {
        console.log(err);
    }
};
