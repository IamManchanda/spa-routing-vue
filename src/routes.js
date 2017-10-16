import AppHome from './components/AppHome.vue';
import AppHeader from './components/AppHeader.vue';

const AppUser = resolve => {
  require.ensure(['./components/user/AppUser.vue'], () => {
    resolve(require('./components/user/AppUser.vue'));
  }, 'user');
};

const AppUserDetail = resolve => {
  require.ensure(['./components/user/AppUserDetail.vue'], () => {
    resolve(require('./components/user/AppUserDetail.vue'));
  }, 'user');
};

const AppUserEdit = resolve => {
  require.ensure(['./components/user/AppUserEdit.vue'], () => {
    resolve(require('./components/user/AppUserEdit.vue'));
  }, 'user');
};

const AppUserStart = resolve => {
  require.ensure(['./components/user/AppUserStart.vue'], () => {
    resolve(require('./components/user/AppUserStart.vue'));
  }, 'user');
};

export const routes = [
  {
    path: '',
    name: 'AppHome',
    components: {
      default: AppHome,
      'header-top': AppHeader
    }
  },
  {
    path: '/user/',
    components: {
      default: AppUser,
      'header-top': AppHeader
    },
    children: [
      {
        path: '',
        component: AppUserStart 
      },
      {
        path: ':id',
        component: AppUserDetail,
        beforeEnter: (to, from, next) => {
          console.log('Inside route setup');
          next();
        }
      },
      {
        path: ':id/edit',
        component: AppUserEdit,
        name: 'AppUserEdit' 
      }
    ]
  },
  {
    path: '/redirect-me',
    redirect: {
      name: 'AppUserEdit' 
    }
  },
  {
    path: '*',
    redirect: {
      name: 'AppHome' 
    }
  }
];