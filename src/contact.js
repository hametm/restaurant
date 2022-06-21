const createContactContent = () => {
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    const victor = document.createElement("h2");

    header.textContent = "Contact";
    victor.textContent = "Victor Baxter";

    content.append(header, victor);


}

export { createContactContent };