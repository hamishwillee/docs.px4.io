(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{1865:function(t,e,s){"use strict";s.r(e);var a=s(18),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"esc-캘리브레이션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esc-캘리브레이션"}},[t._v("#")]),t._v(" ESC 캘리브레이션")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("These instructions are only relevant to "),a("RouterLink",{attrs:{to:"/ko/peripherals/pwm_escs_and_servo.html"}},[t._v("PWM ESCs")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Electronic Speed Controllers (ESCs) regulate motor speed (and direction) based on the PWM input value from the flight controller (FC). The range of inputs to which an ESC will respond is configurable, and the default range can differ even between ESCs of the same model.")]),t._v(" "),a("p",[t._v("This calibration updates all the ESCs with the maximum and minimum PWM input values that will be supplied by the flight controller. Subsequently all the ESCs/motors will respond to flight controller input in the same way (across the whole input range).")]),t._v(" "),a("p",[t._v("Calibration is recommended for all ESCs, and in particular for low cost models.")]),t._v(" "),a("h2",{attrs:{id:"전제-조건"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[t._v("#")]),t._v(" 전제 조건")]),t._v(" "),a("p",[t._v("The system must include a power module (PX4 uses the measured voltage to determine whether or not a battery is connected).")]),t._v(" "),a("h2",{attrs:{id:"단계"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단계"}},[t._v("#")]),t._v(" 단계")]),t._v(" "),a("p",[t._v("To calibrate the ESCs:")]),t._v(" "),a("ol",[a("li",[t._v("프로펠러를 분리하십시오.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Never attempt ESC calibration with props on.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("The motors should not spin during ESC calibration. However if an ESC doesn't properly support/detect the calibration sequence then it will respond to the PWM input by running the motor at maximum speed.\n")])])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("배터리를 분리하고 USB만을 사용하여 비행 컨트롤러를 연결하십시오.(그 외 다른 연결 방법을 사용하지 마십시오.)")])]),t._v(" "),a("li",[a("p",[a("em",[t._v("QGroundControl")]),t._v(" "),a("strong",[t._v("설정 > 전원")]),t._v("을 연 다음 "),a("strong",[t._v("캘리브레이션 시작")]),t._v(" 버튼을 누릅니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(339),alt:"ESC 캘리브레이션 단계 1"}})])]),t._v(" "),a("li",[a("p",[t._v("다음 메시지가 나타나면 배터리를 연결하십시오.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(450),alt:"ESC 캘리브레이션 단계 2"}})]),t._v(" "),a("p",[t._v("캘리브레이션이 자동으로 시작됩니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(451),alt:"ESC 캘리브레이션 단계 3"}})])]),t._v(" "),a("li",[a("p",[t._v("캘리브레이션이 완료되면 배터리를 분리하라는 메시지가 표시됩니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(452),alt:"ESC 캘리브레이션 단계 4"}})])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("High-quality controllers come with a factory calibration. In "),a("em",[t._v("theory")]),t._v(" this means that they can be configured by just setting the "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MIN"}},[t._v("PWM_MIN")]),t._v(" and "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAX"}},[t._v("PWM_MAX")]),t._v(" parameters to the values provided in the ESC technical specification. In practice the input range may differ even on high quality controllers, which is why calibration is recommended.")],1)])])}),[],!1,null,null,null);e.default=o.exports},339:function(t,e,s){t.exports=s.p+"assets/img/qgc_esc_calibration.efb64b91.png"},450:function(t,e,s){t.exports=s.p+"assets/img/esc_calibration_step_2.a4748456.png"},451:function(t,e,s){t.exports=s.p+"assets/img/esc_calibration_step_3.f0838782.png"},452:function(t,e,s){t.exports=s.p+"assets/img/esc_calibration_step_4.21cea0f6.png"}}]);