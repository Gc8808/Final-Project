document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("rosterGrid");
  if (grid) {
    const render = (list) => {
      grid.innerHTML = ""; // Clear grid before rendering

      list.forEach((p) => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-3 mb-4";

        col.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${p.photo}" class="card-img-top" alt="${p.name}" style="height: 200px; object-fit: cover;">
            <div class="card-body text-center">
              <h5 class="card-title mb-1">${p.name}</h5>
              <p class="card-text">Price: ${p.age}</p>
              <p class="card-text">Dimensions: ${p.country}</p>
              <span class="badge bg-dark mb-2">${p.position}</span><br>
              ${p.button}
            </div>
          </div>
        `;

        grid.appendChild(col);
      });
    };

    render(players);
  }

  // Splash screen and progress bar logic
  const splash = document.getElementById("splash");
  const mainContent = document.getElementById("main-content");
  const progressBar = document.getElementById("progress-bar");
  const startupSound = document.getElementById("startup-sound");

  let progress = 0;

  const interval = setInterval(() => {
    progress += 1;
    progressBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      splash.style.display = "none";
      mainContent.style.display = "block";
      if (startupSound) {
        startupSound.play();
      }
    }
    }, 25); // 100
  });