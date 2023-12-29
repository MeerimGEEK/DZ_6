window.onload = function () {
    const amountInput = document.getElementById('amountInput')
    const monthSelect = document.getElementById('monthSelect')
    const calculateBtn = document.getElementById('calculateBtn')
    const resultDiv = document.getElementById('result')

    const months = [
        { name: 'Январь', days: 31 },
        { name: 'Февраль', days: 28 },
        { name: 'Март', days: 31 },
        { name: 'Апрель', days: 30 },
        { name: 'Май', days: 31 },
        { name: 'Июнь', days: 30 },
        { name: 'Июль', days: 31 },
        { name: 'Август', days: 31 },
        { name: 'Сентябрь', days: 30 },
        { name: 'Октябрь', days: 31 },
        { name: 'Ноябрь', days: 30 },
        { name: 'Декабрь', days: 31 }


    ]
    console.log(resultDiv)
    calculateBtn.onclick=()=>{
        months.map((item)=>{
            if(monthSelect.value === item.name){
                resultDiv.innerHTML = Math.floor( amountInput.value / item.days)
            }
        })
    }
}
