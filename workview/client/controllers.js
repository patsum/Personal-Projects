angular.module('workView.controllers', [])

.controller('HomeController', ['$scope', '$location', function ($scope, $location) {

$(document).ready(function () {
$('#resbutton').click(goToResume)
function goToResume(){
    $location.path('/resume')
}
})
}])

.controller('PatrickController', ['$scope', '$location', function ($scope, $location) {

 $(document).ready(function () {
            $("#pa_now-list").hide();
            $("#pa_now-btn").click(function () {
                $("#pa_now-list").slideToggle();
            });
            $("#pa_then-list").hide();
            $("#pa_then-btn").click(function () {
                $("#pa_then-list").slideToggle();
            });

            $('.collapsible').collapsible();
            $("#pa_empty-div").mouseover(function(){
        $("#pa_navbar").slideToggle(500);
    });
 })
}])
