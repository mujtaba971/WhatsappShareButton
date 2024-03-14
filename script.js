function shareOnWhatsApp() {
        
    var text = "Check out this cool website!";
    
    var url = window.location.href;
    
    var whatsappUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent(text + "\n" + url);
    
    window.open(whatsappUrl, "_blank");
}


document.getElementById("whatsapp-share-btn").addEventListener("click", shareOnWhatsApp);