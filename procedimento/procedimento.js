function procedimento(){

    function Inicio(){
        let frase = prompt("Escreva uma frase: ")
        mensagem(frase = frase);

    }

Inicio();

    function mensagem(frase){
        let linha = "-"
        let i = 0;


        do{
            linha = linha + "-"
            i++;
        }while( i < 50 );

        alert( linha + "\n" + frase + "\n" + linha );
    }
}