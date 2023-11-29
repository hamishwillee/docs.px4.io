(window.webpackJsonp=window.webpackJsonp||[]).push([[1478],{2698:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"px4-dronecan-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-dronecan-firmware"}},[e._v("#")]),e._v(" PX4 DroneCAN Firmware")]),e._v(" "),r("p",[e._v("PX4 can run as the firmware on many DroneCAN peripherals. There are multiple benefits to this:")]),e._v(" "),r("ul",[r("li",[e._v("PX4 has built-in drivers for a "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[e._v("wide range"),r("OutboundLink")],1),e._v(" of sensors and peripherals components.")]),e._v(" "),r("li",[e._v("PX4 has a robust DroneCAN driver implementation that has undergone multiple years of field testing.")]),e._v(" "),r("li",[e._v("PX4 is continuously being developed. You routinely get access to the latest improvements.")]),e._v(" "),r("li",[e._v('PX4\'s estimation and control code makes it easy to create "smart" cannodes like integrated AHRS modules.')]),e._v(" "),r("li",[e._v("The firmware is completely open source (PX4 is BSD licensed).")])]),e._v(" "),r("h2",{attrs:{id:"building-the-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#building-the-firmware"}},[e._v("#")]),e._v(" Building the Firmware")]),e._v(" "),r("p",[e._v("Follow the "),r("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[e._v("PX4 building docs")]),e._v(" just as you would to build firmware for a flight controller. Device build configurations are stored "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/boards",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(". After installing the "),r("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[e._v("PX4 toolchain")]),e._v(", clone the sources and build. For example, to build for the "),r("RouterLink",{attrs:{to:"/ko/dronecan/ark_flow.html"}},[e._v("Ark Flow")]),e._v(" target:")],1),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone --recursive https://github.com/PX4/PX4-Autopilot\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" PX4-Autopilot\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" ark_can-flow_default\n")])])]),r("p",[e._v("This will create an output in "),r("strong",[e._v("build/ark_can-flow_default")]),e._v(" named "),r("strong",[e._v("XX-X.X.XXXXXXXX.uavcan.bin")]),e._v(". Follow the instructions at "),r("RouterLink",{attrs:{to:"/ko/dronecan/#firmware-update"}},[e._v("DroneCAN firmware update")]),e._v(" to flash the firmware.")],1),e._v(" "),r("h2",{attrs:{id:"developer-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#developer-information"}},[e._v("#")]),e._v(" Developer Information")]),e._v(" "),r("p",[e._v("This section has information that is relevant to developers who want to add support for new DroneCAN hardware to the PX4 Autopilot.")]),e._v(" "),r("h3",{attrs:{id:"dronecan-bootloader-installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dronecan-bootloader-installation"}},[e._v("#")]),e._v(" DroneCAN Bootloader Installation")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("DroneCAN devices typically ship with a bootloader pre-installed.\nDo not follow the instructions in this section unless you are developing DroneCAN devices,\nor have (accidentally) corrupted/wiped your bootloader.")])]),e._v(" "),r("p",[e._v("The PX4 project includes a standard DroneCAN bootloader for STM32 devices.")]),e._v(" "),r("p",[e._v("The bootloader occupies the first 8-16 KB of flash, and is the first code executed on power-up. Typically the bootloader performs low-level device initialization, automatically determines the CAN bus baud rate, acts as a "),r("RouterLink",{attrs:{to:"/ko/dronecan/#node-id-allocation"}},[e._v("DroneCAN dynamic node ID client")]),e._v(" to obtain a unique node ID, and waits for confirmation from the flight controller before proceeding with application boot.")],1),e._v(" "),r("p",[e._v("This process ensures that a DroneCAN device can recover from invalid or corrupted application firmware without user intervention, and also permits automatic firmware updates.")]),e._v(" "),r("p",[e._v("Build the bootloader firmware by specifying the same peripheral target with the "),r("code",[e._v("canbootloader")]),e._v(" build configuration instead of the "),r("code",[e._v("default")]),e._v(" configuration.")]),e._v(" "),r("p",[e._v("For example, to build for the "),r("RouterLink",{attrs:{to:"/ko/dronecan/ark_flow.html"}},[e._v("Ark Flow")]),e._v(" target:")],1),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone --recursive https://github.com/PX4/PX4-Autopilot\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" PX4-Autopilot\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" ark_can-flow_canbootloader\n")])])]),r("p",[e._v("The binary can then be flashed to the microcontroller using your favorite SWD/JTAG debugger, such as the "),r("a",{attrs:{href:"https://black-magic.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Black Magic Probe"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://www.st.com/en/development-tools/st-link-v2.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ST-Link"),r("OutboundLink")],1),e._v(", or "),r("a",{attrs:{href:"https://www.segger.com/products/debug-probes/j-link/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Segger JLink"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"firmware-internals"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firmware-internals"}},[e._v("#")]),e._v(" Firmware Internals")]),e._v(" "),r("p",[e._v("For the most part, peripheral firmware works the same way as flight controller firmware builds. However, most modules are disabled - only the sensor drivers, DroneCAN driver, and internal infrastructure (uORB, etc.) are enabled.")]),e._v(" "),r("p",[e._v("DroneCAN communication is handled by the "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/uavcannode",target:"_blank",rel:"noopener noreferrer"}},[e._v("uavcannode"),r("OutboundLink")],1),e._v(" module. This driver handles producer-side communication - it takes sensor/actuator data from uORB, serializes it using the DroneCAN libraries, and publishes it over CAN. In the future, this will likely be merged with the "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/uavcan",target:"_blank",rel:"noopener noreferrer"}},[e._v("uavcan"),r("OutboundLink")],1),e._v(" module which handles flight controller side (consumer side) drivers, which receive/deserialize data from the CAN bus and publish them over uORB.")]),e._v(" "),r("p",[e._v("The build system also produces firmware binaries designed to be flashed through a DroneCAN bootloader via [PX4's DroneCAN flashing support] or the DroneCAN GUI, in addition to the standard raw binary, ELF, and "),r("code",[e._v(".px4")]),e._v(" firmware files.")])])}),[],!1,null,null,null);t.default=a.exports}}]);