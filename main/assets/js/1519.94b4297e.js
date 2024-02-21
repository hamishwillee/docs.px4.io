(window.webpackJsonp=window.webpackJsonp||[]).push([[1519],{2793:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mavlink-쉘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-쉘"}},[t._v("#")]),t._v(" MAVLink 쉘")]),t._v(" "),e("p",[t._v("The MAVLink Shell is an "),e("em",[t._v("NSH console")]),t._v(" that can be accessed via MAVLink over serial (USB/Telemetry) or WiFi (UDP/TCP) links (in particular, on NuttX-based systems like: Pixhawk, Pixracer, etc.).")]),t._v(" "),e("p",[t._v("쉘은 명령 및 모듈을 실행하고 출력을 표시합니다. While the shell cannot "),e("em",[t._v("directly")]),t._v(" display the output of modules that it does not start, it can do so indirectly using the "),e("code",[t._v("dmesg")]),t._v(" command ("),e("code",[t._v("dmesg -f &")]),t._v(" can be used to display the output of other modules and tasks running on the work queue).")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("a",{attrs:{href:"#qgroundcontrol"}},[t._v("QGroundControl MAVLink 콘솔")]),t._v("은 콘솔에 접근하기 가장 편리합니다. 시스템이 제대로 시작되지 않으면, "),e("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("시스템 콘솔")]),t._v("을 사용하여야 합니다.")],1)]),t._v(" "),e("h2",{attrs:{id:"쉘-열기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#쉘-열기"}},[t._v("#")]),t._v(" 쉘 열기")]),t._v(" "),e("p",[e("a",{attrs:{id:"qgroundcontrol"}})]),t._v(" "),e("h3",{attrs:{id:"qgroundcontrol-mavlink-콘솔"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-콘솔"}},[t._v("#")]),t._v(" QGroundControl MAVLink 콘솔")]),t._v(" "),e("p",[t._v("The easiest way to access shell is to use the "),e("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl MAVLink Console"),e("OutboundLink")],1),t._v(" (see "),e("strong",[t._v("Analyze View > Mavlink Console")]),t._v(").")]),t._v(" "),e("h3",{attrs:{id:"mavlink-shell-py"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-shell-py"}},[t._v("#")]),t._v(" mavlink_shell.py")]),t._v(" "),e("p",[e("strong",[t._v("mavlink_shell.py")]),t._v(" 스크립트를 사용하여 터미널에서 쉘에 접근할 수 있습니다.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Shut down "),e("em",[t._v("QGroundControl")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("패키지를 설치합니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("pip3 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pymavlink pyserial\n")])])])]),t._v(" "),e("li",[e("p",[t._v("터미널(PX4-Autopilot 디렉토리)을 열고, 쉘을 시작합니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For serial port")]),t._v("\n./Tools/mavlink_shell.py /dev/ttyACM0\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For Wi-Fi connection")]),t._v("\n./Tools/mavlink_shell.py "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:14550\n")])])])])]),t._v(" "),e("p",[t._v("사용 가능한 모든 인수에 대한 설명을 보려면, "),e("code",[t._v("mavlink_shell.py -h")]),t._v("를 사용하십시오.")]),t._v(" "),e("h2",{attrs:{id:"mavlink-쉘-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-쉘-사용"}},[t._v("#")]),t._v(" MAVLink 쉘 사용")]),t._v(" "),e("p",[t._v("자세한 내용은 "),e("RouterLink",{attrs:{to:"/ko/debug/consoles.html#using_the_console"}},[t._v("PX4 콘솔/쉘 > 콘솔/쉘 사용")]),t._v("을 참고하십시오.")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);