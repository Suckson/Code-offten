  < script >
      $(document).ready(function() {
          var p = 0,
              t = 0;

          $("div").scroll(function(e) {
              p = $(this).scrollTop();
              if (p >= 45) {
                  $(".fixed-tab").css({
                      "position": "fixed",
                      "width": "100%",
                      "top": "0px",
                      "background": "#fff",
                      "z-index": "999"
                  })
              } else { //上滚
                  $(".fixed-tab").css({
                      "position": "relative",
                      "width": "100%",
                      "background": "#fff",
                      "z-index": "999"
                  })
              }
              setTimeout(function() {
                  t = p;
              }, 0);
          });
      });
  /script>