// links to images placed in this image array.
var images = ["https://i.pinimg.com/originals/bf/0f/6c/bf0f6c1f48a4aef8ed1cc740ff757e29.jpg", "https://dak95nwic4sny.cloudfront.net/73/thailand-40155070-1508147260-ImageGalleryLightboxLarge.jpg", "https://i.ytimg.com/vi/ZP2nKrhEU68/maxresdefault.jpg"];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// jQuery used to run "startSlideshow" when we click the "start" button.
$("#start").click(startSlideshow);

// jQuery used to run "stopSlideshow" when we click the "stop" button.
$("#stop").click(stopSlideshow);


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {
  //  Increment the count by 1.
  count++;

  // Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img src='images/loading.gif' width='200px'/>");

  // Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
  }
}

function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);

}

function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);

}

// This will run the display image function as soon as the page loads.
displayImage();
