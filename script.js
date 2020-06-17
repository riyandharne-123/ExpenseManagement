var selectedRow = null

function onFormSubmit() {
  var exname=document.getElementById("expenseName").value;
    var ex=document.getElementById("expense").value;
  if(exname==""||ex==""){
    alert('pls enter all details');
  }
  else{
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
}
}

function readFormData() {
    var formData = {};
    formData["expenseName"] = document.getElementById("expenseName").value;
    formData["expense"] = document.getElementById("expense").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.expenseName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.expense;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<i class="fa fa-pencil btn-warning" aria-hidden="true" onClick="onEdit(this)" style="font-size:30px;"></i>
                       <i class="fa fa-trash btn-danger" aria-hidden="true" onClick="onDelete(this)" style="font-size:30px;"></i>`;
}

function resetForm() {
    document.getElementById("expenseName").value = "";
    document.getElementById("expense").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("expenseName").value = selectedRow.cells[0].innerHTML;
   document.getElementById("expense").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.expenseName;
    selectedRow.cells[1].innerHTML = formData.expense;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
