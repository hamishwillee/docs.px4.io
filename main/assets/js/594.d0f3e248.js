(window.webpackJsonp=window.webpackJsonp||[]).push([[594],{3254:function(t,r,e){"use strict";e.r(r);var a=e(19),o=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"控制分配-混控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制分配-混控"}},[t._v("#")]),t._v(" 控制分配 (混控)")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("控制分配取代了在 PX4 v1.13 中使用的旧的混控方法。 PX4 v1.13 文档见： "),a("a",{attrs:{href:"https://docs.px4.io/v1.13/en/concept/mixing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("混控& 驱动器"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://docs.px4.io/v1.13/en/concept/geometry_files.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("构型文件"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://docs.px4.io/v1.13/en/dev_airframes/adding_a_new_frame.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("添加一个新的机型配置"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("PX4从核心控制器获取所需的扭矩和推力指令，并将它们转换为控制电机或作动器的驱动指令。")]),t._v(" "),a("p",[t._v("指令间的转换取决于飞行器的物理构型。 例如，给“向右转”需要给出一个扭矩指令：")]),t._v(" "),a("ul",[a("li",[t._v("对于每个副翼都有一个舵机的飞机来说，该指令将会控制一个舵机向高处偏转，另一个向低处偏转。")]),t._v(" "),a("li",[t._v("多旋翼将会通过改变所有电机的转速来向右偏航。")])]),t._v(" "),a("p",[t._v("PX4将这个转换逻辑区分开，这个逻辑被称为从姿态/角速率控制器输出的“混控”。 这样可以确保核心控制器不需要对每个机型构型进行特殊处理，可以大大提高复用性。")]),t._v(" "),a("p",[t._v("此外，PX4还将输出函数映射至指定的硬件输出。 这也意味着任何电机或舵机可以分配给几乎任何物理输出。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(636),alt:"混控概览"}})]),t._v(" "),a("h2",{attrs:{id:"作动器控制流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作动器控制流程"}},[t._v("#")]),t._v(" 作动器控制流程")]),t._v(" "),a("p",[t._v("模块和uORB话题混控流程概览（点击全屏查看）：\n"),t._v(" "),a("img",{attrs:{src:e(637),alt:"Pipeline Overview"}})]),t._v(" "),a("p",[t._v("备注：")]),t._v(" "),a("ul",[a("li",[t._v("角速率控制器输出力矩和推力设定值")]),t._v(" "),a("li",[a("code",[t._v("control_allocator")]),t._v(" 模块：\n"),a("ul",[a("li",[t._v("根据配置参数处理不同飞行器构型")]),t._v(" "),a("li",[t._v("进行混控计算")]),t._v(" "),a("li",[t._v("处理电机失效")]),t._v(" "),a("li",[t._v("发布电机和作动器控制信号")]),t._v(" "),a("li",[t._v("单独发布舵机配平，以便在 "),a("RouterLink",{attrs:{to:"/zh/config/actuators.html#actuator-testing"}},[t._v("测试驱动器")]),t._v(" (使用测试滑块)时将它们添加为偏移。")],1)])]),t._v(" "),a("li",[t._v("输出驱动：\n"),a("ul",[a("li",[t._v("处理硬件初始化和更新")]),t._v(" "),a("li",[t._v("使用共享库 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/mixer_module/",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/libs/mixer_module"),a("OutboundLink")],1),t._v("。 驱动程序定义了参数前缀，例如 "),a("code",[t._v("PWM_MAIN")]),t._v(" 被库用于配置。 其主要任务是从输入话题中选择，并根据用户设置的 "),a("code",[t._v("<param_prefix>_FUNCx")]),t._v(" 参数值将正确的数据分配给输出。 例如， "),a("code",[t._v("PWM_MAIN_FUNC3")]),t._v(" 已设置为 "),a("strong",[t._v("Motor 2")]),t._v("，第三个输出设置为来自 "),a("code",[t._v("actuator_motors")]),t._v("的第二个电机。")]),t._v(" "),a("li",[t._v("输出函数定义于 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/mixer_module/output_functions.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/lib/mixer_module/output_functions.yaml"),a("OutboundLink")],1),t._v("。")])])]),t._v(" "),a("li",[t._v("如果想要通过MAVLink控制其输出，请将相关的输出函数设置为 "),a("strong",[t._v("Offboard Actor Set x")]),t._v("，然后发送 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_ACTUATOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_SET_ACTUATOR"),a("OutboundLink")],1),t._v(" MAVLink指令。")])]),t._v(" "),a("h2",{attrs:{id:"添加新构型或输出函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加新构型或输出函数"}},[t._v("#")]),t._v(" 添加新构型或输出函数")]),t._v(" "),a("p",[t._v("请参阅该"),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/commit/5cdb6fbd8e1352dcb94bd58918da405f8ff930d7",target:"_blank",rel:"noopener noreferrer"}},[t._v("提交"),a("OutboundLink")],1),t._v(" 以了解如何添加新构型。 当 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CA_AIRFRAME"}},[t._v("CA_AIRAME")]),t._v(" 设置为新构型时，QGC 界面将自动显示正确的配置界面。")],1),t._v(" "),a("p",[t._v("该"),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/commit/a65533b46986e32254b64b7c92469afb8178e370",target:"_blank",rel:"noopener noreferrer"}},[t._v("提交"),a("OutboundLink")],1),t._v(" 显示了如何添加新的输出函数。 任何uORB话题都可以被订阅并分配到一个函数。")]),t._v(" "),a("p",[t._v("请注意，控制分配的参数是在 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/control_allocator/module.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/modules/control_allocator/module.yaml"),a("OutboundLink")],1),t._v("中定义的。 此文件的架构参见 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/validation/module_schema.yaml#L440=",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v(" （典型的，搜索关键字 "),a("code",[t._v("mixer:")]),t._v("）")]),t._v(" "),a("h2",{attrs:{id:"设置默认机型构型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置默认机型构型"}},[t._v("#")]),t._v(" 设置默认机型构型")]),t._v(" "),a("p",[t._v("当 "),a("RouterLink",{attrs:{to:"/zh/dev_airframes/adding_a_new_frame.html"}},[t._v("添加一个新的机型配置")]),t._v("，需要设置合适的 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CA_AIRFRAME"}},[t._v("CA_AIRAME")]),t._v(" 和其他默认的构型混控参数。")],1),t._v(" "),a("p",[t._v("例如，可以参见机型配置文件 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d/airframes/13200_generic_vtol_tailsitter",target:"_blank",rel:"noopener noreferrer"}},[t._v("13200_generic_vtol_tailsitter"),a("OutboundLink")],1),t._v(" 。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("...\nparam set-default CA_AIRFRAME 4\nparam set-default CA_ROTOR_COUNT 2\nparam set-default CA_ROTOR0_KM -0.05\nparam set-default CA_ROTOR0_PY 0.2\n...\n")])])]),a("h2",{attrs:{id:"设置构型和输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置构型和输出"}},[t._v("#")]),t._v(" 设置构型和输出")]),t._v(" "),a("p",[t._v("当通过 QGroundControl 中的 "),a("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("Basic Configuration > Airframe")]),t._v(" 选择机型时，飞行器的几何构型和默认参数将为默认参数（来自frame configuration文件）。")],1),t._v(" "),a("p",[t._v("特定机型的几何构型参数和飞控硬件输出映射可通过 QGroundControl 中的 "),a("strong",[t._v("Actuators")]),t._v(" 设置页面： "),a("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[t._v("Basic Configuration > 精Actuator Configuration and Testing")]),t._v(" 来设置。")],1)])}),[],!1,null,null,null);r.default=o.exports},636:function(t,r,e){t.exports=e.p+"assets/img/mixing_overview.c98463d4.png"},637:function(t,r,e){t.exports=e.p+"assets/img/control_allocation_pipeline.445b582b.png"}}]);