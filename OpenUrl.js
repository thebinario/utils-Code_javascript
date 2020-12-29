function OpenUrl() {
    var url = document.querySelector('iframe').src
    
    return window.open(url, '_blank');
    
}
