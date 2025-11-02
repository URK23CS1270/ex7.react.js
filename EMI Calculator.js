import React, { useState } from 'react';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const N = parseInt(loanTenure);

    // Validation
    if (isNaN(P) || P <= 0 || isNaN(annualRate) || annualRate <= 0 || isNaN(N) || N <= 0) {
      alert('⚠️ Please enter valid positive numbers for all fields.');
      return;
    }

    const R = annualRate / 12 / 100; // Monthly interest rate

    // EMI Formula
    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    const totalAmount = EMI * N;
    const interest = totalAmount - P;

    setEmi(EMI.toFixed(2));
    setTotalInterest(interest.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>💰 EMI Calculator</h2>

      <div style={styles.inputGroup}>
        <label>Loan Amount (₹): </label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Enter loan amount"
        />
      </div>

      <div style={styles.inputGroup}>
        <label>Annual Interest Rate (%): </label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Enter annual interest rate"
        />
      </div>

      <div style={styles.inputGroup}>
        <label>Loan Tenure (months): </label>
        <input
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
          placeholder="Enter tenure in months"
        />
      </div>

      <button onClick={calculateEMI} style={styles.button}>Calculate EMI</button>

      {emi && (
        <div style={styles.resultBox}>
          <h3>📊 Results:</h3>
          <p><strong>Loan Amount:</strong> ₹{loanAmount}</p>
          <p><strong>EMI:</strong> ₹{emi}</p>
          <p><strong>Total Interest to be Paid:</strong> ₹{totalInterest}</p>
        </div>
      )}
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '2px solid #007bff',
    borderRadius: '10px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#007bff',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  },
  resultBox: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#e9f5ff',
    borderRadius: '8px',
  },
};

export default EMICalculator;
