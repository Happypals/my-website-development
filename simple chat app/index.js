var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var fireHeading = document.getElementById("fireHeading");

function submitClick() {
  var firebaseRef = firebase.database().ref();
  var messageText = mainText.value;
  firebaseRef.child("XizhouLi").set(messageText);
}
/**
 * Created by jmccoy on 8/12/2015.
 */
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
