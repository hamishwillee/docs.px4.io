(window.webpackJsonp=window.webpackJsonp||[]).push([[881],{1823:function(e,t,s){"use strict";s.r(t);var a=s(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"external-modules-out-of-tree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#external-modules-out-of-tree"}},[e._v("#")]),e._v(" External Modules (Out-of-Tree)")]),e._v(" "),s("p",[e._v("External modules provide a convenient mechanism for developers to manage/group proprietary modules that they want add to (or update in) PX4 firmware. External modules can use the same includes as internal modules and can interact with internal modules via uORB.")]),e._v(" "),s("p",[e._v('This topic explains how to add an external ("out of tree") module to the PX4 build.')]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Tip")]),e._v(" We encourage you to contribute your changes into PX4, where possible!")])]),e._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("To create an external module:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Create an "),s("em",[e._v("external directory")]),e._v(" directory for grouping the external modules:")]),e._v(" "),s("ul",[s("li",[e._v("This can be located anywhere outside of the "),s("strong",[e._v("PX4-Autopilot")]),e._v(" tree.")]),e._v(" "),s("li",[e._v("It must have the same structure as "),s("strong",[e._v("PX4-Autopilot")]),e._v(" (i.e. it must contain a directory called "),s("strong",[e._v("src")]),e._v(").")]),e._v(" "),s("li",[e._v("Later we refer to this directory using "),s("code",[e._v("EXTERNAL_MODULES_LOCATION")]),e._v(".")])])]),e._v(" "),s("li",[s("p",[e._v("Copy an existing module (e.g. "),s("strong",[e._v("examples/px4_simple_app")]),e._v(") to the external directory, or directly create a new module.")])]),e._v(" "),s("li",[s("p",[e._v("Rename the module (including "),s("code",[e._v("MODULE")]),e._v(" in "),s("strong",[e._v("CMakeLists.txt")]),e._v(") or remove it from the existing PX4-Autopilot "),s("em",[e._v("cmake")]),e._v(" build config. This is to avoid conflicts with internal modules.")])]),e._v(" "),s("li",[s("p",[e._v("Add a file "),s("strong",[e._v("CMakeLists.txt")]),e._v(" in the external directory with content:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("set(config_module_list_external\n    modules/<new_module>\n    PARENT_SCOPE\n    )\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Add a line "),s("code",[e._v("EXTERNAL")]),e._v(" to the "),s("code",[e._v("modules/<new_module>/CMakeLists.txt")]),e._v(" within "),s("code",[e._v("px4_add_module()")]),e._v(", for example like this:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("px4_add_module(\n  MODULE modules__test_app\n  MAIN test_app\n  STACK_MAIN 2000\n  SRCS\n      px4_simple_app.c\n  DEPENDS\n      platforms__common\n  EXTERNAL\n  )\n")])])])])]),e._v(" "),s("p",[s("a",{attrs:{id:"uorb_message_definitions"}})]),e._v(" "),s("h2",{attrs:{id:"out-of-tree-uorb-message-definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#out-of-tree-uorb-message-definitions"}},[e._v("#")]),e._v(" Out-of-Tree uORB Message Definitions")]),e._v(" "),s("p",[e._v("uORB messages can also be defined out-of-tree. For this, the "),s("code",[e._v("$EXTERNAL_MODULES_LOCATION/msg")]),e._v(" folder must exist.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Place all new message definitions within the "),s("code",[e._v("$EXTERNAL_MODULES_LOCATION/msg")]),e._v(" directory. The format of these new out-of-tree message definitions are the same as for any other "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html#adding-a-new-topic"}},[e._v("uORB message definition")]),e._v(".")],1)]),e._v(" "),s("li",[s("p",[e._v("Add a file "),s("code",[e._v("$EXTERNAL_MODULES_LOCATION/msg/CMakeLists.txt")]),e._v(" with content:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("set(config_msg_list_external\n    <message1>.msg\n    <message2>.msg\n    <message3>.msg\n    PARENT_SCOPE\n    )\n")])])]),s("p",[e._v("where "),s("code",[e._v("<message#>.msg")]),e._v(" is the name of the uORB message definition file to be processed and used for uORB message generation.")])])]),e._v(" "),s("p",[e._v("The out-of-tree uORB messages will be generated in the same locations as the normal uORB messages. The uORB topic headers are generated in "),s("code",[e._v("<build_dir>/uORB/topics/")]),e._v(", and the message source files are generated in "),s("code",[e._v("<build_dir>/msg/topics_sources/")]),e._v(".")]),e._v(" "),s("p",[e._v("The new uORB messages can be used like any other uORB message as described "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html#adding-a-new-topic"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Warning")]),e._v(" The out-of-tree uORB message definitions cannot have the same name as any of the normal uORB messages.")])]),e._v(" "),s("p",[s("a",{attrs:{id:"building"}})]),e._v(" "),s("h2",{attrs:{id:"building-external-modules-and-uorb-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-external-modules-and-uorb-messages"}},[e._v("#")]),e._v(" Building External Modules and uORB Messages")]),e._v(" "),s("p",[e._v("Execute "),s("code",[e._v("make px4_sitl EXTERNAL_MODULES_LOCATION=<path>")]),e._v(".")]),e._v(" "),s("p",[e._v("Any other build target can be used, but the build directory must not yet exist. If it already exists, you can also just set the "),s("em",[e._v("cmake")]),e._v(" variable in the build folder.")]),e._v(" "),s("p",[e._v("For subsequent incremental builds "),s("code",[e._v("EXTERNAL_MODULES_LOCATION")]),e._v(" does not need to be specified.")])])}),[],!1,null,null,null);t.default=o.exports}}]);