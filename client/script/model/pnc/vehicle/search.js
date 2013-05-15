Application.PNCVehicleSearch = DS.Model.extend({
    status: DS.attr('string'),        
    vrm: DS.attr('string'),
    reason: DS.attr('string'),
    location: DS.attr('string'),
    originator: DS.attr('string'),
    notebook: DS.belongsTo('Application.Notebook'),
    results: DS.hasMany('Application.PNCVehicleResult')
});