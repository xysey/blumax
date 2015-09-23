Customers = new Mongo.Collection('customers');
Customers.initEasySearch('name');
// EasySearch.createSearchIndex('customers', {
//    use: 'mongo-db',
//    useTextIndexes: true, // use mongo text indexes
//    field: 'name', // field to use text indexes for
//    sort: function () {
//     return {
//       score: { $meta: 'textScore' } // sort by relevance
//     };
//    }
// });
