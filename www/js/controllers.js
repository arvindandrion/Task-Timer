angular.module('starter.controllers', [])

.controller('DashCtrl', function(localDB, $localStorage, $scope) {
  $scope.storage = $localStorage.$default({
    task : []
  });
  $scope.getTaskList = $scope.storage.task;

  //Submit Data
  $scope.submit = function(name, project, description){
    var taskList =  $scope.getTaskList;
    var listLength =  parseInt($scope.getTaskList.length) - 1;

    // Store in data
    var data = {
      name: name,
      project: project,
      description: description
    };
    // push data ti local db
    localDB.set(data);
  }

  $scope.removeTask = function(item){
    var index = $scope.getTaskList.indexOf(item)
    $scope.getTaskList.splice(index,1);
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
;
