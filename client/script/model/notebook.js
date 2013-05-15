Application.Notebook = DS.Model.extend({
    title: DS.attr('string'),
    notes: DS.attr('string'),
    pncNominalSearches : DS.hasMany('Application.PNCNominalSearch'),
    pncVehicleSearches : DS.hasMany('Application.PNCVehicleSearch')
});