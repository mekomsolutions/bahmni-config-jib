'use strict';

angular.module('bahmni.common.displaycontrol.custom')
.directive('immunization', ['observationsService', 'appService', 'spinner','$q', function (observationsService, appService, spinner, $q) {
    var link = function ($scope) {

        $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/immunization.html";

        $scope.immunizations = [];

        
        // If the configration parameter is not present, return an promise that resolves an empty array
        var fetchImmunizationSets = {};
        if ($scope.config.immunizationSets == undefined) {
            var deferred = $q.defer()
            deferred.resolve([])
            fetchImmunizationSets = deferred.promise;
        } else {
            fetchImmunizationSets = spinner.forPromise(observationsService.fetch($scope.patient.uuid, $scope.config.immunizationSets, "latest", undefined, undefined, undefined))
        }

        fetchImmunizationSets.then(function (response) {
            var immunizationSets = response.data;
            immunizationSets = _.map(immunizationSets, function(item, index) {
                var immunization = {}
                immunization.conceptUuid = item.groupMembers[0].conceptUuid;
                immunization.name = item.groupMembers[0].conceptNameToDisplay;
                immunization.value = item.groupMembers[0].valueAsString;
                immunization.fullySpecifiedName = item.groupMembers[0].concept.name;

                if (item.groupMembers.length > 1) {
                    immunization.date = item.groupMembers[1].value;
                }

                return immunization
            });

            // If the configration parameter is not present, return an promise that resolves an empty array
            var fetchImmunizationQuestions = {};    
            if ($scope.config.immunizationQuestions == undefined) {
                var deferred = $q.defer()
                deferred.resolve([])
                fetchImmunizationQuestions = deferred.promise;
            } else {
                fetchImmunizationQuestions = spinner.forPromise(observationsService.fetch($scope.patient.uuid, $scope.config.immunizationQuestions, undefined, undefined, undefined))
            }
            fetchImmunizationQuestions.then(function (response) {
                var immunzationQuestions = response.data;

                immunzationQuestions = _.map(immunzationQuestions, function (item, index) {
                    var immunization =  {};
                    immunization.conceptUuid = item.value.uuid;
                    immunization.name = item.valueAsString;
                    immunization.value = "OBS_BOOLEAN_YES_KEY";
                    immunization.date = item.observationDateTime;
                    immunization.fullySpecifiedName = item.value.name;

                    return immunization
                });

                // Remove possible duplicates in the immunizationsQuestion to keep only the most recent ones.
                var k = 0
                var duplicatesToRemove = [];

                for (k = immunzationQuestions.length - 1; k >= 0; k -= 1) {
                    var itemK = immunzationQuestions[k]
                    var l = 0;
                    for (l = immunzationQuestions.length - 1; l >= 0; l -= 1) {
                        var itemL = immunzationQuestions[l]
                        if (itemK.conceptUuid == itemL.conceptUuid) {
                            if (new Date(itemK.date) > new Date(itemL.date) ) {
                                immunzationQuestions.splice(l)
                            }
                        }
                    }
                }

                // Remove duplicated items between both immunizations list (keep only the most recent one)
                var immunizationQuestionsToRemove = []
                var immunizationSetsToRemove = []

                var i;
                for (i = immunizationSets.length - 1; i >= 0; i -= 1) {

                    var item1 = immunizationSets[i]

                    var j;
                    for (j = immunzationQuestions.length - 1; j >= 0; j -= 1) {

                        var item2 = immunzationQuestions[j];

                        if (item1.conceptUuid == item2.conceptUuid) {
                            if (new Date(item1.date) > new Date(item2.date) ) {
                                immunizationQuestionsToRemove.push(j);
                            } else {
                                immunizationSetsToRemove.push(i);
                            }

                        }
                    }
                }

                immunizationSetsToRemove.forEach(function (value) {
                    immunizationSets.splice(value, 1);
                })

                immunizationQuestionsToRemove.forEach(function (value) {
                    immunzationQuestions.splice(value, 1);
                })

                var allImmunizations = immunizationSets.concat(immunzationQuestions);

                // Order the immunizations based on the config
                $scope.config.immunizationsDisplayed.forEach(function(item1) {
                    allImmunizations.forEach(function (item2) {
                        if (item1 == item2.fullySpecifiedName) {
                            $scope.immunizations.push(item2);
                        }
                    })
                })
            });
        });

    };
        return {
        restrict: 'E',
        link: link,
        template: '<ng-include src="contentUrl"/>'
    }
}]);
