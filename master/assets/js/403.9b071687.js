(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{1305:function(e,t,r){e.exports=r.p+"assets/img/uavcan_logo_transparent.385713a1.png"},1306:function(e,t,r){e.exports=r.p+"assets/img/uavcan_wiring.bbcb3462.png"},1810:function(e,t,r){"use strict";r.r(t);var n=r(18),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"uavcan-introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-introduction"}},[e._v("#")]),e._v(" UAVCAN Introduction")]),e._v(" "),n("p",[n("img",{attrs:{src:r(1305),alt:"UAVCAN Logo"}})]),e._v(" "),n("p",[n("a",{attrs:{href:"http://uavcan.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("UAVCAN"),n("OutboundLink")],1),e._v(" is an onboard network which allows the autopilot to connect to avionics.\nIt supports hardware like:")]),e._v(" "),n("ul",[n("li",[e._v("Motor controllers\n"),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://zubax.com/product/zubax-orel-20",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax Orel 20"),n("OutboundLink")],1)]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")]),e._v(" Runs "),n("a",{attrs:{href:"https://github.com/px4/sapog",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sapog Firmware"),n("OutboundLink")],1),e._v(" (open source).\nBased on "),n("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/sapog_reference_hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sapog Reference Hardware"),n("OutboundLink")],1),e._v(".")])])])])]),e._v(" "),n("li",[e._v("Airspeed sensors\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/thiemar/airspeed",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thiemar airspeed sensor"),n("OutboundLink")],1)])])]),e._v(" "),n("li",[e._v("GNSS receivers for GPS and GLONASS\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax GNSS"),n("OutboundLink")],1)])])]),e._v(" "),n("li",[e._v("Power monitors\n"),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/power_module/pomegranate_systems_pm.html"}},[e._v("Pomegranate Systems Power Module")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/power_module/cuav_can_pmu.html"}},[e._v("CUAV CAN PMU Power Module")])],1)])])]),e._v(" "),n("p",[e._v("In contrast to hobby-grade devices it uses rugged, differential signalling and supports firmware upgrades over the bus.\nAll motor controllers provide status feedback and implement field-oriented-control (FOC).")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")]),e._v(" PX4 requires an SD card for UAVCAN node allocation and firmware upgrade.\nIt is not used during flight by UAVCAN.")])]),e._v(" "),n("h2",{attrs:{id:"initial-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#initial-setup"}},[e._v("#")]),e._v(" Initial Setup")]),e._v(" "),n("p",[e._v("The following instructions provide a step-by-step guide to connect and setup a quadcopter with ESCs and GPS connected via UAVCAN.\nThe hardware of choice is a Pixhawk 2.1, Zubax Orel 20 ESCs and a Zubax GNSS GPS module.")]),e._v(" "),n("h3",{attrs:{id:"wiring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),n("p",[e._v("The first step is to connect all UAVCAN enabled devices with the flight controller.\nThe following diagram displays how to wire all components.\nThe used Zubax devices all support a redundant CAN interface in which the second bus is optional but increases the robustness of the connection.")]),e._v(" "),n("p",[n("img",{attrs:{src:r(1306),alt:"UAVCAN Wiring"}})]),e._v(" "),n("p",[e._v("It is important to mention that some devices require an external power supply (e.g. Zubax Orel 20) and others can be powered by the CAN connection (e.g Zubax GNSS) itself.\nPlease refer to the documentation of your hardware before continuing with the setup.")]),e._v(" "),n("h3",{attrs:{id:"firmware-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#firmware-setup"}},[e._v("#")]),e._v(" Firmware Setup")]),e._v(" "),n("p",[e._v("Next, follow the instructions in "),n("RouterLink",{attrs:{to:"/en/uavcan/node_enumeration.html"}},[e._v("UAVCAN Configuration")]),e._v(" to activate the UAVCAN functionalities in the firmware.\nDisconnect your power supply and reconnect it.\nAfter the power cycle all UAVCAN devices should be detected which is confirmed by a beeping motor on the Orel 20 ESCs.\nYou can now continue with the general setup and calibration.")],1),e._v(" "),n("p",[e._v("Depending on the used hardware, it can be reasonable to perform an update of the firmware on the UAVCAN devices.\nThis can be done via the UAVCAN itself and the PX4 firmware.\nFor more details please refer to the instructions in "),n("RouterLink",{attrs:{to:"/en/uavcan/node_firmware.html"}},[e._v("UAVCAN Firmware")]),e._v(".")],1),e._v(" "),n("h2",{attrs:{id:"upgrading-node-firmware"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-node-firmware"}},[e._v("#")]),e._v(" Upgrading Node Firmware")]),e._v(" "),n("p",[e._v("The PX4 middleware will automatically upgrade firmware on UAVCAN nodes if the matching firmware is supplied. The process and requirements are described on the "),n("RouterLink",{attrs:{to:"/en/uavcan/node_firmware.html"}},[e._v("UAVCAN Firmware")]),e._v(" page.")],1),e._v(" "),n("h2",{attrs:{id:"enumerating-and-configuring-motor-controllers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enumerating-and-configuring-motor-controllers"}},[e._v("#")]),e._v(" Enumerating and Configuring Motor Controllers")]),e._v(" "),n("p",[e._v("The ID and rotational direction of each motor controller can be assigned after installation in a simple setup routine: "),n("RouterLink",{attrs:{to:"/en/uavcan/node_enumeration.html"}},[e._v("UAVCAN Node Enumeration")]),e._v(".\nThe routine can be started by the user through QGroundControl.")],1),e._v(" "),n("h2",{attrs:{id:"useful-links"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useful-links"}},[e._v("#")]),e._v(" Useful links")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://uavcan.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homepage"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://uavcan.org/specification/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Specification"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://uavcan.org/Implementations",target:"_blank",rel:"noopener noreferrer"}},[e._v("Implementations and tutorials"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);