console.log('initializing controller')
'use strict';

/**
 * @ngdoc function
 * @name digitalisApp.controller:NosTaches
 * @description
 * # NosTaches
 * Controller of the digitalisApp
 */
angular.module('digitalisApp')
  .controller('NosTaches', function ($scope) { $scope.lists = 
  	{
      name: 'list 1',
      cases: [
      {titre: 'tache 1'},
      {titre: 'tache 2'}
      ]
  },
  {
      name: 'list 2',
      cases:[
      {titre: 'tache 3'},
      {titre: 'tache 4'}
      ]
  }
  ]
   }

   $scope.addList = function () { 
  $scope.lists.push({name: 'new list', cases: []})
}

$scope.addCase = function (list) { 
  list.cases.push({})

})

  
    

 
