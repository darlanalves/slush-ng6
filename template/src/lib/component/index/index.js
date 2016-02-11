import { di } from 'angular-di';
import template from './index.html';

/**
 * Index app page
 */
class Index {
    static configure() {
        // istanbul ignore next
        return {
            template,
            selector: 'index',
        };
    }

    constructor(UserService) {
        this.user = UserService.getUser();
    }
}

di.inject(Index, 'UserService');

export { Index };
