declare global {
    type Valueof<T> = T[keyof T];
    type NooNullable<T> = T extends undefined | null ? never : T;
}

export { };
