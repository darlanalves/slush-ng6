import { di } from 'angular-di';

import { UserService } from './user.service';

/**
 * User module
 * @private
 */
const User = di.module();

User.service({
    UserService
});

export default User;
