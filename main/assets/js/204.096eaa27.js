(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{1649:function(t,e,r){t.exports=r.p+"assets/img/f450_setup_full.d154c418.jpg"},1650:function(t,e,r){t.exports=r.p+"assets/img/f450_setup_back.9a2e3fb5.jpg"},1651:function(t,e,r){t.exports=r.p+"assets/img/f450_setup_open.92083c97.jpg"},1652:function(t,e,r){t.exports=r.p+"assets/img/f450_setup_gps.12c90443.jpg"},1653:function(t,e,r){t.exports=r.p+"assets/img/f450_qgc_setup_i2c.94801221.png"},3569:function(t,e,r){"use strict";r.r(e);var a=r(19),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"带距离传感器和rtk全球定位系统的大疆f450-pixhawk-3-pro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带距离传感器和rtk全球定位系统的大疆f450-pixhawk-3-pro"}},[t._v("#")]),t._v(" 带距离传感器和RTK全球定位系统的大疆F450(Pixhawk 3 Pro)")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("DJI"),a("sup",[t._v("®")]),t._v(" Flame Wheel F450")]),t._v(" Quadcopter is designed for amateur aerial photography, first person view applications, and general flying entertainment. This topic provides full build and configuration instructions for using the frame with the Pixhawk 3 Pro flight controller. Additionally this build includes an RTK GPS and a distance sensor for precision positioning.")]),t._v(" "),a("p",[t._v("Key information:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Frame:")]),t._v(" DJI Flame Wheel 450")]),t._v(" "),a("li",[a("strong",[t._v("Flight controller:")]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk3_pro.html"}},[t._v("Pixhawk 3 Pro")])],1),t._v(" "),a("li",[a("strong",[t._v("Positioning:")]),t._v(" RTK GPS")])]),t._v(" "),a("p",[a("img",{attrs:{src:r(1649),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:r(1650),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"配件列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配件列表"}},[t._v("#")]),t._v(" 配件列表")]),t._v(" "),a("ul",[a("li",[t._v("Autopilot:        "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk3_pro.html"}},[t._v("Pixhawk 3 Pro")])],1),t._v(" "),a("li",[t._v("Frame:            "),a("a",{attrs:{href:"http://www.dji.com/flame-wheel-arf",target:"_blank",rel:"noopener noreferrer"}},[t._v("DJI Flamewheel 450"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Motors:           3DR Iris Plus 950kv rebranded T-Motors MN2213")]),t._v(" "),a("li",[t._v("ESCs:             Hobbywing XRotor 35A Micro 3-6S BLHeli")]),t._v(" "),a("li",[t._v('Blades:           Graupner 10"x5" (You need to print '),a("a",{attrs:{href:"https://drive.google.com/file/d/0B2piootk_fIKMWhIVzVPWEFGLU0/view",target:"_blank",rel:"noopener noreferrer"}},[t._v("these adapters"),a("OutboundLink")],1),t._v(" to be M6 compatible) ")]),t._v(" "),a("li",[t._v("Distance sensor:  Lidar-Lite V3")]),t._v(" "),a("li",[t._v("GPS:              Here+ RTK GPS")]),t._v(" "),a("li",[t._v("Telemetry:        "),a("RouterLink",{attrs:{to:"/zh/telemetry/sik_radio.html"}},[t._v("3DR Telemetry")])],1),t._v(" "),a("li",[t._v("Battery:          Roxxy LiPo - 4S, 4000mAh")])]),t._v(" "),a("p",[t._v("In addition we use a FrSky X4R-SB 3/16ch 2.4Ghz receiver and a FrSky Taranis controller. You will also need zip ties, double sided tape, a soldering iron and a 3D printer in case you use the same Blades, for this build. The GPS mast was reused from an Intel Aero.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1651),alt:"F450 setup - open"}})]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("Pixhawk 3 Pro")]),t._v(" can be attached using the double sided tape because the IMU inside is already dampened.")]),t._v(" "),a("p",[t._v("In this setup the autopilot is rotated by 180 degrees so that it's easier to access the SD card. But if you rotate the base plate by 180 degrees instead, the flight controller board can be mounted facing forward. Either way works, just make sure to set the board rotation correctly in "),a("em",[t._v("QGroundControl")]),t._v(" afterwards.")]),t._v(" "),a("h2",{attrs:{id:"接线和连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接线和连接"}},[t._v("#")]),t._v(" 接线和连接")]),t._v(" "),a("p",[t._v("General pinout for the Pixhawk 3 Pro can be found "),a("a",{attrs:{href:"https://drotek.gitbook.io/pixhawk-3-pro/hardware/inputs-outputs",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"telemetry-radio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radio"}},[t._v("#")]),t._v(" Telemetry Radio")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The 3DR Telemetry radio used here is no longer available. Comparable alternatives can be found in "),a("RouterLink",{attrs:{to:"/zh/telemetry/sik_radio.html"}},[t._v("Telemetry Radios > SiK Radio")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("The 3DR Telemetry radio does not come with a JST GH connector which the "),a("em",[t._v("Pixhawk 3 Pro")]),t._v(" uses. The pinout remains the same and just the plug needs to be changed. Use the "),a("code",[t._v("TELEM 1")]),t._v(" port on the "),a("em",[t._v("Pixhawk 3 Pro")]),t._v(".")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("引脚")]),t._v(" "),a("th",[t._v("Pixhawk 3 Pro Telem 1")]),t._v(" "),a("th",[t._v("3DR Telemetry")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("VCC")]),t._v(" "),a("td",[t._v("VCC")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("TX")]),t._v(" "),a("td",[t._v("RX")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("RX")]),t._v(" "),a("td",[t._v("TX")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("CTS")]),t._v(" "),a("td",[t._v("CTS")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("RTS:")]),t._v(" "),a("td",[t._v("RTS:")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("h3",{attrs:{id:"lidar-lite-v3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lidar-lite-v3"}},[t._v("#")]),t._v(" Lidar-Lite V3")]),t._v(" "),a("p",[t._v("The pinout for the "),a("RouterLink",{attrs:{to:"/zh/sensor/lidar_lite.html"}},[t._v("Lidar Lite V3")]),t._v(" and the "),a("em",[t._v("Pixhawk 3 Pro")]),t._v(" I2C 1 port is as follows.")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("引脚")]),t._v(" "),a("th",[t._v("Pixhawk 3 Pro I2C 1")]),t._v(" "),a("th",[t._v("Lidar Lite V3")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("VCC")]),t._v(" "),a("td",[t._v("VCC")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("SCL")]),t._v(" "),a("td",[t._v("- (Power enable)")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("SDA")]),t._v(" "),a("td",[t._v("- (Mode control)")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("SCL")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("SDA")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("h3",{attrs:{id:"here-rtk-gps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#here-rtk-gps"}},[t._v("#")]),t._v(" Here+ RTK GPS")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("This RTK GPS has been discontinued. Alternatives can be found "),a("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html"}},[t._v("here")])],1)]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("Here+ RTK GPS")]),t._v(" comes with an 8 pin connector suited for the Pixhawk 2. In order to use it with the "),a("em",[t._v("Pixhawk 3 Pro")]),t._v(" (or a Pixracer), a 6 pin connector has to be used and pin 6 and 7 are not needed (see below). The additional pins are for the safety button and can be attached as well if needed.")],1),t._v(" "),a("p",[t._v("More information on the pinout can be found in "),a("a",{attrs:{href:"http://www.hex.aero/wp-content/uploads/2016/07/DRS_Pixhawk-2-17th-march-2016.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("this document"),a("OutboundLink")],1),t._v(", page 17.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1652),alt:"Setup GPS"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("引脚")]),t._v(" "),a("th",[t._v("Here+ GPS")]),t._v(" "),a("th",[t._v("引脚")]),t._v(" "),a("th",[t._v("Pixhawk 3 Pro GPS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("VCC_5V")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("VCC")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("GPS_RX")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("GPS_TX")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("GPS_TX")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("GPS_RX")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("SCL")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("SCL")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("SDA")]),t._v(" "),a("td",[t._v("5")]),t._v(" "),a("td",[t._v("SDA")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("BUTTON")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("7")]),t._v(" "),a("td",[t._v("BUTTON_LED")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("8")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("6")]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("h2",{attrs:{id:"px4-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),a("p",[t._v("General documentation on how to setup your quad in "),a("em",[t._v("QGroundControl")]),t._v(" can be found in "),a("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("Basic Configuration")]),t._v(". Specific setup instructions are provided below.")],1),t._v(" "),a("h3",{attrs:{id:"机架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机架"}},[t._v("#")]),t._v(" 机架")]),t._v(" "),a("p",[t._v("In the "),a("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("Airframe")]),t._v(" configuration, select the "),a("em",[t._v("Generic Quadcopter")]),t._v(" airframe ("),a("strong",[t._v("Quadrotor x > Generic Quadcopter")]),t._v(").")],1),t._v(" "),a("p",[a("img",{attrs:{src:r(430),alt:"QGroundControl - Select Generic Quadcopter"}})]),t._v(" "),a("h3",{attrs:{id:"actuators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actuators"}},[t._v("#")]),t._v(" Actuators")]),t._v(" "),a("p",[t._v("In the "),a("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[t._v("Actuators")]),t._v(" configuration in "),a("em",[t._v("QGroundControl")])],1),t._v(" "),a("ul",[a("li",[t._v("Update the vehicle geometry to match the Flamewheel 450")]),t._v(" "),a("li",[t._v("Assign actuators functions to outputs as wired.")]),t._v(" "),a("li",[t._v("Test the configuration using the sliders.")])]),t._v(" "),a("h3",{attrs:{id:"rtk-gps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps"}},[t._v("#")]),t._v(" RTK GPS")]),t._v(" "),a("p",[t._v("RTK GPS is plug and play. For more instructions see "),a("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"lidar-lite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lidar-lite"}},[t._v("#")]),t._v(" Lidar-Lite")]),t._v(" "),a("p",[t._v("To enable the "),a("em",[t._v("Lidar-Lite V3")]),t._v(" (connected via I2C), the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_LL40LS"}},[t._v("SENS_EN_LL40LS")]),t._v(" has to be set to "),a("code",[t._v("I2C")]),t._v(".")],1),t._v(" "),a("p",[t._v("This can be done in "),a("em",[t._v("QGroundControl")]),t._v(" (see "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("Finding/Updating Parameters")]),t._v(") as shown below:")],1),t._v(" "),a("p",[a("img",{attrs:{src:r(1653),alt:"Set SENS_EN_LL40LS parameter in QGC"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("After setting the "),a("code",[t._v("SENS_EN_LL40LS")]),t._v(" you will need to restart the flight controller.")])]),t._v(" "),a("h3",{attrs:{id:"others"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[t._v("#")]),t._v(" Others")]),t._v(" "),a("p",[t._v("Set the following parameters as well:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("MAV_PROTO_VER=2")]),t._v(": use MAVLink protocol version 2")]),t._v(" "),a("li",[a("code",[t._v("CBRK_IO_SAFETY=22027")]),t._v(": disable the safety button")]),t._v(" "),a("li",[a("code",[t._v("EKF2_GPS_POS_X")]),t._v(", "),a("code",[t._v("EKF2_GPS_POS_Y")]),t._v(", "),a("code",[t._v("EKF2_GPS_POS_Z")]),t._v(": set the GPS device offset with respect to the board (NED coordinates).")])]),t._v(" "),a("h3",{attrs:{id:"tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning"}},[t._v("#")]),t._v(" Tuning")]),t._v(" "),a("p",[t._v("Airframe selection sets "),a("em",[t._v("default")]),t._v(" autopilot parameters for the frame. These may be good enough to fly with, but you should tune each frame build.")]),t._v(" "),a("p",[t._v("For instructions on how, start from "),a("RouterLink",{attrs:{to:"/zh/config/autotune.html"}},[t._v("Autotune")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频"}},[t._v("#")]),t._v(" 视频")]),t._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/JovSwzoTepU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p")])}),[],!1,null,null,null);e.default=_.exports},430:function(t,e,r){t.exports=r.p+"assets/img/qgc_airframe_generic_quadx.e7c7ba62.png"}}]);