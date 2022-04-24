class Errors {
    /**
     * Create a new Errors instance.
     */
    constructor(errors = {}) {
        this.record(errors);
    }

    /**
     * Get all the errors.
     *
     * @return {object}
     */
    all() {
        return this.errors;
    }

    /**
     * Determine if any errors exists for the given field or object.
     *
     * @param {string} field
     */
    has(field) {
        let hasError = this.errors.hasOwnProperty(field);

        if (!hasError) {
            const errors = Object.keys(this.errors).filter(
                e => e.startsWith(`${field}.`) || e.startsWith(`${field}[`)
            );

            hasError = errors.length > 0;
        }

        return hasError;
    }

    first(field) {
        return this.get(field)[0];
    }

    get(field) {
        // const errors = Object.keys(this.errors).filter(
        //     e => e.startsWith(`${field}.`) || e.startsWith(`${field}[`)
        // );
        // console.log()
        // let fieldValues = field.split('.');
        //
        // if (fieldValues.length <= 1) {
            return this.errors[field] || [];
        // }
        //
        // let fieldValue = null;
        //
        // for (let index in fieldValues) {
        //     if (index === 0)
        //     {
        //         fieldValue = this.errors[fieldValues[index]] || []
        //         continue;
        //     }
        //
        //     if (fieldValue) {
        //         console.log(fieldValue)
        //         fieldValue = fieldValue[fieldValues[index]] || []
        //     }
        //     // console.log(fieldValue)
        // }
        // return fieldValue || [];
    }

    /**
     * Determine if we have any errors.
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     * Record the new errors.
     *
     * @param {object} errors
     */
    record(errors = {}) {
        this.errors = errors;
    }

    /**
     * Clear a specific field, object or all error fields.
     *
     * @param {string|null} field
     */
    clear(field) {
        if (!field) {
            this.errors = {};

            return;
        }

        let errors = Object.assign({}, this.errors);

        Object.keys(errors)
            .filter(e => e === field || e.startsWith(`${field}.`) || e.startsWith(`${field}[`))
            .forEach(e => delete errors[e]);

        this.errors = errors;
    }
}

export default Errors;
