let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
let filename = "profile-photo";
let btnDownload = document.getElementById('download');
const reader = new FileReader();
let target = new Image();
let target2 = new Image();
let image = document.getElementById('image_perfil');
let image2 = document.getElementById('image_logo')
let label_logo  = document.getElementById('label_logo')
let label_perfil  = document.getElementById('label_perfil')
let btn_load = document.getElementById('btn_load')
const recentImageDataUrl = localStorage.getItem('recent-image')


c.canvas.width = 1024;
c.canvas.height = 1024;



document.querySelector('#image_logo').addEventListener('change', function () {
    reader.addEventListener('load', () => {
        localStorage.setItem('recent-image', reader.result)
    })
    reader.readAsDataURL(this.files[0])
})


function download() {
    link = document.createElement('a');
    link.download = filename + '.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
}

function destroyInterval() {
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
}

function load() {
    c.clearRect(0, 0, c.canvas.width, c.canvas.height);
    draw();
}

function draw() {
    c.canvas.width = target.width;
    c.canvas.height = target.height;
    c.drawImage(target, 0, 0, target.width, target.height);
    c.drawImage(target2, 0, 0, target.width, target.height);

}

function reset(){
    localStorage.removeItem("recent-image")
    location.reload()
}


function loadImage(){
   if(image2.files[0]==undefined){
       alert('Nenhuma imagem selecionada')
   }
   
    location.reload()
}


function check() {
        image.setAttribute('hidden','hidden')
       label_perfil.setAttribute('hidden','hidden')

    
    if (localStorage.getItem('recent-image') != undefined) {
        image2.setAttribute('hidden', 'hidden')
        image.removeAttribute('hidden')
        label_perfil.removeAttribute('hidden')
        label_logo.setAttribute('hidden','hidden')
        btn_load.setAttribute('hidden','hidden')

    }
}


function enableButton() {
    let
}

function init() {
    run = setInterval(function () {
        load();
    }, 1000);
}


function setTemplate() {
    target2.setAttribute("src", recentImageDataUrl)

}

function imageReaderOnLoad() {
    reader.onload = (res) => {
        target.src = res.target.result.replace(/ +/g, "");
    }
}

function enableBtnDownload() {
    btnDownload.removeAttribute('disabled');
}



function generate() {

    if (image.files[0] === undefined)
        alert('Nenhuma imagem selecionada');

    else {

        destroyInterval();
        imageReaderOnLoad();
        setTemplate();
        enableBtnDownload();
        reader.readAsDataURL(image.files[0]);
        init();
        localStorage.removeItem("recent-image")
        image2.removeAttribute('hidden', 'hidden')

    }
}
