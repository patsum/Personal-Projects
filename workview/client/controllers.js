angular.module('workView.controllers', [])

.controller('HomeController', ['$scope', '$location', function ($scope, $location) {

$(document).ready(function () {
$('#resbutton').click(goToResume)
function goToResume(){
    $location.path('/resume')
}
$('#clubutton').click(goToClue)
function goToClue(){
    $location.path('/clue')
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
 .controller('ClueController',  ['$scope', '$location', function ($scope, $location) {
document.addEventListener("DOMContentLoaded", function () {

    // function insertClues(){
    for (let i = 1; i <= 100; i++) {
        var clue = document.createElement('h3');
        clue.innerHTML = 'Clue ' + i;
        clue.addEventListener('click', function (i) {
            alert("Clue " + i + ": " + friends[i % 5] + " did it in the " + locations[i % 10] + " with a " + weapons[i % 20]);
        }.bind(null, i));
        document.body.appendChild(clue);
    };
    // }
    var locations = ['kitchen', 'bottom shelf', 'stratosphere', 'clutches of romance',
        'super bowl', 'paint can', 'eye of the beholder', 'study', 'copy room', 'heat of the moment'];

    var friends = ['Gundersen', 'Chauncey', 'Col. Mustard', 'Rockman', 'Zero'];

    var weapons = ['sausage', 'ball bearing', 'linux-based OS',
        'soft and gentle touch', 'fear of rice',
        'great disturbance in the force', 'whoopee cushion', 'headache',
        'firm handshake', 'bad pun', 'boolean', '360 Indy Nosebone',
        'song, softly', 'lack of moral compass', 'death thingy', 'boomy gun',
        'rooty-tooty point-and-shooty', 'full-stack development program',
        'post-modern expression', 'soggy napkin'];


    // function getRandomInt(0, 19) {
    // min = Math.ceil(min);
    //   max = Math.floor(max);
    //   var i = Math.floor(Math.random() * (max - min)) + min;
    // }

})
 
}]); 
