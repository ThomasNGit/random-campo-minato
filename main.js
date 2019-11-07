$( document ).ready(function(){

    //variabili impostate a zero che indicano quante caselle ho preso
    var punti = 0;

    var rossi = 0;

    //stampa in pagina dei punteggi col valore iniziale
    document.getElementById("verdi").innerHTML = "Finora hai totalizzato " + punti + " punti!";

    document.getElementById("rossi").innerHTML = "Finora hai colpito " + rossi + " rossi!";

    //creo lo script che su on click fa comparire la griglia di gioco
    $("#gamestart").on({

        click: function(){

            $(".game-grid").fadeIn(2000);

            $("#gamestart").hide();

        }
    });

    //script che al click assegna un colore al quadrato
    $(".cell").click(function(){

        var numRand = numRandom(1,3);   //rimanda alla funzione che genera un numero casuale da 1 a 3

        $(this).addClass("numRand");    // e che lo assegna al quadrato al tocco

        $(this).off();

        if(numRand == 1){ //se il numero è uno, il quadrato diventa rosso

            $(this).css("background", "red");

            rossi++

            document.getElementById("rossi").innerHTML = "Finora hai colpito " + rossi + " rossi!" //punteggio che si aggiorna col numero dei rossi presi

            if (rossi == 8){    //se prendi otto rossi perdi
                
                alert("Purtroppo hai colpito 8 caselle rosse. Hai perso!");

                location.reload(); //e ricarica la pagina

            }
            
        } else if (numRand >= 2){   //se il numero è superiore o uguale a due il quadrato diventa verde

            $(this).css("background", "green")

            punti++;    //e aggiunge un punto ai verdi

        }
        document.getElementById("verdi").innerHTML = "Finora hai totalizzato " + punti + " punti!" //stampa in pagina del punteggio dei verdi aggiornato

        if(punti == 20){    // se raggiungi 20 punti, vinci

            alert("Bravo, sei riuscito a fare 20 punti! Hai vinto!");

            location.reload(); //e la pagina viene ricaricata
        }
    })


    //blocco funzione
    function numRandom(min,max){

        min = Math.ceil(min);
      
        max = Math.floor(max);
      
        return Math.floor(Math.random()* (max-min + 1)) + min;
      
      }
})