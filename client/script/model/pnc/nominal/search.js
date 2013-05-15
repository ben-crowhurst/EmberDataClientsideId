Application.PNCNominalSearch = DS.Model.extend({
    status: DS.attr('string'),    
    pncid: DS.attr('string'),
    surname: DS.attr('string'),
    dateOfBirth: DS.attr('number'),
    reason: DS.attr('string'),
    location: DS.attr('string'),
    originator: DS.attr('string'),
    notebook: DS.belongsTo('Application.Notebook'),
    results: DS.hasMany('Application.PNCNominalResult')
});