
let artistIndex = [];
let selectedType = "";
let whichPage = "";
var currentIndex = 0; 
var slides = document.getElementById("slides");
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

//slideshow
var currentIndex = 0; // Start from 0 to match array index
var slides = document.getElementById('slides');
var nextButton = document.getElementById('next');
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

let pArtist = function (pName, pWebsite, pCity, pArt) {
    this.name = pName;
    this.website = pWebsite;
    this.city = pCity;
    this.art = pArt;
}
//buttons
nextButton.addEventListener("click", next, false);
previousButton.addEventListener("click", back, false);


//existing artists

artistIndex.push(new pArtist("Sarah Hughes", "apinchdifferent.com", "North Bend", "Painting"));
artistIndex.push(new pArtist("Tara Sreekuman", "plentyopixels.com", "Snoqualmie", "Photography"));
artistIndex.push(new pArtist("Jess Joy", "jessjoyart.com", "North Bend", "Painting"));
artistIndex.push(new pArtist("Noelle Rivas", "instagram.com/ceramics_bynoelle", "Seattle", "Sculpting"));
artistIndex.push(new pArtist("Pepper Allphin", "artbypepper.com", "North Bend", "Painting"));
artistIndex.push(new pArtist("Adel Anderson", "instagram.com/toymakery", "Seattle", "Other"));

//dom loaded

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("subButton").addEventListener("click", function () {
    addArtist();
  });

  document.getElementById("page").addEventListener("change", function (event) {
    whichPage = this.value; // 'this' refers to the element that triggered the event
  });

  // Trigger the automatic slideshow initially
  autoSlide();

  // search artist

function displayArtists(artists) {
  let artistsList = document.getElementById("artistsList");
  let filterType = document.getElementById("filterType").value;

  // Clear previous list
  artistsList.innerHTML = "";

  artists.forEach((artist) => {
    // Check if the artist matches the selected type or if "All" is selected
    if (filterType === "All" || artist.art === filterType) {
      let listItem = document.createElement("li");
      listItem.textContent = `${artist.name} - ${artist.city} - ${artist.art}`;
      artistsList.appendChild(listItem);
    }
  });
}


  //function descriptions
  function addArtist() {
    selectedType = document.getElementById("artType").value;
    let Artist = {
      name: document.getElementById("fName").value + " " + document.getElementById("lName").value,
      website: document.getElementById("website").value,
      city: document.getElementById("city").value,
      art: selectedType
    };
    artistIndex.push(Artist);
    console.log(artistIndex);
  };

  function autoSlide() {
    setInterval(function () {
      next();
    }, 3000); // Change the interval (in milliseconds) as needed
  }

  function updateImage() {
    document.getElementById("slideshow").src = myImages[currentIndex];
    document.getElementById("slideshow").alt = captionImages[currentIndex];
    document.getElementById("caption").textContent = captionImages[currentIndex];
  }

  function next() {
    currentIndex = (currentIndex + 1) % myImages.length;
    updateImage();
  }

  function back() {
    currentIndex = (currentIndex - 1 + myImages.length) % myImages.length;
    updateImage();
  }
})