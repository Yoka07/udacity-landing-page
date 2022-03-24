// global varibales
const menu = document.getElementById('navbar__list');
const sections = [...document.querySelectorAll('section')]

/* 
// https://stackoverflow.com/questions/66734872/i-cant-create-a-dynamic-navigation-menu-using-pure-javascript

// Dynamic navigation bar

*/
const nav_menu_items = () => {
    let nav_menu_container = '';

    sections.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;
        nav_menu_container += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });
    // append all elements to the navigation
    menu.innerHTML = nav_menu_container;
}
nav_menu_items();

/* Code for changing active 
            link on clicking */

// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the number

//implementating the actual function

/* Make the current section (at the top of viewport) active 

//https://stackoverflow.com/questions/70939268/i-want-to-add-class-your-active-class-to-section-when-near-top-of-viewport-in

*/

const section_view = document.querySelectorAll('section');

const isInViewport = (section) => {
    const { top } = section.getBoundingClientRect();

    section.classList.toggle('active', top >= 0);
}

const toggleActiveClass = () => {
    sections.forEach(isInViewport);
}

document.addEventListener('scroll', toggleActiveClass);





/* Make the active section's tab active in the navigation bar

// Scroll to anchor ID using scrollTO event

//Change navigation style on scroll

// https://codepen.io/api_05/pen/PoEWqqo
*/

$(document).ready(function() {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function() {
            $(this).removeClass('your-active-class');
        })
        $(this).addClass('your-active-class');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});


function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.menu__link a ').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu__link a').removeClass('your-active-class');
            currLink.addClass('your-active-class');
        } else {
            currLink.removeClass('your-active-class');
        }
    });
};



/*Scroll to top when arrow up clicked BEGIN*/
// https://kristujayanti.edu.in/home/

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    1
});
/*Scroll to top when arrow up clicked END*/


// w3school slideshow
w3.slideshow(".ojum", 1000);

/* onclick para1 show and hide(section 1) */

function myFunction_hide_show() {
    var ap = document.getElementById("hs");
    ap.style.backgroundColor = "black";
    if (ap.style.display === "none") {
        ap.style.display = "block";
    } else {
        ap.style.display = "none";

    }
}

// w3school slideshow (section 2)
w3.slideshow(".bari_image", 1000);

/* onclick event change the text color(section 3)*/
function myFunction_txt_colr(para_m, color) {
    para_m.style.color = color;
}

/*The onmousedown, onmouseup and onclick Events(section 4)*/
function mDown(md) {
    md.innerHTML = "PLease Visit Again";
}

function mUp(md) {
    md.innerHTML = "Thank You";
}


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active