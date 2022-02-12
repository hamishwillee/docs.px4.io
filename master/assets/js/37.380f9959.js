(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1001:function(t,e,o){t.exports=o.p+"assets/img/x500-kit.db716e34.png"},1002:function(t,e,o){t.exports=o.p+"assets/img/x500_v2_whats_inside.45ceda06.png"},1003:function(t,e,o){t.exports=o.p+"assets/img/payload_holder_required_stuff.767388fc.png"},1004:function(t,e,o){t.exports=o.p+"assets/img/payload_holder_assembled.6da5d19f.png"},1005:function(t,e,o){t.exports=o.p+"assets/img/topplate_holder_stuff.559152d0.png"},1006:function(t,e,o){t.exports=o.p+"assets/img/powerboard-mountbase.573983e6.png"},1007:function(t,e,o){t.exports=o.p+"assets/img/pdb_bottom_plate.ea60102a.png"},1008:function(t,e,o){t.exports=o.p+"assets/img/bottom_plate_holder_final.a62d9250.png"},1009:function(t,e,o){t.exports=o.p+"assets/img/landing_gear_materials.c9218cf3.png"},1010:function(t,e,o){t.exports=o.p+"assets/img/attached_landing_gear.46eadb9e.png"},1011:function(t,e,o){t.exports=o.p+"assets/img/needed_stuff_top_plate.947cb8ea.png"},1012:function(t,e,o){t.exports=o.p+"assets/img/guide_for_arm_mount.22901662.png"},1013:function(t,e,o){t.exports=o.p+"assets/img/finalized_top_plate.4be7bc1f.png"},1014:function(t,e,o){t.exports=o.p+"assets/img/pixhawk5x_stickertapes.fadddda8.png"},1015:function(t,e,o){t.exports=o.p+"assets/img/gps_mount_plate.4099d572.png"},1016:function(t,e,o){t.exports=o.p+"assets/img/finalized_x500v2_kit.2c832220.png"},1017:function(t,e,o){t.exports=o.p+"assets/img/x500v2_airframe_qgc.a629fd92.png"},1776:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"holybro-x500-v2-pixhawk-5x-build"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#holybro-x500-v2-pixhawk-5x-build"}},[t._v("#")]),t._v(" Holybro X500 V2 (Pixhawk 5X Build)")]),t._v(" "),r("p",[t._v("This topic provides full instructions for building the "),r("a",{attrs:{href:"http://shop.holybro.com/x500-v2-kit_p1288.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro X500 V2 ARF Kit"),r("OutboundLink")],1),t._v(" and configuring PX4 using "),r("em",[t._v("QGroundControl")]),t._v(".")]),t._v(" "),r("p",[t._v('The ARF ("Almost Ready to Fly") kit provides the shortest and straightforward assembly experience for those who want to jump into drone development and not spend that much time on setting up the hardware.\nIt includes the frame, motors, ESCs, propellers and power distribution board.')]),t._v(" "),r("p",[t._v("In addition to the kit you will need to have the flight controller, radio transmitters, GPS and RC controller.\nThe ARF kit can be used with most flight controllers supported by PX4.")]),t._v(" "),r("h2",{attrs:{id:"key-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-information"}},[t._v("#")]),t._v(" Key information")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Kit:")]),t._v(" "),r("a",{attrs:{href:"http://shop.holybro.com/x500-v2-kit_p1288.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro X500 V2 ARF Kit"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("strong",[t._v("Flight controller:")]),t._v(" "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk5x.html"}},[t._v("Pixhawk 5X")])],1),t._v(" "),r("li",[r("strong",[t._v("Assembly time (approx.):")]),t._v(" 55 min (25 minutes for frame, 30 minutes for autopilot installation/configuration)")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(1001),alt:"Full X500 V2 Kit"}})]),t._v(" "),r("h2",{attrs:{id:"bill-of-materials"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bill-of-materials"}},[t._v("#")]),t._v(" Bill of materials")]),t._v(" "),r("p",[t._v("The Holybro "),r("a",{attrs:{href:"http://shop.holybro.com/x500-v2-kit_p1288.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("X500 V2 Kit"),r("OutboundLink")],1),t._v(" includes almost all the required components:")]),t._v(" "),r("ul",[r("li",[t._v("X500V2 Frame Kit\n"),r("ul",[r("li",[t._v("Body - Full Carbon Fiber Top & Bottom plate (144 x 144mm, 2mm thick)")]),t._v(" "),r("li",[t._v("Arm - High strength & ultra-lightweight 16mm carbon fiber tubes")]),t._v(" "),r("li",[t._v("Landing gear - 16mm & 10mm diameter carbon fiber tubes")]),t._v(" "),r("li",[t._v("Platform board - With mounting holes for GPS & popular companion computer")]),t._v(" "),r("li",[t._v("Dual 10mm Ø rod x 250 mm long rail mounting system")]),t._v(" "),r("li",[t._v("Battery mount with two Battery Straps")]),t._v(" "),r("li",[t._v("Hand tools for installation")])])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://shop.holybro.com/motor2216-880kv-1pc_p1154.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Motors - 2216 KV880 x6"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://shop.holybro.com/blheli-s-esc-20a_p1143.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro BLHeli S ESC 20A x4"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://shop.holybro.com/propeller10452pair_p1155.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Propellers - 1045 x4"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Power Distribution Board – XT60 plug for battery & XT30 plug for ESCs & peripherals")]),t._v(" "),r("li",[t._v("Camera mount (optional and the 3D file can be downloaded from "),r("a",{attrs:{href:"http://www.holybro.com/3D_Print/Holybro_X500_V2_3D%20Print.rar",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(")")])]),t._v(" "),r("p",[t._v("Other parts in this build("),r("strong",[t._v("Not included in the ARF kit")]),t._v("):")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk5x.html"}},[t._v("Pixhawk 5X autopilot")])],1),t._v(" "),r("li",[r("a",{attrs:{href:"http://shop.holybro.com/holybro-m8n-gps_p1094.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("M8N GPS"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://shop.holybro.com/pm02d-power-module_p1285.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Power Module - PM02D"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://shop.holybro.com/sik-telemetry-radio-v3_p1103.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("433/915 MHz Telemetry Radio"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("Additionally you will need a battery and receiver ("),r("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[t._v("compatible radio system")]),t._v(") if you want to control the drone manually.")],1),t._v(" "),r("h2",{attrs:{id:"kit-hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kit-hardware"}},[t._v("#")]),t._v(" Kit Hardware")]),t._v(" "),r("p",[t._v("This section lists all hardware for the frame and the autopilot installation.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Item")]),t._v(" "),r("th",[t._v("Description")]),t._v(" "),r("th",[t._v("Quantity")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Bottom plate")]),t._v(" "),r("td",[t._v("Carbon fiber (2mm thick)")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Top plate")]),t._v(" "),r("td",[t._v("Carbon fiber (1.5mm thick)")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Arm")]),t._v(" "),r("td",[t._v("Carbon fiber tube (Assembled with motors mounted)")]),t._v(" "),r("td",[t._v("4")])]),t._v(" "),r("tr",[r("td",[t._v("Landing gear - Vertical pole")]),t._v(" "),r("td",[t._v("Carbon fiber tube + engineering plastic")]),t._v(" "),r("td",[t._v("2")])]),t._v(" "),r("tr",[r("td",[t._v("Landing gear - Cross bar")]),t._v(" "),r("td",[t._v("Carbon fiber tube + engineering plastic + foam")]),t._v(" "),r("td",[t._v("2")])]),t._v(" "),r("tr",[r("td",[t._v("Mounting Rail")]),t._v(" "),r("td",[t._v("Diameter: 10mm length: 250mm")]),t._v(" "),r("td",[t._v("2")])]),t._v(" "),r("tr",[r("td",[t._v("Battery mounting board")]),t._v(" "),r("td",[t._v("Thickness: 2mm")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Battery pad")]),t._v(" "),r("td",[t._v("3mm Silicone sheet black")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Platform board")]),t._v(" "),r("td",[t._v("Thickness: 2mm")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Hanger & rubber ring gasket")]),t._v(" "),r("td",[t._v("Inner hole diameter: 10mm black")]),t._v(" "),r("td",[t._v("8")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:o(1002),alt:"X500V2 ARF Kit Full Package Contents"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 1")]),t._v(": X500 V2 ARF Kit what's inside")]),t._v(" "),r("h3",{attrs:{id:"electronics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#electronics"}},[t._v("#")]),t._v(" Electronics")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Item Description")]),t._v(" "),r("th",[t._v("Quantity")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Pixhawk5x & Assorted Cables")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("M8N GPS Module")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Power Module PM02D (with pre-soldered ESC power cables)")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Motors 2216 KV880（V2 Update)")]),t._v(" "),r("td",[t._v("4")])]),t._v(" "),r("tr",[r("td",[t._v("Holybro BLHeli S ESC 20A x4")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("433MHz Telemetry Radio / 915MHz Telemetry Radio")]),t._v(" "),r("td",[t._v("1")])])])]),t._v(" "),r("h3",{attrs:{id:"tools-needed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tools-needed"}},[t._v("#")]),t._v(" Tools needed")]),t._v(" "),r("p",[t._v("Tools are included to do the assembly, however you may need:")]),t._v(" "),r("ul",[r("li",[t._v("Wire cutters")]),t._v(" "),r("li",[t._v("Precision tweezers")])]),t._v(" "),r("h2",{attrs:{id:"assembly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#assembly"}},[t._v("#")]),t._v(" Assembly")]),t._v(" "),r("p",[t._v("Estimate time to assemble is 55 min (25 minutes for frame, 30 minutes for autopilot installation/configuration)")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Start by assembling the payload & battery holder.\nPush the rubbers into grippers (Do not use sharp items to push them in!).\nNext, pass the holders through the holder bars with the battery holder bases as Figure 3.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1003),alt:"Landing Figure 1: Components"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 2")]),t._v(": Payload holder components")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1004),alt:"Landing Figure 2: Assembled"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 3")]),t._v(": Payload holder assembled")])]),t._v(" "),r("li",[r("p",[t._v("The next is to go for attaching the bottom plate to the payload holder.")]),t._v(" "),r("p",[t._v("You will need the parts as shown in Figure 4.\nThen mount the base for power distribution board using nylon nuts as Figure 5.\nFinally using 8 hex screws you can join the bottom plate to the payload holder (Figure 7)")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1005),alt:"Materials to attach bottom plate"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 4")]),t._v(": Needed Materials")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1006),alt:"PDB mountbase"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 5")]),t._v(": PDB mount base")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1007),alt:"PDB attachment"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 6")]),t._v(": Mounted pdb with nylon nuts")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1008),alt:"Bottom plate Final"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 7")]),t._v(": Mounted Plate on payload holder")])]),t._v(" "),r("li",[r("p",[t._v("Let's gather the stuff needed for mounting landing gear as Figure 8.\nUse the hex screws to join landing gears to the bottom plate.\nYou also need to open three hex screws on each of the leg stands so you can push them into carbon fiber pipes.\nDo not forget to tighten them back again.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1009),alt:"Attach Landing Gear Stuff"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 8")]),t._v(": Required parts for landing gear attachment")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1010),alt:"Lanfing great to bottom plate"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 9")]),t._v(": Landing gear attachment to the body")])]),t._v(" "),r("li",[r("p",[t._v("We will gather all the arms now to mount the top plate.\nPlease pay attention that the motor numbers on arms are a match with the ones mentioned on the top plate.\nFortunately, motors are mounted and ESCs have been connected in advance.\nStart by passing through all the screws as you have the arms fixed in their own places (They have a guide as shown in Figure 11 to ensure they are in place) and tighten all nylon nuts a bit.\nThen you can connect XT30 power connectors to the power board.\nPlease keep in mind that the signal wires have to be passed through the top plate such that we can connect them later to Pixhawk.")]),t._v(" "),r("img",{attrs:{src:o(1011),width:"700",title:"Arms and top plate materials"}}),t._v(" "),r("p",[r("em",[t._v("Figure 10")]),t._v(": Connecting arms needed materials.")]),t._v(" "),r("img",{attrs:{src:o(1012),width:"700",title:"Guide for the arms mount"}}),t._v(" "),r("p",[r("em",[t._v("Figure 11")]),t._v(": Guide for the arms mount")])]),t._v(" "),r("li",[r("p",[t._v("Tighten all 16 screws and nuts by using both hex wrench and nut driver.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1013),alt:"Top plae mounted"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 12")]),t._v(": Mounted top plate")])]),t._v(" "),r("li",[r("p",[t._v("Next you can mount your pixhawk on the top plate by using the stickers.\nIt is recommended to have the direction of your Pixhawk's arrow the same as the one mentioned on the top plate.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1014),alt:"Flight controller mounting stickers"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 13")]),t._v(": Sticker tapes on Pixhawk")])]),t._v(" "),r("li",[r("p",[t._v("If you want to mount the GPS on the companion computer plate, you can now secure the GPS mount onto it using 4 screws and nuts.")]),t._v(" "),r("img",{attrs:{src:o(1015),width:"400",title:"Secure GPS mount onto companion plate"}}),t._v(" "),r("p",[r("em",[t._v("Figure 14")]),t._v(": Secure GPS mount onto companion plate")])]),t._v(" "),r("li",[r("p",[t._v("Use the tape and stick the GPS to the top of the GPS mast and mount the GPS mast.\nMake sure the arrow on the gps is pointing forward (Figure 15).")]),t._v(" "),r("img",{attrs:{src:o(391),width:"400",title:"Figure 16: GPS and mast"}}),t._v(" "),r("p",[r("em",[t._v("Figure 15")]),t._v(": GPS and mast")])]),t._v(" "),r("li",[r("p",[t._v("Finally, you can connect the Pixhawk interfaces such as telemetry radio to 'TELEM1' and motors signal cables accordingly.")])])]),t._v(" "),r("p",[t._v("Please refer to "),r("RouterLink",{attrs:{to:"/en/assembly/quick_start_pixhawk5x.html"}},[t._v("Pixhawk 5X Quick Start")]),t._v(" for more information.")],1),t._v(" "),r("p",[t._v("That's it.\nThe fully assembled kit is shown below (Depth camera not included in the kit):")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1016),alt:"Assembled Kit"}})]),t._v(" "),r("p",[r("a",{attrs:{id:"configure"}})]),t._v(" "),r("h2",{attrs:{id:"install-configure-px4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-configure-px4"}},[t._v("#")]),t._v(" Install/Configure PX4")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("Full instructions for installing and configuring PX4 can be found in "),r("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Basic Configuration")]),t._v(".")],1)]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v(" is used to install the PX4 autopilot and configure/tune it for the X500 frame.\n"),r("a",{attrs:{href:"http://qgroundcontrol.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download and install"),r("OutboundLink")],1),t._v(" "),r("em",[t._v("QGroundControl")]),t._v(" for your platform.")]),t._v(" "),r("p",[t._v("First update the firmware and airframe:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[t._v("Firmware")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[t._v("Airframe")]),t._v(" - You will need to select the "),r("em",[t._v("Holybro S500")]),t._v(" airframe ("),r("strong",[t._v("Quadrotor x > Holybro S500")]),t._v(")\n"),r("img",{attrs:{src:o(1017),alt:"QGroundControl - Select HolyBro S500 airframe"}})],1)]),t._v(" "),r("p",[t._v("Then perform the mandatory setup/calibration:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html"}},[t._v("Sensor Orientation")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/compass.html"}},[t._v("Compass")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/accelerometer.html"}},[t._v("Accelerometer")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/level_horizon_calibration.html"}},[t._v("Level Horizon Calibration")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/radio.html"}},[t._v("Radio Setup")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/flight_mode.html"}},[t._v("Flight Modes")])],1)]),t._v(" "),r("p",[t._v("Ideally you should also do:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/advanced_config/esc_calibration.html"}},[t._v("ESC Calibration")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/battery.html"}},[t._v("Battery")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/safety.html"}},[t._v("Safety")])],1)]),t._v(" "),r("h2",{attrs:{id:"tuning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tuning"}},[t._v("#")]),t._v(" Tuning")]),t._v(" "),r("p",[t._v("Airframe selection sets "),r("em",[t._v("default")]),t._v(" autopilot parameters for the frame.\nThese are good enough to fly with, but it is a good idea to tune the parameters for a specific frame build.\nFor instructions on how, see: "),r("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter_basic.html"}},[t._v("Multicopter Basic PID Tuning")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"acknowledgements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[t._v("#")]),t._v(" Acknowledgements")]),t._v(" "),r("p",[t._v("This build log was provided by PX4 Team.")])])}),[],!1,null,null,null);e.default=a.exports},391:function(t,e,o){t.exports=o.p+"assets/img/gps2.9ef57077.jpg"}}]);