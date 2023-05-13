
function MoveBanner(x,dx,fl_visibility) {
  banner = document.getElementById("MovingBanner");
  banner.style.left =x
  var v;
  if (fl_visibility) v="visible";
  else v="hidden";
  banner.style.visibility =v;
  
  if (x > 70)
    dx = false;
  if (x < 0)
    dx = true;

  if (dx)
  x += 0.2;
  else
  x -= 0.2;
  // alert(x);
  banner.style.left =x+"%";
  // var a = document.getElementById("MovingBanner").style.left;
  // alert(a);
  setTimeout(function () { MoveBanner(x,dx,!fl_visibility);}, 50);
 }
  
 function showFull(preview) {
    shortAndFull = preview.getElementsByTagName('*');
    short = shortAndFull[0];
    short.style.display = "none";
    full = shortAndFull[1];
    full.style.display = "block";
    
  }
  
  function showShort(preview) {
  shortAndFull = preview.getElementsByTagName('*');
  short = shortAndFull[0];
  short.style.display = "block";
  full = shortAndFull[1];
  full.style.display = "none";
  
  }

 var Cal = function(divId) {
    //Сохраняем идентификатор div
    this.divId = divId;
    // Дни недели с понедельника
    this.DaysOfWeek = [
      'Пн',
      'Вт',
      'Ср',
      'Чт',
      'Пт',
      'Сб',
      'Вс'
    ];
    // Месяцы начиная с января
    this.Months =['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    //Устанавливаем текущий месяц, год
    var d = new Date();
    this.currMonth = d.getMonth();
    this.currYear = d.getFullYear();
    this.currDay = d.getDate();
  };
  // Переход к следующему месяцу
  Cal.prototype.nextMonth = function() {
    if ( this.currMonth == 11 ) {
      this.currMonth = 0;
      this.currYear = this.currYear + 1;
    }
    else {
      this.currMonth = this.currMonth + 1;
    }
    this.showcurr();
  };
  // Переход к предыдущему месяцу
  Cal.prototype.previousMonth = function() {
    if ( this.currMonth == 0 ) {
      this.currMonth = 11;
      this.currYear = this.currYear - 1;
    }
    else {
      this.currMonth = this.currMonth - 1;
    }
    this.showcurr();
  };
  // Показать текущий месяц
  Cal.prototype.showcurr = function() {
    this.showMonth(this.currYear, this.currMonth);
  };
  // Показать месяц (год, месяц)
  Cal.prototype.showMonth = function(y, m) {
    var d = new Date()
    // Первый день недели в выбранном месяце 
    , firstDayOfMonth = new Date(y, m, 7).getDay()
    // Последний день выбранного месяца
    , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
    // Последний день предыдущего месяца
    , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
    var html = '<table>';
    // Запись выбранного месяца и года
    html += '<thead><tr>';
    html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
    html += '</tr></thead>';
    // заголовок дней недели
    html += '<tr class="days">';
    for(var i=0; i < this.DaysOfWeek.length;i++) {
      html += '<td>' + this.DaysOfWeek[i] + '</td>';
    }
    html += '</tr>';
    // Записываем дни
    var i=1;
    do {
      var dow = new Date(y, m, i).getDay();
      // Начать новую строку в понедельник
      if ( dow == 1 ) {
        html += '<tr>';
      }
      // Если первый день недели не понедельник показать последние дни предыдущего месяца
      else if ( i == 1 ) {
        html += '<tr>';
        var k = lastDayOfLastMonth - firstDayOfMonth+1;
        for(var j=0; j < firstDayOfMonth; j++) {
          html += '<td class="not-current">' + k + '</td>';
          k++;
        }
      }
      // Записываем текущий день в цикл
      var chk = new Date();
      var chkY = chk.getFullYear();
      var chkM = chk.getMonth();
      if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
        html += '<td class="today">' + i + '</td>';
      } else {
        html += '<td class="normal">' + i + '</td>';
      }
      // закрыть строку в воскресенье
      if ( dow == 0 ) {
        html += '</tr>';
      }
      // Если последний день месяца не воскресенье, показать первые дни следующего месяца
      else if ( i == lastDateOfMonth ) {
        var k=1;
        for(dow; dow < 7; dow++) {
          html += '<td class="not-current">' + k + '</td>';
          k++;
        }
      }
      i++;
    }while(i <= lastDateOfMonth);
    // Конец таблицы
    html += '</table>';
    // Записываем HTML в div
    document.getElementById(this.divId).innerHTML = html;
  };
  // При загрузке окна
  window.onload = function() {
    alert("Добрый день, рады приветствовать Вас на сайте");
    window.setInterval(
        function(){
            var d = new Date();
            document.getElementById("clock").innerHTML = d.toLocaleTimeString();
        }
      , 1000);
     
    MoveBanner(0,true, true);
    
    // Календарь
    var c = new Cal("divCal");			
    c.showcurr();
    //-------------------------------------
    // Привязываем кнопки «Следующий» и «Предыдущий»
    getId('btnNext').onclick = function() {
      c.nextMonth();
    };
    getId('btnPrev').onclick = function() {
      c.previousMonth();
    };
    //-------------------------------------
  }
  // Получить элемент по id
  function getId(id) {
    return document.getElementById(id);
  }


  function check()
 {   var question;
     var value1;
     var value2;
      
     question = 1;
     value1 = 0;
     value2 = 0;
       
     result = "";

     var choice;
      
     for (question = 1; question <= 3; question++) {
      
        var q = document.forms['quiz'].elements['q'+question];

           for (var i = 0; i < q.length; i++) {
              if (q[i].checked) {
                 choice = q[i].value;
              }
           }

           if (choice == "value1") {
              value1++;
           }

           if (choice == "value2") {
              value2++;
           }


        }

     if (value2 == 0) {

        // Нет правильных ответов
        result = "2";

     }

     else if (value2 == 1) {

        // Один правильный ответ
        result = "3";

     }

     else if (value2 == 2) {

        // Два правильных ответа
        result = "4";

     }

     else if (value2 == 3) {

        // Три правильных ответа
        result = "5";

     }
     else {
        result = "404";
     }

    
    var win1 // Объявляем переменную для нового окна.
    
    
    alert("Сейчас откроется новое окно."); 
    
    win1 = window.open("", "Result", "resizable=1, width=300, height=150");
    
    // Присваиваем переменной win1 новое пустое окно размерами 300х150
    
    win1.document.open (); 
    win1.document.write("<html><head><title>Result</title><META http-equiv=Content-Type content='text/html; charset=UTF-8'>");
    win1.document.write(" </head> <body><div height=40, width=120 style='text-align: center;'>Результаты теста<br>");
    win1.document.writeln("Правильных ответов :"+value2 +"<br>");
    win1.document.writeln("Неправильных ответов: "+value1+"<br>");
    win1.document.writeln("Ваша оценка:"+result+"<br>");
    win1.document.close();  
    
  }

 