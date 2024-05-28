//   stap01
document.getElementById('deposti-button').addEventListener('click',function(){
    const depositeFild = document.getElementById('depositeFild');
    const newdipositstring = depositeFild.value;
    // newdeposite velue convart number or float 
    const newdepositamount = parseFloat(newdipositstring);
    console.log(newdepositamount);
    // after click the input box is clear
    depositeFild.value = ''
    // get the deposit box span tag

    const depositeTotalEmount = document.getElementById('deposit-total');
     const priviusDipositeTotalString= depositeTotalEmount.innerText;
     const priviousDisopitetotal = parseFloat(priviusDipositeTotalString)
       console.log(priviousDisopitetotal)
     
    //  calculete the value and save this  span tag

     const newDepositeTotal = priviousDisopitetotal + newdepositamount;
     depositeTotalEmount.innerText = newDepositeTotal;

    //  stape next ttal balance stape  or 3rd div
     const balancetotalamount = document.getElementById('balance-total');
     const balancetotalamoountString = balancetotalamount.innerText;
     const priviousbalancetotalAmount = parseFloat(balancetotalamoountString);
    //  console.log(balancetotalAmount)

    // calculation and set value in the total balance span tag

    const newTotalbalance = priviousbalancetotalAmount + newDepositeTotal;
    // console.log(newTotalbalance)
    balancetotalamount.innerText = newTotalbalance;
})