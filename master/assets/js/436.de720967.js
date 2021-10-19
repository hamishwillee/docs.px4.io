(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{2090:function(t,e,s){"use strict";s.r(e);var r=s(19),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"시스템-알림음"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#시스템-알림음"}},[t._v("#")]),t._v(" 시스템 알림음")]),t._v(" "),r("p",[t._v("PX4는 중요한 시스템 상태와 문제(예: 시스템 시작, 준비 성공, 배터리 경고 등)들에 대한 오디오 알림을 위한 다양한 "),r("RouterLink",{attrs:{to:"/ko/getting_started/tunes.html"}},[t._v("표준 톤/곡")]),t._v("을 정의합니다.")],1),t._v(" "),r("p",[t._v("알림음은 문자열("),r("a",{attrs:{href:"http://artscene.textfiles.com/ansimusic/information/ansimtech.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("ANSI 음악 표기법"),r("OutboundLink")],1),t._v(")을 사용하여 지정되고 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/lib/tunes",target:"_blank",rel:"noopener noreferrer"}},[t._v("곡"),r("OutboundLink")],1),t._v(" 라이브러리를 사용하여 코드로 재생됩니다. 알림음 라이브러리에는 기본 시스템 알림음들도 포함되어 있습니다("),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("lib/tunes/tune_definition.desc"),r("OutboundLink")],1),t._v(" 참조).")]),t._v(" "),r("p",[t._v("PX4에는 기본 알림음 또는 사용자 정의 알림음을 재생(테스트)하는 모듈이 있습니다.")]),t._v(" "),r("p",[t._v("자체 알림음을 만들고 시스템 알림음을 추가/교체하는 방법을 설명합니다.")]),t._v(" "),r("h2",{attrs:{id:"알림음-만들기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#알림음-만들기"}},[t._v("#")]),t._v(" 알림음 만들기")]),t._v(" "),r("p",[t._v("알림음은 "),r("a",{attrs:{href:"http://artscene.textfiles.com/ansimusic/information/ansimtech.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("ANSI 음악 표기법"),r("OutboundLink")],1),t._v("을 사용하여 정의합니다.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("형식에 대한 자세한 내용은 "),r("a",{attrs:{href:"https://en.wikibooks.org/wiki/QBasic/Appendix#PLAY",target:"_blank",rel:"noopener noreferrer"}},[t._v("QBasic PLAY 문"),r("OutboundLink")],1),t._v("(Wikibooks)에서 제공하며,  "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("tune_definition.desc"),r("OutboundLink")],1),t._v("에서 재현되었습니다.")])]),t._v(" "),r("p",[t._v("새로운 곡을 만드는 가장 쉬운 방법은 음악 편집기를 사용하는 것입니다. 이를 통해 음악을 편집하고 컴퓨터에서 재생한 다음 PX4에서 재생할 수 있는 형식으로 내보낼 수 있습니다.")]),t._v(" "),r("p",[t._v("ANSI 음악은 ANSI BBS 시스템 시대에 인기가 있었고, 최고의 편집 도구는 DOS 유틸리티입니다. Windows에서 한 가지 옵션은 "),r("em",[t._v("Dosbox")]),t._v(" 내에서 "),r("em",[t._v("Melody Master")]),t._v("를 사용하는 것입니다.")]),t._v(" "),r("p",[t._v("소프트웨어 사용 절차는 다음과 같습니다.")]),t._v(" "),r("ol",[r("li",[r("p",[r("a",{attrs:{href:"http://www.dosbox.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("도스박스"),r("OutboundLink")],1),t._v("를 다운로드하여 설치합니다.")])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"ftp://archives.thebbs.org/ansi_utilities/melody21.zip"}},[t._v("멜로디 마스터")]),t._v("를 다운로드하고 새 디렉터리로 압축을 해제합니다.")])]),t._v(" "),r("li",[r("p",[r("em",[t._v("도스박스")]),t._v(" 콘솔을 엽니다.")])]),t._v(" "),r("li",[r("p",[t._v("멜로디 마스터 디렉터리를 아래와 같이 도스박스에서 마운트하십시오.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("mount c C:\\<path_to_directory>\\Melody21\n")])])])]),t._v(" "),r("li",[r("p",[t._v("다음 명령으로 "),r("em",[t._v("Melody Master")]),t._v("를 시작하십시오.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("c:\nstart\n")])])])]),t._v(" "),r("li",[r("p",[t._v("일부 화면을 통해 선택지를 누른 후, "),r("strong",[t._v("1")]),t._v("을 눌러 "),r("em",[t._v("멜로디 마스터")]),t._v("를 띄우십시오: "),r("img",{attrs:{src:s(445),alt:"멜로디 마스터 2.1"}})]),t._v(" "),r("p",[t._v("화면의 절반 하단부에서 도구 사용에 필요한 키보드 단축키를 안내해줍니다(악보를 움직이고 음표 길이를 선택할 수 있는 등의 작업 가능).")])]),t._v(" "),r("li",[r("p",[t._v("음악을 저장할 준비가 끝나면:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("F2")]),t._v(" 키를 눌러 이름 입력하고, 멜로디 마스터 설치 디렉터리의 "),r("em",[t._v("/Music")]),t._v("  하위 폴더에 저장하십시오.")]),t._v(" "),r("li",[r("strong",[t._v("F7")]),t._v(" 키를 누른 후 우측 화면에서 하단으로 스크롤 이동하여, 출력 형식을 ANSI로 설정하십시오. 파일은 멜로디 마스터 디렉터리 "),r("em",[t._v("루트")]),t._v("에 내보냅니다(동일한 이름이나, 파일 형식에 맞는 확장자가 따로 붙음).")])])]),t._v(" "),r("li",[r("p",[t._v("파일을 여십시오. 출력 내용은 다음과 같습니다:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(446),alt:"파일 내용 안시 출력"}})])]),t._v(" "),r("li",[r("p",[t._v("PX4에서 재생할 수 있는 문자열은 "),r("code",[t._v("MNT")]),t._v("와 "),r("code",[t._v("P64")]),t._v(" 사이의 "),r("code",[t._v("150L1O3DL16CL32<B>C<AEL16A")]),t._v(" 입니다.")])])]),t._v(" "),r("h2",{attrs:{id:"알림음-시험"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#알림음-시험"}},[t._v("#")]),t._v(" 알림음 시험")]),t._v(" "),r("p",[t._v("PX4에서 새로운 곡을 연주하려면, "),r("RouterLink",{attrs:{to:"/ko/modules/modules_system.html#tune-control"}},[t._v("tune_control")]),t._v(' 라이브러리를 사용하십시오. 예를 들어, 우리가 위 과정을 거쳐 "만든" 재생음을 시험하려면 다음 명령을 콘솔 또는 셸(예: '),r("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html"}},[t._v("MAVLink 셸")]),t._v(")에서 입력하십시오:")],1),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("tune_control play -m "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"150L1O3DL16CL32<B>C<AEL16A"')]),t._v("\n")])])]),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("별개로, "),r("code",[t._v("tune_control")]),t._v(" 이 실제 하드웨어(모의 시험 환경 아님)에 대해 유일하게 나타납니다.")])]),t._v(" "),r("h2",{attrs:{id:"기존-알림음-변경"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기존-알림음-변경"}},[t._v("#")]),t._v(" 기존 알림음 변경")]),t._v(" "),r("p",[t._v("알림음은 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("tune_definition.desc"),r("OutboundLink")],1),t._v("에 정의됩니다.")]),t._v(" "),r("p",[t._v("기존 알림음을 바꾸려면, 파일을 별도로 복사한 후, "),r("code",[t._v("PX4_DEFINE_TUNE")]),t._v(" 에 정의한 알림음 문자열을 변경합니다.")]),t._v(" "),r("h2",{attrs:{id:"새-알림음-추가"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#새-알림음-추가"}},[t._v("#")]),t._v(" 새 알림음 추가")]),t._v(" "),r("p",[t._v("곧 추가 예정.")])])}),[],!1,null,null,null);e.default=_.exports},445:function(t,e,s){t.exports=s.p+"assets/img/tunes_melody_master_2_1.48420adb.jpg"},446:function(t,e,s){t.exports=s.p+"assets/img/tune_musicmaker_ansi_output.99d0ff16.png"}}]);