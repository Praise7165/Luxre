
let testimonialClasses = ["one", "two", "three", "four", "five"];
let menuBar = document.querySelector(".menuBar");
let sideBar = document.querySelector("nav");


menuBar.addEventListener("click", () => {
  sideBar.classList.toggle("sideBar");
});



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



function displayProjects(projects, element, newFunction) {
    projects.forEach(project => {
        element.appendChild(newFunction(project));
    });
};




