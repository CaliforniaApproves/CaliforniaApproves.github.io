import { ReactNode } from 'react';
import { isReactElement } from './type-checks';

export const uuidGenerator = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

export const getNavRoutes = (children: ReactNode): Array<string> => {
    // Using react router, we expect a switch element with route elements nested
    const navRoutes: Array<string> = [];
    if (isReactElement(children)) {
        if (Array.isArray(children.props.children)) {
            children.props.children.forEach((child: ReactNode) => {
                if (isReactElement(child)) {
                    navRoutes.push(child.props.path);
                }
            })
        } else {
            console.log('is not array')
        }
    }
    navRoutes.sort();
    return navRoutes;
}

export const formatDateString = (dateString: string) => {
    if (dateString == null) return '';
    const date = new Date(dateString).toLocaleString('sv')
    let newDate = date.replace('T', ' ')
    newDate = newDate.split('.')[0];
    return newDate;
}

export const escapeRegex = (string: string): string => {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export const compareAlphaNum = (a: string, b: string) => {
    if (!a && !b) {return 1}
    if (!a) {return -1}
    if (!b) {return 1}
    const reA = /[^a-zA-Z]/g;
    const reN = /[^0-9]/g;
    const aA = a.replace(reA, "");
    const bA = b.replace(reA, "");
    if (aA === bA) {
        const aN = parseInt(a.replace(reN, ""), 10);
        const bN = parseInt(b.replace(reN, ""), 10);
    return aN === bN ? 0 : aN > bN ? 1 : -1;
    } else {
    return aA > bA ? 1 : -1;
    }
}