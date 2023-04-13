(window.webpackJsonp=window.webpackJsonp||[]).push([[1820],{3464:function(s,t,e){"use strict";e.r(t);var a=e(19),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"uorb-消息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uorb-消息"}},[s._v("#")]),s._v(" uORB 消息")]),s._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),e("p",[s._v("uORB 是一种异步 "),e("code",[s._v("publish()")]),s._v("/"),e("code",[s._v("subscribe()")]),s._v(" 的消息传递 API，用于进程或者线程间通信。")]),s._v(" "),e("p",[s._v("查看"),e("RouterLink",{attrs:{to:"/zh/modules/hello_sky.html"}},[s._v("教程")]),s._v("以了解如何在 C++ 中使用它。")],1),s._v(" "),e("p",[s._v("作为很多应用程序依赖的uORB，很早便会在启动过程中自动启动。 使用命令 "),e("code",[s._v("uorb start")]),s._v("启动。 单元测试可以使用"),e("code",[s._v("uorb_tests")]),s._v("启动。")]),s._v(" "),e("h2",{attrs:{id:"添加新-topic-主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加新-topic-主题"}},[s._v("#")]),s._v(" 添加新 Topic（主题）")]),s._v(" "),e("p",[s._v("新的uORB主题通过在主PX4/Firmware 存储库中添加，也能通过在out-of-tree消息定义中添加。 有关添加树外 uORB 消息定义的信息，请参阅"),e("RouterLink",{attrs:{to:"/zh/advanced/out_of_tree_modules.html#out-of-tree-uorb-message-definitions"}},[s._v("本节")]),s._v("。")],1),s._v(" "),e("p",[s._v("若要添加新主题，需要在 "),e("code",[s._v("msg")]),s._v(" 目录中创建一个新的 "),e("strong",[s._v(".msg")]),s._v(" 文件，并将文件名添加到"),e("code",[s._v("msg/CMakeLists.txt")]),s._v(" 列表中。 由此，将自动生成所需的 C/C++ 代码。")]),s._v(" "),e("p",[s._v("查看支持类型的现有 "),e("code",[s._v("msg")]),s._v(" 文件。 消息还可以在其他消息中嵌套使用。")]),s._v(" "),e("p",[s._v("对于每个生成的 C/C + 结构体，都将添加一个 "),e("code",[s._v("uint64_t timestamp")]),s._v("字段。 此用于记录日志，因此请确保在发布时填充数据。")]),s._v(" "),e("p",[s._v("若要在代码中使用该主题，请包括头文件：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#include <uORB/topics/topic_name.h>\n")])])]),e("p",[s._v("通过在 "),e("code",[s._v(".msg")]),s._v(" 文件中添加如下内容的行，可以将一条消息定义用于多个独立主题：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# TOPICS mission offboard_mission onboard_mission\n")])])]),e("p",[s._v("然后在代码中，将它们用作主题 id: "),e("code",[s._v("ORB_ID(offboard_mission)")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[s._v("#")]),s._v(" 发布")]),s._v(" "),e("p",[s._v("发布主题可以在系统中的任何位置完成，包括中断上下文（由 "),e("code",[s._v("hrt_call")]),s._v(" API 调用的函数）。 However, the topic needs to be advertised and published outside of an interrupt context (at least once) before it can be published in an interrupt context.")]),s._v(" "),e("h2",{attrs:{id:"主题列表和监听-listener"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主题列表和监听-listener"}},[s._v("#")]),s._v(" 主题列表和监听（Listener）")]),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("注解")]),s._v(" "),e("p",[e("code",[s._v("listener")]),s._v(" 命令只存在于Pixracer (FMUv4) 和Linux / OS X中.")])]),s._v(" "),e("p",[s._v("列出所有主题，列出文件句柄：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /obj\n")])])]),e("p",[s._v("要监听一个主题内容中五条信息，运行监听器：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("listener sensor_accel "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])])]),e("p",[s._v("输出是n次主题正文：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("TOPIC: sensor_accel "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3")]),s._v("\ntimestamp: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("84978861")]),s._v("\nintegral_dt: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4044")]),s._v("\nerror_count: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nx: -1\ny: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nz: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nx_integral: -0\ny_integral: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nz_integral: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ntemperature: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v("\nrange_m_s2: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),s._v("\nscaling: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nTOPIC: sensor_accel "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#4")]),s._v("\ntimestamp: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("85010833")]),s._v("\nintegral_dt: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3980")]),s._v("\nerror_count: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nx: -1\ny: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nz: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nx_integral: -0\ny_integral: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nz_integral: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ntemperature: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v("\nrange_m_s2: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),s._v("\nscaling: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("在 NuttX上的系统 (Pixhawk, Pixracer, 等) "),e("code",[s._v("侦听器")]),s._v(" 命令可以从 "),e("em",[s._v("QGroundControl")]),s._v(" MAVLink 控制台调用来查看传感器和其他主题的值。 这是一个非常实用的调试工具，应为它可以在QGC通过无线连接的时候使用（例如，当机体在飞行中）。 有关详细信息，请参阅 "),e("RouterLink",{attrs:{to:"/zh/debug/sensor_uorb_topic_debugging.html"}},[s._v("传感器/主题调试 ")]),s._v("。")],1)]),s._v(" "),e("h3",{attrs:{id:"uorb-top-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uorb-top-命令"}},[s._v("#")]),s._v(" uorb top 命令")]),s._v(" "),e("p",[s._v("命令 "),e("code",[s._v("uorb top")]),s._v(" 实时显示每个主题的发布频率：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("update: 1s, num topics: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("77")]),s._v("\nTOPIC NAME                        INST "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SUB #MSG #LOST #QSIZE")]),s._v("\nactuator_armed                       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nactuator_controls_0                  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1044")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nbattery_status                       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2694")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\ncommander_state                      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("98")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("89")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\ncontrol_state                        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("433")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nekf2_innovations                     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("223")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nekf2_timestamps                      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nestimator_status                     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("488")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nmc_att_ctrl_status                   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsensor_accel                         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsensor_accel                         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("249")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("43")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsensor_baro                          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsensor_combined                      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("636")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),e("p",[s._v("列分别是：主题名字，多实例索引值，订阅者数量，发布频率（Hz），每秒丢失的信息数（对所有订阅者）和队列大小。")]),s._v(" "),e("h2",{attrs:{id:"多实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多实例"}},[s._v("#")]),s._v(" 多实例")]),s._v(" "),e("p",[s._v("uORB 提供了一种通过 "),e("code",[s._v("orb_advertise_multi")]),s._v(" 发布同一主题的多个独立实例的机制。 它将返回实例索引到发布器。 然后, 订阅者必须通过"),e("code",[s._v("orb_subscribe_multi")]),s._v("选择订阅哪个实例（"),e("code",[s._v("orb_subscribe")]),s._v(" 将订阅第一个实例）。 多实例是很有用的，例如，如果系统有几个同类型的传感器。")]),s._v(" "),e("p",[s._v("确保不要再同一个主题上弄混 "),e("code",[s._v("orb_advertise_multi")]),s._v(" 和"),e("code",[s._v("orb_advertise")])]),s._v(" "),e("p",[s._v("The full API is documented in "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/platforms/common/uORB/uORBManager.hpp",target:"_blank",rel:"noopener noreferrer"}},[s._v("platforms/common/uORB/uORBManager.hpp"),e("OutboundLink")],1),s._v(".")]),s._v(" "),e("p",[e("a",{attrs:{id:"deprecation"}})]),s._v(" "),e("h2",{attrs:{id:"消息-字段弃用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#消息-字段弃用"}},[s._v("#")]),s._v(" 消息/字段弃用")]),s._v(" "),e("p",[s._v("由于有外部工具使用日志文件中的 uORB 消息，例如 "),e("a",{attrs:{href:"https://github.com/PX4/flight_review",target:"_blank",rel:"noopener noreferrer"}},[s._v("飞行评论"),e("OutboundLink")],1),s._v("， 在更新现有信息时需要考虑到某些方面：")]),s._v(" "),e("ul",[e("li",[s._v("如果有充分理由进行更新，更改外部工具所依赖的现有字段或信息通常是可以接受的。 尤其是对于断开对 "),e("em",[s._v("航班评论")]),s._v("的更改， "),e("em",[s._v("飞行审查")]),s._v(" 必须先更新才能将代码合并到 "),e("code",[s._v("主")]),s._v("。")]),s._v(" "),e("li",[s._v("为了使外部工具能够可靠地区分两个消息版本，必须遵循以下步骤：\n"),e("ul",[e("li",[s._v("已删除或重命名的消息必须添加到 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/c5a6a60903455c3600f47e3c45ecaa48614559c8/msg/CMakeLists.txt#L189",target:"_blank",rel:"noopener noreferrer"}},[s._v("msg/CMakeLists.txt"),e("OutboundLink")],1),s._v(" 中的 "),e("code",[s._v("deprecated_msgs")]),s._v("  同时， "),e("strong",[s._v(".msg")]),s._v(" 文件需要删除。")]),s._v(" "),e("li",[s._v("Removed or renamed fields must be commented and marked as deprecated. For example "),e("code",[s._v("uint8 quat_reset_counter")]),s._v(" would become "),e("code",[s._v("# DEPRECATED: uint8 quat_reset_counter")]),s._v(". This is to ensure that removed fields (or messages) are not re-added in future.")]),s._v(" "),e("li",[s._v("In case of a semantic change (e.g. the unit changes from degrees to radians), the field must be renamed as well and the previous one marked as deprecated as above.")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);