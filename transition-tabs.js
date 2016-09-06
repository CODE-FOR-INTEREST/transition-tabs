;(function(){
  var mask = document.querySelector("#mask rect");

  var handleClick = function(e){
    console.log("click",e);
  };

  document.querySelector(".transition-tabs div").addEventListener("click", function(e){
    var target = e.target;
    if (target.nodeName.toLowerCase() == "span") {
      var end = target.offsetLeft;
      var translate = "translateX(" + end + "px)";
      mask.style.transform = translate;
      mask.style["-webkit-transform"] = translate;
      if (handleClick) {
        handleClick(e);
      }
    }
  });
})();
