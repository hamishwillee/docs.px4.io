(window.webpackJsonp=window.webpackJsonp||[]).push([[1172],{2198:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sik-라디오-통합"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sik-라디오-통합"}},[t._v("#")]),t._v(" SiK 라디오 통합")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/LorenzMeier/SiK",target:"_blank",rel:"noopener noreferrer"}},[t._v("SiK 라디오"),a("OutboundLink")],1),t._v("는 텔레메트리 펌웨어와 도구들입니다.")]),t._v(" "),a("p",[t._v("SiK Radio "),a("em",[t._v("사용법")]),t._v("은 "),a("RouterLink",{attrs:{to:"/ko/telemetry/sik_radio.html"}},[t._v("주변장치 > 원격 측정 > SiK 라디오")]),t._v("를 참고하십시오.")],1),t._v(" "),a("p",[t._v('아래의 "개발자" 정보는 소스에서 SiK 펌웨어를 빌드하고 AT 명령을 사용하여 구성하는 방법에 대하여 설명합니다.')]),t._v(" "),a("h2",{attrs:{id:"지원-라디오-하드웨어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#지원-라디오-하드웨어"}},[t._v("#")]),t._v(" 지원 라디오 하드웨어")]),t._v(" "),a("p",[t._v("SiK 저장소에는 다음 텔레메트리(2020-02-25)들의 부트로더와 펌웨어를 제공합니다.")]),t._v(" "),a("ul",[a("li",[t._v("HopeRF HM-TRP")]),t._v(" "),a("li",[t._v("HopeRF RF50-DEMO")]),t._v(" "),a("li",[t._v("RFD900")]),t._v(" "),a("li",[t._v("RFD900a")]),t._v(" "),a("li",[t._v("RFD900p")]),t._v(" "),a("li",[t._v("RFD900pe")]),t._v(" "),a("li",[t._v("RFD900u")]),t._v(" "),a("li",[t._v("RFD900ue")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("SiK 저장소는 RFD900x 와 RFD900ux의 텔레메트리 펌웨어를 현재는 제공하지 않습니다. 이러한 라디오의 펌웨어를 업데이트하려면(예: MAVLink v2.0을 지원하기 위해) 다음 프로세스를 참고하십시오.")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://files.rfdesign.com.au/firmware/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFDesign 웹사이트"),a("OutboundLink")],1),t._v("에서 적절한 펌웨어를 다운로드합니다.")]),t._v(" "),a("li",[t._v("Windows PC에서 "),a("a",{attrs:{href:"https://files.rfdesign.com.au/tools/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFD 모뎀 도구"),a("OutboundLink")],1),t._v("를 다운로드하여 설치합니다.")]),t._v(" "),a("li",[t._v("RFD 모뎀 도구 GUI를 사용하여, RFD900x 또는 RFD900ux 원격 측정 라디오에 펌웨어를 업로드합니다.")])])]),t._v(" "),a("h2",{attrs:{id:"빌드-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#빌드-방법"}},[t._v("#")]),t._v(" 빌드 방법")]),t._v(" "),a("p",[t._v("필수 8051 컴파일러는 기본 PX4 빌드 도구 체인에 포함되어 있지 않아서, 설치하여야 합니다.")]),t._v(" "),a("h3",{attrs:{id:"맥-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#맥-os"}},[t._v("#")]),t._v(" 맥 OS")]),t._v(" "),a("p",[t._v("툴체인을 설치합니다:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sdcc\n")])])]),a("p",[t._v("표준 SiK 라디오/3DR 라디오 이미지를 빌드합니다:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/LorenzMeier/SiK.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" SiK/Firmware\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("p",[t._v("라디오에 업로드합니다 ("),a("strong",[t._v("직렬 포트 이름 변경")]),t._v("):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("라디오에 업로드 \\(<0>직렬 포트 이름 변경</0>\\):\n")])])]),a("h2",{attrs:{id:"설정-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설정-방법"}},[t._v("#")]),t._v(" 설정 방법")]),t._v(" "),a("p",[t._v("AT 명령을 사용하여 라디오를 설정합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v(" /dev/tty.usbserial-CHANGETHIS "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("57600")]),t._v(" 8N1\n")])])]),a("p",[t._v("그런 다음 명령 모드를 시작합니다:")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("1초 전후에 아무 것도 입력하지 마십시오.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+++\n")])])]),a("p",[t._v("현재 설정을 출력합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ATI5\n")])])]),a("p",[t._v("그런 다음 네트 ID를 설정하고, 설정을 저장한 다음 라디오를 재부팅합니다:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ATS3=55\nAT&W\nATZ\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("두 번째 라디오에 연결하려면, 라디오의 전원을 껐다가 켜야 할 수 있습니다.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);