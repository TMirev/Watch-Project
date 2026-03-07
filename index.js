const hourHand = document.querySelector(".hours");
const minuteHand = document.querySelector(".minutes");
const secondHand = document.querySelector(".seconds");

function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const secondsDeg = seconds * 6;
    const minutesDeg = minutes * 6 + seconds * 0.1;
    const hoursDeg = hours * 30 + minutes * 0.5;

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;

}

setInterval(updateClock, 1000);
updateClock();

const date = document.getElementById("dateDisplay");

function updateDate() {
    const now = new Date();

    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    let today = new Date();
    let dayNumber = today.getDay();
    let dayName = weekDay[dayNumber];
    document.getElementById("dayWeekDisplay").textContent = dayName;

    const formatted = (`${day}/${month}/${year}`);

    document.getElementById("dateDisplay").textContent = formatted;
}


setInterval(updateDate, 60000);
updateDate();





















