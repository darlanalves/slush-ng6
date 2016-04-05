import { di } from 'angular-di';

import Index from './index/index.js';

/**
 * Module with all app components
 * @private
 */
const Components = di.module();

Components.component({
    Index
});

export default Components;