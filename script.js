let projects = document.querySelector(".projects");
let testimonials = document.querySelector(".testimonials");

for (let project of projectList) {

    let projectDate = new Date(project.DateCompleted);


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

    dateCompleted.innerText = projectDate.getFullYear();
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

    heading.classList.add("project-name");

    location.classList.add("project-tag");
    dateCompleted.classList.add("project-tag");
    type.classList.add("project-tag");

    tagWrapper.classList.add("tag-wrapper");
    projectDetails.classList.add("project-details");
    bgImage.classList.add("project-image");
    




    
    if (projectDate.getFullYear() < 2022) {
        continue;
    } else {
        let testimonialCard = document.createElement("div");
        let testimonialP = document.createElement("p");
        let projectName = document.createElement("div");
    
    
        testimonialP.innerText = project.Testimonial;
        projectName.innerText = project.Name + " in " + project.Location;
    
    
        testimonialCard.appendChild(testimonialP);
        testimonialCard.appendChild(projectName);
        testimonials.appendChild(testimonialCard);
    };
    
};



