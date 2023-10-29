document.addEventListener("astro:page-load", () => {
    // SIGNATURE //

    const signatureDiv = document.querySelector(".left .hand_signature");
    const href = window.location.href;

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
});

document.addEventListener("astro:page-load", () => {
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