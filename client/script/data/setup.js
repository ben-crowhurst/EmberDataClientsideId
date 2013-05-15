Application.Adapter.configure('plurals', {
    notebook: 'notebook',
    p_n_c_nominal_search: 'p_n_c_nominal_searches',
    p_n_c_vehicle_search: 'p_n_c_vehicle_searches',
});

Application.Adapter.map('Application.PNCNominalSearch', {
    results: { embedded: 'load' }
});

Application.Adapter.map('Application.PNCVehicleSearch', {    
    results: { embedded: 'load' }
});

Application.Adapter.map('Application.PNCVehicleResult', {
     keeper:  { embedded: 'load' },
     reports: { embedded: 'load' }
});