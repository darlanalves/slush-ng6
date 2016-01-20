import index from './index/index.html';

/**
 * @private
 */
const routes = {
    index: {
        url: '',
        template: index,
        controller: 'IndexController as index'
    }
};

export { routes };