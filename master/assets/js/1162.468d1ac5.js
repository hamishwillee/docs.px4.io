(window.webpackJsonp=window.webpackJsonp||[]).push([[1162],{2183:function(t,s,e){"use strict";e.r(s);var _=e(19),v=Object(_.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"px4-콘솔-쉘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-콘솔-쉘"}},[t._v("#")]),t._v(" PX4 콘솔/쉘")]),t._v(" "),e("p",[t._v("PX4에서는 "),e("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html"}},[t._v("MAVLink 쉘")]),t._v("과 "),e("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("시스템 콘솔")]),t._v("을 사용하여 시스템에 접근할 수 있습니다.")],1),t._v(" "),e("p",[t._v("이 페이지에서는 콘솔과 쉘 사용 방법과 주요 차이점을 설명합니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"console_vs_shell"}})]),t._v(" "),e("h2",{attrs:{id:"시스템-콘솔과-셸의-차이점"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#시스템-콘솔과-셸의-차이점"}},[t._v("#")]),t._v(" 시스템 콘솔과 셸의 차이점")]),t._v(" "),e("p",[t._v("PX4 "),e("em",[t._v("시스템 콘솔")]),t._v("은 시스템에 대한 낮은 수준의 액세스, 디버그 출력 및 시스템 부팅 프로세스 분석을 제공합니다.")]),t._v(" "),e("p",[t._v("하나의 특정 UART(NuttX에 구성된 디버그 포트)에서 실행되고 일반적으로 FTDI 케이블(또는 "),e("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/Dronecode+Probe+documentation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode 프로브"),e("OutboundLink")],1),t._v("와 같은 다른 디버그 어댑터)을 통하여 컴퓨터에 연결되는 "),e("em",[t._v("시스템 콘솔")]),t._v("이 하나 있습니다.")]),t._v(" "),e("ul",[e("li",[e("em",[t._v("저수준 디버깅/개발")]),t._v("에 사용: 부팅, NuttX, 시작 스크립트, 보드 불러오기, PX4의 중앙 부분(예: uORB) 개발.")]),t._v(" "),e("li",[t._v("특히, 모든 부팅 출력(부팅 시 자동으로 시작되는 응용 프로그램에 대한 정보 포함)이 인쇄되는 유일한 장소입니다.")])]),t._v(" "),e("p",[t._v("셸은 시스템에 대한 상위 수준의 접급을 제공합니다.")]),t._v(" "),e("ul",[e("li",[t._v("기본 모듈 테스트와 명령어를 실행할 수 있습니다.")]),t._v(" "),e("li",[t._v("시작하는 모듈의 출력만 "),e("em",[t._v("직접")]),t._v(" 표시합니다.")]),t._v(" "),e("li",[t._v("작업 대기열에서 실행 중인 작업의 출력을 "),e("em",[t._v("직접")]),t._v(" 표시할 수 없습니다.")]),t._v(" "),e("li",[t._v("시스템이 시작되지 않으면(아직 실행되지 않기 때문에) 문제를 디버그할 수 없습니다.")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[e("code",[t._v("dmesg")]),t._v(" 명령은 이제 일부 보드의 셸을 통해 사용할 수 있으므로, 이전보다 훨씬 낮은 수준의 디버깅이 가능합니다. 예를 들어, "),e("code",[t._v("dmesg -f &")]),t._v("를 사용하면 백그라운드 작업의 출력도 조회할 수 있습니다.")])]),t._v(" "),e("p",[t._v("전용 UART에서 실행되거나, MAVLink로 실행되는 여러 셸이 있을 수 있습니다. MAVLink가 더 많은 유연성을 제공하므로, 현재 "),e("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html"}},[t._v("MAVLink Shell")]),t._v("만 사용됩니다.")],1),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("시스템 콘솔")]),t._v("은 시스템이 부팅되지 않을 때 사용됩니다(보드의 전원을 껐다 켤 때 시스템 부팅 로그를 표시함). "),e("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html"}},[t._v("MAVLink Shell")]),t._v("은 설정이 훨씬 용이하므로, 대부분의 디버깅에 사용됩니다.")],1),t._v(" "),e("p",[e("a",{attrs:{id:"using_the_console"}})]),t._v(" "),e("h2",{attrs:{id:"콘솔-쉘-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#콘솔-쉘-사용"}},[t._v("#")]),t._v(" 콘솔/쉘 사용")]),t._v(" "),e("p",[t._v("MAVLink 셸/콘솔과 "),e("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("시스템 콘솔")]),t._v("은 같은 방식으로 사용됩니다.")],1),t._v(" "),e("p",[t._v("예를 들어, 로컬 파일 시스템을 보려면 "),e("code",[t._v("ls")]),t._v("를 입력하고, 남은 여유 RAM을 보려면 "),e("code",[t._v("free")]),t._v("를 입력하고, 부팅 출력을 보려면 "),e("code",[t._v("dmesg")]),t._v("를 입력합니다.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("nsh"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\nnsh"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v("\nnsh"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dmesg")]),t._v("\n")])])]),e("p",[t._v("다른 많은 시스템 명령과 모듈은 "),e("RouterLink",{attrs:{to:"/ko/modules/modules_main.html"}},[t._v("모듈 및 명령 참조")]),t._v("에 나열되어 있습니다(예: "),e("code",[t._v("top")]),t._v(", "),e("code",[t._v("listener")]),t._v(" 등).")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("일부 명령은 일부 보드에서 비활성화될 수 있습니다(예: RAM 또는 FLASH 제약 조건이 있는 보드의 경우 일부 모듈은 펌웨어에 포함되지 않음). 이 경우에는 응답이 표시됩니다. "),e("code",[t._v("명령어를 찾을 수 없음")])])])])}),[],!1,null,null,null);s.default=v.exports}}]);