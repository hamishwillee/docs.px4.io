(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{2322:function(t,s,e){"use strict";e.r(s);var a=e(19),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"电调-esc-校准"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电调-esc-校准"}},[t._v("#")]),t._v(" 电调（ESC）校准")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("这些说明仅与 "),a("RouterLink",{attrs:{to:"/zh/peripherals/pwm_escs_and_servo.html"}},[t._v("PWM 电调相关")]),t._v("。")],1)]),t._v(" "),a("p",[t._v("电调根据飞控的 PWM 输入值 来调节电机速度（和方向）。 电调响应的输入范围是可配置的，甚至同一模型下的不同电调之间的默认范围也是不同的。")]),t._v(" "),a("p",[t._v("此校准将更新所有 ESCs, 其最大和最小 PWM 输入值将由飞控提供。 随后，所有电调/电机机都将以同样方式（跨越整个输入范围）对飞控输入作出反应。")]),t._v(" "),a("p",[t._v("建议对所有电调进行校准，特别是低成本模型机。")]),t._v(" "),a("h2",{attrs:{id:"前置条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[t._v("#")]),t._v(" 前置条件")]),t._v(" "),a("p",[t._v("系统必须包括一个电源模块（PX4 使用测量的电压来确定电池是否连接）。")]),t._v(" "),a("h2",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),a("p",[t._v("校准电调：")]),t._v(" "),a("ol",[a("li",[t._v("卸下螺旋桨。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("切勿带桨进行电调校准。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("电调校准期间电机不应旋转。 但是如果电调不支持/检测校准序列，它将以最大速度运行电机来响应 PWM 输入。\n")])])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("断开电池并（仅）通过 USB 连接飞行控制器。")])]),t._v(" "),a("li",[a("p",[t._v("打开 * QGroundControl *** 设置 > 电源**界面，然后按 "),a("strong",[t._v("校准")]),t._v(" 按钮。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(342),alt:"电调校准步骤 1"}})])]),t._v(" "),a("li",[a("p",[t._v("在出现提示时连接电池:")]),t._v(" "),a("p",[a("img",{attrs:{src:e(446),alt:"电调校准步骤 2"}})]),t._v(" "),a("p",[t._v("校准将自动开始:")]),t._v(" "),a("p",[a("img",{attrs:{src:e(447),alt:"电调校准步骤 3"}})])]),t._v(" "),a("li",[a("p",[t._v("校准完成后, 系统将提示您断开电池的连接。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(448),alt:"电调校准步骤 4"}})])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("高品质的电调带有出厂校准。 In "),a("em",[t._v("theory")]),t._v(" this means that they can be configured by just setting the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_MIN"}},[t._v("PWM_MAIN_MINn")]),t._v("/"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_MIN"}},[t._v("PWM_AUX_MINn")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_MAX"}},[t._v("PWM_MAIN_MAXn")]),t._v("/"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_MAX"}},[t._v("PWM_AUX_MAXn")]),t._v(" parameters to the values provided in the ESC technical specification. 实际上，即使在高质量控制器上，输入范围也可能不同，这就是建议校准的原因。")],1)])])}),[],!1,null,null,null);s.default=_.exports},342:function(t,s,e){t.exports=e.p+"assets/img/qgc_esc_calibration.efb64b91.png"},446:function(t,s,e){t.exports=e.p+"assets/img/esc_calibration_step_2.a4748456.png"},447:function(t,s,e){t.exports=e.p+"assets/img/esc_calibration_step_3.f0838782.png"},448:function(t,s,e){t.exports=e.p+"assets/img/esc_calibration_step_4.21cea0f6.png"}}]);