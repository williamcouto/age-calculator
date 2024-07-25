

function calcAge(){
    // let dia = document.getElementById('user_day')
    let ano = document.getElementById('year_user')
    let data = new Date()
    let ano_atual = data.getFullYear()
    // let mes = document.getElementsById('month_user')

    let res_year = document.querySelector('#res-Year')

    let calcIdade = ano - ano_atual
    res_year.textContent = calcIdade


}