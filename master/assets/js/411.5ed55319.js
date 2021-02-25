(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{1846:function(t,e,_){"use strict";_.r(e);var s=_(18),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"시스템-알림음"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#시스템-알림음"}},[t._v("#")]),t._v(" 시스템 알림음")]),t._v(" "),s("p",[t._v("PX4는 중요한 시스템 상태와 문제를 음성으로 알리는 여러가지 "),s("RouterLink",{attrs:{to:"/ko/getting_started/tunes.html"}},[t._v("표준 알림음")]),t._v("을 지정해두었습니다(예시: 시스템 시작, 이륙 준비 완료, 배터리 경고 등)")],1),t._v(" "),s("p",[t._v("알림음은 문자열("),s("a",{attrs:{href:"http://artscene.textfiles.com/ansimusic/information/ansimtech.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("안시 악보 표기"),s("OutboundLink")],1),t._v(")로 정의하며 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/lib/tunes",target:"_blank",rel:"noopener noreferrer"}},[t._v("튠즈"),s("OutboundLink")],1),t._v(" 라이브러리를 통해 코드로 재생합니다. 튠즈 라이브러리에는 기본 시스템 음 목록이 들어있습니다. 해당 내용은 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("lib/tunes/tune_definition.desc"),s("OutboundLink")],1),t._v(" 파일을 참고하십시오.")]),t._v(" "),s("p",[t._v("PX4에는 기본음 또는 사용자 지정음을 재생(시험)할 때 활용할 모듈이 있습니다.")]),t._v(" "),s("p",[t._v("이 주제에서는 알림음을 만들고 시스템 알림 음으로 추가하는 일반 과정을 안내해드리겠습니다.")]),t._v(" "),s("h2",{attrs:{id:"알림음-만들기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#알림음-만들기"}},[t._v("#")]),t._v(" 알림음 만들기")]),t._v(" "),s("p",[t._v("음 문자열은 "),s("a",{attrs:{href:"http://artscene.textfiles.com/ansimusic/information/ansimtech.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("안시 악보 표기 방식"),s("OutboundLink")],1),t._v("으로 정의합니다.")]),t._v(" "),s("p",[t._v("새 알림음을 만드는 가장 쉬운 방법은 음악 편집기를 활용하는 방법입니다.\n:::")]),t._v(" "),s("p",[t._v("안시 뮤직은 안시 BBS 시스템을 사용하던 시절에 유명한 방식이었기에, 최고의 편집 도구는 DOS 유틸리티입니다. 윈도우에서는 "),s("em",[t._v("도스박스")]),t._v("에서 "),s("em",[t._v("멜로디 마스터")]),t._v("를 사용하는 선택지가 있습니다.")]),t._v(" "),s("p",[t._v("안시 뮤직은 안시 BBS 시스템을 사용하던 시절에 유명한 방식이었기에, 최고의 편집 도구는 DOS 유틸리티입니다. 윈도우에서는 "),s("em",[t._v("도스박스")]),t._v("에서 "),s("em",[t._v("멜로디 마스터")]),t._v("를 사용하는 선택지가 있습니다.")]),t._v(" "),s("p",[t._v("프로그램을 사용하는 단계는 다음과 같습니다:")]),t._v(" "),s("ol",[s("li",[s("p",[s("a",{attrs:{href:"http://www.dosbox.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("도스박스"),s("OutboundLink")],1),t._v("를 다운로드하여 설치합니다")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"ftp://archives.thebbs.org/ansi_utilities/melody21.zip"}},[t._v("멜로디 마스터")]),t._v("를 다운로드하고 새 디렉터리로 압축을 해제합니다")])]),t._v(" "),s("li",[s("p",[s("em",[t._v("도스박스")]),t._v(" 콘솔을 엽니다")])]),t._v(" "),s("li",[s("p",[t._v("멜로디 마스터 디렉터리를 아래와 같이 도스박스에서 마운트하십시오:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mount c C:\\<path_to_directory>\\Melody21\n")])])])]),t._v(" "),s("li",[s("p",[t._v("다음 명령으로 "),s("em",[t._v("Melody Master")]),t._v("를 시작하십시오")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("c:\nstart\n")])])])]),t._v(" "),s("li",[s("p",[t._v("일부 화면을 통해 선택지를 누른 후, "),s("strong",[t._v("1")]),t._v("을 눌러 "),s("em",[t._v("멜로디 마스터")]),t._v("를 띄우십시오: "),s("img",{attrs:{src:_(440),alt:"멜로디 마스터 2.1"}})]),t._v(" "),s("p",[t._v("화면의 절반 하단부에서 도구 사용에 필요한 키보드 단축키를 안내해줍니다(악보를 움직이고 음표 길이를 선택할 수 있는 등의 작업 가능).")])]),t._v(" "),s("li",[s("p",[t._v("음악을 저장할 준비가 끝나면:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("F2")]),t._v(" 키를 눌러 이름 부여하고, 멜로디 마스터 설치 디렉터리의 "),s("em",[t._v("/Music")]),t._v("  하위 폴더에 저장하십시오.")]),t._v(" "),s("li",[s("strong",[t._v("F7")]),t._v(" 키를 누른 후 우측 화면에서 하단으로 스크롤 이동하여 출력 형식을 ANSI로 설정하십시오. 파일은 멜로디 마스터 디렉터리 "),s("em",[t._v("루트")]),t._v("에 내보냅니다(동일한 이름이나, 파일 형식에 맞는 확장자가 따로 붙음).")])])]),t._v(" "),s("li",[s("p",[t._v("파일을 여십시오. 출력 내용은 다음과 같습니다:")]),t._v(" "),s("p",[s("img",{attrs:{src:_(441),alt:"파일 내용 안시 출력"}})])]),t._v(" "),s("li",[s("p",[t._v("PX4에서 재생할 수 있는 문자열은 "),s("code",[t._v("MNT")]),t._v("와 "),s("code",[t._v("P64")]),t._v(" 사이의 "),s("code",[t._v("150L1O3DL16CL32<B>C<AEL16A")]),t._v(" 입니다.")])])]),t._v(" "),s("h2",{attrs:{id:"알림음-시험"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#알림음-시험"}},[t._v("#")]),t._v(" 알림음 시험")]),t._v(" "),s("p",[t._v("PX4에서 재생할 알림음을 새로 추가할 준비가 끝났다면, "),s("RouterLink",{attrs:{to:"/ko/modules/modules_system.html#tunecontrol"}},[t._v("tune_control")]),t._v(' 라이브러리를 활용하십시오. 예를 들어, 우리가 위 과정을 거쳐 "만든" 재생음을 시험하려면 다음 명령을 콘솔 또는 셸(예: '),s("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html"}},[t._v("MAVLink 셸")]),t._v(")에 입력하십시오:")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("tune_control play -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"150L1O3DL16CL32<B>C<AEL16A"')]),t._v("\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("별개로, "),s("code",[t._v("tune_control")]),t._v(" 이 실제 하드웨어(모의 시험 환경 아님)에 대해 유일하게 나타납니다.")])]),t._v(" "),s("h2",{attrs:{id:"기존-알림음-바꾸기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기존-알림음-바꾸기"}},[t._v("#")]),t._v(" 기존 알림음 바꾸기")]),t._v(" "),s("p",[t._v("알림음은 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("tune_definition.desc"),s("OutboundLink")],1),t._v("에 지정되어 있습니다.")]),t._v(" "),s("p",[t._v("기존 알림음을 바꾸려면, 파일을 별도로 복사한 후, "),s("code",[t._v("PX4_DEFINE_TUNE")]),t._v(" 에 정의한 알림음 문자열을 새로 바꾸시면 됩니다.")]),t._v(" "),s("h2",{attrs:{id:"새-알림음-추가"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#새-알림음-추가"}},[t._v("#")]),t._v(" 새 알림음 추가")]),t._v(" "),s("p",[t._v("곧 추가 예정.")])])}),[],!1,null,null,null);e.default=r.exports},440:function(t,e,_){t.exports=_.p+"assets/img/tunes_melody_master_2_1.48420adb.jpg"},441:function(t,e,_){t.exports=_.p+"assets/img/tune_musicmaker_ansi_output.99d0ff16.png"}}]);