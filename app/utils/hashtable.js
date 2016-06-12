import hash from './hash';

export class HashTable {

    constructor(capacity) {
        this._table = new Array(capacity).fill(null);
        this._aval = 'AVAL';
        this._num = 0;
    }

    _hash(key) {
        return hash(key) % this._table.length;
    }

    find(key) {
        let index = this._hash(key);
        let aval = null;
        let item = null;
        while(true) {
            item = this._table[index];
            if (item === null) {
                if (aval === null) {
                    aval = index;
                }
                return [false, aval];
            } else if (item === this._aval) {
                if (aval === null) {
                    aval = index;
                }
            } else if (item[0] === key) {
                return [true, index];
            }
            index = (index + 1) % this._table.length;
        }
    }

    set(key, value) {
        const [found, index] = this.find(key);
        const aval = null;
        if (found) {
            this._table[index][1] = value;
            return index;
        }
        this._num += 1;
        this._table[index] = [key, value];
        if (this._num > (this._table.length * 0.5)) {
            this._resize(this._table.length * 2);
        }
    }

    get(key) {
        const [found, index] = this._table[key];
        if (found) {
            return this._table[index][1];
        }
        return null;
    }

    del(key) {
        const [found, index] = this.find(key);
        if (found) {
            this._table[index] = this._aval;
            this._num -= 1;
            return true;
        }
        return false;
    }

    _resize(newSize) {
        const items = [...this._table];
        this._table = new Array(newSize).fill(null);
        this._num = 0;
        items.forEach((item) => {
            if (item) {
                if (item.length === 2) {
                    this.set(item[0], item[1]);
                }
            }
        });
    }

}

export default HashTable;
