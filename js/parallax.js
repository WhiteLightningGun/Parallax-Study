let top_layer = document.getElementById("top-layer1");
let width = top_layer.offsetWidth;
let height = top_layer.offsetHeight;

document
  .getElementById("top-layer1")
  .addEventListener("mousemove", function (e) {
    let rect = this.getBoundingClientRect();
    let x = e.clientX - rect.left; // x position within the element
    let y = e.clientY - rect.top; // y position within the element
    let relative_X = -width / 2 + x;
    let relative_Y = -height / 2 + y;
    let layers = document.getElementsByClassName("parallax-layer");
    let speed, xPos, yPos;
    for (let index = 0; index < layers.length; index++) {
      speed = layers[index].getAttribute("data-speed");
      xPos = 0.006 * relative_X * speed;
      yPos = 0.006 * relative_Y * speed;
      layers[index].children[0].style.transform =
        "translate3d(" + xPos + "px, " + yPos + "px, 0px)";
    }
  });
