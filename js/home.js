/* Sidebar Script */
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
    let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
    });
}
let sidebar = document.querySelector("#sidebar");
let sidebarBtn = document.querySelector(".fa-bars");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
});

/* Sidebar Projects Click Script */
function allclick() {
    document.getElementById("btn-all").click();
    exitclick();
}

function htmlclick() {
    document.getElementById("btn-html").click();
    exitclick();
}

function jsclick() {
    document.getElementById("btn-js").click();
    exitclick();
}

function reactclick() {
    document.getElementById("btn-react").click();
    exitclick();
}

function exitclick() {
    document.getElementById("close-btn").click();
}

// Hero Animation Loop FontAwesome
// Variable Declaration
var outputHTML = "";
// FontAwesome Icons Array
var fontawesome = [
    "regular fa-address-book", "solid fa-bath", "solid fa-shower", "solid fa-temperature-half", "solid fa-scale-balanced",

    "solid fa-battery-half", "regular fa-bell", "solid fa-bicycle", "solid fa-bolt", "solid fa-bullhorn",

    "regular fa-commenting", "regular fa-comments", "regular fa-envelope", "solid fa-gift", "solid fa-martini-glass",

    "solid fa-globe", "solid fa-graduation-cap", "regular fa-heart", "solid fa-hourglass", "brands fa-twitter"
];

var fontawesome2 = [
    "regular fa-star-half-stroke", "regular fa-folder-open", "solid fa-stroopwafel", "solid fa-camera-retro", "solid fa-code",

    "regular fa-paper-plane", "regular fa-images", "regular fa-floppy-disk", "regular fa-moon", "regular fa-gem",

    "solid fa-ice-cream", "solid fa-jedi", "solid fa-user-secret", "regular fa-lemon", "solid fa-mug-saucer",

    "regular fa-money-bill-1", "solid fa-brush", "regular fa-chess-queen", "solid fa-user-astronaut", "solid fa-meteor"
];

// Over-all Loop


for(rows = 0; rows < 16; rows++){

    // outputHTML += '<div class="animation-row">';

    // for(i = 0; i < 2; i++){

    //     outputHTML += '<div class="sub-row">';
    //     for(icons = 0; icons < fontawesome.length; icons++){
    //         outputHTML += '<i class="fa-' + fontawesome[icons] + '" aria-hidden="true"></i>';
    //     }
    //     outputHTML += '</div>';

    // }

    // outputHTML += '</div>';


    if(rows%2){
        outputHTML += '<div class="animation-row">';

        for(i = 0; i < 2; i++){

            outputHTML += '<div class="sub-row">';
            for(icons = 0; icons < fontawesome2.length; icons++){
                outputHTML += '<i class="fa-' + fontawesome2[icons] + '" aria-hidden="true"></i>';
            }
            outputHTML += '</div>';

        }

        outputHTML += '</div>';
    } else{
        outputHTML += '<div class="animation-row">';

        for(i = 0; i < 2; i++){

            outputHTML += '<div class="sub-row">';
            for(icons = 0; icons < fontawesome.length; icons++){
                outputHTML += '<i class="fa-' + fontawesome[icons] + '" aria-hidden="true"></i>';
            }
            outputHTML += '</div>';

        }

        outputHTML += '</div>';
    }


}


//Print
document.getElementsByClassName("animation")[0].innerHTML += outputHTML;