 function conjunto(){
        const letras = new Set();
        letras.add("S");
        letras.add("U");
        letras.add("E");
        letras.add("L");
        letras.add("L");
        letras.add("E");
        letras.add("N");
        console.log(letras.has("A"))

        //delete() é um método para remover um elemento do conjunto
        letras.delete("N");
        console.log(letras);

        
        for (const x of letras.values()){
                console.log(x);
        }

           for (const x of letras.keys()){
                console.log(x);
        }
}
conjunto();