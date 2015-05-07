$document.ready(function(){
    $('#myTab a[href="#about"]').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
    $('#myTab a[href="#forgeLake"]').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
    $('#myTab a[href="#bitsMonster"]').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
    console.log("javascript is loading.");

});