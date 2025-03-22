import { gsap } from "gsap";

document.addEventListener("astro:page-load", () => {
    const href = window.location.href;

    if (href === "http://localhost:4321/about" || href === "https://portfolio-pm.com/about")
    {
        // NEXT-BTN //
        const path = document.querySelector(".about_line #path");
        const all_boxes = document.querySelectorAll(".box");
        const all_btn_nxt = document.querySelectorAll(".box .btn_nxt");
        const all_btn_prv = document.querySelectorAll(".box .btn_prv");
        const all_circles = document.querySelectorAll("#pop circle");

        const roadObj = {
            box: all_boxes,
            circle: all_circles,
            btn_nxt: all_btn_nxt,
            btn_prv: all_btn_prv,
            animation_nxt: ["anim1", "anim2", "anim3", "anim4", "anim5", "anim6", "anim7"],
            animation_prv: ["anim8", "anim9", "anim10", "anim11", "anim12", "anim13", "anim14"],
        }

        let i = 0;
        roadObj.btn_nxt.forEach((btn) => {
            btn.addEventListener("click", () => {
                path.classList.remove(roadObj.animation_prv[i]);
                path.classList.remove(roadObj.animation_nxt[i-1]);
                i++;
                path.classList.add(roadObj.animation_nxt[i-1]);
                roadObj.box[i-1].classList.add("waiting");
                gsap.fromTo(roadObj.box[i], {opacity: 0, y: 0}, { delay: 1.02, duration: .32, opacity: 1, y: 12, ease: "power1.out" });
                roadObj.box[i].classList.remove("waiting");
                roadObj.circle[i].classList.remove("waiting");
                gsap.fromTo(roadObj.circle[i], { opacity: 0, scale: 0, transformOrigin: "center" },
                {delay: .82, duration: .32, opacity: 1, scale: 1, transformOrigin: "center", ease: "back.out" });
            });
        });

        roadObj.btn_prv.forEach((btn) => {
            btn.addEventListener("click", () => {
                path.classList.remove(roadObj.animation_nxt[i-1]);
                path.classList.remove(roadObj.animation_prv[i]);
                i--;
                path.classList.add(roadObj.animation_prv[i]);
                roadObj.box[i+1].classList.add("waiting");
                gsap.fromTo(roadObj.box[i], { opacity: 0, y: -12 }, { delay: 1.02, duration: .32, opacity: 1, y: 0, ease: "power1.out" });
                roadObj.box[i].classList.remove("waiting");
                gsap.to(roadObj.circle[i+1], { duration: .32, opacity: 0, scale: 0, transformOrigin: "center", ease: "back.in" });
            });
        });

    }
});