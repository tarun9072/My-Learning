$(document).ready(function () {
    // console.log("We are Using the Jquery");
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
    //This is an example of Call Back Function too
    // })
    //Events
    // $("#btn").click(function () {
    //     $("#img1").css('width', '500px')
    // })
    // $("#btn").dblclick(function () {
    //     $("#img1").css('width', '300px')
    // })
    // $("img").mouseenter(function(){
    //     $("img").css('width', '500px')
    // })
    // $("img").mouseleave(function(){
    //     $("img").css('width', '300px')
    // })

    //DOM Manipulation

    // $("#div1").click(function(){
    //     var x = $("#p1").html();
    //     $("#span1").text(x)
    // })
    // $("#p1").click(function(){
    // alert($("#p1").html())   //It shows Html if written
    //    alert($("#p1").text())      // It only Shows the Text
    // })

    // $("#btn1").click(function(){
    //     $(".para").attr("id", "p2")     //If you change any attribute then dont access them by that attribute that will going to be changed. It will not throw an error but it does not work
    // })
    // $("#p1").click(function(){
    //     alert($(".para").attr("id"))
    // })
    //Append or Prepend 
    $("#btn1").click(function(){
        $("#div1").append('<p>This is a para append by jQuery</p>')
        
    })
    $("#btn2").click(function(){
        $("#div1").prepend('<p>This is a para Prepend by jQuery</p>')
    })
    // Dragable intraction
    // $(".box").draggable();


})