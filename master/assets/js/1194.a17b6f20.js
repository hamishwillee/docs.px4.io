(window.webpackJsonp=window.webpackJsonp||[]).push([[1194],{2221:function(a,t,s){"use strict";s.r(t);var e=s(19),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"자주-묻는-질문"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#자주-묻는-질문"}},[a._v("#")]),a._v(" 자주 묻는 질문")]),a._v(" "),s("h2",{attrs:{id:"빌드-오류"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#빌드-오류"}},[a._v("#")]),a._v(" 빌드 오류")]),a._v(" "),s("h3",{attrs:{id:"플래시-오버플로우"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#플래시-오버플로우"}},[a._v("#")]),a._v(" 플래시 오버플로우")]),a._v(" "),s("p",[a._v('보드에 로딩 가능한 코드의 양은 보드에 있는 플래시 메모리의 양에 따라 제한됩니다. 모듈 또는 코드를 추가시, 플래시 메모리를 초과할 가능성이 있습니다. This will result in a "flash overflow". 업스트림 버전은 항상 빌드되지만, 개발자가 추가하는 항목에 따라 로컬에서 오버플로될 수 있습니다.')]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("region `flash' overflowed by "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("12456")]),a._v(" bytes\n")])])]),s("p",[a._v("이를 해결하려면, 최신 하드웨어를 사용하거나 비필수 모듈을 빌드에서 제거하여야 합니다. 설정은 "),s("strong",[a._v("/PX4-Autopilot/boards/px4")]),a._v("에 저장됩니다(예: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[a._v("PX4-Autopilot/boards/px4/fmu-v5/default.cmake"),s("OutboundLink")],1),a._v("). 모듈을 제거하려면, 다음과 같이 주석 처리하십시오.")]),a._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#tune_control")]),a._v("\n")])])]),s("h4",{attrs:{id:"대용량-메모리-소비-모듈-식별"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#대용량-메모리-소비-모듈-식별"}},[a._v("#")]),a._v(" 대용량 메모리 소비 모듈 식별")]),a._v(" "),s("p",[a._v("아래 명령은 가장 큰 정적 할당을 출력합니다.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("arm-none-eabi-nm --size-sort --print-size --radix"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("dec build/px4_fmu-v5_default/px4_fmu-v5_default.elf "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" [bBdD] "')]),a._v("\n")])])]),s("h2",{attrs:{id:"usb-오류"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usb-오류"}},[a._v("#")]),a._v(" USB 오류")]),a._v(" "),s("h3",{attrs:{id:"업로드가-성공하지-못하였습니다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#업로드가-성공하지-못하였습니다"}},[a._v("#")]),a._v(" 업로드가 성공하지 못하였습니다")]),a._v(" "),s("p",[a._v("Ubuntu에서 모뎀 관리자를 제거합니다.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" remove modemmanager\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);