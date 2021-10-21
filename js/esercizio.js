/* CONSEGNA
[
  [“Giacomo”, “Stefania”, “Sandro”, “Maria”, “Marta”, “Giorgia”, “Franco”, Valentina],
  [12, 32, 21, 47, 6, 78, 54, 32]
] */ 

let str = prompt("Inserisci 5 nomi separati da una virgola", `Stefania,Sandro,Maria,Giacomo,Giorgia`);
let arrAge = [32, 21, 47, 12, 78];

let arr1 = str.split(',');

arr1.push('Franco', 'Valentina');
arr1.unshift('Giacomo');
arr1.splice(4,1,'Marta');

arrAge.push(54, 32);
arrAge.unshift(12);
arrAge.splice(4,1,6);

let test = [arr1, arrAge];
console.log(test);
