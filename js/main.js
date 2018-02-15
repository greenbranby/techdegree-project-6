$('video').mediaelementplayer({
  features:  ['playpause',  'current', 'progress', 'duration', 'volume', 'fullscreen']
});
// Get the <video> element with id="myVideo"
const video = document.querySelector('video');
const span = document.getElementsByClassName('transcript');


//Listen for the video to start playing
video.addEventListener("timeupdate", () => {


    for (i = 0; i < span.length; i += 1) //loops through span tags

          if (video.currentTime > span[i].getAttribute('data-start') &&
              video.currentTime < span[i].getAttribute('data-end')) {
              span[i].style.color ="orange";
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
