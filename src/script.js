// refresh proxy frame

function refreshFrame() {
    const iframe = document.getElementById('proxyFrame');
    iframe.src = iframe.src; 
}
// fullscreen
function toggleFullscreen() {
    const iframe = document.getElementById('proxyFrame');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { 
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { 
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { 
        iframe.msRequestFullscreen();
    }
}
// end