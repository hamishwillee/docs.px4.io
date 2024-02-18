(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{2701:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"voxl-2-starling-px4-development-drone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#voxl-2-starling-px4-development-drone"}},[t._v("#")]),t._v(" VOXL 2 Starling PX4 Development Drone")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://modalai.com/starling",target:"_blank",rel:"noopener noreferrer"}},[t._v("Starling"),a("OutboundLink")],1),t._v(" is a SLAM development drone supercharged by "),a("RouterLink",{attrs:{to:"/ko/flight_controller/modalai_voxl_2.html"}},[t._v("VOXL 2")]),t._v(" and PX4 with SWAP-optimized sensors and payloads optimized for indoor and outdoor autonomous navigation. Powered by Blue UAS Framework autopilot, VOXL 2, the Starling weighs only 275g and boasts an impressive 30 minutes of autonomous indoor flight time.")],1),t._v(" "),a("p",[a("img",{attrs:{src:r(655),alt:"Overview"}})]),t._v(" "),a("p",[t._v("The VOXL 2 Starling is a PX4 development drone that houses a "),a("RouterLink",{attrs:{to:"/ko/flight_controller/modalai_voxl_2.html"}},[t._v("VOXL 2")]),t._v(" companion computer and PX4 flight controller, image sensors, GPS, and connectivity modem and is ready-to-fly out-of-the-box. The Starling features ModalAI’s "),a("a",{attrs:{href:"https://docs.modalai.com/voxl-developer-bootcamp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("open SDK"),a("OutboundLink")],1),t._v(" that has pre-configured autonomy models for computer vision assisted flight. This development drone is meant to help you get to market faster and accelerate your application development and prototyping.")],1),t._v(" "),a("p",[t._v("This guide explains the minimal additional setup required to get the UAV ready to fly. It also covers a hardware overview, first flight, setting up WiFi, and more.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("For complete and regularly updated documentation, please visit "),a("a",{attrs:{href:"https://docs.modalai.com/starling-v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.modalai.com/starling-v2"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If you are new to VOXL, be sure to familiarize yourself with the core features of VOXL hardware and software by reviewing the "),a("a",{attrs:{href:"https://docs.modalai.com/voxl-developer-bootcamp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VOXL Bootcamp"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://modalai.com/starling",target:"_blank",rel:"noopener noreferrer"}},[t._v("modalai.com/starling"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"hardware-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-overview"}},[t._v("#")]),t._v(" Hardware Overview")]),t._v(" "),a("p",[a("img",{attrs:{src:r(656),alt:"Hardware Overview"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Callout")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("MPN")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("A")]),t._v(" "),a("td",[t._v("VOXL 2")]),t._v(" "),a("td",[t._v("MDK-M0054-1")])]),t._v(" "),a("tr",[a("td",[t._v("B")]),t._v(" "),a("td",[t._v("VOXL 4-in-1 ESC")]),t._v(" "),a("td",[t._v("MDK-M0117-1")])]),t._v(" "),a("tr",[a("td",[t._v("C")]),t._v(" "),a("td",[t._v("Barometer Shield Cap")]),t._v(" "),a("td",[t._v("M10000533")])]),t._v(" "),a("tr",[a("td",[t._v("D")]),t._v(" "),a("td",[t._v("ToF Image Sensor (PMD)")]),t._v(" "),a("td",[t._v("MDK-M0040")])]),t._v(" "),a("tr",[a("td",[t._v("E")]),t._v(" "),a("td",[t._v("Tracking Image Sensor (OV7251)")]),t._v(" "),a("td",[t._v("M0014")])]),t._v(" "),a("tr",[a("td",[t._v("F")]),t._v(" "),a("td",[t._v("Hires Image Sensor (IMX214)")]),t._v(" "),a("td",[t._v("M0025-2")])]),t._v(" "),a("tr",[a("td",[t._v("G")]),t._v(" "),a("td",[t._v("AC600 WiFi Dongle")]),t._v(" "),a("td",[t._v("AWUS036EACS")])]),t._v(" "),a("tr",[a("td",[t._v("H")]),t._v(" "),a("td",[t._v("GNSS GPS Module & Compass")]),t._v(" "),a("td",[t._v("M10-5883")])]),t._v(" "),a("tr",[a("td",[t._v("I")]),t._v(" "),a("td",[t._v("915MHz ELRS Receiver")]),t._v(" "),a("td",[t._v("BetaFPV Nano RX")])]),t._v(" "),a("tr",[a("td",[t._v("J")]),t._v(" "),a("td",[t._v("USB C Connector on VOXL 2 (not shown)")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("K")]),t._v(" "),a("td",[t._v("VOXL Power Module")]),t._v(" "),a("td",[t._v("MCCA-M0041-5-B-T")])]),t._v(" "),a("tr",[a("td",[t._v("L")]),t._v(" "),a("td",[t._v("4726FM Propellor")]),t._v(" "),a("td",[t._v("M10000302")])]),t._v(" "),a("tr",[a("td",[t._v("M")]),t._v(" "),a("td",[t._v("Motor 1504")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("N")]),t._v(" "),a("td",[t._v("XT30 Power Connector")]),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"datasheet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datasheet"}},[t._v("#")]),t._v(" Datasheet")]),t._v(" "),a("h3",{attrs:{id:"specifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[t._v("#")]),t._v(" Specifications")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Component")]),t._v(" "),a("th",[t._v("Specification")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Autopilot")]),t._v(" "),a("td",[t._v("VOXL2")])]),t._v(" "),a("tr",[a("td",[t._v("Take-off Weight")]),t._v(" "),a("td",[t._v("275g (172g without battery)")])]),t._v(" "),a("tr",[a("td",[t._v("Diagonal Size")]),t._v(" "),a("td",[t._v("211mm")])]),t._v(" "),a("tr",[a("td",[t._v("Flight Time")]),t._v(" "),a("td",[t._v(">30 minutes")])]),t._v(" "),a("tr",[a("td",[t._v("Motors")]),t._v(" "),a("td",[t._v("1504")])]),t._v(" "),a("tr",[a("td",[t._v("Propellers")]),t._v(" "),a("td",[t._v("120mm")])]),t._v(" "),a("tr",[a("td",[t._v("Frame")]),t._v(" "),a("td",[t._v("3mm Carbon Fiber")])]),t._v(" "),a("tr",[a("td",[t._v("ESC")]),t._v(" "),a("td",[t._v("ModalAI VOXL 4-in-1 ESC V2")])]),t._v(" "),a("tr",[a("td",[t._v("GPS")]),t._v(" "),a("td",[t._v("UBlox M10")])]),t._v(" "),a("tr",[a("td",[t._v("RC Receiver")]),t._v(" "),a("td",[t._v("915mhz ELRS")])]),t._v(" "),a("tr",[a("td",[t._v("Power Module")]),t._v(" "),a("td",[t._v("ModalAI Power Module v3 - 5V/6A")])]),t._v(" "),a("tr",[a("td",[t._v("Battery")]),t._v(" "),a("td",[t._v("Sony VTC6 3000mah 2S, or any 2S 18650 battery with XT30 connector")])]),t._v(" "),a("tr",[a("td",[t._v("Height")]),t._v(" "),a("td",[t._v("83mm")])]),t._v(" "),a("tr",[a("td",[t._v("Width")]),t._v(" "),a("td",[t._v("187mm (Props folded)")])]),t._v(" "),a("tr",[a("td",[t._v("Length")]),t._v(" "),a("td",[t._v("142mm (Props folded)")])])])]),t._v(" "),a("h3",{attrs:{id:"hardware-wiring-diagram"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-wiring-diagram"}},[t._v("#")]),t._v(" Hardware Wiring Diagram")]),t._v(" "),a("p",[a("img",{attrs:{src:r(657),alt:"Hardware Overview"}})]),t._v(" "),a("h2",{attrs:{id:"tutorial-videos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-videos"}},[t._v("#")]),t._v(" Tutorial Videos")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://youtu.be/M9OiMpbEYOg",target:"_blank",rel:"noopener noreferrer"}},[t._v("VOXL 2 Starling Hardware Overview"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/Cpbbye3Z6co",target:"_blank",rel:"noopener noreferrer"}},[t._v("VOXL 2 Starling First Flight Tutorial"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/7OwGS-kcFVg",target:"_blank",rel:"noopener noreferrer"}},[t._v("VOXL 2 Starling ELRS Set Up"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports},655:function(t,e,r){t.exports=r.p+"assets/img/starling_front_hero.ae29d4dd.jpg"},656:function(t,e,r){t.exports=r.p+"assets/img/mrb_d0005_4_v2_c6_m22__callouts_a.2a25a37f.jpg"},657:function(t,e,r){t.exports=r.p+"assets/img/d0005_compute_wiring_d.585598d0.jpg"}}]);