const btnBrgOpen = document.querySelector( ".menu-open" );
const btnBrgClose = document.querySelector( ".menu-close" );
const opacity = document.querySelector('html');
const brg = document.querySelector( ".burguer" );


btnBrgOpen.addEventListener( 'click', () => {
    brg.classList.add( 'show-nav' );
    btnBrgOpen.classList.add(  'active' );
    btnBrgClose.classList.remove(  'active' );
});

btnBrgClose.addEventListener( 'click', () => {
    brg.classList.remove( 'show-nav' );
    btnBrgClose.classList.add(  'active' );
    btnBrgOpen.classList.remove(  'active' );
})