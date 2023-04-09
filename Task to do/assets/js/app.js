
let btn = document.querySelector('#btn');

btn.onclick = function (){
   let value = document.querySelector('#txt').value;

   let div = document.createElement('div');
   div.className = 'temp';
   let h1 = document.createElement('h1');
   
   let button  = document.createElement('button');
   button.setAttribute('id','del')

   h1.innerHTML = value;
   button.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

   div.className = 'box d-flex justify-content-between';

   div.appendChild(h1)
   div.appendChild(button)

   document.querySelector('.tasks').appendChild(div)

   CheckTask();

   button.onclick = function(){
    div.remove()
    
    CheckTask();
}
}

function CheckTask(){
    let count = document.querySelectorAll('.box').length;
    let alert_box = document.querySelector('.alert');

    document.querySelector('#num').innerHTML = count;

    if(count > 0){
        // alert_box.style.display = 'none'
        alert_box.classList.add('d-none')
    }
    else{
        // alert_box.style.display = 'block'
        alert_box.classList.remove('d-none')
    }

}

CheckTask()







