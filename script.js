let projects = document.querySelector(".projects");
let testimonials = document.querySelector(".testimonial");

for (let project of projectList) {
    let projectCard = document.createElement("div");
    let projectDetails = document.createElement("div");
    let heading = document.createElement("h3");
    let tagWrapper = document.createElement("div");
    let location = document.createElement("span");
    let dateCompleted = document.createElement("span");
    let type = document.createElement("span");
    let bgImage = document.createElement("div");


    heading.innerText = project.Name;
    location.innerText = project.Location;
    dateCompleted.innerText = project.DateCompleted;
    type.innerText = project.Type;
    bgImage.style.backgroundImage = `url("${project.CoverImage}")`;
    bgImage.style.height = "320px";


    tagWrapper.appendChild(location);
    tagWrapper.appendChild(dateCompleted);
    tagWrapper.appendChild(type);

    projects.appendChild(projectCard);
    projectDetails.appendChild(heading);
    projectDetails.appendChild(tagWrapper);

    projectCard.appendChild(bgImage);
    projectCard.appendChild(projectDetails);
    
}


for (let project of projectList) {

    let projectDate = new Date(project.DateCompleted);

    if (projectDate.getFullYear() < 2022) {
        continue;
    } else {
        let testimonialCard = document.createElement("div");
        let testimonialP = document.createElement("p");
        let projectName = document.createElement("div");
    
    
        testimonialP.innerText = project.Testimonial;
        projectName.innerText = project.Name + " in " + project.Location;
    
    
        testimonialCard.appendChild(testimonialP);
        testimonials.appendChild(projectName);
        testimonials.appendChild(testimonialCard);
    }
}