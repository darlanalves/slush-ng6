import { di } from 'angular-di';

class UserService {

    constructor() {
        //
    }

    /**
     * @param {number} id   User id
     * @return {Promise<User>}
     */
    getUser(id) {
        // ...
    }
}

di.inject(UserService, '');

export { UserService };
