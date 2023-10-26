const signatureDiv = document.querySelector(".left .hand_signature");
const href = window.location.href;

console.log(href);

function getUrl()
{
    if (href === "http://localhost:4321/")
    {
        signatureDiv.innerHTML = `
            <p style="font-size: 1.28rem; font-weight: 600; margin-bottom: -4%;">
                Paul<span style="color: #de4900;">.</span></br>Mallet
            </p>
        `;
    }
    else
    {
        signatureDiv.innerHTML = `
            <a href="http://localhost:4321/" style="display: flex; align-items: center; color: #000; font-size: 1.28rem; font-weight: 600; margin-bottom: -4%;">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" style="opacity: .4;" viewBox="0 0 448 512">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                </svg>
                <p style="margin-left: 8px; opacity: .4;">Back</p>
            </a>
        `;
    }
}
getUrl();