# Phone Rental Calculator

This project is a simple web application that calculates the down payment and monthly repayment amount for mobile phone rentals. It allows users to input the phone price, down payment percentage, and rental duration, and then calculates the required amounts based on the provided formulas.

## Features

- User-friendly interface for inputting phone rental details.
- Calculates down payment and monthly repayment amounts based on user input.
- Dynamic interest rates based on down payment percentage and rental duration.

## Calculation Logic Overview

- **Down Payment Calculation Formula**:
  - Down Payment = Phone Price * Down Payment Percentage + (Phone Price * Down Payment Percentage * (1 + Interest Rate) / Rental Months)

- **Interest Rates**:
  - **Down Payment 50%**:
    - 3 months: 18%
    - 6 months: 25%
    - 9 months: 36%
    - 12 months: 50%
  - **Down Payment 40%**:
    - 3 months: 20%
    - 6 months: 30%
    - 9 months: 40%
    - 12 months: 55%
  - **Down Payment 35%**:
    - 3 months: 25%
    - 6 months: 35%
    - 9 months: 45%
    - 12 months: 57%

## Project Structure

```
phone-rental-calculator
├── src
│   ├── index.html
│   ├── styles
│   │   └── style.css
│   ├── scripts
│   │   └── main.js
│   └── assets
├── package.json
└── README.md
```

## How to Run the Project

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open `src/index.html` in your web browser to view the application.
4. Input the required details and click the calculate button to see the results.

## License

This project is open-source and available under the MIT License.