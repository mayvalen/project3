/* console.log("celebrities");

//create variable for airtable
var Airtable = require("airtable");
console.log(Airtable);

//connect to our base using API key 
var base = new Airtable({apiKey: "keyO9wq4XLHM7yf9d"}).base("appZer0PPJ4sMoXbN");


//get our collection base, select all the records 
//specify functions that will recieve the data
base("celebrities").select({
  maxRecords: 100,
  view: "Grid view"
}).eachPage(gotPageOfCelebrities, gotAllCelebrities);

// an empty array to hold our data
var celebrities = [];

// callback function that receives our data
function gotPageOfCelebrities(records, fetchNextPage) {
  console.log("gotPageOfCelebrities()");
  // add the records from this page to our rocks array
  celebrities.push(...records);
  // request more pages
  fetchNextPage();
}

//call back function that is called when all pages are loaded
function gotAllCelebrities(err) {
  console.log("gotAllCelebrities()");

  //report an error
  if (err) {
      console.log("error loading celebrities");
      console.error(err);
      return;
  }
      //call function to log and show the music 
      consoleLogCelebrities();
      showCelebrities();
}

// just loop through the books and console.log them
function consoleLogCelebrities() {
  console.log("consoleLogCelebrities()");
  celebrities.forEach((celebritie) => {
    console.log("Celebritie:", celebritie);
  });
}

//look through airtable data, create elements
function showCelebrities() {
  console.log("showCelebrities()");
  celebrities.forEach((celebritie) => {

        //show celebrity image 
        var celebImage = document.createElement("img");
        celebImage.classList.add("celeb-image");
        celebImage.src = celebritie.fields.image[0].url;
        document.querySelector(".container").append(celebImage); 

        
    })  
} */