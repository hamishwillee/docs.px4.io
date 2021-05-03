(window.webpackJsonp=window.webpackJsonp||[]).push([[697],{1165:function(e,t,r){e.exports=r.p+"assets/img/px4_fmu_io_functions.f2806cbc.png"},2608:function(e,t,r){"use strict";r.r(t);var a=r(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"px4-参考飞行控制器设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-参考飞行控制器设计"}},[e._v("#")]),e._v(" PX4 参考飞行控制器设计")]),e._v(" "),a("p",[e._v("PX4 参考设计是飞行控制器的 "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[e._v("Pixhawk 系列 ")]),e._v("。 该设计于2011年首次发布，现已进入第5 "),a("a",{attrs:{href:"#reference_design_generations"}},[e._v("代")]),e._v("（第六代电路板设计正在进行中）。")],1),e._v(" "),a("h2",{attrs:{id:"二进制兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制兼容性"}},[e._v("#")]),e._v(" 二进制兼容性")]),e._v(" "),a("p",[e._v("所有按照特定设计制造的主板预计与二进制兼容（即可以运行相同的固件）。 从2018年起，我们将提供一个二进制兼容性测试套件，使我们能够验证兼容性。")]),e._v(" "),a("p",[e._v("第1-3代 FMU 设计用于开源硬件，但到了第4-5代只提供 pin 输出引脚和供电规格（原理图由个人开发者生成）。 为了可以更好的确保兼容性，FMUv6 及更新的版本重新提供完整的设计模型。")]),e._v(" "),a("p",[a("a",{attrs:{id:"reference_design_generations"}})]),e._v(" "),a("h2",{attrs:{id:"参考设计迭代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考设计迭代"}},[e._v("#")]),e._v(" 参考设计迭代：")]),e._v(" "),a("ul",[a("li",[e._v("FMUv1：开发板 \\（STM32F407, 128 KB RAM, 1MB flash, "),a("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv1",target:"_blank",rel:"noopener noreferrer"}},[e._v("原理图"),a("OutboundLink")],1),e._v("\\）（PX4 不再支持）")]),e._v(" "),a("li",[e._v("FMUv2：Pixhawk \\（STM32F427, 168 MHz, 192 KB RAM, 1MB flash, "),a("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv2",target:"_blank",rel:"noopener noreferrer"}},[e._v("原理图"),a("OutboundLink")],1),e._v("\\）")]),e._v(" "),a("li",[e._v("FMUv3：2MB Flash 的 Pixhawk 变种 \\（3DR Pixhawk 2 \\（Solo\\）， Hex Pixhawk 2.1，Holybro Pixfalcon，3DR Pixhawk Mini，STM32F427，168 MHz，256 KB RAM，2 MB flash，"),a("a",{attrs:{href:"https://github.com/PX4/Hardware/tree/master/FMUv3_REV_D",target:"_blank",rel:"noopener noreferrer"}},[e._v("原理图"),a("OutboundLink")],1),e._v("\\）")]),e._v(" "),a("li",[e._v("FMUv4：Pixracer \\（STM32F427, 168 MHz, 256 KB RAM, 2MB flash, "),a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1raRRouNsveQz8cj-EneWG6iW0dqGfRAifI91I2Sr5E0/edit#gid=1585075739",target:"_blank",rel:"noopener noreferrer"}},[e._v("原理图"),a("OutboundLink")],1),e._v("\\）")]),e._v(" "),a("li",[e._v("FMUv4 PRO: Drotek Pixhawk 3 PRO (STM32F469, 180 MHz, 384 KB RAM, 2 MB flash, "),a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1raRRouNsveQz8cj-EneWG6iW0dqGfRAifI91I2Sr5E0/edit#gid=1585075739",target:"_blank",rel:"noopener noreferrer"}},[e._v("输出引脚"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("li",[e._v("FMUv5: Holybro Pixhawk 4 (STM32F765, 216 MHz, 512 KB RAM, 2 MB flash, "),a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[e._v("输出引脚"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("li",[e._v("FMUv6：尚未完成，最终命名为 TBD，变种 6s (STM32H7, 400 MHz, 2 MB RAM,  2 MB flash) 和变种 6i (i.MX RT1050, 600 MHz, 512 KB RAM, 外部 flash)")])]),e._v(" "),a("h2",{attrs:{id:"main-io-function-breakdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-io-function-breakdown"}},[e._v("#")]),e._v(" Main/IO Function Breakdown")]),e._v(" "),a("p",[e._v("The diagram below shows the division of bus and functional responsibilities between the FMU and I/O boards in a Pixhawk-series flight controller (the boards are incorporated into a single physical module).")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1165),alt:"PX4 Main/IO Functional Breakdown"}})]),e._v(" "),a("p",[e._v("Some Pixhawk-series controllers are built without the I/O board in order to reduce space or complexity, or to better address certain board use-cases.")]),e._v(" "),a("p",[e._v("The I/O board is disabled by setting parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_USE_IO"}},[e._v("SYS_USE_IO=0")]),e._v(". When the I/O board is disabled:")],1),e._v(" "),a("ul",[a("li",[e._v('The MAIN mixer file is loaded into the FMU (so the "MAIN" outputs listed in the '),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[e._v("Airframe Reference")]),e._v(" appear on the port labeled AUX). The AUX mixer file isn't loaded, so outputs defined in this file are not used.")],1),e._v(" "),a("li",[e._v("RC input goes directly to the FMU rather than via the IO board.")])]),e._v(" "),a("p",[e._v("Flight controllers without an I/O board have "),a("code",[e._v("MAIN")]),e._v(" ports, but they "),a("em",[e._v("do not")]),e._v(" have "),a("code",[e._v("AUX")]),e._v(" ports. Consequently they can only be used in "),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[e._v("airframes")]),e._v(" that do not use "),a("code",[e._v("AUX")]),e._v(" ports, or that only use them for non-essential purposes (e.g. RC passthrough). They can be used for most multicopters and "),a("em",[e._v("fully")]),e._v(" autonomous vehicles (without a safety pilot using RC control), as these typically only use "),a("code",[e._v("MAIN")]),e._v(" ports for motors/essential controls.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("Flight controllers without an I/O board cannot be used in "),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[e._v("airframes")]),e._v(" that map any "),a("code",[e._v("AUX")]),e._v(" ports to essential flight controls or motors (as they have no "),a("code",[e._v("AUX")]),e._v(" ports).")],1)]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v('Manufacturer flight controller variants without an I/O board are often named as a "diminutive" of a version that includes the I/O board: e.g. '),a("em",[e._v("Pixhawk 4")]),e._v(" "),a("strong",[e._v("Mini")]),e._v("_, "),a("em",[e._v("CUAV v5 "),a("strong",[e._v("nano")])]),e._v(".")])]),e._v(" "),a("p",[e._v("Most PX4 PWM outputs are mapped to either "),a("code",[e._v("MAIN")]),e._v(" or "),a("code",[e._v("AUX")]),e._v(" ports in mixers. A few specific cases, including camera triggering and Dshot ESCs, are directly mapped to the FMU pins (i.e. they will output to "),a("em",[e._v("either")]),e._v(" "),a("code",[e._v("MAIN")]),e._v(" or "),a("code",[e._v("AUX")]),e._v(", depending on whether or not the flight controller has an I/O board).")])])}),[],!1,null,null,null);t.default=o.exports}}]);