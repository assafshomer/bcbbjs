$(document).ready(function () {
    initBoard();
    loadBoardImage();
    initGUI();
    $("#serverroot").val("Backend Server: "+SERVER_ROOT);
    $("#toshroot").val("Toshi Server: "+TOSHI_SERVER);
    $("#serverroot").change(function () {
        SERVER_ROOT = $(this).val();
        SERVER_GETPRICE_URL = SERVER_ROOT + "/api/pixels";
    });
});