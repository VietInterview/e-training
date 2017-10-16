(function() {
  'use strict';

  // Courses controller
  angular
    .module('lms')
    .controller('CoursesStudyScormController', CoursesStudyScormController);

  CoursesStudyScormController.$inject = ['$scope', '$state', '$window', 'ScormsService', 'ExamsService', 'VideosService', 'EditionSectionsService', 'Authentication', 'AttemptsService', 'editionResolve', 'CoursesService', 'Notification', 'sectionResolve', 'memberResolve', 'treeUtils', '$translate', '$q', '_', '$sce'];

  function CoursesStudyScormController($scope, $state, $window, ScormsService, ExamsService, VideosService, EditionSectionsService, Authentication, AttemptsService, edition, CoursesService, Notification, section, member, treeUtils, $translate, $q, _, $sce) {
    var vm = this;
    vm.edition = edition;
    vm.member = member;
    vm.section = section;
    if (vm.section.scorm) {
      vm.scorm = ScormsService.get({
        scormId: vm.section.scorm
      }, function() {
        vm.attempt = new AttemptsService();
        vm.attempt.section = vm.section._id;
        vm.attempt.edition = vm.edition._id;
        vm.attempt.course = vm.edition.course;
        vm.attempt.member = vm.member._id;
        vm.attempt.status = 'initial';
        vm.attempt.$save();
        vm.scorm.packageUrl = $sce.trustAsResourceUrl(vm.scorm.packageUrl);
        $('iframe#packageUrl').load(function() {
          setTimeout(function () {
            var frame = $('iframe#packageUrl').contents();
            $(frame).find("#divSwf").css({'width': '100%', 'height': '100%'});
            $(frame).find("object").attr('width', '442vh').attr('height', '100%');
            $(frame).find('[name="scale"]').remove();
            $(frame).find('#presentation').css({'max-width': '100%!important', 'max-height': '100%!important'});
          }, 800);
        });
      });
    }

    $scope.$on('$stateChangeStart', function() {
      if (vm.attempt) {
        vm.attempt.status = 'completed';
        vm.attempt.end = new Date();
        if (vm.attempt._id)
          vm.attempt.$update();
        else
          vm.attempt.$save();
      }
    });
  }
}());
