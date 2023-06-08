//visualiseur de la musique en fond
var audio = document.getElementById("musicPlayer");

audio.load();
var context = new AudioContext();
var src = context.createMediaElementSource(audio);
var analyser = context.createAnalyser();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
src.connect(analyser);
analyser.connect(context.destination);
analyser.fftSize = 1024;// 256;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
var WIDTH = canvas.width;
var HEIGHT = canvas.height;
ctx.scale(2, 2);
var barWidth = (WIDTH / bufferLength) * 2.5;
var barHeight;
var x = 0;
function renderFrame() {
    requestAnimationFrame(renderFrame);
    x = 0;
    analyser.getByteFrequencyData(dataArray);
    ctx.fillStyle = "#2a2a2a";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        var r = barHeight/3 + (i/bufferLength);
        var g = barHeight/3 + (i/bufferLength);
        var b = 120;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
    }
}
renderFrame();
// base : https://codepen.io/chadIv/pen/xxLKNaQ
