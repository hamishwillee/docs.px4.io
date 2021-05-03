(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{2330:function(t,s,a){"use strict";a.r(s);var _=a(18),e=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"电调-esc-校准"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#电调-esc-校准"}},[t._v("#")]),t._v(" 电调（ESC）校准")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),_("p",[t._v("这些说明仅与 "),_("RouterLink",{attrs:{to:"/zh/peripherals/pwm_escs_and_servo.html"}},[t._v("PWM 电调相关")]),t._v("。")],1)]),t._v(" "),_("p",[t._v("电调根据飞控的 PWM 输入值 来调节电机速度（和方向）。 电调响应的输入范围是可配置的，甚至同一模型下的不同电调之间的默认范围也是不同的。")]),t._v(" "),_("p",[t._v("此校准将更新所有 ESCs, 其最大和最小 PWM 输入值将由飞控提供。 随后，所有电调/电机机都将以同样方式（跨越整个输入范围）对飞控输入作出反应。")]),t._v(" "),_("p",[t._v("建议对所有电调进行校准，特别是低成本模型机。")]),t._v(" "),_("h2",{attrs:{id:"前置条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[t._v("#")]),t._v(" 前置条件")]),t._v(" "),_("p",[t._v("系统必须包括一个电源模块（PX4 使用测量的电压来确定电池是否连接）。")]),t._v(" "),_("h2",{attrs:{id:"步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),_("p",[t._v("校准电调：")]),t._v(" "),_("ol",[_("li",[t._v("卸下螺旋桨。")])]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),_("p",[t._v("切勿带桨进行电调校准。")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("电调校准期间电机不应旋转。 但是如果电调不支持/检测校准序列，它将以最大速度运行电机来响应 PWM 输入。\n")])])])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("p",[t._v("断开电池并（仅）通过 USB 连接飞行控制器。")])]),t._v(" "),_("li",[_("p",[t._v("打开 * QGroundControl *** 设置 > 电源**界面，然后按 "),_("strong",[t._v("校准")]),t._v(" 按钮。")]),t._v(" "),_("p",[_("img",{attrs:{src:a(339),alt:"电调校准步骤 1"}})])]),t._v(" "),_("li",[_("p",[t._v("在出现提示时连接电池:")]),t._v(" "),_("p",[_("img",{attrs:{src:a(441),alt:"电调校准步骤 2"}})]),t._v(" "),_("p",[t._v("校准将自动开始:")]),t._v(" "),_("p",[_("img",{attrs:{src:a(442),alt:"电调校准步骤 3"}})])]),t._v(" "),_("li",[_("p",[t._v("校准完成后, 系统将提示您断开电池的连接。")]),t._v(" "),_("p",[_("img",{attrs:{src:a(443),alt:"电调校准步骤 4"}})])])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),_("p",[t._v("高品质的电调带有出厂校准。 "),_("em",[t._v("按理说")]),t._v("， 这意味着这些电调可以按照电调技术规格书仅通过设置 "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MIN"}},[t._v("PWM_MIN")]),t._v(" 和 "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAX"}},[t._v("PWM_MAX")]),t._v(" 参数来配置即可。 实际上，即使在高质量控制器上，输入范围也可能不同，这就是建议校准的原因。")],1)])])}),[],!1,null,null,null);s.default=e.exports},339:function(t,s,a){t.exports=a.p+"assets/img/qgc_esc_calibration.efb64b91.png"},441:function(t,s,a){t.exports=a.p+"assets/img/esc_calibration_step_2.a4748456.png"},442:function(t,s,a){t.exports=a.p+"assets/img/esc_calibration_step_3.f0838782.png"},443:function(t,s,a){t.exports=a.p+"assets/img/esc_calibration_step_4.21cea0f6.png"}}]);