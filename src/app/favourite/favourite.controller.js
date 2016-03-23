export function FavouriteDirective() {
  'ngInject';
  let directive = {
    restrict: 'E',
    // templateUrl: 'app/favourite/favourite.html',
    scope: {
        item: '='
    },
    controller: FavouriteController,
    controllerAs: 'vm',
    template: [
        '<div class="favourite">',
        '<ul>',
        '<li ng-repeat="item in items">',
        '</li>',
        '</ul>',
        '</div>'
      ].join('')
  };
  return directive;
}
class FavouriteController {
  constructor () {
    'ngInject';
  }
}
