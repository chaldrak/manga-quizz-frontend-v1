const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${displayDigit(hour)}:${displayDigit(minute)}:${displayDigit(second)}`;
};

const displayDigit = (item) => {
    return item.toString().length === 1 ? '0'+item : item;
}

export {formatTime}