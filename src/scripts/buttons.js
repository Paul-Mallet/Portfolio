import { gsap } from "gsap";

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

    // GSAP //
    const containerSign = document.querySelector(".left .hand_signature .signature");
    const str = "Paul . Mallet";
    const words = str.split(" ");
    let i = 0;

    while (i < words.length)
    {
        const div = document.createElement("div");
        div.setAttribute("style", "position:relative;display:inline-block;");
        let j = 0;
        while (j < words[i].length)
        {
            const inDiv = document.createElement("div");
            inDiv.setAttribute("style", "position:relative;display:inline-block;");
            inDiv.textContent = words[i][j];
            if (words[i][j] === ".")
            {
                inDiv.style.color = "#de4900";
            }
            div.append(inDiv);
            j++;
        }
        containerSign.append(div);
        i++;
    }

    const divsSign = document.querySelectorAll(".left .hand_signature .signature div div");
    const divsBack = document.querySelectorAll(".left .hand_signature a .back div div");
    const divIcon = document.querySelector(".left .hand_signature a .icon");

    gsap.from(divsSign, { duration: 0.72, opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: "back.out", stagger: 0.02 });
    gsap.from(divsBack, { duration: 0.72, opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: "back.out", stagger: 0.02 });
    gsap.from(divIcon, { delay: 0.24, duration: 0.48, opacity: 0, scale: 0, x: 40, transformOrigin: "0% 50%", ease: "back.out" });

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