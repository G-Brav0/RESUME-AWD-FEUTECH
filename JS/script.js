var cbtn = document.getElementById("color_btn");
cbtn.addEventListener("click", changeColors);

function changeColors() {
    var pageBody = document.querySelector(".page-body");
    // var refColor = document.querySelector("a");
    // pageBody.style.backgroundColor = pageBody.style.backgroundColor === "grey" ? "#019938" : "grey";
    // pageBody.style.backgroundColor = pageBody.style.backgroundColor === "teal" ? "grey" : "teal";
    // pageBody.style.backgroundColor = pageBody.style.backgroundColor === "teal" ? "pastel" : "teal";
    
    // Option 1 (color bg)
    // pageBody.style.backgroundColor = pageBody.style.backgroundColor === "teal" ? "turquoise" : "teal";
    // Option 2 (color bg)
    pageBody.style.backgroundColor = pageBody.style.backgroundColor === "teal" ? "beige" : "teal";

    // pageBody.style.color = pageBody.style.color === "gold" ? "white" : "gold";
    pageBody.style.color = pageBody.style.color === "gold" ? "black" : "gold";
    // refColor.style.color = refColor.style.color === "gold" ? "black" : "gold";
}
