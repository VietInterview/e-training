(function () {
  'use strict';

  angular
    .module('users')
    .controller('UserViewController', UserViewController);

  UserViewController.$inject = ['$scope', '$state', '$timeout', '$rootScope','$window','userResolve', 'Authentication', 'Notification', 'UsersService','CourseMembersService', 'UserLogsService', 'GroupsService','CertificatesService', 'CourseEditionsService','EditionSectionsService','CourseAttemptsService', 'treeUtils', '_'];

  function UserViewController($scope, $state, $timeout, $rootScope, $window, user, Authentication, Notification, UsersService, CourseMembersService, UserLogsService, GroupsService, CertificatesService, CourseEditionsService, EditionSectionsService, CourseAttemptsService, treeUtils,  _) {
    var vm = this;
    vm.authentication = Authentication;    
    vm.user = user;
    vm.edit = edit;
    if ($rootScope.viewerRole=='admin') 
        vm.logs = UserLogsService.userLogsByAdmin({userId:vm.user._id});
    else
        vm.logs = UserLogsService.userLogs({userId:vm.user._id});
    vm.members = [];
    vm.certificates = [];
    vm.skills  = [];
    
    function edit() {
       if ($rootScope.viewerRole=='admin') 
           $state.go('admin.workspace.users.edit', {userId:vm.user._id});
       else
           $state.go('workspace.users.edit');
    }
    
    vm.groups = GroupsService.listOrganizationGroup( function() {
        var tree = treeUtils.buildGroupTree(vm.groups);
        if (vm.user.group) {
            var selectNode = treeUtils.findGroupNode(tree, vm.user.group);
            selectNode.selected = true;
        }
        $timeout(function() {
            $("#orgTree").fancytree({
                checkbox: true,
                selectMode:1,
                titlesTabbable: true,
                disabled: true,
                autoScroll: true,
                generateIds: true,
                source: tree,
               
            });
        });
   }); 
    
    vm.members = CourseMembersService.byUser({userId:vm.user._id},function() {
        vm.members = _.filter(vm.members,function(member) {
            return member.role =='student';
        });
        vm.courseCount = vm.members.length;
        _.each(vm.members,function(member) {
            member.timeSpent = 0;
            member.percentage = 0;
            CertificatesService.byMember({memberId:member._id},function(certificate) {
                vm.certificates.push( certificate);
            },function() {
            })
            CourseEditionsService.byCourse({courseId:member.course._id},function(edition) {
                member.edition = edition;
                if (member.enrollmentStatus =='in-study') {
                    var sections = EditionSectionsService.byEdition({editionId:edition._id}, function() {
                        var attempts = CourseAttemptsService.byCourseAndMember({editionId:edition._id,memberId:member._id},function() {
                            var total =0;
                            var complete = 0;
                            _.each(sections,function(section) {
                                if (section.hasContent) {
                                    var read = _.find(attempts,function(attempt) {
                                        return attempt.section == section._id && attempt.status=='completed';
                                    });
                                    total++;
                                    if (read)
                                        complete++;
                                }
                            });
                            member.percentage = Math.floor(complete * 100 / total);
                            _.each(attempts,function(attempt) {
                                var startTime = new Date(attempt.start);
                                var endTime = new Date(attempt.end);
                                member.timeSpent += (endTime.getTime() - startTime.getTime())/1000;
                            });
                        });
                    });
                }
            });
        });
        
        
        
    })
  }
}());