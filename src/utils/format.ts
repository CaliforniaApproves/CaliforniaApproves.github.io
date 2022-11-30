export const toConstantCase = (name: string): string => {
    const illegalCharacterRegex = /[^a-z|A-Z|0-9|\_]/g;
    let result = name.replaceAll(illegalCharacterRegex, '_');
    result = result.toUpperCase();
    return result;
}

export const pluralize = (title: string, value: Array<any> | number | string | Set<any>): string => {
    if (Array.isArray(value)) {
        if (value.length === 1) return title;
    } else if (value instanceof Set) {
        if (value.size === 1) return title;
    } else if (typeof value === 'number') {
        if (value === 1) return title;
    } else {
        if (parseFloat(value) === 1) return title;
    }
    return `${title}s`;
}