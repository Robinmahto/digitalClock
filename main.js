const updateTime = () =>{
    const hourEL = document.querySelector('#hour');
    const minuteEL = document.querySelector('#minute');
    const secondEL = document.querySelector('#second');

    let d = new Date();

    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    if(hours >= 0 && hours <= 9){
        hours = "0" + hours;
    }
    if(minutes >= 0 && minutes <= 9){
        minutes = "0" + minutes;
    }
    if(seconds >= 0 && seconds <= 9){
        seconds = "0" + seconds;
    }

    hourEL.innerHTML = hours;
    minuteEL.innerHTML = minutes;
    secondEL.innerHTML = seconds;

    // Date month and year
    const dateEL = document.querySelector('#date');
    // date
    let date = d.getDate();
    if(date >= 0 && date <= 9){
        date = "0" + date;
    }
    // month
    let month = d.getMonth();
    if(month >= 0 && month <= 9){
        month = "0" + month;
    }
    // full year
    let year = d.getFullYear();
    if(year >= 0 && year <= 9){
        date = "0" + year;
    }

    dateEL.innerHTML = `${date}/${month}/${year}`;

    // Day
    const dayEL = document.querySelector('#day');
    let dayNumber = d.getDay();
    let day = "";

    switch(dayNumber){
        case 0: day = "sunday";
        break;
        case 1: day = "monday";
        break;
        case 2: day = "Tuesday";
        break;
        case 3: day = "wednesday";
        break;
        case 4: day = "Thursday";
        break;
        case 5: day = "Friday";
        break;
        case 6: day = "saturday";
        break;
    }
    dayEL.innerHTML = day;
}

window.onload = function(){
    setInterval(updateTime, 1000)
};