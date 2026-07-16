using { cuid, managed } from '@sap/cds/common';

namespace product.catalog;

entity Categories : cuid, managed {
    name        : String(100);
    description : String(255);
    products    : Composition of many Products
                    on products.category = $self;
}

entity Products : cuid, managed {
    name        : String(100);
    description : String(255);
    price       : Decimal(10,2);
    premium     : Boolean default false;
    category    : Association to Categories;
    stock       : Composition of one StockItems
                    on stock.product = $self;
}

entity StockItems : cuid, managed {
    quantity : Integer;
    location : String(100);
    product  : Association to Products;
}