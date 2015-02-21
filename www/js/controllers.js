angular.module('starter.controllers', [])

.controller('DashCtrl', function($localStorage, $scope) {
  $scope.$storage = $localStorage.$default({
    task : []
  });
  $scope.getTaskList = $scope.$storage.task;
  $scope.lists = $localStorage.task;


    var listData = $scope.lists;
    
  for (var i = 0; i < listData.length; i++) {
      console.log(listData[i].id);
      // if (listData[i].id === parseInt(chatId)) {
      //   return listData[i];
      // }
    }
    //

  $scope.submit = function(name, project, description){
    var listData = $scope.lists;
    for (var i = 0; i < listData.length; i++) {
      console.log(listData[i].id);
      // if (listData[i].id === parseInt(chatId)) {
      //   return listData[i];
      // }
    }
    // return null;

    $scope.$storage.task.push({
      id: name,
      name: name,
      project: project,
      description: description
    });
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
