angular.module('components', [])
.component("switch", {
    templateUrl: "components/switch.html",
    transclude: true,
    bindings: {
       opened: "=?",
       closed: "=?"
    },
    require:{
        model:'ngModel'
    },
    controller: function ($scope) {
        this.innerModel = false;
        this.$onInit = () =>{
            this.innerModel = this.model.$modelValue;
            this.model.$render = () =>{
                this.innerModel = this.model.$modelValue;
            }
        }
       $scope.toggle = function($event) {
          if(this.closed) return;
          this.$ctrl.opened = !$ctrl.opened;
          this.model.$setViewValue(this.innerModel)
          // new Event()
          $event.stopPropagation()
       };
    }
 })