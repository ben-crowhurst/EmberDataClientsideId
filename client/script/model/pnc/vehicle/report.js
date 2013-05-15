Application.PNCVehicleReport = DS.Model.extend({
    owner: DS.attr('string'),
    startDate: DS.attr('string'),
    endDate: DS.attr('string'),
    type: DS.attr('string'),
    reference: DS.attr('string'),
    reportText: DS.attr('string'),
    sisid: DS.attr('number'),
    pageHeading: DS.attr('string'),
    actionsToBeTaken: DS.attr('string'),
    hazardText: DS.attr('string'),
    result: DS.belongsTo('Application.PNCVehicleResult')
});