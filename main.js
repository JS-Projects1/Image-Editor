let saturate = document.getElementById('saturate'); 
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hueRotate = document.getElementById('hueRotate');
let filters = document.querySelectorAll('.filter ul input');

let download = document.getElementById('download');
let reset = document.querySelector('ul li span');


let imgBox = document.querySelector('.img-box');
let upload = document.getElementById('upload');
let img = document.getElementById('img');

 function Reset(){
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
 }

window.onload = function(){
    imgBox.style.display = 'none';
    reset.style.display = 'none';
    download.style.display = 'none';
}

upload.onchange = function(){
    Reset();
    imgBox.style.display = 'block';
    reset.style.display = 'block';
    download.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;
    }
}

filters.forEach(filter=>{
    filter.addEventListener('input',function(){
        img.style.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)`;
    })
})