(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{2437:function(t,e,s){"use strict";s.r(e);var _=s(19),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"esc-캘리브레이션"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#esc-캘리브레이션"}},[t._v("#")]),t._v(" ESC 캘리브레이션")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("These instructions are only relevant to "),_("RouterLink",{attrs:{to:"/ko/peripherals/pwm_escs_and_servo.html"}},[t._v("PWM ESCs")]),t._v(" and "),_("RouterLink",{attrs:{to:"/ko/peripherals/oneshot.html"}},[t._v("OneShot ESCs")]),t._v(". "),_("RouterLink",{attrs:{to:"/ko/peripherals/dshot.html"}},[t._v("DShot")]),t._v(" and "),_("RouterLink",{attrs:{to:"/ko/can/"}},[t._v("CAN")]),t._v(" ESCs ("),_("RouterLink",{attrs:{to:"/ko/dronecan/escs.html"}},[t._v("DroneCAN")]),t._v("/Cyphal) do not require calibration. :::")],1),t._v(" "),_("p",[t._v("전자속도 콘트롤러 (ESC)는 비행 콘트롤러(FC)의 PWM 입력 값을 기반으로 모터 속도와 방향을 조절합니다. ESC 입력 범위는 설정 가능하며, 동일한 모델의 ESC에도 응답 범위가 다를 수 있습니다.")]),t._v(" "),_("p",[t._v("비행 콘트롤러에서 입력하는 최대/최소 PWM 입력값으로 ESC를 업데이트합니다. 결과적으로, 모든 ESC와 모터는 같은 방식으로 (전체 입력 범위에 걸쳐) 비행 콘트롤러 입력에 반응합니다.")]),t._v(" "),_("p",[t._v("특히, 저비용 ESC는 보정이 중요합니다.")]),t._v(" "),_("h2",{attrs:{id:"전제-조건"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[t._v("#")]),t._v(" 전제 조건")]),t._v(" "),_("p",[t._v("시스템에는 전원 모듈이 포함되어야합니다. PX4는 측정된 전압으로 배터리 연결 여부를 판별합니다.")]),t._v(" "),_("h2",{attrs:{id:"단계"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#단계"}},[t._v("#")]),t._v(" 단계")]),t._v(" "),_("p",[t._v("ESC를 보정하려면 :")]),t._v(" "),_("ol",[_("li",[t._v("프로펠러를 분리하십시오.")])]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("p",[t._v("프로펠러를 장착한 상태에서 ESC 보정을 하지 마십시오.")]),t._v(" "),_("p",[t._v("ESC 보정중에는 모터가 회전하지 않아야 합니다. 그러나, ESC가 보정 시퀀스를 제대로 지원/감지하지 않으면 모터를 최대 속도로 실행하여 PWM 입력에 응답합니다. :::")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("배터리를 분리하고 USB만을 사용하여 비행 컨트롤러를 연결하십시오.(그 외 다른 연결 방법을 사용하지 마십시오.)")])]),t._v(" "),_("li",[_("p",[_("em",[t._v("QGroundControl")]),t._v(" "),_("strong",[t._v("설정 > 전원")]),t._v("을 연 다음 "),_("strong",[t._v("캘리브레이션 시작")]),t._v(" 버튼을 누릅니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:s(470),alt:"ESC 캘리브레이션 단계 1"}})])]),t._v(" "),_("li",[_("p",[t._v("다음 메시지가 나타나면 배터리를 연결하십시오.")]),t._v(" "),_("p",[_("img",{attrs:{src:s(471),alt:"ESC 캘리브레이션 단계 2"}})]),t._v(" "),_("p",[t._v("캘리브레이션이 자동으로 시작됩니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:s(472),alt:"ESC 캘리브레이션 단계 3"}})])]),t._v(" "),_("li",[_("p",[t._v("캘리브레이션이 완료되면 배터리를 분리하라는 메시지가 표시됩니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:s(473),alt:"ESC 캘리브레이션 단계 4"}})])])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("고품질의 컨트롤러는 공장에서 보정후에 판매됩니다. In "),_("em",[t._v("theory")]),t._v(" this means that they can be configured by just setting the "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_MIN1"}},[t._v("PWM_MAIN_MINn")]),t._v("/"),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_MIN1"}},[t._v("PWM_AUX_MINn")]),t._v(" and "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_MAX1"}},[t._v("PWM_MAIN_MAXn")]),t._v("/"),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_MAX1"}},[t._v("PWM_AUX_MAXn")]),t._v(" parameters to the values provided in the ESC technical specification. 그러나, 실제로는 PWM 입력 범위가 고품질 콘트롤러에서도 출고시 설정값과 다를 수 있으므로, 보정을 하는 것이 좋습니다. :::")],1)])])])])}),[],!1,null,null,null);e.default=a.exports},470:function(t,e,s){t.exports=s.p+"assets/img/qgc_esc_calibration.efb64b91.png"},471:function(t,e,s){t.exports=s.p+"assets/img/esc_calibration_step_2.a4748456.png"},472:function(t,e,s){t.exports=s.p+"assets/img/esc_calibration_step_3.f0838782.png"},473:function(t,e,s){t.exports=s.p+"assets/img/esc_calibration_step_4.21cea0f6.png"}}]);