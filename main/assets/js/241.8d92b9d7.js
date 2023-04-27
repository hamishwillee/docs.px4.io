(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{1656:function(t,e,o){},1703:function(t,e,o){"use strict";o(1656)},2602:function(t,e,o){"use strict";o.r(e);o(1703);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"sapog-esc-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sapog-esc-firmware"}},[t._v("#")]),t._v(" Sapog ESC Firmware")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/PX4/sapog#px4-sapog",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sapog"),r("OutboundLink")],1),t._v(" firmware is an advanced open source sensorless PMSM/BLDC motor controller firmware designed for use in propulsion systems of electric unmanned vehicles.")]),t._v(" "),r("p",[t._v("While it can be controlled using traditional PWM input, it is designed to operate over CAN bus using "),r("RouterLink",{attrs:{to:"/ko/dronecan/"}},[t._v("DroneCAN")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"where-to-buy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),r("p",[t._v("Multiple vendors sell ESC hardware that runs sapog firmware:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://zubax.com/products/orel_20",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zubax Orel 20"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://holybro.com/products/kotleta20",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Kotleta20"),r("OutboundLink")],1)])]),t._v(" "),r("div",{attrs:{id:"image_container"}},[r("div",{staticClass:"image_column"},[r("img",{attrs:{src:o(778),alt:"Orel20 - Top"}}),r("br"),r("a",{attrs:{href:"https://zubax.com/products/orel_20"}},[t._v("Zubax Orel 20")])]),t._v(" "),r("div",{staticClass:"image_column"},[r("img",{attrs:{src:o(779),alt:"Holybro Kotleta20 top"}}),r("br"),r("a",{attrs:{href:"https://holybro.com/products/kotleta20"}},[t._v("Holybro Kotleta20")])])]),t._v(" "),r("h2",{attrs:{id:"hardware-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[t._v("#")]),t._v(" Hardware Setup")]),t._v(" "),r("p",[t._v("ESCs are connected to the CAN bus using a Pixhawk standard 4 pin JST GH cable. For more information, refer to the "),r("RouterLink",{attrs:{to:"/ko/can/#wiring"}},[t._v("CAN Wiring")]),t._v(" instructions. ESC order does not matter.")],1),t._v(" "),r("h2",{attrs:{id:"firmware-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firmware-setup"}},[t._v("#")]),t._v(" Firmware Setup")]),t._v(" "),r("p",[t._v("ESCs come with an existing build of Sapog installed. If you want to update:")]),t._v(" "),r("p",[t._v("To build the firmware:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("git clone --recursive https://github.com/PX4/sapog\ncd sapog/firmware\nmake RELEASE=1\n")])])]),r("p",[t._v("This will create a file "),r("code",[t._v("*.application.bin")]),t._v(". in "),r("code",[t._v("build/")]),t._v(". This binary can be flashed through the autopilot over DroneCAN via the sapog bootloader. See "),r("RouterLink",{attrs:{to:"/ko/dronecan/#firmware-update"}},[t._v("DroneCAN Firmware Update")]),t._v(".")],1),t._v(" "),r("p",[t._v("Refer to the "),r("a",{attrs:{href:"https://github.com/PX4/sapog",target:"_blank",rel:"noopener noreferrer"}},[t._v("project page"),r("OutboundLink")],1),t._v(" to learn more, including how to flash without using the DroneCAN bootloader (i.e. on a not-yet-programmed device) or for development.")]),t._v(" "),r("h2",{attrs:{id:"flight-controller-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-setup"}},[t._v("#")]),t._v(" Flight Controller Setup")]),t._v(" "),r("h3",{attrs:{id:"enabling-dronecan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enabling-dronecan"}},[t._v("#")]),t._v(" Enabling DroneCAN")]),t._v(" "),r("p",[t._v("Connect the ESCs to the Pixhawk CAN bus. Power up the entire vehicle using a battery or power supply (not just the flight controller over USB) and enable the DroneCAN driver by setting the parameter "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[t._v("UAVCAN_ENABLE")]),t._v(" to '3' to enable both dynamic node ID allocation and DroneCAN ESC output.")],1),t._v(" "),r("h3",{attrs:{id:"automatic-esc-enumeration-using-qgroundcontrol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#automatic-esc-enumeration-using-qgroundcontrol"}},[t._v("#")]),t._v(" Automatic ESC Enumeration using QGroundControl")]),t._v(" "),r("p",[t._v("This section shows how to enumerate any "),r("a",{attrs:{href:"https://github.com/PX4/sapog#px4-sapog",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sapog-based"),r("OutboundLink")],1),t._v('-based ESCs "automatically" using '),r("em",[t._v("QGroundControl")]),t._v(".")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("You can skip this section if there is only one ESC in your setup, because the ESC index is already set to zero by default.")])]),t._v(" "),r("p",[t._v("To enumerate the ESC:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Power the vehicle with a battery and connect to "),r("em",[t._v("QGroundControl")])])]),t._v(" "),r("li",[r("p",[t._v("Navigate to "),r("strong",[t._v("Vehicle Setup > Power")]),t._v(" in QGC.")])]),t._v(" "),r("li",[r("p",[t._v("Start the process of ESC auto-enumeration by pressing the "),r("strong",[t._v("Start Assignment")]),t._v(" button, as shown on the screenshot below.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(780),alt:"QGC - DroneCAN ESC auto-enumeration"}})]),t._v(" "),r("p",[t._v("You will hear a sound indicating that the flight controller has entered the ESC enumeration mode.")])]),t._v(" "),r("li",[r("p",[t._v("Manually turn each motor in the correct direction of its rotation (as specified in the "),r("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v("), starting from the first motor and finishing with the last motor. Each time you turn a motor, you should hear a confirmation beep.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")])])])]),t._v(" "),r("p",[t._v("Make sure to turn each of the motors in the correct direction, as the ESC will automatically learn and remember the direction (i.e. motors that spin clockwise during normal operation must also be turned clockwise during enumeration).\n:::")]),t._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[t._v("After the last motor is enumerated, the confirmation sound should change to indicate that the enumeration procedure is complete.")]),t._v(" "),r("li",[t._v("Reboot PX4 and the Sapog ESCs to apply the new enumeration IDs.")])]),t._v(" "),r("p",[t._v("The following video demonstrates the process:")]),t._v(" "),r("p"),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/4nSa8tvpbgQ",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),r("p"),t._v(" "),r("h3",{attrs:{id:"manual-esc-enumeration-using-sapog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#manual-esc-enumeration-using-sapog"}},[t._v("#")]),t._v(" Manual ESC Enumeration using Sapog")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("We recommend automated "),r("a",{attrs:{href:"#automatic-esc-enumeration-using-qgroundcontrol"}},[t._v("Sapog ESC Enumeration using QGroundControl")]),t._v(" shown above rather than manual enumeration (as it is easier and safer).")])]),t._v(" "),r("p",[t._v("You can manually configure the ESC index and direction using the "),r("a",{attrs:{href:"https://dronecan.github.io/GUI_Tool/Overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DroneCAN GUI Tool"),r("OutboundLink")],1),t._v(". This assigns the following Sapog configuration parameters for each enumerated ESC:")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("esc_index")])]),t._v(" "),r("li",[r("code",[t._v("ctl_dir")])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("See "),r("a",{attrs:{href:"https://files.zubax.com/products/io.px4.sapog/Sapog_v2_Reference_Manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sapog reference manual"),r("OutboundLink")],1),t._v(" for more information about the parameters.")])]),t._v(" "),r("h3",{attrs:{id:"px4-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),r("p",[t._v("Assign motors to outputs using the "),r("RouterLink",{attrs:{to:"/ko/config/actuators.html#actuator-testing"}},[t._v("Acutator")]),t._v(" configuration screen.")],1),t._v(" "),r("h2",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),r("p",[t._v("See "),r("RouterLink",{attrs:{to:"/ko/dronecan/#troubleshooting"}},[t._v("DroneCAN Troubleshooting")])],1),t._v(" "),r("h2",{attrs:{id:"further-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/PX4/sapog#px4-sapog",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/Sapog"),r("OutboundLink")],1),t._v(" (Github)")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://files.zubax.com/products/io.px4.sapog/Sapog_v2_Reference_Manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sapog v2 Reference Manual"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/Using+Sapog-based+ESC+with+PX4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Sapog based ESC with PX4"),r("OutboundLink")],1),t._v(" (Zubax KB)")])])])}),[],!1,null,null,null);e.default=a.exports},778:function(t,e,o){t.exports=o.p+"assets/img/orel20_top.d7a047d6.jpg"},779:function(t,e,o){t.exports=o.p+"assets/img/kotleta20_top.2488a779.jpg"},780:function(t,e,o){t.exports=o.p+"assets/img/qgc_uavcan_settings.d01d136d.jpg"}}]);