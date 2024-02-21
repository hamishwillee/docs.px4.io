(window.webpackJsonp=window.webpackJsonp||[]).push([[1913],{3427:function(t,e,s){"use strict";s.r(e);var a=s(19),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"外部模块-out-of-tree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#外部模块-out-of-tree"}},[t._v("#")]),t._v(" 外部模块（Out-of-Tree）")]),t._v(" "),s("p",[t._v("外部模块为开发人员提供了一种便捷的机制，可以管理/分组他们想要添加（或更新）PX4 固件的专有模块。 外部模块可以使用与内部模块相同的includes，并可以通过uORB与内部模块交互。")]),t._v(" "),s("p",[t._v("本主题说明如何将外部（“out of tree”）模块添加到 PX4 编译中。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("我们鼓励您在可能的情况下将您的更改贡献到 PX4 !")])]),t._v(" "),s("h2",{attrs:{id:"用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),s("p",[t._v("要创建外部模块：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("创建用于分组外部模块的_外部目录_文件夹")]),t._v(" "),s("ul",[s("li",[t._v("这个可以放在"),s("strong",[t._v("PX4-Autopilot")]),t._v("目录树以外的任何地方。")]),t._v(" "),s("li",[t._v("它必须具有与"),s("strong",[t._v("PX4-Autopilot")]),t._v("相同的目录结构（即必须包含"),s("strong",[t._v("src")]),t._v("目录）。")]),t._v(" "),s("li",[t._v("稍后我们使用"),s("code",[t._v("EXTERNAL_MODULES_LOCATION")]),t._v("来引用此目录。")])])]),t._v(" "),s("li",[s("p",[t._v("将现有模块（例如"),s("strong",[t._v("examples/px4_simple_app")]),t._v("）复制到外部目录，或直接创建新模块。")])]),t._v(" "),s("li",[s("p",[t._v("重命名模块（包括在"),s("strong",[t._v("CMakeLists.txt")]),t._v("中的"),s("code",[t._v("MODULE")]),t._v("），或者从 PX4-Autopilot "),s("em",[t._v("cmake")]),t._v(" 编译配置中移除。 这是为了避免与内部模块发生冲突。")])]),t._v(" "),s("li",[s("p",[t._v("在外部目录中添加"),s("strong",[t._v("CMakeLists.txt")]),t._v("文件，内容为：")]),t._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config_module_list_external\n    modules/<new_module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n    PARENT_SCOPE\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("在"),s("code",[t._v("px4_add_module()")]),t._v("中添加一行 "),s("code",[t._v("EXTERNAL")]),t._v(" 到 "),s("code",[t._v("modules<new_module>/CMakeLists.txt")]),t._v(" 中，例如:")]),t._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("px4_add_module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  MODULE modules__test_app\n  MAIN test_app\n  STACK_MAIN "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v("\n  SRCS\n      px4_simple_app.c\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("DEPENDS")]),t._v("\n      platforms__common\n  EXTERNAL\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"out-of-tree-uorb-消息定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#out-of-tree-uorb-消息定义"}},[t._v("#")]),t._v(" Out-of-Tree uORB 消息定义")]),t._v(" "),s("p",[t._v("树外uORB消息将在与正常uORB消息相同的位置生成。 The out-of-tree uORB messages will be generated in the same locations as the normal uORB messages. The uORB topic headers are generated in "),s("code",[t._v("<build_dir>/uORB/topics/")]),t._v(", and the message source files are generated in "),s("code",[t._v("<build_dir>/msg/topics_sources/")]),t._v(".")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("将所有新消息定义放在 "),s("code",[t._v("$EXTERNAL_MODULES_LOCATION/msg")]),t._v(" 目录中。 Place all new message definitions within the "),s("code",[t._v("$EXTERNAL_MODULES_LOCATION/msg")]),t._v(" directory. The format of these new out-of-tree message definitions are the same as for any other "),s("RouterLink",{attrs:{to:"/zh/middleware/uorb.html#adding-a-new-topic"}},[t._v("uORB message definition")]),t._v(".")],1)]),t._v(" "),s("li",[s("p",[t._v("将以下内容添加文件"),s("code",[t._v("$EXTERNAL_MODULES_LOCATION/msg/CMakeLists.txt")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config_msg_list_external\n    <message1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(".msg\n    <message2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(".msg\n    <message3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(".msg\n    PARENT_SCOPE\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("其中"),s("code",[t._v("<message#>.msg")]),t._v("是要处理并用于生成 uORB 消息的 uORB 消息定义文件的名称。")])])]),t._v(" "),s("p",[t._v("树外 uORB 消息将在与正常 uORB 消息相同的位置生成。 uORB主题标题在 "),s("code",[t._v("<build_dir>/uORB/topics/")]),t._v("中生成， 消息源文件由 生成于 "),s("code",[t._v("<build_dir>/msg/topics_sources/")]),t._v("。")]),t._v(" "),s("p",[t._v("新的 uORB 消息可以像任何其他 uORB 消息一样使用，如"),s("RouterLink",{attrs:{to:"/zh/middleware/uorb.html#adding-a-new-topic"}},[t._v("这里")]),t._v("所述。")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("树外的 uORB 消息定义不能和普通的 uORB 消息名字一样。 Any other build target can be used, but the build directory must not yet exist. If it already exists, you can also just set the "),s("em",[t._v("cmake")]),t._v(" variable in the build folder.")]),t._v(" "),s("h2",{attrs:{id:"构建外部模块和-uorb-消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建外部模块和-uorb-消息"}},[t._v("#")]),t._v(" 构建外部模块和 uORB 消息")]),t._v(" "),s("p",[t._v("执行 "),s("code",[t._v("make px4_sitl EXTERNAL_MODULES_LOCATION=<path>")]),t._v("。")]),t._v(" "),s("p",[t._v("任何其他构建目标都可以使用，但构建目录尚不存在。 如果它已经存在，您还可以在构建文件夹中设置_cmake_变量。")]),t._v(" "),s("p",[t._v("对于随后的递增版本 "),s("code",[t._v("EXTERNAL_MODULES_LOCATION")]),t._v(" 无需指定。")])])])}),[],!1,null,null,null);e.default=_.exports}}]);