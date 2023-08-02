(window.webpackJsonp=window.webpackJsonp||[]).push([[507],{1905:function(t,e,a){"use strict";a.r(e);var o=a(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"pomegranate-systems-power-module"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pomegranate-systems-power-module"}},[t._v("#")]),t._v(" Pomegranate Systems Power Module")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("In 2022, UAVCAN (v0) was forked and is maintained as  "),o("code",[t._v("DroneCAN")]),t._v('.\nWhile this product still mentions "UAVCAN", it is fully compatible with PX4\'s DroneCAN support.')])]),t._v(" "),o("p",[o("img",{attrs:{src:a(751),alt:"Module Image"}})]),t._v(" "),o("p",[t._v("Digital Power Module with high resolution current integration, 5V/2A supply with power monitoring, single DroneCAN CANbus interface, and an RGB status LED.")]),t._v(" "),o("p",[t._v("Detailed setup, configuration, and troubleshooting information can be found on the "),o("a",{attrs:{href:"https://p-systems.io/product/power_module",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer's device home page"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"hardware-specifications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-specifications"}},[t._v("#")]),t._v(" Hardware Specifications")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Input Voltage:")]),t._v(" 6-26V (2-6S)")]),t._v(" "),o("li",[o("strong",[t._v("Max Continuous Current:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Benchtop:")]),t._v(" 40A")]),t._v(" "),o("li",[o("strong",[t._v("Forced Cooling:")]),t._v(" 100A")])])]),t._v(" "),o("li",[o("strong",[t._v("Max 5V Output Current:")]),t._v(" 2A")]),t._v(" "),o("li",[o("strong",[t._v("Voltage Resolution:")]),t._v(" 0.04 ΔV")]),t._v(" "),o("li",[o("strong",[t._v("Current Resolution:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Primary / Battery Bus:")]),t._v(" 0.02 ΔA")]),t._v(" "),o("li",[o("strong",[t._v("5V bus:")]),t._v(" 0.001 ΔA")])])]),t._v(" "),o("li",[o("strong",[t._v("CANbus Termination:")]),t._v(" Electronic (on by default)")]),t._v(" "),o("li",[o("strong",[t._v("MCU:")]),t._v(" STM32F302K8U")]),t._v(" "),o("li",[o("strong",[t._v("Electrical Interface:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Power:")]),t._v(" Solder pads or XT60PW (right angle, board-mounted connectors)")]),t._v(" "),o("li",[o("strong",[t._v("CANbus")]),t._v(" Dual JST GH-4 (standard UAVCAN micro-connector)")]),t._v(" "),o("li",[o("strong",[t._v("I2C / Serial:")]),t._v(" JST GH-5")]),t._v(" "),o("li",[o("strong",[t._v("5V Output:")]),t._v(" Solder pads or CANbus / I2C connectors")])])]),t._v(" "),o("li",[o("strong",[t._v("Device Mass:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Without Connectors:")]),t._v(" 9g")]),t._v(" "),o("li",[o("strong",[t._v("With XT60PW Connectors:")]),t._v(" 16g")])])])]),t._v(" "),o("p",[o("img",{attrs:{src:a(752),alt:"Dimensions"}})]),t._v(" "),o("h2",{attrs:{id:"firmware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#firmware-setup"}},[t._v("#")]),t._v(" Firmware Setup")]),t._v(" "),o("p",[t._v("The power module runs pomegranate systems' own custom (open source) firmware.\nSource code and build instructions can be found on "),o("a",{attrs:{href:"https://bitbucket.org/p-systems/firmware/src/master",target:"_blank",rel:"noopener noreferrer"}},[t._v("the bitbucket"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"flight-controller-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-setup"}},[t._v("#")]),t._v(" Flight Controller Setup")]),t._v(" "),o("ol",[o("li",[t._v("Enable DroneCAN by setting the "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[t._v("UAVCAN_ENABLE")]),t._v(" parameter to "),o("code",[t._v("2")]),t._v(" (Sensors Automatic Config) or "),o("code",[t._v("3")]),t._v(".")],1),t._v(" "),o("li",[t._v("Enable DroneCAN battery monitoring by setting "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_SUB_BAT"}},[t._v("UAVCAN_SUB_BAT")]),t._v(" to "),o("code",[t._v("1")]),t._v(" or "),o("code",[t._v("2")]),t._v(" ( depending on your battery).")],1),t._v(" "),o("li",[t._v("Set the following module parameters using the "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink console"),o("OutboundLink")],1),t._v(":\n"),o("ul",[o("li",[t._v("Battery capacity in mAh: "),o("code",[t._v("battery_capacity_mAh")])]),t._v(" "),o("li",[t._v("Battery voltage when "),o("em",[t._v("full")]),t._v(": "),o("code",[t._v("battery_full_V")]),t._v(",")]),t._v(" "),o("li",[t._v("Battery voltage when "),o("em",[t._v("empty")]),t._v(": "),o("code",[t._v("battery_empty_V")])]),t._v(" "),o("li",[t._v("Turn on current integration: "),o("code",[t._v("enable_current_track")])]),t._v(" "),o("li",[t._v("(optional) Turn Off CANbus termination resistor :"),o("code",[t._v("enable_can_term")])])])])]),t._v(" "),o("p",[o("strong",[t._v("Example:")]),t._v(" A Power Module with UAVCAN node id "),o("code",[t._v("125")]),t._v(" connected to a "),o("code",[t._v("3S")]),t._v(" LiPo with capacity of "),o("code",[t._v("5000mAh")]),t._v(" can be configured with the following commands:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("uavcan param set 125 battery_capacity_mAh 5000\nuavcan param set 125 battery_full_V 12.5\nuavcan param set 125 battery_empty_V 11.2\nuavcan param set 125 enable_current_track 1\nuavcan param save 125\n")])])]),o("p",[t._v("See "),o("a",{attrs:{href:"https://p-systems.io/product/power_module/configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("device configuration page"),o("OutboundLink")],1),t._v(" for a full list of parameters.")])])}),[],!1,null,null,null);e.default=r.exports},751:function(t,e,a){t.exports=a.p+"assets/img/main_image.73640f6d.jpg"},752:function(t,e){t.exports="data:image/png;base64,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"}}]);