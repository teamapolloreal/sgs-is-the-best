let rainbowInterval;

onmessage = function(e){
    if(e.data === "Start Interval"){
        let hue = 0;
        rainbowInterval = setInterval(() => {
            postMessage({ type: "sending", data: `hsl(${hue}, 100%, 50%)`})
            hue = hue + 2;
            if (hue >= 360) {
                hue = 0;
            }
        }, 100);
    } else {
        clearInterval(rainbowInterval)
    }
}