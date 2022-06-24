/*Script Reloj*/

let mostraHora=()=>{
    let reloj=document.getElementById("reloj")
    let fechadato=document.getElementById("fec_Datos")
    let dias =["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    let meses =["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    let fechaHora=new Date()
    let hora=fechaHora.getHours()
    let minutos=fechaHora.getMinutes()
    let segundos=fechaHora.getSeconds()
    let dia=fechaHora.getDate()
    let mes=fechaHora.getMonth()
    let año=fechaHora.getFullYear()
    let m = meses[mes]
    let hr=(hora>12)? hora-12 :  hora
    let am=(hora>12)? "PM" : "AM"
    if(hr<10){hr="0" + hr}
    if(minutos<10){minutos="0" + minutos}
    if(segundos<10){segundos="0" + segundos}
    // !08:04:06 < 10
    reloj.textContent=`${hr}:${minutos}:${segundos} ${am}`
    fechadato.textContent=`${dia} ${m} del ${año}`
}
setInterval(mostraHora, 1000)
