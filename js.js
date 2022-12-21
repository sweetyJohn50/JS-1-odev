let namePrompt = prompt("Adınızı Giriniz", );
let nameSpan = document.querySelector('#myName');

if(namePrompt <= 0){
    alert("Boş Bırakamazsınız")
    location.reload()
}else{

}
nameSpan.innerHTML = `${namePrompt}`;

const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
showTime = () => {
    let dateTime = new Date();
    let day = days[dateTime.getDay()];
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    document.querySelector("#myClock").innerHTML = `${hour}: ${minute}: ${second}  ${day}`
}
setInterval(showTime, 1000);
showTime();