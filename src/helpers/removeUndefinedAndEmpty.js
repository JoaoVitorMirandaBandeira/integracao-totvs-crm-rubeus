export const removeUndefinedAndEmpty = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    const entries = Object.entries(obj)
        .map(([key, value]) => [key, removeUndefinedAndEmpty(value)])
        .filter(([_, value]) => value !== undefined)
    if (entries.length === 0) {
        return undefined
    }
    return Object.fromEntries(entries)
}
