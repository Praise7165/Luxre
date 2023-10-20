


storedClass = localStorage.getItem("class");

for (let member of team) {
    if (storedClass === member.name) {

    

        const name = document.querySelector(".hero-content h1");
        const bio = document.querySelector(".bio");
        const memberImage = document.querySelector(".member-image");
        const role = document.querySelector(".role");


        name.textContent = member.name;
        bio.textContent = member.Bio;
        role.textContent = member.role;
        memberImage.style.backgroundImage = `url("${member.image}")`;

    }
}
