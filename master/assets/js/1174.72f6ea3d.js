(window.webpackJsonp=window.webpackJsonp||[]).push([[1174],{2518:function(s,e,t){"use strict";t.r(e);var a=t(18),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"uorb-消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uorb-消息"}},[s._v("#")]),s._v(" uORB 消息")]),s._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("uORB 是用于进程间通信的异步 "),t("code",[s._v("publish()")]),s._v("/"),t("code",[s._v("subscribe()")]),s._v(" 消息传递 API。")]),s._v(" "),t("p",[s._v("查看 "),t("RouterLink",{attrs:{to:"/zh/apps/hello_sky.html"}},[s._v("教程")]),s._v(" 以了解如何在 C++ 中使用它。")],1),s._v(" "),t("p",[s._v("uORB 会在启动时自动启动，因为许多应用程序都依赖于它。 它以 "),t("code",[s._v("uorb start</0 > 开头。 单元测试可以从 <code>uorb_tests")]),s._v(" 开始。")]),s._v(" "),t("h2",{attrs:{id:"添加新-topic-主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加新-topic-主题"}},[s._v("#")]),s._v(" 添加新 Topic（主题）")]),s._v(" "),t("p",[s._v("可以在主 PX4/Firmware 存储库中添加新的 uORB 主题，也可以在树外消息定义中添加。 有关添加树外 uORB 消息定义的信息，请参阅 "),t("RouterLink",{attrs:{to:"/zh/advanced/out_of_tree_modules.html#uorb_message_definitions"}},[s._v("本节")]),s._v("。")],1),s._v(" "),t("p",[s._v("若要添加新主题，需要在 "),t("code",[s._v("msg/")]),s._v(" 目录中创建一个新的 "),t("strong",[s._v(".msg")]),s._v(" 文件，并将文件名添加到 "),t("code",[s._v("msg/CMakeLists.txt")]),s._v(" 列表中。 由此，将自动生成所需的 C/C++ 代码。")]),s._v(" "),t("p",[s._v("查看支持类型的现有 "),t("code",[s._v("msg")]),s._v(" 文件。 消息还可以在其他消息中嵌套使用。")]),s._v(" "),t("p",[s._v("对于每个生成的 C/C + 结构，将添加一个字段 "),t("code",[s._v("uint64_t timestamp")]),s._v("。 此用于记录日志，因此请确保在发布时填充数据。")]),s._v(" "),t("p",[s._v("若要在代码中使用该主题，请包括头文件：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#include <uORB/topics/topic_name.h>\n")])])]),t("p",[s._v("通过在 "),t("code",[s._v(".msg")]),s._v(" 文件中添加如下内容的行，可以将一条消息定义用于多个独立主题：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# TOPICS mission offboard_mission onboard_mission\n")])])]),t("p",[s._v("然后在代码中，将它们用作主题 id: "),t("code",[s._v("ORB_ID(offboard_mission)")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[s._v("#")]),s._v(" 发布")]),s._v(" "),t("p",[s._v("发布主题可以在系统中的任何位置完成，包括中断上下文（由 "),t("code",[s._v("hrt_call")]),s._v(" API 调用的函数）。 但是，仅在中断上下文之外才能为主题做广播。 一个主题必须与以后发布的过程相同。")]),s._v(" "),t("h2",{attrs:{id:"主题列表和监听-listener"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主题列表和监听-listener"}},[s._v("#")]),s._v(" 主题列表和监听（Listener）")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("Note")]),s._v(" "),t("code",[s._v("listener")]),s._v(" 命令仅适用于 Pixracer (FMUv4) 和 Linux/OS X。")])]),s._v(" "),t("p",[s._v("要列出所有主题，列出文件句柄：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /obj\n")])])]),t("p",[s._v("要监听五条信息中的一个主题内容，运行监听器：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("listener sensor_accel "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])])]),t("p",[s._v("输出主题内容如下：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("TOPIC: sensor_accel "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3")]),s._v("\ntimestamp: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("84978861")]),s._v("\nintegral_dt: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4044")]),s._v("\nerror_count: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nx: -1\ny: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nz: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nx_integral: -0\ny_integral: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nz_integral: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ntemperature: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v("\nrange_m_s2: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),s._v("\nscaling: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nTOPIC: sensor_accel "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#4")]),s._v("\ntimestamp: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("85010833")]),s._v("\nintegral_dt: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3980")]),s._v("\nerror_count: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nx: -1\ny: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nz: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nx_integral: -0\ny_integral: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nz_integral: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ntemperature: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v("\nrange_m_s2: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),s._v("\nscaling: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("blockquote",[t("p",[t("strong",[s._v("Tip")]),s._v(" 在基于 NuttX 的系统上（如 Pixhawk， Pixracer等），监听器可以用 "),t("em",[s._v("QGroundControl")]),s._v(" 内部的 MAVLink 终端监视传感器的值和其他主题。 之所以是非常有用的调试工具是因为可以在 QGC 上通过无线连接（比如飞机在飞行过程中）。 有关详细信息，请参阅 "),t("RouterLink",{attrs:{to:"/zh/debug/sensor_uorb_topic_debugging.html"}},[s._v("传感器/主题调试 ")]),s._v("。")],1)]),s._v(" "),t("h3",{attrs:{id:"uorb-top-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uorb-top-命令"}},[s._v("#")]),s._v(" uorb top 命令")]),s._v(" "),t("p",[s._v("uorb top 命令实时显示每个主题的发布频率。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("update: 1s, num topics: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("77")]),s._v("\nTOPIC NAME                        INST "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SUB #MSG #LOST #QSIZE")]),s._v("\nactuator_armed                       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nactuator_controls_0                  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1044")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nbattery_status                       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2694")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\ncommander_state                      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("98")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("89")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\ncontrol_state                        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("433")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nekf2_innovations                     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("223")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nekf2_timestamps                      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nestimator_status                     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("488")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nmc_att_ctrl_status                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsensor_accel                         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsensor_accel                         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("249")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("43")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsensor_baro                          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsensor_combined                      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("636")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),t("p",[s._v("列分别是：主题名字，多实例索引值，订阅者数量，发布频率（Hz），每秒丢失的信息数（对所有订阅者）和队列大小。")]),s._v(" "),t("h2",{attrs:{id:"多实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多实例"}},[s._v("#")]),s._v(" 多实例")]),s._v(" "),t("p",[s._v("uORB 提供了一种通过 "),t("code",[s._v("orb_advertise_multi")]),s._v(" 发布同一主题的多个独立实例的机制。 它将实例索引返回到发布者。 然后, 订阅者必须选择订阅以使用 "),t("code",[s._v("orb_subscribe_multi")]),s._v("（"),t("code",[s._v("orb_subscribe")]),s._v(" 订阅第一个 实例）。 例如，如果系统具有多个相同类型的传感器, 则具有多个实例非常有用。")]),s._v(" "),t("p",[s._v("请确保不要为同一主题混合 "),t("code",[s._v("orb_advertise_multi")]),s._v(" 和 "),t("code",[s._v("orb_advertise")]),s._v("。")]),s._v(" "),t("p",[s._v("完整的 API 记录在 "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/src/modules/uORB/uORBManager.hpp",target:"_blank",rel:"noopener noreferrer"}},[s._v("src/modules/uORB/uORBManager.hpp"),t("OutboundLink")],1),s._v(" 中。")]),s._v(" "),t("p",[t("a",{attrs:{id:"deprecation"}})]),s._v(" "),t("h2",{attrs:{id:"故障排除和常见的陷阱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#故障排除和常见的陷阱"}},[s._v("#")]),s._v(" 故障排除和常见的陷阱")]),s._v(" "),t("p",[s._v("下面解释了一些常见的陷阱和边界案例：")]),s._v(" "),t("ul",[t("li",[s._v("Changing existing fields or messages that external tools rely on is generally acceptable if there are good reasons for the update. In particular for breaking changes to "),t("em",[s._v("Flight Review")]),s._v(", "),t("em",[s._v("Flight Review")]),s._v(" must be updated before code is merged to "),t("code",[s._v("master")]),s._v(".")]),s._v(" "),t("li",[s._v("In order for external tools to reliably distinguish between two message versions, the following steps must be followed:\n"),t("ul",[t("li",[s._v("Removed or renamed messages must be added to the "),t("code",[s._v("deprecated_msgs")]),s._v(" list in "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/CMakeLists.txt#L157",target:"_blank",rel:"noopener noreferrer"}},[s._v("msg/CMakeLists.txt"),t("OutboundLink")],1),s._v(" and the "),t("strong",[s._v(".msg")]),s._v(" file needs to be deleted.")]),s._v(" "),t("li",[s._v("Removed or renamed fields must be commented and marked as deprecated. For example "),t("code",[s._v("uint8 quat_reset_counter")]),s._v(" would become "),t("code",[s._v("# DEPRECATED: uint8 quat_reset_counter")]),s._v(". This is to ensure that removed fields (or messages) are not re-added in future.")]),s._v(" "),t("li",[s._v("In case of a semantic change (e.g. the unit changes from degrees to radians), the field must be renamed as well and the previous one marked as deprecated as above.")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);