(window.webpackJsonp=window.webpackJsonp||[]).push([[1047],{2197:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"micro-rtps-throughput-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#micro-rtps-throughput-test"}},[t._v("#")]),t._v(" Micro RTPS Throughput Test")]),t._v(" "),e("p",[t._v("This a simple test to measure the throughput of the "),e("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html"}},[t._v("PX4-FastRTPS Bridge")]),t._v(". It sends and receives 256-byte messages (simultaneously) at maximum rate, and then outputs the result.")],1),t._v(" "),e("p",[t._v("First create a new uORB message for this test in the folder "),e("strong",[t._v("/Firmware/msg/")]),t._v(".\n:::")]),t._v(" "),e("h2",{attrs:{id:"create-the-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-uorb-message"}},[t._v("#")]),t._v(" Create the uORB message")]),t._v(" "),e("p",[t._v("First create a new uORB message for this test in the folder "),e("strong",[t._v("/PX4-Autopilot/msg/")]),t._v(". The message file will be called "),e("strong",[t._v("throughput_256.msg")]),t._v(" and have the following content:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("uint8[256] data\n")])])]),e("p",[t._v("Register the new message adding it to the list of messages in the file: "),e("strong",[t._v("/Firmware/msg/CMakeLists.txt")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4/Firmware/msg\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" uint8"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" throughput_256.msg\n")])])]),e("p",[t._v("Give the message a topic id by adding a line in the "),e("strong",[t._v("/Firmware/Tools/message_id.py")]),t._v(" script:")]),t._v(" "),e("div",{staticClass:"language-cmake extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cmake"}},[e("code",[t._v("...\n...\n")])])]),e("p",[t._v("Give the message a topic id by adding a line in the "),e("strong",[t._v("/PX4-Autopilot/Tools/message_id.py")]),t._v(" script:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wind_estimate'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("94")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'throughput_256'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),e("h2",{attrs:{id:"disable-automatic-bridge-code-generation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disable-automatic-bridge-code-generation"}},[t._v("#")]),t._v(" Disable automatic bridge code generation")]),t._v(" "),e("p",[t._v("Disable automatic generation of bridge code (as part of the PX4 build process) by setting the variable "),e("code",[t._v("GENERATE_RTPS_BRIDGE")]),t._v(" to "),e("code",[t._v("off")]),t._v(" in the "),e("em",[t._v(".cmake")]),t._v(" file for the target platform ("),e("em",[t._v("cmake/configs/")]),t._v("):")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("set"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GENERATE_RTPS_BRIDGE off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"generate-the-bridge-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generate-the-bridge-code"}},[t._v("#")]),t._v(" Generate the bridge code")]),t._v(" "),e("p",[t._v("Manually generate bridge code using "),e("em",[t._v("generate_microRTPS_bridge.py")]),t._v(' (the code will send and receive "just" our '),e("code",[t._v("throughput_256")]),t._v(" uORB topic):")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4/Firmware\npython Tools/generate_microRTPS_bridge.py --send msg/throughput_256.msg --receive msg/throughput_256.msg\n")])])]),e("p",[t._v("The "),e("em",[t._v("Client")]),t._v(" source code is generated in "),e("strong",[t._v("src/modules/micrortps_bridge/micrortps_client/")]),t._v(" and the "),e("em",[t._v("Agent")]),t._v(" in "),e("strong",[t._v("src/modules/micrortps_bridge/micrortps_agent/")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"modify-the-client-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modify-the-client-code"}},[t._v("#")]),t._v(" Modify the client code")]),t._v(" "),e("p",[t._v("Next we modify the "),e("em",[t._v("Client")]),t._v(" to send a "),e("em",[t._v("throughput_256")]),t._v(" message on every loop. This is required because the topic is not actually being published by PX4, and because we want to ensure that it is sent at the greatest possible rate.")]),t._v(" "),e("p",[t._v("Open the file "),e("strong",[t._v("src/modules/micrortps_bridge/micrortps_client/microRTPS_client.cpp")]),t._v(". Update the "),e("code",[t._v("while")]),t._v(" loop in the "),e("code",[t._v("send()")]),t._v(" function to look like this:")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("_should_exit_task"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//bool updated;")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//orb_check(fds[0], &updated);")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//if (updated)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obtained data for the file descriptor")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("throughput_256_s")]),t._v(" data "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// copy raw data into local buffer")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//orb_copy(ORB_ID(throughput_256), fds[0], &data);")]),t._v("\n        data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" loop"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("serialize_throughput_256")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data_buffer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("microCDRWriter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("read "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" transport_node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data_buffer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            total_sent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" read"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("sent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("usleep")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep_ms"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("loop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("You may recall this is intended to be a "),e("em",[t._v("bidirectional")]),t._v(" throughput test, where messages must also be sent from the "),e("em",[t._v("Agent")]),t._v(" to the "),e("em",[t._v("Client")]),t._v(". You do not need to modify the Agent code to make this happen. As the "),e("em",[t._v("Agent")]),t._v(" is an RTPS publisher and subscriber, it will automatically get notified of the RTPS messages it sends, and will then mirror these back to the client.")])]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/middleware/micrortps_manual_code_generation.html#build-and-use-the-code"}},[t._v("Compile and launch")]),t._v(" both the "),e("em",[t._v("Client")]),t._v(" and the "),e("em",[t._v("Agent")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"result"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#result"}},[t._v("#")]),t._v(" Result")]),t._v(" "),e("p",[t._v("The test was executed with PX4 running on Pixracer, connected via a UART to an ordinary PC running Ubuntu 16.04. The default configuration was used for both the Client/Agent.")]),t._v(" "),e("p",[t._v("The throughput that was observed in the client shell window on completion is shown below:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("SENT:     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("13255")]),t._v(" messages "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("13255")]),t._v(" LOOPS, "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3512575")]),t._v(" bytes "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.994")]),t._v(" seconds - "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("113")]),t._v(".33KB/s\nRECEIVED: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("13251")]),t._v(" messages "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v(" LOOPS, "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3511515")]),t._v(" bytes "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.994")]),t._v(" seconds - "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("113")]),t._v(".30KB/s\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);