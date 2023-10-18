

// const teams = document.querySelector(".teams");



// Create a selected project to showcase the latest project
const selProjects = projectList.slice(0, 6);

function createProject(project) {

    let projectCard = document.createElement("div");
    let bgImage = document.createElement("div");
    bgImage.style.backgroundImage = `url("${project.coverImage}")`;

    bgImage.classList.add("project-image");


    projectCard.appendChild(bgImage);
    
    projectCard.innerHTML += `
    <div class="project-details">
      <h3 class="project-name">${project.name}</h3>
      <div class="tag-wrapper">
        <span class="project-tag">${project.location}</span>
        <span class="project-tag">${project.dateCompleted.getFullYear()}</span>
        <span class="project-tag">${project.type}</span>
      </div>
    </div>
    `;

    
    return projectCard;
}



function displayProjects(projects, element) {
    projects.forEach(project => {
        element.appendChild(createProject(project));
    });
};








/*
function teamMember(member) {

    let memberCard = document.createElement("div");
    let memberDetails = document.createElement("div");
    let memberName = document.createElement("h3");
    let role = document.createElement("span");
    let bgImage = document.createElement("div");


    memberName.textContent = member.name;
    role.textContent = member.Role;

    bgImage.style.backgroundImage = `url("${member.Image}")`;
    bgImage.style.height = "320px";

    memberDetails.appendChild(memberName);
    memberDetails.appendChild(role);


    memberCard.appendChild(bgImage);
    memberCard.appendChild(memberDetails);

    memberName.classList.add("project-name");
    role.classList.add("project-tag");
    bgImage.classList.add("project-image");


    teams.appendChild(memberCard);
    
}



team.forEach(member => teamMember(member));

*/
