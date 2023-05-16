var hostname = 'http://192.168.1.28:5500';
var date_and_time = Date.now().toLocaleString();


function toggle_contact_chat() {
    let contact_form = document.getElementById("contact-chat");
    let contact_form_box = document.getElementById("contact-chat-box");
    let contact_form_icon = document.getElementById("contact-chat-icon")
    if (contact_form && contact_form_box && contact_form_icon){
        // En esta parte hacemos uso de un operador condicional (ternario) "condición ? expr1 : expr2"
        contact_form.style.display = contact_form.style.display=='flex' ? 'none' : 'flex';
        contact_form_box.style.width = contact_form_box.style.width=='400px' ? '70px' : '400px';
        contact_form_box.style.height = contact_form_box.style.height=='500px' ? '70px' : '500px';
        console.log(contact_form_icon.src)
        contact_form_icon.src = contact_form_icon.src==hostname+'/public/media/icons/chat-icon.svg' ? hostname+'/public/media/icons/close-icon.svg' : hostname+'/public/media/icons/chat-icon.svg';
    }
}

function request_contact(){
    let form_name = document.getElementById("contact-name").value;
    let form_email = document.getElementById("contact-email").value;
    let form_telefono = document.getElementById("contact-phone").value;
    let form_schedule = document.getElementById("contact-time").value;
    if (form_name && form_email && form_telefono && form_schedule){
        console.log("Request issued at: "+date_and_time)
        console.log("Name: "+form_name+" Mail: "+form_email+" Phone: "+form_telefono+" Schedule: "+form_schedule)
    }else{
        alert("Asegurate de rellenar todo el formulario.")
    }
}


// https://mailtrap.io/blog/javascript-send-email/
// https://mailtrap.io/inboxes/2223887/messages
// var transport = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "232c33f3c6b1d8",
//       pass: "e5471b4cf5148b"
//     }
//   });