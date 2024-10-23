//Inserisco in HTML l’immagine della lampadina spenta e accanto 
//aggiungo un bottone con la scritta “Accendi”.

//Al click del bottone, la lampadina dovrà accendersi,
// inserirò dunque la seconda immagine con la lampadina accesa

//bonus
//quando la lampadina è spenta, il bottone avrà su scritto 'accendi'
//quando la lampadina è accesa, il bottone avrà su scritto 'spegni'
//drovrò dunque ripetere la procedura al contrario e cambiare la dicitura sul bottone


const witheLamp = document.getElementById('white-lamp');
// console.log(witheLamp)

const button = document.getElementById('btn');
// console.log(button)


button.addEventListener('click',  function() {
    console.log("l'utente ha cliccato sul bottone")
    witheLamp.src = 'img/yellow_lamp.png'
    witheLamp.alt = 'lampadina accesa'
    

    if (witheLamp.classList.contains('off')){
        witheLamp.classList.remove('off')
        button.innerText = 'Spegni la lampadina'
    } else {
        witheLamp.classList.add('off')
        button.innerText = 'Accendi la lampadina'
    }
    
 })