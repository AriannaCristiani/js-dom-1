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

const yellowLamp = document.getElementById('yellow-lamp');
// console.log(yellowLamp)

const button = document.getElementById('btn');
// console.log(button)

button.addEventListener('click',  function() {
   console.log("l'utente ha cliccato sul bottone")
   witheLamp.classList.add ('hidden')
   yellowLamp.classList.remove ('hidden')
   button.innerHTML = 'Spegni la lampadina'
})

