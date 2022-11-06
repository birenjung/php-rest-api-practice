$(document).ready(function(){
  function loadTable(){
    $.ajax({
        url: 'http://localhost/PHP%20REST%20API/api-fetch-all.php',
        method : 'GET',
        success: function(data){
            if(data.status == 'false')
            {
                $('#loadTable').append("<tr><td colspan='6'><h2>"+ data.message +"</h2></td></tr>");
            }
            else
            {
                $.each(data, function(key, value){
                    $('#loadTable').append("<tr>"+
                                                    "<td>"+ value.id +"</td>"+
                                                    "<td>"+ value.name+"</td>"+
                                                    "<td>"+ value.age+"</td>"+
                                                    "<td>"+ value.city+"</td>"+
                                                    "<td>"+'<button class="btn btn-success" type="submit">Edit</button>'+"</td>"+
                "<td>"+'<button class="btn btn-danger" type="submit"><i class="fa fa-remove" aria-hidden="true"></i></button>'+"</td>"+
                                            "</tr>");
                })
            }
        }    
       })
  }
  loadTable();
})
//To fetch all data