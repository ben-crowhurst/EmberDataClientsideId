Application.Adapter.registerTransform('array', {
    serialize: function (serialized) {
        return Ember.isNone(serialized) ? [] : serialized;
    },
    deserialize: function (deserialized) {
        return Ember.isNone(deserialized) ? [] : deserialized;
    }
});