//---

const Routers = [{
      path: '/',
      indexRoute: {
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./components/home'))
          }, 'home')
        },
      },
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./components/app'))
        }, 'app')
      },   
      childRoutes: [
        {
          path: 'about',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/about'))
            }, 'about')
          },
        }, {
          path: 'list',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/list'))
            }, 'list')
          },
        },
      ],
}];

export default Routers
