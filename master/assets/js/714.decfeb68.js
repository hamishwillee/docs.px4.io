(window.webpackJsonp=window.webpackJsonp||[]).push([[714],{2878:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"发送和接收调试值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发送和接收调试值"}},[t._v("#")]),t._v(" 发送和接收调试值")]),t._v(" "),n("p",[t._v("在软件开发过程中，输出单个重要数字通常是必要的。 这就是 MAVLink 的通用 "),n("code",[t._v("NAMED_VALUE_FLOAT")]),t._v("、"),n("code",[t._v("DEBUG")]),t._v(" 和 "),n("code",[t._v("DEBUG_VECT")]),t._v(" 数据包的来源。")]),t._v(" "),n("h2",{attrs:{id:"在-mavlink-调试消息和-uorb-主题之间进行映射"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-mavlink-调试消息和-uorb-主题之间进行映射"}},[t._v("#")]),t._v(" 在 MAVLink 调试消息和 uORB 主题之间进行映射")]),t._v(" "),n("p",[t._v("MAVLink调试消息转换为/自 uORB 主题。 为了发送或接收 MAVLink 调试消息，您必须分别发布或订阅相应的主题。 下面是一个表，其中总结了 MAVLink 调试消息和 uORB 主题之间的映射：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("MAVLink 消息")]),t._v(" "),n("th",[t._v("uORB topic")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("NAMED_VALUE_FLOAT")]),t._v(" "),n("td",[t._v("debug_key_value")])]),t._v(" "),n("tr",[n("td",[t._v("DEBUG")]),t._v(" "),n("td",[t._v("debug_value")])]),t._v(" "),n("tr",[n("td",[t._v("DEBUG_VECT")]),t._v(" "),n("td",[t._v("debug_vect")])])])]),t._v(" "),n("h2",{attrs:{id:"教程-发送字符串-浮点配对"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#教程-发送字符串-浮点配对"}},[t._v("#")]),t._v(" 教程：发送字符串/浮点配对")]),t._v(" "),n("p",[t._v("本教程演示如何使用关联的 uORB 主题 "),n("code",[t._v("debug_key_value")]),t._v(" "),n("code",[t._v("NAMED_VALUE_FLOAT")]),t._v(" 发送 MAVLink 消息。")]),t._v(" "),n("p",[t._v("本教程的代码可在此处找到：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/examples/px4_mavlink_debug/px4_mavlink_debug.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("调试教程代码"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/cmake/configs",target:"_blank",rel:"noopener noreferrer"}},[t._v("开启教程 app"),n("OutboundLink")],1),t._v("，方法是在你配置的主板上的 mavlink 调试应用程序来取消/开启")])]),t._v(" "),n("p",[t._v("设置调试发布所需的只是此代码段。 首先添加头文件：")]),t._v(" "),n("div",{staticClass:"language-C extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/uORB.h>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/topics/debug_key_value.h>")])]),t._v("\n")])])]),n("p",[t._v("然后广播调试值主题（一个针对不同发布名称的广播就足够了）。 把这个放在你的主循环前面：")]),t._v(" "),n("div",{staticClass:"language-C extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 广播调试值 */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("debug_key_value_s")]),t._v(" dbg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"velx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0f")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("orb_advert_t")]),t._v(" pub_dbg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("orb_advertise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug_key_value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("而发送主循环更简单：")]),t._v(" "),n("div",{staticClass:"language-C extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("orb_publish")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug_key_value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pub_dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v(":::caution\nMultiple debug messages must have enough time between their respective publishings for Mavlink to process them. This means that either the code must wait between publishing multiple debug messages, or alternate the messages on each function call iteration.\n:::")]),t._v(" "),n("p",[t._v("The result in QGroundControl then looks like this on the real-time plot:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(683),alt:"QGC debugvalue plot"}})]),t._v(" "),n("h2",{attrs:{id:"教程-发送字符串-浮点配对-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#教程-发送字符串-浮点配对-2"}},[t._v("#")]),t._v(" 教程：发送字符串/浮点配对")]),t._v(" "),n("p",[t._v("首先，订阅主题 "),n("code",[t._v("debug_key_value")]),t._v("：")]),t._v(" "),n("p",[t._v("然后对主题进行监听：")]),t._v(" "),n("div",{staticClass:"language-C extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<poll.h>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/topics/debug_key_value.h>")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" debug_sub_fd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("orb_subscribe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug_key_value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("当 "),n("code",[t._v("debug_key_value")]),t._v(" 主题上有新消息可用时，不要忘记根据其键属性对其进行筛选，以便放弃键与 "),n("code",[t._v("velx")]),t._v(" 不同的消息：")]),t._v(" "),n("div",{staticClass:"language-C extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* one could wait for multiple topics with this technique, just using one here */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("px4_pollfd_struct_t")]),t._v(" fds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" debug_sub_fd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" POLLIN "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 等待 debug_key_value 等待时间 1000 ms (1 秒) */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" poll_ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("px4_poll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("When a new message is available on the "),n("code",[t._v("debug_key_value")]),t._v(" topic, do not forget to filter it based on its key attribute in order to discard the messages with key different than "),n("code",[t._v("velx")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-C extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("revents "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" POLLIN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 获取数据用于第一文件描述符 */")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("debug_key_value_s")]),t._v(" dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 拷贝数据至本地缓存 */")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("orb_copy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug_key_value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" debug_sub_fd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 基于 key attribute 的消息过滤器 */")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("strcmp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_sub_debug_vect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"velx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PX4_INFO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"velx:\\t%8.4f"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports},683:function(t,s,a){t.exports=a.p+"assets/img/qgc-debugval-plot.374e8f5a.jpg"}}]);