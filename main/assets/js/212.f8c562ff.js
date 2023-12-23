(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{1705:function(t,e,r){},1757:function(t,e,r){"use strict";r(1705)},2027:function(t,e,r){"use strict";r.r(e);r(1757);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sapog-esc-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sapog-esc-firmware"}},[t._v("#")]),t._v(" Sapog ESC Firmware")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/sapog#px4-sapog",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sapog"),a("OutboundLink")],1),t._v(" firmware is an advanced open source sensorless PMSM/BLDC motor controller firmware designed for use in propulsion systems of electric unmanned vehicles.")]),t._v(" "),a("p",[t._v("While it can be controlled using traditional PWM input, it is designed to operate over CAN bus using "),a("RouterLink",{attrs:{to:"/en/dronecan/"}},[t._v("DroneCAN")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),a("p",[t._v("Multiple vendors sell ESC hardware that runs sapog firmware:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zubax.com/products/orel_20",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zubax Orel 20"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://holybro.com/products/kotleta20",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Kotleta20"),a("OutboundLink")],1)])]),t._v(" "),a("div",{attrs:{id:"image_container"}},[a("div",{staticClass:"image_column"},[a("img",{attrs:{src:r(778),alt:"Orel20 - Top"}}),a("br"),a("a",{attrs:{href:"https://zubax.com/products/orel_20"}},[t._v("Zubax Orel 20")])]),t._v(" "),a("div",{staticClass:"image_column"},[a("img",{attrs:{src:r(779),alt:"Holybro Kotleta20 top"}}),a("br"),a("a",{attrs:{href:"https://holybro.com/products/kotleta20"}},[t._v("Holybro Kotleta20")])])]),t._v(" "),a("h2",{attrs:{id:"hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[t._v("#")]),t._v(" Hardware Setup")]),t._v(" "),a("p",[t._v("ESCs are connected to the CAN bus using a Pixhawk standard 4 pin JST GH cable.\nFor more information, refer to the "),a("RouterLink",{attrs:{to:"/en/can/#wiring"}},[t._v("CAN Wiring")]),t._v(" instructions.\nESC order does not matter.")],1),t._v(" "),a("h2",{attrs:{id:"firmware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firmware-setup"}},[t._v("#")]),t._v(" Firmware Setup")]),t._v(" "),a("p",[t._v("ESCs come with an existing build of Sapog installed. If you want to update:")]),t._v(" "),a("p",[t._v("To build the firmware:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive https://github.com/PX4/sapog\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" sapog/firmware\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RELEASE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[t._v("This will create a file "),a("code",[t._v("*.application.bin")]),t._v(". in "),a("code",[t._v("build/")]),t._v(".\nThis binary can be flashed through the autopilot over DroneCAN via the sapog bootloader.\nSee "),a("RouterLink",{attrs:{to:"/en/dronecan/#firmware-update"}},[t._v("DroneCAN Firmware Update")]),t._v(".")],1),t._v(" "),a("p",[t._v("Refer to the "),a("a",{attrs:{href:"https://github.com/PX4/sapog",target:"_blank",rel:"noopener noreferrer"}},[t._v("project page"),a("OutboundLink")],1),t._v(" to learn more, including how to flash without using the DroneCAN bootloader (i.e. on a not-yet-programmed device) or for development.")]),t._v(" "),a("h2",{attrs:{id:"flight-controller-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-setup"}},[t._v("#")]),t._v(" Flight Controller Setup")]),t._v(" "),a("h3",{attrs:{id:"enabling-dronecan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-dronecan"}},[t._v("#")]),t._v(" Enabling DroneCAN")]),t._v(" "),a("p",[t._v("Connect the ESCs to the Pixhawk CAN bus. Power up the entire vehicle using a battery or power supply (not just the flight controller over USB) and enable the DroneCAN driver by setting the parameter "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[t._v("UAVCAN_ENABLE")]),t._v(" to '3' to enable both dynamic node ID allocation and DroneCAN ESC output.")],1),t._v(" "),a("h3",{attrs:{id:"automatic-esc-enumeration-using-qgroundcontrol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatic-esc-enumeration-using-qgroundcontrol"}},[t._v("#")]),t._v(" Automatic ESC Enumeration using QGroundControl")]),t._v(" "),a("p",[t._v("This section shows how to enumerate any "),a("a",{attrs:{href:"https://github.com/PX4/sapog#px4-sapog",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sapog-based"),a("OutboundLink")],1),t._v('-based ESCs "automatically" using '),a("em",[t._v("QGroundControl")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can skip this section if there is only one ESC in your setup, because the ESC index is already set to zero by default.")])]),t._v(" "),a("p",[t._v("To enumerate the ESC:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Power the vehicle with a battery and connect to "),a("em",[t._v("QGroundControl")])])]),t._v(" "),a("li",[a("p",[t._v("Navigate to "),a("strong",[t._v("Vehicle Setup > Power")]),t._v(" in QGC.")])]),t._v(" "),a("li",[a("p",[t._v("Start the process of ESC auto-enumeration by pressing the "),a("strong",[t._v("Start Assignment")]),t._v(" button, as shown on the screenshot below.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(780),alt:"QGC - DroneCAN ESC auto-enumeration"}})]),t._v(" "),a("p",[t._v("You will hear a sound indicating that the flight controller has entered the ESC enumeration mode.")])]),t._v(" "),a("li",[a("p",[t._v("Manually turn each motor in the correct direction of its rotation (as specified in the "),a("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v("), starting from the first motor and finishing with the last motor.\nEach time you turn a motor, you should hear a confirmation beep.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Make sure to turn each of the motors in the correct direction, as the ESC will automatically learn and remember the direction (i.e. motors that spin clockwise during normal operation must also be turned clockwise during enumeration).")])])]),t._v(" "),a("li",[a("p",[t._v("After the last motor is enumerated, the confirmation sound should change to indicate that the enumeration procedure is complete.")])]),t._v(" "),a("li",[a("p",[t._v("Reboot PX4 and the Sapog ESCs to apply the new enumeration IDs.")])])]),t._v(" "),a("p",[t._v("The following video demonstrates the process:")]),t._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/4nSa8tvpbgQ",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),t._v(" "),a("h3",{attrs:{id:"manual-esc-enumeration-using-sapog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-esc-enumeration-using-sapog"}},[t._v("#")]),t._v(" Manual ESC Enumeration using Sapog")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("We recommend automated "),a("a",{attrs:{href:"#automatic-esc-enumeration-using-qgroundcontrol"}},[t._v("Sapog ESC Enumeration using QGroundControl")]),t._v(" shown above rather than manual enumeration (as it is easier and safer).")])]),t._v(" "),a("p",[t._v("You can manually configure the ESC index and direction using the "),a("a",{attrs:{href:"https://dronecan.github.io/GUI_Tool/Overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DroneCAN GUI Tool"),a("OutboundLink")],1),t._v(".\nThis assigns the following Sapog configuration parameters for each enumerated ESC:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("esc_index")])]),t._v(" "),a("li",[a("code",[t._v("ctl_dir")])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://files.zubax.com/products/io.px4.sapog/Sapog_v2_Reference_Manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sapog reference manual"),a("OutboundLink")],1),t._v(" for more information about the parameters.")])]),t._v(" "),a("h3",{attrs:{id:"px4-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),a("p",[t._v("Assign motors to outputs using the "),a("RouterLink",{attrs:{to:"/en/config/actuators.html#actuator-testing"}},[t._v("Acutator")]),t._v(" configuration screen.")],1),t._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/en/dronecan/#troubleshooting"}},[t._v("DroneCAN Troubleshooting")])],1),t._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/PX4/sapog#px4-sapog",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/Sapog"),a("OutboundLink")],1),t._v(" (Github)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://files.zubax.com/products/io.px4.sapog/Sapog_v2_Reference_Manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sapog v2 Reference Manual"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/Using+Sapog-based+ESC+with+PX4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Sapog based ESC with PX4"),a("OutboundLink")],1),t._v(" (Zubax KB)")])])])}),[],!1,null,null,null);e.default=o.exports},778:function(t,e){t.exports="data:image/jpeg;base64,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"},779:function(t,e,r){t.exports=r.p+"assets/img/kotleta20_top.54bb0495.jpg"},780:function(t,e,r){t.exports=r.p+"assets/img/qgc_uavcan_settings.5a8e6fc6.jpg"}}]);