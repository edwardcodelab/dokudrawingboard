

function addBtnActionDokudrawingboard($btn, props, edid) {
    // initialize stuff if required
    // ...
 
    $btn.click(function() {

        
        // your click handler
        window.open("./doku.php?do=my_action");
       

            return false;
    });
 
    return 'click';
}


