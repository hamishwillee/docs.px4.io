(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{1999:function(t,e,r){"use strict";r.r(e);var o=r(18),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"aerotenna-ocpoc-zynq-미니-비행-컨트롤러"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#aerotenna-ocpoc-zynq-미니-비행-컨트롤러"}},[t._v("#")]),t._v(" Aerotenna OcPoC-Zynq 미니 비행 컨트롤러")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("PX4 does not manufacture this (or any) autopilot. Contact the "),o("a",{attrs:{href:"https://ainstein.ai/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),o("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("PX4 support for this flight controller is "),o("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[t._v("experimental")]),t._v(".")],1)]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://aerotenna.readme.io/docs/ocpoc-mini-zynq-specifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("OcPoC-Zynq Mini"),o("OutboundLink")],1),t._v(" is a FPGA+ARM SoC based flight control platform.")]),t._v(" "),o("p",[t._v("OcPoC-Zynq's enhanced I/O flexibility and increased processing power makes it a great solution for commercial UAS developers and researchers. The FPGA's I/O flexibility allows for rapid sensor integration and customization of the flight controller hardware, allowing for capabilities such as triple redundancy in GPS, magnetometers, and IMUs. OcPoC-Zynq maintains also lightweight, compact footprint, leaving more space and weight on the airframe for sensor and peripheral expansion.")]),t._v(" "),o("p",[t._v("Main documentation is available on "),o("a",{attrs:{href:"https://aerotenna.readme.io/docs/ocpoc-mini-zynq-specifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aerotenna's User Hub"),o("OutboundLink")],1),t._v(" for hardware setup, FAQs, and various tutorials including FPGA and kernel development.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(736),alt:"ocpoc-zynq-mini"}})]),t._v(" "),o("h2",{attrs:{id:"quick-summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[t._v("#")]),t._v(" Quick Summary")]),t._v(" "),o("ul",[o("li",[t._v("메인 FPGA + ARM 시스템 - 온 - 칩 : 자일링스 Zynq Z-7010\n"),o("ul",[o("li",[t._v("CPU: 667 MHz Dual-Core ARM A9")]),t._v(" "),o("li",[t._v("FPGA: Artix®-7 with 28K Logic Cells")]),t._v(" "),o("li",[t._v("RAM: 512 MB DDR3")]),t._v(" "),o("li",[t._v("Flash: 128 MB")]),t._v(" "),o("li",[t._v("SD Card: 16 GB")])])]),t._v(" "),o("li",[t._v("IMU: 2x MPU9250 9-DOF")]),t._v(" "),o("li",[t._v("Baro: 1x MS5611")]),t._v(" "),o("li",[t._v("Power: 5-30 VDC\n"),o("ul",[o("li",[t._v("OcPoC regulates internally to 5V")]),t._v(" "),o("li",[t._v("2S-6S LiPo 배터리는 기체상의 일반적인 전원입니다.")]),t._v(" "),o("li",[t._v('벤치 테스트를 위해 콘솔 "USB1"포트는 5V')])])]),t._v(" "),o("li",[t._v("16x Programmable 3-pin GPIOs")]),t._v(" "),o("li",[t._v("다음 인터페이스를 지원하는 JST-GH 커넥터에서 10x 프로그래밍 가능한 I / O :\n"),o("ul",[o("li",[t._v("I2C")]),t._v(" "),o("li",[t._v("USB-OTG")]),t._v(" "),o("li",[t._v("USB-UART")]),t._v(" "),o("li",[t._v("SPI")]),t._v(" "),o("li",[t._v("CSI")]),t._v(" "),o("li",[t._v("GSI")]),t._v(" "),o("li",[t._v("CAN")])])]),t._v(" "),o("li",[t._v("Availability: "),o("a",{attrs:{href:"https://sensing.ai/products/ocpoc%E2%84%A2-with-xilinx-zynq%C2%AE-mini-soc-flight-controller",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ainstein Store"),o("OutboundLink")],1)])]),t._v(" "),o("h2",{attrs:{id:"핀아웃-및-sd-카드-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#핀아웃-및-sd-카드-설정"}},[t._v("#")]),t._v(" 핀아웃 및 SD 카드 설정")]),t._v(" "),o("p",[t._v("Pinouts for the default OcPoC-Zynq configuration and full step-by-step instructions for first time setup are available on "),o("a",{attrs:{href:"https://aerotenna.readme.io/docs/ocpoc-mini-zynq-specifications",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aerotenna's User Hub"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"ocpoc-zynq-용-px4-구현"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ocpoc-zynq-용-px4-구현"}},[t._v("#")]),t._v(" OcPoC-Zynq 용 PX4 구현")]),t._v(" "),o("p",[t._v("After setting up the PX4 development environment and cloning the "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Firmware"),o("OutboundLink")],1),t._v(", you can build PX4 for OcPoC-Zynq with the following commands (for Aerotenna's default ubuntu-armhf root file system):")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v("make aerotenna_ocpoc_ubuntu\n")])])]),o("p",[t._v("See the user hub page "),o("a",{attrs:{href:"https://aerotenna.readme.io/docs/px4-setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 on OcPoC Zynq Mini"),o("OutboundLink")],1),t._v(" for full step-by-step instructions for first time setup of PX4 on OcPoC-Zynq.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("At the present time PX4 firmware must be built from source as no pre-built binaries for OcPoC-Zynq are supplied through QGroundControl.")])])])}),[],!1,null,null,null);e.default=n.exports},736:function(t,e,r){t.exports=r.p+"assets/img/hardware-ocpoc-zynq-mini.8a7bcf6d.jpg"}}]);