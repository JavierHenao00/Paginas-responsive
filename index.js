// document.querySelectorAll('.img-card').addEventListener('click', function() {
//     this.style.transform = 'rotateY(180deg)';
//    });

   var cardImages = document.querySelectorAll('.img-card');

   cardImages.forEach(function(cardImage){
    cardImage.addEventListener('click',function(){
        this.style.transform='rotateY(360deg)';
       
    })
    })
    
