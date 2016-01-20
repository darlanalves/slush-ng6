import { di } from 'angular-di';

class IndexController {
    constructor(UserService) {
        //
    }
}

di.inject(IndexController, 'UserService');

export { IndexController };