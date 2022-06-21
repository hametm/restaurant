import { createContactContent } from "./contact";
import { createContent } from "./createContent";

const createMenuContent = () => {
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    const mackerel = document.createElement("h2");
    const mushrooms = document.createElement("h2");
    const salad = document.createElement("h2");
    const linkContainer = document.createElement("div");
    const homeLink = document.createElement("a");
    const contactLink = document.createElement("a");
    const menuLink = document.createElement("a");
    const mackerelDescription = document.createElement("p");
    const mackerelPrice = document.createElement("p");
    const mushroomDescription = document.createElement("p");
    const mushroomPrice = document.createElement("p");
    const saladDescription = document.createElement("p");
    const saladPrice = document.createElement("p");

    homeLink.textContent = "Home";
    contactLink.textContent = "Contact";
    menuLink.textContent = "Menu";

    homeLink.addEventListener("click", () => {
        content.innerHTML = "";
        createContent();
    });
    
    contactLink.addEventListener("click", () => {
        content.innerHTML = "";
        createContactContent();
    });

    menuLink.addEventListener("click", () => {
        content.innerHTML = "";
        createMenuContent();
    });

    header.textContent = "Menu";
    mackerel.textContent = "Mackerel";
    mushrooms.textContent = "Mushrooms";
    salad.textContent = "Salad";
    mackerelDescription.textContent = "One piping-hot fish flipped masterfully in the frying pan."
    mackerelPrice.textContent = "$17";
    mushroomDescription.textContent = "A delicate, delicious dish sure to please anyone who doesn't have mushroom allergies.";
    mushroomPrice.textContent = "$15";
    saladDescription.textContent = "A Florida-style salad straight from the shores of Okeechobee."
    saladPrice.textContent = "$15";

    linkContainer.classList.add("linkContainer");
    mackerelDescription.classList.add(".description");
    mushroomDescription.classList.add(".description");
    mackerelPrice.style.marginTop = "0px";
    mushroomPrice.style.marginTop = "0px";

    linkContainer.append(homeLink, menuLink, contactLink);
    content.append(linkContainer, header, mackerel, mackerelDescription, mackerelPrice, mushrooms, mushroomDescription, 
        mushroomPrice, salad, saladDescription, saladPrice);    
}

export { createMenuContent };