(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1e3:function(t,e,r){t.exports=r.p+"assets/img/x500_fig19.a7dbe06c.jpg"},1001:function(t,e,r){t.exports=r.p+"assets/img/x500_fig20.34326319.png"},1002:function(t,e,r){t.exports=r.p+"assets/img/x500_fig21.9c93dbef.png"},1003:function(t,e,r){t.exports=r.p+"assets/img/x500_assembled.8291bc1e.png"},1004:function(t,e,r){t.exports=r.p+"assets/img/S500_airframe_use_for_X500.e6e9f1fe.jpg"},2554:function(t,e,r){"use strict";r.r(e);var a=r(18),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"holybro-x500-pixhawk4-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#holybro-x500-pixhawk4-build"}},[t._v("#")]),t._v(" Holybro X500 + Pixhawk4 Build")]),t._v(" "),a("p",[t._v("This topic provides full instructions for building the kit and configuring PX4 using "),a("em",[t._v("QGroundControl")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"key-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-information"}},[t._v("#")]),t._v(" Key information")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Frame:")]),t._v(" Holybro X500")]),t._v(" "),a("li",[a("strong",[t._v("Flight controller:")]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")])],1),t._v(" "),a("li",[a("strong",[t._v("Assembly time (approx.):")]),t._v(" 2 hours (75 minutes for frame, 45 minutes for autopilot installation/configuration)")])]),t._v(" "),a("p",[a("img",{attrs:{src:r(977),alt:"Full X500 Kit"}})]),t._v(" "),a("h2",{attrs:{id:"bill-of-materials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bill-of-materials"}},[t._v("#")]),t._v(" Bill of materials")]),t._v(" "),a("p",[t._v("The Holybro "),a("a",{attrs:{href:"https://shop.holybro.com/x500-kit_p1180.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("X500 Kit"),a("OutboundLink")],1),t._v(" includes almost all the required components:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4 autopilot")])],1),t._v(" "),a("li",[t._v("Pixhawk 4 GPS")]),t._v(" "),a("li",[t._v("Battery Strap")]),t._v(" "),a("li",[t._v("Propellers - 1045")]),t._v(" "),a("li",[t._v("Motors - 2216 KV880")]),t._v(" "),a("li",[t._v("Power and Radio Cables")]),t._v(" "),a("li",[t._v("Power Management - PM07")]),t._v(" "),a("li",[t._v("Wheelbase - 500 mm")]),t._v(" "),a("li",[t._v("Dimensions - 410"),a("em",[t._v("410")]),t._v("300 mm")]),t._v(" "),a("li",[t._v("433 MHz Telemetry Radio/915 MHz Telemetry Radio")])]),t._v(" "),a("p",[t._v("Additionally you will need a battery and receiver ("),a("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("compatible radio system")]),t._v("). This build uses:")],1),t._v(" "),a("ul",[a("li",[t._v("Receiver: FR SKY Taranis")]),t._v(" "),a("li",[t._v("Battery: "),a("a",{attrs:{href:"http://www.getfpv.com/lumenier-1300mah-4s-60c-lipo-battery-xt60.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("4S 1300 mAh"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"硬件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件"}},[t._v("#")]),t._v(" 硬件")]),t._v(" "),a("p",[t._v("This section lists all hardware for the frame and the autopilot installation.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Item")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("Quantity")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Socket cap scre")]),t._v(" "),a("td",[t._v("Used for motor fixing, stainless steel screw M3*5")]),t._v(" "),a("td",[t._v("16")])]),t._v(" "),a("tr",[a("td",[t._v("Carbon fiber tube - Arm")]),t._v(" "),a("td",[t._v("Diameter: 16mm length: 200mm")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("Motor base")]),t._v(" "),a("td",[t._v("Consists of 6 parts and 4 screws 4 nuts")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("Slide bar")]),t._v(" "),a("td",[t._v("Diameter: 10mm length: 250mm")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("Battery mounting board")]),t._v(" "),a("td",[t._v("Thickness: 2mm")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Battery pad")]),t._v(" "),a("td",[t._v("3mm Silicone sheet black")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Pylons")]),t._v(" "),a("td",[t._v("Engineering plastic embedded with copper nut")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("Cross countersunk head screw")]),t._v(" "),a("td",[t._v("Stainless steel M2.5*5mm")]),t._v(" "),a("td",[t._v("12")])]),t._v(" "),a("tr",[a("td",[t._v("PAN/TILT platform board")]),t._v(" "),a("td",[t._v("Thickness: 2mm")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Hanger rubber ring gasket")]),t._v(" "),a("td",[t._v("Inner hole diameter: 10mm black")]),t._v(" "),a("td",[t._v("8")])]),t._v(" "),a("tr",[a("td",[t._v("Hanger")]),t._v(" "),a("td",[t._v("Engineering plastic embedded with copper nut")]),t._v(" "),a("td",[t._v("8")])]),t._v(" "),a("tr",[a("td",[t._v("Carbon fiber - Bottom plate")]),t._v(" "),a("td",[t._v("The thickness of 2mm")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Socket cap screw")]),t._v(" "),a("td",[t._v("Stainless steel M2.5*6mm")]),t._v(" "),a("td",[t._v("8")])]),t._v(" "),a("tr",[a("td",[t._v("Nylon stud")]),t._v(" "),a("td",[t._v("Black M3*6+6")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("Nylon screw")]),t._v(" "),a("td",[t._v("Black M3*6")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("Carbon fiber - Top plate")]),t._v(" "),a("td",[t._v("Thickness: 1.5mm")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Pan head screw")]),t._v(" "),a("td",[t._v("Metal black M3*30mm")]),t._v(" "),a("td",[t._v("16")])]),t._v(" "),a("tr",[a("td",[t._v("Nylon strap")]),t._v(" "),a("td",[t._v("U- shape, of 16mm carbon fiber tube")]),t._v(" "),a("td",[t._v("16")])]),t._v(" "),a("tr",[a("td",[t._v("Nylon nut")]),t._v(" "),a("td",[t._v("Black M3")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("Locknut")]),t._v(" "),a("td",[t._v("Metal black M3")]),t._v(" "),a("td",[t._v("16")])]),t._v(" "),a("tr",[a("td",[t._v("Socket cap screw")]),t._v(" "),a("td",[t._v("Metal black M3*8mm")]),t._v(" "),a("td",[t._v("8")])]),t._v(" "),a("tr",[a("td",[t._v("Landing gear - Vertical pole")]),t._v(" "),a("td",[t._v("Carbon fiber tube+engineering plastic+fastener")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("Landing gear - Cross bar")]),t._v(" "),a("td",[t._v("Composed of carbon fiber tube and multiple parts")]),t._v(" "),a("td",[t._v("2")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:r(978),alt:"X500 Components for Frame"}})]),t._v(" "),a("h2",{attrs:{id:"package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package"}},[t._v("#")]),t._v(" Package")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Items")]),t._v(" "),a("th",[t._v("Package")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Pixhawk 4")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Pixhawk4 GPS MODULE")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("I2C splitter Board")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("6 to 6 pin cable (power)")]),t._v(" "),a("td",[t._v("3")])]),t._v(" "),a("tr",[a("td",[t._v("4 to 4 pin cable (CAN)")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("6 to 4 pin cable (Data)")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("10 to 10 pin cable (PWM)")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("8 to 8 pin cable(AUX)")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("7 to 7 pin cable(SPI)")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("6 to 6 pin cable(Debug)")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("PPM/SBUS out cable")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("XSR receiver cable")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("DSMX receiver cable")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("SBUS receiver cable")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("USB cable")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("'X'type folding pedestal mount")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("70mm & 140mm carbon rod standoff")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("6*3 2.54mm pitch Horizontal Pin")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("8*3 2.54mm pitch Horizontal Pin")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("Foam Set")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Pixhawk4 Quick Start Guide")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Pixhawk4 Pinouts")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("GPS Quick Start Guide")]),t._v(" "),a("td",[t._v("1")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:r(979),alt:"X500 Full Package Contents"}})]),t._v(" "),a("h3",{attrs:{id:"electronics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#electronics"}},[t._v("#")]),t._v(" Electronics")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Item Description")]),t._v(" "),a("th",[t._v("Quantity")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Pixhawk 4 autopilot（PM06 not included)")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Power Management PM02（Assembled)")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Motors - 2216 KV880（V2 Update)")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("Pixhawk 4 GPS")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Fully assembled Power Management Board with ESCs")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("433MHz Telemetry Radio / 915MHz Telemetry Radio")]),t._v(" "),a("td",[t._v("1")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:r(980),alt:"X500 Full Package Contents"}})]),t._v(" "),a("h3",{attrs:{id:"tools-needed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tools-needed"}},[t._v("#")]),t._v(" Tools needed")]),t._v(" "),a("p",[t._v("The following tools are used in this assembly:")]),t._v(" "),a("ul",[a("li",[t._v("1.5 mm Hex screwdriver")]),t._v(" "),a("li",[t._v("2.0 mm Hex screwdriver")]),t._v(" "),a("li",[t._v("2.5 mm Hex screwdriver")]),t._v(" "),a("li",[t._v("3mm Phillips screwdriver")]),t._v(" "),a("li",[t._v("Wire cutters")]),t._v(" "),a("li",[t._v("Precision tweezers")])]),t._v(" "),a("p",[a("img",{attrs:{src:r(981),alt:"X500 Full Package Contents"}})]),t._v(" "),a("h2",{attrs:{id:"组装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组装"}},[t._v("#")]),t._v(" 组装")]),t._v(" "),a("p",[t._v("Estimate time to assemble is 120 minutes, about 75 minutes for frame assembly and 45 minutes installing and configuring the autopilot in QGroundControl.")]),t._v(" "),a("p",[a("strong",[t._v("Step 1:")]),t._v(" We are going to start by assembling the landing gear to the vertical pole. Unscrew the landing gear screws and insert the vertical pole, see figures 1 and 2.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(982),alt:"Landing Figure 1"}})]),t._v(" "),a("p",[t._v("(Figure 1)")]),t._v(" "),a("p",[a("img",{attrs:{src:r(983),alt:"Landing Figure 2"}})]),t._v(" "),a("p",[t._v("(Figure 2)")]),t._v(" "),a("p",[a("strong",[t._v("Step 2:")]),t._v(" We proceed to arm the motor holder by using 4 U-shaped nylon straps to attach the holder to the carbon fiber arm as shown in figure 3.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(984),alt:"Motor"}})]),t._v(" "),a("p",[t._v("(Figure 3)")]),t._v(" "),a("p",[a("strong",[t._v("Step 3:")]),t._v(" Attach the power management PM02 to the bottom plate as shown in Figures 4 and 5.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(985),alt:"Power Management"}})]),t._v(" "),a("p",[t._v("(Figure 4)")]),t._v(" "),a("p",[a("img",{attrs:{src:r(986),alt:"Power Management 2"}})]),t._v(" "),a("p",[t._v("(Figure 5)")]),t._v(" "),a("p",[a("strong",[t._v("Step 4:")]),t._v("  Assemble the lower plate to the landing gears. Screw the landing gear with a vertical pole to the bottom plate.")]),t._v(" "),a("p",[t._v("The lower plate has 4 holes (see Figure 4 arrows) use the M3X8 screws, a total of 8 pieces, 4 on each side.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(987),alt:"Power Management 3"}})]),t._v(" "),a("p",[t._v("(Figure 6)")]),t._v(" "),a("p",[a("strong",[t._v("Step 5:")]),t._v(" Assembling the Battery Mount to the frame. For this we will need the M2 5X6 screws and the battery mount see Figure 7.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(988),alt:"Battery Mount 1"}})]),t._v(" "),a("p",[t._v("(Figure 7)")]),t._v(" "),a("p",[t._v("Insert the long rods to the small rings see Figure 8 and 9.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(989),alt:"Battery Mount 2"}})]),t._v(" "),a("p",[t._v("(Figure 8)")]),t._v(" "),a("p",[a("img",{attrs:{src:r(990),alt:"Battery Mount 3"}})]),t._v(" "),a("p",[t._v("(Figure 9)")]),t._v(" "),a("p",[t._v("With the battery holder completely armed, screw it where arrow shown in the image as shown in Figure 10; keep in mind GPS module will be facing front.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(991),alt:"Battery Mount 4"}})]),t._v(" "),a("p",[t._v("(Figure 10)")]),t._v(" "),a("p",[a("strong",[t._v("Step 6:")]),t._v(" Assemble the 8"),a("em",[t._v("3 2.54mm pitch Horizontal Pin to the 10 to 10 pin cable (PWM) to the Power Management Board. Connect the 10 to 10 pin cable (PWM) to the 8")]),t._v("3 2.54mm pitch Horizontal Pin, see Figure 11.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(992),alt:"Power Module 1"}})]),t._v(" "),a("p",[t._v("(Figure 11)")]),t._v(" "),a("p",[t._v("Cut a piece of 3M Tape and attach to the bottom of the Horizontal Pin, see Figure 12 stick the Horizontal Pin to the Power Management Board, see Figure 13.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(993),alt:"Power Module 2"}})]),t._v(" "),a("p",[t._v("(Figure 12)")]),t._v(" "),a("p",[a("img",{attrs:{src:r(994),alt:"Power Module 3"}})]),t._v(" "),a("p",[t._v("(Figure 13)")]),t._v(" "),a("p",[a("strong",[t._v("Step 7:")]),t._v(" Install vehicle Arms to the main body. Take the ESC and push it in the Arm tube as shown in Figure 14 and make sure that the ESC cables are not too long since we will push them back in as shown in Figure 15.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(995),alt:"Arms 1"}})]),t._v(" "),a("p",[t._v("(Figure 14)")]),t._v(" "),a("p",[a("img",{attrs:{src:r(996),alt:"Arms 2"}})]),t._v(" "),a("p",[t._v("(Figure 15)")]),t._v(" "),a("p",[a("strong",[t._v("Step 8:")]),t._v(" Assemble arm to main body.")]),t._v(" "),a("p",[t._v("With 4 more U-shaped nylon straps attach the arm with the motor installed to the body of the vehicle as shown in Figure 16, this way you also attach the bottom plate to the top plate.")]),t._v(" "),a("p",[t._v("Keep in mind to have the arm tube a bit pushed in to that it can be kept securely in place as shown in the Red Square from Figure 16.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(997),alt:"Arms 3"}})]),t._v(" "),a("p",[t._v("(Figure 16)")]),t._v(" "),a("p",[a("strong",[t._v("Step 9:")]),t._v(" Connect Motors cables.")]),t._v(" "),a("p",[t._v("After the 4 arms are mounted on to the main body, connect the cables (red, blue, black) and push them into the arm tube, see Figures 17.")]),t._v(" "),a("p",[t._v("The 3 cables that are color-coded go connected to the ESC.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(998),alt:"Motors 1"}})]),t._v(" "),a("p",[t._v("(Figure 17)")]),t._v(" "),a("p",[a("strong",[t._v("Step 10:")]),t._v(" Mounting the GPS on the frame. For this, we will need the Pixhawk 4 GPS and the mounting plate.")]),t._v(" "),a("p",[t._v("Mount GPS mast to the plate, use the 4 screws see the red circle in Figure 18, keep in mind that the plate is mounted to the battery holder tubes as indicated by the arrows in Figure 18.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(999),alt:"GPS 1"}})]),t._v(" "),a("p",[t._v("(Figure 18)")]),t._v(" "),a("p",[t._v("Use the tape and stick the GPS to the top of the GPS mast, see Figure 19.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1e3),alt:"GPS 2"}})]),t._v(" "),a("p",[t._v("(Figure 19)")]),t._v(" "),a("p",[a("strong",[t._v("Step 11:")]),t._v(" Pixhawk 4 wiring. The Pixhawk 4, which has several different wires and connections with it. Included below is a picture of every wire needed with the Pixhawk and how it looks when connected.")]),t._v(" "),a("p",[t._v("Plugin Telemetry and GPS module to the flight controller as seen in Figure 20; plug in the RC receiver, all 4 ESCs to the flight controller as well as the power module as shown in Figure 21.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1001),alt:"Pixhawk 4 wiring 1"}})]),t._v(" "),a("p",[t._v("(Figure 20)")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1002),alt:"Pixhawk 4 wiring 2"}})]),t._v(" "),a("p",[t._v("(Figure 21)")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1003),alt:"Assembled Kit"}})]),t._v(" "),a("p",[t._v("(Fully assembled X500 Kit)")]),t._v(" "),a("p",[a("span",{attrs:{id:"configure"}})]),t._v(" "),a("h2",{attrs:{id:"install-configure-px4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-configure-px4"}},[t._v("#")]),t._v(" Install/Configure PX4")]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v(" is used to install the PX4 autopilot and configure/tune it for the QAV250 frame. "),a("a",{attrs:{href:"http://qgroundcontrol.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download and install"),a("OutboundLink")],1),t._v(" "),a("em",[t._v("QGroundControl")]),t._v(" for your platform.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Full instructions for installing and configuring PX4 can be found in "),a("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("Basic Configuration")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("First update the firmware and airframe:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("固件")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("机架")])],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("You will need to select the "),a("em",[t._v("Holybro S500")]),t._v(" airframe ("),a("strong",[t._v("Quadrotor x > Holybro S500")]),t._v(").")])]),t._v(" "),a("p",[a("img",{attrs:{src:r(1004),alt:"QGroundControl - Select HolyBro S500 airframe"}})]),t._v(" "),a("p",[t._v("Then perform the mandatory setup/calibration:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[t._v("传感器方向")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config/compass.html"}},[t._v("罗盘")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config/accelerometer.html"}},[t._v("加速度计 Accelerometer")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config/level_horizon_calibration.html"}},[t._v("水平平面校准")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[t._v("无线电系统设置")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("飞行模式")])],1)]),t._v(" "),a("p",[t._v("Ideally you should also do:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/esc_calibration.html"}},[t._v("电调（ESC）校准")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config/battery.html"}},[t._v("电池")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[t._v("安全")])],1)]),t._v(" "),a("h2",{attrs:{id:"调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[t._v("#")]),t._v(" 调试")]),t._v(" "),a("p",[t._v("Airframe selection sets "),a("em",[t._v("default")]),t._v(" autopilot parameters for the frame. These are good enough to fly with, but it is a good idea to tune the parameters for a specific frame build.")]),t._v(" "),a("p",[t._v("For general information on tuning see: "),a("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("Multicopter PID Tuning Guide")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"acknowledgements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[t._v("#")]),t._v(" Acknowledgements")]),t._v(" "),a("p",[t._v("This build log was provided by the Dronecode Test Flight Team.")])])}),[],!1,null,null,null);e.default=_.exports},977:function(t,e,r){t.exports=r.p+"assets/img/x500_hero.69530112.png"},978:function(t,e,r){t.exports=r.p+"assets/img/x500_hardware_frame.c19d2b23.png"},979:function(t,e,r){t.exports=r.p+"assets/img/x500_hardware_package.473831eb.png"},980:function(t,e,r){t.exports=r.p+"assets/img/x500_hardware_electronics.d3bd05f2.png"},981:function(t,e,r){t.exports=r.p+"assets/img/x500_tools.4aeb072b.png"},982:function(t,e,r){t.exports=r.p+"assets/img/x500_step_1_fig1.482ae12f.jpg"},983:function(t,e,r){t.exports=r.p+"assets/img/x500_step_1_fig2.237a0c02.jpg"},984:function(t,e,r){t.exports=r.p+"assets/img/x500_step_2_fig3.e73718d3.png"},985:function(t,e,r){t.exports=r.p+"assets/img/x500_fig4.3c7f3471.png"},986:function(t,e,r){t.exports=r.p+"assets/img/x500_fig5.87568fbe.jpg"},987:function(t,e,r){t.exports=r.p+"assets/img/x500_fig6.ea31e3f7.png"},988:function(t,e,r){t.exports=r.p+"assets/img/x500_fig7.025d7f2c.jpeg"},989:function(t,e,r){t.exports=r.p+"assets/img/x500_fig8.68164152.png"},990:function(t,e,r){t.exports=r.p+"assets/img/x500_fig9.bf64b6e1.png"},991:function(t,e,r){t.exports=r.p+"assets/img/x500_fig10.d83fe916.jpg"},992:function(t,e,r){t.exports=r.p+"assets/img/x500_fig11.d9478acb.jpg"},993:function(t,e,r){t.exports=r.p+"assets/img/x500_fig12.3b1d8467.jpg"},994:function(t,e,r){t.exports=r.p+"assets/img/x500_fig13_PWM_cable_with_tape.09a2c30b.jpg"},995:function(t,e,r){t.exports=r.p+"assets/img/x500_fig14.7b672daa.jpg"},996:function(t,e,r){t.exports=r.p+"assets/img/x500_fig15.455934c1.jpg"},997:function(t,e,r){t.exports=r.p+"assets/img/x500_fig16.03c26b1f.jpg"},998:function(t,e,r){t.exports=r.p+"assets/img/x500_fig17.1b61e365.jpg"},999:function(t,e,r){t.exports=r.p+"assets/img/x500_fig18.cc106d67.jpg"}}]);