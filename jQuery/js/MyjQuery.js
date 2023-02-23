$(document).ready(function () {
    console.log("We are Using the Jquery");
    // $('p').click(function () {
    //     console.log('You clicked on Paragraph')
    //     $(this).hide();
    // });
    $('p').on(
        {
            click: function () {
                console.log("Thanks for Clicking");

            },
            mouseleave: function () {
                console.log("Mouse Leave")
            }
        })
})