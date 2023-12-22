let img = document.querySelector('#imagineGalerie');
let indexText = document.querySelector('#index_img');

let imagini = [
    /*0*/   'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/07/Screenshot-1.png?resize=1210%2C642&ssl=1',
    /*1*/   'https://kinsta.com/wp-content/uploads/2021/11/front-end-developer.png',
    /*2*/   'https://t3.ftcdn.net/jpg/02/92/88/72/360_F_292887204_2wH041phSQo70eqaE9GRqFvn5MmQ4B8w.jpg',
    /*3*/   'https://www.weblineindia.com/wp-content/uploads/2017/04/front-end-development-with-weblineindia-1.jpg',
    /*4*/   'https://techvify-software.com/wp-content/uploads/2023/07/frontend-development-tools.png',
    /*5*/   'https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg',
    
   ]
   
   img.setAttribute('src', imagini[0])
   indexText.textContent = 1;
   
   let imagineCurenta = 0; // - va contine in interiorul acesteia indicele imaginii curente
   function nextImage() {
       imagineCurenta++; // 0->1, 1->2 etc
   
       // daca ajungem la sfarsitul listei, resetam valoarea la imagineCurenta la 0
       // if (imagineCurenta == imagini.length) {
       //     imagineCurenta=0;
       // }
   
       // **
   
       imagineCurenta = imagineCurenta % imagini.length;
   
       indexText.textContent = imagineCurenta+1;
   
   
       img.setAttribute('src', imagini[imagineCurenta])
   
       console.log(imagineCurenta)
       console.log(img.getAttribute('src'));
   
   
   }
   
   
   
   function previousImage() {
   
       imagineCurenta--; // 3->2, 2->1, 1->0
   
       if (imagineCurenta == -1) {
           imagineCurenta = imagini.length-1;
       }
   
       indexText.textContent = imagineCurenta+1;
   
       // ***
       // imagineCurenta = imagineCurenta % imagini.length;
   
       img.setAttribute('src', imagini[imagineCurenta])
   
   
       console.log(imagineCurenta)
       console.log(img.getAttribute('src'));
       
   }
   
   function changeImage(actiune) {
       if (actiune == 'next') {
   
       } else if (actiune == 'previous') {
           
       }
   }
   
   let container_card = document.querySelector('#container');
   
   function addCard() {
   
       // Cream cardul
   
       let div_card = document.createElement('div');
       div_card.classList.add('card');
   
   
       // Cream titlul
       let titlu_card = document.createElement('h1');
       titlu_card.classList.add('titlu');
   
       // Cream descrierea
       let desc_card = document.createElement('p');
       desc_card.classList.add('desc');
       desc_card.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis inventore quos atque numquam, sequi sit dolore, unde laborum rem nemo impedit molestiae reprehenderit ratione voluptatem voluptatum error minus temporibus ullam.';
   
       div_card.append(titlu_card);
       div_card.append(desc_card);
   
       container_card.append(div_card);


   }
   

let paragraf = document.createElement('h4');
paragraf.textContent = "Frontend Development";

let box = document.querySelector('.box');


// O functie generala de inserare a elementelor in pagina
// box.insertAdjacentElement('afterend', paragraf);


function greetUser(nume) {
    // executam niste operatii

    return 'Bine ai revenit, ' + nume +"!";
}

// Arrow function (functie sageata)
let greetUser2 = (nume) => ('Bine ai revenit, ' + nume + '!');

console.log(greetUser2('Alexandru'));

// let, const
// var


img = document.querySelector('#imagineGalerie');

function moveImage() {
    let img = document.createElement('img');
    img.setAttribute('src', 'https://techvify-software.com/wp-content/uploads/2023/07/frontend-development-tools.png');

    document.body.insertAdjacentElement('beforeend',img)
}

moveImage();

    {
        var nume = 'Alexandru';
    }

    console.log(nume);


// LOCAL STORAGE SI SESSION STORAGE

if (localStorage.getItem('darkMode')=='true') {
    bodyDarkMode();
}



function bodyDarkMode() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}
function bodyWhiteMode() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}

let butonDarkMode = document.querySelector('#button_dark_mode');

function setDarkMode() {
        if (localStorage.getItem('darkMode')=='true'){
            bodyWhiteMode();
            localStorage.removeItem('darkMode');
        } else {
            localStorage.setItem('darkMode','true');
            bodyDarkMode();
        }
}

butonDarkMode.addEventListener("click", setDarkMode);


butonDarkMode.addEventListener('mouseenter', () => {
    butonDarkMode.classList.add('loadInversat');
})
butonDarkMode.addEventListener('mouseleave', () => {
    butonDarkMode.classList.remove('loadInversat');
})


let textInputBox = document.querySelector('#textInputBox');

// textInputBox.addEventListener('keydown', function() {
//     textInputBox.style.backgroundColor = 'red';
// })
// textInputBox.addEventListener('keyup', function() {
//     textInputBox.style.backgroundColor = '';
// })

let formLogin = document.querySelector('#formLogin');

formLogin.addEventListener('submit', function(event) {
    event.preventDefault();

    // o functie care trimite datele pe server
    // 
    // 

    formLogin.reset();

    let alerta = document.querySelector('#submissionSuccess');
    alerta.style.opacity = '1';   

})

// focus, blur
let inputsForm = document.querySelectorAll('.inputForm');

for (const input of inputsForm) {
    input.addEventListener('focus', function() {
        input.classList.add('enteredInput');
    })

    // blur pentru a scoate clasa
}

// load, unload
// document.addEventListener('load');
// document.addEventListener('unload');


// Evenimentul scroll
window.addEventListener('scroll', bodyDarkMode);


window.addEventListener('resize', function() {
    console.log('Ecran Schimbat')
})

// mousedown, mouseup, mousemove

let passwordInput = document.querySelector('#passwordInput');
let passwordCount = document.querySelector('#passwordCount');


passwordInput.addEventListener('input', function() {
    passwordCount.textContent = passwordInput.value;
})

// dblclick

// touchstart, touchend, touchmove


// transitioned


// offline/online
// window.addEventListener('online');
// window.addEventListener('offline');

// hashchange

// window.addEventListener('hashchange');