(window.webpackJsonp=window.webpackJsonp||[]).push([[581],{1994:function(e,t,r){"use strict";r.r(t);var n=r(18),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"aerotenna-ocpoc-zynq-미니-비행-컨트롤러"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aerotenna-ocpoc-zynq-미니-비행-컨트롤러"}},[e._v("#")]),e._v(" Aerotenna OcPoC-Zynq 미니 비행 컨트롤러")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")]),e._v(" PX4 does not manufacture this (or any) autopilot. Contact the "),n("a",{attrs:{href:"https://ainstein.ai/",target:"_blank",rel:"noopener noreferrer"}},[e._v("manufacturer"),n("OutboundLink")],1),e._v(" for hardware support or compliance issues.")])]),e._v(" "),n("p",[n("span")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")]),e._v(" PX4 support for this flight controller is "),n("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[e._v("experimental")]),e._v(".")],1)]),e._v(" "),n("p",[e._v("The "),n("a",{attrs:{href:"https://aerotenna.readme.io/docs/ocpoc-mini-zynq-specifications",target:"_blank",rel:"noopener noreferrer"}},[e._v("OcPoC-Zynq Mini"),n("OutboundLink")],1),e._v(" is a FPGA+ARM SoC based flight control platform.")]),e._v(" "),n("p",[e._v("OcPoC-Zynq's enhanced I/O flexibility and increased processing power makes it a great solution for commercial UAS developers and researchers. The FPGA's I/O flexibility allows for rapid sensor integration and customization of the flight controller hardware, allowing for capabilities such as triple redundancy in GPS, magnetometers, and IMUs. OcPoC-Zynq maintains also lightweight, compact footprint, leaving more space and weight on the airframe for sensor and peripheral expansion.")]),e._v(" "),n("p",[e._v("Main documentation is available on "),n("a",{attrs:{href:"https://aerotenna.readme.io/docs/ocpoc-mini-zynq-specifications",target:"_blank",rel:"noopener noreferrer"}},[e._v("Aerotenna's User Hub"),n("OutboundLink")],1),e._v(" for hardware setup, FAQs, and various tutorials including FPGA and kernel development.")]),e._v(" "),n("p",[n("img",{attrs:{src:r(746),alt:"ocpoc-zynq-mini"}})]),e._v(" "),n("h2",{attrs:{id:"quick-summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[e._v("#")]),e._v(" Quick Summary")]),e._v(" "),n("ul",[n("li",[e._v("메인 FPGA + ARM 시스템 - 온 - 칩 : 자일링스 Zynq Z-7010\n"),n("ul",[n("li",[e._v("CPU: 667 MHz Dual-Core ARM A9")]),e._v(" "),n("li",[e._v("FPGA: Artix®-7 with 28K Logic Cells")]),e._v(" "),n("li",[e._v("RAM: 512 MB DDR3")]),e._v(" "),n("li",[e._v("Flash: 128 MB")]),e._v(" "),n("li",[e._v("SD Card: 16 GB")])])]),e._v(" "),n("li",[e._v("IMU: 2x MPU9250 9-DOF")]),e._v(" "),n("li",[e._v("Baro: 1x MS5611")]),e._v(" "),n("li",[e._v("Power: 5-30 VDC\n"),n("ul",[n("li",[e._v("OcPoC regulates internally to 5V")]),e._v(" "),n("li",[e._v("2S-6S LiPo 배터리는 기체상의 일반적인 전원입니다.")]),e._v(" "),n("li",[e._v('벤치 테스트를 위해 콘솔 "USB1"포트는 5V')])])]),e._v(" "),n("li",[e._v("16x Programmable 3-pin GPIOs")]),e._v(" "),n("li",[e._v("다음 인터페이스를 지원하는 JST-GH 커넥터에서 10x 프로그래밍 가능한 I / O :\n"),n("ul",[n("li",[e._v("I2C")]),e._v(" "),n("li",[e._v("USB-OTG")]),e._v(" "),n("li",[e._v("USB-UART")]),e._v(" "),n("li",[e._v("SPI")]),e._v(" "),n("li",[e._v("CSI")]),e._v(" "),n("li",[e._v("GSI")]),e._v(" "),n("li",[e._v("CAN")])])]),e._v(" "),n("li",[e._v("Availability: "),n("a",{attrs:{href:"https://sensing.ai/products/ocpoc%E2%84%A2-with-xilinx-zynq%C2%AE-mini-soc-flight-controller",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ainstein Store"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"핀아웃-및-sd-카드-설정"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#핀아웃-및-sd-카드-설정"}},[e._v("#")]),e._v(" 핀아웃 및 SD 카드 설정")]),e._v(" "),n("p",[e._v("Pinouts for the default OcPoC-Zynq configuration and full step-by-step instructions for first time setup are available on "),n("a",{attrs:{href:"https://aerotenna.readme.io/docs/ocpoc-mini-zynq-specifications",target:"_blank",rel:"noopener noreferrer"}},[e._v("Aerotenna's User Hub"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"ocpoc-zynq-용-px4-구현"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ocpoc-zynq-용-px4-구현"}},[e._v("#")]),e._v(" OcPoC-Zynq 용 PX4 구현")]),e._v(" "),n("p",[e._v("After setting up the PX4 development environment and cloning the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Firmware"),n("OutboundLink")],1),e._v(", you can build PX4 for OcPoC-Zynq with the following commands (for Aerotenna's default ubuntu-armhf root file system):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("make aerotenna_ocpoc_ubuntu\n")])])]),n("p",[e._v("See the user hub page "),n("a",{attrs:{href:"https://aerotenna.readme.io/docs/px4-setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 on OcPoC Zynq Mini"),n("OutboundLink")],1),e._v(" for full step-by-step instructions for first time setup of PX4 on OcPoC-Zynq.")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")]),e._v(" At the present time PX4 firmware must be built from source as no pre-built binaries for OcPoC-Zynq are supplied through QGroundControl.")])])])}),[],!1,null,null,null);t.default=o.exports},746:function(e,t,r){e.exports=r.p+"assets/img/hardware-ocpoc-zynq-mini.8a7bcf6d.jpg"}}]);