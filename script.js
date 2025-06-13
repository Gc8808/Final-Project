document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("rosterGrid");
  if (grid) {
    const render = (list) => {
      grid.innerHTML = "";
      const row = document.createElement("div");
      row.className = "row";
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
              <p class="badge bg-dark">${p.position}</p>
              ${p.button}
            </div>
          </div>
        `;
        row.appendChild(col);
      });
      grid.appendChild(row);
    };
    render(players);
  }

  const splash = document.getElementById("splash");
  const content = document.getElementById("main-content");
  const progressBar = document.getElementById("progress-bar");
  const audio = document.getElementById("startup-sound");

  if (splash && content && progressBar && audio) {
    window.addEventListener("load", () => {
      audio.play().catch((err) => {
        console.log("Autoplay blocked, will try on interaction:", err);
        document.body.addEventListener("click", () => audio.play(), { once: true });
      });
    });

    let progress = 0;
    const intervalTime = 50;
    const totalTime = 5000;
    const steps = totalTime / intervalTime;

    const interval = setInterval(() => {
      progress++;
      progressBar.style.width = `${(progress / steps) * 100}%`;
      if (progress >= steps) {
        clearInterval(interval);
        splash.style.opacity = "0";
        setTimeout(() => {
          splash.style.display = "none";
          content.style.display = "block";
        }, 1000);
      }
    }, intervalTime);
  }
});