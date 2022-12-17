
// Checks If The User Is On Phone Or Mobile

if ("ontouchstart" in document.documentElement) {
    console.log('Mobile');
    
} else {
    // Mouse Trail Effect
    const trailer = document.getElementById("trailer");

    window.onmousemove = e => {
        const x = e.clientX - trailer.offsetWidth / 2,
              y = e.clientY - trailer.offsetHeight / 2;

        const keyframes = {
            transform: `translate(${x}px, ${y}px)`
        }

        trailer.animate(keyframes, {
            duration: 800,
            fill: "forwards"
        });
    }

    // Rotate Plane
    let rotation = 0;
    let plane = document.querySelector("#planeTrailer");

    // Changes the dir the plane is facing
    var direction = "";
        var oldx = 0;
        var oldy = 0;
        mousemovemethod = function (e) {
        
     if (e.pageX > oldx && e.pageY == oldy) {
                    direction = "East";
                }
                else if (e.pageX == oldx && e.pageY > oldy) {
                    direction = "South";
                }
                else if (e.pageX == oldx && e.pageY < oldy) {
                    direction = "North";
                }
                else if (e.pageX < oldx && e.pageY == oldy) {
                    direction = "West";
                }
            
            // console.log(direction);
            
            oldx = e.pageX;
            oldy = e.pageY;

            if (direction === "North") {
                plane.style.transform = `rotate(-45deg)`;
            } else if (direction === "South") {
                plane.style.transform = `rotate(135deg)`;
            } else if (direction === "East") {
                plane.style.transform = `rotate(45deg)`;
            } else if (direction === "West") {
                plane.style.transform = `rotate(-45deg)`;
                plane.style.transform += `scaleX(-1)`;
            }
    }

    document.addEventListener('mousemove', mousemovemethod);
}
