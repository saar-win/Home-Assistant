"""Constants for the samsungtv_smart integration."""

DOMAIN = "samsungtv_smart"
BASE_URL = "http://{host}:8001/api/v2/"

UPDATE_METHODS = {
    "SmartThings": "smartthings",
    "Ping": "ping",
    "WebSockets": "websockets",
}

RESULT_SUCCESS = "success"
RESULT_NOT_SUCCESSFUL = "not_successful"
RESULT_NOT_SUPPORTED = "not_supported"
RESULT_WRONG_APIKEY = "wrong_api_key"
RESULT_MULTI_DEVICES = "multiple_st_device"

DEFAULT_NAME = "Samsung TV Remote"
DEFAULT_PORT = 8001
DEFAULT_TIMEOUT = 5
DEFAULT_UPDATE_METHOD = UPDATE_METHODS["Ping"]
CONF_DEVICE_NAME = "device_name"
CONF_DEVICE_MODEL = "device_model"
CONF_UPDATE_METHOD = "update_method"
CONF_UPDATE_CUSTOM_PING_URL = "update_custom_ping_url"
CONF_SOURCE_LIST = "source_list"
CONF_APP_LIST = "app_list"
CONF_SHOW_CHANNEL_NR = "show_channel_number"
CONF_SCAN_APP_HTTP = "scan_app_http"
CONF_DEVICE_OS = "device_os"

WS_PREFIX = "[Home Assistant]"

DEFAULT_SOURCE_LIST = '{"TV": "KEY_TV", "HDMI": "KEY_HDMI"}'
DEFAULT_APP = "TV/HDMI"

STD_APP_LIST = {
    # app_id: smartthings app id (if different and available)
    "org.tizen.browser": "",                    #Internet
    "11101200001": "org.tizen.netflix-app",     #Netflix
    "111299001912": "9Ur5IzDKqV.TizenYouTube",  #YouTube
    "3201512006785": "org.tizen.ignition",      #Prime Video
    "11091000000": "4ovn894vo9.Facebook",       #Facebook 
    "3201601007250": "QizQxC7CUf.PlayMovies",   #Google Play
    "3201606009684": "rJeHak5zRg.Spotify",      #Spotify
}
