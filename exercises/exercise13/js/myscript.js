$(function() {

       $topIndex = 0; /*the highest z-index is 0*/

       $( ".ui-draggable" ).draggable().css({"position":"absolute","top":"0px" });;

        $(".ui-draggable").click(function(){
            $topIndex=$topIndex+1;
            $(this).css("z-index",$topIndex);
        });

   });


        $(function(){
          $.okvideo({ source: 'https://www.youtube.com/watch?v=YB6TDRbVGtY', //'https://www.youtube.com/watch?v=OCowsu0mQto',
                    volume: 100})
        });

      