var BOARD_WIDTH = 1250; // LAYOUT SIZE
var BOARD_HEIGHT = 800;
var GRID_SIZE = 1; // AIDING TO PLACE IMAGES WITH BETTER ALIGNMENT, THOUGH ISN'T NECESSARY AND CAN BE SET TO 1
var MOUSE_STALE_TIME = 400; // REQUEST URLS FROM SERVER ONLY IF MOUSE IS STALE FOR N MILLISECONDS
var SERVER_ROOT = "http://www.blockchainbillboard.com";
var SERVER_BOARDIMAGE_URL = "https://blockchainbillboard-contabo.s3.amazonaws.com/bcbb_image.png?v=" + Math.random();
var SERVER_GETPIXEL_URL = "getpixel.html"; // FOR DEMONSTRATION ONLY. REPLACE WITH A DYNAMIC HANDLER
var SERVER_GETPRICE_URL = SERVER_ROOT+"/api/pixels";

var REQUEST_TIMEOUT = 999999; // ms
var BALANCE_QUERY_INTERVAL = 5000; // ms
var UNCONFIRMED_QUERY_INTERVAL = 5000; // ms
var MIN_TX_FEE = 10000; // sat
var GEN_PIXEL_PRICE = 100000; // sat
var TRUN_MOD = 1000; // sat
var totalPixels;
var newPricePerPixel = 100000; // sat
var BTC_DISPLAY_UNIT = 100000; // mBTC
var staging_address;

// testnet
Bitcoin.Address.networkVersion = 0x6F;
Bitcoin.ECKey.privateKeyPrefix = 0xEF;