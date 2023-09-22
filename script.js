let projects = document.querySelector(".projects");
let testimonials = document.querySelector(".testimonials");


projectList.forEach((project) => {
    return project.DateCompleted = new Date(project.DateCompleted);
});


projectList.sort((a, b) => {
    return b.DateCompleted - a.DateCompleted;
});



projectList.slice(0, 6).forEach((project) => {
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

    dateCompleted.innerText = project.DateCompleted.getFullYear();
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
    
});



let TestimonialClasses = ["one", "two", "three", "four", "five"];


let newProjects = projectList.filter((project) => {
    if (project.DateCompleted.getFullYear() >= 2022) {
        return project;
    }
});

for (let i = 0; i < newProjects.length; i++) {

    let testimonialCard = document.createElement("div");
    let testimonialP = document.createElement("p");
    let projectName = document.createElement("div");
    
    
    testimonialP.innerText = newProjects[i].Testimonial;
    testimonialP.innerHTML = "&ldquo;" + testimonialP.innerText  + "&rdquo;";
    projectName.innerText = newProjects[i].Name + " in " + newProjects[i].Location + ", " + newProjects[i].DateCompleted.getFullYear();
    
    testimonialP.classList.add("testimonial");
    testimonialCard.classList.add(`${TestimonialClasses[i]}`, "tCards");
    projectName.classList.add("tname");

    testimonialCard.appendChild(testimonialP);
    testimonialCard.appendChild(projectName);
    testimonials.appendChild(testimonialCard);   

};




