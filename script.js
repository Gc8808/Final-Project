document.addEventListener("DOMContentLoaded", () => {
  const rosterGrid = document.getElementById("rosterGrid");

  players.forEach((player) => {
    const card = document.createElement("div");
    // Use col-lg-2 to fit 5 cards in a row (12 / 5 ≈ 2.4, so col-lg-2 is closest)
    card.className = "col-12 col-sm-6 col-md-4 col-lg-4 center justify-content-center ";
    card.innerHTML = `
      <div class="card h-200 w-300  justify-content-center">
        <img src="${player.photo}" class="card-img-top" alt="${player.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${player.name}</h5>
          <p class="card-text"><strong>Price:</strong> ${player.age}</p>
          <p class="card-text"><strong>Age:</strong> ${player.position}</p>
          ${player.button}
        </div>
      </div>
    `;
    rosterGrid.appendChild(card);
  });
});

// Existing showProfile function (unchanged)
function showProfile(name) {
  const player = players.find((p) => p.name === name);
  if (!player) return;

  document.getElementById("modalHead").textContent = player.name;
  document.getElementById("modalBody").innerHTML = `
    <img src="${player.photo}" class="img-fluid mb-3" alt="${player.name}">
    <p><strong>Price:</strong> ${player.age}</p>
    <p><strong>Dimensions:</strong> ${player.country}</p>
    <p><strong>Recommended Age:</strong> ${player.position}</p>
    <p>${getBio(player.name)}</p>
  `;

  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
}

  // Splash screen and progress bar slogic
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