let latestProjects = document.querySelector(".selProjects");
let testimonials = document.querySelector(".testimonials");


// display latest project.
displayProjects(projectList.slice(0, 6), latestProjects, createProject);



// create a list of latest projects done by 2022;
let newProjects = projectList.filter((project) => {
  let date = project.dateCompleted.getFullYear();
  if (date >= 2022) {
      return project;
  };
});


/*
for (let i = 0; i < newProjects.length; i++) {

    let testimonialCard = document.createElement("div");
    testimonialCard.classList.add(`${TestimonialClasses[i]}`, "tCards");

    testimonialCard.innerHTML = `
      <p class="testimonial">&ldquo;${newProjects[i].testimonial}&rdquo;</p>
      <div class="tname">${newProjects[i].name} in ${newProjects[i].location}, ${newProjects[i].dateCompleted.getFullYear()}</div>
    `;
    testimonials.appendChild(testimonialCard);   

};
*/



function createTestimonial(clientTestimonial) {

  let testimonialCard = document.createElement("div");
  testimonialCard.classList.add(`${testimonialClasses.shift()}`, "tCards");

  let date = clientTestimonial.dateCompleted.getFullYear();

  testimonialCard.innerHTML = `
    <p class="testimonial">&ldquo;${clientTestimonial.testimonial}&rdquo;</p>
    <div class="tname">${clientTestimonial.name} in ${clientTestimonial.location}, ${date}</div>
  `;

  return testimonialCard;
};


displayProjects(newProjects, testimonials, createTestimonial);
