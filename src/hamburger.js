
function hamburger_click(){
    let ham_click=document.querySelector('#ham')
    let ham_i=document.querySelector('#hami')

    //ham_click.classList.add('clickon')

    if(ham_click.classList.contains('clickon')){
        ham_click.classList.add('clickoff')
        ham_click.classList.remove('clickon')
    }else{
        ham_click.classList.add('clickon')
        ham_click.classList.remove('clickoff')
      
    }
}