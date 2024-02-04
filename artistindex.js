
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


 
function moveSlides(n) {
    slideshow(pictureIndex += n);
}
 
function activeSlide(n) {
    slideshow(pictureIndex = n);
}
 
function slideshow(n) {
    let i;
    let allSlides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("footerdot");
 

    if (n > allSlides.length) {
        pictureIndex = 1;
    }

    if (n < 1) {
        pictureIndex = allSlides.length;
    }

    for (i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    allSlides[pictureIndex - 1].style.display = "block";
    dots[pictureIndex - 1].className += " active";
}