"use strict";
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages.component");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: 'login',
        loadChildren: function () { return System.import('./login/login.module'); }
    },
    {
        path: 'register',
        loadChildren: function () { return System.import('./register/register.module'); }
    },
    {
        path: 'pages',
        component: pages_component_1.Pages,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: function () { return System.import('./dashboard/dashboard.module'); } },
            { path: 'editors', loadChildren: function () { return System.import('./editors/editors.module'); } },
            { path: 'components', loadChildren: function () { return System.import('./components/components.module'); } },
            { path: 'charts', loadChildren: function () { return System.import('./charts/charts.module'); } },
            { path: 'ui', loadChildren: function () { return System.import('./ui/ui.module'); } },
            { path: 'forms', loadChildren: function () { return System.import('./forms/forms.module'); } },
            { path: 'tables', loadChildren: function () { return System.import('./tables/tables.module'); } },
            { path: 'maps', loadChildren: function () { return System.import('./maps/maps.module'); } }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
