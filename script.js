const projectFiles = [
  "/content/projects/project-01.json",
  "/content/projects/project-02.json"
];

async function loadProjects() {
  const container = document.getElementById("projects");
  container.innerHTML = "";

  for (const file of projectFiles) {
    const response = await fetch(file);
    const project = await response.json();

    container.innerHTML += `
      <a class="project-card" href="${project.video}" target="_blank">
        <img src="${project.thumbnail}" alt="${project.title}">
        <div class="project-card-content">
          <p class="category">${project.category} • ${project.year}</p>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      </a>
    `;
  }
}

loadProjects();
