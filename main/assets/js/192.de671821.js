(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{2473:function(t,e,r){"use strict";r.r(e);var a=r(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cauv-can-pmu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cauv-can-pmu"}},[t._v("#")]),t._v(" CAUV CAN PMU")]),t._v(" "),a("p",[t._v("CAN PMU"),a("sup",[t._v("®")]),t._v(" is a high-precision "),a("RouterLink",{attrs:{to:"/ko/dronecan/"}},[t._v("DroneCAN")]),t._v(" power module developed by CUAV"),a("sup",[t._v("®")]),t._v(". It runs the CUAV ITT compensation algorithm, which enables drones to get the battery data more accurately.")],1),t._v(" "),a("p",[a("img",{attrs:{src:r(425),alt:"CAN PMU"}})]),t._v(" "),a("p",[t._v("It is recommended for use in large commercial vehicles, but might also be used for research vehicles.")]),t._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://store.cuav.net/index.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV store"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.aliexpress.com/item/4000369700535.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV aliexpress "),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"hardware-specifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-specifications"}},[t._v("#")]),t._v(" Hardware Specifications")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Processor:")]),t._v(" STM32F412")]),t._v(" "),a("li",[a("strong",[t._v("Voltage input")]),t._v(": 6~62V(2-15S)")]),t._v(" "),a("li",[a("strong",[t._v("Max current:")]),t._v(" 110A")]),t._v(" "),a("li",[a("strong",[t._v("Voltage accuracy:")]),t._v(" ±0.05V")]),t._v(" "),a("li",[a("strong",[t._v("Current accuracy:")]),t._v(" ±0.1A")]),t._v(" "),a("li",[a("strong",[t._v("Resolution:")]),t._v(" 0.01A/V")]),t._v(" "),a("li",[a("strong",[t._v("Max output power:")]),t._v(" 6000W/90S")]),t._v(" "),a("li",[a("strong",[t._v("Max stable power:")]),t._v(" 5000W")]),t._v(" "),a("li",[a("strong",[t._v("Power port output:")]),t._v(" 5.4V/5A")]),t._v(" "),a("li",[a("strong",[t._v("Operating temp:")]),t._v(" -20~+100")]),t._v(" "),a("li",[a("strong",[t._v("Firmware upgrade:")]),t._v(" Supported.")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Calibration:")]),t._v(" Not needed.")]),t._v(" "),a("li",[a("strong",[t._v("Interface Type:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("IN/OUT:")]),t._v(" XT90(Cable）/Amass 8.0(Module）")]),t._v(" "),a("li",[a("strong",[t._v("Power port:")]),t._v(" 5025850670")]),t._v(" "),a("li",[a("strong",[t._v("CAN:")]),t._v(" GHR-04V-S")])])])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Appearance:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Size:")]),t._v(" 46.5mm * 38.5mm * 22.5mm")]),t._v(" "),a("li",[a("strong",[t._v("Weight:")]),t._v(" 76g")])])])]),t._v(" "),a("h2",{attrs:{id:"hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[t._v("#")]),t._v(" Hardware Setup")]),t._v(" "),a("h3",{attrs:{id:"package-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-contents"}},[t._v("#")]),t._v(" Package Contents")]),t._v(" "),a("p",[a("img",{attrs:{src:r(426),alt:"CAN PMU list"}})]),t._v(" "),a("h3",{attrs:{id:"pinouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pinouts"}},[t._v("#")]),t._v(" Pinouts")]),t._v(" "),a("p",[a("img",{attrs:{src:r(427),alt:"CAN PMU"}})]),t._v(" "),a("p",[a("img",{attrs:{src:r(428),alt:"CAN PMU"}})]),t._v(" "),a("h2",{attrs:{id:"wiring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[t._v("#")]),t._v(" Wiring")]),t._v(" "),a("p",[a("img",{attrs:{src:r(429),alt:"CAN PMU"}})]),t._v(" "),a("p",[t._v("The connection steps are:")]),t._v(" "),a("ul",[a("li",[t._v("Connect the flight control CAN1/2 and the module CAN interface.")]),t._v(" "),a("li",[t._v("Connect the V5 series power cable to the V5 Flight Control Power2 (if other flight controllers are connect to the Power interface) and the module Power interface.")])]),t._v(" "),a("h2",{attrs:{id:"flight-controller-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-setup"}},[t._v("#")]),t._v(" Flight Controller Setup")]),t._v(" "),a("p",[t._v("Set the following parameters in the "),a("em",[t._v("QGroundControl")]),t._v(" "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("parameter list")]),t._v(" and then restart:")],1),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("UAVCAN_ENABLE")]),t._v(": set to: "),a("em",[t._v("Sensors Automatic Config")])]),t._v(" "),a("p",[a("img",{attrs:{src:r(430),alt:"qgc set"}})])])]),t._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://manual.cuav.net/power-module/CAN-PMU.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAN PMU Manual"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://doc.cuav.net/power-module/can-pmu/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAN PMU Power detection module > Enable CAN PMU > PX4 firmware"),a("OutboundLink")],1),t._v(" (CUAV docs)")])])}),[],!1,null,null,null);e.default=n.exports},425:function(t,e,r){t.exports=r.p+"assets/img/can_pmu.631d6c45.jpg"},426:function(t,e,r){t.exports=r.p+"assets/img/can_pmu_list.9cf1ba3d.png"},427:function(t,e,r){t.exports=r.p+"assets/img/can_pmu_pinouts_en.4ba756f9.png"},428:function(t,e,r){t.exports=r.p+"assets/img/can_pmu_pinouts_en2.f09aeee2.png"},429:function(t,e,r){t.exports=r.p+"assets/img/can_pmu_connection_en.bc92043d.png"},430:function(t,e,r){t.exports=r.p+"assets/img/qgc_set_en.ffc14b0a.png"}}]);