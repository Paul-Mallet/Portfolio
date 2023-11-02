document.addEventListener("astro:page-load", () => {
    const href = window.location.href;

    // HANDWRITING //
    if (href === "http://localhost:4321/")
    {
        const dlModeContainer = document.querySelector(".container-dl-mode");
        const dlMode = document.querySelector(".dl-mode");

        dlModeContainer.addEventListener("mouseover", () => {
            dlMode.classList.remove("disp");
        });

        const signatureContainer = document.querySelector(".container-signature");
        const signature = document.querySelector(".signature");

        signatureContainer.addEventListener("mouseover", () => {
            signature.classList.remove("disp");
        });

        const soundContainer = document.querySelector(".container-sound");
        const sound = document.querySelector(".sound");

        soundContainer.addEventListener("mouseover", () => {
            sound.classList.remove("disp");
        });

        const socialsContainer = document.querySelector(".container-socials");
        const socials = document.querySelector(".socials");

        socialsContainer.addEventListener("mouseover", () => {
            socials.classList.remove("disp");
        });
    }

    // SIGNATURE //
    const signatureDiv = document.querySelector(".left .hand_signature");

    function getUrl()
    {
        if (href === "http://localhost:4321/")
        {
            signatureDiv.firstChild.classList.remove("none");
            signatureDiv.lastChild.classList.add("none");
        }
        else
        {
            signatureDiv.firstChild.classList.add("none");
            signatureDiv.lastChild.classList.remove("none");
        }
    }
    getUrl();

    // SOUND //
    const audio = new Audio("sounds/background.mp3");
    const sound_btn = document.querySelector(".right .hand_sound button");
    sound_btn.addEventListener("click", toggle);

    function toggle()
    {
        const not = document.querySelector(".hand_sound button .not")
        console.log(not.classList.value);
        if (not.getAttribute("class") === "not none")
        {
            audio.pause();
            not.classList.remove("none");
            localStorage.removeItem("bg_sound");
        }
        else
        {
            audio.play();
            audio.volume = 0.08;
            not.classList.add("none");
            audio.loop = true;
            localStorage.setItem("bg_sound", "none");
        }
    }
});