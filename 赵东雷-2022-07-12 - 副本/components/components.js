angular.module('components', [])
   .component('dropdown', {
      templateUrl: "components/dropdown.html",
      transclude: false,
      bindings: {
         url: '@',
      },
      controller: function ($scope, $http) {
         $scope.list = []
         $scope.selected = '1'
         const fetchData = () => {
            $http.get(this.url)
               .then(
                  (res) => {
                     this.list = res.data
                     console.log(this);
                  }
               )
         };
         this.$onInit = fetchData;
      }
   })
   .component("switch", {
      templateUrl: "components/switch.html",
      transclude: true,
      bindings: {
         opened: "=",
         disabled: "="
      },
      controller: function ($scope) {
         $scope.toggle = () => {
            if (this.disabled) return;
            this.opened = !this.opened;
         };
      }
   })