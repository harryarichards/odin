let content = document.querySelector(".content");
let redP = document.createElement("p");
redP.textContent = "Hey I'm red!";
redP.style.color = "red";
content.appendChild(redP);

let h3 = document.createElement("h3");
let div = document.createElement("div");
div.style.borderStyle = "solid";
div.style.backgroundColor = "pink";

let divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";
let divP = document.createElement("p");
divP.textContent = "ME TOO!";
div.appendChild(divH1);
div.appendChild(divP);
content.append(div);