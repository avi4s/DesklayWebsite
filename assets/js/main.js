function readMore1() { //finds function
    var dots = document.getElementById("dots2"); //returns element that has the ID attribute with value
    var moreText = document.getElementById("more2"); // '' '' searches for more2
    var btnText = document.getElementById("myBtn2"); // '' '' searches for myBtn2

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; //button says read more to show more text
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; //button says read less to show less text
        moreText.style.display = "inline";
    }
}
function readMore2() { //finds function
    var dots = document.getElementById("dots"); //returns element that has the ID attribute with value, searches for dots
    var moreText = document.getElementById("more"); // '' '' searches for more
    var btnText = document.getElementById("myBtn"); // '' '' searches for myBtn

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; //button says read more to show more text
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; //button says read less to show less text
        moreText.style.display = "inline";
    }
}
function readMore3() { //finds function
    var dots = document.getElementById("dots3"); //returns element that has the ID attribute with value, searches for dots
    var moreText = document.getElementById("more3"); // '' '' searches for more
    var btnText = document.getElementById("myBtn3"); // '' '' searches for myBtn

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; //button says read more to show more text
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; //button says read less to show less text
        moreText.style.display = "inline";
    }
}
function readMore4() { //finds function
    var dots = document.getElementById("dots4"); //returns element that has the ID attribute with value, searches for dots
    var moreText = document.getElementById("more4"); // '' '' searches for more
    var btnText = document.getElementById("myBtn4"); // '' '' searches for myBtn

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; //button says read more to show more text
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; //button says read less to show less text
        moreText.style.display = "inline";
    }
}
let mybutton = document.getElementById("myScrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function ProjectManagerSec(){
    document.getElementById('row1').style.display='flex'
    document.getElementById('row2').style.display='none'
    document.getElementById('row3').style.display='none'
    document.getElementById('row4').style.display='none'
    document.getElementById('row5').style.display='none'
    document.getElementById('projectManagerli').style.fontWeight='bold'
    document.getElementById('reactDeveloperli').style.fontWeight='normal'
    document.getElementById('uiuxDesignerli').style.fontWeight='normal'
    document.getElementById('productDesignerli').style.fontWeight='normal'
    document.getElementById('bubbleTeamli').style.fontWeight='normal'
}
function ProductManagerSec(){
    document.getElementById('row1').style.display='none'
    document.getElementById('row2').style.display='flex'
    document.getElementById('row3').style.display='none'
    document.getElementById('row4').style.display='none'
    document.getElementById('row5').style.display='none'
    document.getElementById('bubbleTeamli').style.fontWeight='normal'
    document.getElementById('reactDeveloperli').style.fontWeight='normal'
    document.getElementById('uiuxDesignerli').style.fontWeight='normal'
    document.getElementById('productDesignerli').style.fontWeight='bold'
    document.getElementById('projectManagerli').style.fontWeight='normal'
}
function uiuxDesignerSec(){
    document.getElementById('row1').style.display='none'
    document.getElementById('row2').style.display='none'
    document.getElementById('row3').style.display='flex'
    document.getElementById('row4').style.display='none'
    document.getElementById('row5').style.display='none'
    document.getElementById('bubbleTeamli').style.fontWeight='normal'
    document.getElementById('reactDeveloperli').style.fontWeight='normal'
    document.getElementById('uiuxDesignerli').style.fontWeight='bold'
    document.getElementById('productDesignerli').style.fontWeight='normal'
    document.getElementById('projectManagerli').style.fontWeight='normal'
}
function reactDeveloperSec(){
    document.getElementById('row1').style.display='none'
    document.getElementById('row2').style.display='none'
    document.getElementById('row3').style.display='none'
    document.getElementById('row4').style.display='flex'
    document.getElementById('row5').style.display='none'
    document.getElementById('reactDeveloperli').style.fontWeight='bold'
    document.getElementById('uiuxDesignerli').style.fontWeight='normal'
    document.getElementById('productDesignerli').style.fontWeight='normal'
    document.getElementById('projectManagerli').style.fontWeight='normal'
    document.getElementById('bubbleTeamli').style.fontWeight='normal'
}
function bubbleTeamSec(){
    document.getElementById('row1').style.display='none'
    document.getElementById('row2').style.display='none'
    document.getElementById('row3').style.display='none'
    document.getElementById('row4').style.display='none'
    document.getElementById('row5').style.display='flex'
    document.getElementById('bubbleTeamli').style.fontWeight='bold'
    document.getElementById('reactDeveloperli').style.fontWeight='normal'
    document.getElementById('uiuxDesignerli').style.fontWeight='normal'
    document.getElementById('productDesignerli').style.fontWeight='normal'
    document.getElementById('projectManagerli').style.fontWeight='normal'
}
let items = document.querySelectorAll('.carousel .uiuxCarousels')

    items.forEach((el) => {
        const minPerSlide = 6
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
    $(function () {
        $("*[include-html]").each(function () {
          var t = $(this).attr("include-html"),
            u = this.id;
          jQuery.ajax({
            url: t,
            success: function (t) {
              $("#" + u).html(t);
            },
            error: function (n, c, i) {
              var s = n.status + ": " + n.statusText;
              $("#" + u).html(t + "-" + s);
            },
          });
        });
      });
