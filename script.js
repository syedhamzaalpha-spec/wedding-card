
/* =====================================
   BODY LOCK
===================================== */

document.body.classList.add("no-scroll");


/* =====================================
   OPEN INVITATION
===================================== */

const openButton =
    document.getElementById("openInvitation");

const opening =
    document.getElementById("opening");

const mainContent =
    document.getElementById("mainContent");


openButton.addEventListener("click", function () {

    opening.classList.add("hide");

    mainContent.classList.add("show");

    document.body.classList.remove("no-scroll");

});


/* =====================================
   GOLD PARTICLES
===================================== */

const particlesContainer =
    document.getElementById("particles");


for (let i = 0; i < 35; i++) {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 6 + "s";

    const size =
        2 + Math.random() * 4;

    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";

    particlesContainer.appendChild(particle);
}


/* =====================================
   COUNTDOWN
===================================== */

/*
    IMPORTANT:

    Yahan apni actual wedding date
    aur time set karna hai.

    Format:

    YYYY-MM-DDTHH:MM:SS
*/

const weddingDate =
    new Date("2026-11-11T19:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").innerText =
            "00";

        document.getElementById("hours").innerText =
            "00";

        document.getElementById("minutes").innerText =
            "00";

        document.getElementById("seconds").innerText =
            "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
            1000
        );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");


    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(function (element) {

    observer.observe(element);

});

