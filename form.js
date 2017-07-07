$(function() {
    $('#btn-send').click(sendForm);
});


function sendForm(e) {
    e.preventDefault();
    $.ajax({
    url: "https://formspree.io/katinskiytaras@gmail.com", 
    method: "POST",
    data: {
    name: $('#user-name').val(),
    email: $('#user-email').val(),
    
    wish: $('#user-wish').val()
    },
    dataType: "json"
});


    
}