(window.webpackJsonp=window.webpackJsonp||[]).push([[837],{3189:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"zubax-telega-escs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zubax-telega-escs"}},[e._v("#")]),e._v(" Zubax Telega ESCs")]),e._v(" "),o("p",[e._v("Zubax Telega is a high end, proprietary sensorless FOC motor control technology. It is used in multiple products, including the "),o("a",{attrs:{href:"https://zubax.com/products/myxa",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax Myxa"),o("OutboundLink")],1),e._v(" ESC, "),o("a",{attrs:{href:"https://zubax.com/products/mitochondrik",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax Mitochondrik"),o("OutboundLink")],1),e._v(" motor controller module, and Zubax Sadulli integrated drive.")]),e._v(" "),o("p",[e._v("While Telega can be controlled using traditional PWM input, it is designed to operate over CAN bus using "),o("RouterLink",{attrs:{to:"/zh/dronecan/"}},[e._v("DroneCAN")]),e._v(".")],1),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("ESCs based on Zubax Telega  require non-trivial tuning of the propulsion system in order to deliver adequate performance and ensure robust operation. Users who lack the necessary tuning expertise are advised to either [purchase pre-tuned UAV propulsion kits](https://zubax.com/products/uav_propulsion_kits) or to use Zubax Robotic's professional tuning service. Questions on this matter should be addressed to: [support@zubax.com](mailto:support@zubax.com).")])]),e._v(" "),o("p",[o("img",{attrs:{src:r(437),alt:"Sadulli - Top"}})]),e._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://zubax.com/products/myxa",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax Myxa"),o("OutboundLink")],1),e._v(": High-end PMSM/BLDC motor controller (FOC ESC) for light unmanned aircraft and watercraft.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://zubax.com/products/mitochondrik",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax Mitochondrik"),o("OutboundLink")],1),e._v(": Integrated sensorless PMSM/BLDC motor controller chip (used in ESCs and integrated drives)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://shop.zubax.com/products/komar-motor-controller-open-hardware-reference-design-for-mitochondrik?variant=32931555868771",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax Komar"),o("OutboundLink")],1),e._v(": Open hardware reference design for Mitochondrik")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://shop.zubax.com/collections/integrated-drives/products/sadulli-integrated-drive-open-hardware-reference-design-for-mitochondrik?variant=27740841181283",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax Sadulli Integrated Drive"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"hardware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),o("p",[e._v("ESCs are connected to the CAN bus using a Pixhawk standard 4 pin JST GH cable. For more information, refer to the "),o("RouterLink",{attrs:{to:"/zh/can/#wiring"}},[e._v("CAN Wiring")]),e._v(" instructions. ESC order does not matter.")],1),e._v(" "),o("h2",{attrs:{id:"firmware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#firmware-setup"}},[e._v("#")]),e._v(" Firmware Setup")]),e._v(" "),o("p",[e._v("Motor enumeration for "),o("a",{attrs:{href:"https://zubax.com/products/telega",target:"_blank",rel:"noopener noreferrer"}},[e._v("Telega-based ESCs"),o("OutboundLink")],1),e._v(" is usually performed using the "),o("a",{attrs:{href:"https://files.zubax.com/products/com.zubax.kucher/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kucher tool"),o("OutboundLink")],1),e._v(' (or less "GUI-friendly" '),o("a",{attrs:{href:"https://dronecan.github.io/GUI_Tool/Overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DroneCAN GUI Tool"),o("OutboundLink")],1),e._v("). Telega does NOT support automatic enumeration by spinning the motor.")]),e._v(" "),o("p",[e._v("There is some guidance here: "),o("a",{attrs:{href:"https://forum.zubax.com/t/quick-start-guide-for-myxa-v0-1/911",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quick start guide for Myxa v0.1"),o("OutboundLink")],1),e._v(" (Zubax blog).")]),e._v(" "),o("p",[e._v("Telega ESCs also require other motor setup and configuration for reliable performance. See the above guide and other Zubax documentation for more information.")]),e._v(" "),o("h2",{attrs:{id:"flight-controller-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-setup"}},[e._v("#")]),e._v(" Flight Controller Setup")]),e._v(" "),o("h3",{attrs:{id:"enable-dronecan"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enable-dronecan"}},[e._v("#")]),e._v(" Enable DroneCAN")]),e._v(" "),o("p",[e._v("Connect the ESCs to the Pixhawk CAN bus. Power up the entire vehicle using a battery or power supply (not just the flight controller over USB) and enable the DroneCAN driver by setting the parameter "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ENABLE"}},[e._v("UAVCAN_ENABLE")]),e._v(" to "),o("code",[e._v("3")]),e._v(" to enable both dynamic node ID allocation and DroneCAN ESC output.")],1),e._v(" "),o("h3",{attrs:{id:"px4-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),o("p",[e._v("(Optional) Set "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#UAVCAN_ESC_IDLT"}},[e._v("UAVCAN_ESC_IDLT")]),e._v(" to "),o("code",[e._v("1")]),e._v(" in order to ensure that the motors are always running at least at the idle throttle while the system is armed.")],1),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),o("p",[e._v("Some systems will not benefit from this behavior, e.g. glider drones).")])]),e._v(" "),o("h2",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("h3",{attrs:{id:"motors-not-spinning-when-armed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motors-not-spinning-when-armed"}},[e._v("#")]),e._v(" Motors not spinning when armed")]),e._v(" "),o("p",[e._v("If the PX4 Firmware arms but the motors do not start to rotate, check that parameter "),o("code",[e._v("UAVCAN_ENABLE=3")]),e._v(" to use DroneCAN ESCs. If the motors do not start spinning before thrust is increased, check "),o("code",[e._v("UAVCAN_ESC_IDLT=1")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"dronecan-devices-dont-get-node-id-firmware-update-fails"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dronecan-devices-dont-get-node-id-firmware-update-fails"}},[e._v("#")]),e._v(" DroneCAN devices dont get node ID/Firmware Update Fails")]),e._v(" "),o("p",[e._v("PX4 requires an SD card for DroneCAN node allocation and during firmware update (which happen during boot). Check that there is a (working) SD card present and reboot.")])])}),[],!1,null,null,null);t.default=a.exports},437:function(e,t,r){e.exports=r.p+"assets/img/sadulli_top.0c41076a.jpg"}}]);