document.querySelector("#login-btn").onclick = () => {
    document.querySelector(".login-form-container").classList.toggle("active");
};

document.querySelector("#close-login-form").onclick = () => {
    document.querySelector(".login-form-container").classList.remove("active");
};

window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active");
    } else {
        document.querySelector(".header").classList.remove("active");
    }
};

document.querySelector(".home").onmousemove = (e) => {
    document.querySelectorAll(".home-parallax").forEach((elm) => {
        let speed = elm.getAttribute("data-speed");

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
};

document.querySelector(".home").onmouseleave = (e) => {
    document.querySelectorAll(".home-parallax").forEach((elm) => {
        elm.style.transform = `translateX(0px) translateY(0px)`;
    });
};

var swiper = new Swiper(".vehicles-slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".featured-slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    console.log("ok nè");
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username == "admin@gmail.com" && password == "123456") {
        alert("Login successfully");
        window.location = "index.html"; // Redirecting to other page.
        return false;
    } else {
        attempt--; // Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        alert(
            "Try username: \"admin@gmail.com\" and password: \"123456\""
        );
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
};
