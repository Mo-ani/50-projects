let panels = document.querySelectorAll( '.panel' );

console.log( {panels} );

// eventos
panels.forEach( panel => {
    panel.addEventListener( 'click', ()=>{
        panels.forEach(panel => {
            panel.classList.remove( 'active' );
        })
        panel.classList.add( 'active' );
    });

});