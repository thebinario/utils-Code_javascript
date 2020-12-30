function OpenUrl(control = false) {
    var url = document.querySelector('iframe').src
    
    if(control){
        var newUrl = url.replace('controls=0','controls=1')
        return window.open(newUrl, '_blank');
       }
    
    return window.open(url, '_blank');
    
}
