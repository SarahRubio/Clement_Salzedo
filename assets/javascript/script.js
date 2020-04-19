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



// Affichage path (refactorisation)

function RendreVisible(classPath) {
  let l = `${classPath}line`;
  let t = `${classPath}text`;
  let tb = `${classPath}textbis`;
  let a = `${classPath}arrow` ;
  document.querySelector(l).style.visibility="visible";
  document.querySelector(t).style.visibility="visible";
  document.querySelector(tb).style.visibility="visible";
  document.querySelector(a).style.visibility="visible";
}

function RendreInvisible(classPath) {
  let l = `${classPath}line`;
  let t = `${classPath}text`;
  let tb = `${classPath}textbis`;
  let a = `${classPath}arrow` ;
  document.querySelector(l).style.visibility="hidden";
  document.querySelector(t).style.visibility="hidden";
  document.querySelector(tb).style.visibility="hidden";
  document.querySelector(a).style.visibility="hidden";
}
if(document.querySelector('.red')) {
document.querySelector('.red').addEventListener("mouseenter", function () {
  RendreVisible('.red')
});
}

if(document.querySelector('.red')) {
document.querySelector('.red').addEventListener("mouseout", function () {
  RendreInvisible('.red')
});
}

// SHOOT rotation NY

// function trombiDynamique() {
//
//   imageVisible = '<img border="0" src="'+pictures[chiffre]+'">';
//   document.getElementById("box").innerHTML = imageVisible;
//   if(chiffre == longueur)
//       { chiffre = 0; }
//       else
//       { chiffre++; }
//   changement = 1;
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
// function startTrombi() {
//   let myVar = setTimeout("trombiDynamique()", (changement*2000))
// }
//
// function stopTrombi() {
//   clearTimeOut(myVar);
// }
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

let keepgoing = true;

if(document.querySelector('.newyork')){
function trombiDynamique1() {

  imageVisible = '<img border="0" src="'+ pictures[chiffre] +'">';
  document.getElementById("box").innerHTML = imageVisible;
  if(chiffre == longueur)
      { chiffre = 0; }
      else
      { chiffre++; }
  changement = 1;

  if(keepgoing){
    window.setTimeout("trombiDynamique1()", (changement*2000));
  }

}

pictures = new Array()
pictures[0] = 'assets/images/newyork1.png';
pictures[1] = 'assets/images/newyork2.png';
pictures[2] = 'assets/images/newyork3.png';
pictures[3] = 'assets/images/newyork4.png';
pictures[4] = 'assets/images/newyork5.png';
longueur = pictures.length-1;

liens = new Array()
liens[0] = 'lien_image1.html';
liens[1] = 'lien_image2.html';
liens[2] = 'lien_image3.html';
liens[3] = 'lien_image4.html';
liens[4] = 'lien_image5.html';
chiffre = 0;

function startTrombi1 () {
  keepgoing = true;
  trombiDynamique1();
}

function stopTrombi () {
  keepgoing = false;
}

document.querySelector('#box').addEventListener('mouseenter', function () {
  stopTrombi();
})

document.querySelector('#box').addEventListener('mouseout', function () {
  startTrombi1();
})
}

// ROTATION L'histoire Trouble de M.pierre

if (document.querySelector('.lhistoiretroubledempierre')) {

let keepgoing = true;

function trombiDynamique2() {

  imageVisible = '<img border="0" src="'+ pictures[chiffre] +'">';
  document.getElementById("box").innerHTML = imageVisible;
  if(chiffre == longueur)
      { chiffre = 0; }
      else
      { chiffre++; }
  changement = 1;

  if(keepgoing){
    window.setTimeout("trombiDynamique2()", (changement*2000));
  }

}

pictures = new Array()
pictures[0] = 'assets/images/lhistoiretroubledempierre1.jpg';
pictures[1] = 'assets/images/lhistoiretroubledempierre2.jpg';
pictures[2] = 'assets/images/lhistoiretroubledempierre3.jpg';
pictures[3] = 'assets/images/lhistoiretroubledempierre4.jpg';
pictures[4] = 'assets/images/lhistoiretroubledempierre5.jpg';
longueur = pictures.length-1;

liens = new Array()
liens[0] = 'lien_image1.html';
liens[1] = 'lien_image2.html';
liens[2] = 'lien_image3.html';
liens[3] = 'lien_image4.html';
liens[4] = 'lien_image5.html';
chiffre = 0;

function startTrombi2 () {
  keepgoing = true;
  trombiDynamique2();
}

function stopTrombi () {
  keepgoing = false;
}

document.querySelector('#box').addEventListener('mouseenter', function () {
  stopTrombi();
})

document.querySelector('#box').addEventListener('mouseout', function () {
  startTrombi2();
})
}



