(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{1140:function(t,e,r){t.exports=r.p+"assets/img/frame.4263c36f.jpg"},1141:function(t,e,r){t.exports=r.p+"assets/img/parts_list.0ae451b8.jpg"},1142:function(t,e,r){t.exports=r.p+"assets/img/frame_only.2e65d724.jpg"},1143:function(t,e,r){t.exports=r.p+"assets/img/fc_closeup.f2a153dc.jpg"},1144:function(t,e,r){t.exports=r.p+"assets/img/esc_settings.135efc46.png"},1145:function(t,e,r){t.exports=r.p+"assets/img/motors_configuration.40297255.png"},1146:function(t,e,r){t.exports=r.p+"assets/img/gazebo.64d85086.png"},2078:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"omnicopter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#omnicopter"}},[t._v("#")]),t._v(" Omnicopter")]),t._v(" "),o("p",[t._v("An Omnicopter is a multicopter that can provide thrust in all directions (6 degrees of freedom).\nThis allows it to move in any direction without having to tilt, and it can hover at an arbitrary tilt angle.\nAll of this is achieved by arranging the motor positions and thrust axis in specific ways:")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1140),alt:"Omnicopter"}})]),t._v(" "),o("p",[t._v("This build follows the original design from "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=sIi80LMLJSY",target:"_blank",rel:"noopener noreferrer"}},[t._v("Brescianini, Dario, and Raffaello D'Andrea"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"bill-of-materials"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bill-of-materials"}},[t._v("#")]),t._v(" Bill of Materials")]),t._v(" "),o("p",[t._v("The components needed for this build are:")]),t._v(" "),o("ul",[o("li",[t._v("Electronics:\n"),o("ul",[o("li",[t._v("Flight controller: "),o("RouterLink",{attrs:{to:"/en/flight_controller/kakuteh7.html"}},[t._v("Holybro KakuteH7")])],1),t._v(" "),o("li",[t._v("Coupled with 2x "),o("a",{attrs:{href:"https://holybro.com/products/tekko32-f4-4in1-50a-esc",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tekko32 F4 4in1 ESCs"),o("OutboundLink")],1)])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("You can select your own flight controller of choice, it just needs to support 8 DShot outputs.")])]),t._v(" "),o("ul",[o("li",[t._v("GPS: "),o("a",{attrs:{href:"https://www.gnss.store/gnss-gps-modules/105-ublox-zed-f9p-rtk-gnss-receiver-board-with-sma-base-or-rover.html?search_query=ZED-F9P&results=11",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZED-F9P"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://www.gnss.store/rf-gps-antennas/28-high-performance-multi-band-gnss-active-quad-helix-antenna-for-rtk.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GPS helix antenna"),o("OutboundLink")],1)])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Any other GPS may work as well, however a helix antenna is expected to perform better for inverted flights.")])]),t._v(" "),o("ul",[o("li",[t._v("Any RC receiver")]),t._v(" "),o("li",[t._v("An external Magnetometer. We used the "),o("a",{attrs:{href:"https://store-drotek.com/893-professional-grade-magnetometer-rm3100.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RM-3100"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("li",[t._v("Telemetry link, e.g. "),o("RouterLink",{attrs:{to:"/en/telemetry/telemetry_wifi.html"}},[t._v("WiFi")])],1)])]),t._v(" "),o("li",[t._v("Propulsion:\n"),o("ul",[o("li",[t._v("Motors: 8x "),o("a",{attrs:{href:"https://www.getfpv.com/brotherhobby-lpd-2306-5-2000kv-2450kv-2650kv-motor.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("BrotherHobby LPD 2306.5 2000KV/2450KV/2650KV"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("3D Propellers: 2x "),o("a",{attrs:{href:"https://www.getfpv.com/hqprop-3d-5x3-5x3-3-blade-propeller-set-of-4.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HQProp 3D 5X3.5X3 3-Blade Propeller (Set of 4)"),o("OutboundLink")],1),t._v(" or 2x "),o("a",{attrs:{href:"https://www.getfpv.com/gemfan-513d-durable-3-blade-propeller-set-of-4.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gemfan 513D 3-Blade 3D Propeller (Set of 4)"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Battery: we used a 6S 3300mAh LiPo. Make sure to check the dimensions so it fits the frame.")]),t._v(" "),o("li",[t._v("Battery strap")])])]),t._v(" "),o("li",[t._v("Frame:\n"),o("ul",[o("li",[t._v("Carbon square tube R 8mm X 7mm X 1000mm, e.g. "),o("a",{attrs:{href:"https://shop.swiss-composite.ch/pi/Halbfabrikate/Rohre/Vierkant-Rohre/CFK-Vierkantrohr-8x8-7x7mm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Carbon Rods R 3mm X 2mm X 1000mm, e.g. "),o("a",{attrs:{href:"https://shop.swiss-composite.ch/pi/Halbfabrikate/Rohre/CFK-Rohre-pultrudiert-pullwinding/Carbon-Microtubes-100cm-x-20-3mm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Required lengths:\n"),o("ul",[o("li",[t._v("square tube: 8 pieces with length of 248mm")]),t._v(" "),o("li",[t._v("rods: 12x328mm, 6x465mm")])])]),t._v(" "),o("li",[t._v("Screws:\n"),o("ul",[o("li",[t._v("Motors and standoffs: 40x M3x12mm")]),t._v(" "),o("li",[t._v("FC mount: 4x M3x35mm, 4x M3 nuts")])])]),t._v(" "),o("li",[t._v("Standoffs: 4x 40mm")])])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://cad.onshape.com/documents/eaff30985f1298dc6ce8ce13/w/2f662e604240c4082682e5e3/e/ad2b2245b73393cf369132f7",target:"_blank",rel:"noopener noreferrer"}},[t._v("3D model"),o("OutboundLink")],1)])]),t._v(" "),o("p",[o("img",{attrs:{src:r(1141),alt:"Parts List"}})]),t._v(" "),o("h2",{attrs:{id:"assembly"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#assembly"}},[t._v("#")]),t._v(" Assembly")]),t._v(" "),o("h3",{attrs:{id:"frame"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frame"}},[t._v("#")]),t._v(" Frame")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Print the 3D parts")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The orientation of the corner pieces matters.\nYou will notice if it's wrong when the angles of the rods are not correct.")])])]),t._v(" "),o("li",[o("p",[t._v("Cut the rods")])]),t._v(" "),o("li",[o("p",[t._v("Test that it all works by connecting the frame pieces together:")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1142),alt:"Frame"}})])]),t._v(" "),o("li",[o("p",[t._v("Place the motors as far out as possible, without the propellers touching the rods.")])])]),t._v(" "),o("h3",{attrs:{id:"electronics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#electronics"}},[t._v("#")]),t._v(" Electronics")]),t._v(" "),o("p",[t._v("Solder the peripherals to the flight controller. We used the following assignments:")]),t._v(" "),o("ul",[o("li",[t._v("ESCs: the 2 ESCs can be connected directly to the two connectors of the KakuteH7.\nTo avoid conflicts we removed the power pin (right-most pin) from one of the connectors.")]),t._v(" "),o("li",[t._v("Telemetry to UART1")]),t._v(" "),o("li",[t._v("GPS to UART4")]),t._v(" "),o("li",[t._v("RC to UART6\n"),o("img",{attrs:{src:r(1143),alt:"FC closeup"}})])]),t._v(" "),o("p",[t._v("Remarks:")]),t._v(" "),o("ul",[o("li",[t._v("Make sure the magnetometer is placed away from power.\nWe ended up placing it to the bottom of the center-piece with a 4cm padding styrofoam.")]),t._v(" "),o("li",[t._v("Put some tape on the barometer (without taping the opening!) to avoid any influence from light.")]),t._v(" "),o("li",[t._v("We did not glue the frame.\nIt is certainly advisible to do so after initial test flights, but it might work without.")])]),t._v(" "),o("h2",{attrs:{id:"software-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#software-configuration"}},[t._v("#")]),t._v(" Software Configuration")]),t._v(" "),o("h3",{attrs:{id:"esc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#esc"}},[t._v("#")]),t._v(" ESC")]),t._v(" "),o("p",[t._v("First, configure the ESCs to 3D mode (bidirectional).\nWe had issues with the stock ESC settings in 3D mode: when trying to switch direction, a motor sometimes did not start anymore until the ESC was rebooted.\nSo we had to change ESC settings.")]),t._v(" "),o("p",[t._v("To do so, you can use Betaflight on the flight controller and then use pass-through mode and the BL Heli suite (make sure there is an airframe with 8 motors configured in Betaflight).\nThese are the settings:")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1144),alt:"ESC settings"}})]),t._v(" "),o("p",[t._v("In particular:")]),t._v(" "),o("ul",[o("li",[t._v("set the Motor Direction to "),o("strong",[t._v("Bidirectional Soft")])]),t._v(" "),o("li",[t._v("increase the Rampup Power to "),o("strong",[t._v("100%")]),t._v(" (this is conservative and might reduce efficiency)")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Make sure the motors do not overheat with the changed settings.")])]),t._v(" "),o("h3",{attrs:{id:"px4"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4"}},[t._v("#")]),t._v(" PX4")]),t._v(" "),o("ul",[o("li",[t._v("Select a generic multicopter airframe")]),t._v(" "),o("li",[t._v("Use an "),o("RouterLink",{attrs:{to:"/en/advanced_config/prearm_arm_disarm.html#arming-button-switch"}},[t._v("arming switch")]),t._v(", do not use stick arming")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/config/actuators.html"}},[t._v("Select DShot")]),t._v(" as output protocol on all eight outputs")],1),t._v(" "),o("li",[t._v("Configure the motors according to this:\n"),o("img",{attrs:{src:r(1145),alt:"Motor Config"}}),t._v("\nWe used the following convention: the motors are facing the direction of where the axis points to.\nThe spinning direction matches the direction of positive thrust (moving the motor slider up).\nMake sure to use the right props, as there is a CCW and a CW version.")]),t._v(" "),o("li",[t._v("Parameters:\n"),o("ul",[o("li",[t._v("Change the desaturation logic for better attitude tracking: set "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CA_METHOD"}},[t._v("CA_METHOD")]),t._v(" to 0.")],1),t._v(" "),o("li",[t._v("Disable failure detection: set "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FD_FAIL_P"}},[t._v("FD_FAIL_P")]),t._v(" and "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FD_FAIL_R"}},[t._v("FD_FAIL_R")]),t._v(" to 0.")],1)])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/main/assets/airframes/multicopter/omnicopter/omnicopter.params",target:"_blank",rel:"noopener noreferrer"}},[t._v("This file"),o("OutboundLink")],1),t._v(" contains all the relevant parameters.")])]),t._v(" "),o("h2",{attrs:{id:"video"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[t._v("#")]),t._v(" Video")]),t._v(" "),o("p"),o("div",{staticClass:"embed-responsive embed-responsive-16by9"},[o("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/nsPkQYugfzs",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),o("p"),t._v(" "),o("h2",{attrs:{id:"simulation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#simulation"}},[t._v("#")]),t._v(" Simulation")]),t._v(" "),o("p",[t._v("There is an omnicopter simulation target in Gazebo Classic:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo-classic_omnicopter\n")])])]),o("p",[o("img",{attrs:{src:r(1146),alt:"Gazebo Sim"}})]),t._v(" "),o("h2",{attrs:{id:"remarks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),o("p",[t._v("Some general remarks:")]),t._v(" "),o("ul",[o("li",[t._v("The hover throttle is about 30%.")]),t._v(" "),o("li",[t._v("The flight time is around 4-5min. This could probably be improved a bit by using larger propellers.")])])])}),[],!1,null,null,null);e.default=a.exports}}]);