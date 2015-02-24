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

    //check if there is data, else add one and increment.
    if(listLength < 0){
      idNum = 1;
    }else{
      idNum = taskList[listLength].id;
      idNum += 1;
      console.log(idNum);
    }
    // Store in data
    var data = {
      id: idNum,
      name: name,
      project: project,
      description: description
    };
    // push data
    localDB.set(data);
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
