function amountValue()
{
    const amountRange = document.getElementById('amountRange').value + " руб.";
    const amountText = document.getElementById('amountText');
    amountText.value = amountRange;
}
function dayValue()
{
    const dayRange = document.getElementById('dayRange').value + " дней";
    const dayText = document.getElementById('dayText');
    dayText.value = dayRange;
}
function input()
{
    const valueInput = getElementById('dayText').value;
    const dayRange = document.getElementById('dayRange');
    dayRange.value = valueInput;
}