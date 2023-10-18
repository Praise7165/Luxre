let latestProjects = document.querySelector(".selProjects");
const testimonials = document.querySelector(".testimonials");
let TestimonialClasses = ["one", "two", "three", "four", "five"];



// display latest project.
displayProjects(projectList.slice(0, 6), latestProjects);



// create a list of latest projects done by 2022;
let newProjects = projectList.filter((project) => {
  let date = project.dateCompleted.getFullYear();
  if (date >= 2022) {
      return project;
  };
});



for (let i = 0; i < newProjects.length; i++) {

    let testimonialCard = document.createElement("div");
    testimonialCard.classList.add(`${TestimonialClasses[i]}`, "tCards");

    testimonialCard.innerHTML = `
      <p class="testimonial">&ldquo;${newProjects[i].testimonial}&rdquo;</p>
      <div class="tname">${newProjects[i].name} in ${newProjects[i].location}, ${newProjects[i].dateCompleted.getFullYear()}</div>
    `;
    testimonials.appendChild(testimonialCard);   

};





function createTElement() {
  let testimonialCard = document.createElement("div");
  testimonialCard.classList.add(`${TestimonialClasses[i]}`, "tCards");

  testimonialCard.innerHTML = `
    <p class="testimonial">&ldquo;${newProjects[i].testimonial}&rdquo;</p>
    <div class="tname">${newProjects[i].name} in ${newProjects[i].location}, ${newProjects[i].dateCompleted.getFullYear()}</div>
  `;
};
