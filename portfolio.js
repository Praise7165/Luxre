let projectSection = document.querySelector(".allProjects");
let teamSection = document.querySelector(".teams");




displayProjects(projectList, projectSection, createProject);



function createTeamCard(member) {
    const teamCard = document.createElement("div");
    let bgImage = document.createElement("div");


    bgImage.style.backgroundImage = `url("${member.image}")`;
    bgImage.classList.add("member-image");

    teamCard.appendChild(bgImage);


    teamCard.innerHTML += `
     <div class="project-details">
        <h3 class="project-name">${member.name}</h3>
        <div class="tag-wrapper"><span class="tname">${member.role}</span></div>
     </div>
    `;

    teamCard.classList.add("member-card");


    return teamCard;
};

// displayProjects(team, teamSection);
displayProjects(team, teamSection, createTeamCard);




let teamCards = document.querySelectorAll(".member-card");


for (let card of teamCards) {
    card.addEventListener("click", () => {

        
        let targetName = card.querySelector(".project-name").textContent;

        let storedClass = localStorage.setItem("class", targetName);


        document.location.href = "teammember.html";

    })
}

