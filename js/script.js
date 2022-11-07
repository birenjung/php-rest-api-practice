$(document).ready(function () {
    // Message function
    function message(message, status){
        if(status=="true"){
            $("#success-msg").html(message).show();
        }else if(status=="false"){
            $("#error-msg").html(message).slideDown();
            $("#success-msg").slideUp();
        }
    }
    // targetForm function
    function jsonObj(targetForm){
        let saveFormArray = $(targetForm).serializeArray();       
        let saveFormObj = {};
        for (i = 0; i < saveFormArray.length; i++) {
            if (saveFormArray[i].value == "") {
                return false;
            } else {
                saveFormObj[saveFormArray[i].name] = saveFormArray[i].value;
            }
        } 
        let json_string = JSON.stringify(saveFormObj);
        return json_string;       
    }
    //To fetch all data
    function loadTable() {
        $.ajax({
            url: 'http://localhost/PHP%20REST%20API/api-fetch-all.php',
            method: 'GET',
            success: function (data) {
                if (data.status == 'false') {
                    $('#loadTable').append("<tr><td colspan='6'><h2>" + data.message + "</h2></td></tr>");
                }
                else {
                    $.each(data, function (key, value) {
                        $('#loadTable').append("<tr>" +
                            "<td>" + value.id + "</td>" +
                            "<td>" + value.name + "</td>" +
                            "<td>" + value.age + "</td>" +
                            "<td>" + value.city + "</td>" +
                            "<td>" + '<button class="btn btn-success edit-btn" type="submit" data-eid="' + value.id + '">Edit</button>' + "</td>" +
                            "<td>" + '<button class="btn btn-danger" data-did="' + value.id + '" type="submit"><i class="fa fa-remove" aria-hidden="true"></i></button>' + "</td>" +
                            "</tr>");
                    })
                }
            }
        })
    }
    loadTable();
    // To fetch single data : in a modal
    $(document).on("click", ".edit-btn", function () {
        $("#modal").show();
        let id = $(this).data("eid");
        let obj = { id: id };
        let myJSON = JSON.stringify(obj);

        $.ajax({
            url: "http://localhost/PHP%20REST%20API/api-fetch-single.php",
            method: "POST",
            data: myJSON,
            success: function (data) {
                $("#id").val(data[0].id);
                $("#name").val(data[0].name);
                $("#age").val(data[0].age);
                $("#city").val(data[0].city);
            }

        })
    });
    //To insert a single data
    $(document).on("click", "#save", function (e) {
        e.preventDefault();
        let formObj = jsonObj("#save-form");
        console.log(formObj);
    })
    // Update single record
    $(document).on("click", "#update", function (e) {
        e.preventDefault();
        let id = $("#id").val();
        let name = $("#name").val();
        let age = $("#age").val();
        let city = $("#city").val();
        let obj2 = { id: id, name: name, age: age, city: city };

        if (obj2 = {}) {
            $("#test").text = "All fields are required!!";
        } else {
            let myJSON2 = JSON.stringify(obj2);
            $.ajax({
                url: "http://localhost/PHP%20REST%20API/api-update.php",
                method: "POST",
                data: myJSON2,
                success: function (data) {
                    $("#test").html(data);
                }

            })
        }

    });
    // Hide the modal box
    $(document).on("click", "#close-btn", function (e) {
        e.preventDefault();
        $("#modal").hide();
    });



});
