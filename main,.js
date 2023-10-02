function sendData (nom, ape, fec){

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify( {Nombre: nom, Apellido: ape, Fecha_de_Nacimiento: fec} )
    })
    .then(resp => resp.json()
    .then(data=>console.log(data)))
    
};

document.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.getElementById('btn');
    btn.addEventListener('click', ()=>{
        let nom = document.getElementById('nombre');
        let ape = document.getElementById('apellido');
        let fec = document.getElementById('fecha');
        
        sendData(nom.value, ape.value, fec.value);
    });

});



        