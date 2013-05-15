Application.PNCNominalResult = DS.Model.extend({
    colour: DS.attr('string'),
    reportIndicators: DS.attr('string'),
    sisid: DS.attr('number'),
    name: DS.attr('string'),
    matchedSerialNo: DS.attr('number'),
    dob: DS.attr('number'),
    gender: DS.attr('string'),
    nominal: DS.attr('string'),
    matchedDobSerialNo: DS.attr('number'),
    pncid: DS.attr('number'),
    placeOfBirth: DS.attr('string'),
    search: DS.belongsTo('Application.PNCNominalSearch')
});