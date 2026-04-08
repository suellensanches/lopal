async function lagarta(){
    let lagarta = "( ),,(  ),,(  ),,(  )(ÒÓ)";
    let lagartaM = "(),,( ),,( ),,( )(ÒÓ)";
    let encolher = "(),,(),,(),,()(ÒÓ)";
    let espaco = "   ";
    
    function sleep(ms){
        return new Promise( resolve => setTimeout(resolve, ms));
    }

    for( let i = 0; i < 20; i++){
        lagarta = espaco + lagarta;
        encolher = espaco + encolher
        lagartaM = espaco + lagartaM;
        console.log(lagarta);
        await sleep (500);
        console.clear();
        console.log(encolher);
        await sleep (500);
        console.clear();
         console.log(lagartaM);
        await sleep (500);
        console.clear();
    }

}