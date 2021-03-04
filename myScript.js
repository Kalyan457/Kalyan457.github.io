    var slideIndex = 1;
    var slideIndexCert = 1;
    var myTimer;
    var myTimerCert;
    var slideshowContainer;
    var slideshowContainerCert;

    window.addEventListener("load",function() {
        var slides = document.getElementsByClassName("rightSlide");
        slides[0].addEventListener("click",function(){
            location.href="#AboutMe";
        },true);
        slides[1].addEventListener("click",function(){
            location.href="#WorkExperience";
        },true);
        slides[2].addEventListener("click",function(){
            location.href="#Projects";
        },true);
        showSlides(slideIndex);
        showSlidesCert(slideIndexCert);
        myTimer = setInterval(function(){plusSlides(1)}, 4000);
        myTimerCert = setInterval(function(){plusSlidesCert(1)}, 4000);

        slideshowContainer = document.getElementsByClassName('slideshowContainer')[0];
        slideshowContainer.addEventListener('mouseover', pause);
        slideshowContainer.addEventListener('mouseleave', resume);
        
        slideshowContainerCert = document.getElementsByClassName('slideshowContainerCert')[0];
        slideshowContainerCert.addEventListener('mouseover', pauseCert)
        slideshowContainerCert.addEventListener('mouseleave', resumeCert)
    })

    function plusSlides(n){
        clearInterval(myTimer);
        if (n < 0){
            showSlides(slideIndex -= 1);
        } else {
            showSlides(slideIndex += 1); 
        }  
        if (n === -1){
            myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
        } else {
            myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
        }
    }

    function plusSlidesCert(n){
        clearInterval(myTimerCert);
        if (n < 0){
            showSlidesCert(slideIndexCert -= 1);
        } else {
            showSlidesCert(slideIndexCert += 1); 
        }  
        if (n === -1){
            myTimerCert = setInterval(function(){plusSlidesCert(n + 2)}, 4000);
        } else {
            myTimerCert = setInterval(function(){plusSlidesCert(n + 1)}, 4000);
        }
    }

    function showSlides(n){
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "flex";
    }

    function showSlidesCert(n){
        var i;
        var slides = document.getElementsByClassName("mySlidesCert");
        if (n > slides.length) {slideIndexCert = 1}
        if (n < 1) {slideIndexCert = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndexCert-1].style.display = "flex";
    }

    pause = () => {
        clearInterval(myTimer);
    }

    resume = () =>{
        clearInterval(myTimer);
        myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
    }

    pauseCert = () => {
        clearInterval(myTimerCert);
    }

    resumeCert = () =>{
        clearInterval(myTimerCert);
        myTimerCert = setInterval(function(){plusSlidesCert(slideIndexCert)}, 4000);
    }

    function videoOpen(){
        var vid = document.getElementById("myVideo");
        document.getElementById('id01').style.display='block';
        vid.autoplay = true;
        vid.load();
    }

    function myFunction() {

        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }