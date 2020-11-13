const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImgs= document.querySelectorAll('.gallery-img');
let currentlySelected=0;

prevBtn.addEventListener('click', prevImage);

function prevImage(){
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected--;//currentlySelected=currentlySelected-1;
    
    galleryImgs[currentlySelected].classList.add("active");
    nextBtn.disabled=false;

    if(currentlySelected===0){
        prevBtn.disabled =true;
}
}

function nextImage(){
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected++;//currentlySelected=currentlySelected+1;
   
    galleryImgs[currentlySelected].classList.add("active");
    prevBtn.disabled = false;
   
    if(galleryImgs.length===currentlySelected+ 1){
       nextBtn.disabled = true;
}
}
nextBtn.addEventListener('click',nextImage);