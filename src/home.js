import featuredImage from "./featured.jpg";

export function CreateHomePage () {
    console.log ("Home page Loaded");

    const container = document.querySelector(".container");

    const CreateFeatured = () => {
        let featuredDiv = document.createElement('div');
        featuredDiv.classList.add('featured');
        container.appendChild(featuredDiv);

        let featuredPhotoDiv = document.createElement('div');
        featuredPhotoDiv.classList.add('featured-photo');
        let featuredPhoto = document.createElement('img');
        featuredPhoto.src = featuredImage;
        featuredDiv.appendChild(featuredPhotoDiv);
        featuredPhotoDiv.appendChild(featuredPhoto);

        let featuredInfoDiv = document.createElement('div');
        featuredInfoDiv.classList.add('featured-info');
        let featuredInfoHeader = document.createElement('h1');
        featuredInfoHeader.textContent = "Blueberry Creamed Honey";
        let featuredInfo = document.createElement('p');
        featuredInfo.textContent = (`
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum."`);
        featuredDiv.appendChild(featuredInfoDiv);
        featuredInfoDiv.appendChild(featuredInfoHeader);
        featuredInfoDiv.appendChild(featuredInfo);
    }

    const CreateTestimonial = () => {
        let testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial');
        container.appendChild(testimonialDiv);

        let quoteBannerDiv = document.createElement('div');
        quoteBannerDiv.classList.add('quote-banner')
        testimonialDiv.appendChild(quoteBannerDiv);

        let quoteBoxDiv = document.createElement('div');
        quoteBoxDiv.classList.add ('quote-box');
        let quote = document.createElement('p');
        quote.classList.add ('quote');
        quote.textContent = (`
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum."`);
        quoteBannerDiv.appendChild(quoteBoxDiv);
        quoteBoxDiv.appendChild(quote);    

        let authorBoxDiv = document.createElement('div');
        authorBoxDiv.classList.add ('author-box');
        let author = document.createElement ('p');
        author.classList.add ('author');
        author.textContent = "- Some Author";
        quoteBannerDiv.appendChild (authorBoxDiv);
        authorBoxDiv.appendChild(author);
    }

    CreateFeatured();
    CreateTestimonial();
}
