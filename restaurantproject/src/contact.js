function contactDisplay(){
    const contactContent = document.createElement("div");

    return contactContent;
}

function attachContact() {
    const pageContent= document.getElementById("pageContent");
    pageContent.textContent="";
    pageContent.appendChild(contactDisplay());
}

export default attachContact();