import pizzachef from './pics/pizzachef.jpg'

function homeDisplay() {
    //displaying home Content
    const homeContent = document.createElement("div");
    homeContent.classList.add("home-content");

    const homeTitle =document.createElement('div');
    homeTitle.classList.add("home-title");

    const homeDescription = document.createElement('p');
    homeDescription.classList.add("home-description");
    const aboutus=document.createElement('h2');
    aboutus.classList.add("about-us");
    aboutus.textContent="About Us"
    const homeDescriptionContainer = document.createElement('div');
    homeDescriptionContainer.classList.add("home-description-container");
    const homeQuote = document.createElement('p');
    homeQuote.classList.add("home-quote"); 
    homeQuote.textContent=("If it ain't Papa Phil's it ain't gonna be good!")

    const homeHours = document.createElement('div');
    homeHours.classList.add('home-hours');

    const pizzaImage = document.createElement("img");
    pizzaImage.classList.add("pizza-image");
    pizzaImage.src= pizzachef;
    pizzaImage.alt = "pizza";
    //text content
    homeTitle.textContent= "Pizza Palace dedicated to Quality";
    homeDescription.textContent=("Our Pizza is guaranteed to use the freshest high quality ingredients. Established in 1998 our Pizza was born at my home where I spent many days testing the perfect New York style crust. After several years I have finally decided my work can be open to the public as a passion project. All of our dough and ingredients are guaranteed made fresh in-house and never frozen or premade. Our motto is to make the best damn tasting food period.")
    
    homeContent.appendChild(homeTitle);
    homeContent.appendChild(pizzaImage);
    homeContent.appendChild(homeDescription);
    homeContent.appendChild(homeDescriptionContainer);
    homeDescriptionContainer.appendChild(aboutus);
    homeDescriptionContainer.appendChild(homeQuote);
    aboutus.appendChild(homeDescription);
    return homeContent;
}

  

function attachHome() {
    const main = document.getElementById("main");
    main.textContent="";
    main.appendChild(homeDisplay());
}

export default attachHome;