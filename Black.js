const chk = document.getElementById('chk')
const navigation = document.getElementById('chk') 
const span1 = document.getElementById('chk') 
const span2 = document.getElementById('chk')
const navItem = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

navigation.addEventListener('change', () => {
  document.querySelector('.navigation').classList.toggle('dark')
})

span1.addEventListener('change', () => {
    document.querySelector('#span-1').classList.toggle('dark')
})

span2.addEventListener('change', () => {
    document.querySelector('#span-2').classList.toggle('dark')
})

navItem.addEventListener('change', () => {
    document.querySelectorAll('.nav-item a').forEach(element => {
        element.classList.toggle('dark');
})})