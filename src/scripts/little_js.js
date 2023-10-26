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
const shuttle_space = document.querySelector(".right .shuttle_space");


/*document.addEventListener("mousemove", (e) => {
    console.log(e.clientX);
});*/

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
            timeout.innerText = zero + sec;
        }
        else
        {
            timeout.innerText = sec;
        }
        sec--;
    }
    else
    {
        clearInterval(counter);
    }
}