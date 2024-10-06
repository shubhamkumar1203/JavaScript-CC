// All "Primitive Datatypes" uses -->> STACK MEMORY. 
// In STACK MEMORY, the variables which are declared we get "COPY" of that variables.

// All "Non Primitive Datatypes" uses -->> HEAP MEMORY.
// In HEAP MEMORY, the variables which are declared we get "REFERRENCE" of the original value.

let myYoutubeName = "shubhamchoudhary"

let anothername = myYoutubeName
anothername = "The UPSC"

console.log(myYoutubeName);
console.log(anothername);
