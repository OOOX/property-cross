export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/favourite/favourite.html',
        controller: 'MainFavouriteController',
        controllerAs: 'vm'
      });

  $urlRouterProvider.otherwise('/');
}
