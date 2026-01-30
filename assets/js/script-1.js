

(function() {
  emailjs.init("5WsIU91e23TTPjdr_"); // ✅ User ID (Public Key)
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_vdy29zv",  // 👈 Remplace par ton vrai Service ID (ex: service_abc123)
    "template_zdhc0wb", // 👈 Vérifie que c'est le bon Template ID
    this
  ).then(
    function(response) {
      alert("Message envoyé avec succès !");
      console.log("Réponse du serveur :", response);
      document.getElementById("contact-form").reset(); // 👈 Réinitialise le formulaire après envoi
    },
    function(error) {
      alert("Erreur lors de l'envoi. Voir la console pour plus de détails.");
      console.error("Erreur EmailJS :", error); // 👈 Partage-moi cette erreur si elle persiste
    }
  );
});



const projects = [
    {
        title: "Stars wars style",
        description: "Conception du css de 0 afin d'avoir un site promotionnel pour stars wars",
        image: "",
        languages: ["CSS"],
        links: { github: "#" }
    },
    {
        title: "Street fusion",
        description: "Conception du site afin d'avoir un site promotionnel pour un food-truck",
        image: "./assets/img/street.png",
        languages: ["HTML", "CSS", "JavaScript"],
        links: { github: "#" }
    },
    {
        title: "Micromania",
        description: "Creation d'un design d'un site afin d'améliorer l'image de micromania",
        image: ".//assets/img/Micro.png",
        languages: ["Figma"],
        links: { figma: "https://www.figma.com/design/O4b84Cd1maR7pmSBJfn7Ta/Sans-titre?t=Gw31Gr59Ka40a7WQ-0" }
    },
    {
        title: "Culture & co",
        description: "Creation d'un design de site afin d'attirer de la clientel dans un musée d'art digital",
        image: ".//assets/img/Nft.png",
        languages: ["Figma"],
        links: { figma: "https://www.figma.com/design/6aBFNZgFANHAysFLBxyJyt/Projet-nft-Charron-L%C3%A9onin?node-id=0-1&p=f&t=Gw31Gr59Ka40a7WQ-0" }
    },
    {
        title: "Wonderline",
        description: "Creation d'un design de site pour le voyage des jeunes",
        image: ".//assets/img/Wanderly.png",
        languages: ["Figma"],
        links: { figma: "https://www.figma.com/design/smwHPNSa9qtZF4PDOuoy8W/Devoir-design-Leonin?t=Gw31Gr59Ka40a7WQ-0" }
    }
];

// =====================
// INIT
// =====================
document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
});

// =====================
// FUNCTIONS
// =====================
function loadProjects() {
    displayProjects(projects);
}

function displayProjects(projects) {
    const projectList = document.getElementById("project-list");


    projectList.innerHTML = "";

    projects.forEach(project => {
        const card = createProjectCard(project);
        projectList.appendChild(card);
    });
}

function createProjectCard(project) {
    const card = document.createElement("div");
    card.className = "project-card";

    // IMAGE
    const imageDiv = document.createElement("div");
    imageDiv.className = "project-image";
    imageDiv.innerHTML = `
        <img src="${project.image || 'https://via.placeholder.com/300x180'}" alt="${project.title}">
    `;

    // CONTENT
    const content = document.createElement("div");
    content.className = "project-content";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    // TECHS
    const techs = document.createElement("div");
    techs.className = "tech-badges";

    project.languages.forEach(lang => {
        const badge = document.createElement("span");
        badge.className = "tech-badge";
        badge.textContent = lang;
        techs.appendChild(badge);
    });

    // LINK
    const linkDiv = document.createElement("div");
    const link = document.createElement("a");
    link.href = project.links.github || project.links.figma || "#";
    link.target = "_blank";
    link.textContent = "Voir le projet";
    linkDiv.appendChild(link);

    // ASSEMBLY
    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(techs);
    content.appendChild(linkDiv);

    card.appendChild(imageDiv);
    card.appendChild(content);

    return card;
}

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const tech = button.dataset.tech;

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Filter logic
        if (tech === "all") {
            displayProjects(projects);
        } else {
            const filteredProjects = projects.filter(project =>
                project.languages.includes(tech)
            );
            displayProjects(filteredProjects);
        }
    });
});