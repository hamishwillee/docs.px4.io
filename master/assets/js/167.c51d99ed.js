(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1728:function(t,e,r){"use strict";r.r(e);var _=r(19),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"dji-flame-wheel-450-with-distance-sensor-and-rtk-gps-pixhawk-3-pro"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dji-flame-wheel-450-with-distance-sensor-and-rtk-gps-pixhawk-3-pro"}},[t._v("#")]),t._v(" DJI Flame Wheel 450 with Distance Sensor and RTK GPS (Pixhawk 3 Pro)")]),t._v(" "),_("p",[t._v("The "),_("em",[t._v("DJI"),_("sup",[t._v("®")]),t._v(" Flame Wheel F450")]),t._v(" Quadcopter is designed for amateur aerial photography, first person view applications, and general flying entertainment. This topic provides full build and configuration instructions for using the frame with the Pixhawk 3 Pro flight controller. Additionally this build includes an RTK GPS and a distance sensor for precision positioning.")]),t._v(" "),_("p",[t._v("Key information:")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("Frame:")]),t._v(" DJI Flame Wheel 450")]),t._v(" "),_("li",[_("strong",[t._v("Flight controller:")]),t._v(" "),_("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk3_pro.html"}},[t._v("Pixhawk 3 Pro")])],1),t._v(" "),_("li",[_("strong",[t._v("Positioning:")]),t._v(" RTK GPS")])]),t._v(" "),_("p",[_("img",{attrs:{src:r(904),alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:r(905),alt:""}})]),t._v(" "),_("h2",{attrs:{id:"parts-list"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#parts-list"}},[t._v("#")]),t._v(" Parts List")]),t._v(" "),_("ul",[_("li",[t._v("Autopilot:        "),_("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk3_pro.html"}},[t._v("Pixhawk 3 Pro")])],1),t._v(" "),_("li",[t._v("Frame:            "),_("a",{attrs:{href:"http://www.dji.com/flame-wheel-arf",target:"_blank",rel:"noopener noreferrer"}},[t._v("DJI Flamewheel 450"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("Motors:           3DR Iris Plus 950kv rebranded T-Motors MN2213")]),t._v(" "),_("li",[t._v("ESCs:             Hobbywing XRotor 35A Micro 3-6S BLHeli")]),t._v(" "),_("li",[t._v('Blades:           Graupner 10"x5" (You need to print '),_("a",{attrs:{href:"https://drive.google.com/file/d/0B2piootk_fIKMWhIVzVPWEFGLU0/view",target:"_blank",rel:"noopener noreferrer"}},[t._v("these adapters"),_("OutboundLink")],1),t._v(" to be M6 compatible) ")]),t._v(" "),_("li",[t._v("Distance sensor:  Lidar-Lite V3")]),t._v(" "),_("li",[t._v("GPS:              Here+ RTK GPS")]),t._v(" "),_("li",[t._v("Telemetry:        3DR Telemetry")]),t._v(" "),_("li",[t._v("Battery:          Roxxy LiPo - 4S, 4000mAh")])]),t._v(" "),_("p",[t._v("In addition we use a FrSky X4R-SB 3/16ch 2.4Ghz receiver and a FrSky Taranis controller.\nYou will also need zip ties, double sided tape, a soldering iron and a 3D printer in case you use the same Blades, for this build.\nThe GPS mast was reused from an Intel Aero.")]),t._v(" "),_("p",[_("img",{attrs:{src:r(906),alt:"F450 setup - open"}})]),t._v(" "),_("p",[t._v("The "),_("em",[t._v("Pixhawk 3 Pro")]),t._v(" can be attached using the double sided tape because the IMU inside is already dampened.")]),t._v(" "),_("p",[t._v("In this setup the autopilot is rotated by 180 degrees so that it's easier to access the SD card.\nBut if you rotate the base plate by 180 degrees instead, the flight controller board can be mounted facing forward.\nEither way works, just make sure to set the board rotation correctly in "),_("em",[t._v("QGroundControl")]),t._v(" afterwards.")]),t._v(" "),_("h2",{attrs:{id:"wiring-and-connections"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#wiring-and-connections"}},[t._v("#")]),t._v(" Wiring and Connections")]),t._v(" "),_("p",[t._v("General pinout for the Pixhawk 3 Pro can be found "),_("a",{attrs:{href:"https://drotek.gitbook.io/pixhawk-3-pro/hardware/inputs-outputs",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),_("OutboundLink")],1),t._v(".")]),t._v(" "),_("h3",{attrs:{id:"_3dr-telemetry"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3dr-telemetry"}},[t._v("#")]),t._v(" 3DR Telemetry")]),t._v(" "),_("p",[t._v("The 3DR Telemetry does not come with a JST GH connector which the "),_("em",[t._v("Pixhawk 3 Pro")]),t._v(" uses.\nThe pinout remains the same and just the plug needs to be changed. Use the Telem 1 port on the "),_("em",[t._v("Pixhawk 3 Pro")]),t._v(".")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("pin")]),t._v(" "),_("th",[t._v("Pixhawk 3 Pro Telem 1")]),t._v(" "),_("th",[t._v("3DR Telemetry")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("VCC")]),t._v(" "),_("td",[t._v("VCC")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("TX")]),t._v(" "),_("td",[t._v("RX")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("RX")]),t._v(" "),_("td",[t._v("TX")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("CTS")]),t._v(" "),_("td",[t._v("CTS")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("RTS")]),t._v(" "),_("td",[t._v("RTS")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("GND")]),t._v(" "),_("td",[t._v("GND")])])])]),t._v(" "),_("h3",{attrs:{id:"lidar-lite-v3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#lidar-lite-v3"}},[t._v("#")]),t._v(" Lidar-Lite V3")]),t._v(" "),_("p",[t._v("The pinout for the "),_("em",[t._v("Lidar Lite V3")]),t._v(" and the "),_("em",[t._v("Pixhawk 3 Pro")]),t._v(" I2C 1 port is as follows.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("pin")]),t._v(" "),_("th",[t._v("Pixhawk 3 Pro I2C 1")]),t._v(" "),_("th",[t._v("Lidar Lite V3")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("VCC")]),t._v(" "),_("td",[t._v("VCC")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("SCL")]),t._v(" "),_("td",[t._v("- (Power enable)")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("SDA")]),t._v(" "),_("td",[t._v("- (Mode control)")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("GND")]),t._v(" "),_("td",[t._v("SCL")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("SDA")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("GND")])])])]),t._v(" "),_("h3",{attrs:{id:"here-rtk-gps"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#here-rtk-gps"}},[t._v("#")]),t._v(" Here+ RTK GPS")]),t._v(" "),_("p",[t._v("The Here+ GPS comes with an 8 pin connector suited for the Pixhawk 2.\nIn order to use it with the "),_("em",[t._v("Pixhawk 3 Pro")]),t._v(" (or a Pixracer), a 6 pin connector has to be used and pin 6 and 7 are not needed (see below).\nThe additional pins are for the safety button and can be attached as well if needed.\nMore information on the pinout can be found in "),_("a",{attrs:{href:"http://www.hex.aero/wp-content/uploads/2016/07/DRS_Pixhawk-2-17th-march-2016.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("this document"),_("OutboundLink")],1),t._v(", page 17.")]),t._v(" "),_("p",[_("img",{attrs:{src:r(907),alt:"Setup GPS"}})]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("pin")]),t._v(" "),_("th",[t._v("Here+ GPS")]),t._v(" "),_("th",[t._v("pin")]),t._v(" "),_("th",[t._v("Pixhawk 3 Pro GPS")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("VCC_5V")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("VCC")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("GPS_RX")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("GPS_TX")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("GPS_TX")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("GPS_RX")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("SCL")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("SCL")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("SDA")]),t._v(" "),_("td",[t._v("5")]),t._v(" "),_("td",[t._v("SDA")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("BUTTON")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("7")]),t._v(" "),_("td",[t._v("BUTTON_LED")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("8")]),t._v(" "),_("td",[t._v("GND")]),t._v(" "),_("td",[t._v("6")]),t._v(" "),_("td",[t._v("GND")])])])]),t._v(" "),_("h2",{attrs:{id:"configuration"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),_("p",[t._v("General documentation on how to setup your quad in "),_("em",[t._v("QGroundControl")]),t._v(" can be found in "),_("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Basic Configuration")]),t._v(". Specific setup instructions are provided below.")],1),t._v(" "),_("h3",{attrs:{id:"airframe"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#airframe"}},[t._v("#")]),t._v(" Airframe")]),t._v(" "),_("p",[t._v("Select the airframe "),_("strong",[t._v("DJI Flame Wheel 450")]),t._v(" in "),_("strong",[t._v("QGC > Airframe > Quadrotor x")]),t._v(".")]),t._v(" "),_("p",[_("img",{attrs:{src:r(908),alt:"Select airframe QGC"}})]),t._v(" "),_("h3",{attrs:{id:"rtk-gps"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps"}},[t._v("#")]),t._v(" RTK GPS")]),t._v(" "),_("p",[t._v("RTK GPS is plug and play. For more instructions see "),_("RouterLink",{attrs:{to:"/en/advanced_features/rtk-gps.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),_("h3",{attrs:{id:"lidar-lite"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#lidar-lite"}},[t._v("#")]),t._v(" Lidar-Lite")]),t._v(" "),_("p",[t._v("To enable the "),_("em",[t._v("Lidar-Lite V3")]),t._v(" (connected via I2C), the parameter "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_EN_LL40LS"}},[t._v("SENS_EN_LL40LS")]),t._v(" has to be set to "),_("code",[t._v("I2C")]),t._v(".")],1),t._v(" "),_("p",[t._v("This can be done in "),_("em",[t._v("QGroundControl")]),t._v(" "),_("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Parameters.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parameters"),_("OutboundLink")],1),t._v(" as shown below:")]),t._v(" "),_("p",[_("img",{attrs:{src:r(909),alt:"Set SENS_EN_LL40LS parameter in QGC"}})]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("After setting the "),_("code",[t._v("SENS_EN_LL40LS")]),t._v(" you will need to restart the flight controller.")])]),t._v(" "),_("h3",{attrs:{id:"others"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[t._v("#")]),t._v(" Others")]),t._v(" "),_("p",[t._v("Set the following parameters as well:")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("EKF2_HGT_MODE=2")]),t._v(": this makes sure the Lidar-Lite is used as height source")]),t._v(" "),_("li",[_("code",[t._v("MAV_PROTO_VER=2")]),t._v(": use MAVLink protocol version 2")]),t._v(" "),_("li",[_("code",[t._v("CBRK_IO_SAFETY=22027")]),t._v(": disable the safety button")]),t._v(" "),_("li",[_("code",[t._v("EKF2_GPS_POS_X")]),t._v(", "),_("code",[t._v("EKF2_GPS_POS_Y")]),t._v(", "),_("code",[t._v("EKF2_GPS_POS_Z")]),t._v(": set the GPS device offset with respect to the board (NED coordinates).")])]),t._v(" "),_("h2",{attrs:{id:"video"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[t._v("#")]),t._v(" Video")]),t._v(" "),_("p"),_("div",{staticClass:"embed-responsive embed-responsive-16by9"},[_("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/JovSwzoTepU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),_("p")])}),[],!1,null,null,null);e.default=a.exports},904:function(t,e,r){t.exports=r.p+"assets/img/f450_setup_full.c55a112c.jpg"},905:function(t,e,r){t.exports=r.p+"assets/img/f450_setup_back.cfc429a3.jpg"},906:function(t,e,r){t.exports=r.p+"assets/img/f450_setup_open.79491c6d.jpg"},907:function(t,e,r){t.exports=r.p+"assets/img/f450_setup_gps.784ad65a.jpg"},908:function(t,e,r){t.exports=r.p+"assets/img/f450_setup_airframe.c7f8091d.png"},909:function(t,e,r){t.exports=r.p+"assets/img/f450_qgc_setup_i2c.c33650f6.png"}}]);