"use strict"

var modal = document.getElementById("fn");

var img = document.getElementById("pic1");
var modalImg = document.getElementById("img1");

img.onclick = function()
{
   modal.style.display = "block";
   modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function()
{
    modal.style.display = "none";
}

window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}
