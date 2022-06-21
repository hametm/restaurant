const createMenuContent = () => {
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    const food = document.createElement("h2");

    header.textContent = "Menu";
    food.textContent = "Food";

    content.append(header, food);
    
}

export { createMenuContent };