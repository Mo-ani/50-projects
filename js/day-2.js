const progresoBarra =  document.querySelector('#barra-progreso'),
      pasos         = document.querySelectorAll( '.paso' ),
      btnSiguiente  = document.querySelector( '#siguiente' ),
      btnAtras      = document.querySelector( '#atras' );
let   pasoActivo    = 1;

//Funcion main
const actualizarProgreso = () => {
    pasos.forEach( (paso,i) =>{
        
         if ( i < pasoActivo){
            paso.classList.add('active');
         }else{
            paso.classList.remove('active');
         }
    });
    // Ajuste del tamaño de la barra de progreso
    progresoBarra.style.width = ((pasoActivo - 1) / (pasos.length)) * 127 + "%";
    //Desactivar botones cuando se avance
    if( pasoActivo != 1 && pasoActivo < pasos.length ){
        btnSiguiente.disabled = false;
        btnAtras.disabled = false;
    }
};


//eventos
btnSiguiente.addEventListener( 'click',() => {
    pasoActivo++
    if( pasoActivo >= pasos.length ){
        btnSiguiente.disabled = true;
    }
    actualizarProgreso()
    
});

btnAtras.addEventListener( 'click', () =>{
    pasoActivo--
    if( pasoActivo === 1 ){
        btnAtras.disabled = true;
    };
    actualizarProgreso()
    
});