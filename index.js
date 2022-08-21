document.getElementById('calculate').addEventListener('click', function () {
    console.log('cliked');
    const salary = earnValueint("total-salary");
    console.log(salary - 100)
    const totalcutMoney = expensestotal();
    const salaryCut = salary - totalcutMoney;
    const showSalaryCut = document.getElementById('blance');
    showSalaryCut.innerText = salaryCut;

})
document.getElementById('save').addEventListener('click', function () {
    const salary = earnValueint("total-salary");
    savingUnit(salary);
    remainig();
})

// function validationCheck(inputId){
//     const t=document.getElementById()

// }

document.getElementById('total-salary').addEventListener('keypress',function(){
    const salry=document.getElementById('total-salary');
    const salaryValue=salry.value;
   
    // console.log(isNaN(salaryValue))
    
    // if(typeof salry =='number'){
    //     return salry;
       
    // }
    // else{
    //    return  alert('please enter number value');

    // }
  if(salaryValue){
    console.log( salaryValue);
    if(isNaN(salaryValue)){
        alert('please enter number value');
          return ;
      
   }
   else{
       return true;
      
   }
  }
})



function earnValueint(valueID) {
    const salary = document.getElementById(valueID);
    const stringToInt = parseInt(salary.value);
    return stringToInt;
}

function expensestotal() {
    const food = earnValueint('food');
    const rent = earnValueint('rent');
    const cloth = earnValueint('cloth');
    const totalMoney = food + rent + cloth;
    const showValue = document.getElementById('total-exp');
    showValue.innerText = totalMoney
    return totalMoney;
}

function savingUnit(totalMoney) {
    const saving = document.getElementById('saving-money');
    const saveInt = parseInt(saving.value);
    const totalSaving = (saveInt / 100) * totalMoney;
    const svaMoney = totalMoney - totalSaving;
    const showAm = document.getElementById('show-ammount');
    showAm.innerText = totalSaving;
    return svaMoney;

}

function remainig() {
    const showremaining = document.getElementById('remain');
    const totalblance = document.getElementById('blance');
    const totalBlance = parseInt(totalblance.innerText);
    const saveingShowMoney = document.getElementById('show-ammount');
    const saveingShow = parseInt(saveingShowMoney.innerText);
    const reamining = totalBlance - saveingShow;
    showremaining.innerText = reamining;
    return saveingShow;
}