(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{2109:function(t,_,s){"use strict";s.r(_);var a=s(19),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"esc-캘리브레이션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esc-캘리브레이션"}},[t._v("#")]),t._v(" ESC 캘리브레이션")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("이 섹션은 "),a("RouterLink",{attrs:{to:"/ko/peripherals/pwm_escs_and_servo.html"}},[t._v("PWM ESC")]),t._v("에 관한 것입니다.")],1)]),t._v(" "),a("p",[t._v("전자속도 콘트롤러 (ESC)는 비행 콘트롤러(FC)의 PWM 입력 값을 기반으로 모터 속도와 방향을 조절합니다. ESC 입력 범위는 설정 가능하며, 동일한 모델의 ESC에도 응답 범위가 다를 수 있습니다.")]),t._v(" "),a("p",[t._v("비행 콘트롤러에서 입력하는 최대/최소 PWM 입력값으로 ESC를 업데이트합니다. 결과적으로, 모든 ESC와 모터는 같은 방식으로 (전체 입력 범위에 걸쳐) 비행 콘트롤러 입력에 반응합니다.")]),t._v(" "),a("p",[t._v("특히, 저비용 ESC는 보정이 중요합니다.")]),t._v(" "),a("h2",{attrs:{id:"전제-조건"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[t._v("#")]),t._v(" 전제 조건")]),t._v(" "),a("p",[t._v("시스템에는 전원 모듈이 포함되어야합니다. PX4는 측정된 전압으로 배터리 연결 여부를 판별합니다.")]),t._v(" "),a("h2",{attrs:{id:"단계"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단계"}},[t._v("#")]),t._v(" 단계")]),t._v(" "),a("p",[t._v("ESC를 보정하려면 :")]),t._v(" "),a("ol",[a("li",[t._v("프로펠러를 분리하십시오.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("프로펠러를 장착한 상태에서 ESC 보정을 하지 마십시오.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("ESC 보정중에는 모터가 회전하지 않아야 합니다. 그러나, ESC가 보정 시퀀스를 제대로 지원/감지하지 않으면 모터를 최대 속도로 실행하여 PWM 입력에 응답합니다.\n")])])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("배터리를 분리하고 USB만을 사용하여 비행 컨트롤러를 연결하십시오.(그 외 다른 연결 방법을 사용하지 마십시오.)")])]),t._v(" "),a("li",[a("p",[a("em",[t._v("QGroundControl")]),t._v(" "),a("strong",[t._v("설정 > 전원")]),t._v("을 연 다음 "),a("strong",[t._v("캘리브레이션 시작")]),t._v(" 버튼을 누릅니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(344),alt:"ESC 캘리브레이션 단계 1"}})])]),t._v(" "),a("li",[a("p",[t._v("다음 메시지가 나타나면 배터리를 연결하십시오.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(448),alt:"ESC 캘리브레이션 단계 2"}})]),t._v(" "),a("p",[t._v("캘리브레이션이 자동으로 시작됩니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(449),alt:"ESC 캘리브레이션 단계 3"}})])]),t._v(" "),a("li",[a("p",[t._v("캘리브레이션이 완료되면 배터리를 분리하라는 메시지가 표시됩니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(450),alt:"ESC 캘리브레이션 단계 4"}})])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("고품질의 컨트롤러는 공장에서 보정후에 판매됩니다. "),a("em",[t._v("이론")]),t._v("적으로는 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_MIN"}},[t._v("PWM_MAIN_MINn")]),t._v("/"),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_MIN"}},[t._v("PWM_AUX_MINn")]),t._v(" 와"),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_MAX"}},[t._v("PWM_MAIN_MAXn")]),t._v("/"),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_MAX"}},[t._v("PWM_AUX_MAXn")]),t._v(" 매개변수만 ESC 기술 사양에 제공된 값으로 변경할 수 있습니다. 그러나, 실제로는 PWM 입력 범위가 고품질 콘트롤러에서도 출고시 설정값과 다를 수 있으므로, 보정을 하는 것이 좋습니다.")],1)])])}),[],!1,null,null,null);_.default=e.exports},344:function(t,_,s){t.exports=s.p+"assets/img/qgc_esc_calibration.efb64b91.png"},448:function(t,_,s){t.exports=s.p+"assets/img/esc_calibration_step_2.a4748456.png"},449:function(t,_,s){t.exports=s.p+"assets/img/esc_calibration_step_3.f0838782.png"},450:function(t,_,s){t.exports=s.p+"assets/img/esc_calibration_step_4.21cea0f6.png"}}]);