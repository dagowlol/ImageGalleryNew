function upDate(previewPic) {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
    console.log("Image updated: " + previewPic.alt);
}

function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Hover over an image below to display here.";
    console.log("Image reset.");
}

function handleFocus(previewPic) {
    upDate(previewPic);
    console.log("Focused on image: " + previewPic.alt);
}

function handleBlur() {
    unDo();
    console.log("Blur event triggered.");
}

function initializeGallery() {
    console.log("Gallery initialized.");
    
    var images = document.querySelectorAll(".preview");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");

        images[i].addEventListener("mouseover", function() { upDate(this); });
        images[i].addEventListener("mouseleave", unDo);
        
        images[i].addEventListener("focus", function() { handleFocus(this); });
        images[i].addEventListener("blur", handleBlur);
    }
}
