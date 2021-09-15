(window.webpackJsonp=window.webpackJsonp||[]).push([[1233],{2382:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"모듈-참조-추정기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#모듈-참조-추정기"}},[t._v("#")]),t._v(" 모듈 참조: 추정기")]),t._v(" "),s("h2",{attrs:{id:"attitudeestimatorq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attitudeestimatorq"}},[t._v("#")]),t._v(" AttitudeEstimatorQ")]),t._v(" "),s("p",[t._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/attitude_estimator_q",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/attitude_estimator_q"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"설명"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),s("p",[t._v("자세 추정자 Q입니다.")]),t._v(" "),s("p",[s("a",{attrs:{id:"AttitudeEstimatorQ_usage"}})]),t._v(" "),s("h3",{attrs:{id:"사용법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("AttitudeEstimatorQ <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"airspeed-estimator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#airspeed-estimator"}},[t._v("#")]),t._v(" airspeed_estimator")]),t._v(" "),s("p",[t._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/airspeed_selector",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/airspeed_selector"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"설명-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명-2"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),s("p",[t._v('이 모듈은 표시(IAS), 보정(CAS), 실제 속도(TAS) 및 추정이 현재 유효하지 않은 경우와 기반 센서 판독값 또는 지상 속도에서 풍속을 뺀 경우 정보를 포함하는 단일 airspeed_validated 주제를 제공합니다. 다중 "원시" 속도 입력을 지원하는 이 모듈은 오류 감지시 자동으로 유효한 센서로 전환합니다. 고장 감지와 IAS에서 CAS까지의 축척 계수 추정을 위하여 여러 바람 추정기를 실행하고 이를 게시합니다.')]),t._v(" "),s("p",[s("a",{attrs:{id:"airspeed_estimator_usage"}})]),t._v(" "),s("h3",{attrs:{id:"사용법-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-2"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("airspeed_estimator <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"ekf2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ekf2"}},[t._v("#")]),t._v(" ekf2")]),t._v(" "),s("p",[t._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/ekf2",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/ekf2"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"설명-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명-3"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),s("p",[t._v("확장 칼만 필터를 사용한 태도 및 위치 추정기입니다. 멀티콥터와 고정익에 사용됩니다.")]),t._v(" "),s("p",[t._v("문서는 "),s("a",{attrs:{href:"https://docs.px4.io/master/en/advanced_config/tuning_the_ecl_ekf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECL/EKF 개요 & 조정"),s("OutboundLink")],1),t._v(" 페이지를 참고하십시오.")]),t._v(" "),s("p",[t._v("ekf2는 재생 모드("),s("code",[t._v("-r")]),t._v(")에서 시작할 수 있습니다. 이 모드에서는 시스템 시간에 액세스하지 않고, 센서 주제의 타임스탬프만 사용합니다.")]),t._v(" "),s("p",[s("a",{attrs:{id:"ekf2_usage"}})]),t._v(" "),s("h3",{attrs:{id:"사용법-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-3"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ekf2 <command> [arguments...]\n Commands:\n   start\n     [-r]        Enable replay mode\n\n   stop\n\n   status        print status info\n\n   select_instance Request switch to new estimator instance\n     <instance>  Specify desired estimator instance\n")])])]),s("h2",{attrs:{id:"local-position-estimator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-position-estimator"}},[t._v("#")]),t._v(" local_position_estimator")]),t._v(" "),s("p",[t._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/local_position_estimator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/local_position_estimator"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"설명-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명-4"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),s("p",[t._v("확장 칼만 필터를 사용한 태도 및 위치 추정기입니다.")]),t._v(" "),s("p",[s("a",{attrs:{id:"local_position_estimator_usage"}})]),t._v(" "),s("h3",{attrs:{id:"사용법-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-4"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("local_position_estimator <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"mc-hover-thrust-estimator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mc-hover-thrust-estimator"}},[t._v("#")]),t._v(" mc_hover_thrust_estimator")]),t._v(" "),s("p",[t._v("소스: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/mc_hover_thrust_estimator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/mc_hover_thrust_estimator"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"설명-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설명-5"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),s("p",[s("a",{attrs:{id:"mc_hover_thrust_estimator_usage"}})]),t._v(" "),s("h3",{attrs:{id:"사용법-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용법-5"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mc_hover_thrust_estimator <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);