

function calcAge(){
    // let dia = document.getElementById('user_day')
    let ano = document.getElementById('year_user').value
    let data = new Date()
    let ano_atual = data.getFullYear()
    // let mes = document.getElementsById('month_user')

    let res_year = document.getElementById('res-Year')

    let calcIdade = ano_atual - ano 
    res_year.textContent = `${calcIdade}`


}