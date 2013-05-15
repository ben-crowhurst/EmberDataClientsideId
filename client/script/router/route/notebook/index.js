Application.NotebookIndexRoute = Ember.Route.extend({
    model: function() {
        var notebook = Application.Notebook.createRecord({
            id: uuid.v4(),
            title: 'Default title value',
            notes: 'Default note values'
        });

        return notebook;
    },    
    redirect: function() {
        this.transitionTo('notebook.entry', this.get('currentModel'));
    }
});