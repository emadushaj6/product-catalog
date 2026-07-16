sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/product/catalog/productcatalog/test/integration/pages/ProductsList.gen",
	"com/product/catalog/productcatalog/test/integration/pages/ProductsObjectPage.gen"
], function (JourneyRunner, ProductsListGenerated, ProductsObjectPageGenerated) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/product/catalog/productcatalog') + '/test/flp.html#app-preview',
        pages: {
			onTheProductsListGenerated: ProductsListGenerated,
			onTheProductsObjectPageGenerated: ProductsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

