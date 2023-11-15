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

    // DARK MODE //
    const dlMode_btn = document.querySelector(".left .dl_mode");
    const dark_icon = document.querySelector(".left .dl_mode .dark_icon");
    const light_icon = document.querySelector(".left .dl_mode .light_icon");

    dlMode_btn.addEventListener("click", () => {
        const result = dark_icon.classList.toggle("none");
        light_icon.classList.toggle("none");
        if (result)
        {
            gsap.to(dark_icon, { duration: .32, opacity: 0, scale: .5, transformOrigin: "center", ease: "back.in" });
            gsap.to(light_icon, { duration: .32, opacity: .4, scale: 1, transformOrigin: "center", ease: "back.out" });
        }
        else
        {
            gsap.to(dark_icon, { duration: .32, opacity: .4, scale: 1, transformOrigin: "center", ease: "back.out" });
            gsap.to(light_icon, { duration: .32, opacity: 0, scale: .5, transformOrigin: "center", ease: "back.in" });
        }
    });

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
    const backLink = document.querySelector(".left .hand_signature a");

    gsap.from(divsSign, { duration: 0.72, opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: "back.out", stagger: 0.02 });
    gsap.from(divsBack, { duration: 0.72, opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: "back.out", stagger: 0.02 });
    gsap.from(divIcon, { delay: 0.24, duration: 0.48, opacity: 0, scale: 0, x: 40, transformOrigin: "0% 50%", ease: "back.out" });


    document.addEventListener("keydown", (e) => {
        if (e.defaultPrevented)
        {
            return;
        }
        if (e.key === "Escape")
        {
            backLink.click();
        }
        return;
    });

    // SOUND //
    const audio = new Audio("sounds/background.mp3");
    const sound_btn = document.querySelector(".right .hand_sound button");
    sound_btn.addEventListener("click", toggle);

    function toggle()
    {
        const not = document.querySelector(".hand_sound button .not")
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