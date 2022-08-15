function getDayName(dateString) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date(dateString);
let day = date.toLocaleString('en-us', {weekday: 'long'});
return day;
}