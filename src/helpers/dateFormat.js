export const dateFormat = (date) => {
    const isoDate = new Date(date);

    return new Intl.DateTimeFormat('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(isoDate);
}