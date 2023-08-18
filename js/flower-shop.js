let total = 0;

function handleClickEvenerUsedBtn(data){
    const selectedContainer = document.getElementById('selected-container');
    const flowerItemName = data.parentNode.childNodes[1].innerText;
    const p = document.createElement('p');
    p.innerHTML = flowerItemName;
    selectedContainer.appendChild(p);
    const price = data.parentNode.childNodes[5].innerText.split(" ")[1]
    total = total + parseFloat(price);
    document.getElementById("total").innerText = total;
    const discountPercentage = 100 / 10;
    const discountTotal = total / discountPercentage
    document.getElementById('discount').innerText = discountTotal;
    const grandTotal = total - discountTotal;
    document.getElementById('grand-total').innerText = grandTotal;

}