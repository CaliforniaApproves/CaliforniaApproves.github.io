import { ReactNode, ReactElement } from 'react';

export const stringOrNull = (item: string|null): item is string => {
    return item !== null && (item as string).toUpperCase !== undefined;
}

export const isReactElement = (item: ReactNode): item is ReactElement<any> => {
    return item != null && (item as ReactElement<any>).props !== undefined;
}