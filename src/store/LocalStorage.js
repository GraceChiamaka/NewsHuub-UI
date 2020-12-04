const STATE = 'NEWSHUUB';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(STATE);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (data) => {
    try {
        const serializedState = JSON.stringify(data);
        localStorage.setItem(STATE, serializedState);
    } catch (err) {
        return err;
    }
};
