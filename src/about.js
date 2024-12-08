export function CreateAboutPage() {
    const containerDiv = document.querySelector(".container");

    const createAbout = () => {
        let aboutWrapperDiv = document.createElement('div');
        aboutWrapperDiv.classList.add('about-wrapper')
        let aboutPanelDiv = document.createElement('div');
        aboutPanelDiv.classList.add('about-panel');

        containerDiv.appendChild(aboutWrapperDiv);
        aboutWrapperDiv.appendChild(aboutPanelDiv);

        let aboutTextOne = document.createElement('p');
        aboutTextOne.textContent = `
            Wildflower Honey is an apiary and honey processor
            owned and operated solely by Nyamechye Jones. The 
            bees she keeps in the gardens of her own home Pollinate
            the wild flowers that have sprung up naturally in the
            area as well as flowers such as Hibiscus. This has led 
            Wildflower Honey possessing a uniquely sweet and earthy
            taste thats hard to find elsewhere.
        `;
        aboutPanelDiv.appendChild(aboutTextOne);

        let aboutTextTwo = document.createElement('p');
        aboutTextTwo.textContent = `
            Nyamechye's preferred method of processing the Honey is
            creaming it and infusing it with various fruits and berries
            and it is this product that she provides to you.
        `;
        aboutPanelDiv.appendChild(aboutTextTwo);
    }
    createAbout();
}
