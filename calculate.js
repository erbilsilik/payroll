let salaryGross = 0;
const salaryNet = 2000;
let sgkBase = 0;
let incomeTaxBase;
const stampTaxPercent = 0.00759;
const incomeTaxPercentage1 = 0.15;
const incomeTaxPercentage2 = 0.2;
const incomeTaxPercentage3 = 0.27;
let incomeTaxPercentage = 0.15;
let incomeTax = 0;
const unemploymentEmployeeTax = 0.01;
const sgkTax = 0.14;
let salaryTotal = 0;
const months = [
    "Ocak", 
    "Şubat", 
    "Mart", 
    "Nisan", 
    "Mayıs", 
    "Haziran", 
    "Temmuz", 
    "Ağustos", 
    "Eylül", 
    "Ekim",
    "Kasım",
    "Aralık"
];

function calculate() {
    let results = '';
    for (let i = 0; i< months.length; i++) {
    incomeTaxPercentage = checkMonthMonthly(salaryTotal);
    let salaryGrossPercent = 1 - ((1 - (sgkTax + unemploymentEmployeeTax)) * incomeTaxPercentage + 
    stampTaxPercent + unemploymentEmployeeTax + sgkTax);
    salaryGross = Number((salaryNet / salaryGrossPercent).toFixed(2));
    salaryTotal += salaryGross;
    results += `
    <tr>
    <td>${months[i]}</td>
    <td>${salaryGross}</td>
    <td>${salaryNet}</td>
    </tr>`;
    }

    return results;
}

function checkMonthMonthly(salaryTotal) {
    if (salaryTotal < 14800) {
        return incomeTaxPercentage1;
    }
    if (salaryTotal > 14800 && salaryTotal < 34000) {
        return incomeTaxPercentage2;
    }
}

document.getElementById("calculation").innerHTML = calculate();