$('.table tbody').on('click', '.edit', function() {
    var currow = $(this).closest('tr');
    var col1 = currow.find('td:eq(0)').text();
    var col2 = currow.find('td:eq(1)').text();
    var col3 = currow.find('td:eq(2)').text();
    var col4 = currow.find('td:eq(3)').text();
    var col5 = currow.find('td:eq(4)').text();
    var col6 = currow.find('td:eq(5)').text();
    var col7 = currow.find('td:eq(6)').text();
    var col8 = currow.find('td:eq(7)').text();
    
    $('#imgURL').val(col3);
    $('#charname').val(col4);
    $('#class').val(col5);
    $('#race').val(col6);
    $('#kills').val(col7);
    $('#level').val(col8);
})


//Reset fields inside form
$(function(){
    $('#cancel').click(function(){
        document.getElementById("imgURL").value="";
        document.getElementById("charname").value="";
        document.getElementById("class").value="";
        document.getElementById("race").value="";
        document.getElementById("gender").value="";
        document.getElementById("kills").value="";
        document.getElementById("level").value="";
    });

    $('#cancelx').click(function(){
        document.getElementById("imgURL").value="";
        document.getElementById("charname").value="";
        document.getElementById("class").value="";
        document.getElementById("race").value="";
        document.getElementById("gender").value="";
        document.getElementById("kills").value="";
        document.getElementById("level").value="";
    });
});