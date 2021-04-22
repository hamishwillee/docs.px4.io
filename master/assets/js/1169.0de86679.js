(window.webpackJsonp=window.webpackJsonp||[]).push([[1169],{2413:function(t,e,a){"use strict";a.r(e);var r=a(18),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"穿越机设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#穿越机设置"}},[t._v("#")]),t._v(" 穿越机设置")]),t._v(" "),a("p",[t._v("本页面描述了：如何设置和配置一台穿越机来获取良好的性能（尤其对于特技模式）")]),t._v(" "),a("p",[t._v("请注意穿越机是经过特殊设计的动力强劲的快速飞行器。 你应该是有一定经验的使用者，或者让有经验的使用者帮助你。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("这里所述的许多知识可以用来改善其他类型多旋翼飞行器的飞行性能。")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("穿越机通常会少一些传感器（比如：GPS）。 因此，他的保护性选项有所缺失。")])]),t._v(" "),a("h2",{attrs:{id:"构建选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建选项"}},[t._v("#")]),t._v(" 构建选项")]),t._v(" "),a("p",[t._v("穿越机通常会少一些传感器。")]),t._v(" "),a("p",[t._v("最小配置是只使用陀螺仪和加速度计。")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("如果板载自带了磁罗盘，不应该使用他（小穿越机尤其容易受到较强的电磁干扰）。")])]),t._v(" "),a("p",[t._v("穿越机通常没有GPS，因为它会增加重量且再发生撞击时候更容易被损坏（一个GPS+外部磁罗盘需要被放置在GPS杆上来避免大电流对磁罗盘的影响，因此也就意味着它更容易被损坏）。")]),t._v(" "),a("p",[t._v("但是增加GPS也有一些好处，尤其是对于初学者。")]),t._v(" "),a("ul",[a("li",[t._v("你可以让飞机进入定位状态，飞行器将会待在一个地方。 当你失去方向或者需要刹车时候，这会是有用的。 它通常也可以被用来安全降落。")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("Return mode")]),t._v(" can be used, either on a switch or as RC loss/low battery failsafe.")],1),t._v(" "),a("li",[t._v("当发生事故时，你将有飞机最后的位置，方便寻找飞机。")]),t._v(" "),a("li",[t._v("飞行记录将包含飞行路线追踪，这意味着你可以进行航行回顾（3D 模式）。 这可以帮助你改善特技飞行技巧。")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("在有挑战性的特技精巧操作中，GPS会在短时间内失效。 If you switch into "),a("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("position mode")]),t._v(" during that time, "),a("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[t._v("altitude mode")]),t._v(" will be used instead until the position becomes valid again.")],1)]),t._v(" "),a("h2",{attrs:{id:"硬件安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件安装"}},[t._v("#")]),t._v(" 硬件安装")]),t._v(" "),a("p",[t._v("以下各段叙述了在构建穿越机时的几个重要问题。 如果你需要完整的构建指南，你可以参考 "),a("RouterLink",{attrs:{to:"/zh/frames_multicopter/qav_r_5_kiss_esc_racer.html"}},[t._v('QAV-R 5"KISS ESC Racer')]),t._v(" 构建日志。")],1),t._v(" "),a("h3",{attrs:{id:"振动设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#振动设置"}},[t._v("#")]),t._v(" 振动设置")]),t._v(" "),a("p",[t._v("有各种安装方法来减少振动。 例如，飞行控制器可以安装震动抑制泡沫，或者使用 "),a("RouterLink",{attrs:{to:"/zh/frames_multicopter/qav_r_5_kiss_esc_racer.html#mounting"}},[t._v("O-圆环")]),t._v("。")],1),t._v(" "),a("p",[t._v("虽然没有单一最好的方法，但如果您使用高质量的组件，您会遇到更少的振动问题。 例如在 "),a("RouterLink",{attrs:{to:"/zh/frames_multicopter/qav_r_5_kiss_esc_racer.html"}},[t._v('QAV-R 5" 中使用的 KISS ESC 穿越机')]),t._v("。")],1),t._v(" "),a("p",[t._v("确保您使用调平衡过的桨叶。")]),t._v(" "),a("h3",{attrs:{id:"重心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重心"}},[t._v("#")]),t._v(" 重心")]),t._v(" "),a("p",[t._v("确保重心尽可能靠近推力中心。 左右平衡通常不是问题，但前后平衡可能是一个问题。 您可以移动电池直到重心配置正确后再机架上标记它，这样您就可以始终正确放置电池。")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("虽然积分项可以解决不平衡的安装，但是一个自定义的混控器可以处理的更好。 然而，最好还是将不平衡问题在飞行器安装阶段解决掉。")])]),t._v(" "),a("h3",{attrs:{id:"电机顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电机顺序"}},[t._v("#")]),t._v(" 电机顺序")]),t._v(" "),a("p",[t._v("如果您计划使用一个四合一的 ESC, 例如 "),a("a",{attrs:{href:"http://www.hobbywing.com/goods.php?id=588",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbywing XRotor Micro 40A 4in1"),a("OutboundLink")],1),t._v(", 你会注意到它使用了不同于PX4使用的电机安装顺序。 PX4 允许您通过 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MOT_ORDERING"}},[t._v("MOT_ORDERING")]),t._v(" 参数更改飞控固件中的电机顺序。 您通常可以选择 Betaflight/Cleanflight的电机安装顺序，它是在四合一电调中的常用顺序。")],1),t._v(" "),a("h2",{attrs:{id:"软件设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软件设置"}},[t._v("#")]),t._v(" 软件设置")]),t._v(" "),a("p",[t._v("After having built the racer, you will need to configure the software.")]),t._v(" "),a("p",[t._v("Go through the "),a("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("Basic Configuration Guide")]),t._v(". In particular, set the "),a("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("Airframe")]),t._v(" that most closely matches your frame (typically you will choose the "),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter_quadrotor_x_generic_250_racer"}},[t._v("Generic 250 Racer")]),t._v(" airframe, which sets some racer-specific parameters by default).")],1),t._v(" "),a("p",[t._v("These parameters are important:")]),t._v(" "),a("ul",[a("li",[t._v("Enable One-Shot (set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_RATE"}},[t._v("PWM_RATE")]),t._v(" to 0) or DShot ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#DSHOT_CONFIG"}},[t._v("DSHOT_CONFIG")]),t._v(").")],1),t._v(" "),a("li",[t._v("设置手动/稳定模式的最大滚动、pitch-和 yaw 速率为 所希望： "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ROLLRATE_MAX"}},[t._v("MC_ROLLRATE_MAX")]),t._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_PITCHRATE_MAX"}},[t._v("MC_PITCHRATE_MAX")]),t._v(" 和 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_YAWRATE_MAX"}},[t._v("MC_YAWRATE_MAX")]),t._v(" 最大倾斜角度是用 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_MAN_TILT_MAX"}},[t._v("MPC_MAN_TILT_MAX")]),t._v(" 配置的。")],1),t._v(" "),a("li",[t._v("最小推力 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_MANTHR_MIN"}},[t._v("MPC_MANTHR_MIN")]),t._v(" 应该设置为 0。")],1)]),t._v(" "),a("h3",{attrs:{id:"估计器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#估计器"}},[t._v("#")]),t._v(" 估计器")]),t._v(" "),a("p",[t._v("If you use a GPS you can skip this section and use the default estimator. Otherwise you should switch to the Q attitude estimator, which works without a magnetometer or barometer.")]),t._v(" "),a("p",[t._v("To select it, set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[t._v("SYS_MC_EST_GROUP")]),t._v(" to 1, and change the following parameters:")],1),t._v(" "),a("ul",[a("li",[t._v("如果系统没有磁罗盘，设置 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_HAS_MAG"}},[t._v("SYS_HAS_MAG")]),t._v(" 至 0。")],1),t._v(" "),a("li",[t._v("如果系统没有气压计，设置 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_HAS_BARO"}},[t._v("SYS_HAS_BARO")]),t._v(" 到 0。")],1),t._v(" "),a("li",[t._v("Configure the Q estimator: set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#ATT_ACC_COMP"}},[t._v("ATT_ACC_COMP")]),t._v(" to 0, "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#ATT_W_ACC"}},[t._v("ATT_W_ACC")]),t._v(" to 0.4 and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#ATT_W_GYRO_BIAS"}},[t._v("ATT_W_GYRO_BIAS")]),t._v(" to 0. 如果您愿意，您可以稍后调整这些。")],1)]),t._v(" "),a("h3",{attrs:{id:"故障保护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#故障保护"}},[t._v("#")]),t._v(" 故障保护")]),t._v(" "),a("p",[t._v("Configure "),a("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[t._v("RC loss and low battery failsafe")]),t._v(". If you do not use a GPS, set the failsafe to "),a("strong",[t._v("Lockdown")]),t._v(", which turns off the motors. Test RC loss on the bench without props attached by turning off the remote when the vehicle is armed.")],1),t._v(" "),a("p",[t._v("Make sure to assign a "),a("RouterLink",{attrs:{to:"/zh/config/safety.html#kill_switch"}},[t._v("kill switch")]),t._v(" or an "),a("RouterLink",{attrs:{to:"/zh/config/safety.html#arming_switch"}},[t._v("arming switch")]),t._v(". Test it and train to use it!")],1),t._v(" "),a("h3",{attrs:{id:"px4-调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-调试"}},[t._v("#")]),t._v(" PX4 调试")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Make sure to calibrate the ESCs before doing any tuning.")])]),t._v(" "),a("p",[t._v("At this point you should be ready for a first test flight.")]),t._v(" "),a("p",[t._v("Assuming the vehicle is able to fly using the default settings, we then do a first pass of "),a("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter_basic.html"}},[t._v("Basic MC PID tuning")]),t._v(". The vehicle needs to be "),a("strong",[t._v("undertuned")]),t._v(" (the "),a("strong",[t._v("P")]),t._v(" and "),a("strong",[t._v("D")]),t._v(" gains should be set too low), such that there are no oscillations from the controller that could be interpreted as noise (the default gains might be good enough). This is important for the "),a("a",{attrs:{href:"#filters"}},[t._v("filter")]),t._v(" tuning (there will be a second PID tuning round later).")],1),t._v(" "),a("h3",{attrs:{id:"控制延迟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制延迟"}},[t._v("#")]),t._v(" 控制延迟")]),t._v(" "),a("p",[a("em",[t._v("控制延迟")]),t._v(" 是从飞机受到物理干扰出到电机做出相应反应的延迟。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("It is "),a("em",[t._v("crucial")]),t._v(" to reduce the control latency as much as possible! A lower latency allows you to increase the rate "),a("strong",[t._v("P")]),t._v(" gains, which means better flight performance. Even one millisecond added to the latency makes a difference.")])]),t._v(" "),a("p",[t._v("这些因素影响到延迟：")]),t._v(" "),a("ul",[a("li",[t._v("软机架或软振动隔离装置会增加延迟(它们充当了滤波器)。")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config_mc/filter_tuning.html"}},[t._v("Low-pass filters")]),t._v(" in software and on the sensor chip trade off increased latency for improved noise filtering.")],1),t._v(" "),a("li",[t._v("PX4 软件内部：传感器信号需要从驱动程序中读取，然后通过控制器传递到输出驱动器。")]),t._v(" "),a("li",[t._v("IO chip (MAINpins) 添加了大约5.4ms的延迟相对于使用 AUX pins的延迟时间(这不适用于 "),a("em",[t._v("Pixracer")]),t._v(" 或 "),a("em",[t._v("Omnibus F4")]),t._v(", 但适用于Pixhawk)。 要避免IO 延迟，请禁用 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_USE_IO"}},[t._v("SYS_USE_IO")]),t._v(" 并将电机连接到 AUX 引脚。")],1),t._v(" "),a("li",[t._v("PWM output signal: enable One-Shot to reduce latency ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_RATE"}},[t._v("PWM_RATE")]),t._v("=0).")],1)]),t._v(" "),a("h3",{attrs:{id:"filter-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter-tuning"}},[t._v("#")]),t._v(" Filter Tuning")]),t._v(" "),a("p",[t._v("Filters trade off control latency and noise filtering, both of which impact performance. For information see: "),a("RouterLink",{attrs:{to:"/zh/config_mc/filter_tuning.html"}},[t._v("Filter/Control Latency Tuning")])],1),t._v(" "),a("h3",{attrs:{id:"pid-调整-第二轮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pid-调整-第二轮"}},[t._v("#")]),t._v(" PID 调整 (第二轮)")]),t._v(" "),a("p",[t._v("Now do a second round of PID tuning, this time as tight as possible, and also tuning the thrust curve.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("You can use the approach described in "),a("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter_basic.html"}},[t._v("Basic MC PID tuning")]),t._v(" to tune the frame, but you will need to use the "),a("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html#thrust-curve"}},[t._v("Advanced Multicopter PID Tuning Guide (Advanced/Detailed)")]),t._v(" to understand how to tune the thrust curve.")],1),t._v(" "),a("h3",{attrs:{id:"飞行模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式"}},[t._v("#")]),t._v(" 飞行模式")]),t._v(" "),a("p",[t._v("After you have verified that the vehicle flies well at low and high throttle, you can enable "),a("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html#airmode"}},[t._v("airmode")]),t._v(" with the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_AIRMODE"}},[t._v("MC_AIRMODE")]),t._v(" parameter. This feature makes sure that the vehicle is still controllable and tracks the rate at low throttle.")],1),t._v(" "),a("p",[t._v("Happy flipping 😃")])])])}),[],!1,null,null,null);e.default=_.exports}}]);