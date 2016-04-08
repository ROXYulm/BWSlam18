(function () {
    'use strict';

    angular.module('psadmin').filter('entryOfId', function () {
        return function (id, list) {
            var matching = list.filter(function (entry) {
                return entry.id == id;
            });
            return matching.length > 0 ? matching[0] : null;
        };
    });
})();