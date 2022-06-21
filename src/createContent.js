import { createContactContent } from "./contact";
import { createMenuContent } from "./menu";

const createContent = () => {
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    const paragraph = document.createElement("p");
    // const image = document.createElement("img");
    const contactLink = document.createElement("a");
    const menuLink = document.createElement("a");

    contactLink.textContent = "Contact";
    menuLink.textContent = "Menu";

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

    content.append(contactLink, menuLink, header, paragraph);
}

export { createContent };
