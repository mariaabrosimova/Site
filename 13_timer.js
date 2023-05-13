(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    
    const countDown = new Date().getTime() + 0.1*minute,
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          if (distance < 0) {
            alert("Время вышло!");
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            document.getElementById("test_l").style.display = "none";  

            const res = result();
            document.getElementById("testRes").innerHTML = '<b>' + res + '%' + '</b>';

            clearInterval(x);
          }

        }, 0) 
        
    }());