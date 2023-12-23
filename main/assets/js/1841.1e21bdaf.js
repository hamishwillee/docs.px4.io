(window.webpackJsonp=window.webpackJsonp||[]).push([[1841],{3341:function(s,a,r){"use strict";r.r(a);var t=r(19),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"유지보수-참고"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#유지보수-참고"}},[s._v("#")]),s._v(" 유지보수 참고")]),s._v(" "),r("p",[s._v("코드 베이스 상태를 분석하고 유지 관리를 지원하는 도구들을 설명합니다.")]),s._v(" "),r("h2",{attrs:{id:"변경-분석"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#변경-분석"}},[s._v("#")]),s._v(" 변경 분석")]),s._v(" "),r("p",[s._v("변동량(파일에 수행된 변경 수)은 리팩토링이 필요한 파일을 나타내는 지표가 될 수 있습니다.")]),s._v(" "),r("p",[s._v("변경 횟수의 척도를 찾는 도구 "),r("a",{attrs:{href:"https://github.com/danmayer/churn",target:"_blank",rel:"noopener noreferrer"}},[s._v("Churn"),r("OutboundLink")],1),s._v("을 이 용도로 사용할 수 있습니다.")]),s._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[s._v("gem "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" churn\n")])])]),r("p",[r("code",[s._v("v1.6.0-rc2")]),s._v(" 출력 예제는 다음과 같습니다:")]),s._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" src/PX4-Autopilot\nchurn --start_date "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6 months ago"')]),s._v("\n**********************************************************************\n* Revision Changes\n**********************************************************************\nFiles\n+------------------------------------------+\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("                                     "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------------------------------------------+\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" src/modules/navigator/mission.cpp        "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" src/modules/navigator/navigator_main.cpp "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" src/modules/navigator/rtl.cpp            "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+------------------------------------------+\n\n\n\n**********************************************************************\n* Project Churn\n**********************************************************************\n\nFiles\n+---------------------------------------------------------------------------+---------------+\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" file_path                                                                 "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" times_changed "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------------------------------------------------------------------------+---------------+\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" src/modules/mc_pos_control/mc_pos_control_main.cpp                        "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("107")]),s._v("           "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" src/modules/commander/commander.cpp                                       "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("67")]),s._v("            "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ROMFS/px4fmu_common/init.d/rcS                                            "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v("            "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Makefile                                                                  "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("49")]),s._v("            "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" src/drivers/px4fmu/fmu.cpp                                                "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),s._v("            "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ROMFS/px4fmu_common/init.d/rc.sensors                                     "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("            "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" src/drivers/boards/aerofc-v1/board_config.h                               "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v("            "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" src/modules/logger/logger.cpp                                             "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v("            "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" src/modules/navigator/navigator_main.cpp                                  "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("            "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);