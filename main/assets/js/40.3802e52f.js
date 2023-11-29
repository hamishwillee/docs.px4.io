(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1261:function(t,e,o){t.exports=o.p+"assets/img/01-foxtech-loong.f8274b21.jpg"},1262:function(t,e,o){t.exports=o.p+"assets/img/02-stack.bd3e84c6.png"},1263:function(t,e,o){t.exports=o.p+"assets/img/03-baseplate.eadd89ec.jpg"},1264:function(t,e,o){t.exports=o.p+"assets/img/04-stack-fixture.2539a81f.jpg"},1265:function(t,e,o){t.exports=o.p+"assets/img/05-radio-mount.4f24d83d.jpg"},1266:function(t,e,o){t.exports=o.p+"assets/img/06-fan-mount.7fd573da.jpg"},1267:function(t,e,o){t.exports=o.p+"assets/img/07-fan-mount.b6c4f53f.jpg"},1268:function(t,e,o){t.exports=o.p+"assets/img/08-preparations.c3160117.jpg"},1269:function(t,e,o){t.exports=o.p+"assets/img/09-stack-fixure.b6e3c9ed.jpg"},1270:function(t,e,o){t.exports=o.p+"assets/img/10-40a-power-module.71dc984e.jpg"},1271:function(t,e,o){t.exports=o.p+"assets/img/11-airspeed-sensor.1ec1bdab.jpg"},1272:function(t,e,o){t.exports=o.p+"assets/img/12-lidar-01.21cffdef.jpg"},1273:function(t,e,o){t.exports=o.p+"assets/img/13-lidar-02.b4f7950e.jpg"},1274:function(t,e,o){t.exports=o.p+"assets/img/14-gps.0f45e30c.jpg"},1275:function(t,e,o){t.exports=o.p+"assets/img/15-skynode.9ebeb387.jpg"},1276:function(t,e,o){t.exports=o.p+"assets/img/16-lte-antennas.ce061fcb.jpg"},1277:function(t,e,o){t.exports=o.p+"assets/img/17-antenna-front.30479b3f.jpg"},1278:function(t,e,o){t.exports=o.p+"assets/img/19-rear-antenna.3f69e04a.jpg"},1279:function(t,e,o){t.exports=o.p+"assets/img/18-12s-power-module.42f8d794.jpg"},3596:function(t,e,o){"use strict";o.r(e);var a=o(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"foxtech-loong-2160-vtol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foxtech-loong-2160-vtol"}},[t._v("#")]),t._v(" Foxtech Loong 2160 VTOL")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("Foxtech Loong 2160 VTOL")]),t._v(" is a easy to build almost-ready-to-fly (ARF) quadplane VTOL drone with wingspan of 2160mm.\nThis build guide shows how to add a flight controller system using "),a("RouterLink",{attrs:{to:"/zh/companion_computer/auterion_skynode.html"}},[t._v("Auterion Skynode evaluation kit")]),t._v(" or "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk6c.html"}},[t._v("Pixhawk 6C")]),t._v(" and setup PX4.")],1),t._v(" "),a("p",[a("img",{attrs:{src:o(1261),alt:"Photo of Loong VTOL in flight"}})]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("Specifications:")]),t._v(" "),a("ul",[a("li",[t._v("Wingspan: 2160mm")]),t._v(" "),a("li",[t._v("Fuselage Length: 1200mm")]),t._v(" "),a("li",[t._v("Takeoff Weight: Approximately 7kg (excluding payload)")]),t._v(" "),a("li",[t._v("Max Flight Time: Up to 1 hour and 30 minutes")]),t._v(" "),a("li",[t._v("Cruising Speed: Approximately 17m/s")]),t._v(" "),a("li",[t._v("Max Payload Weight: Around 1.5kg")]),t._v(" "),a("li",[t._v("Carry Case Dimensions: 125cm x 34cm x 34cm")])]),t._v(" "),a("p",[t._v("Key Features:")]),t._v(" "),a("ul",[a("li",[t._v("Effortless Assembly: Quick and easy setup")]),t._v(" "),a("li",[t._v("Portability: Compact design for convenient transportation with the included carry case")]),t._v(" "),a("li",[t._v("Ready to Fly: All actuators are pre-installed and wired, minimizing setup time")]),t._v(" "),a("li",[t._v("Extended Flight Time: Up to 1 hour and 30 minutes, depending on weather conditions and takeoff weight")]),t._v(" "),a("li",[t._v("Versatile Payload Capacity: Spacious fuselage accommodates diverse payloads, including options like the Sony A7R for mapping applications.")])]),t._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.foxtechfpv.com/foxtech-loong-2160-vtol.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Foxtech FPV (ARF Combo)"),a("OutboundLink")],1),t._v(" - recommended")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.alibaba.com/product-detail/Loong-2160-Long-Endurance-VTOL-Mapping_1600280686653.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alibaba"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"flight-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller"}},[t._v("#")]),t._v(" Flight Controller")]),t._v(" "),a("p",[t._v("The following options have been tested:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/companion_computer/auterion_skynode.html"}},[t._v("Auterion Skynode evaluation kit")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk6c.html"}},[t._v("Pixhawk 6C")])],1)]),t._v(" "),a("h2",{attrs:{id:"additional-accessories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-accessories"}},[t._v("#")]),t._v(" Additional Accessories")]),t._v(" "),a("ul",[a("li",[t._v("Auterion 12S Power Module")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://holybro.com/collections/power-modules-pdbs/products/pm08d-digital-power-module-14s-200a",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro PM08D Power Module (alternative to Auterion PM)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps_holybro_h-rtk-f9p.html"}},[t._v("GPS F9P (included in Skynode eval. kit)")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps_holybro_h-rtk-m8p.html"}},[t._v("GPS M9N (cheaper alternative to F9P)")])],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.dualrc.com/parts/airspeed-sensor-sdp33",target:"_blank",rel:"noopener noreferrer"}},[t._v("Airspeed sensor (included in Skynode eval. kit)"),a("OutboundLink")],1),t._v(" — recommended for improved safety and performance")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://holybro.com/products/digital-air-speed-sensor?pr_prod_strat=use_description&pr_rec_id=236dfda00&pr_rec_pid=7150470561981&pr_ref_pid=7150472462525&pr_seq=uniform",target:"_blank",rel:"noopener noreferrer"}},[t._v("Airspeed sensor (cheaper alternative)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/sensor/sfxx_lidar.html"}},[t._v("Lidar Lightware lw20-c (included in Skynode eval. kit)")]),t._v(" (Optional)")],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.seeedstudio.com/PSK-CM8JL65-CC5-Infrared-Distance-Measuring-Sensor-p-4028.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lidar Seeed Studio PSK-CM8JL65-CC5 (cheaper alternative)"),a("OutboundLink")],1),t._v(" (Optional)")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("Radio (RC) System")]),t._v(" of your preference")],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://holybro.com/collections/rc-radio-transmitter-receiver/products/skydroid-h12?variant=42940989931709",target:"_blank",rel:"noopener noreferrer"}},[t._v("Groundstation and Radio link"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.digitec.ch/en/s1/product/powerguard-usb-c-usb-c-025-m-usb-cables-22529949?dbq=1&gclid=Cj0KCQjw2cWgBhDYARIsALggUhrh-z-7DSU0wKfLBVa8filkXLQaxUpi7pC0ffQyRzLng8Ph01h2R1gaAp0mEALw_wcB&gclsrc=aw.ds",target:"_blank",rel:"noopener noreferrer"}},[t._v("USB-C extension cable"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.3dxr.co.uk/autopilots-c2/the-cube-aka-pixhawk-2-1-c9/cube-cables-accessories-sensors-c15/cubepilot-i2c-can-splitter-jst-gh-4pin-p2840",target:"_blank",rel:"noopener noreferrer"}},[t._v("I2C Splitter"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/main/assets/airframes/vtol/foxtech_loong_2160/loong-3d-prints.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("3D-Printed mounts"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("1x Baseplate")]),t._v(" "),a("li",[t._v("1x Stack-fixture")]),t._v(" "),a("li",[t._v("1x Fan-Mount")]),t._v(" "),a("li",[t._v("1x Radio-Mount")]),t._v(" "),a("li",[t._v("1x Top-Plate")]),t._v(" "),a("li",[t._v("1x Radio-Antenna-Adapter")]),t._v(" "),a("li",[t._v("1x USB-C Holder 1")]),t._v(" "),a("li",[t._v("1x USB-C Holder 2")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cnckitchen.store/products/gewindeeinsatz-threaded-insert-set-standard-200-stk-pcs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Messing threaded inserts"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.amazon.com/Connectors-Female-Pieces-Shrink-Battery/dp/B0875MBLNH/ref=sr_1_1?keywords=xt30+connector&qid=1700643604&sr=8-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("XT30 connectors"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://de.aliexpress.com/item/1005005999729125.html?spm=a2g0o.productlist.main.1.7fe0c7fcvInMsM&algo_pvid=2e5373e9-747f-4a28-9739-cd59d05d64f1&aem_p4p_detail=202311220106396068090130108300006423842&algo_exp_id=2e5373e9-747f-4a28-9739-cd59d05d64f1-0&pdp_npi=4%40dis%21CHF%2114.42%213.72%21%21%2116.01%21%21%402101f04d17006439995917563eeeb0%2112000035246480339%21sea%21CH%210%21AB&curPageLogUid=24AixvgVOlG3&search_p4p_id=202311220106396068090130108300006423842_1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Div. Screws"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.amazon.com/Superun-Cable-Tie-Kit-Assorted/dp/B07TMKJP5S/ref=sr_1_2?crid=968Z3XJK9N3J&keywords=zip%2Bties%2Bset&qid=1700644053&sprefix=zip%2Bties%2Bset%2Caps%2C155&sr=8-2&th=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zip ties"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.digikey.ch/de/products/detail/amphenol-rf/095-902-536-012/13246174",target:"_blank",rel:"noopener noreferrer"}},[t._v("Antenna extension cable - matching your radio system"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://genstattu.com/tattu-22-2v-30c-6s-22000mah-lipo-battery-with-xt90-s-plug-for-uav.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Recommended Battery (12S 22Ah)"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[t._v("#")]),t._v(" Tools")]),t._v(" "),a("p",[t._v("The following tools were used for this build.")]),t._v(" "),a("ul",[a("li",[t._v("Hex driver set")]),t._v(" "),a("li",[t._v("Wrench set")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.amazon.com/UY-CHAN-Programmable-Pocket-size-Soldering/dp/B07G71CKC4/ref=sr_1_7?crid=2S2XK6363XRDF&keywords=ts+80+soldering+iron&qid=1700644208&sprefix=ts+80%2Caps%2C151&sr=8-7",target:"_blank",rel:"noopener noreferrer"}},[t._v("Soldering station"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Glue: Hot glue, 5 min Epoxy")]),t._v(" "),a("li",[t._v("Tape")]),t._v(" "),a("li",[t._v("3M Double sided tape ("),a("a",{attrs:{href:"https://www.amazon.in/3M-VHB-Tape-4910-Length/dp/B00GTABM3Y",target:"_blank",rel:"noopener noreferrer"}},[t._v("3M VHB tape"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("3D-Printer")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.amazon.com/Loctite-Heavy-Duty-Threadlocker-Single/dp/B000I1RSNS?th=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blue Loctite"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"hardware-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-integration"}},[t._v("#")]),t._v(" Hardware Integration")]),t._v(" "),a("p",[t._v("In this documentation the integration of a Auterion Skynode is described.\nThe installation of a Pixhawk can be done similarly.")]),t._v(" "),a("h3",{attrs:{id:"preparations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparations"}},[t._v("#")]),t._v(" Preparations")]),t._v(" "),a("h3",{attrs:{id:"avionics-unit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avionics-unit"}},[t._v("#")]),t._v(" Avionics Unit")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1262),alt:"Complete stack assembly"}})]),t._v(" "),a("h4",{attrs:{id:"prepare-3d-printed-parts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-3d-printed-parts"}},[t._v("#")]),t._v(" Prepare 3D-Printed Parts")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Use a soldering iron to press the threaded inserts into the 3D-Printed parts.")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Insert 10x M3 threaded inserts into the baseplate as shown in the picture:")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1263),alt:"Baseplate with threaded inserts"}})])]),t._v(" "),a("li",[a("p",[t._v("Insert 2x M3 threaded inserts into the stack fixture as shown in the picture below:")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1264),alt:"Stack fixture with threaded inserts"}})])]),t._v(" "),a("li",[a("p",[t._v("Insert 2x M4 threaded inserts into the fan mount and radio mount as shown in the picture below.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1265),alt:"Radio-mount"}})]),t._v(" "),a("p",[t._v("If you would like to add a 40mm 5V fan to the fan mount, insert 4x M3 inserts.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1266),alt:"Fan-mount"}})])]),t._v(" "),a("li",[a("p",[t._v("Change the cable connector to a servo connector so it can be plugged into the servo rail to be powered.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("A fan might be needed if a powerful radio is used.")])])])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1267),alt:"Fan-mount with fan"}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[t._v("Remove the original mounting plate from the vehicle.\nTape the cables to the outside of the fuselage.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1268),alt:"Empty fuselage"}})])]),t._v(" "),a("li",[a("p",[t._v("Slide the baseplate into the vehicle.")])]),t._v(" "),a("li",[a("p",[t._v("Screw the stack fixture to the baseplate and mark the location of the stack fixture with tape or a pen.")])]),t._v(" "),a("li",[a("p",[t._v("Remove the parts from the fuselage and glue the stack fixture into place using hot glue.")])])]),t._v(" "),a("p",[a("img",{attrs:{src:o(1269),alt:"Mounting stack fixture"}})]),t._v(" "),a("h3",{attrs:{id:"_40a-power-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_40a-power-module"}},[t._v("#")]),t._v(" 40A Power Module")]),t._v(" "),a("p",[t._v("The 40A power module provides power for the avionics when using Skynode (and comes with the Skynode evaluation kit):")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Remove the case from the 40A PM.")])]),t._v(" "),a("li",[a("p",[t._v("Screw the PM with 2x M2x6mm to the bottom of the baseplate.")])]),t._v(" "),a("li",[a("p",[t._v("Create a cable to extend the XT60 connector to an XT30 that is mounted on the baseplate.\nWith that, the 6S battery power can be directly plugged into the XT30 connector with the pre-configured cable that comes with the vehicle.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1270),alt:"40A Power Module installation"}})])])]),t._v(" "),a("p",[t._v("If necessary, the 10V output of the radio port on the PM can also be exposed via an XT30 that can be mounted next to the 6S battery input XT60.")]),t._v(" "),a("h3",{attrs:{id:"sensors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sensors"}},[t._v("#")]),t._v(" Sensors")]),t._v(" "),a("h4",{attrs:{id:"pitot-tube"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pitot-tube"}},[t._v("#")]),t._v(" Pitot Tube")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("The sensor can be installed with 2x M3x16mm screws in the front right corner of the baseplate.\nTake care that the connector is facing the center of the fuselage.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1271),alt:"Mounted airspeed sensor"}})]),t._v(" "),a("p",[t._v("Only the front tube (not as shown in the picture) is used; the other tube can be removed since our experience showed that the pressure inside the fuselage is sufficient as static pressure.")])]),t._v(" "),a("li",[a("p",[t._v("When the stack is mounted inside the fuselage, the tube coming from the wing and the one from the airspeed sensor need to be spliced together.\nUse some spit (that's the easiest way) to push them together and afterward use a heat shrink tube to reinforce the connection.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("Use a heat source carefully since the foam starts to melt at high temperatures.")])])])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("h4",{attrs:{id:"lidar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lidar"}},[t._v("#")]),t._v(" Lidar")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("A lidar is recommended!\nIf no lidar is mounted you should disable using fixed-wing actuation in hover to accelerate forward (set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_FWD_THRUST_EN"}},[t._v("VT_FWD_THRUST_EN")]),t._v(" to "),a("code",[t._v("0")]),t._v(" instead of "),a("code",[t._v("1")]),t._v(").")],1)]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Mark the location to install the lidar with some tape or a pen.\nCut a hole inside the PVC shell and the foam, so that the lidar fits in place.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1272),alt:"Prepared lidar hole"}})])]),t._v(" "),a("li",[a("p",[t._v("Secure the lidar with hot glue.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1273),alt:"Installed lidar"}})])])]),t._v(" "),a("h4",{attrs:{id:"gps-compass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gps-compass"}},[t._v("#")]),t._v(" GPS/Compass")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Use double sided tape to mount the GPS in the rear of the vehicle underneath the rear latch.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1274),alt:"Installed GPS"}})]),t._v(" "),a("p",[t._v("The arrow on the GPS for the orientation can be ignored.\nThe orientation will be detected by the flight controller during the calibration.")])])]),t._v(" "),a("h3",{attrs:{id:"flight-controller-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-2"}},[t._v("#")]),t._v(" Flight Controller")]),t._v(" "),a("p",[t._v("Install either the Pixhawk or Skynode onto the baseplate.")]),t._v(" "),a("h4",{attrs:{id:"pixhawk-6c-6c-mini"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-6c-6c-mini"}},[t._v("#")]),t._v(" Pixhawk 6c/6c mini")]),t._v(" "),a("ol",[a("li",[t._v("Use double sided tape to mount the flight controller to the baseplate.")])]),t._v(" "),a("h4",{attrs:{id:"skynode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skynode"}},[t._v("#")]),t._v(" Skynode")]),t._v(" "),a("ol",[a("li",[t._v('Use 4x M3x8 screws to mount the Skynode to the baseplate.\nMake sure that the top of the "A" is facing to the front of the vehicle.')]),t._v(" "),a("li",[t._v("Plug the 40A Power Module into the upper one of the two power connectors.")]),t._v(" "),a("li",[t._v("Plug one (or if needed two) USB adapters into the 4-pin JST-GH connectors into the back of the Skynode and feed them to the front of the plate.\nFix the cables with zip ties in place.")]),t._v(" "),a("li",[t._v("Tape a I2C splitter to the front right side of the baseplate (The splitter can be used to plug in ETH devices such as a radio link.)")]),t._v(" "),a("li",[t._v("Connect the I2C splitter with the ETH port in the back of the Skynode.")]),t._v(" "),a("li",[t._v("Plug in the two 40-pin cables into the front of the Skynode.")]),t._v(" "),a("li",[t._v("Plug in the USB-C extension cable and bend it over to the front.\nThe bend needs to be very tight, so that the plate will fit into the vehicle.")])]),t._v(" "),a("p",[a("img",{attrs:{src:o(1275),alt:"Installed Skynode"}})]),t._v(" "),a("h4",{attrs:{id:"adapter-boards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adapter-boards"}},[t._v("#")]),t._v(" Adapter Boards")]),t._v(" "),a("ol",[a("li",[t._v("Screw the Pixhawk adapter Boards to the top plate.")])]),t._v(" "),a("h3",{attrs:{id:"antennas-and-rc-receiver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antennas-and-rc-receiver"}},[t._v("#")]),t._v(" Antennas and RC Receiver")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Tape the Skynode LTE antennas to the side of the fuselage as shown in the picture:")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1276),alt:"LTE-Antennas"}})])]),t._v(" "),a("li",[a("p",[t._v("If you are using a radio telemetry module you can mount the antennas to the top of the fuselage.\nIn the front you can mount the antenna extension cable directly.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1277),alt:"WIFI-Antennas-Front"}})]),t._v(" "),a("p",[t._v("In the back you can use the 3D-Printed antenna adapter.\nThe adapter can be glued in place with hot glue.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1278),alt:"WIFI-Antenna-Back"}})])])]),t._v(" "),a("h3",{attrs:{id:"_12s-power-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12s-power-module"}},[t._v("#")]),t._v(" 12S Power Module")]),t._v(" "),a("p",[t._v("This 12S power module is the main power module for the motors.\nIt can handle higher currents than the 40A power module used to power the avionics, and is needed since the Loong uses up to 120A in the hover phase.")]),t._v(" "),a("p",[t._v("The 12S Power Module will be mounted on top of the battery.\nPlug the XT90 that is installed inside the vehicle into the PM.\nThe power cable to connect the Skynode needs to be extended.\nThis is necessary to get battery readings from the power module.")]),t._v(" "),a("p",[t._v("The power module can be used as a 5V backup for Skynode.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1279),alt:"12S-Power-Module"}})]),t._v(" "),a("h3",{attrs:{id:"assembly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assembly"}},[t._v("#")]),t._v(" Assembly")]),t._v(" "),a("p",[t._v("The assembly steps are:")]),t._v(" "),a("ol",[a("li",[t._v("Slide the baseplate into the vehicle.")]),t._v(" "),a("li",[t._v("Plug in the LTE-Antennas into the Skynode.")]),t._v(" "),a("li",[t._v("Screw the Fan-Mount and Radio-Mount to the baseplate.")]),t._v(" "),a("li",[t._v("Slide the baseplate all the way back and screw it to the stack fixture.")]),t._v(" "),a("li",[t._v("Place the top plate on top of the stack and feed the 40-pin cables from the Skynode through the two holes in front of the Pixhawk adapter boards.")]),t._v(" "),a("li",[t._v("Make sure to connect the top connector to the adapter board that has the 'GPS1' input.")])]),t._v(" "),a("p",[t._v("Plug the actuators in to the Pixhawk adapter board in the following order:")]),t._v(" "),a("p",[t._v("MAIN:")]),t._v(" "),a("ol",[a("li",[t._v("Puller Motor")]),t._v(" "),a("li",[t._v("Empty, or fan if installed")]),t._v(" "),a("li",[t._v("Aileron right")]),t._v(" "),a("li",[t._v("Aileron left")]),t._v(" "),a("li",[t._v("Elevator right")]),t._v(" "),a("li",[t._v("Elevator left")]),t._v(" "),a("li",[t._v("Rudder")])]),t._v(" "),a("p",[t._v("AUX:")]),t._v(" "),a("ol",[a("li",[t._v("Motor front right")]),t._v(" "),a("li",[t._v("Motor rear left")]),t._v(" "),a("li",[t._v("Motor front left")]),t._v(" "),a("li",[t._v("Motor rear right")])]),t._v(" "),a("p",[t._v("If you wish connect the actuators to different outputs you will need to modify the Actuator Output mappings (see "),a("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[t._v("Actuator Configuration")]),t._v(").")],1),t._v(" "),a("h2",{attrs:{id:"software-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-setup"}},[t._v("#")]),t._v(" Software Setup")]),t._v(" "),a("h3",{attrs:{id:"select-airframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-airframe"}},[t._v("#")]),t._v(" Select Airframe")]),t._v(" "),a("ol",[a("li",[t._v("Open QGC, select the "),a("strong",[t._v("Q")]),t._v(" icon, and then select "),a("strong",[t._v("Vehicle Setup")]),t._v(".")]),t._v(" "),a("li",[t._v("Select the "),a("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("Airframe")]),t._v(" tab")],1),t._v(" "),a("li",[t._v("Select "),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#vtol_standard_vtol_generic_standard_vtol"}},[t._v("Generic Standard VTOL")]),t._v(" from the "),a("em",[t._v("Standard VTOL")]),t._v(" group, and then and click "),a("strong",[t._v("Apply and Restart")]),t._v(".")],1)]),t._v(" "),a("h3",{attrs:{id:"load-parameters-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-parameters-file"}},[t._v("#")]),t._v(" Load Parameters File")]),t._v(" "),a("p",[t._v("Next we load a "),a("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/main/assets/airframes/vtol/foxtech_loong_2160/loong.params",target:"_blank",rel:"noopener noreferrer"}},[t._v("parameter file"),a("OutboundLink")],1),t._v(" that contains parameters that define the frame geometry, output mappings, and tuning values — so you don't have to!\nIf you have followed the wiring instructions for the motors you probably won't need to do much further configuration other than sensor calibration and fixing the trims.")]),t._v(" "),a("p",[t._v("To load the file:")]),t._v(" "),a("ol",[a("li",[t._v("Download the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/main/assets/airframes/vtol/foxtech_loong_2160/loong.params",target:"_blank",rel:"noopener noreferrer"}},[t._v("parameter file"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[t._v("Select the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html#finding-updating-parameters"}},[t._v("Parameters")]),t._v(" tab and then click on "),a("strong",[t._v("Tools")]),t._v(" in the top right corner.")],1),t._v(" "),a("li",[t._v("Select "),a("strong",[t._v("Load from file")]),t._v(" and then choose the "),a("code",[t._v("loong.params")]),t._v(" file you just downloaded.")]),t._v(" "),a("li",[t._v("Reboot the vehicle.")])]),t._v(" "),a("h3",{attrs:{id:"sensor-selection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sensor-selection"}},[t._v("#")]),t._v(" Sensor Selection")]),t._v(" "),a("ul",[a("li",[t._v("If the "),a("RouterLink",{attrs:{to:"/zh/sensor/sfxx_lidar.html"}},[t._v("Lidar Lightware lw20-c (included in Skynode eval. kit)")]),t._v(" is used, "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_SF1XX"}},[t._v("SENS_EN_SF1XX")]),t._v(" needs to be set to 6 (SF/LW/20c).")],1),t._v(" "),a("li",[t._v("Make that the correct airspeed sensor is selected.\nIf you use the recommended "),a("a",{attrs:{href:"https://www.dualrc.com/parts/airspeed-sensor-sdp33",target:"_blank",rel:"noopener noreferrer"}},[t._v("SDP33 airspeed sensor"),a("OutboundLink")],1),t._v(" no changes will be needed as "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_SDP3X"}},[t._v("SENS_EN_SDP3X")]),t._v(" is enabled (set to "),a("code",[t._v("1")]),t._v(") in the parameter file.")],1)]),t._v(" "),a("h3",{attrs:{id:"sensor-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sensor-calibration"}},[t._v("#")]),t._v(" Sensor Calibration")]),t._v(" "),a("p",[t._v("First make sure to set the "),a("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[t._v("correct orientation of the flight controller")]),t._v(".\nThis should be the default ("),a("code",[t._v("ROTATION_NONE")]),t._v(").")],1),t._v(" "),a("p",[t._v("Then calibrate the main sensors:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/config/compass.html"}},[t._v("Compass")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config/gyroscope.html"}},[t._v("Gyroscope")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config/accelerometer.html"}},[t._v("Accelerometer")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config/airspeed.html"}},[t._v("Airspeed")])],1)]),t._v(" "),a("h3",{attrs:{id:"rc-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-setup"}},[t._v("#")]),t._v(" RC-Setup")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[t._v("Calibrate your RC Controller")]),t._v(" and setup the "),a("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("flight mode switches")]),t._v(".")],1),t._v(" "),a("p",[t._v("We recommend you assign RC switches for the set of modes defined in "),a("RouterLink",{attrs:{to:"/zh/config/flight_mode.html#what-flight-modes-and-switches-should-i-set"}},[t._v("Flight Mode Configuration > What Flight Modes and Switches Should I Set?")]),t._v(".\nIn particular you should assign a "),a("em",[t._v("VTOL Transition Switch")]),t._v(", "),a("em",[t._v("Kill Switch")]),t._v(", and a switch to select "),a("RouterLink",{attrs:{to:"/zh/flight_modes_fw/stabilized.html"}},[t._v("Stabilized mode")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/flight_modes_fw/position.html"}},[t._v("Position mode")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"actuator-setup-and-esc-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actuator-setup-and-esc-calibration"}},[t._v("#")]),t._v(" Actuator Setup and ESC Calibration")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("Make sure the props are removed!\nThe motors are easy to start in the actuators tab by accident.")])]),t._v(" "),a("p",[t._v("Motors, control surfaces, and other actuators are configured in the QGroundControl "),a("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[t._v("Actuator Configuration & Testing")]),t._v(".")],1),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"#load-parameters-file"}},[t._v("parameter file")]),t._v(" loaded previously means that this screen should already be correctly setup: you just need to adjust the trims for your particular vehicle.\nIf motors/servos were connected to different outputs than suggested, you will need to change the output to function mappings in the actuator output section.")]),t._v(" "),a("p",[t._v("To calibrate the ESC's power up the vehicle with the wings not connected and go into the "),a("strong",[t._v("Actuators")]),t._v(" tab in QGC.\nEnable motor test and side the slider for Motor you would like to calibrate up to the maximum.\nPlug the wings into the fuselage and wait until the beeb-sequence if finished (ca. 5s).\nThen side the slider to the minimum.")]),t._v(" "),a("h4",{attrs:{id:"control-surfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#control-surfaces"}},[t._v("#")]),t._v(" Control Surfaces")]),t._v(" "),a("p",[t._v("Check if the actuators need to be reversed using the RC-Controller:")]),t._v(" "),a("ul",[a("li",[t._v("Switch into "),a("RouterLink",{attrs:{to:"/zh/flight_modes_fw/stabilized.html"}},[t._v("Manual mode")])],1),t._v(" "),a("li",[t._v("Roll stick to the right.\nThe right aileron should go up, left aileron should go down.")]),t._v(" "),a("li",[t._v("Pitch stick to the back (fly upwards).\nBoth V-tail surfaces should move up.")]),t._v(" "),a("li",[t._v("Yaw stick to the right.\nBoth surfaces should move to the right")])]),t._v(" "),a("p",[t._v("Now adjust the trim value so that all the surfaces are in neutral position.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(410),alt:"Servo trim"}})]),t._v(" "),a("h4",{attrs:{id:"motor-direction-and-orientation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motor-direction-and-orientation"}},[t._v("#")]),t._v(" Motor Direction and Orientation")]),t._v(" "),a("p",[t._v("Arm the vehicle with the propellers still detached in "),a("RouterLink",{attrs:{to:"/zh/flight_modes_fw/stabilized.html"}},[t._v("Stabilized mode")]),t._v(".\nCheck that all the quad-motors spin with a similar low idle speed and verify that the direction is correct.\nCheck the following reactions:")],1),t._v(" "),a("ul",[a("li",[t._v("Roll stick to the right.\nThe left two motors should spool up")]),t._v(" "),a("li",[t._v("Roll stick to the back.\nThe front two motors should spool up")]),t._v(" "),a("li",[t._v("Yaw stick to the right.\nFront right and rear left motor should spool up")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("increase the throttle a bit if you can't see a reaction since "),a("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html#airmode-mixer-saturation"}},[t._v("Airmode")]),t._v(" is not enabled for the yaw axis.")],1)]),t._v(" "),a("h2",{attrs:{id:"first-flight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-flight"}},[t._v("#")]),t._v(" First Flight")]),t._v(" "),a("ul",[a("li",[t._v("Mount the propellers (use blue Loctite for the screws).")]),t._v(" "),a("li",[t._v("Check center of gravity (GG).\nTo check the CG lift the vehicle with two fingers up at the latches that connect the wing.\nThe vehicle should balance horizontally.\nIf the vehicle tips to either the tail or to the nose then you need to move the battery into the opposite direction.\nIf you are not able to balance the vehicle with this method you will need to reposition some components or add weight to balance the vehicle.")]),t._v(" "),a("li",[t._v("Check actuator orientations and neutral trim")]),t._v(" "),a("li",[t._v("Check control surface reactions in "),a("RouterLink",{attrs:{to:"/zh/flight_modes_fw/stabilized.html"}},[t._v("Stabilized mode")]),t._v(".\nSwitch the vehicle into forward flight mode.\n"),a("ul",[a("li",[t._v("Roll the vehicle to the right.\nThe right aileron should go down.\nThe left aileron should go up.")]),t._v(" "),a("li",[t._v("Pitch the vehicle up (nose up).\nBoth elevons should go down.")]),t._v(" "),a("li",[t._v("Yaw the vehicle to the right (nose to the right).\nBoth elevons should go to the left.")])])],1),t._v(" "),a("li",[t._v("If a "),a("RouterLink",{attrs:{to:"/zh/config/safety.html#kill-switch"}},[t._v("kill-switch")]),t._v(" is used, make sure it's working properly and will not be activated accidentally in flight!")],1),t._v(" "),a("li",[t._v("Arm in "),a("RouterLink",{attrs:{to:"/zh/flight_modes_fw/stabilized.html"}},[t._v("Stabilized mode")]),t._v(" and check if motors respond to the commands, e.g. roll left increases throttle on the right motor")],1),t._v(" "),a("li",[t._v("Takeoff in "),a("RouterLink",{attrs:{to:"/zh/flight_modes_fw/stabilized.html"}},[t._v("Stabilized mode")]),t._v(" and make some basic maneuvers")],1),t._v(" "),a("li",[t._v("If everything went without any issue, takeoff in "),a("RouterLink",{attrs:{to:"/zh/flight_modes_fw/position.html"}},[t._v("Position mode")]),t._v(" and do a transition at around 50m.\nIf something goes wrong switch back to multicopter mode as fast as possible (using the transition switch).")],1)])])}),[],!1,null,null,null);e.default=r.exports},410:function(t,e,o){t.exports=o.p+"assets/img/servo_trim.79f0982f.png"}}]);