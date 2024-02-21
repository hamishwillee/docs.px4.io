(window.webpackJsonp=window.webpackJsonp||[]).push([[1514],{2786:function(t,e,s){"use strict";s.r(e);var a=s(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"px4-콘솔-쉘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-콘솔-쉘"}},[t._v("#")]),t._v(" PX4 콘솔/쉘")]),t._v(" "),s("p",[t._v("PX4에서는 "),s("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html"}},[t._v("MAVLink 쉘")]),t._v("과 "),s("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("시스템 콘솔")]),t._v("을 사용하여 시스템에 접근할 수 있습니다.")],1),t._v(" "),s("p",[t._v("이 페이지에서는 콘솔과 쉘 사용 방법과 주요 차이점을 설명합니다.")]),t._v(" "),s("p",[s("a",{attrs:{id:"console_vs_shell"}})]),t._v(" "),s("h2",{attrs:{id:"시스템-콘솔과-셸의-차이점"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#시스템-콘솔과-셸의-차이점"}},[t._v("#")]),t._v(" 시스템 콘솔과 셸의 차이점")]),t._v(" "),s("p",[t._v("The PX4 "),s("em",[t._v("System Console")]),t._v(" provides low-level access to the system, debug output and analysis of the system boot process.")]),t._v(" "),s("p",[t._v("There is just one "),s("em",[t._v("System Console")]),t._v(", which runs on one specific UART (the debug port, as configured in NuttX), and is commonly attached to a computer via an FTDI cable (or some other debug adapter like a "),s("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/Dronecode+Probe+documentation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode probe"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("ul",[s("li",[t._v("Used for "),s("em",[t._v("low-level debugging/development")]),t._v(": bootup, NuttX, startup scripts, board bringup, development on central parts of PX4 (e.g. uORB).")]),t._v(" "),s("li",[t._v("특히, 모든 부팅 출력(부팅 시 자동으로 시작되는 응용 프로그램에 대한 정보 포함)이 인쇄되는 유일한 장소입니다.")])]),t._v(" "),s("p",[t._v("셸은 시스템에 대한 상위 수준의 접급을 제공합니다.")]),t._v(" "),s("ul",[s("li",[t._v("기본 모듈 테스트와 명령어를 실행할 수 있습니다.")]),t._v(" "),s("li",[t._v("Only "),s("em",[t._v("directly")]),t._v(" display the output of modules you start.")]),t._v(" "),s("li",[t._v("Cannot "),s("em",[t._v("directly")]),t._v(" display the output of tasks running on the work queue.")]),t._v(" "),s("li",[t._v("시스템이 시작되지 않으면(아직 실행되지 않기 때문에) 문제를 디버그할 수 없습니다.")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[s("code",[t._v("dmesg")]),t._v(" 명령은 이제 일부 보드의 셸을 통해 사용할 수 있으므로, 이전보다 훨씬 낮은 수준의 디버깅이 가능합니다. 예를 들어, "),s("code",[t._v("dmesg -f &")]),t._v("를 사용하면 백그라운드 작업의 출력도 조회할 수 있습니다.")])]),t._v(" "),s("p",[t._v("전용 UART에서 실행되거나, MAVLink로 실행되는 여러 셸이 있을 수 있습니다. MAVLink가 더 많은 유연성을 제공하므로, 현재 "),s("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html"}},[t._v("MAVLink Shell")]),t._v("만 사용됩니다.")],1),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("시스템 콘솔")]),t._v("은 시스템이 부팅되지 않을 때 사용됩니다(보드의 전원을 껐다 켤 때 시스템 부팅 로그를 표시함). "),s("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html"}},[t._v("MAVLink Shell")]),t._v("은 설정이 훨씬 용이하므로, 대부분의 디버깅에 사용됩니다.")],1),t._v(" "),s("p",[s("a",{attrs:{id:"using_the_console"}})]),t._v(" "),s("h2",{attrs:{id:"콘솔-쉘-사용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#콘솔-쉘-사용"}},[t._v("#")]),t._v(" 콘솔/쉘 사용")]),t._v(" "),s("p",[t._v("MAVLink 셸/콘솔과 "),s("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("시스템 콘솔")]),t._v("은 같은 방식으로 사용됩니다.")],1),t._v(" "),s("p",[t._v("예를 들어, 로컬 파일 시스템을 보려면 "),s("code",[t._v("ls")]),t._v("를 입력하고, 남은 여유 RAM을 보려면 "),s("code",[t._v("free")]),t._v("를 입력하고, 부팅 출력을 보려면 "),s("code",[t._v("dmesg")]),t._v("를 입력합니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("nsh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\nnsh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v("\nnsh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dmesg")]),t._v("\n")])])]),s("p",[t._v("Below are a couple of commands which can be used in the "),s("a",{attrs:{href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=139629410",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttShell"),s("OutboundLink")],1),t._v(" to get insights of the system.")]),t._v(" "),s("p",[t._v("This NSH command provides the remaining free memory:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v("\n")])])]),s("p",[t._v("The top command shows the stack usage per application:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v("\n")])])]),s("p",[t._v("Note that stack usage is calculated with stack coloring and is the maximum since the start of the task (not the current usage).")]),t._v(" "),s("p",[t._v("To see what is running in the work queues and at what rate, use:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("work_queue status\n")])])]),s("p",[t._v("To debug uORB topics:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("uorb "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v("\n")])])]),s("p",[t._v("To inspect a specific uORB topic:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("listener "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("topic_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("다른 많은 시스템 명령과 모듈은 "),s("RouterLink",{attrs:{to:"/ko/modules/modules_main.html"}},[t._v("모듈 및 명령 참조")]),t._v("에 나열되어 있습니다(예: "),s("code",[t._v("top")]),t._v(", "),s("code",[t._v("listener")]),t._v(" 등).")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("일부 명령은 일부 보드에서 비활성화될 수 있습니다(예: RAM 또는 FLASH 제약 조건이 있는 보드의 경우 일부 모듈은 펌웨어에 포함되지 않음). 이 경우에는 응답이 표시됩니다. "),s("code",[t._v("명령어를 찾을 수 없음")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);