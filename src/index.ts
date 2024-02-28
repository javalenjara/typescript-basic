// const small = 1;
// const medium = 2;
// const large = 3;

// If this approach is used a string for every value must be provided.
// PascalCase
// enum Size { Small = 's', Medium = 'm', Large = 'l'};
enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);
