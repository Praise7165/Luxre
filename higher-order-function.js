



projectList.forEach((project) => {
    return project.DateCompleted = new Date(project.DateCompleted).getFullYear();
});


let newProjects = projectList.filter((project) => {
    if (project.DateCompleted >= 2022) {
        return project;
    }
});


console.log(projectList);
console.log(newProjects);


/*

let dates = projectList.map((project) => {
    return project.DateCompleted;
}).sort((a, b) => a - b);




const points = [40, 100, 1, 5, 25, 10];

points.sort((a, b) => a - b);
console.log(points);

console.log(dates);
*/