artistIndex = [];
let selectedType = "";
let whichPage = "";
var currentIndex = 0;
var slides = document.getElementById("slides");


//images
var myImages = [
  "art1.jpeg",
  "art2.jpeg",
  "art3.jpeg",
  "WillBrown1.jpg",
  "WillBrown2.jpg",
  "WillBrown3.jpg",
];
//captions
var captionImages = [
  "WaterColor by Pepper Allphin",
  "Mural by Pepper Allphin",
  "Pet Rocks for Adoption by Pepper Allphin",
  "Original Abstract by Will Brown",
  "Solo tree landscape by Will Brown",
  "Original Abstract by Will Brown",
];

let pArtist = function (pID, pName, pWebsite, pCity, pArt) {
  this.ID = pID;
  this.name = pName;
  this.website = pWebsite;
  this.city = pCity;
  this.art = pArt;
  this.ID = artistIndex.length + 1;
};

//existing artists

artistIndex.push(
  new pArtist(
    1,
    "Sarah Hughes",
    "https://www.apinchdifferent.com/",
    "North Bend",
    "Painting"
  )
);
artistIndex.push(
  new pArtist(
    2,
    "Tara Sreekuman",
    "https://www.plentyopixels.com/",
    "Snoqualmie",
    "Photography"
  )
);
artistIndex.push(
  new pArtist(
    3,
    "Jess Joy",
    "https://www.jessjoyart.com/",
    "North Bend",
    "Painting"
  )
);
artistIndex.push(
  new pArtist(
    4,
    "Noelle Rivas",
    "https://www.instagram.com/ceramics_bynoelle/",
    "Seattle",
    "Sculpting"
  )
);
artistIndex.push(
  new pArtist(
    5,
    "Pepper Allphin",
    "https://www.instagram.com/pepper.allphin/",
    "North Bend",
    "Painting"
  )
);
artistIndex.push(
  new pArtist(
    6,
    "Adel Anderson",
    "https://www.instagram.com/toymakery/",
    "Seattle",
    "Other"
  )
);
displayArtists(artistIndex);

//dom loaded

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("subButton").addEventListener("click", function () {
    addArtist();
  });
  // $(document).bind("change", "#artType", function (event, ui) {
  //   selectedType = document.getElementById("artType").value;
  // });

  document.getElementById("filterType").addEventListener("change", function () {
    displayArtists();
  });

  // document.getElementById("page").addEventListener("change", function (event) {
  //   whichPage = this.value; // 'this' refers to the element that triggered the event
  // })
  createTable();
  // Trigger the automatic slideshow initially
});

//function descriptions
function displayArtists() {
  let artistsList = document.getElementById("artistsList");
  let filterType = document.getElementById("filterType").value;
  artistsList.innerHTML = "";

  artistIndex.forEach((Artist) => {
    // Check if the artist matches the selected type or if "All" is selected
    if (filterType === "All" || Artist.art === filterType) {
      let listItem = document.createElement("li");
      listItem.textContent = `${Artist.name} - ${Artist.city} - ${Artist.website} - ${Artist.art}`;
      artistsList.appendChild(listItem);
    }
  });
}

function addArtist() {
  selectedType = document.getElementById("artType").value;
  let Artist = {
    ID: artistIndex.length + 1,
    name:
      document.getElementById("fName").value +
      " " +
      document.getElementById("lName").value,
    website: document.getElementById("website").value,
    city: document.getElementById("city").value,
    art: selectedType,
  };
  artistIndex.push(Artist);
  document.location.href = "artistmain.html#list";
  // console.log(artistIndex);
}

function autoSlide() {
  setInterval(function () {
    next();
  }, 3000); // Change the interval (in milliseconds) as needed
}

function updateImage() {
  slides.src = myImages[currentIndex];
  slides.alt = captionImages[currentIndex];
  document.getElementById("caption").textContent = captionImages[currentIndex];
}

// Next function
function next() {
  currentIndex = (currentIndex + 1) % myImages.length;
  updateImage();
}

// Back function
function back() {
  currentIndex = (currentIndex - 1 + myImages.length) % myImages.length;
  updateImage();
}

// Trigger the automatic slideshow initially
autoSlide();

// create table
function createTable() {
  var theTable = document.getElementById("tableID");
  theTable.innerHTML = "";
  //column headings
  theTable.innerHTML =
    "<thead><th>ID</th><th>Name</th><th>Website</th><th>City</th><th>Art Type</th></thead>";
  //rows
  artistIndex.forEach((Artist) => {
    const newRow = document.createElement("tr");
    const tdID = document.createElement("td");
    const tdName = document.createElement("td");
    const tdWebsite = document.createElement("td");
    const tdCity = document.createElement("td");
    const tdArt = document.createElement("td");
    tdID.textContent = Artist.ID;
    tdName.textContent = Artist.name;
    tdWebsite.textContent = Artist.website;
    tdCity.textContent = Artist.city;
    tdArt.textContent = Artist.art;
    newRow.appendChild(tdID);
    newRow.appendChild(tdName);
    newRow.appendChild(tdWebsite);
    newRow.appendChild(tdCity);
    newRow.appendChild(tdArt);
    theTable.appendChild(newRow);
  });
  var table = document.getElementById("tableID");
  var rows = table.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = function (row) {
      return function () {
        var cell = row.getElementsByTagName("td")[0];
        var whichID = cell.innerHTML;
        openWebsite(whichID);
      };
    };

    currentRow.onclick = createClickHandler(currentRow);
  }
}

function openWebsite(which) {
  for (let i = 0; i < artistIndex.length; i++) {
    if (which == artistIndex[i].ID) {
      window.open(artistIndex[i].website);
    }
  }
}
