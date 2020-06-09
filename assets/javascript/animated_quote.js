// animated_quote : Au chargement de la page, la citation commence à s'écrire lettre par lettre. 

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
