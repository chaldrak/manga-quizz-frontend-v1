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

const formatDateText = (timestamp) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year} ${months[month]} ${day}`;
}

export {formatDate, formatDateText}