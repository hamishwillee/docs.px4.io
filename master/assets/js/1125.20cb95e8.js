(window.webpackJsonp=window.webpackJsonp||[]).push([[1125],{2306:function(e,t,s){"use strict";s.r(t);var a=s(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"外部模块-out-of-tree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外部模块-out-of-tree"}},[e._v("#")]),e._v(" 外部模块（Out-of-Tree）")]),e._v(" "),s("p",[e._v("External modules provide a convenient mechanism for developers to manage/group proprietary modules that they want add to (or update in) PX4 firmware. External modules can use the same includes as internal modules and can interact with internal modules via uORB. 外部模块可以使用与内部模块相同的includes，并可以通过uORB与内部模块交互。")]),e._v(" "),s("p",[e._v("本主题说明如何将外部（“out of tree”）模块添加到PX4编译中。")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[e._v("We encourage you to contribute your changes into PX4, where possible!")])]),e._v(" "),s("h2",{attrs:{id:"用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),s("p",[e._v("To create an external module:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("创建"),s("em",[e._v("外部目录")]),e._v("目录以对外部模块进行分组：")]),e._v(" "),s("ul",[s("li",[e._v("This can be located anywhere outside of the "),s("strong",[e._v("Firmware")]),e._v(" tree.")]),e._v(" "),s("li",[e._v("It must have the same structure as "),s("strong",[e._v("Firmware")]),e._v(" (i.e. it must contain a directory called "),s("strong",[e._v("src")]),e._v(").")]),e._v(" "),s("li",[e._v("稍后我们使用"),s("code",[e._v("EXTERNAL_MODULES_LOCATION")]),e._v("来引用此目录。")])])]),e._v(" "),s("li",[s("p",[e._v("将现有模块（例如"),s("strong",[e._v("examples/px4_simple_app")]),e._v("）复制到外部目录，或直接创建新模块。")])]),e._v(" "),s("li",[s("p",[e._v("Rename the module (including "),s("code",[e._v("MODULE")]),e._v(" in "),s("strong",[e._v("CMakeLists.txt")]),e._v(") or remove it from the existing Firmware "),s("em",[e._v("cmake")]),e._v(" build config. This is to avoid conflicts with internal modules. This is to avoid conflicts with internal modules.")])]),e._v(" "),s("li",[s("p",[e._v("Add a file "),s("strong",[e._v("CMakeLists.txt")]),e._v(" in the external directory with content: set(config_module_list_external modules/")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("set(config_msg_list_external\n  <message1>.msg\n  <message2>.msg\n  <message3>.msg\n  PARENT_SCOPE\n  )\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Add a line "),s("code",[e._v("EXTERNAL")]),e._v(" to the "),s("code",[e._v("modules/<new_module>/CMakeLists.txt")]),e._v(" within "),s("code",[e._v("px4_add_module()")]),e._v(", for example like this:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("px4_add_module(\nMODULE modules__test_app\nMAIN test_app\nSTACK_MAIN 2000\nSRCS\n  px4_simple_app.c\nDEPENDS\n  platforms__common\nEXTERNAL\n)\n")])])])])]),e._v(" "),s("h2",{attrs:{id:"out-of-tree-uorb-消息定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#out-of-tree-uorb-消息定义"}},[e._v("#")]),e._v(" Out-of-Tree uORB 消息定义")]),e._v(" "),s("p",[e._v("树外uORB消息将在与正常uORB消息相同的位置生成。 The out-of-tree uORB messages will be generated in the same locations as the normal uORB messages. The uORB topic headers are generated in "),s("code",[e._v("<build_dir>/uORB/topics/")]),e._v(", and the message source files are generated in "),s("code",[e._v("<build_dir>/msg/topics_sources/")]),e._v(".")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("将所有新消息定义放在 "),s("code",[e._v("$EXTERNAL_MODULES_LOCATION/msg")]),e._v(" 目录中。 Place all new message definitions within the "),s("code",[e._v("$EXTERNAL_MODULES_LOCATION/msg")]),e._v(" directory. The format of these new out-of-tree message definitions are the same as for any other "),s("RouterLink",{attrs:{to:"/zh/middleware/uorb.html#adding-a-new-topic"}},[e._v("uORB message definition")]),e._v(".")],1)]),e._v(" "),s("li",[s("p",[e._v("将以下内容添加文件"),s("code",[e._v("$EXTERNAL_MODULES_LOCATION/msg/CMakeLists.txt")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("set(config_msg_list_external\n    <message1>.msg\n    <message2>.msg\n    <message3>.msg\n    PARENT_SCOPE\n    )\n")])])]),s("p",[e._v("其中"),s("code",[e._v("&lt;message#&gt;.msg")]),e._v("是要处理并用于生成uORB消息的uORB消息定义文件的名称。")])])]),e._v(" "),s("p",[e._v("The out-of-tree uORB messages will be generated in the same locations as the normal uORB messages. The uORB topic headers are generated in "),s("code",[e._v("<build_dir>/uORB/topics/")]),e._v(", and the message source files are generated in "),s("code",[e._v("<build_dir>/msg/topics_sources/")]),e._v(".")]),e._v(" "),s("p",[e._v("执行"),s("code",[e._v("make px4_sitl EXTERNAL_MODULES_LOCATION = &lt;path&gt;")]),e._v("。")]),e._v(" "),s("p",[e._v("可以使用任何其他构建目标，但构建目标目录必须不存在。 Any other build target can be used, but the build directory must not yet exist. If it already exists, you can also just set the "),s("em",[e._v("cmake")]),e._v(" variable in the build folder.")]),e._v(" "),s("h2",{attrs:{id:"构建外部模块和-uorb-消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建外部模块和-uorb-消息"}},[e._v("#")]),e._v(" 构建外部模块和 uORB 消息")]),e._v(" "),s("p",[e._v("对于后续增量构建，不需要指定"),s("code",[e._v("EXTERNAL_MODULES_LOCATION")]),e._v("。")]),e._v(" "),s("p",[e._v("Any other build target can be used, but the build directory must not yet exist. If it already exists, you can also just set the "),s("em",[e._v("cmake")]),e._v(" variable in the build folder.")]),e._v(" "),s("p",[e._v("For subsequent incremental builds "),s("code",[e._v("EXTERNAL_MODULES_LOCATION")]),e._v(" does not need to be specified.")])])}),[],!1,null,null,null);t.default=o.exports}}]);