(window.webpackJsonp=window.webpackJsonp||[]).push([[556],{2524:function(t,e,s){"use strict";s.r(e);var n=s(19),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"시스템-알림음"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#시스템-알림음"}},[t._v("#")]),t._v(" 시스템 알림음")]),t._v(" "),n("p",[t._v("PX4는 중요한 시스템 상태와 문제(예: 시스템 시작, 준비 성공, 배터리 경고 등)들에 대한 오디오 알림을 위한 다양한 "),n("RouterLink",{attrs:{to:"/ko/getting_started/tunes.html"}},[t._v("표준 톤/곡")]),t._v("을 정의합니다.")],1),t._v(" "),n("p",[t._v("Tunes are specified using strings (in "),n("a",{attrs:{href:"http://artscene.textfiles.com/ansimusic/information/ansimtech.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("ANSI Music notation"),n("OutboundLink")],1),t._v(") and played by code using the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/lib/tunes",target:"_blank",rel:"noopener noreferrer"}},[t._v("tunes"),n("OutboundLink")],1),t._v(" library. The tunes library also contains the list of default system tunes - see "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("lib/tunes/tune_definition.desc"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("PX4에는 기본 알림음 또는 사용자 정의 알림음을 재생(테스트)하는 모듈이 있습니다.")]),t._v(" "),n("p",[t._v("자체 알림음을 만들고 시스템 알림음을 추가/교체하는 방법을 설명합니다.")]),t._v(" "),n("h2",{attrs:{id:"알림음-만들기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#알림음-만들기"}},[t._v("#")]),t._v(" 알림음 만들기")]),t._v(" "),n("p",[t._v("알림음은 "),n("a",{attrs:{href:"http://artscene.textfiles.com/ansimusic/information/ansimtech.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("ANSI 음악 표기법"),n("OutboundLink")],1),t._v("을 사용하여 정의합니다.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("More information about the format can be found in "),n("a",{attrs:{href:"https://en.wikibooks.org/wiki/QBasic/Appendix#PLAY",target:"_blank",rel:"noopener noreferrer"}},[t._v("QBasic PLAY statement"),n("OutboundLink")],1),t._v(" (Wikibooks) and has been reproduced in "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("tune_definition.desc"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("p",[t._v("새로운 곡을 만드는 가장 쉬운 방법은 음악 편집기를 사용하는 것입니다. 이를 통해 음악을 편집하고 컴퓨터에서 재생한 다음 PX4에서 재생할 수 있는 형식으로 내보낼 수 있습니다.")]),t._v(" "),n("p",[t._v("ANSI 음악은 ANSI BBS 시스템 시대에 인기가 있었고, 최고의 편집 도구는 DOS 유틸리티입니다. On Windows, one option is to use "),n("em",[t._v("Melody Master")]),t._v(" within "),n("em",[t._v("Dosbox")]),t._v(".")]),t._v(" "),n("p",[t._v("소프트웨어 사용 절차는 다음과 같습니다.")]),t._v(" "),n("ol",[n("li",[n("p",[n("a",{attrs:{href:"http://www.dosbox.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("도스박스"),n("OutboundLink")],1),t._v("를 다운로드하여 설치합니다.")])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"ftp://archives.thebbs.org/ansi_utilities/melody21.zip"}},[t._v("멜로디 마스터")]),t._v("를 다운로드하고 새 디렉터리로 압축을 해제합니다.")])]),t._v(" "),n("li",[n("p",[t._v("Open the "),n("em",[t._v("Dosbox")]),t._v(" console")])]),t._v(" "),n("li",[n("p",[t._v("멜로디 마스터 디렉터리를 아래와 같이 도스박스에서 마운트하십시오.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" c C:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path_to_directory"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Melody21\n")])])])]),t._v(" "),n("li",[n("p",[t._v("Start "),n("em",[t._v("Melody Master")]),t._v(" with the following commands")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("c:\nstart\n")])])])]),t._v(" "),n("li",[n("p",[t._v("You will then have the option to click through a few screens, then press "),n("strong",[t._v("1")]),t._v(" to display "),n("em",[t._v("Melody Master")]),t._v(": "),n("img",{attrs:{src:s(466),alt:"멜로디 마스터 2.1"}})]),t._v(" "),n("p",[t._v("화면의 절반 하단부에서 도구 사용에 필요한 키보드 단축키를 안내해줍니다(악보를 움직이고 음표 길이를 선택할 수 있는 등의 작업 가능).")])]),t._v(" "),n("li",[n("p",[t._v("음악을 저장할 준비가 끝나면:")]),t._v(" "),n("ul",[n("li",[t._v("Press "),n("strong",[t._v("F2")]),t._v(" to give the tune a name and save it in the "),n("em",[t._v("/Music")]),t._v(" sub folder of your Melody Master installation.")]),t._v(" "),n("li",[n("strong",[t._v("F7")]),t._v(" 키를 누른 후 우측 화면에서 하단으로 스크롤 이동하여, 출력 형식을 ANSI로 설정하십시오. The file will be exported to the "),n("em",[t._v("root")]),t._v(" of the Melody Master directory (with the same name and a file-type specific extension).")])])]),t._v(" "),n("li",[n("p",[t._v("파일을 여십시오. 출력 내용은 다음과 같습니다:")]),t._v(" "),n("p",[n("img",{attrs:{src:s(467),alt:"파일 내용 안시 출력"}})])]),t._v(" "),n("li",[n("p",[t._v("PX4에서 재생할 수 있는 문자열은 "),n("code",[t._v("MNT")]),t._v("와 "),n("code",[t._v("P64")]),t._v(" 사이의 "),n("code",[t._v("150L1O3DL16CL32<B>C<AEL16A")]),t._v(" 입니다.")])])]),t._v(" "),n("h2",{attrs:{id:"알림음-시험"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#알림음-시험"}},[t._v("#")]),t._v(" 알림음 시험")]),t._v(" "),n("p",[t._v("PX4에서 새로운 곡을 연주하려면, "),n("RouterLink",{attrs:{to:"/ko/modules/modules_system.html#tune-control"}},[t._v("tune_control")]),t._v(' 라이브러리를 사용하십시오. 예를 들어, 우리가 위 과정을 거쳐 "만든" 재생음을 시험하려면 다음 명령을 콘솔 또는 셸(예: '),n("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html"}},[t._v("MAVLink 셸")]),t._v(")에서 입력하십시오:")],1),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("tune_control play -m "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"150L1O3DL16CL32<B>C<AEL16A"')]),t._v("\n")])])]),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("별개로, "),n("code",[t._v("tune_control")]),t._v(" 이 실제 하드웨어(모의 시험 환경 아님)에 대해 유일하게 나타납니다.")])]),t._v(" "),n("h2",{attrs:{id:"기존-알림음-변경"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#기존-알림음-변경"}},[t._v("#")]),t._v(" 기존 알림음 변경")]),t._v(" "),n("p",[t._v("Tunes are defined within "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("tune_definition.desc"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("기존 알림음을 바꾸려면, 파일을 별도로 복사한 후, "),n("code",[t._v("PX4_DEFINE_TUNE")]),t._v(" 에 정의한 알림음 문자열을 변경합니다.")]),t._v(" "),n("h2",{attrs:{id:"새-알림음-추가"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#새-알림음-추가"}},[t._v("#")]),t._v(" 새 알림음 추가")]),t._v(" "),n("p",[t._v("곧 추가 예정.")])])}),[],!1,null,null,null);e.default=a.exports},466:function(t,e,s){t.exports=s.p+"assets/img/tunes_melody_master_2_1.48420adb.jpg"},467:function(t,e,s){t.exports=s.p+"assets/img/tune_musicmaker_ansi_output.99d0ff16.png"}}]);