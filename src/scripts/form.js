import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

document.addEventListener("astro:page-load", () => {
    const href = window.location.href;

    if (href === "http://localhost:4321/contact/" || href === "https://portfolio-pm.netlify.app/contact/")
    {
        // VALIDATIONS //
        const form = document.querySelector("form");
        const name = document.querySelector("#name");
        const job = document.querySelector("#job");
        const email = document.querySelector(".others #email");
        const message = document.querySelector(".others #message");
        const errName = document.querySelector(".name_left span");
        const errJob = document.querySelector(".job_right span");
        const errEmail = document.querySelector(".others .email span");
        const errMessage = document.querySelector(".others .message span");
        const validCheck = document.querySelector(".others .submit_btn .valid");
        const errorCheck = document.querySelector(".others .submit_btn .error");

        const tabInput = [name, job, email, message];
        const tabErr = [errName, errJob, errEmail, errMessage];

        name.addEventListener("input", () => {
            if (name.validity.valid)
            {
                errName.innerText = "";
                errName.className = "";
            }
        }, false);
        job.addEventListener("input", () => {
            if (job.validity.valid)
            {
                errJob.innerText = "";
                errJob.className = "";
            }
        }, false);
        email.addEventListener("input", () => {
            if (email.validity.valid)
            {
                errEmail.innerText = "";
                errEmail.className = "";
            }
        }, false);
        message.addEventListener("input", () => {
            if (message.validity.valid)
            {
                errMessage.innerText = "";
                errMessage.className = "";
            }
        }, false);

        form.addEventListener("submit", (e) => {
            let i = 0;
            while (i < tabInput.length)
            {
                if (tabInput[i].validity.valueMissing)
                {
                    tabErr[i].innerText = "Required";
                    tabErr[i].className = "error";
                }
                else if (tabInput[2].validity.typeMismatch)
                {
                    tabErr[2].innerText = "Incorrect email";
                    tabErr[2].className = "error";
                }
                else if(tabInput[2].validity.tooShort)
                {
                    tabErr[2].innerText = "Too short email";
                    tabErr[2].className = "error";
                }
                i++;
            }
            if (name.validity.valid && job.validity.valid
            && email.validity.valid && message.validity.valid)
            {
                e.preventDefault();

                // reCAPTCHA...//
                // SEND TO EMAILJS //
                emailjs.send("service_x2gl58f","template_4zto3qq", {
                    user_name: name.value,
                    user_job: job.value,
                    user_message: message.value,
                    user_email: email.value
                }, "Af4epk4E3JnksUZGA")
                .then(function(res) {
                    console.log('SUCCESS!', res.status, res.text);
                }, function(error) {
                    console.log('FAILED...', error);
                });

                name.value = "";
                job.value = "";
                email.value = "";
                message.value = "";

                errorCheck.classList.add("incomplete");
                validCheck.classList.remove("incomplete");

                // GSAP //
                const plane = document.querySelector(".right .send_anim .plane-line #plane");
                const path = document.querySelector(".right .send_anim .plane-line #path");

                gsap.to(plane, {
                    duration: 2.4,
                    ease: "power1.in",
                    motionPath: {
                        path: path,
                        align: path,
                        autoRotate: true,
                        alignOrigin: [0.5, 0.5],
                    }
                });

                path.classList.add("anim_path");
            }
            else
            {
                validCheck.classList.add("incomplete");
                errorCheck.classList.remove("incomplete");
            }
            e.preventDefault();
        });
    }
});