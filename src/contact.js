import { createMenuContent } from "./menu";
import { createContent } from "./createContent";

const createContactContent = () => {
    const content = document.getElementById("content");
    const linkContainer = document.createElement("div");
    const header = document.createElement("h1");
    const victor = document.createElement("h2");
    const title = document.createElement("h3");
    const phone = document.createElement("p");
    const image = document.createElement("img");
    const homeLink = document.createElement("a");
    const contactLink = document.createElement("a");
    const menuLink = document.createElement("a");

    header.textContent = "Contact";
    victor.textContent = "Victor Baxter";
    phone.textContent = "415-555-2813";
    title.textContent = "Head Chef";

    homeLink.textContent = "Home";
    contactLink.textContent = "Contact";
    menuLink.textContent = "Menu";
    image.src = "../src/images/victor-contact.jpg";
    image.classList.add("contactImage");

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

    linkContainer.classList.add("linkContainer");

    linkContainer.append(homeLink, menuLink, contactLink);
    content.append(linkContainer, header, victor, title, phone, image);


}

export { createContactContent };