// ///////////////////////////////////////////// REMAIN
//
//
// document.querySelector(".red").addEventListener("mouseenter", function () {
//   document.querySelector(".redline").style.visibility="visible";
//   document.querySelector(".redtext").style.visibility="visible";
//   document.querySelector(".redtextbis").style.visibility="visible";
//   document.querySelector(".redarrow").style.visibility="visible";
// });
//
// document.querySelector(".red").addEventListener("mouseout", function () {
//   document.querySelector(".redline").style.visibility="hidden";
//   document.querySelector(".redtext").style.visibility="hidden";
//   document.querySelector(".redtextbis").style.visibility="hidden";
//   document.querySelector(".redarrow").style.visibility="hidden";
// });
//
// document.querySelector(".yellow").addEventListener("mouseenter", function () {
//   document.querySelector(".yellowtext").style.visibility="visible";
//   document.querySelector(".yellowline").style.visibility="visible";
//   document.querySelector(".yellowarrow").style.visibility="visible";
// });
//
// document.querySelector(".yellow2").addEventListener("mouseout", function () {
//   document.querySelector(".yellowtext2").style.visibility="hidden";
//   document.querySelector(".yellowline2").style.visibility="hidden";
//   document.querySelector(".yellowarrow2").style.visibility="hidden";
// });
//
// document.querySelector(".yellow2").addEventListener("mouseenter", function () {
//   document.querySelector(".yellowtext2").style.visibility="visible";
//   document.querySelector(".yellowline2").style.visibility="visible";
//   document.querySelector(".yellowarrow2").style.visibility="visible";
// });
//
// document.querySelector(".yellow").addEventListener("mouseout", function () {
//   document.querySelector(".yellowtext").style.visibility="hidden";
//   document.querySelector(".yellowline").style.visibility="hidden";
//   document.querySelector(".yellowarrow").style.visibility="hidden";
// });
//
// document.querySelector(".red2").addEventListener("mouseenter", function () {
//   document.querySelector(".redtext2").style.visibility="visible";
//   document.querySelector(".redline2").style.visibility="visible";
//   document.querySelector(".redarrow2").style.visibility="visible";
// });
//
// document.querySelector(".red2").addEventListener("mouseout", function () {
//   document.querySelector(".redtext2").style.visibility="hidden";
//   document.querySelector(".redline2").style.visibility="hidden";
//   document.querySelector(".redarrow2").style.visibility="hidden";
// });
//
// document.querySelector(".green").addEventListener("mouseenter", function () {
//   document.querySelector(".greentext").style.visibility="visible";
//   document.querySelector(".greenline").style.visibility="visible";
//   document.querySelector(".greenarrow").style.visibility="visible";
// });
//
// document.querySelector(".green").addEventListener("mouseout", function () {
//   document.querySelector(".greentext").style.visibility="hidden";
//   document.querySelector(".greenline").style.visibility="hidden";
//   document.querySelector(".greenarrow").style.visibility="hidden";
// });
//
// document.querySelector(".red3").addEventListener("mouseenter", function () {
//   document.querySelector(".redtext3").style.visibility="visible";
//   document.querySelector(".redline3").style.visibility="visible";
//   document.querySelector(".redarrow3").style.visibility="visible";
// });
//
// document.querySelector(".red3").addEventListener("mouseout", function () {
//   document.querySelector(".redtext3").style.visibility="hidden";
//   document.querySelector(".redline3").style.visibility="hidden";
//   document.querySelector(".redarrow3").style.visibility="hidden";
// });
