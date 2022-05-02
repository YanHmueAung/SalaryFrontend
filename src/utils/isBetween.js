const isBetween = (value, start, end) => {
    if (!start && !end) return true;

    const numValue = parseInt(value);
    const numStart = parseInt(start);
    const numEnd = parseInt(end);

    if (numStart && numEnd) {
        return numValue >= numStart && numValue <= numEnd;
    } else if (numStart) {
        return numValue >= numStart;
    } else if (numEnd) {
        return numValue <= numEnd;
    }
}

export default isBetween;