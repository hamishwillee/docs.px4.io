(window.webpackJsonp=window.webpackJsonp||[]).push([[1128],{2307:function(a,t,s){"use strict";s.r(t);var e=s(18),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"参数设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数设置"}},[a._v("#")]),a._v(" 参数设置")]),a._v(" "),s("p",[a._v("PX4 使用 *param subsystem *（"),s("code",[a._v("float")]),a._v(" 和 "),s("code",[a._v("int32_t")]),a._v(" 类型的二维表）和文本文件（用于混控器和启动脚本）来存储其配置。")]),a._v(" "),s("p",[a._v("本节详细讨论 "),s("em",[a._v("param")]),a._v(" 子系统。 它涵盖如何列出、保存和加载参数，以及如何定义这些参数。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/zh/concept/system_startup.html"}},[a._v("系统启动")]),a._v(" 以及 "),s("RouterLink",{attrs:{to:"/zh/dev_airframes/adding_a_new_frame.html"}},[a._v("机架配置")]),a._v(" 在其他页面上的详细工作方式。")],1)]),a._v(" "),s("h2",{attrs:{id:"命令行用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行用法"}},[a._v("#")]),a._v(" 命令行用法")]),a._v(" "),s("p",[a._v("PX4 "),s("RouterLink",{attrs:{to:"/zh/debug/system_console.html"}},[a._v("系统控制台")]),a._v("提供了"),s("RouterLink",{attrs:{to:"/zh/modules/modules_command.html#param"}},[a._v("参数")]),a._v("工具，可用于设置参数，读取参数值，保存参数，以及导出和还原参数。")],1),a._v(" "),s("h3",{attrs:{id:"获取和设置参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取和设置参数"}},[a._v("#")]),a._v(" 获取和设置参数")]),a._v(" "),s("p",[s("code",[a._v("param show")]),a._v(" 命令列出所有系统参数：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("param show\n")])])]),s("p",[a._v('为了更具选择性，参数明可以使用通配符 "*"：')]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("nsh"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" param show RC_MAP_A*\nSymbols: x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" used, + "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" saved, * "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" unsaved\nx   RC_MAP_AUX1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("359,498")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_AUX2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("360,499")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_AUX3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("361,500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_ACRO_SW "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("375,514")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n\n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("723")]),a._v(" parameters total, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("532")]),a._v(" used.\n")])])]),s("p",[a._v("可以使用 "),s("code",[a._v("-c")]),a._v(" 标志显示已更改的所有参数（从其默认值）：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("param show -c\n")])])]),s("p",[a._v("您可以使用"),s("code",[a._v("param show-for-airframe")]),a._v("来显示所有修改了默认值的参数，只显示当前机架定义的文件（默认导入）。")]),a._v(" "),s("h3",{attrs:{id:"导出和加载参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出和加载参数"}},[a._v("#")]),a._v(" 导出和加载参数")]),a._v(" "),s("p",[a._v("您可以保存自上次将所有参数重置为其固件定义的默认值以来 "),s("em",[a._v("touched")]),a._v(" 的任何参数（这包括已更改的任何参数，即使这些参数已更改为默认值）。")]),a._v(" "),s("p",[a._v("标准的 "),s("code",[a._v("param save")]),a._v(" 命令将参数存储在当前默认文件中:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("param save\n")])])]),s("p",[a._v("如果提供了参数，它会将参数存储到这个新位置:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("param save /fs/microsd/vtol_param_backup\n")])])]),s("p",[a._v("有两个不同的命令可用于 "),s("em",[a._v("load")]),a._v(" 参数:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("param load")]),a._v(" 首先将所有参数完全重置为默认值，然后用存储在文件中的任何值覆盖参数值。")]),a._v(" "),s("li",[s("code",[a._v("param import")]),a._v(" 只是用文件中的值覆盖参数值，然后保存结果（即有效调用 "),s("code",[a._v("param save")]),a._v("）。")])]),a._v(" "),s("p",[s("code",[a._v("load")]),a._v(' 有效地将参数重置为保存参数时的状态（我们说 "有效"，因为保存在文件中的任何参数都将被更新，但其他参数可能有不同于参数文件创建时的固件定义默认值）。')]),a._v(" "),s("p",[a._v("相比之下，"),s("code",[a._v("import")]),a._v(" 是将文件中的参数与无人机的当前状态合并。 例如，这可以用来只导入包含校准数据的参数文件，而不覆盖系统配置的其余部分。")]),a._v(" "),s("p",[a._v("这两种情况的示例如下所示:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 文件保存时重置参数")]),a._v("\nparam load /fs/microsd/vtol_param_backup\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 选择性的保存参数 (不自动加载)")]),a._v("\nparam save\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将保存的参数与当前参数合并")]),a._v("\nparam "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" /fs/microsd/vtol_param_backup  \n")])])]),s("h2",{attrs:{id:"参数名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数名称"}},[a._v("#")]),a._v(" 参数名称")]),a._v(" "),s("p",[a._v("参数名称不得超过 16 个 ASCII 字符。")]),a._v(" "),s("p",[a._v("按照惯例，组中的每个参数都应共享相同的 (有意义的) 字符串前缀，后跟下划线，"),s("code",[a._v("MC_")]),a._v(" 和 "),s("code",[a._v("FW_")]),a._v(" 用于与多旋翼或固定翼系统具体相关的参数。 此惯例不强制执行。")]),a._v(" "),s("p",[a._v("该名称必须在代码和 "),s("a",{attrs:{href:"#parameter-metadata"}},[a._v("parameter metadatata")]),a._v(" 中匹配，才能正确地将参数与其元数据（包括固件中的默认值）相关联。")]),a._v(" "),s("h2",{attrs:{id:"c-c-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-c-api"}},[a._v("#")]),a._v(" C / C++ API")]),a._v(" "),s("p",[a._v("有单独的 C 和 C++ 的 API 可用于从 PX4 模块和驱动程序中访问参数值。")]),a._v(" "),s("p",[a._v("API 之间的一个重要区别是，C++ 版本具有更有效的标准化机制，可与参数值的更改（即来自 GCS 的更改）同步。")]),a._v(" "),s("p",[a._v("同步很重要，因为参数可以随时更改为另一个值。 您的代码应该 "),s("em",[a._v("始终")]),a._v(" 使用参数存储中的当前值。 如果无法获取最新版本，则需要在更改参数后重新启动（使用 "),s("code",[a._v("@reboot_required")]),a._v(" 元数据设置此要求）。")]),a._v(" "),s("p",[a._v("此外，C++ 版本有更好的类型安全和更小的 RAM 开销。 缺点是参数名称必须在编译时知道，而 C 语言 API 可以将动态创建的名称作为字符串。")]),a._v(" "),s("h3",{attrs:{id:"c-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-api"}},[a._v("#")]),a._v(" C++ API")]),a._v(" "),s("p",[a._v("C++ API 提供像"),s("em",[a._v("类属性")]),a._v('一样的宏来声明参数。 您添加了一些"boilerplate"代码来定期监听 '),s("RouterLink",{attrs:{to:"/zh/middleware/uorb.html"}},[a._v("uORB topic")]),a._v(" 与 "),s("em",[a._v("任意")]),a._v(" 参数更新相关的更改。 然后，框架代码（在不可见的情况下）处理跟踪 uORB 消息，这些消息会影响您的参数属性并使它们保持同步。 在代码的其余部分中，您只能使用定义的参数属性，它们将始终是最新的！")],1),a._v(" "),s("p",[a._v("首先在你的模块或驱动类头文件中包含 "),s("strong",[a._v("px4_platform_common/module_params.h")]),a._v("（以获取 "),s("code",[a._v("DEFINE_PARAMETERS")]),a._v("宏）：")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<px4_platform_common/module_params.h>")])]),a._v("\n")])])]),s("p",[a._v("从 "),s("code",[a._v("ModuleParams")]),a._v(" 派生类，并使用 "),s("code",[a._v("DEFINE_PARAMETERS")]),a._v(" 指定参数李彪及其关联的参数属性。 参数的名称必须与其参数元数据定义相同。")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyModule")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token base-clause"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ModuleParams")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * Check for parameter changes and update them if needed.\n     class MyModule : ..., public ModuleParams\n{\npublic:\n    ...\n\nprivate:\n\n    /**\n     * Check for parameter changes and update them if needed.\n     * @param parameter_update_sub uorb subscription to parameter_update\n     */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("parameters_update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" parameter_update_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),a._v(" force "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("DEFINE_PARAMETERS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ParamInt"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("px4"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("params"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("SYS_AUTOSTART"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" _sys_autostart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**< example parameter */")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ParamFloat"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("px4"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("params"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("ATT_BIAS_MAX"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" _att_bias_max  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**< another parameter */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("使用模板更新 CPP 文件，以检查与参数更新相关的 uORB 消息。")]),a._v(" "),s("p",[a._v("首先包含能够访问 uORB parameter_update 消息的头文件：")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<uORB/topics/parameter_update.h>")])]),a._v("\n")])])]),s("p",[a._v("在模块驱动程序启动时订阅更新消息，在停止时取消订阅。 "),s("code",[a._v("orb_subscribe()")]),a._v("函数返回的"),s("code",[a._v("parameter_update_sub")]),a._v("是一个句柄，我们可以使用该句柄来指向特定订阅。")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[a._v("# 订阅 parameter_update 消息\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" parameter_update_sub "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("orb_subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ORB_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("parameter_update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n# 取消订阅 parameter_update 消息\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("orb_unsubscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("parameter_update_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("调用 "),s("code",[a._v("parameters_update(parameter_update_sub);")]),a._v(" 在代码中定期检查是否有更新(这是模板)：")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Module")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("parameters_update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" parameter_update_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),a._v(" force"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("bool")]),a._v(" updated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("struct")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("parameter_update_s")]),a._v(" param_upd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Check if any parameter updated")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("orb_check")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("parameter_update_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("updated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// If any parameter updated copy it to: param_upd")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("updated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("orb_copy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ORB_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("parameter_update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" parameter_update_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("param_upd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("force "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" updated"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// If any parameter updated, call updateParams() to check if")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// this class attributes need updating (and do so). ")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("updateParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("然后，参数属性 ("),s("code",[a._v("_sys_autostart")]),a._v(" 和 "),s("code",[a._v("_att_bias_max")]),a._v(" 在本例中) 可用于表示参数，并将在参数值更改时进行更新。")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("orb_check()")]),a._v(" 告诉我们是否有 "),s("em",[a._v("任何")]),a._v(" 更新 "),s("code",[a._v("param_update")]),a._v(" 的 uorb 消息 (但不是受影响的参数)，并设置 "),s("code",[a._v("updated")]),a._v(" bool。")]),a._v(" "),s("li",[a._v('如果更新了 "某些" 参数，我们会将更新复制到 '),s("code",[a._v("parameter_update_s")]),a._v(" ("),s("code",[a._v("param_upd")]),a._v(")")]),a._v(" "),s("li",[a._v("调用 "),s("code",[a._v("ModuleParams::updateParams()")]),a._v("。 Then we call "),s("code",[a._v("ModuleParams::updateParams()")]),a._v('. This "under the hood" checks if the specific parameter attributes listed in our '),s("code",[a._v("DEFINE_PARAMETERS")]),a._v(" list need updating, and then does so if needed.")]),a._v(" "),s("li",[a._v("This example doesn't call "),s("code",[a._v("Module::parameters_update()")]),a._v(" with "),s("code",[a._v("force=True")]),a._v(". If you had other values that needed to be set up a common pattern is to include them in the function, and call it once with "),s("code",[a._v("force=True")]),a._v(" during initialisation. 如果您有其他需要设置公共模式的值，则是将它们包含在函数中，并在初始化过程中使用 "),s("code",[a._v("force=True")]),a._v(" 调用它一次。")])]),a._v(" "),s("p",[a._v("然后，参数属性 ("),s("code",[a._v("_sys_autostart")]),a._v(" 和"),s("code",[a._v("_att_bias_max")]),a._v(" 在本例中) 可用于表示参数，并随时更新参数值的变化。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/zh/modules/module_template.html"}},[a._v("Application/Module Template")]),a._v("使用的是新风格的 C++ API，但是不包括"),s("a",{attrs:{href:"#parameter-metadata"}},[a._v("parameter metadata")]),a._v("。")],1)]),a._v(" "),s("h3",{attrs:{id:"c-api-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-api-2"}},[a._v("#")]),a._v(" C API")]),a._v(" "),s("p",[a._v("C API 可以在模块和驱动程序中使用。")]),a._v(" "),s("p",[a._v("首先包括参数 API 头文件:")]),a._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("<parameters/param.h>")])]),a._v("\n")])])]),s("p",[a._v("然后检索参数并将其分配到一个变量 (这里 "),s("code",[a._v("my_param")]),a._v(")，如下文所示 "),s("code",[a._v("PARAM_NAME")]),a._v("。 变量 "),s("code",[a._v("my_param")]),a._v(" 然后可以用于您的模块代码。")]),a._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("int32_t")]),a._v(" my_param "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PARAM_NAME"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("my_param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("注解")]),a._v(" "),s("p",[a._v("如果参数元数据中声明了 "),s("code",[a._v("PARAM_NAME")]),a._v(" 则将设置其默认值。 上面的调用来查找参数应该始终成功。 通常，它与关联的模块一起存储。")]),a._v(" "),s("p",[s("code",[a._v("param_find()")]),a._v(" 是一个“昂贵”操作，返回一个可以被 "),s("code",[a._v("param_get()")]),a._v(" 使用的句柄。 如果要多次读取该参数，可以缓存句柄，并在需要时在 "),s("code",[a._v("param_get()")]),a._v(" 中使用")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[a._v("# 获取参数句柄\nparam_t my_param_handle "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" PARAM_INVALID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nmy_param_handle "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PARAM_NAME"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n# 查询我们需要的参数\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int32_t")]),a._v(" my_param "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("my_param_handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("my_param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"参数元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数元数据"}},[a._v("#")]),a._v(" 参数元数据")]),a._v(" "),s("p",[a._v("PX4 使用广泛的参数元数据系统来驱动面向用户的参数表示，并在固件中设置的每个参数的默认值。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("正确的元数据对于地面站的良好用户体验至关重要。")])])]),a._v(" "),s("p",[a._v("参数元数据可以储存在源文件目录树的任意位置中，作为 "),s("strong",[a._v(".c")]),a._v(" 或 "),s("strong",[a._v(".yaml")]),a._v(" 参数定义(YAML 定义较新，较灵活)。 通常，它与关联的模块一起存储。")]),a._v(" "),s("p",[a._v("构建系统提取元数据（使用命令"),s("code",[a._v("make parameters_metadata")]),a._v("）来构建"),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[a._v("parameter reference")]),a._v("，并且参数信息供地面站使用。")],1),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("添加了一个 "),s("em",[a._v("新的")]),a._v(" 参数文件后，你应该在产生新参数（被添加的参数文件作为"),s("em",[a._v("cmake")]),a._v("配置步骤中的一部分，在清理构建和 cmake 被修改后会被添加）之前调用"),s("code",[a._v("make clean")]),a._v("。")])]),a._v(" "),s("h3",{attrs:{id:"c-参数元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-参数元数据"}},[a._v("#")]),a._v(" c 参数元数据")]),a._v(" "),s("p",[a._v("传统方法是将定义的参数元数据写在一个扩展名为**.c**的文件中（在撰写本文时，这是源代码中最常用的方法）。")]),a._v(" "),s("p",[a._v("参数元数据部分看起来像下面的例子：")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * Pitch P gain\n *\n * Pitch proportional gain, i.e. desired angular speed in rad/s for error 1 rad.\n *\n * @unit 1/s\n * @min 0.0\n * @max 10\n * @decimal 2\n * @increment 0.0005\n * @reboot_required true\n * @group Multicopter Attitude Control\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("PARAM_DEFINE_FLOAT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MC_PITCH_P"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6.5f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * Acceleration compensation based on GPS\n * velocity.\n *\n * @group Attitude Q estimator\n * @boolean\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("PARAM_DEFINE_INT32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ATT_ACC_COMP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" @group Attitude Q estimator\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" @boolean\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("PARAM_DEFINE_INT32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ATT_ACC_COMP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("末尾的 "),s("code",[a._v("PARAM_DEFINE_*")]),a._v(" 宏指定参数的类型 ("),s("code",[a._v("PARAM_DEFINE_FLOAT")]),a._v(" 或 "),s("code",[a._v("PARAM_DEFINE_INT32")]),a._v(")、参数的名称 (必须与代码中使用的名称匹配) 以及固件中的默认值。")]),a._v(" "),s("p",[a._v("注释块中的行都是可选的，主要用于控制地面站内的显示和编辑选项。 下面给出了每行的用途（有关详细信息，请参阅 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("module_schema.yaml"),s("OutboundLink")],1),a._v("）。")]),a._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/**\n * <title>\n *\n * <longer description, can be multi-line>\n *\n * @unit <the unit, e.g. m for meters>\n * @min <the minimum sane value. Can be overridden by the user>\n * @max <the maximum sane value. Can be overridden by the user>\n * @decimal <the minimum sane value. Can be overridden by the user>\n * @increment <the "ticks" in which this value will increment in the UI>\n * @reboot_required true <add this if changing the param requires a system restart.>\n * @boolean <add this for integer parameters that represent a boolean value>\n * @group <a title for parameters that form a group>\n */')]),a._v("\n")])])]),s("h3",{attrs:{id:"yaml-元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml-元数据"}},[a._v("#")]),a._v(" YAML 元数据")]),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("注解")]),a._v(" "),s("p",[a._v("在写入 YAML 参数定义时，无法在 "),s("em",[a._v("libraries")]),a._v(" 中使用。")])]),a._v(" "),s("p",[a._v("YAML 元数据是为了完全替换 "),s("strong",[a._v(".c")]),a._v(" 文件定义。 它支持所有相同的元数据，以及多实例定义等新功能。")]),a._v(" "),s("ul",[s("li",[a._v("YAML 参数元数据架构在此处： "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("validation/module_schema.yaml"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("li",[a._v("正在使用的 YAML 定义示例可以在 MAVLink 参数定义中找到： "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/module.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("/src/modules/mavlink/module.yaml"),s("OutboundLink")],1),a._v("。")])]),a._v(" "),s("h4",{attrs:{id:"多实例-模块化-元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多实例-模块化-元数据"}},[a._v("#")]),a._v(" 多实例（模块化）元数据")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("YAML 参数定义"),s("OutboundLink")],1),a._v(" 支持模块化参数定义(不支持模块化参数代码)。")]),a._v(" "),s("p",[a._v("YAML 允许使用 "),s("code",[a._v("${i}")]),a._v(" 在参数名，描述等中定义实例数。 例如，下面将生成 MY_PARAM_1_RATE、MY_PARAM_2_RATE 等。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("MY_PARAM_${i}_RATE:\n            description:\n                short: Maximum rate for instance ${i}\n")])])]),s("p",[a._v("以下 YAML 定义提供起始和结束索引。")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("num_instances")]),a._v(" (默认是1): 要生成的实例数 (>=1)")]),a._v(" "),s("li",[s("code",[a._v("instance_start")]),a._v(" (默认是 0): 第一个实例编号。 如果是 0， "),s("code",[a._v("${i}")]),a._v(" 扩展到 [0, N-1]`.")])]),a._v(" "),s("p",[a._v("关于完整的示例，请参阅MAVLink参数定义： "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/module.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("/src/modules/mavlink/module.yaml"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"更多信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[a._v("#")]),a._v(" 更多信息")]),a._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[a._v("查找/修改参数")])],1),a._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[a._v("参数对照表")])],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);