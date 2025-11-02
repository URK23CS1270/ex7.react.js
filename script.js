document.getElementById('calculateBtn').addEventListener('click', () => {
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value);
  const loanTenure = parseInt(document.getElementById('loanTenure').value);

  if (isNaN(loanAmount) || loanAmount <= 0 ||
      isNaN(interestRate) || interestRate <= 0 ||
      isNaN(loanTenure) || loanTenure <= 0) {
    alert('⚠️ Please enter valid positive numbers for all fields.');
    return;
  }

  const R = interestRate / 12 / 100; // monthly interest
  const EMI = (loanAmount * R * Math.pow(1 + R, loanTenure)) /
              (Math.pow(1 + R, loanTenure) - 1);
  
  const totalAmount = EMI * loanTenure;
  const totalInterest = totalAmount - loanAmount;

  document.getElementById('resultLoan').textContent = loanAmount.toFixed(2);
  document.getElementById('resultEMI').textContent = EMI.toFixed(2);
  document.getElementById('resultInterest').textContent = totalInterest.toFixed(2);

  document.getElementById('resultBox').classList.remove('hidden');
});
