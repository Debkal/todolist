function contactDisplay(){
    const contactContent = document.createElement("div");

    return contactContent;
}

function attachContact() {
    const main = document.getElementById("main");
    main.textContent="";
    main.appendChild(contactDisplay());
}

export default attachContact;