(function () {
    'use strict';

    angular.module('ps.sync').run(function (SyncService) {
        window.addEventListener('storage', SyncService.updateScope);
    });
})();