import placeholderImage from "./placeholder_menu.svg";

export function CreateMenuPage () {
    console.log ("Menu Loaded");

    const containerDiv = document.querySelector(".container");

    const menuImage = document.createElement('img');
    menuImage.src = placeholderImage;

    const menuItemsDivs = [];
    const menuTextDivs = [];

    const createMenu = () => {
        
        let menuWrapperDiv = document.createElement('div');
        menuWrapperDiv.classList.add('menu-wrapper');
        containerDiv.appendChild(menuWrapperDiv);

        let menuPanelDiv = document.createElement('div');
        menuPanelDiv.classList.add('menu-panel');
        menuWrapperDiv.appendChild(menuPanelDiv);

        for (let i = 0; i < 4; i++) {
            menuItemsDivs.push(document.createElement('div'));
            menuItemsDivs[i].classList.add('menu-item');
            menuPanelDiv.appendChild(menuItemsDivs[i]);

            const menuImage = document.createElement('img');
            menuImage.src = placeholderImage;
            menuItemsDivs[i].appendChild(menuImage);

            menuTextDivs.push(document.createElement('div'));
            menuTextDivs[i].classList.add('menu-text');
            menuItemsDivs[i].appendChild(menuTextDivs[i]);

            let menuTextHeader = document.createElement('h1');
            let menuTextSpan = document.createElement('span');

            switch (i) {
                case 0:
                    menuTextHeader.textContent = "Blueberry Creamed Honey";
                    menuTextSpan.textContent = "Contains: Raw honey, Blueberry";
                break;
                case 1:
                    menuTextHeader.textContent = "Strawberry Creamed Honey";
                    menuTextSpan.textContent = "Contains: Raw honey, Strawberry";
                break;
                case 2:
                    menuTextHeader.textContent = "Peach Creamed Honey";
                    menuTextSpan.textContent = "Contains: Raw honey, Peach";
                break;
                case 3:
                    menuTextHeader.textContent = "Pineapple Creamed Honey";
                    menuTextSpan.textContent = "Contains: Raw honey, Pineapple";
                break;
            }
            menuTextDivs[i].appendChild(menuTextHeader);
            menuTextDivs[i].appendChild(menuTextSpan);
        }
    }
    createMenu();
}
