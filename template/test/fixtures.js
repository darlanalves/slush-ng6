import { fixtures } from 'karma-fixture-loader';

fixtures.setPath('/test/fixture');

// browserify won't pick up the loader via karma config
beforeAll(done => fixtures.load(done));

export { fixtures };