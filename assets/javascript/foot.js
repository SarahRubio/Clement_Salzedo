// Au survol d'une zone du pied, s'affiche une légende. 

function RendreVisible(classPath) {
  document.querySelectorAll(`[data-color="${classPath}"]`).forEach(function(path){
    path.style.visibility="visible";
  });
};

function RendreInvisible(classPath) {
  document.querySelectorAll(`[data-color="${classPath}"]`).forEach(function(path){
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
