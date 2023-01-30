const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}-${displayDigit(month)}-${displayDigit(day)}`;
};

const displayDigit = (item) => {
    return item.toString().length === 1 ? '0'+item : item;
}

export {formatDate}