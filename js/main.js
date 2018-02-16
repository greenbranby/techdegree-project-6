$('video').mediaelementplayer({
  features:  ['playpause',  'current', 'progress', 'duration', 'volume', 'fullscreen']
});

//----------Variables-----------------------

// Get the <video> element with id="myVideo"
const video = document.querySelector('video');
const span = document.getElementsByClassName('transcript');


//Listen for the video to start playing
video.addEventListener("timeupdate", () => {
    for (i = 0; i < span.length; i += 1) //loops through span tags
//Inside the loop, use a conditional to see if the video’s current time is
//greater than the data-start attribute and less than the data-end attribute.
          if (video.currentTime > span[i].getAttribute('data-start') &&
              video.currentTime < span[i].getAttribute('data-end')) {
//If the conditions are met, set the span’s color property
//  to the highlighted color of your choice #ff8200,
// and if not, set the span’s color back to its initial color. #383938.
              span[i].style.color ="#ff8200";
          } else {
              span[i].style.color = '#383938';
         }
  });


  for (i = 0; i < span.length; i += 1) { //loops through span tags
  // Attach a click event to the span, and execute a function if a click operation begins
      span[i].addEventListener('click', (event) =>  {
        video.currentTime = event.target.getAttribute('data-start');
        video.play();
  })
}
