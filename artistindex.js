
let artistIndex = [];
let selectedType = "";
let whichPage = "";
let pictureIndex = 1;

let pArtist = function (pName, pWebsite, pCity, pArt) {
    this.name = pName;
    this.website = pWebsite;
    this.city = pCity;
    this.art = pArt;
}


//existing artists

artistIndex.push(new pArtist("Sarah Hughes", "apinchdifferent.com", "North Bend", "Painting"));
artistIndex.push(new pArtist("Tara Sreekuman", "plentyopixels.com", "Snoqualmie", "Photography"));
artistIndex.push(new pArtist("Jess Joy", "jessjoyart.com", "North Bend", "Painting"));
artistIndex.push(new pArtist("Noelle Rivas", "instagram.com/ceramics_bynoelle", "Seattle", "Sculpting"));
artistIndex.push(new pArtist("Pepper Allphin", "artbypepper.com", "North Bend", "Painting"));
artistIndex.push(new pArtist("Adel Anderson", "instagram.com/toymakery", "Seattle", "Other"));

//dom loaded



//functions

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


  var currentIndex = 0; // Start from 0 to match array index
  var slides = document.getElementById('slides');
  var nextButton = document.getElementById('next');

  // Images
  var myImages = [
    "art1.jpeg",
    "art2.jpeg",
    "art3.jpeg",
    "WillBrown1.jpg",
    "WillBrown2.jpg",
    "WillBrown3.jpg",
  ];

  // Captions
  var captionImages = [
    "WaterColor by Pepper Allphin",
    "Mural by Pepper Allphin",
    "Pet Rocks for Adoption by Pepper Allphin",
    "Original Abstract by Will Brown",
    "Solo tree landscape by Will Brown",
    "Original Abstract by Will Brown",
  ];

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

  // Buttons
  var nextButton = document.getElementById("next");
  var previousButton = document.getElementById("previous");

  previousButton.addEventListener("click", back, false);
  nextButton.addEventListener("click", next, false);

  function autoSlide() {
    setInterval(function () {
      next();
    }, 3000); // Change the interval (in milliseconds) as needed
  }

  // Trigger the automatic slideshow initially
  autoSlide();