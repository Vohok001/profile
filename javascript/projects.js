
  const projectsData = {
    "1": {
      title: "Villanous Villas",
      description: "Villanous Villas is an Airbnb-inspired marketplace for villain lairs, offering uniquely themed hideouts for those with a taste for mischief. The platform blends playful humor with innovative design, transforming property rental into a memorable, immersive adventure. It’s the perfect solution for anyone looking to book a lair that truly stands out.",
      images: [
        "images/villas/VVhp.png",
        "images/villas/VV1.png",
        "images/villas/VV2.png",
        "images/villas/VV3.png",
        "images/villas/VV4.png",
        "images/villas/VV5.png",
        "images/villas/VV6.png",
        "images/villas/VV7.png",
        "images/villas/VV8.png",
        "images/villas/VV9.png",
        "images/villas/VV10.png",
        "images/villas/VV11.png",
      ]
    },
    "2": {
      title: "Quest Odyssey",
      description: "Quest Odyssey is a dynamic platform designed for Dungeons & Dragons enthusiasts to manage campaigns, schedule sessions, and track character stats effortlessly. The app features interactive availability scheduling and real-time chat, empowering teams to coordinate epic adventures. Its modern design and intuitive interface make quest planning a seamless experience.",
      images: [
        "images/quest/QO1.png",
        "images/quest/QO2.png",
        "images/quest/QO3.png",
        "images/quest/QO4.png",
        "images/quest/QO5.png",
        "images/quest/QO6.png",
        "images/quest/QO7.png",
        "images/quest/QO8.png",
        "images/quest/QO9.png",
        "images/quest/QO11.png",
        "images/quest/QO12.png",
        "images/quest/QO15.png",
        "images/quest/QO16.png",
      ]
    }
    // Add additional projects as needed.
  };

  document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link navigation
        const projectId = this.getAttribute("data-project-id");
        renderModal(projectId);
      });
    });

    function renderModal(projectId) {
      // Retrieve project data (or use defaults if not found)
      const project = projectsData[projectId] || {
        title: "Project Showcase",
        description: "No description available.",
        images: ["images/default_project.png"]
      };

      // Build carousel items HTML dynamically
      let carouselItemsHtml = "";
      project.images.forEach((imgUrl, index) => {
        carouselItemsHtml += `
          <div class="carousel-item ${index === 0 ? "active" : ""}">
            <img src="${imgUrl}" class="d-block " alt="Project image">
          </div>
        `;
      });

      // Construct the full modal HTML
      const modalHtml = `
        <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="projectModalLabel">${project.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div id="projectCarousel" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    ${carouselItemsHtml}
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <p class="mt-3">${project.description}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      `;

      // Inject the modal HTML into the modal container
      const modalContainer = document.getElementById("modal-container");
      modalContainer.innerHTML = modalHtml;

      // Initialize and show the modal using Bootstrap's Modal API
      const modalElement = document.getElementById("projectModal");
      const modal = new bootstrap.Modal(modalElement);
      modal.show();

      // Optionally, remove the modal from the DOM when it's hidden to keep things clean
      modalElement.addEventListener('hidden.bs.modal', function () {
        modalContainer.innerHTML = "";
      });
    }
  });
