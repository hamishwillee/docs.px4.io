(window.webpackJsonp=window.webpackJsonp||[]).push([[653],{2346:function(t,e,o){"use strict";o.r(e);var r=o(18),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"操纵杆设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#操纵杆设置"}},[t._v("#")]),t._v(" 操纵杆设置")]),t._v(" "),r("p",[t._v("A "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Joystick",target:"_blank",rel:"noopener noreferrer"}},[t._v("computer joystick"),r("OutboundLink")],1),t._v(" or gamepad connected through "),r("em",[t._v("QGroundControl")]),t._v(" can be used to manually control the vehicle ("),r("em",[t._v("instead")]),t._v(" of using an "),r("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[t._v("RC Transmitter")]),t._v(").")],1),t._v(" "),r("p",[t._v("This approach may be used by manual control units that have an integrated ground control station (like the "),r("em",[t._v("UAVComponents")]),t._v(" "),r("a",{attrs:{href:"https://www.uavcomp.com/command-control/micronav/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MicroNav"),r("OutboundLink")],1),t._v(" shown below). Joysticks are also commonly used to allow developers to fly the vehicle in simulation.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(364),alt:"Joystick MicroNav."}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[t._v("Radio Setup")]),t._v(" is not required if using a joystick (because a joystick is not an RC controller)!")],1)]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v(" uses the cross-platform "),r("a",{attrs:{href:"http://www.libsdl.org/index.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("SDL2"),r("OutboundLink")],1),t._v(" library to convert joystick movements to MAVLink "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MANUAL_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MANUAL_CONTROL"),r("OutboundLink")],1),t._v(" messages, which are then sent to PX4 over the telemetry channel. In consequence, a joystick-based controller system requires a reliable high bandwidth telemetry channel to ensure that the vehicle is responsive to joystick movements.")])]),t._v(" "),r("h2",{attrs:{id:"enabling-px4-joystick-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enabling-px4-joystick-support"}},[t._v("#")]),t._v(" Enabling PX4 Joystick Support")]),t._v(" "),r("p",[t._v("Information about how to set up a joystick is covered in: "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Joystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl > Joystick Setup"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("In summary:")]),t._v(" "),r("ul",[r("li",[t._v("开启 "),r("em",[t._v("QGroundControl")]),t._v("。")]),t._v(" "),r("li",[t._v("Set the parameter "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_IN_MODE"}},[t._v("COM_RC_IN_MODE=1")]),t._v(" - "),r("code",[t._v("Joystick/No RC Checks")]),t._v(" (see "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Parameters.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parameters"),r("OutboundLink")],1),t._v(" for information about setting parameters)")],1),t._v(" "),r("li",[t._v("Connect the joystick")]),t._v(" "),r("li",[t._v("Configure the connected joystick in: "),r("strong",[t._v("Vehicle Setup > Joystick")]),t._v(".")])])])}),[],!1,null,null,null);e.default=n.exports},364:function(t,e,o){t.exports=o.p+"assets/img/micronav.8cbd07b4.jpg"}}]);