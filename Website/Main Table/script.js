/*
function myFunction2() {
  var MyDiv1 = document.getElementById('myElement');
  alert(MyDiv1.innerHTML);
}
*/

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

      days += `<div id="myElement${i}">${i}</div>`;
    }

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

  var myElement1 = document.getElementById("myElement1");
  var myElement2 = document.getElementById("myElement2");
  var myElement3 = document.getElementById("myElement3");
  var myElement4 = document.getElementById("myElement4");
  var myElement5 = document.getElementById("myElement5");
  var myElement6 = document.getElementById("myElement6");
  var myElement7 = document.getElementById("myElement7");
  var myElement8 = document.getElementById("myElement8");
  var myElement9 = document.getElementById("myElement9");
  var myElement10 = document.getElementById("myElement10");
  var myElement11 = document.getElementById("myElement11");
  var myElement12 = document.getElementById("myElement12");
  var myElement13 = document.getElementById("myElement13");
  var myElement14 = document.getElementById("myElement14");
  var myElement15 = document.getElementById("myElement15");
  var myElement16 = document.getElementById("myElement16");
  var myElement17 = document.getElementById("myElement17");
  var myElement18 = document.getElementById("myElement18");
  var myElement19 = document.getElementById("myElement19");
  var myElement20 = document.getElementById("myElement20");
  var myElement21 = document.getElementById("myElement21");
  var myElement22 = document.getElementById("myElement22");
  var myElement23 = document.getElementById("myElement23");
  var myElement24 = document.getElementById("myElement24");
  var myElement25 = document.getElementById("myElement25");
  var myElement26 = document.getElementById("myElement26");
  var myElement27 = document.getElementById("myElement27");
  var myElement28 = document.getElementById("myElement28");
  var myElement29 = document.getElementById("myElement29");
  var myElement30 = document.getElementById("myElement30");
  var myElement31 = document.getElementById("myElement31");



  if (myElement1.addEventListener) {
    myElement1.addEventListener("click", function () {
      // window.location = "https://www.amazon.de/";
      alert(myElement1.innerHTML);
    });

  } if (myElement2.addEventListener) {
    myElement2.addEventListener("click", function () {
      alert(myElement2.innerHTML);
    });
  } if (myElement3.addEventListener) {
    myElement3.addEventListener("click", function () {
      alert(myElement3.innerHTML);
    });
  } if (myElement4.addEventListener) {
    myElement4.addEventListener("click", function () {
      alert(myElement4.innerHTML);
    });
  } if (myElement5.addEventListener) {
    myElement5.addEventListener("click", function () {
      alert(myElement5.innerHTML);
    });
  } if (myElement6.addEventListener) {
    myElement6.addEventListener("click", function () {
      alert(myElement6.innerHTML);
    });
  } if (myElement7.addEventListener) {
    myElement7.addEventListener("click", function () {
      alert(myElement7.innerHTML);
    });
  } if (myElement8.addEventListener) {
    myElement8.addEventListener("click", function () {
      alert(myElement8.innerHTML);
    });
  } if (myElement9.addEventListener) {
    myElement9.addEventListener("click", function () {
      alert(myElement9.innerHTML);
    });
  } if (myElement10.addEventListener) {
    myElement10.addEventListener("click", function () {
      alert(myElement10.innerHTML);
    });
  } if (myElement11.addEventListener) {
    myElement11.addEventListener("click", function () {
      alert(myElement11.innerHTML);
    });
  } if (myElement12.addEventListener) {
    myElement12.addEventListener("click", function () {
      alert(myElement12.innerHTML);
    });
  } if (myElement13.addEventListener) {
    myElement13.addEventListener("click", function () {
      alert(myElement13.innerHTML);
    });
  } if (myElement14.addEventListener) {
    myElement14.addEventListener("click", function () {
      alert(myElement14.innerHTML);
    });
  } if (myElement14.addEventListener) {
    myElement14.addEventListener("click", function () {
      alert(myElement14.innerHTML);
    });
  } if (myElement15.addEventListener) {
    myElement15.addEventListener("click", function () {
      alert(myElement15.innerHTML);
    });
  } if (myElement16.addEventListener) {
    myElement16.addEventListener("click", function () {
      alert(myElement16.innerHTML);
    });
  } if (myElement17.addEventListener) {
    myElement17.addEventListener("click", function () {
      alert(myElement17.innerHTML);
    });
  } if (myElement18.addEventListener) {
    myElement18.addEventListener("click", function () {
      alert(myElement18.innerHTML);
    });
  } if (myElement19.addEventListener) {
    myElement19.addEventListener("click", function () {
      alert(myElement19.innerHTML);
    });
  } if (myElement20.addEventListener) {
    myElement20.addEventListener("click", function () {
      alert(myElement20.innerHTML);
    });
  } if (myElement21.addEventListener) {
    myElement21.addEventListener("click", function () {
      alert(myElement21.innerHTML);
    });
  } if (myElement22.addEventListener) {
    myElement22.addEventListener("click", function () {
      alert(myElement22.innerHTML);
    });
  } if (myElement23.addEventListener) {
    myElement23.addEventListener("click", function () {
      alert(myElement23.innerHTML);
    });
  } if (myElement24.addEventListener) {
    myElement24.addEventListener("click", function () {
      alert(myElement24.innerHTML);
    });
  } if (myElement25.addEventListener) {
    myElement25.addEventListener("click", function () {
      alert(myElement25.innerHTML);
    });
  } if (myElement26.addEventListener) {
    myElement26.addEventListener("click", function () {
      alert(myElement26.innerHTML);
    });
  } if (myElement27.addEventListener) {
    myElement27.addEventListener("click", function () {
      alert(myElement27.innerHTML);
    });
  } if (myElement28.addEventListener) {
    myElement28.addEventListener("click", function () {
      alert(myElement28.innerHTML);
    });
  } if (myElement29.addEventListener) {
    myElement29.addEventListener("click", function () {
      alert(myElement29.innerHTML);
    });
  } if (myElement30.addEventListener) {
    myElement30.addEventListener("click", function () {
      alert(myElement30.innerHTML);
    });
  } if (myElement31.addEventListener) {
    myElement31.addEventListener("click", function () {
      alert(myElement31.innerHTML);
    });
  }

renderCalendar();
