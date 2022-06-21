import { createContactContent } from "./contact";
import { createMenuContent } from "./menu";

const createContent = () => {
    const content = document.getElementById("content");
    const linkContainer = document.createElement("div");
    const header = document.createElement("h1");
    const paragraph = document.createElement("p");
    const image = document.createElement("img");
    const homeLink = document.createElement("a");
    const contactLink = document.createElement("a");
    const menuLink = document.createElement("a");

    homeLink.textContent = "Home";
    contactLink.textContent = "Contact";
    menuLink.textContent = "Menu";
    image.src = "../src/images/victor.jpg";
    image.classList.add("homeImage");
    paragraph.classList.add("homeText");

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

    header.textContent = "The Chill Grill";
    paragraph.textContent = "Come eat at Victor Baxter's Chill Grill. You chill, we grill!";
    linkContainer.classList.add("linkContainer");

    linkContainer.append(homeLink, menuLink, contactLink);
    content.append(linkContainer, header, paragraph, image);
}

export { createContent };
