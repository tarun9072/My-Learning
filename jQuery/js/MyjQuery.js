$(document).ready(function () {
    console.log("We are Using the Jquery");
    // $('p').click(function () {
    //     console.log('You clicked on Paragraph')
    //     $(this).hide();
    // });
    // $('p').on(
    //     {
    //         click: function () {
    //             console.log("Thanks for Clicking");

    //         },
    //         mouseleave: function () {
    //             console.log("Mouse Leave")
    //         }
    //     })
    //Creating Animation
    // $('#wiki').slideUp(5000);
    // $('#wiki').slideDown(3000, function () {
    //     console.log("Animation Completed");
    // })
    //---------------------------------------------
    // $("div").hover(function (){
    //     $("div").fadeToggle(1000, function(){
    //         console.log("Toggle Done");
    //     })
    // })
    //Events
    // $("#btn").click(function () {
    //     $("#img1").css('width', '500px')
    // })
    // $("#btn").dblclick(function () {
    //     $("#img1").css('width', '300px')
    // })
    $("img").mouseenter(function(){
        $("img").css('width', '500px')
    })
    $("img").mouseleave(function(){
        $("img").css('width', '300px')
    })

})