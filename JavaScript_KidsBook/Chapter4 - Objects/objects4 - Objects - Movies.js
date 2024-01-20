//Movies Object:
var movies = {
    "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
    },
    "Star Wars: Episode VI - Return of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
    },
    "Harry Potter and the Goblet of Fire": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blu-ray"
    }
};

//Get information about a movie:
console.log(movies["Finding Nemo"]);
console.log("Finding Nemo release date: " + movies["Finding Nemo"].releaseDate);
console.log("Finding Nemo duration: " + movies["Finding Nemo"].duration);
console.log("Finding Nemo actors: " + movies["Finding Nemo"].actors);
console.log("Finding Nemo actors[1]: " + movies["Finding Nemo"].actors[1]);
console.log("Finding Nemo format: " + movies["Finding Nemo"].format);

//Store inner object in a variable
var findingNemo = movies["Finding Nemo"];
console.log(`Movie: $movies["Finding Nemo"].format`);
findingNemo.duration; //100
findingNemo.format; //DVD

//Add new movies:
//1. Creat cars object
var cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
    format: "Blu-ray"
    };
//2. Insert cars object into the movies object
    movies["Cars"] = cars;

    console.log(Object.keys(movies));
    console.log(movies);
    console.log(movies["Cars"]);

var upCloseAndPersonal = {
    releaseDate: 1996,
    duration: 124,
    actors: ['Robert Redford', 'Michelle Pfeiffer', 'Stockard Channing'],
    format: "DVD"
    };

    movies["Up Close and Personal"] = upCloseAndPersonal;

    console.log(movies);
    console.log(movies["Up Close and Personal"]);

var inception = {
    releaseDate: 2010,
    duration: 150,
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'], 
    format: "Blu-ray"
    };

    movies.Inception = inception;

    console.log(movies);
    console.log(movies["inception"]);
    console.log(movies["inception"].actors);