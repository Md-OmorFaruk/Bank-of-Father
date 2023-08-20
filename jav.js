// document.getElementById('submit').addEventListener('click', function () {
//       //for mail
//       const userEmail = document.getElementById('user-email');
//       const email = userEmail.value;
//       //for pass
//       const userPass = document.getElementById('user-pass');
//       const pass = userPass.value;

//       //condition
//       if (email === 'omor4498@gmail.com' && pass === '1234') {
//             window.location.href = 'Bank.html';
//       }
//       else {
//              alert('Invalid User');
//       }
// });

//Bank Page
document.getElementById('deposit').addEventListener('click', function () {
      const depositField = document.getElementById('d-money');
      const depositAmount = depositField.value;
      const prevAmount = parseFloat(depositAmount);

      if (isNaN(depositAmount)) {
            alert('Warning!! Please enter money not ABCD behenchod') 
            depositField.value = '';
            return;
      }

      //changing deposit money
      const totaldepo = document.getElementById('dollar');
      const alltotaldep = totaldepo.innerText;
      const subAmount = parseFloat(alltotaldep);
      totaldepo.innerText = prevAmount + subAmount;
      

      //changing Balance
      const total = document.getElementById('Bdoller');
      const totalBalance = total.innerText;
      const BalanaceTk = parseFloat(totalBalance);

      total.innerText = prevAmount + BalanaceTk;

      depositField.value = '';

});

document.getElementById('withdraw').addEventListener('click', function () {
      const wMoney = document.getElementById('w-money');
      const wAmount = wMoney.value;
      const wPreAmount = parseFloat(wAmount);

      //changing withdray
      const wDoller = document.getElementById('Wdoller');
      const wPreMoney = wDoller.innerText;
      const wInTk = parseFloat(wPreMoney);

      //changing Balance
      const total = document.getElementById('Bdoller');
      const totalBalance = total.innerText;
      const BalanaceTk = parseFloat(totalBalance);


        if (BalanaceTk < wPreAmount) {
            alert('Warning!!! You don,t have that much money right now.')
              wMoney.value = '';
            return;
      }
      if (isNaN(wAmount)) {
            alert('Warning!! Please enter money not ABCD behenchod');
             wMoney.value = '';
            return;
      }

      wDoller.innerText = wPreAmount + wInTk;
      total.innerText = BalanaceTk - wPreAmount;

     
       wMoney .value = '';
});