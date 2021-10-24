class TipCalculator {
    constructor() {
        this._bill = 0;
        this._tip = 0;
        this._people = 1;

        this._listeners = [];
    }

    set bill(value) {
        if (typeof value != 'number' || value < 0) 
            throw new Error('bill value must be a positive number');
        this._bill = value;
        this._callListeners();
    }

    get bill() {
        return this._bill;
    }

    set tip(value) {
        if (typeof value != 'number' || value < 0)
            throw new Error('tip value must be a percentage greater than 0');
        this._tip = value;
        this._callListeners();
    }

    get tip() {
        return this._tip;
    }

    set people(value) {
        if (typeof value != 'number' || value < 1)
            throw new Error('people value must be a number greater than 0');
        this._people = value;
        this._callListeners();
    }

    get people() {
        return this._people;
    }
    
    get tipAmount() {
        return (this.bill * (this.tip / 100)) / this.people;
    }

    get totalAmount() {
        return (this.bill / this.people) + this.tipAmount;
    }

    addListener(listener) {
        this._listeners.push(listener);
    }
    
    _callListeners() {
        for (const listener of this._listeners) {
            listener();
        }
    }
}
