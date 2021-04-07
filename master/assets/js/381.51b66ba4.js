(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{1292:function(t,e,a){t.exports=a.p+"assets/img/smart-battery-rotoye.e82fa0b7.jpg"},1293:function(t,e,a){t.exports=a.p+"assets/img/smart-battery-rotoye-pack.6bf3930f.jpg"},1294:function(t,e,a){t.exports=a.p+"assets/img/smart-battery-rotoye-connection.c02a8c37.png"},2715:function(t,e,a){"use strict";a.r(e);var r=a(18),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"rotoye-batmon"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rotoye-batmon"}},[t._v("#")]),t._v(" Rotoye Batmon")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://rotoye.com/batmon/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rotoye Batmon"),r("OutboundLink")],1),t._v(" is a kit for adding smart battery functionality to off-the-shelf Lithium-Ion and LiPo batteries. It can be purchased as a standalone unit or as part of a factory-assembled smart-battery.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("At time of writing you can only use Batmon by "),r("a",{attrs:{href:"#build-px4-firmware"}},[t._v("building a custom branch of PX4")]),t._v(". Support in the codeline is pending "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16723",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR approval"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(1292),alt:"Rotoye Batmon Board"}})]),t._v(" "),r("p",[r("img",{attrs:{src:a(1293),alt:"Pre-assembled Rotoye smart battery"}})]),t._v(" "),r("h2",{attrs:{id:"purchase"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#purchase"}},[t._v("#")]),t._v(" Purchase")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://rotoye.com/batmon/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rotoye Store"),r("OutboundLink")],1),t._v(": Batmon kits, custom smart-batteries, and accessories")]),t._v(" "),r("h2",{attrs:{id:"wiring-connections"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring-connections"}},[t._v("#")]),t._v(" Wiring/Connections")]),t._v(" "),r("p",[t._v("The Rotoye Batmon system uses an XT-90 battery connector with I2C pins, and an opti-isolator board to transmit data.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1294),alt:"Board connections"}})]),t._v(" "),r("p",[t._v("More details can be found "),r("a",{attrs:{href:"https://github.com/rotoye/batmon_reader",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"software-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#software-setup"}},[t._v("#")]),t._v(" Software Setup")]),t._v(" "),r("h3",{attrs:{id:"build-px4-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-px4-firmware"}},[t._v("#")]),t._v(" Build PX4 Firmware")]),t._v(" "),r("ol",[r("li",[t._v("Clone or download "),r("a",{attrs:{href:"https://github.com/rotoye/PX4-Autopilot/tree/batmon_4.03",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rotoye's fork of PX4:"),r("OutboundLink")],1),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/rotoye/PX4-Autopilot.git\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n")])])])]),t._v(" "),r("li",[t._v("Checkout the "),r("em",[t._v("batmon_4.03")]),t._v(" branch"),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin batmon_4.03\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout batmon_4.03\n")])])])]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("Build and upload the firmware")]),t._v(" for your target board")],1)]),t._v(" "),r("h3",{attrs:{id:"configure-parmeters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-parmeters"}},[t._v("#")]),t._v(" Configure Parmeters")]),t._v(" "),r("p",[t._v("In "),r("em",[t._v("QGroundControl")]),t._v(":")]),t._v(" "),r("ol",[r("li",[t._v("Set the following "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("parameters")]),t._v(":\n"),r("ul",[r("li",[r("code",[t._v("BATx_SOURCE")]),t._v(" to "),r("code",[t._v("External")]),t._v(",")]),t._v(" "),r("li",[r("code",[t._v("SENS_EN_BAT")]),t._v(" to "),r("code",[t._v("true")]),t._v(",")]),t._v(" "),r("li",[r("code",[t._v("BAT_SMBUS_MODEL")]),t._v(" to "),r("code",[t._v("3:Rotoye")])])])],1),t._v(" "),r("li",[t._v("Open the "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Console"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Start the "),r("RouterLink",{attrs:{to:"/zh/modules/modules_driver.html"}},[t._v("batt_smbus driver")]),t._v(" in the console. For example, to run two BatMons on the same bus:"),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("batt_smbus start -X -b "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" -a "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# External bus 1, address 0x0b  ")]),t._v("\nbatt_smbus start -X -b "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" -a "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# External bus 1, address 0x0c")]),t._v("\n")])])])],1)]),t._v(" "),r("h2",{attrs:{id:"further-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://rotoye.com/batmon-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quick Start Guide"),r("OutboundLink")],1),t._v(" (Rotoye)")])])}),[],!1,null,null,null);e.default=o.exports}}]);