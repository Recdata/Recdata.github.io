window.addEventListener("load", function() {
    const canvas = document.getElementById("background");
    const w = canvas.width = 1000;
    const h = canvas.height = 1000;
    const tau = Math.PI * 2;
    const g = canvas.getContext("2d");

    let fn = 0;

    function rnd(m) {
        return Math.floor(Math.random() * m);
    }

    const fps = 24;
    function frame(time) {
        
        g.globalCompositeOperation = "source-over";

        const x = (time % 6000)/2 - 1000;

        g.beginPath();
        g.moveTo(x,0);
        g.lineTo(0,x);
        g.lineTo(w-x,h);
        g.strokeStyle="hsla(" + (rnd(50) + time/100) + "deg," + (rnd(20)+40) + "%," + (rnd(10)+20) + "%, 0.4)";
        g.stroke();

        
        g.fillStyle="hsla(" + (rnd(50) + time/100) + "deg," + (rnd(20)+40) + "%," + (rnd(30)) + "%, 0.4)";
        for (let i = 0; i < 2; i++) {
            g.fillRect(rnd(w), rnd(h), rnd(70), rnd(70));
        }

        g.fillStyle="black";
        for (let i = 0; i < 4; i++) {
            g.fillRect(rnd(w), rnd(h), rnd(70), rnd(70));
        }

        // g.filter ="blur(1px)";
        // g.drawImage(canvas,0,0);
        // g.filter = "none";
        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);

});