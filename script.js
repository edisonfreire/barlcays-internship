$(document).ready( function () {
    $('#table_id').DataTable();
    $('#example tfoot th').each(function () {
        var title = $(this).text();
        $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    });
} );

$('#example').DataTable( {
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
    initComplete: function () {
            // Apply the search
            this.api()
                .columns()
                .every(function () {
                    var that = this;

                    $('input', this.footer()).on('keyup change clear', function () {
                        if (that.search() !== this.value) {
                            that.search(this.value).draw();
                        }
                    });
                });
        },
        
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal( {
                    header: function ( row ) {
                        var data = row.data();
                        console.log(data)
                        return 'Details for '+data.msgContext.appId /*+' '+data[1];*/;
                    }
                } ),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
                    tableClass: 'table'
                } )
            }
        }
} );

