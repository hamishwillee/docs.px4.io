(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1939:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"voxl-2-starling-px4-development-drone"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#voxl-2-starling-px4-development-drone"}},[t._v("#")]),t._v(" VOXL 2 Starling PX4 Development Drone")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://modalai.com/starling",target:"_blank",rel:"noopener noreferrer"}},[t._v("Starling"),o("OutboundLink")],1),t._v(" is a SLAM development drone supercharged by "),o("RouterLink",{attrs:{to:"/en/flight_controller/modalai_voxl_2.html"}},[t._v("VOXL 2")]),t._v(" and PX4 with SWAP-optimized sensors and payloads optimized for indoor and outdoor autonomous navigation.\nPowered by Blue UAS Framework autopilot, VOXL 2, the Starling weighs only 275g and boasts an impressive 30 minutes of autonomous indoor flight time.")],1),t._v(" "),o("p",[o("img",{attrs:{src:r(645),alt:"Overview"}})]),t._v(" "),o("p",[t._v("The VOXL 2 Starling is a PX4 development drone that houses a "),o("RouterLink",{attrs:{to:"/en/flight_controller/modalai_voxl_2.html"}},[t._v("VOXL 2")]),t._v(" companion computer and PX4 flight controller, image sensors, GPS, and connectivity modem and is ready-to-fly out-of-the-box.\nThe Starling features ModalAI’s "),o("a",{attrs:{href:"https://docs.modalai.com/voxl-developer-bootcamp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("open SDK"),o("OutboundLink")],1),t._v(" that has pre-configured autonomy models for computer vision assisted flight.\nThis development drone is meant to help you get to market faster and accelerate your application development and prototyping.")],1),t._v(" "),o("p",[t._v("This guide explains the minimal additional setup required to get the UAV ready to fly. It also covers a hardware overview, first flight, setting up WiFi, and more.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("For complete and regularly updated documentation, please visit "),o("a",{attrs:{href:"https://docs.modalai.com/starling-v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.modalai.com/starling-v2"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("If you are new to VOXL, be sure to familiarize yourself with the core features of VOXL hardware and software by reviewing the "),o("a",{attrs:{href:"https://docs.modalai.com/voxl-developer-bootcamp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VOXL Bootcamp"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://modalai.com/starling",target:"_blank",rel:"noopener noreferrer"}},[t._v("modalai.com/starling"),o("OutboundLink")],1)]),t._v(" "),o("h2",{attrs:{id:"hardware-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-overview"}},[t._v("#")]),t._v(" Hardware Overview")]),t._v(" "),o("p",[o("img",{attrs:{src:r(646),alt:"Hardware Overview"}})]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Callout")]),t._v(" "),o("th",[t._v("Description")]),t._v(" "),o("th",[t._v("MPN")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("A")]),t._v(" "),o("td",[t._v("VOXL 2")]),t._v(" "),o("td",[t._v("MDK-M0054-1")])]),t._v(" "),o("tr",[o("td",[t._v("B")]),t._v(" "),o("td",[t._v("VOXL 4-in-1 ESC")]),t._v(" "),o("td",[t._v("MDK-M0117-1")])]),t._v(" "),o("tr",[o("td",[t._v("C")]),t._v(" "),o("td",[t._v("Barometer Shield Cap")]),t._v(" "),o("td",[t._v("M10000533")])]),t._v(" "),o("tr",[o("td",[t._v("D")]),t._v(" "),o("td",[t._v("ToF Image Sensor (PMD)")]),t._v(" "),o("td",[t._v("MDK-M0040")])]),t._v(" "),o("tr",[o("td",[t._v("E")]),t._v(" "),o("td",[t._v("Tracking Image Sensor (OV7251)")]),t._v(" "),o("td",[t._v("M0014")])]),t._v(" "),o("tr",[o("td",[t._v("F")]),t._v(" "),o("td",[t._v("Hires Image Sensor (IMX214)")]),t._v(" "),o("td",[t._v("M0025-2")])]),t._v(" "),o("tr",[o("td",[t._v("G")]),t._v(" "),o("td",[t._v("AC600 WiFi Dongle")]),t._v(" "),o("td",[t._v("AWUS036EACS")])]),t._v(" "),o("tr",[o("td",[t._v("H")]),t._v(" "),o("td",[t._v("GNSS GPS Module & Compass")]),t._v(" "),o("td",[t._v("M10-5883")])]),t._v(" "),o("tr",[o("td",[t._v("I")]),t._v(" "),o("td",[t._v("915MHz ELRS Receiver")]),t._v(" "),o("td",[t._v("BetaFPV Nano RX")])]),t._v(" "),o("tr",[o("td",[t._v("J")]),t._v(" "),o("td",[t._v("USB C Connector on VOXL 2 (not shown)")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("K")]),t._v(" "),o("td",[t._v("VOXL Power Module")]),t._v(" "),o("td",[t._v("MCCA-M0041-5-B-T")])]),t._v(" "),o("tr",[o("td",[t._v("L")]),t._v(" "),o("td",[t._v("4726FM Propellor")]),t._v(" "),o("td",[t._v("M10000302")])]),t._v(" "),o("tr",[o("td",[t._v("M")]),t._v(" "),o("td",[t._v("Motor 1504")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[t._v("N")]),t._v(" "),o("td",[t._v("XT30 Power Connector")]),t._v(" "),o("td")])])]),t._v(" "),o("h2",{attrs:{id:"datasheet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#datasheet"}},[t._v("#")]),t._v(" Datasheet")]),t._v(" "),o("h3",{attrs:{id:"specifications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[t._v("#")]),t._v(" Specifications")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Component")]),t._v(" "),o("th",[t._v("Specification")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Autopilot")]),t._v(" "),o("td",[t._v("VOXL2")])]),t._v(" "),o("tr",[o("td",[t._v("Take-off Weight")]),t._v(" "),o("td",[t._v("275g (172g without battery)")])]),t._v(" "),o("tr",[o("td",[t._v("Diagonal Size")]),t._v(" "),o("td",[t._v("211mm")])]),t._v(" "),o("tr",[o("td",[t._v("Flight Time")]),t._v(" "),o("td",[t._v(">30 minutes")])]),t._v(" "),o("tr",[o("td",[t._v("Motors")]),t._v(" "),o("td",[t._v("1504")])]),t._v(" "),o("tr",[o("td",[t._v("Propellers")]),t._v(" "),o("td",[t._v("120mm")])]),t._v(" "),o("tr",[o("td",[t._v("Frame")]),t._v(" "),o("td",[t._v("3mm Carbon Fiber")])]),t._v(" "),o("tr",[o("td",[t._v("ESC")]),t._v(" "),o("td",[t._v("ModalAI VOXL 4-in-1 ESC V2")])]),t._v(" "),o("tr",[o("td",[t._v("GPS")]),t._v(" "),o("td",[t._v("UBlox M10")])]),t._v(" "),o("tr",[o("td",[t._v("RC Receiver")]),t._v(" "),o("td",[t._v("915mhz ELRS")])]),t._v(" "),o("tr",[o("td",[t._v("Power Module")]),t._v(" "),o("td",[t._v("ModalAI Power Module v3 - 5V/6A")])]),t._v(" "),o("tr",[o("td",[t._v("Battery")]),t._v(" "),o("td",[t._v("Sony VTC6 3000mah 2S, or any 2S 18650 battery with XT30 connector")])]),t._v(" "),o("tr",[o("td",[t._v("Height")]),t._v(" "),o("td",[t._v("83mm")])]),t._v(" "),o("tr",[o("td",[t._v("Width")]),t._v(" "),o("td",[t._v("187mm (Props folded)")])]),t._v(" "),o("tr",[o("td",[t._v("Length")]),t._v(" "),o("td",[t._v("142mm (Props folded)")])])])]),t._v(" "),o("h3",{attrs:{id:"hardware-wiring-diagram"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-wiring-diagram"}},[t._v("#")]),t._v(" Hardware Wiring Diagram")]),t._v(" "),o("p",[o("img",{attrs:{src:r(647),alt:"Hardware Overview"}})]),t._v(" "),o("h2",{attrs:{id:"tutorials"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tutorials"}},[t._v("#")]),t._v(" Tutorials")]),t._v(" "),o("h3",{attrs:{id:"elrs-set-up"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#elrs-set-up"}},[t._v("#")]),t._v(" ELRS Set Up")]),t._v(" "),o("p",[t._v("Binding your ELRS (ExpressLRS) receiver to a transmitter is a crucial step in preparing your VOXL 2 based PX4 Autonomy Developer Kit by ModalAI for flight.\nThis process ensures a secure and responsive connection between your drone and its control system.")]),t._v(" "),o("p",[t._v("Follow this guide to bind your ELRS receiver to your transmitter.")]),t._v(" "),o("h4",{attrs:{id:"setting-up-the-receiver"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-receiver"}},[t._v("#")]),t._v(" Setting up the Receiver")]),t._v(" "),o("ol",[o("li",[o("p",[o("strong",[t._v("Power On the Receiver")]),t._v(": Once your drone is powered on, you'll notice the ELRS receiver's blue LED flashing.\nThis is an indication that the receiver is on but has not yet established a connection with a transmitter.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(648),alt:"Starling Receiver"}})])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Enter Binding Mode")]),t._v(": To initiate binding, open a terminal and execute the "),o("code",[t._v("adb shell")]),t._v(" and "),o("code",[t._v("voxl-elrs -bind")]),t._v(" commands.\nYou'll observe the receiver's LED switch to a flashing in a heartbeat pattern, signaling that it is now in binding mode.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(649),alt:"Boot Screenshot"}})])])]),t._v(" "),o("h4",{attrs:{id:"setting-up-the-transmitter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-transmitter"}},[t._v("#")]),t._v(" Setting up the Transmitter")]),t._v(" "),o("ol",[o("li",[o("p",[o("strong",[t._v("Access the Menu")]),t._v(": On your Commando 8 radio transmitter included in the kit, press the left mode button to open the menu system.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(650),alt:"Press Menu on RC"}})])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Navigate to ExpressLRS")]),t._v(': Use the right button to select the first menu entry, which should be "ExpressLRS."')])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Find the Bind Option")]),t._v(': With the "ExpressLRS" option selected, scroll down to the bottom of the menu to locate the "Bind" section. This can be done by pressing the right button downwards until you reach the "Bind" option.')]),t._v(" "),o("p",[o("img",{attrs:{src:r(651),alt:"Press Binding on RC"}})])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Initiate Binding")]),t._v(': Select "Bind" to put the transmitter into binding mode. You will know the process has been successful when the transmitter emits a beep, indicating a successful bind.')])])]),t._v(" "),o("h4",{attrs:{id:"completing-the-binding-process"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#completing-the-binding-process"}},[t._v("#")]),t._v(" Completing the Binding Process")]),t._v(" "),o("p",[t._v("Once the transmitter is set to bind mode, the ELRS receiver on the drone will change its LED from flashing to a steady light, signifying a successful connection between the receiver and the transmitter.")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Power Cycle")]),t._v(": After the binding process is complete, it's essential to power cycle the VOXL 2 before attempting to fly.\nThis means turning off the VOXL 2 and then turning it back on.\nThis step ensures that all settings are properly applied and that the system recognizes the newly established connection.")])]),t._v(" "),o("p",[t._v("You should now have a successfully bound ELRS receiver to your transmitter, ready for use with the PX4 Autonomy Kit by ModalAI.\nA secure connection is vital for the reliable operation of your drone, so always confirm the binding status before flight.")]),t._v(" "),o("h3",{attrs:{id:"videos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#videos"}},[t._v("#")]),t._v(" Videos")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://youtu.be/M9OiMpbEYOg",target:"_blank",rel:"noopener noreferrer"}},[t._v("VOXL 2 Starling Hardware Overview"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://youtu.be/Cpbbye3Z6co",target:"_blank",rel:"noopener noreferrer"}},[t._v("VOXL 2 Starling First Flight Tutorial"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://youtu.be/7OwGS-kcFVg",target:"_blank",rel:"noopener noreferrer"}},[t._v("VOXL 2 Starling ELRS Set Up"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports},645:function(t,e,r){t.exports=r.p+"assets/img/starling_front_hero.ae29d4dd.jpg"},646:function(t,e,r){t.exports=r.p+"assets/img/mrb_d0005_4_v2_c6_m22__callouts_a.2a25a37f.jpg"},647:function(t,e,r){t.exports=r.p+"assets/img/d0005_compute_wiring_d.585598d0.jpg"},648:function(t,e,r){t.exports=r.p+"assets/img/starling-photo.1b319093.png"},649:function(t,e,r){t.exports=r.p+"assets/img/screenshot-boot.c8b3b6b9.png"},650:function(t,e,r){t.exports=r.p+"assets/img/radio-1.b30f7d7f.png"},651:function(t,e,r){t.exports=r.p+"assets/img/radio-2.4d42dcb8.png"}}]);