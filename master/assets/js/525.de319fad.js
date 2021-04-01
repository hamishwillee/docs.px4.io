(window.webpackJsonp=window.webpackJsonp||[]).push([[525],{1621:function(t,e,n){"use strict";n.r(e);var r=n(18),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"aerotenna-ocpoc-zynq-mini-flight-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aerotenna-ocpoc-zynq-mini-flight-controller"}},[t._v("#")]),t._v(" Aerotenna OcPoC-Zynq Mini Flight Controller")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),r("a",{attrs:{href:"https://ainstein.ai/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),r("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("This flight controller has been "),r("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_experimental.html"}},[t._v("discontinued")]),t._v(" and is no longer commercially available.")],1),t._v(" "),r("p",[t._v("PX4 v1.11 is the last release that has experimental support for this platform.")])]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://aerotenna.readme.io/docs/ocpoc-mini-zynq-specifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("OcPoC-Zynq Mini"),r("OutboundLink")],1),t._v(" is a FPGA+ARM SoC based flight control platform.")]),t._v(" "),r("p",[t._v("OcPoC-Zynq's enhanced I/O flexibility and increased processing power makes it a great solution for commercial UAS developers and researchers.\nThe FPGA's I/O flexibility allows for rapid sensor integration and customization of the flight controller hardware, allowing for capabilities such as triple redundancy in GPS, magnetometers, and IMUs.\nOcPoC-Zynq maintains also lightweight, compact footprint, leaving more space and weight on the airframe for sensor and peripheral expansion.")]),t._v(" "),r("p",[t._v("Main documentation is available on "),r("a",{attrs:{href:"https://aerotenna.readme.io/docs/ocpoc-mini-zynq-specifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aerotenna's User Hub"),r("OutboundLink")],1),t._v(" for hardware setup, FAQs, and various tutorials including FPGA and kernel development.")]),t._v(" "),r("p",[r("img",{attrs:{src:n(759),alt:"ocpoc-zynq-mini"}})]),t._v(" "),r("h2",{attrs:{id:"quick-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[t._v("#")]),t._v(" Quick Summary")]),t._v(" "),r("ul",[r("li",[t._v("Main FPGA+ARM System-on-Chip: Xilinx Zynq Z-7010\n"),r("ul",[r("li",[t._v("CPU: 667 MHz Dual-Core ARM A9")]),t._v(" "),r("li",[t._v("FPGA: Artix®-7 with 28K Logic Cells")]),t._v(" "),r("li",[t._v("RAM: 512 MB DDR3")]),t._v(" "),r("li",[t._v("Flash: 128 MB")]),t._v(" "),r("li",[t._v("SD Card: 16 GB")])])]),t._v(" "),r("li",[t._v("IMU: 2x MPU9250 9-DOF")]),t._v(" "),r("li",[t._v("Baro: 1x MS5611")]),t._v(" "),r("li",[t._v("Power: 5-30 VDC\n"),r("ul",[r("li",[t._v("OcPoC regulates internally to 5V")]),t._v(" "),r("li",[t._v("2S-6S LiPo battery is typical power source on airframe")]),t._v(" "),r("li",[t._v('For bench testing, the console "USB1" port supplies 5V')])])]),t._v(" "),r("li",[t._v("16x Programmable 3-pin GPIOs")]),t._v(" "),r("li",[t._v("10x Programmable I/Os on JST-GH connectors supporting the following interfaces:\n"),r("ul",[r("li",[t._v("I2C")]),t._v(" "),r("li",[t._v("USB-OTG")]),t._v(" "),r("li",[t._v("USB-UART")]),t._v(" "),r("li",[t._v("SPI")]),t._v(" "),r("li",[t._v("CSI")]),t._v(" "),r("li",[t._v("GSI")]),t._v(" "),r("li",[t._v("CAN")])])]),t._v(" "),r("li",[t._v("Availability: "),r("a",{attrs:{href:"https://sensing.ai/products/ocpoc%E2%84%A2-with-xilinx-zynq%C2%AE-mini-soc-flight-controller",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ainstein Store"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"pinouts-and-sd-card-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pinouts-and-sd-card-setup"}},[t._v("#")]),t._v(" Pinouts and SD Card Setup")]),t._v(" "),r("p",[t._v("Pinouts for the default OcPoC-Zynq configuration and full step-by-step instructions for first time setup are available on "),r("a",{attrs:{href:"https://aerotenna.readme.io/docs/ocpoc-mini-zynq-specifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aerotenna's User Hub"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"building-px4-for-ocpoc-zynq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#building-px4-for-ocpoc-zynq"}},[t._v("#")]),t._v(" Building PX4 for OcPoC-Zynq")]),t._v(" "),r("p",[t._v("After setting up the "),r("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("PX4 development environment")]),t._v(" and cloning the "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Firmware"),r("OutboundLink")],1),t._v(", you can build PX4 for OcPoC-Zynq with the following commands (for Aerotenna's default ubuntu-armhf root file system):")],1),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("make aerotenna_ocpoc_ubuntu\n")])])]),r("p",[t._v("See the user hub page "),r("a",{attrs:{href:"https://aerotenna.readme.io/docs/px4-setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 on OcPoC Zynq Mini"),r("OutboundLink")],1),t._v(" for full step-by-step instructions for first time setup of PX4 on OcPoC-Zynq.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("At the present time PX4 firmware must be built from source as no pre-built binaries for OcPoC-Zynq are supplied through QGroundControl.")])])])}),[],!1,null,null,null);e.default=o.exports},759:function(t,e,n){t.exports=n.p+"assets/img/hardware-ocpoc-zynq-mini.8a7bcf6d.jpg"}}]);