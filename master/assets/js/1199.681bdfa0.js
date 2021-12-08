(window.webpackJsonp=window.webpackJsonp||[]).push([[1199],{2232:function(t,s,e){"use strict";e.r(s);var n=e(19),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mavlink-쉘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-쉘"}},[t._v("#")]),t._v(" MAVLink 쉘")]),t._v(" "),e("p",[t._v("MAVLink Shell은 직렬(USB/Telemetry) 또는 Wi-Fi(UDP/TCP)를 통하여 MAVLink에 접근할 수 있는 "),e("em",[t._v("NSH 콘솔")]),t._v("입니다(특히 Pixhawk, Pixracer, 등.).")]),t._v(" "),e("p",[t._v("쉘은 명령 및 모듈을 실행하고 출력을 표시합니다. 셸은 시작하지 않는 모듈의 출력을 "),e("em",[t._v("직접")]),t._v(" 표시할 수 없지만, "),e("code",[t._v("dmesg")]),t._v(" 명령(`dmesg -f &</ 1>은 작업 대기열에서 실행 중인 다른 모듈 및 작업의 출력을 표시할 수 있습니다.")]),e("p"),t._v(" "),e("p",{attrs:{"spaces-before":"0"}},[t._v(":::tip\n"),e("a",{attrs:{href:"#qgroundcontrol"}},[t._v("QGroundControl MAVLink 콘솔")]),t._v("은 콘솔에 접근하기 가장 편리합니다.\n시스템이 제대로 시작되지 않으면, "),e("a",{attrs:{href:"../debug/system_console.md"}},[t._v("시스템 콘솔")]),t._v("을 사용하여야 합니다.\n:::")]),t._v(" "),e("h2",{attrs:{"spaces-before":"0"}},[t._v("쉘 열기")]),t._v(" "),e("p",[e("a",{attrs:{id:"qgroundcontrol"}})]),t._v(" "),e("h3",{attrs:{"spaces-before":"0"}},[t._v("QGroundControl MAVLink 콘솔")]),t._v(" "),e("p",{attrs:{"spaces-before":"0"}},[t._v("쉘에 접근하기 가장 편리한 방법은 "),e("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/analyze_view/mavlink_console.html"}},[t._v("QGroundControl MAVLink 콘솔")]),t._v("을 사용하는 것입니다("),e("strong",{attrs:{"x-id":"1"}},[t._v("Analyze View > Mavlink 콘솔")]),t._v(" 참조).")]),t._v(" "),e("h3",{attrs:{"spaces-before":"0"}},[t._v("mavlink_shell.py")]),t._v(" "),e("p",{attrs:{"spaces-before":"0"}},[e("strong",{attrs:{"x-id":"1"}},[t._v("mavlink_shell.py")]),t._v(" 스크립트를 사용하여 터미널에서 쉘에 접근할 수 있습니다.")]),t._v(" "),e("ol",{attrs:{start:"1"}},[e("li",[e("em",{attrs:{"x-id":"3"}},[t._v("QGroundControl")]),t._v("을 종료합니다.")]),t._v(" "),e("li",[e("p",{attrs:{"spaces-before":"0"}},[t._v("패키지를 설치합니다.\n"),e("pre",[e("code",{staticClass:"sh"},[t._v("   sudo pip3 install pymavlink pyserial\n`")])])])]),t._v("\n1\n터미널(PX4-Autopilot 디렉토리)을 열고, 쉘을 시작합니다.\n   ```sh\n   # For serial port\n   ./Tools/mavlink_shell.py /dev/ttyACM0\n   ```\n")]),t._v("\n    ```sh\n   # For Wi-Fi connection\n   ./Tools/mavlink_shell.py 0.0.0.0:14550\n   ```\n"),e("p",[t._v("사용 가능한 모든 인수에 대한 설명을 보려면, "),e("code",[t._v("mavlink_shell.py -h")]),t._v("를 사용하십시오.")]),t._v(" "),e("h2",{attrs:{id:"mavlink-쉘-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-쉘-사용"}},[t._v("#")]),t._v(" MAVLink 쉘 사용")]),t._v(" "),e("p",[t._v("자세한 내용은 "),e("RouterLink",{attrs:{to:"/ko/debug/consoles.html#using_the_console"}},[t._v("PX4 콘솔/쉘 > 콘솔/쉘 사용")]),t._v("을 참고하십시오.")],1)])}),[],!1,null,null,null);s.default=r.exports}}]);