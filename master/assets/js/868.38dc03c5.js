(window.webpackJsonp=window.webpackJsonp||[]).push([[868],{1781:function(e,s,t){"use strict";t.r(s);var n=t(19),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"uorb-messaging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uorb-messaging"}},[e._v("#")]),e._v(" uORB Messaging")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("The uORB is an asynchronous "),t("code",[e._v("publish()")]),e._v(" / "),t("code",[e._v("subscribe()")]),e._v(" messaging API used for inter-thread/inter-process communication.")]),e._v(" "),t("p",[e._v("Look at the "),t("RouterLink",{attrs:{to:"/en/modules/hello_sky.html"}},[e._v("tutorial")]),e._v(" to learn how to use it in C++.")],1),e._v(" "),t("p",[e._v("uORB is automatically started early on bootup as many applications depend on it.\nIt is started with "),t("code",[e._v("uorb start")]),e._v(". Unit tests can be started with "),t("code",[e._v("uorb_tests")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"adding-a-new-topic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-topic"}},[e._v("#")]),e._v(" Adding a new topic")]),e._v(" "),t("p",[e._v("New uORB topics can be added either within the main PX4/PX4-Autopilot repository, or can be added in an out-of-tree message definitions.\nFor information on adding out-of-tree uORB message definitions, please see "),t("RouterLink",{attrs:{to:"/en/advanced/out_of_tree_modules.html#out-of-tree-uorb-message-definitions"}},[e._v("this section")]),e._v(".")],1),e._v(" "),t("p",[e._v("To add a new topic, you need to create a new "),t("strong",[e._v(".msg")]),e._v(" file in the "),t("code",[e._v("msg/")]),e._v(" directory and add the file name to the "),t("code",[e._v("msg/CMakeLists.txt")]),e._v(" list.\nFrom this, the needed C/C++ code is automatically generated.")]),e._v(" "),t("p",[e._v("Have a look at the existing "),t("code",[e._v("msg")]),e._v(" files for supported types.\nA message can also be used nested in other messages.")]),e._v(" "),t("p",[e._v("To each generated C/C++ struct, a field "),t("code",[e._v("uint64_t timestamp")]),e._v(" will be added.\nThis is used for the logger, so make sure to fill it in when publishing the message.")]),e._v(" "),t("p",[e._v("To use the topic in the code, include the header:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#include <uORB/topics/topic_name.h>\n")])])]),t("p",[e._v("By adding a line like the following in the "),t("code",[e._v(".msg")]),e._v(" file, a single message definition can be used for multiple independent topics:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# TOPICS mission offboard_mission onboard_mission\n")])])]),t("p",[e._v("Then in the code, use them as topic id: "),t("code",[e._v("ORB_ID(offboard_mission)")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"publishing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publishing"}},[e._v("#")]),e._v(" Publishing")]),e._v(" "),t("p",[e._v("Publishing a topic can be done from anywhere in the system, including interrupt context (functions called by the "),t("code",[e._v("hrt_call")]),e._v(" API).\nHowever, advertising a topic is only possible outside of interrupt context.\nA topic has to be advertised in the same process as it's later published.")]),e._v(" "),t("h2",{attrs:{id:"listing-topics-and-listening-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listing-topics-and-listening-in"}},[e._v("#")]),e._v(" Listing Topics and Listening in")]),e._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("listener")]),e._v(" command is only available on Pixracer (FMUv4) and Linux / OS X.")])]),e._v(" "),t("p",[e._v("To list all topics, list the file handles:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" /obj\n")])])]),t("p",[e._v("To listen to the content of one topic for 5 messages, run the listener:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("listener sensor_accel "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n")])])]),t("p",[e._v("The output is n-times the content of the topic:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("TOPIC: sensor_accel "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#3")]),e._v("\ntimestamp: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("84978861")]),e._v("\nintegral_dt: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4044")]),e._v("\nerror_count: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nx: -1\ny: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\nz: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\nx_integral: -0\ny_integral: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nz_integral: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\ntemperature: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("46")]),e._v("\nrange_m_s2: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("78")]),e._v("\nscaling: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n\nTOPIC: sensor_accel "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#4")]),e._v("\ntimestamp: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("85010833")]),e._v("\nintegral_dt: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3980")]),e._v("\nerror_count: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nx: -1\ny: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\nz: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\nx_integral: -0\ny_integral: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nz_integral: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\ntemperature: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("46")]),e._v("\nrange_m_s2: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("78")]),e._v("\nscaling: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("On NuttX-based systems (Pixhawk, Pixracer, etc) the "),t("code",[e._v("listener")]),e._v(" command can be called from within the "),t("em",[e._v("QGroundControl")]),e._v(" MAVLink Console to inspect the values of sensors and other topics.\nThis is a powerful debugging tool because it can be used even when QGC is connected over a wireless link (e.g. when the vehicle is flying).\nFor more information see: "),t("RouterLink",{attrs:{to:"/en/debug/sensor_uorb_topic_debugging.html"}},[e._v("Sensor/Topic Debugging")]),e._v(".")],1)]),e._v(" "),t("h3",{attrs:{id:"uorb-top-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uorb-top-command"}},[e._v("#")]),e._v(" uorb top Command")]),e._v(" "),t("p",[e._v("The command "),t("code",[e._v("uorb top")]),e._v(" shows the publishing frequency of each topic in real-time:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("update: 1s, num topics: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("77")]),e._v("\nTOPIC NAME                        INST "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#SUB #MSG #LOST #QSIZE")]),e._v("\nactuator_armed                       "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nactuator_controls_0                  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1044")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nbattery_status                       "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("500")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2694")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\ncommander_state                      "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("98")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("89")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\ncontrol_state                        "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("433")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nekf2_innovations                     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("223")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nekf2_timestamps                      "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nestimator_status                     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("488")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nmc_att_ctrl_status                   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nsensor_accel                         "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nsensor_accel                         "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("249")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("43")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nsensor_baro                          "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("42")]),e._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nsensor_combined                      "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("242")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("636")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])]),t("p",[e._v("The columns are: topic name, multi-instance index, number of subscribers, publishing frequency in Hz, number of lost messages per second (for all subscribers combined), and queue size.")]),e._v(" "),t("h2",{attrs:{id:"multi-instance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multi-instance"}},[e._v("#")]),e._v(" Multi-instance")]),e._v(" "),t("p",[e._v("uORB provides a mechanism to publish multiple independent instances of the same topic through "),t("code",[e._v("orb_advertise_multi")]),e._v(".\nIt will return an instance index to the publisher.\nA subscriber will then have to choose to which instance to subscribe to using "),t("code",[e._v("orb_subscribe_multi")]),e._v(" ("),t("code",[e._v("orb_subscribe")]),e._v(" subscribes to the first instance).\nHaving multiple instances is useful for example if the system has several sensors of the same type.")]),e._v(" "),t("p",[e._v("Make sure not to mix "),t("code",[e._v("orb_advertise_multi")]),e._v(" and "),t("code",[e._v("orb_advertise")]),e._v(" for the same topic.")]),e._v(" "),t("p",[e._v("The full API is documented in\n"),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/platforms/common/uORB/uORBManager.hpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("platforms/common/uORB/uORBManager.hpp"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[t("a",{attrs:{id:"deprecation"}})]),e._v(" "),t("h2",{attrs:{id:"message-field-deprecation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#message-field-deprecation"}},[e._v("#")]),e._v(" Message/Field Deprecation")]),e._v(" "),t("p",[e._v("As there are external tools using uORB messages from log files, such as "),t("a",{attrs:{href:"https://github.com/PX4/flight_review",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flight Review"),t("OutboundLink")],1),e._v(", certain aspects need to be considered when updating existing messages:")]),e._v(" "),t("ul",[t("li",[e._v("Changing existing fields or messages that external tools rely on is generally acceptable if there are good reasons for the update.\nIn particular for breaking changes to "),t("em",[e._v("Flight Review")]),e._v(", "),t("em",[e._v("Flight Review")]),e._v(" must be updated before code is merged to "),t("code",[e._v("master")]),e._v(".")]),e._v(" "),t("li",[e._v("In order for external tools to reliably distinguish between two message versions, the following steps must be followed:\n"),t("ul",[t("li",[e._v("Removed or renamed messages must be added to the "),t("code",[e._v("deprecated_msgs")]),e._v(" list in "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/c5a6a60903455c3600f47e3c45ecaa48614559c8/msg/CMakeLists.txt#L189",target:"_blank",rel:"noopener noreferrer"}},[e._v("msg/CMakeLists.txt"),t("OutboundLink")],1),e._v(" and the "),t("strong",[e._v(".msg")]),e._v(" file needs to be deleted.")]),e._v(" "),t("li",[e._v("Removed or renamed fields must be commented and marked as deprecated.\nFor example "),t("code",[e._v("uint8 quat_reset_counter")]),e._v(" would become "),t("code",[e._v("# DEPRECATED: uint8 quat_reset_counter")]),e._v(".\nThis is to ensure that removed fields (or messages) are not re-added in future.")]),e._v(" "),t("li",[e._v("In case of a semantic change (e.g. the unit changes from degrees to radians), the field must be renamed as well and the previous one marked as deprecated as above.")])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);