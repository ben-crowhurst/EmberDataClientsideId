Application.NotebookEntryController = Ember.ObjectController.extend({
    currentSearch: null,
    refresh: function() {
        this.get('currentSearch').reload();
    },
    searchNominal: function() {
        var search = Application.PNCNominalSearch.createRecord({
            id: uuid.v4(),
            status: 'pending',    
            pncid: null,
            surname: 'Crowhurst',
            dateOfBirth: 446921772,
            reason: 'Testing JSON data format.',
            location: 'Glasgow',
            originator: 'Ben Crowhurst'
        });

        this.set('currentSearch', search);
        this.get('content.pncNominalSearches').pushObject(search);

        this.get('content.transaction').commit();
    },
    searchVehicle: function() {
        var search = Application.PNCVehicleSearch.createRecord({
            id: uuid.v4(),
            status: 'pending',        
            vrm: 'SB53 YUK',
            reason: 'Testing JSON data format.',
            location: 'Glasgow',
            originator: 'Ben Crowhurst',
        });

        this.set('currentSearch', search);
        this.get('content.pncVehicleSearches').pushObject(search);

        this.get('content.transaction').commit();
    }
});