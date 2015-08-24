(function (root) {
    'use strict';

    var mod = angular.module('book', []);

    mod.controller('TitleController', function ($scope) {
        $scope.title = 'This is the title, man!';
    });

    angular.bootstrap(document, ['book']);

}(this));

// other script file...

(function (root) {
    'use strict';

    angular.element(document).injector().invoke(function ($rootScope) {
        console.log($rootScope.$$childHead.$$watchers.length);
        console.log($rootScope.$$childHead.$$watchersCount);

        $rootScope.$$childHead.$$watchers.pop(); // input watcher was destroy
        $rootScope.$$childHead.$$watchers.pop(); // first interpolation watcher was destroy
        $rootScope.$$childHead.$$watchers.pop(); // second interpolation watcher was destroy
        $rootScope.$$childHead.$$watchers.pop(); // third interpolation watcher was destroy

        console.log($rootScope.$$childHead.$$watchers.length);
        console.log($rootScope.$$childHead.$$watchersCount);
    });

}(this));
