document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rental-form');
    const priceInput = document.getElementById('phone-price');
    const downRateInput = document.getElementById('down-payment-rate');
    const monthsInput = document.getElementById('rental-months');
    const downPaymentAmount = document.getElementById('down-payment-amount');
    const monthlyPayment = document.getElementById('monthly-payment');
    const monthsLeft = document.getElementById('months-left');

    // 利率表
    const rateTable = {
        "50": { "3": 0.18, "6": 0.24, "9": 0.30, "12": 0.35 },
        "40": { "3": 0.19, "6": 0.28, "9": 0.32, "12": 0.38 },
        "30": { "3": 0.20, "6": 0.32, "9": 0.35, "12": 0.40 }
    };

    function calculate() {
        const price = parseFloat(priceInput.value);
        const downRate = parseInt(downRateInput.value) / 100;
        const months = parseInt(monthsInput.value);

        if (!price || !downRate || !months) {
            downPaymentAmount.textContent = "首付金额: ";
            monthlyPayment.textContent = "每月还款金额: ";
            monthsLeft.textContent = "剩余租赁月份: ";
            return;
        }

        const rate = rateTable[(downRateInput.value)][monthsInput.value];
        // 每月还款金额
        const monthPay = ((price - price * downRate) * (1 + rate)) / months;
        // 首付金额
        const firstPay = price * downRate + monthPay;
        // 剩余租赁月份
        const left = months - 1;

        downPaymentAmount.textContent = `首付金额: ${Math.round(firstPay)} 元`;
        monthlyPayment.textContent = `每月还款金额: ${Math.round(monthPay)} 元`;
        monthsLeft.textContent = `剩余租赁月份: ${left} 期`;
    }

    // 表单提交时计算
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        calculate();
    });

    // 输入变化时自动计算
    priceInput.addEventListener('input', calculate);
    downRateInput.addEventListener('change', calculate);
    monthsInput.addEventListener('change', calculate);

    // 页面加载时初始化
    calculate();
});// main.js

document.addEventListener('DOMContentLoaded', function() {
    const phonePriceInput = document.getElementById('phonePrice');
    const downPaymentRateInput = document.getElementById('downPaymentRate');
    const leaseMonthsInput = document.getElementById('leaseMonths');
    const calculateButton = document.getElementById('calculateButton');
    const resultDisplay = document.getElementById('resultDisplay');

    calculateButton.addEventListener('click', function() {
        const phonePrice = parseFloat(phonePriceInput.value);
        const downPaymentRate = parseFloat(downPaymentRateInput.value) / 100;
        const leaseMonths = parseInt(leaseMonthsInput.value);

        if (isNaN(phonePrice) || isNaN(downPaymentRate) || isNaN(leaseMonths)) {
            resultDisplay.textContent = '请输入有效的数字';
            return;
        }

        let interestRate = 0;

        if (downPaymentRate === 0.5) {
            if (leaseMonths === 3) interestRate = 0.18;
            else if (leaseMonths === 6) interestRate = 0.24;
            else if (leaseMonths === 9) interestRate = 0.30;
            else if (leaseMonths === 12) interestRate = 0.35;
        } else if (downPaymentRate === 0.4) {
            if (leaseMonths === 3) interestRate = 0.19;
            else if (leaseMonths === 6) interestRate = 0.28;
            else if (leaseMonths === 9) interestRate = 0.32;
            else if (leaseMonths === 12) interestRate = 0.38;
        } else if (downPaymentRate === 0.30) {
            if (leaseMonths === 3) interestRate = 0.20;
            else if (leaseMonths === 6) interestRate = 0.32;
            else if (leaseMonths === 9) interestRate = 0.35;
            else if (leaseMonths === 12) interestRate = 0.40;
        }

        const downPayment = phonePrice * downPaymentRate;
        const monthlyPayment = (phonePrice * downPaymentRate * (1 + interestRate)) / leaseMonths;

        resultDisplay.textContent = `首付金额: ${downPayment.toFixed(2)} 元, 每月还款: ${monthlyPayment.toFixed(2)} 元`;
    });
});
