const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = './pages/login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Ingresando a la página web!')
    localStorage.removeItem('login_success')
    window.location.href = './pages/login.html'
})