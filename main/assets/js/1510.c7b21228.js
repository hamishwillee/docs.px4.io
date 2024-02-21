(window.webpackJsonp=window.webpackJsonp||[]).push([[1510],{2782:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sik-라디오-통합"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sik-라디오-통합"}},[t._v("#")]),t._v(" SiK 라디오 통합")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/LorenzMeier/SiK",target:"_blank",rel:"noopener noreferrer"}},[t._v("SiK 라디오"),s("OutboundLink")],1),t._v("는 텔레메트리 펌웨어와 도구들입니다.")]),t._v(" "),s("p",[t._v("Information about "),s("em",[t._v("using")]),t._v(" SiK Radio can be found in "),s("RouterLink",{attrs:{to:"/ko/telemetry/sik_radio.html"}},[t._v("Peripheral Hardware > Telemetry > SiK Radio")])],1),t._v(" "),s("p",[t._v('아래의 "개발자" 정보는 소스에서 SiK 펌웨어를 빌드하고 AT 명령을 사용하여 구성하는 방법에 대하여 설명합니다.')]),t._v(" "),s("h2",{attrs:{id:"지원-라디오-하드웨어"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#지원-라디오-하드웨어"}},[t._v("#")]),t._v(" 지원 라디오 하드웨어")]),t._v(" "),s("p",[t._v("SiK 저장소에는 다음 텔레메트리(2020-02-25)들의 부트로더와 펌웨어를 제공합니다.")]),t._v(" "),s("ul",[s("li",[t._v("HopeRF HM-TRP")]),t._v(" "),s("li",[t._v("HopeRF RF50-DEMO")]),t._v(" "),s("li",[t._v("RFD900")]),t._v(" "),s("li",[t._v("RFD900a")]),t._v(" "),s("li",[t._v("RFD900p")]),t._v(" "),s("li",[t._v("RFD900pe")]),t._v(" "),s("li",[t._v("RFD900u")]),t._v(" "),s("li",[t._v("RFD900ue")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("SiK 저장소는 RFD900x 와 RFD900ux의 텔레메트리 펌웨어를 현재는 제공하지 않습니다. 이러한 라디오의 펌웨어를 업데이트하려면(예: MAVLink v2.0을 지원하기 위해) 다음 프로세스를 참고하십시오.")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://files.rfdesign.com.au/firmware/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFDesign 웹사이트"),s("OutboundLink")],1),t._v("에서 적절한 펌웨어를 다운로드합니다.")]),t._v(" "),s("li",[t._v("Windows PC에서 "),s("a",{attrs:{href:"https://files.rfdesign.com.au/tools/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFD 모뎀 도구"),s("OutboundLink")],1),t._v("를 다운로드하여 설치합니다.")]),t._v(" "),s("li",[t._v("Use the RFD Modem Tools GUI to upload the firmware to your RFD900x or RFD900ux telemetry radio.")])])]),t._v(" "),s("h2",{attrs:{id:"빌드-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#빌드-방법"}},[t._v("#")]),t._v(" 빌드 방법")]),t._v(" "),s("p",[t._v("You will need to install the required 8051 compiler, as this is not included in the default PX4 Build toolchain.")]),t._v(" "),s("h3",{attrs:{id:"맥-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#맥-os"}},[t._v("#")]),t._v(" 맥 OS")]),t._v(" "),s("p",[t._v("Install the toolchain:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sdcc\n")])])]),s("p",[t._v("Build the image for the standard SiK Radio / 3DR Radio:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/LorenzMeier/SiK.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" SiK/Firmware\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("p",[t._v("Upload it to the radio ("),s("strong",[t._v("change the serial port name")]),t._v("):")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("라디오에 업로드 \\(<0>직렬 포트 이름 변경</0>\\):\n")])])]),s("h2",{attrs:{id:"설정-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설정-방법"}},[t._v("#")]),t._v(" 설정 방법")]),t._v(" "),s("p",[t._v("The radio supports AT commands for configuration.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v(" /dev/tty.usbserial-CHANGETHIS "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("57600")]),t._v(" 8N1\n")])])]),s("p",[t._v("Then start command mode:")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("DO NOT TYPE ANYTHING ONE SECOND BEFORE AND AFTER")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("+++\n")])])]),s("p",[t._v("List the current settings:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("ATI5\n")])])]),s("p",[t._v("Then set the net ID, write settings and reboot radio:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ATS3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),t._v("\nAT"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("W\nATZ\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("You might have to power-cycle the radio to connect it to the 2nd radio.")])])])}),[],!1,null,null,null);a.default=r.exports}}]);