
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

document.addEventListener("DOMContentLoaded", function(event) {

    $(document).bind("change", "#page", function (event, ui) {
        whichPage = document.getElementById("#page").value
    });

    slideshow(pictureIndex);

    document.getElementById("subButton").addEventListener("click", function() {
        addArtist();
        document.getElementById("addForm").reset();
    });

});

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


 
 var currentIndex = 1;
  var slides = document.getElementById('slides');
  var nextButton = document.getElementById('next');

//Images
var myImages = [
  "art1.jpeg",
  "art2.jpeg",
  "art3.jpeg",
  "WillBrown1.jpg",
  "WillBrown2.jpg",
  "WillBrown3.jpg",
];

// captions
var captionImages = [
  "art1",
  "art2",
  "art3",
  "Original Abstract by Will Brown",
  "Solo tree landscape by Will Brown",
  "Original Abstract by Will Brown",
];

var index = 0;
//fuctions

function updateImage() {
  document.getElementById("slideshow").src = myImages[index];
  document.getElementById("slideshow").alt = captionImages[index];
  document.getElementById("caption").textContent = captionImages[index];
}

function next() {
  if (myImages.length == index + 1) index = 0;
  else index++;
  updateImage();
}

function back() {
  if (index === 0) index = myImages.length - 1;
  else index--;

  updateImage();
}
//buttons
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);
 function autoSlide() {
   setInterval(function () {
     nextSlide();
   }, 3000); // Change the interval (in milliseconds) as needed
 }

 // Trigger the automatic slideshow initially
 autoSlide();