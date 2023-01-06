$(document).ready( function () {
    $('#table_id').DataTable();
} );

$('#table_id').DataTable( {
    paging: true,
    "ajax": "data.json",
    "columns": [
        { data : "msgContext.appId" },
        { data : "traceId" },
        { data : "additionalInfo.errorCode" },
        { data : "message" },
        { data : "additionalInfo.messageTimestamp" },
    ],
    rowId: '_id.$oid',
    
} );

