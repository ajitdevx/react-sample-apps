function getNextSevenDays() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const next7Days = [];
    for (let i = 0; i < 7; i++) {
        const dayNumber = new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).getDay();
        next7Days.push(days[dayNumber]);
    }

    return next7Days;
}

function convertUnixToDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toISOString().split('T')[0];
}

export { getNextSevenDays, convertUnixToDate }