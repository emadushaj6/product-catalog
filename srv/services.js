const cds = require('@sap/cds');

module.exports = cds.service.impl(function () {

    const { Products } = this.entities;

    this.before(['CREATE', 'UPDATE'], Products, req => {

        if (req.data.price < 0) {
            req.error(400, 'Price cannot be negative');
        }

        if (req.data.price > 500) {
            req.data.premium = true;
        }

    });

});