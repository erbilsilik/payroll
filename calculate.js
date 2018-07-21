const salaryNet = 2000,
    stampTaxPercent = 0.00759,
    incomeTaxPercentage1 = 0.15,
    incomeTaxPercentage2 = 0.2,
    incomeTaxPercentage3 = 0.27,
    unemploymentEmployeeTax = 0.01,
    sgkTax = 0.14,
    months = [
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
let salaryGross = 0,
    incomeTaxPercentage = 0.15,
    sgkBase = 0,
    incomeTaxBase,
    incomeTax = 0,
    salaryTotal = 0;

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