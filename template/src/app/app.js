import { di } from 'angular-di';
import angular from 'angular';
import { routes } from './routes';

import user from 'user/module';

const dependencies = [
    user
];

/**
 * @private
 */
const app = di.module(dependencies);

app.routes(routes);
app.run(document.body);

export default app;
