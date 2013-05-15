Application.PNCVehicleResult = DS.Model.extend({
    vrm: DS.attr('string'),
    make: DS.attr('string'),
    model: DS.attr('string'),
    colour: DS.attr('string'),
    bodyType: DS.attr('string'),
    engineNumber: DS.attr('number'),
    engineCapacity: DS.attr('string'),
    whenRegistered: DS.attr('string'),
    chassisFrameNumber: DS.attr('number'),
    reports: DS.hasMany('Application.PNCVehicleReport'),
    keeper: DS.belongsTo('Application.PNCVehicleKeeper'),    
    search: DS.belongsTo('Application.PNCVehicleSearch')
});