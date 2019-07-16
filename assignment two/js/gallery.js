function changeImage(event){
    let image = event.target.src;
    let parent = event.target.parentElement;
    let largeImage = document.querySelector('#gallery img')

//change image
largeImage.src=image;

//change active indicator
document.querySelector("#gallery.active").classList.remove("active ");
parent.className ='active';
}

//attach event listeners to all thumbnails
let thumbnails = document.querySelectorAll  ('.pagination img');
for(let i =0; i<thumbnails.length;i++){
    thumbnails[i].addEventListener('click',changeImage);
}