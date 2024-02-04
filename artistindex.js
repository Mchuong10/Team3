
let artistIndex = [];
let selectedType = "";

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

    document.getElementById("subButton").addEventListener("click", function() {
        addArtist();
    });
    
    $(document).on("change", "#artType", function (event, ui) {
        selectedType = document.getElementById("artType").value;
    });

});

//functions

function addArtist() {
    let Artist = {
        name: document.getElementById("fName").value + " " + document.getElementById("lName").value,
        website: document.getElementById("website").value,
        city: document.getElementById("city").value,
        art: selectedType
    };
    artistIndex.push(Artist);
    console.log(artistIndex);
};

