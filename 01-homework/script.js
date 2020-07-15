const DRESS = 15.678;
const SHIRT = 123.965;
const VEST = 90.2345;

let allProducts = [ DRESS, SHIRT, VEST ];

let maxNumber = Math.max(DRESS, SHIRT, VEST);
console.log(maxNumber);


let minNumber = Math.min(DRESS, SHIRT, VEST);
console.log(minNumber);


let sumProducts = 0;
for ( i = 0; i < allProducts.length; i++) {
    sumProducts = sumProducts + parseFloat(allProducts[i]);
}
console.log(sumProducts);


let sumIntegerProducts = 0;
for ( i = 0; i < allProducts.length; i++) {
    sumIntegerProducts = sumIntegerProducts + +(parseInt(allProducts[i]));
}

console.log(sumIntegerProducts);


let devisionSumInteger = sumIntegerProducts / 100;
let roundingToHundredths = Math.ceil(devisionSumInteger) * 100;
console.log(roundingToHundredths);


let boolean = sumIntegerProducts % 2 == 0;
console.log(boolean);

let customerCash = 500;
let change = customerCash - sumProducts;
console.log(change);


let avarege = (sumProducts / allProducts.length).toFixed(2);
console.log(avarege);


let discount = Math.random();
console.log(discount);

let netProfit = (sumProducts * discount - sumProducts / 2).toFixed(2);
console.log(netProfit);


let results = `<p>1. Максимальна ціна: ${maxNumber};</p>
<p>2. Мінімальна ціна: ${minNumber};</p>
<p>3. Вартість усіх товарів: ${sumProducts};</p>
<p>4. Округлена в меншу сторону вартість товарів: ${sumIntegerProducts};</p>
<p>5. Округлена до сотень вартість товарів: ${roundingToHundredths};</p>
<p>6. Чи є окргулена вартість товарів (4) парним числом: ${boolean};</p>
<p>7. Решта: ${change};</p>
<p>8. Середнє значення: ${avarege};</p>
<p>9. Чистий прибуток: ${netProfit};</p>
`;

document.writeln(results);









