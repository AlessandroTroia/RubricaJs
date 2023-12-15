// campi input
let nameInput = document.querySelector('#nameInput')
let numberInput = document.querySelector('#numberInput')

// button
let showBtn = document.querySelector('#showBtn');
let addBtn = document.querySelector('#addBtn');
let removebtn = document.querySelector(`#removebtn`);
let changebtn= document.querySelector(`#changebtn`);


// container
let containerList = document.querySelector('#containerList')


let rubrica = {

    listaContatti: [
        {name: `Luca`, number: 1234567890},
        {name: `Paolo`, number: 9876543210},
        {name: `Erem`, number: 8765432123}
    ],

    showContacts: function() {
        this.listaContatti.forEach((contatto)=>{
            let div = document.createElement('div')
            div.classList.add(`d-flex`, `justify-content-around`, `my-3`)
            div.innerHTML = `<h3>${contatto.name}</h3>
            <p class="text-secondary">${contatto.number}</p>`
            containerList.appendChild(div)
        })
    },

    addContacts: function(newName, newNumber){
        if(newNumber.length == 10){
            this.listaContatti.push({name: newName, number: newNumber})
            this.showContacts()
        }else{
            alert(`numero non valido`)
        }
     
    },
    removeContacts: function (removeName){
        let filtered = this.listaContatti.filter(contatto=>contatto.name != removeName)
        this.listaContatti = filtered
    }
    

}



// variabile di controllo
let check = false

showBtn.addEventListener('click', ()=>{
    if(check == false){
        rubrica.showContacts()
        showBtn.innerHTML = `Nascondi contatti`
        check = true
    }else if(check == true){
        check = false
        showBtn.innerHTML = `Mostra contatti`
        containerList.innerHTML = ``
    }
})


addBtn.addEventListener(`click`, ()=>{
    rubrica.addContacts(nameInput.value, numberInput.value)
    nameInput.value = ``
    numberInput.value = ``
    if(check == false){
        check = true
        showBtn.innerHTML = `Nascondi contatti`
    }else if(check == true){
        containerList.innerHTML = ``
        rubrica.showContacts()
    }

})



numberInput.addEventListener('keypress', (event)=>{
    if(event.key === `Enter`){

        rubrica.addContacts(nameInput.value, numberInput.value)
        nameInput.value = ``
        numberInput.value = ``
        if(check == false){
            check = true
            showBtn.innerHTML = `Nascondi contatti`
        }else if(check == true){
            containerList.innerHTML = ``
            rubrica.showContacts()
        }

    }
})

removebtn.addEventListener(`click`,()=>{
    if(nameInput.value!=''){
    rubrica.removeContacts(nameInput.value)
    rubrica.showContacts(rubrica.filtered)
    nameInput.value=''
    }else{
        alert('Se vuoi eliminare un elemento devi immetere il nome')
    }
})



