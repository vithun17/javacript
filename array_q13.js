
    function max(){
      const num = [2, 3, 4,10,24,5,1,30];
      var i = 0;
      var max = 0;
      let count = num.length;
      while (i < count) {
          if (num[i]>max) {
            max=num[i];
          }
          i++;
      }
      document.getElementById("q13_max").innerHTML= max;

    }
    function min(){
      const num = [2, 3, 4,10,24,5,1,30];
      var i = 0;
      var min = num[0];
      let count = num.length;
      while (i < count) {
          if (num[i]<min) {
            min=num[i];
          }
          i++;
      }
      document.getElementById("q13_min").innerHTML= min;
    }
