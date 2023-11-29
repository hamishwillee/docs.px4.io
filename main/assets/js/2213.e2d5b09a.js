(window.webpackJsonp=window.webpackJsonp||[]).push([[2213],{3891:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"vesc-escs-dronecan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vesc-escs-dronecan"}},[t._v("#")]),t._v(" VESC ESCs (DroneCAN)")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://vesc-project.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VESC project"),r("OutboundLink")],1),t._v(" is a fully open source hardware and software design for advanced FOC motor controllers. While it can be controlled using traditional PWM input, it also supports being connected over CAN bus using "),r("RouterLink",{attrs:{to:"/zh/dronecan/"}},[t._v("DroneCAN")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"where-to-buy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://vesc-project.com/Hardware",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vesc Project > Hardware"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"hardware-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[t._v("#")]),t._v(" Hardware Setup")]),t._v(" "),r("h3",{attrs:{id:"wiring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[t._v("#")]),t._v(" Wiring")]),t._v(" "),r("p",[t._v("ESCs are connected to the CAN bus using the VESC CAN connector. Note that this is "),r("em",[t._v("not")]),t._v(" the Pixhawk standard 4 pin JST GH connector. For more information, refer to the "),r("RouterLink",{attrs:{to:"/zh/can/#wiring"}},[t._v("CAN Wiring")]),t._v(" instructions. ESC order does not matter.")],1),t._v(" "),r("h2",{attrs:{id:"firmware-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firmware-setup"}},[t._v("#")]),t._v(" Firmware Setup")]),t._v(" "),r("p",[t._v("The preferred tool for motor enumeration is the "),r("a",{attrs:{href:"https://vesc-project.com/vesc_tool",target:"_blank",rel:"noopener noreferrer"}},[t._v("VESC tool"),r("OutboundLink")],1),t._v(". In addition to the normal motor configuration that you will have to setup in the VESC tool, you will also need to properly setup the app configuration. The recommended app setup is as follows:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Option")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("App to use")]),t._v(" "),r("td",[r("code",[t._v("No App")])])]),t._v(" "),r("tr",[r("td",[t._v("VESC ID")]),t._v(" "),r("td",[r("code",[t._v("1,2,...")])])]),t._v(" "),r("tr",[r("td",[t._v("Can Status Message Mode")]),t._v(" "),r("td",[r("code",[t._v("CAN_STATUS_1_2_3_4_5")])])]),t._v(" "),r("tr",[r("td",[t._v("CAN Baud Rate")]),t._v(" "),r("td",[r("code",[t._v("CAN_BAUD_500K")])])]),t._v(" "),r("tr",[r("td",[t._v("CAN Mode")]),t._v(" "),r("td",[r("code",[t._v("UAVCAN")])])]),t._v(" "),r("tr",[r("td",[t._v("UAVCAN ESC Index")]),t._v(" "),r("td",[r("code",[t._v("0,1,...")])])])])]),t._v(" "),r("p",[t._v("VESC ID should have the same motor numbering as in PX4 convention, starting at "),r("code",[t._v("1")]),t._v(" for top-right motor, "),r("code",[t._v("2")]),t._v(" for bottom-left motor etc. However the "),r("code",[t._v("UAVCAN ESC Index")]),t._v(" starts from "),r("code",[t._v("0")]),t._v(", and as such it is always one index lower than the "),r("code",[t._v("VESC ID")]),t._v(". For example, in a quadcopter the bottom left motor will have "),r("code",[t._v("VESC ID = 2")]),t._v(" and "),r("code",[t._v("UAVCAN ESC Index = 1")]),t._v(".")]),t._v(" "),r("p",[t._v("Finally the "),r("code",[t._v("CAN Baud Rate")]),t._v(" must match the value set in "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_BITRATE"}},[t._v("UAVCAN_BITRATE")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"flight-controller-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-setup"}},[t._v("#")]),t._v(" Flight Controller Setup")]),t._v(" "),r("h3",{attrs:{id:"enable-dronecan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enable-dronecan"}},[t._v("#")]),t._v(" Enable DroneCAN")]),t._v(" "),r("p",[t._v("Connect the ESCs to the Pixhawk CAN bus. Power up the entire vehicle using a battery or power supply (not just the flight controller over USB) and enable the DroneCAN driver by setting the parameter "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[t._v("UAVCAN_ENABLE")]),t._v(" to "),r("code",[t._v("3")]),t._v(" to enable both dynamic node ID allocation and DroneCAN ESC output.")],1),t._v(" "),r("h3",{attrs:{id:"px4-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),r("p",[t._v("Assign motors to outputs using the "),r("RouterLink",{attrs:{to:"/zh/config/actuators.html#actuator-testing"}},[t._v("Acutator")]),t._v(" configuration screen.")],1),t._v(" "),r("h2",{attrs:{id:"further-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://vesc-project.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VESC Project ESCs"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://vedder.se",target:"_blank",rel:"noopener noreferrer"}},[t._v("Benjamin Vedder's blog"),r("OutboundLink")],1),t._v(" (project owner)")])])])}),[],!1,null,null,null);e.default=a.exports}}]);