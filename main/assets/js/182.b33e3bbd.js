(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{1216:function(e,t,r){e.exports=r.p+"assets/img/frame.4263c36f.jpg"},1217:function(e,t,r){e.exports=r.p+"assets/img/parts_list.0ae451b8.jpg"},1218:function(e,t,r){e.exports=r.p+"assets/img/frame_only.2e65d724.jpg"},1219:function(e,t,r){e.exports=r.p+"assets/img/fc_closeup.f2a153dc.jpg"},1220:function(e,t,r){e.exports=r.p+"assets/img/esc_settings.135efc46.png"},1221:function(e,t,r){e.exports=r.p+"assets/img/motors_configuration.40297255.png"},1222:function(e,t,r){e.exports=r.p+"assets/img/gazebo.64d85086.png"},3395:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"omnicopter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#omnicopter"}},[e._v("#")]),e._v(" Omnicopter")]),e._v(" "),o("p",[e._v("An Omnicopter is a multicopter that can provide thrust in all directions (6 degrees of freedom). This allows it to move in any direction without having to tilt, and it can hover at an arbitrary tilt angle. All of this is achieved by arranging the motor positions and thrust axis in specific ways:")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1216),alt:"Omnicopter"}})]),e._v(" "),o("p",[e._v("This build follows the original design from "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=sIi80LMLJSY",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brescianini, Dario, and Raffaello D'Andrea"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"bill-of-materials"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bill-of-materials"}},[e._v("#")]),e._v(" Bill of Materials")]),e._v(" "),o("p",[e._v("The components needed for this build are:")]),e._v(" "),o("ul",[o("li",[e._v("Electronics:\n"),o("ul",[o("li",[e._v("Flight controller: "),o("RouterLink",{attrs:{to:"/zh/flight_controller/kakuteh7.html"}},[e._v("Holybro KakuteH7")])],1),e._v(" "),o("li",[e._v("Coupled with 2x "),o("a",{attrs:{href:"https://holybro.com/products/tekko32-f4-4in1-50a-esc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tekko32 F4 4in1 ESCs"),o("OutboundLink")],1),e._v(" :::note\nYou can select your own flight controller of choice, it just needs to support 8 DShot outputs.\n:::")]),e._v(" "),o("li",[e._v("GPS: "),o("a",{attrs:{href:"https://www.gnss.store/gnss-gps-modules/105-ublox-zed-f9p-rtk-gnss-receiver-board-with-sma-base-or-rover.html?search_query=ZED-F9P&results=11",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZED-F9P"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.gnss.store/rf-gps-antennas/28-high-performance-multi-band-gnss-active-quad-helix-antenna-for-rtk.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPS helix antenna"),o("OutboundLink")],1),e._v(" :::note\nAny other GPS may work as well, however a helix antenna is expected to perform better for inverted flights.\n:::")]),e._v(" "),o("li",[e._v("Any RC receiver")]),e._v(" "),o("li",[e._v("An external Magnetometer. We used the "),o("a",{attrs:{href:"https://store-drotek.com/893-professional-grade-magnetometer-rm3100.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("RM-3100"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Telemetry link, e.g. "),o("RouterLink",{attrs:{to:"/zh/telemetry/telemetry_wifi.html"}},[e._v("WiFi")])],1)])]),e._v(" "),o("li",[e._v("Propulsion:\n"),o("ul",[o("li",[e._v("Motors: 8x "),o("a",{attrs:{href:"https://www.getfpv.com/brotherhobby-lpd-2306-5-2000kv-2450kv-2650kv-motor.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("BrotherHobby LPD 2306.5 2000KV/2450KV/2650KV"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("3D Propellers: 2x "),o("a",{attrs:{href:"https://www.getfpv.com/hqprop-3d-5x3-5x3-3-blade-propeller-set-of-4.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HQProp 3D 5X3.5X3 3-Blade Propeller (Set of 4)"),o("OutboundLink")],1),e._v(" or 2x "),o("a",{attrs:{href:"https://www.getfpv.com/gemfan-513d-durable-3-blade-propeller-set-of-4.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gemfan 513D 3-Blade 3D Propeller (Set of 4)"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Battery: we used a 6S 3300mAh LiPo. Make sure to check the dimensions so it fits the frame.")]),e._v(" "),o("li",[e._v("Battery strap")])])]),e._v(" "),o("li",[e._v("Frame:\n"),o("ul",[o("li",[e._v("Carbon square tube R 8mm X 7mm X 1000mm, e.g. "),o("a",{attrs:{href:"https://shop.swiss-composite.ch/pi/Halbfabrikate/Rohre/Vierkant-Rohre/CFK-Vierkantrohr-8x8-7x7mm.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Carbon Rods R 3mm X 2mm X 1000mm, e.g. "),o("a",{attrs:{href:"https://shop.swiss-composite.ch/pi/Halbfabrikate/Rohre/CFK-Rohre-pultrudiert-pullwinding/Carbon-Microtubes-100cm-x-20-3mm.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Required lengths:\n"),o("ul",[o("li",[e._v("square tube: 8 pieces with length of 248mm")]),e._v(" "),o("li",[e._v("rods: 12x328mm, 6x465mm")])])]),e._v(" "),o("li",[e._v("Screws:\n"),o("ul",[o("li",[e._v("Motors and standoffs: 40x M3x12mm")]),e._v(" "),o("li",[e._v("FC mount: 4x M3x35mm, 4x M3 nuts")])])]),e._v(" "),o("li",[e._v("Standoffs: 4x 40mm")])])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://cad.onshape.com/documents/eaff30985f1298dc6ce8ce13/w/2f662e604240c4082682e5e3/e/ad2b2245b73393cf369132f7",target:"_blank",rel:"noopener noreferrer"}},[e._v("3D model"),o("OutboundLink")],1)])]),e._v(" "),o("p",[o("img",{attrs:{src:r(1217),alt:"Parts List"}})]),e._v(" "),o("h2",{attrs:{id:"assembly"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#assembly"}},[e._v("#")]),e._v(" Assembly")]),e._v(" "),o("h3",{attrs:{id:"frame"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frame"}},[e._v("#")]),e._v(" Frame")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Print the 3D parts :::note\nThe orientation of the corner pieces matters.\nYou will notice if it's wrong when the angles of the rods are not correct.\n:::")])]),e._v(" "),o("li",[o("p",[e._v("Cut the rods")])]),e._v(" "),o("li",[o("p",[e._v("Test that it all works by connecting the frame pieces together:")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1218),alt:"Frame"}})])]),e._v(" "),o("li",[o("p",[e._v("Place the motors as far out as possible, without the propellers touching the rods.")])])]),e._v(" "),o("h3",{attrs:{id:"electronics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#electronics"}},[e._v("#")]),e._v(" Electronics")]),e._v(" "),o("p",[e._v("Solder the peripherals to the flight controller. We used the following assignments:")]),e._v(" "),o("ul",[o("li",[e._v("ESCs: the 2 ESCs can be connected directly to the two connectors of the KakuteH7. To avoid conflicts we removed the power pin (right-most pin) from one of the connectors.")]),e._v(" "),o("li",[e._v("Telemetry to UART1")]),e._v(" "),o("li",[e._v("GPS to UART4")]),e._v(" "),o("li",[e._v("RC to UART6 "),o("img",{attrs:{src:r(1219),alt:"FC closeup"}})])]),e._v(" "),o("p",[e._v("Remarks:")]),e._v(" "),o("ul",[o("li",[e._v("Make sure the magnetometer is placed away from power. We ended up placing it to the bottom of the center-piece with a 4cm padding styrofoam.")]),e._v(" "),o("li",[e._v("Put some tape on the barometer (without taping the opening!) to avoid any influence from light.")]),e._v(" "),o("li",[e._v("We did not glue the frame. It is certainly advisible to do so after initial test flights, but it might work without.")])]),e._v(" "),o("h2",{attrs:{id:"software-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#software-configuration"}},[e._v("#")]),e._v(" Software Configuration")]),e._v(" "),o("h3",{attrs:{id:"esc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#esc"}},[e._v("#")]),e._v(" ESC")]),e._v(" "),o("p",[e._v("First, configure the ESCs to 3D mode (bidirectional). We had issues with the stock ESC settings in 3D mode: when trying to switch direction, a motor sometimes did not start anymore until the ESC was rebooted. So we had to change ESC settings.")]),e._v(" "),o("p",[e._v("To do so, you can use Betaflight on the flight controller and then use pass-through mode and the BL Heli suite (make sure there is an airframe with 8 motors configured in Betaflight). These are the settings:")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1220),alt:"ESC settings"}})]),e._v(" "),o("p",[e._v("In particular:")]),e._v(" "),o("ul",[o("li",[e._v("set the Motor Direction to "),o("strong",[e._v("Bidirectional Soft")])]),e._v(" "),o("li",[e._v("increase the Rampup Power to "),o("strong",[e._v("100%")]),e._v(" (this is conservative and might reduce efficiency)")])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),o("p",[e._v("Make sure the motors do not overheat with the changed settings.")])]),e._v(" "),o("h3",{attrs:{id:"px4"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4"}},[e._v("#")]),e._v(" PX4")]),e._v(" "),o("ul",[o("li",[e._v("Select a generic multicopter airframe")]),e._v(" "),o("li",[e._v("Use an "),o("a",{attrs:{href:"../advanced_config/prearm_arm_disarm#arming-button-switch"}},[e._v("arming switch")]),e._v(", do not use stick arming")]),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[e._v("Select DShot")]),e._v(" as output protocol on all eight outputs")],1),e._v(" "),o("li",[e._v("Configure the motors according to this: "),o("img",{attrs:{src:r(1221),alt:"Motor Config"}}),e._v(" We used the following convention: the motors are facing the direction of where the axis points to. The spinning direction matches the direction of positive thrust (moving the motor slider up). Make sure to use the right props, as there is a CCW and a CW version.")]),e._v(" "),o("li",[e._v("Parameters:\n"),o("ul",[o("li",[e._v("Change the desaturation logic for better attitude tracking: set "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CA_METHOD"}},[e._v("CA_METHOD")]),e._v(" to 0.")],1),e._v(" "),o("li",[e._v("Disable failure detection: set "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_FAIL_P"}},[e._v("FD_FAIL_P")]),e._v(" and "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FD_FAIL_R"}},[e._v("FD_FAIL_R")]),e._v(" to 0.")],1)])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/main/assets/airframes/multicopter/omnicopter/omnicopter.params",target:"_blank",rel:"noopener noreferrer"}},[e._v("This file"),o("OutboundLink")],1),e._v(" contains all the relevant parameters.")])]),e._v(" "),o("h2",{attrs:{id:"video"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[e._v("#")]),e._v(" Video")]),e._v(" "),o("p"),o("div",{staticClass:"embed-responsive embed-responsive-16by9"},[o("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/nsPkQYugfzs",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),o("p"),e._v(" "),o("h2",{attrs:{id:"simulation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#simulation"}},[e._v("#")]),e._v(" Simulation")]),e._v(" "),o("p",[e._v("There is an omnicopter simulation target in Gazebo Classic:")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gazebo-classic_omnicopter\n")])])]),o("p",[o("img",{attrs:{src:r(1222),alt:"Gazebo Sim"}})]),e._v(" "),o("h2",{attrs:{id:"remarks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),o("p",[e._v("Some general remarks:")]),e._v(" "),o("ul",[o("li",[e._v("The hover throttle is about 30%.")]),e._v(" "),o("li",[e._v("The flight time is around 4-5min. This could probably be improved a bit by using larger propellers.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);