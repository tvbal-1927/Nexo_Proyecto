function openLogin() {
    document.getElementById(
        "loginModal"
    ).style.display = "flex";
}

function closeLogin() {
    document.getElementById(
        "loginModal"
    ).style.display = "none";
}

function openRegister() {
    document.getElementById(
        "registerModal"
    ).style.display = "flex";
}

function closeRegister() {
    document.getElementById(
        "registerModal"
    ).style.display = "none";
}

window.onclick = function(e){

    const loginModal =
    document.getElementById(
        "loginModal"
    );

    const registerModal =
    document.getElementById(
        "registerModal"
    );

    if(
        e.target ===
        loginModal
    ){
        loginModal
        .style.display =
        "none";
    }

    if(
        e.target ===
        registerModal
    ){
        registerModal
        .style.display =
        "none";
    }

};

const particles =
document.querySelector(
    ".particles"
);

for(
    let i = 0;
    i < 120;
    i++
){

    const particle =
    document.createElement(
        "div"
    );

    particle.classList.add(
        "particle"
    );

    particle.style.left =
        Math.random() *
        100 + "vw";

    particle.style.top =
        Math.random() *
        100 + "vh";

    particle.style.width =
        Math.random() *
        4 + "px";

    particle.style.height =
        particle.style.width;

    particle.style.opacity =
        Math.random();

    particle.style.animation =
    `float ${
        Math.random()
        * 8 + 4
    }s infinite ease-in-out`;

    particles.appendChild(
        particle
    );

}

const style =
document.createElement(
    "style"
);

style.innerHTML = `
@keyframes float{

    0%{
        transform:
        translateY(0px);
    }

    50%{
        transform:
        translateY(-25px);
    }

    100%{
        transform:
        translateY(0px);
    }

}
`;

document.head.appendChild(
    style
);

const form =
document.querySelector(
    "form"
);

if(form){

    form.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        alert(
            "Mensaje enviado correctamente"
        );

        form.reset();

    });

}

window.addEventListener(
    "scroll",
    function(){

    const header =
    document.querySelector(
        "header"
    );

    if(
        window.scrollY > 50
    ){
        header.style.background =
        "rgba(7,1,20,.85)";
    }
    else{
        header.style.background =
        "rgba(7,1,20,.5)";
    }

});