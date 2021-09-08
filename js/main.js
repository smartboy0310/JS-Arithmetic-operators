alert("Sayohatga marhamat...!!!");
var userName = prompt("Ismingizni kiriting")
var userMoney = Number(prompt(`"${userName} pulingiz qancha!!!"`));
var userRoadExpenses = 500*9433.34;
var userHotelExpenses = 250*9433.34;
var userMuseumExpenses = 120*10354.03;

if (userMoney >= (userRoadExpenses + userHotelExpenses + userMuseumExpenses)) {
   console.log(`“Oq yo’l, ${userName}!”`);
   alert(`“Oq yo’l, ${userName}!”`);
}
else {
   console.log(`“${userName}, ozgina sabr qilishingiz kerak bo’lar ekan.”`);
   alert(`“${userName}, ozgina sabr qilishingiz kerak bo’lar ekan.”`);
}
