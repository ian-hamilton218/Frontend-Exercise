(function () {
	'use strict';

	angular
	.module('core')
	.controller('HeaderController', HeaderController);

	HeaderController.$inject = [ '$scope', '$state', 'Authentication', 'menuService' ];

	function HeaderController ($scope, $state, Authentication, menuService) {
		var vm = this;

		vm.isCollapsed = false;

		vm.currentUser = 'teacher@school.org';

		vm.userMenu = [
			{
				type: 'user',
				displayLabel: 'student@school.org'
			},
			{
				type: 'settings',
				displayLabel: 'Settings'
			},
			{
				type: 'signOut',
				displayLabel: 'Sign Out'
			}

		];

		vm.onClick = function (path, value) {
			if (path === 'user') {
				if (value === 'student@school.org') {
					vm.userMenu[ 0 ].displayLabel = 'teacher@school.org';
					vm.currentUser = 'student@school.org';
				} else {
					vm.userMenu[ 0 ].displayLabel = 'student@school.org';
					vm.currentUser = 'teacher@school.org';
				}
			}

		};

		vm.goTo = function (page) {
			$state.go();
		};

		$scope.$on('$stateChangeSuccess', stateChangeSuccess);

		function stateChangeSuccess () {
			// Collapsing the menu after navigation
			vm.isCollapsed = false;
		}
	}
}());
