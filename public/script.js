window.addEventListener("load",function()
{ 
  //set up translator
  var translator = new showdown.Converter();

  //grab preconverted text and its final destination
  var writings = document.getElementById('paper');
  var markdownText = document.getElementById('markdown');

  var rosetta = function(){
   var toBeConverted = writings.value;
   var converted = translator.makeHtml(toBeConverted);
   markdownText.innerHTML = converted;
  };
  
  paper.addEventListener('input', rosetta);

  rosetta();

}); 