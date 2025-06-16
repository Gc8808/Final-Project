const players = [
  {
    name: "Wooden Airplane",
    age: "$5.00",
    country: "3.5 inches height ; 7 inches length ; 7 inches width",
    position: "5+ years",
    photo: "plane3.jpg",
    button: '<button onclick="showProfile(\'Wooden Airplane\')" class="btn btn-primary">View Details</button>',
  },
  {
    name: "Wooden Train Set",
    age: "$6.99",
    country: "84cm large ; 11cm height ; 13cm width",
    position: "3+ years",
    photo: "train5.jpg",
    button: '<button onclick="showProfile(\'Wooden Train Set\')" class="btn btn-primary">View Details</button>',
  },
  {
    name: "Wooden Boat",
    age: "$7.49",
    country: "10.5 width ; 3.5 height",
    position: "All ages",
    photo: "boat2.jpg",
    button: '<button onclick="showProfile(\'Wooden Boat\')" class="btn btn-primary">View Details</button>',
  },
  {
    name: "Wooden Block Set",
    age: "$5.30",
    country: "13 large ; 12 width; 2 height",
    position: "3+ years",
    photo: "block2.jpg",
    button: '<button onclick="showProfile(\'Wooden Block Set\')" class="btn btn-primary">View Details</button>',
  },
  {
    name: "Wooden Car",
    age: "$6.79",
    country: "16 width ; 7 height",
    position: "6+ years",
    photo: "car3.jpg",
    button: '<button onclick="showProfile(\'Wooden Car\')" class="btn btn-primary">View Details</button>',
  },
];

function getBio(name) {
  const bios = {
    "Wooden Airplane": "A handcrafted wooden airplane, perfect for kids ages 5 and up.",
    "Wooden Train Set": "Classic wooden train set with multiple pieces, ideal for children 3 and older.",
    "Wooden Boat": "Smooth-finished wooden boat toy suitable for all ages.",
    "Wooden Block Set": "Set of wooden blocks to inspire creativity in children over 3 years.",
    "Wooden Car": "Durable wooden car designed for kids 6 and up.",
  };
  return bios[name] || "";
}

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