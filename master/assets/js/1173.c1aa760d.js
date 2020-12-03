(window.webpackJsonp=window.webpackJsonp||[]).push([[1173],{2509:function(t,s,a){"use strict";a.r(s);var e=a(18),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"micro-rtps-吞吐量测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#micro-rtps-吞吐量测试"}},[t._v("#")]),t._v(" Micro RTPS 吞吐量测试")]),t._v(" "),a("p",[t._v("This a simple test to measure the throughput of the "),a("RouterLink",{attrs:{to:"/zh/middleware/micrortps.html"}},[t._v("PX4-FastRTPS Bridge")]),t._v(". It sends and receives 256-byte messages (simultaneously) at maximum rate, and then outputs the result. 最大速率下，同时收发 256 字节的报文，并且输出结果。")],1),t._v(" "),a("p",[t._v("First create a new uORB message for this test in the folder "),a("strong",[t._v("/Firmware/msg/")]),t._v(". The message file will be called "),a("strong",[t._v("throughput_256.msg")]),t._v(" and have the following content: 可以命名为 "),a("strong",[t._v("throughput_256.msg")]),t._v(" 并包含如下内容：")]),t._v(" "),a("h2",{attrs:{id:"使用-uorb-报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-uorb-报文"}},[t._v("#")]),t._v(" 使用 uORB 报文")]),t._v(" "),a("p",[t._v("First create a new uORB message for this test in the folder "),a("strong",[t._v("/PX4-Autopilot/msg/")]),t._v(". The message file will be called "),a("strong",[t._v("throughput_256.msg")]),t._v(" and have the following content:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("uint8[256] data\n")])])]),a("p",[t._v("Register the new message adding it to the list of messages in the file: "),a("strong",[t._v("/Firmware/msg/CMakeLists.txt")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4/Firmware/msg\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" uint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" throughput_256.msg\n")])])]),a("p",[t._v("Give the message a topic id by adding a line in the "),a("strong",[t._v("/Firmware/Tools/message_id.py")]),t._v(" script:")]),t._v(" "),a("div",{staticClass:"language-cmake extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cmake"}},[a("code",[t._v("...\n...\nwind_estimate.msg\nthroughput_256.msg\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n...\n")])])]),a("p",[t._v("找到对应的目标平台（"),a("em",[t._v("cmake/configs/")]),t._v("），通过设置 "),a("em",[t._v(".cmake")]),t._v(" 文件中的变量 "),a("code",[t._v("GENERATE_RTPS_BRIDGE")]),t._v(" 来禁用自动桥接代码生成（作为 PX4 构建进程的一部分）：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wind_estimate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("94")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'throughput_256'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("h2",{attrs:{id:"禁用自动桥接代码生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁用自动桥接代码生成"}},[t._v("#")]),t._v(" 禁用自动桥接代码生成")]),t._v(" "),a("p",[t._v("使用 "),a("em",[t._v("generate_microRTPS_bridge.py")]),t._v(" 手动生成桥接代码（代码会发送和接收我们刚刚加入的 "),a("code",[t._v("throughput_256")]),t._v(" uORB 话题报文）：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GENERATE_RTPS_BRIDGE off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"生成桥接代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成桥接代码"}},[t._v("#")]),t._v(" 生成桥接代码")]),t._v(" "),a("p",[a("em",[t._v("Client")]),t._v(" 源代码生成在 "),a("strong",[t._v("src/modules/micrortps_bridge/micrortps_client/")]),t._v("，"),a("em",[t._v("Agent")]),t._v(" 则在 "),a("strong",[t._v("src/modules/micrortps_bridge/micrortps_agent/")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4/Firmware\npython Tools/generate_microRTPS_bridge.py --send msg/throughput_256.msg --receive msg/throughput_256.msg\n")])])]),a("p",[t._v("The "),a("em",[t._v("Client")]),t._v(" source code is generated in "),a("strong",[t._v("src/modules/micrortps_bridge/micrortps_client/")]),t._v(" and the "),a("em",[t._v("Agent")]),t._v(" in "),a("strong",[t._v("src/modules/micrortps_bridge/micrortps_agent/")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"更改客户端代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改客户端代码"}},[t._v("#")]),t._v(" 更改客户端代码")]),t._v(" "),a("p",[t._v("Open the file "),a("strong",[t._v("src/modules/micrortps_bridge/micrortps_client/microRTPS_client.cpp")]),t._v(". Update the "),a("code",[t._v("while")]),t._v(" loop in the "),a("code",[t._v("send()")]),t._v(" function to look like this: 更新 "),a("code",[t._v("send()")]),t._v(" 函数中的 "),a("code",[t._v("while")]),t._v(" 循环，使其如下所示:")]),t._v(" "),a("p",[t._v("Open the file "),a("strong",[t._v("src/modules/micrortps_bridge/micrortps_client/microRTPS_client.cpp")]),t._v(". Update the "),a("code",[t._v("while")]),t._v(" loop in the "),a("code",[t._v("send()")]),t._v(" function to look like this:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("_should_exit_task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//bool updated;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//orb_check(fds[0], &updated);")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//if (updated)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obtained data for the file descriptor")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("throughput_256_s")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// copy raw data into local buffer")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//orb_copy(ORB_ID(throughput_256), fds[0], &data);")]),t._v("\n        data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" loop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("serialize_throughput_256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data_buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("microCDRWriter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("read "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" transport_node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data_buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            total_sent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("sent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep_ms"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("The test was executed with PX4 running on Pixracer, connected via a UART to an ordinary PC running Ubuntu 16.04. The default configuration was used for both the Client/Agent. 默认配置用于两个客户/代理。 As the "),a("em",[t._v("Agent")]),t._v(" is an RTPS publisher and subscriber, it will automatically get notified of the RTPS messages it sends, and will then mirror these back to the client.\n:::")]),t._v(" "),a("p",[t._v("吞吐量可以在 shell 窗口中观察到的结果如下：")]),t._v(" "),a("h2",{attrs:{id:"结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结果"}},[t._v("#")]),t._v(" 结果")]),t._v(" "),a("p",[t._v("The test was executed with PX4 running on Pixracer, connected via a UART to an ordinary PC running Ubuntu 16.04. The default configuration was used for both the Client/Agent.")]),t._v(" "),a("p",[t._v("The throughput that was observed in the client shell window on completion is shown below:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("SENT:     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13255")]),t._v(" messages "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13255")]),t._v(" LOOPS, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3512575")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.994")]),t._v(" seconds - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("113")]),t._v(".33KB/s\nRECEIVED: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13251")]),t._v(" messages "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v(" LOOPS, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3511515")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.994")]),t._v(" seconds - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("113")]),t._v(".30KB/s\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);