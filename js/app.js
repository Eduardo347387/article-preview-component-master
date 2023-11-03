
//El vento se dispara una vez que todo los elemento 
//se haya cargado


document.addEventListener('DOMContentLoaded',function(){
    const BtnShare = document.querySelector('#share')
    const seccionInfo = document.querySelector('#userInfo')

    BtnShare.addEventListener('click',aplicarEstilos) 

    function aplicarEstilos(e){
        if((window.matchMedia("(min-width: 0px)").matches) && (window.matchMedia("(max-width: 767px)").matches)){
            displayDeleteSocialMedia()
        }
        if(window.matchMedia("(min-width: 768px)").matches){ 
           buttonMostElim()
        }
    }

    function displayDeleteSocialMedia(e){
        const SeccionSocialMedia = document.querySelector('#SeccionSocialMedia');
       
        if(SeccionSocialMedia === null){
            createSocialMedia();
            ButtondeletesocialMedia('#shar');
        }
    } 
    function buttonMostElim(e){
        const SeccionSocialMedia = document.querySelector('#SeccionSocialMedia');
        if(SeccionSocialMedia === null){
            createSocialMedia(); 
            ButtondeletesocialMedia('#shar');
        }       
        else{
            // console.log('se esta ejecutando')
            ButtondeletesocialMedia('#share');
        }
    }
    function createSocialMedia(){
        const texto = document.createElement('H4')
        texto.classList.add('text-share')
        texto.textContent = 'SHARE'
 
        const imgSocial1 = document.createElement('img')
        imgSocial1.classList.add('img-social-media')
        imgSocial1.src = './images/icon-facebook.svg'
    
        const imgSocial2 = document.createElement('img')
        imgSocial2.classList.add('img-social-media')
        imgSocial2.src = './images/icon-twitter.svg'

        const imgSocial3 = document.createElement('img')
        imgSocial3.classList.add('img-social-media')
        imgSocial3.src = './images/icon-pinterest.svg'
    
        const boxSocial = document.createElement('DIV')
        boxSocial.classList.add('box-social-media')
       
        boxSocial.appendChild(imgSocial1)
        boxSocial.appendChild(imgSocial2)
        boxSocial.appendChild(imgSocial3)

        const imgButton = document.createElement('img')
        imgButton.src = './images/icon-share2.svg';

        const box = document.createElement('DIV')
       
        box.id = 'SeccionSocialMedia'
        box.classList.add('box')
        box.appendChild(texto)
        box.appendChild(boxSocial)

        const boton = document.createElement('button')
        boton.classList.add('button-share');
        boton.id = 'shar';
        boton.appendChild(imgButton)
        box.appendChild(boton)
        seccionInfo.appendChild(box)  
    }

    function ButtondeletesocialMedia(id){ 
        const idBoton = document.querySelector(id)
        
        if(idBoton.id === 'shar'){
            idBoton.addEventListener('click',(e)=>{
                SeccionSocialMedia.remove()
            })
        }
        if(idBoton.id === 'share'){
            SeccionSocialMedia.remove();
        } 
       
    } 



    
})
