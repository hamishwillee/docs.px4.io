(window.webpackJsonp=window.webpackJsonp||[]).push([[1702],{3114:function(e,t,s){"use strict";s.r(t);var _=s(19),a=Object(_.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"外部模块-out-of-tree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外部模块-out-of-tree"}},[e._v("#")]),e._v(" 外部模块（Out-of-Tree）")]),e._v(" "),s("p",[e._v("外部模块为开发人员提供了一种便捷的机制，可以管理/分组他们想要添加（或更新）PX4 固件的专有模块。 外部模块可以使用与内部模块相同的includes，并可以通过uORB与内部模块交互。")]),e._v(" "),s("p",[e._v("本主题说明如何将外部（“out of tree”）模块添加到 PX4 编译中。")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[e._v("我们鼓励您在可能的情况下将您的更改贡献到 PX4 !")])]),e._v(" "),s("h2",{attrs:{id:"用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),s("p",[e._v("要创建外部模块：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("创建"),s("em",[e._v("外部目录")]),e._v("目录以对外部模块进行分组：")]),e._v(" "),s("ul",[s("li",[e._v("这个可以放在"),s("strong",[e._v("PX4-Autopilot")]),e._v("目录树以外的任何地方。")]),e._v(" "),s("li",[e._v("它必须具有与"),s("strong",[e._v("PX4-Autopilot")]),e._v("相同的目录结构（即必须包含"),s("strong",[e._v("src")]),e._v("目录）。")]),e._v(" "),s("li",[e._v("稍后我们使用"),s("code",[e._v("EXTERNAL_MODULES_LOCATION")]),e._v("来引用此目录。")])])]),e._v(" "),s("li",[s("p",[e._v("将现有模块（例如"),s("strong",[e._v("examples/px4_simple_app")]),e._v("）复制到外部目录，或直接创建新模块。")])]),e._v(" "),s("li",[s("p",[e._v("重命名模块（包括在"),s("strong",[e._v("CMakeLists.txt")]),e._v("中的"),s("code",[e._v("MODULE")]),e._v("），或者从 PX4-Autopilot "),s("em",[e._v("cmake")]),e._v(" 编译配置中移除。 这是为了避免与内部模块发生冲突。")])]),e._v(" "),s("li",[s("p",[e._v("在外部目录中添加"),s("strong",[e._v("CMakeLists.txt")]),e._v("文件，内容为：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("set(config_module_list_external\n    modules/<new_module>\n    PARENT_SCOPE\n    )\n")])])])]),e._v(" "),s("li",[s("p",[e._v("在"),s("code",[e._v("px4_add_module()")]),e._v("中添加一行 "),s("code",[e._v("EXTERNAL")]),e._v(" 到 "),s("code",[e._v("modules<new_module>/CMakeLists.txt")]),e._v(" 中，例如:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("px4_add_module(\n  MODULE modules__test_app\n  MAIN test_app\n  STACK_MAIN 2000\n  SRCS\n      px4_simple_app.c\n  DEPENDS\n      platforms__common\n  EXTERNAL\n  )\n")])])])])]),e._v(" "),s("h2",{attrs:{id:"out-of-tree-uorb-消息定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#out-of-tree-uorb-消息定义"}},[e._v("#")]),e._v(" Out-of-Tree uORB 消息定义")]),e._v(" "),s("p",[e._v("树外uORB消息将在与正常uORB消息相同的位置生成。 The out-of-tree uORB messages will be generated in the same locations as the normal uORB messages. The uORB topic headers are generated in "),s("code",[e._v("<build_dir>/uORB/topics/")]),e._v(", and the message source files are generated in "),s("code",[e._v("<build_dir>/msg/topics_sources/")]),e._v(".")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("将所有新消息定义放在 "),s("code",[e._v("$EXTERNAL_MODULES_LOCATION/msg")]),e._v(" 目录中。 Place all new message definitions within the "),s("code",[e._v("$EXTERNAL_MODULES_LOCATION/msg")]),e._v(" directory. The format of these new out-of-tree message definitions are the same as for any other "),s("RouterLink",{attrs:{to:"/zh/middleware/uorb.html#adding-a-new-topic"}},[e._v("uORB message definition")]),e._v(".")],1)]),e._v(" "),s("li",[s("p",[e._v("将以下内容添加文件"),s("code",[e._v("$EXTERNAL_MODULES_LOCATION/msg/CMakeLists.txt")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("set(config_msg_list_external\n    <message1>.msg\n    <message2>.msg\n    <message3>.msg\n    PARENT_SCOPE\n    )\n")])])]),s("p",[e._v("其中"),s("code",[e._v("<message#>.msg")]),e._v("是要处理并用于生成 uORB 消息的 uORB 消息定义文件的名称。")])])]),e._v(" "),s("p",[e._v("树外 uORB 消息将在与正常 uORB 消息相同的位置生成。 uORB主题标题在 "),s("code",[e._v("<build_dir>/uORB/topics/")]),e._v("中生成， 消息源文件由 生成于 "),s("code",[e._v("<build_dir>/msg/topics_sources/")]),e._v("。")]),e._v(" "),s("p",[e._v("新的 uORB 消息可以像任何其他 uORB 消息一样使用，如"),s("RouterLink",{attrs:{to:"/zh/middleware/uorb.html#adding-a-new-topic"}},[e._v("这里")]),e._v("所述。")],1),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),s("p",[e._v("树外的 uORB 消息定义不能和普通的 uORB 消息名字一样。 Any other build target can be used, but the build directory must not yet exist. If it already exists, you can also just set the "),s("em",[e._v("cmake")]),e._v(" variable in the build folder.")]),e._v(" "),s("h2",{attrs:{id:"构建外部模块和-uorb-消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建外部模块和-uorb-消息"}},[e._v("#")]),e._v(" 构建外部模块和 uORB 消息")]),e._v(" "),s("p",[e._v("执行 "),s("code",[e._v("make px4_sitl EXTERNAL_MODULES_LOCATION=<path>")]),e._v("。")]),e._v(" "),s("p",[e._v("任何其他构建目标都可以使用，但构建目录尚不存在。 如果它已经存在，您还可以在构建文件夹中设置"),s("em",[e._v("cmake")]),e._v("变量。")]),e._v(" "),s("p",[e._v("对于随后的递增版本 "),s("code",[e._v("EXTERNAL_MODULES_LOCATION")]),e._v(" 无需指定。")])])])}),[],!1,null,null,null);t.default=a.exports}}]);