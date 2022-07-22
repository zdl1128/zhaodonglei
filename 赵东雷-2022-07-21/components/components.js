angular.module('components', [])
   .component('dropdown', {
      templateUrl: "components/dropdown.html",
      transclude: false,
      bindings: {
         url: '@',
         select: "@"
      },
      controller: function ($scope, $http) {

         const fetchData = () => {
            if (this.select == 'undefined') {
               this.select = 0;
            }
            $http.get(this.url)
               .then(
                  (res) => {
                     this.list = res.data
                     console.log(this);
                     console.log($scope)
                  }
               )
               .then(() => {
                  console.log(this, 'sel')
                  this.selected = this.list[this.select].value
               })

         };

         this.$onInit = fetchData;
      }
   })
   .component("switch", {
      templateUrl: "components/switch.html",
      transclude: true,
      bindings: {
         opened: "=?",
         closed: "=?"
      },
      controller: function ($scope) {
         $scope.toggle = ($event) => {
            $event.stopPropagation()
            if(this.closed) return;
            this.opened = !this.opened;
            // new Event()
            
         };
      }
   })
   .component("listitems", {
      templateUrl: "components/listitems.html",
      transclude: true,
      bindings: {
         data: '=',
         url: '<',
         cls: '@'
      },
      controller: function ($scope) {

         $scope.jump = function (href) {
            if(href!='')
            console.log(href)
            href && (window.location.href = href)
         }
      }
   })
   .component('voice', {
      templateUrl: "components/voice.html",
      transclude: false,
      bindings: {
         voice: '='
      },
      controller: function ($scope) {
         // console.log(this)
         $scope.changeVoice = () => {
            // console.log($scope)
            if (this.voice == 0) {
               this.src = "./img/volumeCross.png";
            } else if (this.voice > 0 && (this.voice <= 30)) {
               this.src = "./img/Low.png"
            } else if (this.voice > 30 && (this.voice <= 60)) {
               this.src = "./img/Middle.png"
            } else if (this.voice > 60 && (this.voice <= 100)) {
               this.src = "./img/High.png"
            }
         }
         this.$onInit = () => {
            $scope.changeVoice()
         }
      }
   })