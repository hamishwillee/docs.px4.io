(window.webpackJsonp=window.webpackJsonp||[]).push([[944],{1435:function(t,e,r){t.exports=r.p+"assets/img/px4_fmu_io_functions.97862480.png"},3826:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"px4-参考飞行控制器设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-参考飞行控制器设计"}},[t._v("#")]),t._v(" PX4 参考飞行控制器设计")]),t._v(" "),a("p",[t._v("PX4 参考设计是飞行控制器的 "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 系列 ")]),t._v("。 该设计于2011年首次发布，现已进入第5 "),a("a",{attrs:{href:"#reference_design_generations"}},[t._v("代")]),t._v("（第六代电路板设计正在进行中）。")],1),t._v(" "),a("h2",{attrs:{id:"二进制兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制兼容性"}},[t._v("#")]),t._v(" 二进制兼容性")]),t._v(" "),a("p",[t._v("所有按照特定设计制造的主板预计与二进制兼容（即可以运行相同的固件）。 从2018年起，我们将提供一个二进制兼容性测试套件，使我们能够验证兼容性。")]),t._v(" "),a("p",[t._v("第1-3代 FMU 设计用于开源硬件，但到了第4-5代只提供 pin 输出引脚和供电规格（原理图由个人开发者生成）。 为了可以更好的确保兼容性，FMUv6 及更新的版本重新提供完整的设计模型。")]),t._v(" "),a("p",[a("a",{attrs:{id:"reference_design_generations"}})]),t._v(" "),a("h2",{attrs:{id:"参考设计迭代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考设计迭代"}},[t._v("#")]),t._v(" 参考设计迭代：")]),t._v(" "),a("ul",[a("li",[t._v("FMUv1：开发板 \\（STM32F407, 128 KB RAM, 1MB flash, "),a("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv1",target:"_blank",rel:"noopener noreferrer"}},[t._v("原理图"),a("OutboundLink")],1),t._v("\\）（PX4 不再支持）")]),t._v(" "),a("li",[t._v("FMUv2：Pixhawk \\（STM32F427, 168 MHz, 192 KB RAM, 1MB flash, "),a("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv2",target:"_blank",rel:"noopener noreferrer"}},[t._v("原理图"),a("OutboundLink")],1),t._v("\\）")]),t._v(" "),a("li",[t._v("FMUv3：2MB Flash 的 Pixhawk 变种 \\（3DR Pixhawk 2 \\（Solo\\）， Hex Pixhawk 2.1，Holybro Pixfalcon，3DR Pixhawk Mini，STM32F427，168 MHz，256 KB RAM，2 MB flash，"),a("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv3_REV_D",target:"_blank",rel:"noopener noreferrer"}},[t._v("原理图"),a("OutboundLink")],1),t._v("\\）")]),t._v(" "),a("li",[t._v("FMUv4：Pixracer \\（STM32F427, 168 MHz, 256 KB RAM, 2MB flash, "),a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1raRRouNsveQz8cj-EneWG6iW0dqGfRAifI91I2Sr5E0/edit#gid=1585075739",target:"_blank",rel:"noopener noreferrer"}},[t._v("原理图"),a("OutboundLink")],1),t._v("\\）")]),t._v(" "),a("li",[t._v("FMUv4 PRO: Drotek Pixhawk 3 PRO (STM32F469, 180 MHz, 384 KB RAM, 2 MB flash, "),a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1raRRouNsveQz8cj-EneWG6iW0dqGfRAifI91I2Sr5E0/edit#gid=1585075739",target:"_blank",rel:"noopener noreferrer"}},[t._v("输出引脚"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("FMUv5: Holybro Pixhawk 4 (STM32F765, 216 MHz, 512 KB RAM, 2 MB flash, "),a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("输出引脚"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("FMUv6: work in progress, final name TBD, variant 6s (STM32H7, 400 MHz, 2 MB RAM, 2 MB flash) and variant 6i (i.MX RT1050, 600 MHz, 512 KB RAM, external flash)")])]),t._v(" "),a("h2",{attrs:{id:"main-io-功能分解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-io-功能分解"}},[t._v("#")]),t._v(" Main/IO 功能分解")]),t._v(" "),a("p",[t._v("下图展示了在Pixhawk系列飞行控制器（这些板被合并进一个单独的物理模块中）中 FMU 和 I/O 板之间总线和功能的职能划分。")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1435),alt:"PX4 Main/IO Functional Breakdown"}})]),t._v(" "),a("p",[t._v("一些Pixhawk系列控制器为了减少空间或复杂性，或者更好解决使用问题，没有通过I/O板构建。 In this case the I/O driver is not started.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v('Manufacturer flight controller variants without an I/O board are often named as a "diminutive" of a version that includes the I/O board: e.g. '),a("em",[t._v("Pixhawk 4")]),t._v(" "),a("strong",[t._v("Mini")]),a("em",[t._v(", _CUAV v5 "),a("strong",[t._v("nano")])]),t._v(".")])]),t._v(" "),a("p",[t._v("Build targets that must run on flight controllers with an I/O board map the FMU outputs to "),a("code",[t._v("AUX")]),t._v(" and the I/0 outputs to "),a("code",[t._v("MAIN")]),t._v(" (see diagram above). If the target is run on hardware where I/O board is not present or has been disabled, the PWM MAIN outputs will not be present. You might see this, for example, by running "),a("code",[t._v("px4_fmu-v5_default")]),t._v(" on "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v(" (with IO) and "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 Mini")]),t._v(" (without I/O).")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("On "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 Mini")]),t._v(" this results in a mismatch between the "),a("code",[t._v("MAIN")]),t._v(" label screenprinted on the flight controller and the "),a("code",[t._v("AUX")]),t._v(" bus shown during "),a("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[t._v("Actuator Configuration")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Note that if a build target is only ever intended to run on a flight controller that does not have an I/0 board, then the FMU outputs are mapped to "),a("code",[t._v("MAIN")]),t._v(" (for example, the "),a("code",[t._v("px4_fmu-v4_default")]),t._v(" target for "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(").")],1),t._v(" "),a("p",[t._v("PX4 PWM outputs are mapped to either "),a("code",[t._v("MAIN")]),t._v(" or "),a("code",[t._v("AUX")]),t._v(" ports in "),a("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[t._v("Actuator Configuration")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=o.exports}}]);