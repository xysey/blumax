Template.gallons.helpers({
    gallonCount: function () {
        return Gallons.findOne({
            branch: 'main'
            /*
            sort: Sort specifier,
            skip: Number,
            fields: Field specifier,
            reactive: Boolean,
            transform: Function
            */
        });
    }
});