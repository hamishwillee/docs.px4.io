(window.webpackJsonp=window.webpackJsonp||[]).push([[1180],{2527:function(e,s,t){"use strict";t.r(s);var a=t(18),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"uorb-消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uorb-消息"}},[e._v("#")]),e._v(" uORB 消息")]),e._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),t("p",[e._v("uORB 是一种异步 "),t("code",[e._v("publish()")]),e._v("/"),t("code",[e._v("subscribe()")]),e._v(" 的消息传递 API，用于进程或者线程间通信(IPC)。")]),e._v(" "),t("p",[e._v("查看 "),t("RouterLink",{attrs:{to:"/zh/apps/hello_sky.html"}},[e._v("教程")]),e._v(" 以了解如何在 C++ 中使用它。")],1),e._v(" "),t("p",[e._v("作为很多应用程序依赖的uORB，会在启动时自动启动。 它以 "),t("code",[e._v("uorb start</0 > 开头。 单元测试可以从 <code>uorb_tests")]),e._v(" 开始。")]),e._v(" "),t("h2",{attrs:{id:"添加新-topic-主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加新-topic-主题"}},[e._v("#")]),e._v(" 添加新 Topic（主题）")]),e._v(" "),t("p",[e._v("新的uORB</0>主题通过在主要的PX4/Firmware 存储库中添加，也能通过在out-of-tree</0>消息定义中添加。 有关添加树外 uORB 消息定义的信息，请参阅 "),t("RouterLink",{attrs:{to:"/zh/advanced/out_of_tree_modules.html#uorb_message_definitions"}},[e._v("本节")]),e._v("。")],1),e._v(" "),t("p",[e._v("若要添加新主题，需要在 "),t("code",[e._v("msg/")]),e._v(" 目录中创建一个新的 "),t("strong",[e._v(".msg")]),e._v(" 文件，并将文件名添加到 "),t("code",[e._v("msg/CMakeLists.txt")]),e._v(" 列表中。 由此，将自动生成所需的 C/C++ 代码。")]),e._v(" "),t("p",[e._v("查看支持类型的现有 "),t("code",[e._v("msg")]),e._v(" 文件。 消息还可以在其他消息中嵌套使用。")]),e._v(" "),t("p",[e._v("对于每个生成的 C/C + 结构，将添加一个字段 "),t("code",[e._v("uint64_t timestamp")]),e._v("。 此用于记录日志，因此请确保在发布时填充数据。")]),e._v(" "),t("p",[e._v("若要在代码中使用该主题，请包括头文件：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#include <uORB/topics/topic_name.h>\n")])])]),t("p",[e._v("通过在 "),t("code",[e._v(".msg")]),e._v(" 文件中添加如下内容的行，可以将一条消息定义用于多个独立主题：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# TOPICS mission offboard_mission onboard_mission\n")])])]),t("p",[e._v("然后在代码中，将它们用作主题 id: "),t("code",[e._v("ORB_ID(offboard_mission)")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[e._v("#")]),e._v(" 发布")]),e._v(" "),t("p",[e._v("发布主题可以在系统中的任何位置完成，包括中断上下文（由 "),t("code",[e._v("hrt_call")]),e._v(" API 调用的函数）。 但是，仅在中断上下文之外才能为主题做广播。 一个主题必须与以后发布的过程相同。")]),e._v(" "),t("h2",{attrs:{id:"主题列表和监听-listener"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主题列表和监听-listener"}},[e._v("#")]),e._v(" 主题列表和监听（Listener）")]),e._v(" "),t("p",[e._v("要列出所有主题，列出文件句柄：")]),e._v(" "),t("p",[e._v("要监听五条信息中的一个主题内容，运行监听器：")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" /obj\n")])])]),t("p",[e._v("输出主题内容如下：")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("listener sensor_accel "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n")])])]),t("p",[e._v("uorb top 命令实时显示每个主题的发布频率。")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("TOPIC: sensor_accel "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#3")]),e._v("\ntimestamp: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("84978861")]),e._v("\nintegral_dt: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4044")]),e._v("\nerror_count: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nx: -1\ny: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\nz: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\nx_integral: -0\ny_integral: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nz_integral: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\ntemperature: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("46")]),e._v("\nrange_m_s2: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("78")]),e._v("\nscaling: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n\nTOPIC: sensor_accel "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#4")]),e._v("\ntimestamp: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("85010833")]),e._v("\nintegral_dt: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3980")]),e._v("\nerror_count: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nx: -1\ny: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\nz: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\nx_integral: -0\ny_integral: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nz_integral: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\ntemperature: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("46")]),e._v("\nrange_m_s2: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("78")]),e._v("\nscaling: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("On NuttX-based systems (Pixhawk, Pixracer, etc) the "),t("code",[e._v("listener")]),e._v(" command can be called from within the "),t("em",[e._v("QGroundControl")]),e._v(" MAVLink Console to inspect the values of sensors and other topics. This is a powerful debugging tool because it can be used even when QGC is connected over a wireless link (e.g. when the vehicle is flying). For more information see: "),t("RouterLink",{attrs:{to:"/zh/debug/sensor_uorb_topic_debugging.html"}},[e._v("Sensor/Topic Debugging")]),e._v(".")],1)]),e._v(" "),t("h3",{attrs:{id:"uorb-top-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uorb-top-命令"}},[e._v("#")]),e._v(" uorb top 命令")]),e._v(" "),t("p",[e._v("The command "),t("code",[e._v("uorb top")]),e._v(" shows the publishing frequency of each topic in real-time:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("update: 1s, num topics: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("77")]),e._v("\nTOPIC NAME                        INST "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#SUB #MSG #LOST #QSIZE")]),e._v("\nactuator_armed                       "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nactuator_controls_0                  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1044")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nbattery_status                       "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("500")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2694")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\ncommander_state                      "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("98")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("89")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\ncontrol_state                        "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("433")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nekf2_innovations                     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("223")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nekf2_timestamps                      "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nestimator_status                     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("488")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nmc_att_ctrl_status                   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nsensor_accel                         "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nsensor_accel                         "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("249")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("43")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nsensor_baro                          "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("42")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nsensor_combined                      "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("636")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])]),t("p",[e._v("请确保不要为同一主题混合 "),t("code",[e._v("orb_advertise_multi")]),e._v(" 和 "),t("code",[e._v("orb_advertise")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"多实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多实例"}},[e._v("#")]),e._v(" 多实例")]),e._v(" "),t("p",[e._v("uORB provides a mechanism to publish multiple independent instances of the same topic through "),t("code",[e._v("orb_advertise_multi")]),e._v(". It will return an instance index to the publisher. A subscriber will then have to choose to which instance to subscribe to using "),t("code",[e._v("orb_subscribe_multi")]),e._v(" ("),t("code",[e._v("orb_subscribe")]),e._v(" subscribes to the first instance). Having multiple instances is useful for example if the system has several sensors of the same type.")]),e._v(" "),t("p",[e._v("下面解释了一些常见的陷阱和边界案例：")]),e._v(" "),t("p",[e._v("The full API is documented in "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/uORB/uORBManager.hpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/modules/uORB/uORBManager.hpp"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[t("a",{attrs:{id:"deprecation"}})]),e._v(" "),t("h2",{attrs:{id:"故障排除和常见的陷阱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#故障排除和常见的陷阱"}},[e._v("#")]),e._v(" 故障排除和常见的陷阱")]),e._v(" "),t("p",[e._v("As there are external tools using uORB messages from log files, such as "),t("a",{attrs:{href:"https://github.com/PX4/flight_review",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flight Review"),t("OutboundLink")],1),e._v(", certain aspects need to be considered when updating existing messages:")]),e._v(" "),t("ul",[t("li",[e._v("Changing existing fields or messages that external tools rely on is generally acceptable if there are good reasons for the update. In particular for breaking changes to "),t("em",[e._v("Flight Review")]),e._v(", "),t("em",[e._v("Flight Review")]),e._v(" must be updated before code is merged to "),t("code",[e._v("master")]),e._v(".")]),e._v(" "),t("li",[e._v("In order for external tools to reliably distinguish between two message versions, the following steps must be followed:\n"),t("ul",[t("li",[e._v("Removed or renamed messages must be added to the "),t("code",[e._v("deprecated_msgs")]),e._v(" list in "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/c5a6a60903455c3600f47e3c45ecaa48614559c8/msg/CMakeLists.txt#L189",target:"_blank",rel:"noopener noreferrer"}},[e._v("msg/CMakeLists.txt"),t("OutboundLink")],1),e._v(" and the "),t("strong",[e._v(".msg")]),e._v(" file needs to be deleted.")]),e._v(" "),t("li",[e._v("Removed or renamed fields must be commented and marked as deprecated. For example "),t("code",[e._v("uint8 quat_reset_counter")]),e._v(" would become "),t("code",[e._v("# DEPRECATED: uint8 quat_reset_counter")]),e._v(". This is to ensure that removed fields (or messages) are not re-added in future.")]),e._v(" "),t("li",[e._v("In case of a semantic change (e.g. the unit changes from degrees to radians), the field must be renamed as well and the previous one marked as deprecated as above.")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);