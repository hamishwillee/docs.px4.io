(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{1833:function(t,_,s){"use strict";s.r(_);var e=s(18),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"esc-캘리브레이션"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esc-캘리브레이션"}},[t._v("#")]),t._v(" ESC 캘리브레이션")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note")]),t._v(" 이 지침은 "),e("RouterLink",{attrs:{to:"/ko/peripherals/pwm_escs_and_servo.html"}},[t._v("PWM ESC")]),t._v("에 한정 합니다.")],1)]),t._v(" "),e("p",[t._v("전자 속도 제어기(ESC)는 비행 제어기(FC)의 PWM 입력 값을 기반으로 모터 속도(및 방향)를 조절합니다. ESC가 응답할 입력 범위는 설정 가능하며, 동일한 모델의 ESC간에도 기본 응답 범위가 다를 수 있습니다.")]),t._v(" "),e("p",[t._v("ESC 캘리브레이션은 모든 ESC를 비행 컨트롤러가 제공하는 동일한 최대 및 최소 PWM 신호값으로 업데이트합니다. 결과적으로 모든 ESC/모터는(전체 입력 범위에서) 동일한 방식으로 비행 컨트롤러 입력에 응답합니다.")]),t._v(" "),e("p",[t._v("모든 ESC, 특히 저가 모델의 경우에 캘리브레이션이 권장됩니다.")]),t._v(" "),e("h2",{attrs:{id:"전제-조건"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[t._v("#")]),t._v(" 전제 조건")]),t._v(" "),e("p",[t._v("시스템에는 전원 모듈이 있어야합니다. (PX4는 측정된 전압을 사용하여 배터리 연결 여부를 결정합니다).")]),t._v(" "),e("h2",{attrs:{id:"단계"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#단계"}},[t._v("#")]),t._v(" 단계")]),t._v(" "),e("p",[t._v("ESC를 캘리브레이션하려면 다음을 수행하십시오.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("프로펠러를 분리하십시오.")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("경고")]),t._v(" 절대로 프로펠러를 장착하고 ESC 캘리브레이션을 수행하지 마십시오.")]),t._v(" "),e("p",[t._v("모터는 ESC 캘리브레이션 동안 작동하지 않습니다. 그러나 만약 ESC가 캘리브레이션 시퀀스를 적절히 지원하거나 감지하지 않으면, ESC는 모터를 최대 속도로 회전시키는 것으로 PWM 입력신호에 응답합니다.")])])]),t._v(" "),e("li",[e("p",[t._v("배터리를 분리하고 USB만을 사용하여 비행 컨트롤러를 연결하십시오.(그 외 다른 연결 방법을 사용하지 마십시오.)")])]),t._v(" "),e("li",[e("p",[e("em",[t._v("QGroundControl")]),t._v(" "),e("strong",[t._v("설정 > 전원")]),t._v("을 연 다음 "),e("strong",[t._v("캘리브레이션 시작")]),t._v(" 버튼을 누릅니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(339),alt:"ESC 캘리브레이션 단계 1"}})])]),t._v(" "),e("li",[e("p",[t._v("다음 메시지가 나타나면 배터리를 연결하십시오.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(441),alt:"ESC 캘리브레이션 단계 2"}})]),t._v(" "),e("p",[t._v("캘리브레이션이 자동으로 시작됩니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(442),alt:"ESC 캘리브레이션 단계 3"}})])]),t._v(" "),e("li",[e("p",[t._v("캘리브레이션이 완료되면 배터리를 분리하라는 메시지가 표시됩니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(443),alt:"ESC 캘리브레이션 단계 4"}})])])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("참고")]),t._v(" 고품질 컨트롤러는 출고 시 공정 캘리브레이션이 되어 있습니다. "),e("em",[t._v("이론적으로")]),t._v(" 캘리브레이션은 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MIN"}},[t._v("PWM_MIN")]),t._v("과 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAX"}},[t._v("PWM_MAX")]),t._v(" 파라미터를 ESC 기술 사양에 기재된 값으로 설정하는 것으로 완료할 수 있습니다. 하지만 실제로는 PWM 입력 범위가 고품질 컨트롤러에서도 (출고 시 설정값과) 다를 수 있으므로 캘리브레이션이 권장됩니다.")],1)])])}),[],!1,null,null,null);_.default=r.exports},339:function(t,_,s){t.exports=s.p+"assets/img/qgc_esc_calibration.efb64b91.png"},441:function(t,_,s){t.exports=s.p+"assets/img/esc_calibration_step_2.a4748456.png"},442:function(t,_,s){t.exports=s.p+"assets/img/esc_calibration_step_3.f0838782.png"},443:function(t,_,s){t.exports=s.p+"assets/img/esc_calibration_step_4.21cea0f6.png"}}]);