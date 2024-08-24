function scrollFunction(){
    if(document.documentElement.scrollTop > 200){
        document.getElementById("navbar").classList.add("transparent");
    }else{
        document.getElementById("navbar").classList.remove("transparent");
    }
}
window.onscroll=function(){
    scrollFunction();
}

window.onload = function (){
    let website = new CountUp('website-count', 0, 965, 0, 2.5);
        website.start();
    let app = new CountUp('app-count', 0, 426, 0, 2.5);
        app.start();
    let user = new CountUp('user-count', 0, 1547, 0, 2.5);
        user.start();
    let video = new CountUp('video-count', 0, 64, 0, 2.5);
        video.start();
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
document.addEventListener('DOMContentLoaded' , function() {
    const forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms).forEach(function(form){
        form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    });
});


document.getElementById("fullYear").innerHTML = new Date().getFullYear();