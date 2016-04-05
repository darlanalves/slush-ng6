import Index from './index';

describe('Index', function() {
    let UserService, getCtrl;

    beforeEach(function () {
        UserService = {};
        UserService.getUser = jasmine.createSpy();

        getCtrl = () => new Index(UserService);
    });

    describe('#constructor()', function() {
        it('should export the user profile from UserService', function () {
            let user = {};
            let getUser = UserService.getUser.and.returnValue(user);

            let ctrl = getCtrl();
            expect(ctrl.user).toBe(user);
        });
    });
});