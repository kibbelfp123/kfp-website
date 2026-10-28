const growthForm = document.querySelector('#growth-form');

if (growthForm) {
  const estimatedValue = document.querySelector('#estimated-value');
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

  const calculateGrowth = () => {
    const formData = new FormData(growthForm);
    const startingBalance = Number(formData.get('startingBalance'));
    const monthlyContribution = Number(formData.get('monthlyContribution'));
    const years = Number(formData.get('years'));
    const monthlyRate = Number(formData.get('annualReturn')) / 100 / 12;
    const months = years * 12;
    const growthFactor = (1 + monthlyRate) ** months;
    const balance = monthlyRate === 0
      ? startingBalance + monthlyContribution * months
      : startingBalance * growthFactor + monthlyContribution * ((growthFactor - 1) / monthlyRate);

    estimatedValue.textContent = currency.format(balance);
  };

  growthForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (growthForm.reportValidity()) calculateGrowth();
  });

  calculateGrowth();
}