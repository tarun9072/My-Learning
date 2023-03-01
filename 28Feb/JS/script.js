var emptyRow = "<tr><td colspan='5'> No Record Available</td></tr>";
$(document).ready(function () {
    $("#table tbody").append(emptyRow);

    $("#btnAdd").click(function () {
        var name = $("#name").val().trim();
        var address = $("#address").val().trim();
        var country = $("#country").val().trim();
        var MobileNumber = $("#mNumber").val().trim();
        if (name != "" && address != "" && country != "" && MobileNumber != "") {
            if ($("#table tbody").children().children().length == 1) {
                $("#table tbody").html("");
            }

            var dynamicTr = "<tr><td>" + name + "</td><td>" + address + "</td><td>" + country + "</td><td>" + MobileNumber + "</td></tr>";
            $("#table tbody").append(dynamicTr);
            $("#name").val("");
            $("#address").val("");
            $("#country").val("");
            $("#mNumber").val("");
            
            
        }
        else {
            alert("Please Provide Values")
        }

    });



})