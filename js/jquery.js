$(document).ready(function() {

  $.getJSON("json/carrousel.json", function(json) {
        let i = 0;
        let image = json[i].image;
        $("#image").html(`<img src="${image}">`); //animate({opacity:0.25},1000);

        $("#next").on('click', function() {

          if (i <3) {
            i++;
          image = json[i].image;
          console.log(image);
          $("#image").html(`<img src="${image}">`);


        } else if (i > 2 ) {
          i =0;
          let image = json[i].image;
          $("#image").html(`<img src="${image}">`);
        }

        });

          $("#prev").on('click', function(){
            if(i > 0) {
            i--;
            image = json[i].image;
            $("#image").html(`<img src="${image}">`);

          }

        });
        // setTimeout
        function loop(){
            setTimeout(function(){

                  if (i <3) {
                    i++;
                  image = json[i].image;
                  $("#image").html(`<img src="${image}">`);

                } else if (i > 2 ) {
                  i =0;
                  let image = json[i].image;
                  $("#image").html(`<img src="${image}">`);
                }

              loop(); // relance loop

          }, 3000);

      } // function loop()

      loop(); // relance la function


  }); // getJSON
});
