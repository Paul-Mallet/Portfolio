const audio = new Audio("sounds/background.mp3");
const sound_btn = document.querySelector(".right .hand_sound button");
sound_btn.addEventListener("click", toggle);

function toggle()
{
    const not = document.querySelector(".hand_sound button .not")
    console.log(not.classList.value);
    if (not.getAttribute("class") === "not play")
    {
        audio.pause();
        not.classList.remove("play");
        localStorage.removeItem("bg_sound");
    }
    else
    {
        audio.play();
        audio.volume = 0.08;
        not.classList.add("play");
        localStorage.setItem("bg_sound", "play");
    }
}