document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("rosterGrid");
  if (grid) {
    const render = (list) => {
      grid.innerHTML = ""; // Clear grid before rendering

      const row = document.createElement("div");
      row.className = "row"; // Ensure row wrapper is present

      list.forEach((p) => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4 col-lg-3 mb-4";

        col.innerHTML = `
          <div class="card h-100 w-100 shadow-sm">
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

        row.appendChild(col);
      });

      grid.appendChild(row); // Add the row to the grid container
    };

    render(players);
  }
});

  // Splash screen and progress bar logic
  const progressBar = document.getElementById("progressBar");
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.getElementById("mainContent");

  let progress = 0;
  const duration = 3000; // 3 seconds
  const interval = 30; // update every 30ms
  const step = 100 / (duration / interval);

  const loader = setInterval(() => {
    progress += step;
    progressBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(loader);
      loadingScreen.style.display = "none";
      mainContent.style.display = "block";
    }
  }, interval);