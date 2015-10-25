var table = document.getElementById("userTbl");

// For Deleting Table Rows
function DeleteTableRows(tableRef, totalRows) {
    for (var i = (totalRows - 1 ) ; i >= 0  ; i-- ) {
        tableRef.deleteRow(i);
    }
}

// Returns cell width according to the number to columns
function ReturnCellWidth(totalCols)
{
    var totalWidth = 100;
    return (totalWidth / totalCols);
}

//function to add rows in table
function CreateTable(tableData, totalColumns, totalRows) {
    if (totalColumns > 0 && totalRows > 0)
    {
        var cellWidth = ReturnCellWidth(totalColumns);
        for (var i = 0; i < totalRows; i++) {
            var row = table.insertRow(i);
            for (var j = 0 ; j < totalColumns ; j++) {
                var cell = row.insertCell(j);
                cell.width = cellWidth + "%";
                cell.innerHTML = tableData[j][i];
            }
        }
    }
}

// Create DataObject that stores the data of the table
function CreateDataObject(tableRef, totalRows,totalCols) {
    var dataArray = [];
    for(var i =0 ; i < totalRows ; i++)
    {
        var dataObj = {};
        for( j = 0 ; j< totalCols ; j++)
        {
            dataObj[j] = tableRef.rows[i].cells[j].innerHTML;
        }
        dataArray.push(dataObj);
    }
    return dataArray;
}

// called on click of Transpose button
function TransposeTable(event) {
    var nRows = table.rows.length;
    var nCols = table.rows[0].cells.length;
    var tableData = CreateDataObject(table, nRows, nCols);
    DeleteTableRows(table, nRows);
    CreateTable(tableData, nRows, nCols)
}


