(function() {
    'use strict';

// Courses controller
angular
    .module('lms')
    .controller('ExamsGradebookyController', ExamsGradebookyController);

ExamsGradebookyController.$inject = ['$scope', '$state', '$window', 'Authentication', '$timeout', 'editionResolve','courseResolve','memberResolve','gradeResolve', 'Notification','AnswersService', 'OptionsService', 'QuestionsService', 'ExamsService','EditionSectionsService', 'AttemptsService','treeUtils','$translate', '_'];

function ExamsGradebookyController($scope, $state, $window, Authentication, $timeout, edition, course, member, gradescheme, Notification,AnswersService, OptionsService, QuestionsService, ExamsService, EditionSectionsService,AttemptsService ,treeUtils, $translate, _) {
    var vm = this;
    vm.authentication = Authentication;
    vm.edition = edition;
    vm.member = member;
    vm.course = course;
    vm.gradescheme = gradescheme;
    
    
    
}
}());