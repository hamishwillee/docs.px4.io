(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{3127:function(t,e,s){"use strict";s.r(e);var a=s(19),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"电调-esc-校准"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电调-esc-校准"}},[t._v("#")]),t._v(" 电调（ESC）校准")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("These instructions are only relevant to "),a("RouterLink",{attrs:{to:"/zh/peripherals/pwm_escs_and_servo.html"}},[t._v("PWM ESCs")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/peripherals/oneshot.html"}},[t._v("OneShot ESCs")]),t._v(". "),a("RouterLink",{attrs:{to:"/zh/peripherals/dshot.html"}},[t._v("DShot")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/can/"}},[t._v("CAN")]),t._v(" ESCs ("),a("RouterLink",{attrs:{to:"/zh/dronecan/escs.html"}},[t._v("DroneCAN")]),t._v("/Cyphal) do not require calibration. :::")],1),t._v(" "),a("p",[t._v("电调根据飞控的 PWM 输入值 来调节电机速度（和方向）。 电调响应的输入范围是可配置的，甚至同一模型下的不同电调之间的默认范围也是不同的。")]),t._v(" "),a("p",[t._v("此校准将更新所有 ESCs, 其最大和最小 PWM 输入值将由飞控提供。 随后，所有电调/电机机都将以同样方式（跨越整个输入范围）对飞控输入作出反应。")]),t._v(" "),a("p",[t._v("建议对所有电调进行校准，特别是低成本模型机。")]),t._v(" "),a("h2",{attrs:{id:"前置条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[t._v("#")]),t._v(" 前置条件")]),t._v(" "),a("p",[t._v("系统必须包括一个电源模块（PX4 使用测量的电压来确定电池是否连接）。")]),t._v(" "),a("h2",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),a("p",[t._v("校准电调：")]),t._v(" "),a("ol",[a("li",[t._v("卸下螺旋桨。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("切勿带桨进行电调校准。")]),t._v(" "),a("p",[t._v("电调校准期间电机不应旋转。 但是如果电调不支持/检测校准序列，它将以最大速度运行电机来响应 PWM 输入。 :::")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("断开电池并（仅）通过 USB 连接飞行控制器。")])]),t._v(" "),a("li",[a("p",[t._v("Open the "),a("em",[t._v("QGroundControl")]),t._v(" "),a("strong",[t._v("Settings > Power")]),t._v(", then press the "),a("strong",[t._v("Calibrate")]),t._v(" button.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(470),alt:"电调校准步骤 1"}})])]),t._v(" "),a("li",[a("p",[t._v("在出现提示时连接电池:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(471),alt:"电调校准步骤 2"}})]),t._v(" "),a("p",[t._v("校准将自动开始:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(472),alt:"电调校准步骤 3"}})])]),t._v(" "),a("li",[a("p",[t._v("校准完成后, 系统将提示您断开电池的连接。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(473),alt:"电调校准步骤 4"}})])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("高品质的电调带有出厂校准。 In "),a("em",[t._v("theory")]),t._v(" this means that they can be configured by just setting the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_MIN1"}},[t._v("PWM_MAIN_MINn")]),t._v("/"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_MIN1"}},[t._v("PWM_AUX_MINn")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_MAX1"}},[t._v("PWM_MAIN_MAXn")]),t._v("/"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_AUX_MAX1"}},[t._v("PWM_AUX_MAXn")]),t._v(" parameters to the values provided in the ESC technical specification. 实际上，即使在高质量控制器上，输入范围也可能不同，这就是建议校准的原因。 :::")],1)])])])])}),[],!1,null,null,null);e.default=_.exports},470:function(t,e,s){t.exports=s.p+"assets/img/qgc_esc_calibration.efb64b91.png"},471:function(t,e,s){t.exports=s.p+"assets/img/esc_calibration_step_2.a4748456.png"},472:function(t,e,s){t.exports=s.p+"assets/img/esc_calibration_step_3.f0838782.png"},473:function(t,e,s){t.exports=s.p+"assets/img/esc_calibration_step_4.21cea0f6.png"}}]);