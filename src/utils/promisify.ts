interface Callback<S, E> {
    success: (res: S) => any
    fail: (error: E) => any
}

function promisify<S, E, O>(api: (options: O & Callback<S, E>) => any) {
    return function (params?: Omit<NooNullable<O>, 'success' | 'fail'>) {
        return new Promise<S>((resolve, reject) => {
            // @ts-expect-error is ok
            api({
                ...(params ?? {}),
                success: resolve,
                fail: reject,
            });
        });
    };
}

export default promisify;
