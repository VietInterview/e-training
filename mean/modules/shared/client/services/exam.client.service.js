(function () {
  'use strict';

  angular
  .module('shared')
    .service('examUtils', ['SubmissionsService','ExamsService','GroupsService','QuestionsService','treeUtils', '$q','_',
        function (SubmissionsService,ExamsService,GroupsService,QuestionsService,treeUtils, $q,_) {
            function candidateScoreBySubmit(candidateId,examId,submissionId) {
                return $q(function(resolve, reject) {
                    ExamsService.get({examId:examId},function(exam) {
                        SubmissionsService.get({submissionId:submissionId},function(submit) {
                            if (exam.questionSelection=='auto') {
                               var correct =  _.filter(submit.answers, function(answer) {
                                    return (answer.isCorrect) ;
                                }).length;
                               resolve(correct * 100 / exam.questionNumber);
                            }
                            if (exam.questionSelection=='manual') {
                                var total = 0;
                                var score;
                                _.each(exam.questions,function(question) {
                                    total += question.score;
                                    answer = _.filter(submit.answers,function(obj) {
                                        return obj.question == question.id;
                                    });
                                    if (answer && answer.isCorrect)
                                        score += question.score;
                                })
                                resolve(score * 100 / total);
                             }
                        });
                    }); 
                });                    
            }
            return {
                candidateProgress: function(candidateId,examId) {
                    return $q(function(resolve, reject) {
                        var exam = ExamsService.get({examId:examId}, function() {
                            var submits = SubmissionsService.byCandidate({candidateId:candidateId},function() {
                                var progress  =  { percentage: Math.floor(submits.length * 100 / exam.maxAttempt),count:submits.length};
                                resolve(progress);
                            });
                        });
                    });                    
                },
                pendingSubmit: function(candidateId,examId) {
                    return $q(function(resolve, reject) {
                        var exam = ExamsService.get({examId:examId}, function() {
                            var submits = SubmissionsService.byCandidate({candidateId:candidateId},function() {
                                var now = new Date();
                                var pendingSubmit = _.find(submits,function(submit) {
                                    var start = new Date(submit.start);
                                    return submit.status=='pending' && start.getTime() + exam.duration * 60 * 1000 > now.getTime();
                                })
                                var progress  =  {pending:pendingSubmit, percentage: Math.floor(submits.length * 100 / exam.maxAttempt),count:submits.length};
                                resolve(progress);
                            });
                        });
                    });                    
                },
                questionRandom:function(category,level,number) {
                    var questions = [];
                    GroupsService.listQuestionGroup(function(groups) {
                        var nodes = treeUtils.buildGroupTree(groups);
                        var parentNode = treeUtils.findGroupNode(category);
                        var childNodes = treeUtils.buildGroupListInOrder(parentNode);
                        var allPromises = [];
                        _.each(childNodes,function(node) {
                            allPromises.push(QuestionsService.byCategoryAndLevel({groupId:node.data._id,level:level}));
                        });
                        $q.all(allPromises).then(function(questionsList) {
                           _.each(questionsList,function(qList) {
                               questions = questions.concat(qList);
                           });
                           if (!questions.length)
                               resolve([])
                           var randomQuestions = [];
                           while (number) {
                               var index = Math.floor( (Math.random()*questions.length));
                               randomQuestions.push(questions[index]);
                               number--;
                           }
                           resolve(randomQuestions);
                        });
                    });
                },
                candidateScore : function (candidateId,examId) {
                    return $q(function(resolve, reject) {
                        var score = 0;
                        SubmissionsService.byExamAndCandidate({examId:examId,candidateId:candidateId},function(submits) {
                            var latestSubmit = _.max(submits, function(submit){return new Date(submit.start).getTime()});
                            candidateScoreBySubmit.then(function(score) {
                                resolve(score);
                            }) 
                            
                        }); 
                    });                    
                }
                
            };
        }]
    )
}());