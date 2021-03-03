(window.webpackJsonp=window.webpackJsonp||[]).push([[1075],{2241:function(n,r,a){"use strict";a.r(r);var s=a(18),t=Object(s.a)({},(function(){var n=this,r=n.$createElement,a=n._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"유지보수-참고"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#유지보수-참고"}},[n._v("#")]),n._v(" 유지보수 참고")]),n._v(" "),a("p",[n._v("여기서는 코드 베이스 상태를 분석하고 유지 관리를 지원하는 몇가지 도구를 설명합니다.")]),n._v(" "),a("h2",{attrs:{id:"변경-분석"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#변경-분석"}},[n._v("#")]),n._v(" 변경 분석")]),n._v(" "),a("p",[n._v("휘젓는 횟수(주: 버터를 만들 때 우유를 충분히 숙성시키려 휘젓는 작업에 비유), 즉, 파일을 얼마나 많이 바꾸었느냐는 어떤 파일/일부분을 리팩토링해야 하는가에 대한 척도입니다.")]),n._v(" "),a("p",[n._v("변경 횟수의 척도를 찾는 도구 "),a("a",{attrs:{href:"https://github.com/danmayer/churn",target:"_blank",rel:"noopener noreferrer"}},[n._v("Churn"),a("OutboundLink")],1),n._v("을 이 용도로 활용할 수 있습니다:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("gem install churn\n")])])]),a("p",[a("code",[n._v("v1.6.0-rc2")]),n._v(" 출력 예제는 다음과 같습니다:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('cd src/PX4-Autopilot\nchurn --start_date "6 months ago"\n**********************************************************************\n* Revision Changes\n**********************************************************************\nFiles\n+------------------------------------------+\n| file                                     |\n+------------------------------------------+\n| src/modules/navigator/mission.cpp        |\n| src/modules/navigator/navigator_main.cpp |\n| src/modules/navigator/rtl.cpp            |\n+------------------------------------------+\n\n\n\n**********************************************************************\n* Project Churn\n**********************************************************************\n\nFiles\n+---------------------------------------------------------------------------+---------------+\n| file_path                                                                 | times_changed |\n+---------------------------------------------------------------------------+---------------+\n| src/modules/mc_pos_control/mc_pos_control_main.cpp                        | 107           |\n| src/modules/commander/commander.cpp                                       | 67            |\n| ROMFS/px4fmu_common/init.d/rcS                                            | 52            |\n| Makefile                                                                  | 49            |\n| src/drivers/px4fmu/fmu.cpp                                                | 47            |\n| ROMFS/px4fmu_common/init.d/rc.sensors                                     | 40            |\n| src/drivers/boards/aerofc-v1/board_config.h                               | 31            |\n| src/modules/logger/logger.cpp                                             | 29            |\n| src/modules/navigator/navigator_main.cpp                                  | 28            |\n')])])])])}),[],!1,null,null,null);r.default=t.exports}}]);