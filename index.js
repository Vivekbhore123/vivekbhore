 
      // let i=0;
  var x = document.getElementById("perform");
      function final() {
          i++;
        console.log("from final");        
         if(i==1 || i==2 || i==3)
         {
            if (x.style.display == "none") {
            x.style.display = "block";
            i--;
          } else {
            x.style.display = "none";
          }
         }
        
      }

      function openNav() {
          if (i>=3) {
          var x= document.getElementById("perform");
          x.style.display = "none";
          document.getElementById("mySidenav").style.width = "100%";
          console.log("from opennav");  
          i++;
         
        }
      
       
        
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
         var x= document.getElementById("perform");
         console.log("from closenav");  
         x.style.display = "none";
         if(i==7)
        {
            i=0;
        }
        
      }
    