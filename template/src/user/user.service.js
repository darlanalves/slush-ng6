import { di } from 'angular-di';

/**
 * User related business/app logic
 */
class UserService {

    constructor() {
        this._user = { name: 'John' };
    }

    getUser() {
        return this._user;
    }
}

di.inject(UserService, '');

export default UserService;
