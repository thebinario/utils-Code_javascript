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
