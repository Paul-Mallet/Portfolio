import { gsap } from "gsap";

//TWEEN
gsap.fromTo(".box",
    {x: -200, background: "#28a92b", rotation: "1.25rad"},
    {x: 200, background: "blue", rotation: 360, delay: 1, duration: 4, repeat: 1, yoyo: true, onComplete: () => console.log("completed")}
);

const span = document.querySelector("span");

let obj = {
    myNum: 20,
    myColor: "red"
};

gsap.to(span,
    {color: "red", delay: 1, duration: 3, onUpdate: () => console.log(obj.myNum, obj.myColor)}
);