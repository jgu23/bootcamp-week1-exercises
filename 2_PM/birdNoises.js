document.addEventListener('DOMContentLoaded', function() {

    /* Find all images in the bird's page */
    let images = document.querySelectorAll('img');

    /* Find the audio file */
    let birdNoise= document.querySelector('audio');

    /* Play the audio whenever the cursor passes over one of the images */
    for (let image of images) {
        image.addEventListener('mouseover', function() {
            birdNoise.play();
        });
    }
});