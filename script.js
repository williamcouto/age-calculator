function calcAge(){
    let dia = document.getElementById('day_user').value
    let ano = document.getElementById('year_user').value 
    let mes = document.getElementById('month_user').value
    let data = new Date()
    const ano_Atual = data.getFullYear()
    const mes_Atual = data.getMonth() + 1
    const dia_Atual = data.getDate()

    // Calculando o ano de nascimento
    let res_year = document.getElementById('res-Year')
    let calcAno = ano_Atual - ano 
    res_year.textContent = `${calcAno}`

    // Calculando os meses
    let result_Mes = document.getElementById('res-Month')
    let calcMes = mes_Atual - mes
    result_Mes.textContent = `${calcMes} Meses`

    // Calculando os Dias
    let result_Dia = document.getElementById('res-Day')
    let calcDia = dia_Atual - dia
    result_Dia.textContent = `${calcDia} Dias`

}