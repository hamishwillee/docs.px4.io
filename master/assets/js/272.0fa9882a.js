(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{2297:function(t,e,s){"use strict";s.r(e);var a=s(18),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"电调-esc-校准"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电调-esc-校准"}},[t._v("#")]),t._v(" 电调（ESC）校准")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("These instructions are only relevant to "),a("RouterLink",{attrs:{to:"/zh/peripherals/pwm_escs_and_servo.html"}},[t._v("PWM ESCs")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Electronic Speed Controllers (ESCs) regulate motor speed (and direction) based on the PWM input value from the flight controller (FC). The range of inputs to which an ESC will respond is configurable, and the default range can differ even between ESCs of the same model.")]),t._v(" "),a("p",[t._v("This calibration updates all the ESCs with the maximum and minimum PWM input values that will be supplied by the flight controller. Subsequently all the ESCs/motors will respond to flight controller input in the same way (across the whole input range).")]),t._v(" "),a("p",[t._v("Calibration is recommended for all ESCs, and in particular for low cost models.")]),t._v(" "),a("h2",{attrs:{id:"操作前提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作前提"}},[t._v("#")]),t._v(" 操作前提")]),t._v(" "),a("p",[t._v("The system must include a power module (PX4 uses the measured voltage to determine whether or not a battery is connected).")]),t._v(" "),a("h2",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),a("p",[t._v("To calibrate the ESCs:")]),t._v(" "),a("ol",[a("li",[t._v("卸下螺旋桨。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("Never attempt ESC calibration with props on.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("The motors should not spin during ESC calibration. However if an ESC doesn't properly support/detect the calibration sequence then it will respond to the PWM input by running the motor at maximum speed.\n")])])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("断开电池并（仅）通过 USB 连接飞行控制器。")])]),t._v(" "),a("li",[a("p",[t._v("打开 * QGroundControl *** 设置 > 电源**界面，然后按 "),a("strong",[t._v("校准")]),t._v(" 按钮。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(339),alt:"ESC校准步骤1"}})])]),t._v(" "),a("li",[a("p",[t._v("在出现提示时连接电池:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(450),alt:"ESC校准步骤2"}})]),t._v(" "),a("p",[t._v("校准将自动开始:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(451),alt:"ESC校准步骤3"}})])]),t._v(" "),a("li",[a("p",[t._v("校准完成后, 系统将提示您断开电池的连接。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(452),alt:"ESC校准步骤4"}})])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("High-quality controllers come with a factory calibration. In "),a("em",[t._v("theory")]),t._v(" this means that they can be configured by just setting the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MIN"}},[t._v("PWM_MIN")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAX"}},[t._v("PWM_MAX")]),t._v(" parameters to the values provided in the ESC technical specification. In practice the input range may differ even on high quality controllers, which is why calibration is recommended.")],1)])])}),[],!1,null,null,null);e.default=i.exports},339:function(t,e,s){t.exports=s.p+"assets/img/qgc_esc_calibration.efb64b91.png"},450:function(t,e,s){t.exports=s.p+"assets/img/esc_calibration_step_2.a4748456.png"},451:function(t,e,s){t.exports=s.p+"assets/img/esc_calibration_step_3.f0838782.png"},452:function(t,e,s){t.exports=s.p+"assets/img/esc_calibration_step_4.21cea0f6.png"}}]);