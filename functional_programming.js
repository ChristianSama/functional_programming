//1
const tea4TeamFCC = getTea(40);

//2
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

//3
this.tabs = this.tabs.filter((el, i) => i !== index)

//4
return fixedValue + 1;

//5
function add(books, bookName) {
    let arr = [...books];
    arr.push(bookName);
    return arr;
}

function remove(books, bookName) {
    let arr = [...books];
    arr = arr.filter(el => el !== bookName);
    return arr;
}

//6
const ratings = watchList.map(movie => ({title: movie.Title,
    rating: movie.imdbRating}));

    
//7
for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]))
}

//8
const filteredList = watchList.map(movie => ({title: movie.Title, 
    rating: movie.imdbRating}))
.filter(movie => movie.rating >= 8);

//9
const newArray = [];
for (let i = 0; i < this.length; i++) {
  if (callback(this[i])) {
    newArray.push(this[i])
  }
}

//10
return anim.slice(beginSlice, endSlice);

//11
return cities.slice(0, 3);

//12
return original.concat(attach);

//13
return original.concat(newItem);

//14
let ratings = watchList.filter(movie => movie.Director === "Christopher Nolan")
.map(movie => parseFloat(movie.imdbRating))

let averageRating = ratings.reduce((sum, r) => sum + r, 0)/ratings.length;

//15
return arr.filter(el => Number.isInteger(el) && el > 0)
.map(el => el*el)

//16
return arr.sort((a, b) => a === b ? 0 : a < b ? -1 : 1);

//17
return arr.concat().sort((a, b) => a - b);

//18
return str.split(/\W/);

//19
return str.split(/\W/).join(" ");

//20
return title.toLowerCase().split(" ").join("-");

//21
return title.toLowerCase().trim().split(/\ +/).join("-");

//22
return arr.every(el => el > 0);

//23
return arr.some(el => el > 0);

//24
return y => z => x + y + z;