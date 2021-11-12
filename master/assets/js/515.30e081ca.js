(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{1389:function(t,e,r){t.exports=r.p+"assets/img/main_image.489b9d44.jpg"},1390:function(t,e,r){t.exports=r.p+"assets/img/mechanical.3680be13.png"},3345:function(t,e,r){"use strict";r.r(e);var o=r(19),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"pomegranate-systems-power-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pomegranate-systems-power-module"}},[t._v("#")]),t._v(" Pomegranate Systems Power Module")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1389),alt:"Module Image"}})]),t._v(" "),o("p",[t._v("Digital Power Module with high resolution current integration, 5V/2A supply with power monitoring, single UAVCAN v0 CANbus interface, and an RGB status LED.")]),t._v(" "),o("p",[t._v("Detailed setup, configuration, and troubleshooting information can be found on the "),o("a",{attrs:{href:"https://p-systems.io/product/power_module",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer's device home page"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"specifications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[t._v("#")]),t._v(" Specifications")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Input Voltage:")]),t._v(" 6-26V (2-6S)")]),t._v(" "),o("li",[o("strong",[t._v("Max Continuous Current:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Benchtop:")]),t._v(" 40A")]),t._v(" "),o("li",[o("strong",[t._v("Forced Cooling:")]),t._v(" 100A")])])]),t._v(" "),o("li",[o("strong",[t._v("Max 5V Output Current:")]),t._v(" 2A")]),t._v(" "),o("li",[o("strong",[t._v("Voltage Resolution:")]),t._v(" 0.04 ΔV")]),t._v(" "),o("li",[o("strong",[t._v("Current Resolution:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Primary / Battery Bus:")]),t._v(" 0.02 ΔA")]),t._v(" "),o("li",[o("strong",[t._v("5V bus:")]),t._v(" 0.001 ΔA")])])]),t._v(" "),o("li",[o("strong",[t._v("CANbus Termination:")]),t._v(" Electronic (on by default)")]),t._v(" "),o("li",[o("strong",[t._v("MCU:")]),t._v(" STM32 F302K8U")]),t._v(" "),o("li",[o("strong",[t._v("Firmware:")]),t._v(" "),o("a",{attrs:{href:"https://bitbucket.org/p-systems/firmware/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Open Source"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("strong",[t._v("Electrical Interface:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Power:")]),t._v(" Solder pads or XT60PW (right angle, board-mounted connectors)")]),t._v(" "),o("li",[o("strong",[t._v("CANbus")]),t._v(" Dual JST GH-4 (standard UAVCAN micro-connector)")]),t._v(" "),o("li",[o("strong",[t._v("I2C / Serial:")]),t._v(" JST GH-5")]),t._v(" "),o("li",[o("strong",[t._v("5V Output:")]),t._v(" Solder pads or CANbus / I2C connectors")])])]),t._v(" "),o("li",[o("strong",[t._v("Device Mass:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Without Connectors:")]),t._v(" 9g")]),t._v(" "),o("li",[o("strong",[t._v("With XT60PW Connectors:")]),t._v(" 16g")])])])]),t._v(" "),o("p",[o("img",{attrs:{src:r(1390),alt:"Dimensions"}})]),t._v(" "),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),o("ol",[o("li",[t._v("Enable UAVCAN by setting the "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[t._v("UAVCAN_ENABLE")]),t._v(" parameter to "),o("code",[t._v("2")]),t._v(" (Sensors Automatic Config) or "),o("code",[t._v("3")]),t._v(".")],1),t._v(" "),o("li",[t._v("Set the following module parameters using the "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mavlink console"),o("OutboundLink")],1),t._v(":\n"),o("ul",[o("li",[t._v("Battery capacity in mAh: "),o("code",[t._v("battery_capacity_mAh")])]),t._v(" "),o("li",[t._v("Battery voltage when "),o("em",[t._v("full")]),t._v(": "),o("code",[t._v("battery_full_V")]),t._v(",")]),t._v(" "),o("li",[t._v("Battery voltage when "),o("em",[t._v("empty")]),t._v(": "),o("code",[t._v("battery_empty_V")])]),t._v(" "),o("li",[t._v("Turn on current integration: "),o("code",[t._v("enable_current_track")])]),t._v(" "),o("li",[t._v("(optional) Turn Off CANbus termination resistor :"),o("code",[t._v("enable_can_term")])])])])]),t._v(" "),o("p",[o("strong",[t._v("Example:")]),t._v(" A Power Module with UAVCAN node id "),o("code",[t._v("125")]),t._v(" connected to a "),o("code",[t._v("3S")]),t._v(" LiPo with capacity of "),o("code",[t._v("5000mAh")]),t._v(" can be configured with the following commands:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("uavcan param set 125 battery_capacity_mAh 5000\nuavcan param set 125 battery_full_V 12.5\nuavcan param set 125 battery_empty_V 11.2\nuavcan param set 125 enable_current_track 1\nuavcan param save 125\n")])])]),o("p",[t._v("See "),o("a",{attrs:{href:"https://p-systems.io/product/power_module/configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("device configuration page"),o("OutboundLink")],1),t._v(" for a full list of parameters.")])])}),[],!1,null,null,null);e.default=n.exports}}]);