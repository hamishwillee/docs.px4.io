(window.webpackJsonp=window.webpackJsonp||[]).push([[497],{1542:function(t,s,a){"use strict";a.r(s);var e=a(18),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"send-and-receive-debug-values"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-and-receive-debug-values"}},[t._v("#")]),t._v(" Send and Receive Debug Values")]),t._v(" "),e("p",[t._v("It is often necessary during software development to output individual important numbers.\nThis is where the generic "),e("code",[t._v("NAMED_VALUE_FLOAT")]),t._v(", "),e("code",[t._v("DEBUG")]),t._v(" and "),e("code",[t._v("DEBUG_VECT")]),t._v(" packets of MAVLink come in.")]),t._v(" "),e("h2",{attrs:{id:"mapping-between-mavlink-debug-messages-and-uorb-topics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mapping-between-mavlink-debug-messages-and-uorb-topics"}},[t._v("#")]),t._v(" Mapping between MAVLink Debug Messages and uORB Topics")]),t._v(" "),e("p",[t._v("MAVLink debug messages are translated to/from uORB topics.\nIn order to send or receive a MAVLink debug message, you have to respectively publish or subscribe to the corresponding topic.\nHere is a table that summarizes the mapping between MAVLink debug messages and uORB topics:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("MAVLink message")]),t._v(" "),e("th",[t._v("uORB topic")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("NAMED_VALUE_FLOAT")]),t._v(" "),e("td",[t._v("debug_key_value")])]),t._v(" "),e("tr",[e("td",[t._v("DEBUG")]),t._v(" "),e("td",[t._v("debug_value")])]),t._v(" "),e("tr",[e("td",[t._v("DEBUG_VECT")]),t._v(" "),e("td",[t._v("debug_vect")])])])]),t._v(" "),e("h2",{attrs:{id:"tutorial-send-string-float-pairs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-send-string-float-pairs"}},[t._v("#")]),t._v(" Tutorial: Send String / Float Pairs")]),t._v(" "),e("p",[t._v("This tutorial shows how to send the MAVLink message "),e("code",[t._v("NAMED_VALUE_FLOAT")]),t._v(" using the associated uORB topic "),e("code",[t._v("debug_key_value")]),t._v(".")]),t._v(" "),e("p",[t._v("The code for this tutorial is available here:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/examples/px4_mavlink_debug/px4_mavlink_debug.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Debug Tutorial Code"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[t._v("Enable the tutorial app"),e("OutboundLink")],1),t._v(" by ensuring the MAVLink debug app ("),e("strong",[t._v("px4_mavlink_debug")]),t._v(") is uncommented in the config of your board.")])]),t._v(" "),e("p",[t._v("All required to set up a debug publication is this code snippet.\nFirst add the header file:")]),t._v(" "),e("div",{staticClass:"language-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/uORB.h>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/topics/debug_key_value.h>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<string.h>")])]),t._v("\n")])])]),e("p",[t._v("Then advertise the debug value topic (one advertisement for different published names is sufficient).\nPut this in front of your main loop:")]),t._v(" "),e("div",{staticClass:"language-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* advertise debug value */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("debug_key_value_s")]),t._v(" dbg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("strncpy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dbg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"velx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dbg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndbg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0f")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\norb_advert_t pub_dbg "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("orb_advertise")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug_key_value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dbg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("And sending in the main loop is even simpler:")]),t._v(" "),e("div",{staticClass:"language-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("dbg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" position"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("orb_publish")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug_key_value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pub_dbg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dbg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v(":::caution\nMultiple debug messages must have enough time between their respective publishings for Mavlink to process them.\nThis means that either the code must wait between publishing multiple debug messages, or alternate the messages on each function call iteration.\n:::")]),t._v(" "),e("p",[t._v("The result in QGroundControl then looks like this on the real-time plot:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(664),alt:"QGC debugvalue plot"}})]),t._v(" "),e("h2",{attrs:{id:"tutorial-receive-string-float-pairs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-receive-string-float-pairs"}},[t._v("#")]),t._v(" Tutorial: Receive String / Float Pairs")]),t._v(" "),e("p",[t._v("The following code snippets show how to receive the "),e("code",[t._v("velx")]),t._v(" debug variable that was sent in the previous tutorial.")]),t._v(" "),e("p",[t._v("First, subscribe to the topic "),e("code",[t._v("debug_key_value")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<poll.h>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/topics/debug_key_value.h>")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" debug_sub_fd "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("orb_subscribe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug_key_value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("Then poll on the topic:")]),t._v(" "),e("div",{staticClass:"language-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* one could wait for multiple topics with this technique, just using one here */")]),t._v("\npx4_pollfd_struct_t fds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fd "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" debug_sub_fd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" POLLIN "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("true"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* wait for debug_key_value for 1000 ms (1 second) */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" poll_ret "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("px4_poll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("When a new message is available on the "),e("code",[t._v("debug_key_value")]),t._v(" topic, do not forget to filter it based on its key attribute in order to discard the messages with key different than "),e("code",[t._v("velx")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("revents "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" POLLIN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* obtained data for the first file descriptor */")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("debug_key_value_s")]),t._v(" dbg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* copy data into local buffer */")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("orb_copy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug_key_value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" debug_sub_fd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dbg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* filter message based on its key attribute */")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("strcmp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_sub_debug_vect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"velx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("PX4_INFO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"velx:\\t%8.4f"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dbg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports},664:function(t,s,a){t.exports=a.p+"assets/img/qgc-debugval-plot.374e8f5a.jpg"}}]);