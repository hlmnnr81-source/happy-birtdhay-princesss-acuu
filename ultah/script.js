const opening =
    document.getElementById("opening");

const main =
    document.getElementById("main");

const openButton =
    document.getElementById("openButton");

const bigHeart =
    document.getElementById("bigHeart");

const music =
    document.getElementById("music");



/* =================================
   FLOATING HEARTS
================================= */

function createHearts(amount = 20) {

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        heart.textContent =
            Math.random() > .25
                ? "♥"
                : "♡";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            12 + Math.random() * 18 + "px";

        heart.style.animationDuration =
            3 + Math.random() * 4 + "s";

        heart.style.animationDelay =
            Math.random() * .8 + "s";

        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 8000);

    }

}



/* =================================
   PUISI
================================= */

function showPoem() {

    const lines =
        document.querySelectorAll(
            ".poem-line"
        );


    lines.forEach((line, index) => {

        setTimeout(() => {

            line.classList.add("show");

        }, 700 + index * 650);

    });

}



/* =================================
   OPENING
================================= */

openButton.addEventListener(
    "click",
    () => {

        /*
         * Love membesar
         * kemudian menghilang
         */

        bigHeart.animate(

            [
                {
                    transform:
                        "scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        "scale(1.4)",
                    opacity: 1
                },

                {
                    transform:
                        "scale(4)",
                    opacity: 0
                }
            ],

            {
                duration: 700,

                easing:
                    "cubic-bezier(.2,.8,.2,1)",

                fill: "forwards"
            }

        );


        /*
         * Love bertebaran
         */

        createHearts(65);


        /*
         * Setelah opening selesai
         */

        setTimeout(() => {

            opening.classList.add(
                "hidden"
            );

            main.classList.remove(
                "hidden"
            );


            /*
             * MUSIK LANGSUNG PLAY
             */

            music.volume = 0.55;

            music.play().catch(() => {

                console.log(
                    "Browser menolak autoplay."
                );

            });


            /*
             * Puisi mulai muncul
             */

            showPoem();


            createHearts(15);


            window.scrollTo(
                0,
                0
            );

        }, 700);

    }
);



/* =================================
   CAKE / WISH
================================= */

const wishButton =
    document.getElementById(
        "wishButton"
    );

const wishText =
    document.getElementById(
        "wishText"
    );


wishButton.addEventListener(
    "click",
    () => {

        const flames =
            document.querySelectorAll(
                ".flame"
            );


        flames.forEach(flame => {

            flame.classList.add(
                "extinguishing"
            );

        });


        wishText.textContent =
            "Wish made. Semoga satu per satu jadi kenyataan. ❤️";


        wishButton.textContent =
            "Wish Made ✨";


        createHearts(35);

    }
);



/* =================================
   AMPLOP SURAT
================================= */

const envelope =
    document.getElementById(
        "envelope"
    );

const letterText =
    document.getElementById(
        "letterText"
    );


function toggleEnvelope() {

    envelope.classList.toggle(
        "open"
    );


    if (
        envelope.classList.contains(
            "open"
        )
    ) {

        letterText.textContent =
            "Surat kecil khusus buat kamu ❤️";

        createHearts(18);

    }

    else {

        letterText.textContent =
            "Tap the envelope 💌";

    }

}


envelope.addEventListener(
    "click",
    toggleEnvelope
);


envelope.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            toggleEnvelope();

        }

    }
);



/* =================================
   FOTO LIGHTBOX
================================= */

const lightbox =
    document.getElementById(
        "lightbox"
    );

const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );

const lightboxTitle =
    document.getElementById(
        "lightboxTitle"
    );

const lightboxStory =
    document.getElementById(
        "lightboxStory"
    );

const closeLightbox =
    document.getElementById(
        "closeLightbox"
    );


document
    .querySelectorAll(
        ".polaroid"
    )
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const photo =
                    card.querySelector(
                        "img"
                    );

                lightboxImage.src =
                    photo.src;

                lightboxTitle.textContent =
                    card.dataset.title || "Memory";

                lightboxStory.textContent =
                    card.dataset.story || "";

                lightbox.classList.add(
                    "show"
                );

            }
        );

    });


function closeBox() {

    lightbox.classList.remove(
        "show"
    );

    lightboxImage.src = "";

}


closeLightbox.addEventListener(
    "click",
    closeBox
);


lightbox.addEventListener(
    "click",
    event => {

        if (
            event.target === lightbox
        ) {

            closeBox();

        }

    }
);



/* =================================
   HEARTS TERUS BERGERAK
================================= */

setInterval(() => {

    if (
        !main.classList.contains(
            "hidden"
        )
    ) {

        createHearts(2);

    }

}, 1900);