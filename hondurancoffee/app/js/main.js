function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


function plusFunction() {
  var threedots = document.getElementById("threedots");
  var plusText = document.getElementById("plus");
  var btn1Text = document.getElementById("myBtn1");

  if (threedots.style.display === "none") {
    threedots.style.display = "inline";
    btn1Text.innerHTML = "Read more";
    plusText.style.display = "none";
  } else {
    threedots.style.display = "none";
    btn1Text.innerHTML = "Read less";
    plusText.style.display = "inline";
  }
}
