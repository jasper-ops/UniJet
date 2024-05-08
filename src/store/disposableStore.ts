class DisposableStore {
    private _store = new Map<string, any>();
    private _index = 0;

    private generateKey(): string {
        return `${Date.now()}T${++this._index}`;
    }

    /**
     * 存储一个一次性数据，返回该数据的标识KEY，该key用来取回数据
     */
    set(data: any): string {
        const key = this.generateKey();
        this._store.set(key, data);
        return key;
    }

    get<T>(key: string): T | undefined {
        if (this._store.has(key)) {
            const data = this._store.get(key);
            this._store.delete(key);
            return data;
        } else {
            return undefined;
        }
    }
}

export const disposableStore = new DisposableStore();
