const btnSearch = document.querySelector( '.icon' );
const input     = document.querySelector( '#visible' );



btnSearch.addEventListener( 'click', () => {
    
    console.log( input );
    if( !input.classList.contains( 'active' ) ){
        input.classList.add( 'active' );
    }else{
        input.classList.remove( 'active' );
    }
});