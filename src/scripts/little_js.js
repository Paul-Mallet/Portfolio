document.addEventListener("astro:page-load", () => {
    const href = window.location.href;

    if (href === "http://localhost:4321/projects")
    {
        // FAQ DIV //
        const faq_div_btns = document.querySelector(".right .faq .top .btns");
        const faq_plus_btn = document.querySelector(".right .faq .top .btns .plus");
        const faq_minus_btn = document.querySelector(".right .faq .top .btns .minus");
        const faq_p = document.querySelector(".right .faq .content");
        faq_div_btns.addEventListener("click", toggleDiv);

        const nd = "not_display";
        function toggleDiv()
        {
            if (faq_minus_btn.classList != "minus not_display")
            {
                faq_minus_btn.classList.add(nd);
                faq_plus_btn.classList.remove(nd);
                faq_p.classList.add("hidden");
            }
            else
            {
                faq_minus_btn.classList.remove(nd);
                faq_plus_btn.classList.add(nd);
                faq_p.classList.remove("hidden");
            }
        }

        // SHUTTLE_SPACE //
        const container_right = document.querySelector(".right");
        const s_div = document.querySelector(".right .shuttle_container");
        const s_space = document.querySelector(".right .shuttle_space");
        const s_space_text = document.querySelector(".right .shuttle_space p");
        const rect = container_right.getBoundingClientRect();

        let isMoving = false;
        let x = 0;
        let y = 0;
        s_space.addEventListener("mousedown", (e) => {
            isMoving = true;
            s_space_text.style.display = "none";
            s_div.style.zIndex = "11";
        });

        container_right.addEventListener("mousemove", (e) => {
            if (isMoving)
            {
                x = e.clientX - Math.floor(rect.left + (s_space.offsetWidth / 2));
                y = e.clientY - Math.floor(rect.top + (s_space.offsetHeight / 2));
                if ((x >= (rect.width - (1 + (s_space.offsetWidth / 2)))
                || x <= 1 - (s_space.offsetWidth / 2))
                || (y >= (rect.height - (1 + (s_space.offsetHeight / 2)))
                || y <= 1 - (s_space.offsetHeight / 2)))
                {
                    x = 38;
                    y = 350;
                }
                s_space.style.left = ((x / rect.width) * 100) + "%";
                s_space.style.top = ((y / rect.height) * 100) + "%";
            }
        });

        document.addEventListener("mouseup", () => {
            if (isMoving)
            {
                isMoving = false;
                s_space_text.style.display = "block";
                s_div.style.zIndex = "0";
            }
        });

        // COUNTER //
        const score = document.querySelector(".right .stats .score span");
        const target = document.querySelector(".right .target");
        target.addEventListener("click", incrementer);

        let nb = 1;
        function incrementer()
        {
        score.innerText = nb++;
        target.style.top = Math.floor(Math.random() * (92 - 8) + 8) + '%';
        target.style.left = Math.floor(Math.random() * (92 - 8) + 8) + '%';
        }

        // TIMEOUT //
        const timeout = document.querySelector(".right .stats .timeout span");
        const counter = setInterval(decrementer, 1000);

        let sec = 9;
        const zero = '0';
        function decrementer()
        {
            if (sec >= 0)
            {
                if (sec >= 0 && sec <= 9)
                {
                    timeout.innerText = zero + sec.toString();
                }
                else
                {
                    timeout.innerText = sec.toString();
                }
                sec--;
            }
            else
            {
                clearInterval(counter);
            }
        }
    }
});