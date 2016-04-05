import { di } from 'angular-di';
import ng from 'angular';
import router from 'angular-ui-router';

import routes from 'routes';

import user from 'user/module';
import components from 'component/module';

// regular module names can be included here as well
const dependencies = [
    router,
    user,
    components
];

/**
 * @private
 */
const Application = di.module(dependencies);
const runApp = () => Application.run(document.body);

Application.routes(routes);
angular.element(document).ready(runApp);

export default Application;
