(window.webpackJsonp=window.webpackJsonp||[]).push([[1151],{2390:function(t,e,o){"use strict";o.r(e);var r=o(19),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"电机检查"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#电机检查"}},[t._v("#")]),t._v(" 电机检查")]),t._v(" "),o("p",[t._v("在机架设置并配置完毕后，您应该检查电机分配和旋转方向以及servo响应。 这些可以在QGroundControl中完成，其选项是Vehicle Setup > Motors tab.")]),t._v(" "),o("p",[t._v("注意这些PX4特有的操作：")]),t._v(" "),o("ul",[o("li",[t._v("如果使用了安全按钮，在允许电机测试之前必须按下，保证其开启。")]),t._v(" "),o("li",[t._v("急停开关仍然可以立即停止电机。")]),t._v(" "),o("li",[t._v("使用参数 "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_MOT_TEST_EN"}},[t._v("COM_MOT_TEST_EN")]),t._v(" ，可以禁用电机测试。")],1),t._v(" "),o("li",[t._v("On boards with an IO, only the MAIN pins can be tested.")]),t._v(" "),o("li",[t._v("On the shell, "),o("RouterLink",{attrs:{to:"/zh/modules/modules_command.html#motor-test"}},[t._v("motor_test")]),t._v(" can be used as well, which has additional options.")],1)]),t._v(" "),o("p",[t._v("If one or more of the motors do not turn in the correct direction according to the configured "),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("airframe")]),t._v(", they must be reversed. There are several options:")],1),t._v(" "),o("ul",[o("li",[t._v("If using ESCs that support "),o("RouterLink",{attrs:{to:"/zh/peripherals/dshot.html"}},[t._v("DShot")]),t._v(" you can reverse the direction via "),o("RouterLink",{attrs:{to:"/zh/peripherals/dshot.html#commands"}},[t._v("DShot commands")]),t._v(".")],1),t._v(" "),o("li",[t._v("Swap 2 of the 3 motor cables (it does not matter which ones). :::note If motors are not connected via bullet-connectors, re-soldering is required (this is a reason, among others, to prefer DShot ESCs).\n:::")])]),t._v(" "),o("p",[t._v("The following additional checks should be performed to validate that the vehicle is setup correctly:")]),t._v(" "),o("ol",[o("li",[t._v("With propellers still removed, switch to "),o("RouterLink",{attrs:{to:"/zh/flight_modes/manual_stabilized_mc.html"}},[t._v("Stabilised mode")]),t._v(" (Multicopter) or "),o("RouterLink",{attrs:{to:"/zh/flight_modes/manual_fw.html"}},[t._v("Manual mode")]),t._v(" (Fixed Wing) and arm the vehicle.")],1),t._v(" "),o("li",[t._v("Increase the throttle a little (so the vehicle does not automatically disarm) and check that the motors respond to throttle changes.")]),t._v(" "),o("li",[t._v("Check that all motors spin at minimum throttle.")]),t._v(" "),o("li",[t._v("If the vehicle has ailerons, check if they are responding in the right directions when giving roll/pitch stick input commands.")])])])}),[],!1,null,null,null);e.default=i.exports}}]);