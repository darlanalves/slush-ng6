import { di } from 'angular-di';
import ng from 'angular';
import router from 'angular-ui-router';

import { routes } from './routes';

import user from 'user/module';
import index from './index/module';

const dependencies = [
    router,
    user,
    index
];

/**
 * @private
 */
const app = di.module(dependencies);

app.routes(routes);

angular.element(document).ready(() => app.run(document.body) );

export default app;
