(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1332:function(t,e,r){t.exports=r.p+"assets/img/all_components.9b9f48d3.jpg"},1333:function(t,e,r){t.exports=r.p+"assets/img/f450_frame_components.54f51cce.jpg"},1334:function(t,e,r){t.exports=r.p+"assets/img/required_tools.5b43e47e.jpg"},1335:function(t,e,r){t.exports=r.p+"assets/img/1_attach_arms_bottom_plate.6d5a94db.jpg"},1336:function(t,e,r){t.exports=r.p+"assets/img/2_solder_esc.28d6d8a9.jpg"},1337:function(t,e,r){t.exports=r.p+"assets/img/3_solder_power_module.c642f262.jpg"},1338:function(t,e,r){t.exports=r.p+"assets/img/4_plug_in_motors.54a32df4.jpg"},1339:function(t,e,r){t.exports=r.p+"assets/img/5a_attach_motors_to_arms.36899020.jpg"},1340:function(t,e,r){t.exports=r.p+"assets/img/5b_attach_motors_to_arms.dab17f57.jpg"},1341:function(t,e,r){t.exports=r.p+"assets/img/6_add_top_board.6afe9e76.jpg"},1342:function(t,e,r){t.exports=r.p+"assets/img/7a_attach_cuav5nano.33d59e70.jpg"},1343:function(t,e,r){t.exports=r.p+"assets/img/7b_attach_cuav5nano.db89c165.jpg"},1344:function(t,e,r){t.exports=r.p+"assets/img/8_attach_frsky.9e908d46.jpg"},1345:function(t,e,r){t.exports=r.p+"assets/img/9a_telemtry_radio.13d1d455.jpg"},1346:function(t,e,r){t.exports=r.p+"assets/img/9b_telemtry_radio.3ea65cc2.jpg"},1347:function(t,e,r){t.exports=r.p+"assets/img/10_aluminium_standoffs.6478c53a.jpg"},1348:function(t,e,r){t.exports=r.p+"assets/img/12_fc_attach_periperhals.6d4da306.jpg"},1349:function(t,e,r){t.exports=r.p+"assets/img/qgc_select_airframe.4aadaa71.jpg"},2548:function(t,e,r){"use strict";r.r(e);var o=r(18),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"dji-flamewheel-450-cuav-v5-nano-build"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dji-flamewheel-450-cuav-v5-nano-build"}},[t._v("#")]),t._v(" DJI FlameWheel 450 + CUAV V5 nano Build")]),t._v(" "),o("p",[t._v("This topic provides full instructions for building the kit and configuring PX4 using "),o("em",[t._v("QGroundControl")]),t._v(".")]),t._v(" "),o("p",[t._v("Key information")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Frame:")]),t._v(" DJI F450")]),t._v(" "),o("li",[o("strong",[t._v("Flight controller:")]),t._v(" "),o("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_v5_nano.html"}},[t._v("CUAV V5 nano")])],1),t._v(" "),o("li",[o("strong",[t._v("Assembly time (approx.):")]),t._v(" 90 minutes (45 minutes for frame, 45 minutes autopilot installation/configuration)")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(425),alt:"Finished setup"}})]),t._v(" "),o("h2",{attrs:{id:"bill-of-materials"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bill-of-materials"}},[t._v("#")]),t._v(" Bill of materials")]),t._v(" "),o("p",[t._v("The components needed for this build are:")]),t._v(" "),o("ul",[o("li",[t._v("Flight controller: "),o("a",{attrs:{href:"https://store.cuav.net/index.php?id_product=98&id_product_attribute=0&rewrite=cuav-new-pixhack-v5-nano-small-flight-controller-for-ardupilot-px4-drone-parts-free-shipping-whole-sale-&controller=product&id_lang=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV V5 nano"),o("OutboundLink")],1),t._v(":\n"),o("ul",[o("li",[t._v("GPS: "),o("a",{attrs:{href:"https://store.cuav.net/index.php?id_product=97&id_product_attribute=0&rewrite=cuav-new-ublox-neo-m8n-gps-module-with-shell-stand-holder-for-flight-controller-gps-compass-for-pixhack-v5-plus-rc-parts-px4&controller=product&id_lang=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV NEO V2 GPS"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Power Module")])])]),t._v(" "),o("li",[t._v("Frame: "),o("a",{attrs:{href:"https://www.amazon.com/Flame-Wheel-Basic-Quadcopter-Drone/dp/B00HNMVQHY",target:"_blank",rel:"noopener noreferrer"}},[t._v("DJI F450"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Propellers: "),o("a",{attrs:{href:"https://www.masterairscrew.com/collections/all-products/products/dji-phantom-built-in-nut-upgrade-propellers-in-white-mr-9-4x5-prop-set-x4-phantom",target:"_blank",rel:"noopener noreferrer"}},[t._v("DJI Phantom Built-in Nut Upgrade Propellers 9.4x5"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Battery: "),o("a",{attrs:{href:"https://hobbyking.com/en_us/turnigy-high-capacity-5200mah-3s-12c-multi-rotor-lipo-pack-w-xt60.html?___store=en_us",target:"_blank",rel:"noopener noreferrer"}},[t._v("Turnigy High Capacity 5200mAh 3S 12C Lipo Pack w/XT60"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Telemetry: "),o("a",{attrs:{href:"https://shop.holybro.com/transceiver-telemetry-radio-v3_p1103.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holibro Transceiver Telemetry Radio V3"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("RC Receiver: "),o("a",{attrs:{href:"https://www.banggood.com/FrSky-D4R-II-2_4G-4CH-ACCST-Telemetry-Receiver-for-RC-Drone-FPV-Racing-p-929069.html?cur_warehouse=GWTR",target:"_blank",rel:"noopener noreferrer"}},[t._v("FrSky D4R-II 2.4G 4CH ACCST Telemetry Receiver"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Motors: "),o("a",{attrs:{href:"https://www.amazon.com/DJI-E305-2312E-Motor-800kv/dp/B01M7TW3XN",target:"_blank",rel:"noopener noreferrer"}},[t._v("DJI E305 2312E Motor (800kv,CW)"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("ESC: "),o("a",{attrs:{href:"https://www.amazon.com/DJI-E305-2312E-Motor-800kv/dp/B01M7TW3XN",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbywing XRotor 20A APAC Brushless ESC 3-4S For RC Multicopters"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("In addition, we used an FrSky Taranis controller. You will also need zip ties, double-sided tape, a soldering iron.")]),t._v(" "),o("p",[t._v("The image below shows both frame and electronic components.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1332),alt:"All components used in this build"}})]),t._v(" "),o("h2",{attrs:{id:"硬件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#硬件"}},[t._v("#")]),t._v(" 硬件")]),t._v(" "),o("h3",{attrs:{id:"框架"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#框架"}},[t._v("#")]),t._v(" 框架")]),t._v(" "),o("p",[t._v("This section lists all hardware for the frame.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("参数描述")]),t._v(" "),o("th",[t._v("Quantity")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("DJI F450 Bottom plate")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("DJI F450 Top plate")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("DJI F450 legs with landing gear")]),t._v(" "),o("td",[t._v("4")])]),t._v(" "),o("tr",[o("td",[t._v("M3*8 screws")]),t._v(" "),o("td",[t._v("18")])]),t._v(" "),o("tr",[o("td",[t._v("M2 5*6 screws")]),t._v(" "),o("td",[t._v("24")])]),t._v(" "),o("tr",[o("td",[t._v("Velcro Battery Strap")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("DJI Phantom Built-in Nut Upgrade Propellers 9.4x5")]),t._v(" "),o("td",[t._v("1")])])])]),t._v(" "),o("p",[o("img",{attrs:{src:r(1333),alt:"F450 frame components"}})]),t._v(" "),o("h3",{attrs:{id:"cuav-v5-nano-package"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cuav-v5-nano-package"}},[t._v("#")]),t._v(" CUAV v5 nano Package")]),t._v(" "),o("p",[t._v("This section lists the components in the CUAV v5 nano package.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("参数描述")]),t._v(" "),o("th",[t._v("Quantity (Default Package)")]),t._v(" "),o("th",[t._v("Quantity (+GPS Package)")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("V5 nano flight controller")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("DuPont Cable")]),t._v(" "),o("td",[t._v("2")]),t._v(" "),o("td",[t._v("2")])]),t._v(" "),o("tr",[o("td",[t._v("I2C/CAN Cable")]),t._v(" "),o("td",[t._v("2")]),t._v(" "),o("td",[t._v("2")])]),t._v(" "),o("tr",[o("td",[t._v("ADC 6.6 Cable")]),t._v(" "),o("td",[t._v("2")]),t._v(" "),o("td",[t._v("2")])]),t._v(" "),o("tr",[o("td",[t._v("SBUS Signal Cable")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("IRSSI Cable")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("DSM Signal Cable")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("ADC 3.3 Cable")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Debug Cable")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Safety Switch Cable")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Voltage & Current Cable")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("PW-Link Module Cable")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Power Module")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("SanDisk 16GB Memory Card")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("12C Expansion Board")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("TTL Plate")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("NEO GPS")]),t._v(" "),o("td",[t._v("-")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("GPS Bracket")]),t._v(" "),o("td",[t._v("-")]),t._v(" "),o("td",[t._v("1")])])])]),t._v(" "),o("h3",{attrs:{id:"electronics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#electronics"}},[t._v("#")]),t._v(" Electronics")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("参数描述")]),t._v(" "),o("th",[t._v("Quantity")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("CUAV V5 nano")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("CUAV NEO V2 GPS")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Holibro Telemetry")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("FrSky D4R-II 2.4G 4CH ACCST Telemetry Receiver")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("DJI E305 2312E Motor (800kv,CW)")]),t._v(" "),o("td",[t._v("4")])]),t._v(" "),o("tr",[o("td",[t._v("Hobbywing XRotor 20A APAC Brushless ESC")]),t._v(" "),o("td",[t._v("4")])]),t._v(" "),o("tr",[o("td",[t._v("Power Module(Included in the CUAV V5 nano package)")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Turnigy High Capacity 5200mAh 3S 12C Lipo Pack w/XT60")]),t._v(" "),o("td",[t._v("1")])])])]),t._v(" "),o("h3",{attrs:{id:"tools-needed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tools-needed"}},[t._v("#")]),t._v(" Tools needed")]),t._v(" "),o("p",[t._v("The following tools are used in this assembly:")]),t._v(" "),o("ul",[o("li",[t._v("2.0mm Hex screwdriver")]),t._v(" "),o("li",[t._v("3mm Phillips screwdriver")]),t._v(" "),o("li",[t._v("Wire cutters")]),t._v(" "),o("li",[t._v("Precision tweezers")]),t._v(" "),o("li",[t._v("Soldering iron")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(1334),alt:"Required tools"}})]),t._v(" "),o("h2",{attrs:{id:"组装"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#组装"}},[t._v("#")]),t._v(" 组装")]),t._v(" "),o("p",[t._v("Estimated time to assemble is approximately 90 minutes (about 45 minutes for the frame and 45 minutes installing the autopilot and configuring the airframe.")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Attach the 4 arms to the bottom plate using the provided screws.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1335),alt:"Arms to bottom plate"}})])]),t._v(" "),o("li",[o("p",[t._v("Solder ESC (Electronic Speed Controller) to the board, positive (red) and negative (black).")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1336),alt:"Solder ESCs"}})])]),t._v(" "),o("li",[o("p",[t._v("Solder the Power Module, positive (red) and negative (black).")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1337),alt:"Solder power module"}})])]),t._v(" "),o("li",[o("p",[t._v("Plug in the motors to the ESCs according to their positions.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1338),alt:"Plug in motors"}})])]),t._v(" "),o("li",[o("p",[t._v("Attach the motors to the corresponding arms.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1339),alt:"Attach motors to arms (white)"}}),t._v(" "),o("img",{attrs:{src:r(1340),alt:"Attach motors to arms (red)"}})])]),t._v(" "),o("li",[o("p",[t._v("Add the top board (screw into the top of the legs).")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1341),alt:"Add top board"}})])]),t._v(" "),o("li",[o("p",[t._v("Add damping foam to the "),o("em",[t._v("CUAV V5 nano")]),t._v(" flight controller.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1342),alt:"Damping foam"}}),t._v(" "),o("img",{attrs:{src:r(1343),alt:"Damping foam"}})])]),t._v(" "),o("li",[o("p",[t._v("Attach the FrSky receiver to the bottom board with double-sided tape.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1344),alt:"Attach FrSky receiver with double-sided tape"}})])]),t._v(" "),o("li",[o("p",[t._v("Attach the telemetry module to the vehicle’s bottom board using double-sided tape.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1345),alt:"Attach telemetry radio"}}),t._v(" "),o("img",{attrs:{src:r(1346),alt:"Attach telemetry radio"}})])]),t._v(" "),o("li",[o("p",[t._v("Put the aluminium standoffs on the button plate and attach GPS.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1347),alt:"Aluminium standoffs"}})])]),t._v(" "),o("li",[o("p",[t._v("Plug in Telemetry ("),o("code",[t._v("TELEM1")]),t._v("), GPS module ("),o("code",[t._v("GPS/SAFETY")]),t._v("), RC receiver ("),o("code",[t._v("RC")]),t._v("), all 4 ESC’s ("),o("code",[t._v("M1-M4")]),t._v("), and the power module ("),o("code",[t._v("Power1")]),t._v(") into the flight controller. "),o("img",{attrs:{src:r(1348),alt:"Attach peripherals to flight controller"}})])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("The motor order is defined in the "),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#quadrotor-x"}},[t._v("Airframe Reference > Quadrotor x")])],1)]),t._v(" "),o("p",[t._v("设置完成！ The final build is shown below:")]),t._v(" "),o("p",[o("img",{attrs:{src:r(425),alt:"Finished Setup"}})]),t._v(" "),o("p",[o("span",{attrs:{id:"configure"}})]),t._v(" "),o("h2",{attrs:{id:"vehicle-configuration-calibration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-configuration-calibration"}},[t._v("#")]),t._v(" Vehicle Configuration/Calibration")]),t._v(" "),o("p",[o("em",[t._v("QGroundControl")]),t._v(" is used to install the PX4 autopilot and configure/tune it for the frame. "),o("a",{attrs:{href:"http://qgroundcontrol.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download and install"),o("OutboundLink")],1),t._v(" "),o("em",[t._v("QGroundControl")]),t._v(" for your platform.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),o("p",[t._v("Full instructions for installing and configuring PX4 can be found in "),o("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("Basic Configuration")]),t._v(".")],1)]),t._v(" "),o("p",[t._v("First update the firmware and airframe:")]),t._v(" "),o("ul",[o("li",[o("p",[o("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("固件")])],1)]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("Airframe")]),t._v(" :::note You will need to select the "),o("em",[t._v("Generic Quadrotor X")]),t._v(" airframe ("),o("strong",[t._v("Quadrotor x > Generic Quadrotor X")]),t._v(").")],1),t._v(" "),o("p",[o("img",{attrs:{src:r(1349),alt:"QGroundControl - Select Generic Quadrotor X airframe"}}),t._v("\n:::")])])]),t._v(" "),o("p",[t._v("Then perform the mandatory setup/calibration:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[t._v("传感器方向")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/compass.html"}},[t._v("罗盘")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/accelerometer.html"}},[t._v("加速度计 Accelerometer")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/level_horizon_calibration.html"}},[t._v("水平平面校准")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[t._v("无线电系统设置")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("Flight Modes")])],1)]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("For this build we set up modes "),o("em",[t._v("Stabilized")]),t._v(", "),o("em",[t._v("Altitude")]),t._v(" and "),o("em",[t._v("Position")]),t._v(" on a three-way switch on the receiver (mapped to a single channel - 5). This is the recommended minimal set of modes for beginners.")])]),t._v(" "),o("p",[t._v("Ideally you should also do:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/esc_calibration.html"}},[t._v("电调（ESC）校准")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/battery.html"}},[t._v("电池")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[t._v("安全")])],1)]),t._v(" "),o("h2",{attrs:{id:"调试"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[t._v("#")]),t._v(" 调试")]),t._v(" "),o("p",[t._v("Firmware installation sets "),o("em",[t._v("default")]),t._v(" autopilot parameters that have been configured for the selected frame. These are good enough to fly with, but it is a good idea to tune the parameters for a specific frame build.")]),t._v(" "),o("h2",{attrs:{id:"视频"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#视频"}},[t._v("#")]),t._v(" 视频")]),t._v(" "),o("p"),o("div",{staticClass:"embed-responsive embed-responsive-16by9"},[o("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/b0bKNdDqVHw",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),o("p"),t._v(" "),o("h2",{attrs:{id:"acknowledgments"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgments"}},[t._v("#")]),t._v(" Acknowledgments")]),t._v(" "),o("p",[t._v("This build log was provided by the Dronecode Test Flight Team.")])])}),[],!1,null,null,null);e.default=a.exports},425:function(t,e,r){t.exports=r.p+"assets/img/f450_cuav5_nano_complete.08e77132.jpg"}}]);