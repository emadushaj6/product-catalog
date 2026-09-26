const cds = require('@sap/cds');

module.exports = cds.service.impl(function () {

    const { Products, StockItems } = this.entities;

    this.before(['CREATE', 'UPDATE'], Products, req => {

        if (req.data.price < 0) {
            req.error(400, 'Price cannot be negative');
        }

        if (req.data.price > 500) {
            req.data.premium = true;
        } else {
            req.data.premium = false;
        }

    });

    this.after('READ', Products, (each) => {
        const products = Array.isArray(each) ? each : [each];
        for (const product of products) {
            if (!product) continue;
            if (product.price < 50) {
                product.priceCategory = 'Budget';
            } else if (product.price < 300) {
                product.priceCategory = 'Mid-range';
            } else {
                product.priceCategory = 'Premium';
            }
        }
    });

    this.before(['CREATE', 'UPDATE'], StockItems, req => {

        if (req.data.quantity < 0) {
            req.error(400, 'Stock quantity cannot be negative');
        }

    });

});