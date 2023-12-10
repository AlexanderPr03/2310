let a = 10;
let nume = 'Alexandru';

// Operatorul de verificare a egalitatii == (egalitate slaba)

// console.log(nume == 'Alexandru')  - true

// console.log(10 == '10');

// Operatorul de verificare egalitatii stricte === (egalitate stricta)

// console.log(10 === '10');


// Operatorul de verificare a inegalitatii != (inegalitate slaba)

// console.log(10 != '10');


// Operatorul de verificare inegalitatii stricte !== (inegalitate stricta)

// console.log(10 !== '10');


// Comparatii:

// >
// console.log(6 > 5);

// <
// console.log(6 < 5);

// >=
// console.log(5 >= 5);

// <=
// console.log(4 <= 5);



// OPERATORII LOGICI

// AND (și) -   &&

let email = 'a@b.c';


// console.log(username == 'adin' && password == '12345');
//                 false                   true


// OR (sau) - ||

// console.log(username == 'admidwadwadawn' || email == 'a@b.c');
//                  false                     true

// NOT -   !
// console.log(!false)


// if - else
let username = 'admin';
let password = '12345';


if (username == 'admin' && password == '12345') {
    
} else if (username != 'admin' && password == '12345') {
    console.log('Usernameul este gresit!');

    // prin DOM să facem vizibil în pagină un mesaj de eroare
} else if (username == 'admin' && password != '12345') {
    console.log('Parola este gresita!');
} else {
    console.log('Username-ul si parola sunt gresite!');
}

let temperatura = 30;

if (temperatura < 15) {
    console.log('Afara este frig!');
} else if (temperatura >=15 && temperatura <= 28) {
    console.log('Afara temperatura este ok!');
} else {
    console.log('Afara este cald!')
}


// switch

let ziSaptamana = 'dwadwadwadadad';

switch (ziSaptamana) {
    case 'Luni':
        console.log('Prima zi a saptamanii!');
        break;
    
    case 'Marti':
        console.log('A doua zi a saptamanii!');
        break;

    case 'Miercuri':
        console.log('A treia zi a saptamanii!');
        break;

    default:
        console.log('A doua jumatate a saptamanii!');

}


let masina = {
    companie: 'Toyota',
    motor: {
        volum: 2.4,
        cilindri: 4,
    },
    manual: false


    // Obiectele pot sa contina si functii
}
// stergerea unei proprietati
delete masina.companie;


// crearea/modificarea unei proprietati
masina.model = 'Corolla';




console.log(masina.motor.cilindri);

console.log(console);


// Array-uri
// let nume1 = 'Ion';
// let nume2 = 'Alexandru';
// let nume3 = 'Maria';

let lista_nume = ['Ion','Alexandru','Maria'];
console.log(lista_nume);

console.log(lista_nume[1])
console.log(lista_nume[2])

// Adaugarea unui element la sfarsitul arrayului
// lista_nume.push('Vlad');

// Scoaterea unui element de la capatul arrayului
// lista_nume.pop();


lista_nume.reverse();

console.log(lista_nume);

let masini = [
    {
        companie: 'Toyota',
        motor: {
            volum: 2.4,
            cilindri: 4,
        },
        manual: false
    },
    {
        companie: 'Hyundai',
        motor: {
            volum: 2.4,
            cilindri: 4,
        },
        manual: false
    },
    {
        companie: 'BMW',
        motor: {
            volum: 2.4,
            cilindri: 4,
        },
        manual: false
    }
]
// let i=5;
// i++;
// i++
// console.log(i); // i = 7;
// console.log(masini);

let menu_items = ['Transport', 'Imobiliare', 'Aparate telefonice și gadget-uri', 'Calculatoare și birotică', 'Construcții și reparații', 'Haine, încălțăminte și accesorii','Mobilă și interior'];

// menu_items.length - lungimea arrayului

// ciclu for 
for (let i=0; i<menu_items.length; i++) {
    // console.log(menu_items[i]);
}

// ciclu for-of

// optional*** - for-each, for-in

for (const element of menu_items) {
    console.log(element);
}


// ciclul while
// let i=0;

// while (i<=10) {
//     console.log(i);


// }


// optional*** - do-while

// console.log(i);


function greetUser(nume) {
    // executam niste operatii

    return 'Bine ai revenit, ' + nume;
}

lista_nume = ['Ion','Alexandru','Maria','Vlad'];

for (const element of lista_nume) {
    console.log(greetUser(element));
}
