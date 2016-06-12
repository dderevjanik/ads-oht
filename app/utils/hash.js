export const hash = (key) => {
    const type = typeof(key);
    let hash = 0;
    if (type === 'number') {
        return hash;
    } else if (type === 'string') {
        for(let i = 0; i < key.length; i++) {
            const char = key.charCodeAt(i);
            hash = ((hash<<5) - hash) + char;
            hash = hash & hash; // to 32bit int
        }
        return Math.abs(hash);
    }
    return undefined;
};

export default hash;
