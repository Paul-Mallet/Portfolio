import { gsap } from "gsap/gsap-core";

document.addEventListener("astro:page-load", () => {
    const href = window.location.href;

    if (href === "http://localhost:4321/contact")
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
        let i = 0;

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
            let j = 0;
            while (j < tabInput.length)
            {
                if (tabInput[j].validity.valueMissing)
                {
                    tabErr[j].innerText = "Required";
                    tabErr[j].className = "error";
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
                j++;
            }
            if (name.validity.valid && job.validity.valid
            && email.validity.valid && message.validity.valid)
            {
                errorCheck.classList.add("incomplete");
                validCheck.classList.remove("incomplete");
                // GSAP //
                
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