const htag = document.getElementById('htag');
const pbtn = document.getElementById('plsbtn');
const mbtn = document.getElementById('minbtn');

let counter = 0;

function perfect(value){

    counter += value;

    htag.innerText = counter;

    if(counter >= 10){
        pbtn.setAttribute('disabled', true);
    }
    else{
        pbtn.removeAttribute('disabled',false);
    }

    if(counter <= 0){
        mbtn.setAttribute('disabled', true);
    }
    else{
        mbtn.removeAttribute('disabled',false);
    }
}

pbtn.addEventListener('click', () => {
    perfect(1);
});

mbtn.addEventListener('click', () => {
    perfect(-1);
});