(function () {
  'use strict';

  angular
    .module('cms')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('workspace.lms', {
        abstract: true,
        url: '/lms',
        template: '<ui-view/>'
      })
      .state('workspace.lms.courses', {
        abstract: true,
        url: '/courses',
        template: '<ui-view/>'
      })
      .state('workspace.lms.courses.list', {
        url: '/list',
        templateUrl: '/modules/lms/client/views/list-courses.client.view.html',
        controller: 'MyCoursesListController',
        controllerAs: 'vm',
        data: {
            roles: [ 'user'],
            courseRoles: [ 'teacher','student']
        }
      })
      .state('workspace.lms.courses.outline', {
        url: '/outline/:courseId',
        templateUrl: '/modules/lms/client/views/outline-course.client.view.html',
        controller: 'CoursesOutlineController',
        controllerAs: 'vm',
        resolve: {
          editionResolve: getEdition,
          courseResolve: getCourse
        },
        data: {
          roles: [ 'user'],
          courseRoles: [ 'teacher']
        }
      })
      .state('workspace.lms.courses.section', {
        abstract: true,
        url: '/section',
        template: '<ui-view/>'
      })
      .state('workspace.lms.courses.section.view', {
        abstract: true,
        url: '/view',
        template: '<ui-view/>'
      })
      .state('workspace.lms.courses.section.view.html', {
        url: '/html/:courseId/:sectionId',
        templateUrl: '/modules/lms/client/views/view-html.section-course.client.view.html',
        controller: 'CoursesHTMLSectionController',
        controllerAs: 'vm',
        resolve: {
          sectionResolve: getSection,
          courseResolve: getCourse,
          htmlResolve: getHtml
        },
        data: {
          roles: [ 'user'],
          courseRoles: [ 'teacher']
        }
      })
      .state('workspace.lms.courses.section.view.quiz', {
        url: '/quiz/:courseId/:sectionId',
        templateUrl: '/modules/lms/client/views/view-quiz.section-course.client.view.html',
        controller: 'CoursesQuizSectionController',
        controllerAs: 'vm',
        resolve: {
          sectionResolve: getSection,
          courseResolve: getCourse,
          quizResolve: getQuiz
        },
        data: {
          roles: [ 'user'],
          courseRoles: [ 'teacher']
        }
      })
      .state('workspace.lms.courses.section.view.video', {
        url: '/video/:courseId/:sectionId',
        templateUrl: '/modules/lms/client/views/view-video.section-course.client.view.html',
        controller: 'CoursesVideoSectionController',
        controllerAs: 'vm',
        resolve: {
          sectionResolve: getSection,
          courseResolve: getCourse,
          videoResolve: getVideo
        },
        data: {
          roles: [ 'user'],
          courseRoles: [ 'teacher']
        }
      })
      .state('workspace.lms.courses.section.edit', {
        abstract: true,
        url: '/edit',
        template: '<ui-view/>'
      })
      .state('workspace.lms.courses.section.edit.html', {
        url: '/html/:courseId/:sectionId',
        templateUrl: '/modules/lms/client/views/form-html.section-course.client.view.html',
        controller: 'CoursesHTMLSectionController',
        controllerAs: 'vm',
        resolve: {
          sectionResolve: getSection,
          courseResolve: getCourse,
          htmlResolve: getHtml
        },
        data: {
          roles: [ 'user'],
          courseRoles: [ 'teacher']
        }
      })
      .state('workspace.lms.courses.section.edit.quiz', {
        url: '/quiz/:courseId/:sectionId',
        templateUrl: '/modules/lms/client/views/form-quiz.section-course.client.view.html',
        controller: 'CoursesQuizSectionController',
        controllerAs: 'vm',
        resolve: {
          sectionResolve: getSection,
          courseResolve: getCourse,
          quizResolve: getQuiz
        },
        data: {
          roles: [ 'user'],
          courseRoles: [ 'teacher']
        }
      })
      .state('workspace.lms.courses.section.edit.video', {
        url: '/video/:courseId/:sectionId',
        templateUrl: '/modules/lms/client/views/form-video.section-course.client.view.html',
        controller: 'CoursesVideoSectionController',
        controllerAs: 'vm',
        resolve: {
          sectionResolve: getSection,
          courseResolve: getCourse,
          videoResolve: getVideo
        },
        data: {
          roles: [ 'user'],
          courseRoles: [ 'teacher']
        }
      })
      .state('workspace.lms.courses.grade', {
        url: '/:courseId/:editionId/grade',
        templateUrl: '/modules/lms/client/views/grade-course.client.view.html',
        controller: 'CoursesGradeController',
        controllerAs: 'vm',
        resolve: {
          courseResolve: getCourse,
          schemeResolve: getGradescheme,
          editionResolve: getEdition
        },
        data: {
          roles: ['user'],
          courseRoles: [ 'teacher']
        }
      })
      .state('workspace.lms.courses.study', {
        url: '/:courseId/study',
        templateUrl: '/modules/lms/client/views/study-course.client.view.html',
        controller: 'CoursesStudyController',
        controllerAs: 'vm',
        resolve: {
          courseResolve: getCourse
        },
        data: {
          roles: ['user'],
          courseRoles: [ 'student']
        }
      })
      .state('workspace.lms.courses.gradebooks', {
        url: '/:courseId/gradebooks',
        templateUrl: '/modules/lms/client/views/list-gradebook-course.client.view.html',
        controller: 'CourseGradebooksListController',
        controllerAs: 'vm',
        data: {
          roles: ['user'],
          courseRoles: [ 'teacher']
        }
      })
      .state('workspace.lms.courses.gradebooks.view', {
        url: '/:courseId/gradebooks/:gradebookId',
        templateUrl: '/modules/lms/client/views/view-gradebook-course.client.view.html',
        controller: 'CourseGradebooksController',
        controllerAs: 'vm',
        data: {
          roles: ['user'],
          courseRoles: [ 'student']
        }
      });
  }

  getCourse.$inject = ['$stateParams', 'CoursesService'];

  function getCourse($stateParams, CoursesService) {
    return CoursesService.get({
      courseId: $stateParams.courseId
    }).$promise;
  }
  
  getEdition.$inject = ['$stateParams', 'CourseEditionsService', '$q'];

  function getEdition($stateParams, CourseEditionsService, $q) {
      return $q(function(resolve, reject) {
          CourseEditionsService.byCourse({courseId:$stateParams.courseId},function(data) {
          if (data.length==0) {
              var edition = new CourseEditionsService();
              edition.course = $stateParams.courseId;
              edition.name ='v1.0';
              edition.$save(function() {
                  resolve(edition);
              },function(errorResponse) {
                  reject();
              });
          } else {
              resolve( data[0]);
          }
      });
      });
  }
  
  getGradescheme.$inject = ['$stateParams', 'GradeSchemesService', '$q'];

  function getGradescheme($stateParams, GradeSchemesService, $q) {
      return $q(function(resolve, reject) {
          var scheme = GradeSchemesService.byEdition({editionId:$stateParams.editionId},function(data) {
          resolve(data);
      }, function(err) {
          var scheme = new GradeSchemesService();
          scheme.edition = $stateParams.editionId;
          scheme.$save(function() {
              resolve(scheme);
          },function(errorResponse) {
              reject();
          });
      });
      });
      
  }
  
  getHtml.$inject = ['$stateParams', 'EditionSectionsService','HtmlsService', '$q'];

  function getHtml($stateParams, EditionSectionsService, HtmlsService, $q) {
      return $q(function(resolve, reject) {
          EditionSectionsService.get({sectionId:$stateParams.sectionId},function(section) {
              if (section.html) {
                  HtmlsService.get({htmlId:section.html},function(html) {
                      resolve(html);
                  },function() {
                      reject();
                  })
              } else {
                  var html = new HtmlsService();
                  html.$save(function() {
                      resolve(html);
                  });                  
              }
                  
      }, function(err) {
              reject();
      });
      });
  }
  
  getQuiz.$inject = ['$stateParams', 'EditionSectionsService','ExamsService', '$q'];

  function getQuiz($stateParams, EditionSectionsService, ExamsService, $q) {
      return $q(function(resolve, reject) {
          EditionSectionsService.get({sectionId:$stateParams.sectionId},function(section) {
              if (section.quiz) {
                  ExamsService.get({examId:section.quiz},function(quiz) {
                      resolve(quiz);
                  },function() {
                      reject();
                  })
              } else {
                  var quiz = new ExamsService();
                  quiz.type='quiz';
                  quiz.maxAttempt = 1;
                  quiz.questionSelection = 'manual';
                  quiz.$save(function() {
                      resolve(quiz);
                  });  
              }
                  
      }, function(err) {
              reject();
      });
      });
  }
  
  getVideo.$inject = ['$stateParams', 'EditionSectionsService','VideosService', '$q'];

  function getVideo($stateParams, EditionSectionsService, VideosService, $q) {
      return $q(function(resolve, reject) {
          EditionSectionsService.get({sectionId:$stateParams.sectionId},function(section) {
              if (section.video) {
                  VideosService.get({videoId:section.video},function(video) {
                      resolve(video);
                  },function() {
                      reject();
                  })
              } else {
                  var video = new VideosService();
                  video.$save(function() {
                      resolve(video);
                  });  
              }
                  
      }, function(err) {
              reject();
      });
      });
  }
  
  getSection.$inject = ['$stateParams', 'EditionSectionsService'];

  function getSection($stateParams, EditionSectionsService) {
    return EditionSectionsService.get({
        sectionId: $stateParams.sectionId
    }).$promise;
  }

  newCourse.$inject = ['CoursesService'];

  function newCourse(CoursesService) {
    return new CoursesService();
  }
}());
