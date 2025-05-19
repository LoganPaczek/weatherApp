export const useDateUtils = () => {
    const getHour = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.getHours();
    };

    const getMinute = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.getMinutes();
    };

    return { getHour, getMinute };
};