(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{2517:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("div",{staticStyle:{float:"right",padding:"10px","margin-right":"20px"}},[o("a",{attrs:{href:"https://px4.io/"}},[o("img",{attrs:{src:r(459),title:"PX4 로고",width:"180px"}})])]),t._v(" "),o("h1",{attrs:{id:"px4-autopilot-user-guide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-autopilot-user-guide"}},[t._v("#")]),t._v(" PX4 Autopilot User Guide")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://img.shields.io/badge/release-main-blue.svg",alt:"배포"}}),o("OutboundLink")],1),t._v(" "),o("a",{attrs:{href:"https://discuss.px4.io//",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://img.shields.io/badge/discuss-px4-ff69b4.svg",alt:"토론"}}),o("OutboundLink")],1),t._v(" "),o("a",{attrs:{href:"https://discord.gg/dronecode",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://discordapp.com/api/guilds/1022170275984457759/widget.png?style=shield",alt:"Discord"}}),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("PX4 is the "),o("em",[t._v("Professional Autopilot")]),t._v(". 세계적인 수준의 개발자들이 산업계와 학계에서 참여하여 개발하였으며, 세계 각국에서 활동중인 여러 단체들의 지원을 받을 수 있습니다. PX4는 레이싱 드론, 운송용 드론, 자동차와 선박 등의 다양한 운송체에 적용하여 사용할 수 있습니다.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("이 안내서는 PX4를 이용한 기체조립 방법, 설정 방법 및 비행 방법에 대하여 설명합니다. 이 프로젝트에 기여하시려면,  "),o("RouterLink",{attrs:{to:"/ko/development/development.html"}},[t._v("개발")]),t._v("편을 참고하여 주십시오. :::")],1),t._v(" "),o("h2",{attrs:{id:"시작하기"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#시작하기"}},[t._v("#")]),t._v(" 시작하기")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/getting_started/"}},[t._v("시작")]),t._v("편을 먼저 읽으실 것을 추천합니다. 비행 스택(비행 모드 및 안전 기능)과 지원 하드웨어(비행 제어장치, 기체, 기체 프레임, 텔레메트리, 원격 제어 시스템)와 더불어 PX4의 전반적인 내용을 설명합니다.")],1),t._v(" "),o("p",[t._v("이 안내서를 위한 팁들은 아래과 같습니다.")]),t._v(" "),o("p",[o("strong",[t._v("가지고 있는 드론을 비행하는 경우")])]),t._v(" "),o("p",[t._v("PX4를 지원하는 기체가 준비되어 있는 경우:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("기본 설정")]),t._v("편에서는 최신 버전으로 펌웨어 업데이트 방법, 기본 센서(나침반, 자이로, IMU, 대기 속도 센서 등) 보정 방법, 원격 제어 방법과 안전 기능 설정 방법을 설명합니다.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/flying/"}},[t._v("비행")]),t._v("편은 안전 비행 방법과 장소, 시동 방법과 비행 관련 문제 해결 방법 등에 대하여 설명합니다. 또한 비행 모드에 대한 자세한 정보를 제공합니다.")],1)]),t._v(" "),o("p",[o("strong",[t._v("처음부터 PX4로 무인 항공기를 제작하는 경우")])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v('The "supported" vehicles are listed in the '),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(". These are vehicles that have tested and tuned configurations that you can download using "),o("em",[t._v("QGroundControl")]),t._v(".")],1)])]),t._v(" "),o("p",[t._v("처음부터 기체를 제작하려면")]),t._v(" "),o("ul",[o("li",[t._v("기체 선택하기 - "),o("RouterLink",{attrs:{to:"/ko/airframes/"}},[t._v("기체 제작")]),t._v("에서는 지원 기체 목록이 있으며, 기체 조립법을 자세하게 설명합니다.")],1),t._v(" "),o("li",[t._v("비행 콘트롤러 선택 - "),o("RouterLink",{attrs:{to:"/ko/getting_started/flight_controller_selection.html"}},[t._v("시작하기 > 비행 콘트롤러")]),t._v("와 "),o("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[t._v("자동항법장치")]),t._v("에 대하여 설명합니다.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/assembly/"}},[t._v("조립")]),t._v("은 주요 주변 장치를 오토파일럿에 연결하는 방법을 설명합니다.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("기초 설정")]),t._v("은 펌웨어 업데이트 방법과 설정법을 설명합니다. 주요 센서(나침반, 자이로, IMU, 대기 센서 등) 보정법, 원격 조종법과 안전 기능 설정 방법을 설명합니다.")],1)]),t._v(" "),o("p",[t._v("기체를 날릴 준비가 되었다면 "),o("RouterLink",{attrs:{to:"/ko/flying/"}},[t._v("비행")]),t._v("편을 참고하십시오.")],1),t._v(" "),o("p",[o("strong",[t._v("페이로드나 카메라를 장착하는 경우")])]),t._v(" "),o("p",[t._v("페이로드 섹션에서는 카메라를 장착하는 방법과 화물 운송이 가능하도록 PX4를 설정하는 방법을 설명합니다.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/payloads/"}},[t._v("페이로드")]),t._v("에서는 페이로드 통합 방법을 설명합니다.")],1)]),t._v(" "),o("p",[o("strong",[t._v("기체를 변경하는 경우")])]),t._v(" "),o("p",[t._v("비행 콘트롤러와 기본 센서 수정은 아래 항목에서 설명합니다. 새로운 센서를 추가하거나, 중요 비행 설정을 변경하는 경우")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("주변 장치")]),t._v("에서는 외부 센서 사용법을 설명합니다.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("기본 설정")]),t._v("에서는 주요 센서 보정법을 설명합니다.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/"}},[t._v("고급 설정")]),t._v("에서는 기체 재설정 방법과 튜닝 방법을 설명합니다.")],1)]),t._v(" "),o("p",[o("strong",[t._v("새 하드웨어에서 PX4를 실행하고 플랫폼을 확장하는 경우")])]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/development/development.html"}},[t._v("개발")]),t._v("에서는 신규 기체 사용 방법, 비행 알고리즘 수정, 신규 모드 추가, 신규 하드웨어 통합 및 비행 컨트롤러 외부에서 PX4와 통신하는 방법을 설명합니다.")],1)]),t._v(" "),o("h2",{attrs:{id:"도움-받기"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#도움-받기"}},[t._v("#")]),t._v(" 도움 받기")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/contribute/support.html"}},[t._v("지원")]),t._v(" 페이지에서는 핵심 개발 팀과 커뮤니티에서 도움 받는 방법을 설명합니다.")],1),t._v(" "),o("p",[t._v("다음과 같은 내용을 다룹니다.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/contribute/support.html#forums-and-chat"}},[t._v("도움을 받을 수 있는 포럼 목록")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/contribute/support.html#diagnosing-problems"}},[t._v("문제 진단")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/contribute/support.html#issue-bug-reporting"}},[t._v("버그 보고 방법")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/contribute/support.html#weekly-dev-call"}},[t._v("주간 온라인 개발 회의")])],1)]),t._v(" "),o("h2",{attrs:{id:"버그-및-문제점-보고"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#버그-및-문제점-보고"}},[t._v("#")]),t._v(" 버그 및 문제점 보고")]),t._v(" "),o("p",[t._v("PX4 사용에 문제가 있으시면, 먼저 "),o("RouterLink",{attrs:{to:"/ko/contribute/support.html#forums-and-chat"}},[t._v("지원 포럼")]),t._v("에 내용을 올려주십시오.")],1),t._v(" "),o("p",[t._v("개발팀의 지침에 따라, "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),o("OutboundLink")],1),t._v("에 코드 이슈를 제기할 수 있습니다. 가능하면, 문제 양식에 맞추어 "),o("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("비행 기록")]),t._v("과 기타 정보를 제공하여 주십시오.")],1),t._v(" "),o("h2",{attrs:{id:"기여"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#기여"}},[t._v("#")]),t._v(" 기여")]),t._v(" "),o("p",[t._v("코드와 문서에 기여하는 방법은 "),o("RouterLink",{attrs:{to:"/ko/contribute/"}},[t._v("기여")]),t._v("편을 참고하십시오.")],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/contribute/"}},[t._v("코드")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/contribute/docs.html"}},[t._v("문서")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/contribute/translation.html"}},[t._v("번역")])],1)]),t._v(" "),o("h2",{attrs:{id:"번역"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#번역"}},[t._v("#")]),t._v(" 번역")]),t._v(" "),o("p",[t._v("이 안내서에는 다양한 "),o("RouterLink",{attrs:{to:"/ko/contribute/translation.html"}},[t._v("번역")]),t._v("본이 있습니다. 우상단의 언어 메뉴에서 원하시는 번역본을 선택할 수 있습니다:")],1),t._v(" "),o("p",[o("img",{attrs:{src:r(460),alt:"언어 선택"}})]),t._v(" "),o("h2",{attrs:{id:"라이센스"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#라이센스"}},[t._v("#")]),t._v(" 라이센스")]),t._v(" "),o("p",[t._v("PX4 code is free to use and modify under the terms of the permissive "),o("a",{attrs:{href:"https://opensource.org/licenses/BSD-3-Clause",target:"_blank",rel:"noopener noreferrer"}},[t._v("BSD 3-clause license"),o("OutboundLink")],1),t._v(". 이 문서는 "),o("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY 4.0"),o("OutboundLink")],1),t._v(" 라이센스를 준수합니다. 자세한 정보는 "),o("RouterLink",{attrs:{to:"/ko/contribute/licenses.html"}},[t._v("라이센스")]),t._v("를 참고하십시오.")],1),t._v(" "),o("h2",{attrs:{id:"중요-행사-및-일정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#중요-행사-및-일정"}},[t._v("#")]),t._v(" 중요 행사 및 일정")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Dronecode Calendar")]),t._v(" shows important community events for platform users and developers. 사용자의 시간대와 맞는 달력을 보려면 아래 링크를 선택하십시오. 사용자 달력에 추가할 수 있습니다.")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=Europe%2FZurich",target:"_blank",rel:"noopener noreferrer"}},[t._v("스위스 – 취리히"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=America%2FTijuana",target:"_blank",rel:"noopener noreferrer"}},[t._v("태평양 시간대 – 티후아나"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://calendar.google.com/calendar/embed?src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&ctz=Australia%2FSydney",target:"_blank",rel:"noopener noreferrer"}},[t._v("오스트레일리아 – 멜버른/시드니/호바트"),o("OutboundLink")],1)])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("The calendar default timezone is Central European Time (CET).")])]),t._v(" "),o("iframe",{staticStyle:{"border-width":"0"},attrs:{src:"https://calendar.google.com/calendar/embed?title=Dronecode%20Calendar&mode=WEEK&height=600&wkst=1&bgcolor=%23FFFFFF&src=linuxfoundation.org_g21tvam24m7pm7jhev01bvlqh8%40group.calendar.google.com&color=%23691426&ctz=Europe%2FZurich",width:"800",height:"600",frameborder:"0",scrolling:"no"}}),t._v(" "),o("h3",{attrs:{id:"아이콘"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#아이콘"}},[t._v("#")]),t._v(" 아이콘")]),t._v(" "),o("p",[t._v("이 라이브러리에서 사용하는 다음 아이콘들은 별도의 라이센스를 적용합니다. 아래 그림을 참고하십시오.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(327),title:"요청된 위치 고정(예, GPS)",width:"30px"}}),t._v(" "),o("em",[t._v("placeholder")]),t._v(" icon made by "),o("a",{attrs:{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"}},[t._v("Smashicons")]),t._v(" from "),o("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is licensed by "),o("a",{attrs:{href:"https://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")]),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:r(332),title:"자동 모드",width:"30px"}}),t._v(" "),o("em",[t._v("camera-automatic-mode")]),t._v(" icon made by "),o("a",{attrs:{href:"https://www.freepik.com",title:"Freepik"}},[t._v("Freepik")]),t._v(" from "),o("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is licensed by "),o("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"운영-방법"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#운영-방법"}},[t._v("#")]),t._v(" 운영 방법")]),t._v(" "),o("p",[t._v("PX4는 "),o("a",{attrs:{href:"https://www.dronecode.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode 프로젝트"),o("OutboundLink")],1),t._v(" 주관으로 운영 관리됩니다.")]),t._v(" "),o("p",[o("a",{staticStyle:{padding:"20px"},attrs:{href:"https://www.dronecode.org/"}},[o("img",{attrs:{src:"https://mavlink.io/assets/site/logo_dronecode.png",alt:"Dronecode 로고",width:"110px"}})]),t._v(" "),o("a",{staticStyle:{padding:"20px"},attrs:{href:"https://www.linuxfoundation.org/projects"}},[o("img",{attrs:{src:"https://mavlink.io/assets/site/logo_linux_foundation.png",alt:"리눅스 재단 로고",width:"80px"}})])]),t._v(" "),o("div",{staticStyle:{padding:"10px"}},[t._v(" ")])])}),[],!1,null,null,null);e.default=a.exports},327:function(t,e,r){t.exports=r.p+"assets/img/position_fixed.38e4a675.svg"},332:function(t,e,r){t.exports=r.p+"assets/img/automatic_mode.fd1fe75c.svg"},459:function(t,e,r){t.exports=r.p+"assets/img/logo_pro_small.cb9da21a.png"},460:function(t,e){t.exports="data:image/png;base64,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"}}]);