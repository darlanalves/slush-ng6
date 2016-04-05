import UserService from './user.service.js';
import fixtures from 'fixtures.js';

describe('UserService', function() {
    let service;

    beforeEach(function () {
        service = new UserService();
    });

    describe('#getUser()', function() {
        it('should return the current user stored on service', function () {
            let user = fixtures.get('user.json');
            service._user = user;

            let returnedUser = service.getUser();
            expect(returnedUser).toBe(user);
        });
    });
});