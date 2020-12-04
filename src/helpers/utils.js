export const properCase = (str = '') => {
    if (str && typeof str === 'string' && str.trim().length === 1) {
        return String(str).trim().toUpperCase();
    }
    if (str && typeof str === 'string') {
        return str
            .trim()
            .split(' ')
            .map((w) => w[0] && w[0].toUpperCase() + w.substr(1).toLowerCase())
            .join(' ');
    }
    if (str && typeof str === 'object' && str.length > 0) {
        return str.map((st) =>
            String(st)
                .trim()
                .split(' ')
                .map((w) => w[0] && w[0].toUpperCase() + w.substr(1).toLowerCase())
                .join(' '),
        );
    }
    return str;
};

export const formatName = (str = '', len = 10) => {
    if (str && str.length > len) {
        return `${properCase(str.slice(0, len))}...`;
    }
    return properCase(str);
};

export const formatDate = (date) => {
    if (date) {
        const result = new Date(date).toDateString();
        return result;
    }
};
