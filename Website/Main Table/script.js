function myFunction2() {
    var MyDiv1 = document.getElementById('DIV1');
     alert(MyDiv1.innerHTML);
}

const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    } 
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

function myFunction() {
  var MyDiv1 = document.getElementById('DIV1');
    if(MyDiv1.innerHTML.isS("<div>1</div>")) {
      alert("true");
    } else {
      alert("false");
    }
    /* if(MyDiv1.innerHTML.includes("2")) {             change line 67 with  days += `<div>${i}</div>`; "tipp"
      alert("2");
    } 
    if(MyDiv1.innerHTML.includes("3")) {
      alert("3");
    } 
    if(MyDiv1.innerHTML.includes("4")) {
      alert("4");
    }  
    if(MyDiv1.innerHTML.includes("5")) {
      alert("5");
    } 
    if(MyDiv1.innerHTML.includes("6")) {
      alert("6");
    } 
    if(MyDiv1.innerHTML.includes("7")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("8")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("9")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("10")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("11")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("12")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("13")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("14")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("15")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("16")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("17")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("18")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("19")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("20")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("21")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("22")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("23")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("24")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("25")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("26")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("27")) {
      alert("4");
    } 
    if(MyDiv1.innerHTML.includes("28")) {
      alert("28");
    } 
    if(MyDiv1.innerHTML.includes("29")) {
      alert("29");
    } 
    if(MyDiv1.innerHTML.includes("30")) {
      alert("30");
    } 
    if(MyDiv1.innerHTML.includes("31")) {
      alert("31");
    } */
}

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();