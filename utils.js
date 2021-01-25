//Abre url do video em uma nova aba
function OpenUrl(control = false) {
    var url = document.querySelector('iframe').src
    
    if(control){
        var newUrl = url.replace('controls=0','controls=1')
        return window.open(newUrl, '_blank');
       }    
    return window.open(url, '_blank');    
}
//Acelera o video
function speed(x = 0.25){
    let elVideo = document.querySelector('video');
    if(x == 0.25) return elVideo.playbackRate += x; 
    return elVideo.playbackRate = x;
}
function speedslow(x = 0.25){
    let elVideo = document.querySelector('video');
    if(x == 0.25) return elVideo.playbackRate -= x; 
    return elVideo.playbackRate = x;
}

function keyPressed(evt){
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    return String.fromCharCode(key); 
}

document.onkeypress = function(evt) {
    var str = keyPressed(evt);
    
    if (str == 's') speed();
    if (str == 'l') speedslow();
    if (str == 'o') OpenUrl(control = true);
    
};
