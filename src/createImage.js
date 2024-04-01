/**
 * Here are the black and white photos of the brand based on their class.
 * That returns a presentation.
 */
let images = document.getElementsByClassName("img");
/**
 * This functionality captures the images by capturing each photo and two addresses with Event.
 * @param {imageIndex} index
 * @param {ColorImage} addressChange
 * @param {DefaultImage} addressDefault
 */
export function getImage(index, addressChange, addressDefault) {
  images[index].addEventListener("mouseenter", function () {
    images[index].src = addressChange;
  });
  images[index].addEventListener("mouseleave", function () {
    images[index].src = addressDefault;
  });
}

