console.log("Treno ciuf ciuf")

//recuperiamo il form
const trainElement = document.getElementById("train")
//dichiariamo le variabili che ci serevono e stampiamo 
    const kmElement = document.getElementById("Km")
    const ageElement = document.getElementById("age")
    const ticketElement = document.getElementById("ticket")
    const scontoElement = document.getElementById("sconto")

    console.log(kmElement,ageElement,ticketElement,trainElement)

//impediamo che il form venga inviato
    trainElement.addEventListener('submit', function (event) {
        event.preventDefault()
   
    // recuperiamo l 'eta inserita dal utente
	const age = parseInt(ageElement.value) // number
	console.log(age)

     //recuperiamo i Km inseriti dal utente    
     const km = parseFloat(kmElement.value) 
     console.log(km)
    //recuperiamo la select     
     const sconto = scontoElement.value
     let prezzo = 0.21
     let perzzoBiglietto = km * prezzo 
    
     
     
        //condizioni sconto
     if(sconto === "Minorenne" && age <= 18 ) {

         perzzoBiglietto = (perzzoBiglietto * 0.2)
     }

     
     else if  ( sconto === "Senior" && age >= 65 ) 
     {
        perzzoBiglietto = (perzzoBiglietto * 0.4)

     }

     else(sconto === "")
      {
        perzzoBiglietto

     }
     
     
     console.log(perzzoBiglietto)
     
     ticketElement.innerHTML = perzzoBiglietto + "€"

     
   

    })

    

   