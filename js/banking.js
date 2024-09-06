document.getElementById('deposit-button').addEventListener('click',function(){
    //Get Deposit Input from HTML Tag and Convert it into Number
    const depositInputField = document.getElementById("deposit-input")
    
    const inputText = depositInputField.value
    const newDepositAmount = parseFloat(inputText);
    console.log(newDepositAmount);
    //Get Previous Deposit Number and Convert it into Number
    const depositTotal = document.getElementById('deposit-total')
    const previousDepositText = depositTotal.innerText
    const previousDepositAmount = parseFloat(previousDepositText)
    //Replace previous Deposit with new deposit and update it into previous deposit html tag
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal

    //Clear the input value
    depositInputField.value = ''


    //Update New Balance
    const previousBalanceTotal = document.getElementById('balace-total');
    const previousBalanceTotalText = previousBalanceTotal.innerText
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText)
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    previousBalanceTotal.innerText = newBalanceTotal
})


document.getElementById("withdra-button").addEventListener('click', function(){
    //Get Widthdraw Input from HTML Tag and Convert it into Number
    const widthdrawInputField = document.getElementById('withdraw-input');
    const widthdrawInputText = widthdrawInputField.value;
    const newWidthdrawAmount = parseFloat(widthdrawInputText)
    //Get Previous Widthdraw Number and Convert it into Number
    const widthdrawTotal = document.getElementById('withdraw-total');
    const previousWidthdrawText = widthdrawTotal.innerText
    const previouswidthdrawAmount = parseFloat(previousWidthdrawText)
    //Replace previous Deposit with new deposit and update it into previous deposit html tag
    const newWidthdrawTotal = previouswidthdrawAmount + newWidthdrawAmount;
    widthdrawTotal.innerText = newWidthdrawTotal


    //Clear the input value
    widthdrawInputField.value = ''


    //Update New Balance
    const previousBalanceTotal = document.getElementById('balace-total');
    const previousBalanceTotalText = previousBalanceTotal.innerText
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText)
    const newBalanceTotal = previousBalanceTotalAmount - newWidthdrawAmount;
    previousBalanceTotal.innerText = newBalanceTotal


})