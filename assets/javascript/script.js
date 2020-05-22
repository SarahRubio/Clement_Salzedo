// Hamburger menu

document.querySelector('.hamburger').addEventListener('click', function () {
  document.querySelector('nav').style.visibility="visible";
  document.querySelector('.hamburger').style.display="none";
  document.querySelector('.cross').style.display="inline";
});

document.querySelector('.cross').addEventListener('click', function () {
  document.querySelector('nav').style.visibility="hidden";
  document.querySelector('.hamburger').style.display="inline";
  document.querySelector('.cross').style.display="none";
});

// animated_text

function animated_text1() {
  let delay = 2000,
    delay_start = 0,
    contents,
    letters;
  document.querySelectorAll(".animated-text").forEach(function (elem) {
    contents = elem.textContent.trim();
    elem.textContent = "";
    letters = contents.split("");
    letters.forEach(function (letter, index_1) {
      setTimeout(function () {
        elem.textContent += letter;
      }, delay_start + delay * (index_1 / 10));
    });
    delay_start += delay * letters.length / 10;
  });
}
animated_text1()


// Affichage path (refactorisation)

function RendreVisible(classPath) {
  document.querySelectorAll(`[data-color="${classPath}"]`).forEach(function(path){
    path.style.visibility="visible";
  });
};

function RendreInvisible(classPath) {
  document.querySelectorAll('[data-color="' + classPath + '"]').forEach(function(path){
    path.style.visibility="hidden";
  });
};

if(document.querySelector('.red')) {
document.querySelector('.red').addEventListener("mouseenter", function () {
  RendreVisible('red');
});
}

if(document.querySelector('.red')) {
document.querySelector('.red').addEventListener("mouseout", function () {
  RendreInvisible('red')
});
}

// SHOOT rotation NY
//
// function startTrombi() {
//   setTimeout(trombiDynamique(), 2000);
//   let timer = setTimeout(trombiDynamique(), 2000);
// }
//
// function stopTrombi() {
//   clearTimeOut(timer);
// }
//
// function trombiDynamique() {
//
//   imageVisible = '<img border="0" src="'+pictures[chiffre]+'">';
//
//   document.getElementById("box").innerHTML = imageVisible;
//
//   if(chiffre == longueur) {
//     chiffre = 0;
//   } else {
//     chiffre++;
//   };
//
// }
//
// document.querySelector('#box').addEventListener('mouseenter', function () {
//   stopTrombi();
// })
//
// document.querySelector('#box').addEventListener('mouseout', function () {
//   startTrombi();
// })
//
//   pictures = new Array()
//   pictures[0] = 'assets/images/newyork1.png';
//   pictures[1] = 'assets/images/newyork2.png';
//   pictures[2] = 'assets/images/newyork3.png';
//   pictures[3] = 'assets/images/newyork4.png';
//   pictures[4] = 'assets/images/newyork5.png';
//   longueur = pictures.length-1;
//
//   liens = new Array()
//   liens[0] = 'lien_image1.html';
//   liens[1] = 'lien_image2.html';
//   liens[2] = 'lien_image3.html';
//   liens[3] = 'lien_image4.html';
//   liens[4] = 'lien_image5.html';
//   chiffre = 0;

// let keepgoing = true;
//
// if(document.querySelector('.newyork')){
// function trombiDynamique1() {
//
//   imageVisible = '<img border="0" src="'+ pictures[chiffre] +'">';
//   document.getElementById("box").innerHTML = imageVisible;
//   if(chiffre == longueur)
//       { chiffre = 0; }
//       else
//       { chiffre++; }
//   changement = 1;
//
//   if(keepgoing){
//     window.setTimeout("trombiDynamique1()", (changement*2000));
//   }
//
// }
//
// pictures = new Array()
// pictures[0] = 'assets/images/newyork1.png';
// pictures[1] = 'assets/images/newyork2.png';
// pictures[2] = 'assets/images/newyork3.png';
// pictures[3] = 'assets/images/newyork4.png';
// pictures[4] = 'assets/images/newyork5.png';
// longueur = pictures.length-1;
//
// liens = new Array()
// liens[0] = 'lien_image1.html';
// liens[1] = 'lien_image2.html';
// liens[2] = 'lien_image3.html';
// liens[3] = 'lien_image4.html';
// liens[4] = 'lien_image5.html';
// chiffre = 0;
//
// function startTrombi1 () {
//   keepgoing = true;
//   trombiDynamique1();
// }
//
// function stopTrombi () {
//   keepgoing = false;
// }
//
// document.querySelector('#box').addEventListener('mouseenter', function () {
//   stopTrombi();
// })
//
// document.querySelector('#box').addEventListener('mouseout', function () {
//   startTrombi1();
// })
// }
