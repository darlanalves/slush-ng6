import { di } from 'angular-di';
import { IndexController } from './index.controller';

/**
 * @private
 */
const index = di.module();

index.controller({
    IndexController
});

export default index;
