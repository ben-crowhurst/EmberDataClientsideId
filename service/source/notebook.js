var $ = require('jquery');

exports.create = function(request, response) {
    var record = request.body;
    
    response.send({}, 201);
};

var lastSearchNominalRecord = null;

exports.searchNominalCreate = function(request, response) {
    var record = request.body;

    lastSearchNominalRecord = request.body;

    response.send({}, 201);
};

exports.searchNominalRead = function(request, response) {
    var record = request.body;

    var result = {
        p_n_c_nominal_search: {
                results: [{
                    colour: 'blue',
                    report_indicators: 'aaaahhhh',
                    sisid: 123123123123,
                    name: 'Ben Crowhurst',
                    matched_serial_no: 53333222,
                    dob: 446921772,
                    gender: 'male',
                    nominal: 'nominal details',
                    matched_dob_serial_no: 8745843985893589,
                    pncid: 8989854932898432958,
                    place_of_birth: 'Plymouth'
                }]
        }
    };

    $.extend(true, result, lastSearchNominalRecord);

    response.send(result, 200);
};

exports.searchVehicleCreate = function(request, response) {
    var record = request.body;

    response.send({}, 201); 
};

exports.searchVehicleRead = function(request, response) {
    var record = request.body;

    var result = {
        p_n_c_vehicle_search: {
            results: [{
                vrm: 'SB53 YUK',
                make: 'Ford',
                model: 'Focus',
                colour: 'Blue',
                body_type: 'Carish',
                engine_number: 1231231421212,
                engine_capacity: '33cc',
                when_registered: 'Feburary',
                chassis_frame_number: 121232312246,
                reports: [{
                    owner: 'Ben Crowhurst',
                    start_date: '29/02/1984',
                    end_date: '01/03/1984',
                    type: 'bah?',
                    reference: 'That guy',
                    report_text: 'This car is unfit for road.',
                    sisid: 123293892891829,
                    page_heading: 'Unfit For Road',
                    actions_to_be_taken: 'Crush',
                    hazard_text: '30mph will kill you.'
                }],
                keeper: {
                    since: 'feb',
                    name: 'Ben Crowhurst',
                    address_lines: '1 flower lane villa',
                    postcode: 'G82 1SA',
                }
            }]
        }
    };

    $.extend(true, result, record);

    response.send(result, 200); 
};