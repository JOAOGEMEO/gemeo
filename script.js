const projectFiles = [
  "/content/projects/project-01.json"
];

async function loadProjects() {
  const container = document.getElementById("projects");

  if (!container) return;

  container.innerHTML = "<p>Loading projects...</p>";

  try {
    const projects = await Promise.all(
      projectFiles.map(async (file) => {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Could not load ${file}`);
        return response.json();
      })
    );

    container.innerHTML = projects.map(project => `
      <a class="project-card" href="${project.video}" target="_blank" rel="noopener">
        <img src="${project.thumbnail}" alt="${project.title}">
        <div class="project-card-content">
          <p class="category">${project.category} • ${project.year}</p>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      </a>
    `).join("");

  } catch (error) {
    container.innerHTML = "<p>Unable to load projects.</p>";
    console.error(error);
  }
}

loadProjects();
