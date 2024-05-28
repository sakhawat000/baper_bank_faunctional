//  withdraw  buton get fast
 document.getElementById('withdraw-button').addEventListener('click', function(){
    //  console.log('this is psat')
    // coll the withdrawfild 
     const withdrawfild = document.getElementById('withdrawfild');
      const withdrawamountString = withdrawfild.value;
    //   string to float covaert
      const setwithdrowamount= parseFloat(withdrawamountString);
       console.log(setwithdrowamount);
    withdrawfild.value = ''
    // get withdraw div 
     const withdrowAmount = document.getElementById('withdraw-total');
     const withdrowAmountlookString = withdrowAmount.innerText;
      const withdrawAmountlook = parseFloat(withdrowAmountlookString)

    //  claculet total withdraw amount and set this value in the span tag 
     const newWithdrawAmount = withdrawAmountlook + setwithdrowamount;
      console.log(newWithdrawAmount)
     withdrowAmount.innerText = newWithdrawAmount;

    //  get total balance  fast 

    const totalBalanceElement = document.getElementById('balance-total');
    const totalBalancestring = totalBalanceElement.innerText;
    const totalBlance = parseFloat(totalBalancestring);
    // console.log(totalBlance)
    // calculate or push amount in the totalBlance

    const newTotalBalance = totalBlance - newWithdrawAmount ;
    totalBalanceElement.innerText = newTotalBalance;


 })

 