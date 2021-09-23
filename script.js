class TextField {
    constructor(textField, errors) {
        if (textField == null) throw new Error("textField cannot be null");
        if (errors == null) throw new Error("errors cannot be null");

        this.textField = textField;
        this.errors = errors;

        this.input = textField.querySelector('.text-field__input');
        this.error = textField.querySelector('.text-field__error');

        if (this.input == null) throw new Error(`Text field ${textField} does not have input element`);
        if (this.error == null) throw new Error(`Text field ${textField} does not have error element`);

        this.input.addEventListener('focus', () => { this._addClass(TextField.FOCUS_CSS_CLASS) });
        this.input.addEventListener('blur', () => { this._removeClass(TextField.FOCUS_CSS_CLASS) });
        this.input.addEventListener('input', () => { this._updateError() });
        this.input.addEventListener('blur', () => { this._updateError() });
        this.input.addEventListener('invalid', () => { this._updateError() });
    }

    _addClass(cssClass) {
        this.textField.classList.add(cssClass);
    }

    _removeClass(cssClass) {
        this.textField.classList.remove(cssClass);
    }

    _setError(type) {
        this.error.textContent = this.errors[type] || "";
    }

    _updateError() {
        if (this.input.willValidate && !this.input.validity.valid) {
            this._addClass(TextField.INVALID_CSS_CLASS);

            if (this.input.validity.valueMissing) {
                this._setError(TextField.VALUE_MISSING);
            } else if (this.input.validity.typeMismatch) {
                this._setError(TextField.TYPE_MISMATCH);
            }
        } else {
            this._removeClass(TextField.INVALID_CSS_CLASS);
            this.error.textContent = "";
        }
    }
}

TextField.activateFormValidation = function (form) {
    if (form == null) throw new Error("form cannot be null");

    form.addEventListener("submit", (e) => {
        if (!form.checkValidity()) {
            e.preventDefault();
        }
    });
}

TextField.FOCUS_CSS_CLASS = "text-field--focus";
TextField.INVALID_CSS_CLASS = "text-field--invalid";

TextField.VALUE_MISSING = "VALUE_MISSING";
TextField.TYPE_MISMATCH = "TYPE_MISMATCH";
