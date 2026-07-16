using { product.catalog as db } from '../db/schema';

@requires: 'viewer'
service ProductCatalogService {

    @restrict: [
        {
            grant: ['READ'],
            to: 'viewer'
        },
        {
            grant: ['*'],
            to: 'admin'
        }
    ]
    @Capabilities.InsertRestrictions.Insertable: true
    @Capabilities.UpdateRestrictions.Updatable: true
    @Capabilities.DeleteRestrictions.Deletable: true
    entity Products as projection on db.Products;


    @restrict: [
        {
            grant: ['READ'],
            to: 'viewer'
        },
        {
            grant: ['*'],
            to: 'admin'
        }
    ]
    entity Categories as projection on db.Categories;


    @restrict: [
        {
            grant: ['READ'],
            to: 'viewer'
        },
        {
            grant: ['*'],
            to: 'admin'
        }
    ]
    entity StockItems as projection on db.StockItems;

}