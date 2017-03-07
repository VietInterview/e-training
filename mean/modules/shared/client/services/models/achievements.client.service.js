// Achievements service used to communicate Achievements REST endpoints
(function () {
  'use strict';

  angular
    .module('shared.models')
    .factory('CompetencyAchievementsService', CompetencyAchievementsService);

  CompetencyAchievementsService.$inject = ['$resource'];

  function CompetencyAchievementsService($resource) {
    return $resource('/api/achievements/:achievementId', {
      achievementId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
}());