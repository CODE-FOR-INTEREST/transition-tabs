;(function(){
  var mask = document.querySelector("#mask rect");

  var handleClick = function(e){
    console.log("click",e);
  };

  document.querySelector(".transition-tabs div").addEventListener("click", function(e){
    var target = e.target;
    if (target.nodeName.toLowerCase() == "span") {
      var end = target.offsetLeft;
      mask.style.transform = "translateX(" + end + "px)";
      if (handleClick) {
        handleClick(e);        
      }
    }
  });
})();
