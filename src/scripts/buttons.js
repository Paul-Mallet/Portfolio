import { gsap } from "gsap";

document.addEventListener("astro:page-load", () => {
    const path = window.location.pathname;
    const dlMode_btn = document.querySelector(".left .dl_mode");
    const signature_div = document.querySelector(".left .signature");
    const sound_btn = document.querySelector(".right .sound");
    const socials_links = document.querySelector(".right .hand_socials");
 
    // HANDWRITING //
    if(path === "/") {
        const dlMode = document.querySelector(".dl-mode");
        dlMode_btn.addEventListener("mouseover", () => {
            dlMode.classList.remove("disp");
        });

        const signature = document.querySelector(".signature");
        signature_div.addEventListener("mouseover", () => {
            signature.classList.remove("disp");
        });

        const sound = document.querySelector(".sound");
        sound_btn.addEventListener("mouseover", () => {
            sound.classList.remove("disp");
        });

        const socials = document.querySelector(".socials");
        socials_links.addEventListener("mouseover", () => {
            socials.classList.remove("disp");
        });
    }

    // DARK MODE //
    const dark_icon = document.querySelector(".left .dl_mode .dark_icon");
    const light_icon = document.querySelector(".left .dl_mode .light_icon");
    const doc = document.documentElement;

    dlMode_btn.addEventListener("click", () => {
        doc.classList.toggle("dark");

        if(doc.classList.contains("dark")) {
            gsap.to(dark_icon, { duration: .24, opacity: 0, scale: 0, ease: "back.in", });
            gsap.to(light_icon, { delay: .16, duration: .24, opacity: .4, scale: 1, ease: "back.out", });
            localStorage.setItem("theme", "dark");
        } else {
            gsap.to(light_icon, { duration: .24, opacity: 0, scale: 0, ease: "back.in", });
            gsap.to(dark_icon, { delay: .16, duration: .24, opacity: .4, scale: 1, ease: "back.out", });
            localStorage.setItem("theme", "");
        }
    });

    // SIGNATURE //
    const signature_container = document.querySelector(".left .hand_signature");

    function getUrl()
    {
        if(path === "/") {
            signature_container.firstElementChild.classList.remove("none");
            signature_container.lastElementChild.classList.add("none");
        } else {
            signature_container.firstElementChild.classList.add("none");
            signature_container.lastElementChild.classList.remove("none");
        }
    }
    getUrl();

    // GSAP //
    const containerSign = document.querySelector(".left .hand_signature .signature");
    const str = "Paul . Mallet";
    const words = str.split(" ");
    let i = 0;

    while (i < words.length) {
        const div = document.createElement("div");
        div.setAttribute("style", "position:relative;display:inline-block;");
        let j = 0;
        while (j < words[i].length) {
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

    const backLink = document.querySelector(".left .hand_signature a");

    document.addEventListener("keydown", (e) => {
        if (e.defaultPrevented) {
            return;
        }
        if (e.key === "Escape") {
            backLink.click();
        }
        return;
    });

    // SOUND //
    const audio = document.querySelector(".hand_sound button audio");
    sound_btn.addEventListener("click", toggle);

    function toggle() {
        const not_svg = document.querySelector(".hand_sound button .not")
        if (not_svg.getAttribute("class") === "not none") {
            audio.pause();
            not_svg.classList.remove("none");
        } else {
            audio.play();
            audio.volume = 0.03;
            not_svg.classList.add("none");
        }
    }
});