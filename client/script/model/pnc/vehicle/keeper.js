Application.PNCVehicleKeeper = DS.Model.extend({
    since: DS.attr('string'),
    name: DS.attr('string'),
    addressLines: DS.attr('string'),
    postcode: DS.attr('string'),
    result: DS.belongsTo('Application.PNCVehicleResult')
});