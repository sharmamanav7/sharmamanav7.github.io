const BREEDS_URL="https://dog.ceo/api/breeds/list/all";
const select=document.querySelector('.breeds');
const dog_image=document.querySelector(".dog-image");
const spinner=document.querySelector(".spinner");

let count=0;


    function removeSpinner(){
        document.querySelector('.dog_image').removeChild(document.querySelector(".spin"));
    }
  
    fetch(BREEDS_URL).then(function(response){
        return response.json();
    }).then(function(data){
       
       breeds_Array=Object.keys(data.message);
       for(let i=0;i<breeds_Array.length;i++){
           const option=document.createElement('option');
           option.value=breeds_Array[i];
           option.innerText=breeds_Array[i];
           select.appendChild(option);
       }
    })

    select.addEventListener('change',function(event){
        fetch(`https://dog.ceo/api/breed/${event.target.value}/images/random`).then(function(response){
            return response.json();
        }).then(function(data){
            dog_image.classList.add(`disappear`);
            spinner.classList.add("show");

            dog_image.src=data.message;
            dog_image.alt="dog";
            dog_image.height=500;
            document.querySelector(".dog_image").appendChild( dog_image);

            
           
        });
    })

    dog_image.addEventListener('load',function(event){
        spinner.classList.remove("show");
        dog_image.classList.remove("disappear");
    })