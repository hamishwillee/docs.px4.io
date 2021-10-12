(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{1326:function(t,a,e){t.exports=e.p+"assets/img/smart-battery-rotoye.e82fa0b7.jpg"},1327:function(t,a,e){t.exports=e.p+"assets/img/smart-battery-rotoye-pack.6bf3930f.jpg"},1328:function(t,a,e){t.exports=e.p+"assets/img/smart-battery-rotoye-connection.c02a8c37.png"},2631:function(t,a,e){"use strict";e.r(a);var r=e(19),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"rotoye-batmon"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rotoye-batmon"}},[t._v("#")]),t._v(" Rotoye Batmon")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://rotoye.com/batmon/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rotoye Batmon"),r("OutboundLink")],1),t._v("은 기성품인 리튬 이온 및 LiPo 배터리에 스마트 배터리 기능을 추가하는 키트입니다. 독립형 장치로 또는 공장에서 조립된 스마트 배터리의 일부로 구입할 수 있습니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("작성 당시에는 "),r("a",{attrs:{href:"#build-px4-firmware"}},[t._v("PX4의 사용자 지정 분기를 구축")]),t._v("함으로써만 Batmon을 사용할 수 있습니다. 코드라인의 지원은 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16723",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR 승인"),r("OutboundLink")],1),t._v(" 대기 중입니다.")])]),t._v(" "),r("p",[r("img",{attrs:{src:e(1326),alt:"Rotoye Batmon 보드"}})]),t._v(" "),r("p",[r("img",{attrs:{src:e(1327),alt:"사전 조립된 Rotoye 스마트 배터리"}})]),t._v(" "),r("h2",{attrs:{id:"구매"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#구매"}},[t._v("#")]),t._v(" 구매")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://rotoye.com/batmon/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rotoye Store"),r("OutboundLink")],1),t._v(": Batmon 키트, 맞춤형 스마트 배터리 및 액세서리")]),t._v(" "),r("h2",{attrs:{id:"배선"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#배선"}},[t._v("#")]),t._v(" 배선")]),t._v(" "),r("p",[t._v("Rotoye Batmon 시스템은 I2C 핀이 있는 XT-90 배터리 커넥터와 광절연기 보드를 사용하여 데이터를 전송합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(1328),alt:"보드 연결"}})]),t._v(" "),r("p",[t._v("자세한 내용은 "),r("a",{attrs:{href:"https://github.com/rotoye/batmon_reader",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),r("OutboundLink")],1),t._v("를 참고하십시오.")]),t._v(" "),r("h2",{attrs:{id:"소프트웨어-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#소프트웨어-설정"}},[t._v("#")]),t._v(" 소프트웨어 설정")]),t._v(" "),r("h3",{attrs:{id:"px4-펌웨어-빌드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-펌웨어-빌드"}},[t._v("#")]),t._v(" PX4 펌웨어 빌드")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://github.com/rotoye/PX4-Autopilot/tree/batmon_4.03",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Rotoye의 PX4 포크"),r("OutboundLink")],1),t._v(" 복제 또는 다운로드:"),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/rotoye/PX4-Autopilot.git\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n")])])])]),t._v(" "),r("li",[r("em",[t._v("batmon_4.03")]),t._v(" 브랜치 확인"),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin batmon_4.03\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout batmon_4.03\n")])])])]),t._v(" "),r("li",[t._v("대상 보드의 "),r("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("펌웨어 빌드 및 업로드")])],1)]),t._v(" "),r("h3",{attrs:{id:"매개변수-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-설정"}},[t._v("#")]),t._v(" 매개변수 설정")]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v(" 에서:")]),t._v(" "),r("ol",[r("li",[t._v("다음 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("매개변수")]),t._v("를 설정합니다.\n"),r("ul",[r("li",[r("code",[t._v("BATx_SOURCE")]),t._v("를 "),r("code",[t._v("External")]),t._v(",")]),t._v(" "),r("li",[r("code",[t._v("SENS_EN_BAT")]),t._v("를 "),r("code",[t._v("true")]),t._v(",")]),t._v(" "),r("li",[r("code",[t._v("BAT_SMBUS_MODEL")]),t._v("를 "),r("code",[t._v("3:Rotoye")])])])],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink 콘솔"),r("OutboundLink")],1),t._v("을 엽니다.")]),t._v(" "),r("li",[t._v("콘솔에서 "),r("RouterLink",{attrs:{to:"/ko/modules/modules_driver.html"}},[t._v("batt_smbus 드라이버")]),t._v("를 시작합니다. 예를 들어 동일한 버스에서 두 개의 BatMon을 실행하려면:"),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("batt_smbus start -X -b "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" -a "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# External bus 1, address 0x0b  ")]),t._v("\nbatt_smbus start -X -b "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" -a "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# External bus 1, address 0x0c")]),t._v("\n")])])])],1)]),t._v(" "),r("h2",{attrs:{id:"추가-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://rotoye.com/batmon-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("빠른 시작 가이드"),r("OutboundLink")],1),t._v(" (Rotoye)")])])}),[],!1,null,null,null);a.default=s.exports}}]);