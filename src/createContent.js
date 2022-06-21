const createContent = () => {
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    const paragraph = document.createElement("p");
    const image = document.createElement("img");

    header.textContent = "The Chill Grill";
    paragraph.textContent = "Come eat at Victor Baxter's Chill Grill. You chill, we grill!";

    content.append(header, paragraph);
}

export { createContent };
