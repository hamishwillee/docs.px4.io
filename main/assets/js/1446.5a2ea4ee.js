(window.webpackJsonp=window.webpackJsonp||[]).push([[1446],{2795:function(t,a,e){"use strict";e.r(a);var s=e(19),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"모듈-참조-추정기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#모듈-참조-추정기"}},[t._v("#")]),t._v(" 모듈 참조: 추정기")]),t._v(" "),e("h2",{attrs:{id:"attitudeestimatorq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attitudeestimatorq"}},[t._v("#")]),t._v(" AttitudeEstimatorQ")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/attitude_estimator_q",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/attitude_estimator_q"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("자세 추정자 Q입니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"AttitudeEstimatorQ_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("AttitudeEstimatorQ <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"airspeed-estimator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#airspeed-estimator"}},[t._v("#")]),t._v(" airspeed_estimator")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/airspeed_selector",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/airspeed_selector"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-2"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v('이 모듈은 표시(IAS), 보정(CAS), 실제 속도(TAS) 및 추정이 현재 유효하지 않은 경우와 기반 센서 판독값 또는 지상 속도에서 풍속을 뺀 경우 정보를 포함하는 단일 airspeed_validated 주제를 제공합니다. 다중 "원시" 속도 입력을 지원하는 이 모듈은 오류 감지시 자동으로 유효한 센서로 전환합니다. 고장 감지와 IAS에서 CAS까지의 축척 계수 추정을 위하여 여러 바람 추정기를 실행하고 이를 게시합니다.')]),t._v(" "),e("p",[e("a",{attrs:{id:"airspeed_estimator_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-2"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("airspeed_estimator <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"ekf2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ekf2"}},[t._v("#")]),t._v(" ekf2")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/ekf2",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/ekf2"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-3"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("확장 칼만 필터를 사용한 태도 및 위치 추정기입니다. 멀티콥터와 고정익에 사용됩니다.")]),t._v(" "),e("p",[t._v("The documentation can be found on the "),e("a",{attrs:{href:"https://docs.px4.io/main/en/advanced_config/tuning_the_ecl_ekf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECL/EKF Overview & Tuning"),e("OutboundLink")],1),t._v(" page.")]),t._v(" "),e("p",[t._v("ekf2는 재생 모드("),e("code",[t._v("-r")]),t._v(")에서 시작할 수 있습니다. 이 모드에서는 시스템 시간에 액세스하지 않고, 센서 주제의 타임스탬프만 사용합니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"ekf2_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-3"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ekf2 <command> [arguments...]\n Commands:\n   start\n     [-r]        Enable replay mode\n\n   stop\n\n   status        print status info\n\n   select_instance Request switch to new estimator instance\n     <instance>  Specify desired estimator instance\n")])])]),e("h2",{attrs:{id:"local-position-estimator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#local-position-estimator"}},[t._v("#")]),t._v(" local_position_estimator")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/local_position_estimator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/local_position_estimator"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-4"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("확장 칼만 필터를 사용한 태도 및 위치 추정기입니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"local_position_estimator_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-4"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("local_position_estimator <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"mc-hover-thrust-estimator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mc-hover-thrust-estimator"}},[t._v("#")]),t._v(" mc_hover_thrust_estimator")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/mc_hover_thrust_estimator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/mc_hover_thrust_estimator"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-5"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[e("a",{attrs:{id:"mc_hover_thrust_estimator_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-5"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mc_hover_thrust_estimator <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);