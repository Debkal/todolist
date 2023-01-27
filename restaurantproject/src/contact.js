function contactDisplay(){
    const contactContent = document.createElement("div");
    contactContent.classList.add('contact-content');

    const contactPhone = document.createElement('p');
    contactPhone.textContent=('1-222-333-4444');

    const contactHours = document.createElement('ul');
    const mondayHours = document.createElement("li");
    mondayHours.textContent= "Closed";
    const tuesdayHours = document.createElement("li");
    tuesdayHours.textContent="Closed";
    const wednesdayHours = document.createElement("li");
    wednesdayHours.textContent="Closed";
    const thursdayHours = document.createElement('li');
    thursdayHours.textContent="Thursday: 12pm -11pm";
    const fridayHours = document.createElement('li');
    fridayHours.textContent="Friday: 12pm -11pm";
    const saturdayHours = document.createElement('li');
    saturdayHours.textContent="Saturday: 12pm - 11pm";
    const sundayHours = document.createElement('li')
    sundayHours.textContent="Sunday: 12pm-9pm";

    contactHours.appendChild(thursdayHours);
    contactHours.appendChild(fridayHours);
    contactHours.appendChild(saturdayHours);
    contactHours.appendChild(sundayHours);
    contactHours.appendChild(mondayHours);
    contactHours.appendChild(tuesdayHours);
    contactHours.appendChild(wednesdayHours);
    
    const contactLocation = document.createElement("div");
    contactLocation.classList.add("contact-location");
    contactLocation.textContent='123 Pizza Palace CT,PizzaTown IL 66666';

    contactContent.appendChild(contactPhone);
    contactContent.appendChild(contactHours);
    contactContent.appendChild(contactLocation);

    return contactContent;
}

function attachContact() {
    const main = document.getElementById("main");
    main.textContent="";
    main.appendChild(contactDisplay());
}

export default attachContact;