(window.webpackJsonp=window.webpackJsonp||[]).push([[1524],{2755:function(a,t,e){"use strict";e.r(t);var s=e(19),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"参数设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数设置"}},[a._v("#")]),a._v(" 参数设置")]),a._v(" "),e("p",[a._v("PX4 使用 *param subsystem *（"),e("code",[a._v("float")]),a._v(" 和 "),e("code",[a._v("int32_t")]),a._v(" 类型的二维表）和文本文件（用于混控器和启动脚本）来存储其配置。")]),a._v(" "),e("p",[a._v("本节详细讨论 "),e("em",[a._v("param")]),a._v(" 子系统。 它涵盖如何列出、保存和加载参数，以及如何定义这些参数。")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/concept/system_startup.html"}},[a._v("系统启动")]),a._v(" 以及 "),e("RouterLink",{attrs:{to:"/zh/dev_airframes/adding_a_new_frame.html"}},[a._v("机架配置")]),a._v(" 在其他页面上的详细工作方式。")],1)]),a._v(" "),e("h2",{attrs:{id:"命令行用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行用法"}},[a._v("#")]),a._v(" 命令行用法")]),a._v(" "),e("p",[a._v("PX4 "),e("RouterLink",{attrs:{to:"/zh/debug/system_console.html"}},[a._v("系统控制台")]),a._v("提供了"),e("RouterLink",{attrs:{to:"/zh/modules/modules_command.html#param"}},[a._v("参数")]),a._v("工具，可用于设置参数，读取参数值，保存参数，以及导出和还原参数。")],1),a._v(" "),e("h3",{attrs:{id:"获取和设置参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取和设置参数"}},[a._v("#")]),a._v(" 获取和设置参数")]),a._v(" "),e("p",[e("code",[a._v("param show")]),a._v(" 命令列出所有系统参数：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("param show\n")])])]),e("p",[a._v('为了更具选择性，参数明可以使用通配符 "*"：')]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("nsh"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" param show RC_MAP_A*\nSymbols: x "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" used, + "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" saved, * "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" unsaved\nx   RC_MAP_AUX1 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("359,498")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_AUX2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("360,499")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_AUX3 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("361,500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_ACRO_SW "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("375,514")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n\n "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("723")]),a._v(" parameters total, "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("532")]),a._v(" used.\n")])])]),e("p",[a._v("可以使用 "),e("code",[a._v("-c")]),a._v(" 标志显示已更改的所有参数（从其默认值）：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("param show -c\n")])])]),e("p",[a._v("您可以使用"),e("code",[a._v("param show-for-airframe")]),a._v("来显示所有修改了默认值的参数，只显示当前机架定义的文件（默认导入）。")]),a._v(" "),e("h3",{attrs:{id:"导出和加载参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导出和加载参数"}},[a._v("#")]),a._v(" 导出和加载参数")]),a._v(" "),e("p",[a._v("您可以保存自上次将所有参数重置为其固件定义的默认值以来 "),e("em",[a._v("touched")]),a._v(" 的任何参数（这包括已更改的任何参数，即使这些参数已更改为默认值）。")]),a._v(" "),e("p",[a._v("标准的 "),e("code",[a._v("param save")]),a._v(" 命令将参数存储在当前默认文件中:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("param save\n")])])]),e("p",[a._v("如果提供了参数，它会将参数存储到这个新位置:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("param save /fs/microsd/vtol_param_backup\n")])])]),e("p",[a._v("有两个不同的命令可用于 "),e("em",[a._v("load")]),a._v(" 参数:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("param load")]),a._v(" 首先将所有参数完全重置为默认值，然后用存储在文件中的任何值覆盖参数值。")]),a._v(" "),e("li",[e("code",[a._v("param import")]),a._v(" 只是用文件中的值覆盖参数值，然后保存结果（即有效调用 "),e("code",[a._v("param save")]),a._v("）。")])]),a._v(" "),e("p",[e("code",[a._v("load")]),a._v(' 有效地将参数重置为保存参数时的状态（我们说 "有效"，因为保存在文件中的任何参数都将被更新，但其他参数可能有不同于参数文件创建时的固件定义默认值）。')]),a._v(" "),e("p",[a._v("相比之下，"),e("code",[a._v("import")]),a._v(" 是将文件中的参数与无人机的当前状态合并。 例如，这可以用来只导入包含校准数据的参数文件，而不覆盖系统配置的其余部分。")]),a._v(" "),e("p",[a._v("这两种情况的示例如下所示:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 文件保存时重置参数")]),a._v("\nparam load /fs/microsd/vtol_param_backup\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 选择性的保存参数 (不自动加载)")]),a._v("\nparam save\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将保存的参数与当前参数合并")]),a._v("\nparam "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" /fs/microsd/vtol_param_backup  \n")])])]),e("h2",{attrs:{id:"参数名称"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数名称"}},[a._v("#")]),a._v(" 参数名称")]),a._v(" "),e("p",[a._v("参数名称不得超过 16 个 ASCII 字符。")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("orb_check()")]),a._v(" 告诉我们是否有 "),e("em",[a._v("任何")]),a._v(" 更新 "),e("code",[a._v("param_update")]),a._v(" 的 uorb 消息 (但不是受影响的参数)，并设置 "),e("code",[a._v("updated")]),a._v(" bool。")]),a._v(" "),e("li",[a._v('如果更新了 "某些" 参数，我们会将更新复制到 '),e("code",[a._v("parameter_update_s")]),a._v(" ("),e("code",[a._v("param_upd")]),a._v(")")])]),a._v(" "),e("p",[a._v("按照惯例，组中的每个参数都应共享相同的 (有意义的) 字符串前缀，后跟下划线，"),e("code",[a._v("MC_")]),a._v(" 和 "),e("code",[a._v("FW_")]),a._v(" 用于与多旋翼或固定翼系统具体相关的参数。 此惯例不强制执行。")]),a._v(" "),e("p",[a._v("该名称必须在代码和 "),e("a",{attrs:{href:"#parameter-metadata"}},[a._v("parameter metadatata")]),a._v(" 中匹配，才能正确地将参数与其元数据（包括固件中的默认值）相关联。")]),a._v(" "),e("h3",{attrs:{id:"c-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-api"}},[a._v("#")]),a._v(" C++ API")]),a._v(" "),e("p",[a._v("参数名称不得超过 16个 ASCII 字符。")]),a._v(" "),e("p",[a._v("By convention, every parameter in a group should share the same (meaningful) string prefix followed by an underscore, and "),e("code",[a._v("MC_")]),a._v(" and "),e("code",[a._v("FW_")]),a._v(" are used for parameters related specifically to Multicopter or Fixed wing systems. This convention is not enforced.")]),a._v(" "),e("p",[a._v("The name must match in both code and "),e("a",{attrs:{href:"#parameter-metadata"}},[a._v("parameter metadata")]),a._v(" to correctly associate the parameter with its metadata (including default value in Firmware).")]),a._v(" "),e("h3",{attrs:{id:"c-api-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-api-2"}},[a._v("#")]),a._v(" C API")]),a._v(" "),e("p",[a._v("There are separate C and C++ APIs that can be used to access parameter values from within PX4 modules and drivers.")]),a._v(" "),e("p",[a._v("One important difference between the APIs is that the C++ version has a more efficient standardized mechanism to synchronize with changes to parameter values (i.e. from a GCS).")]),a._v(" "),e("p",[a._v("Synchronization is important because a parameter can be changed to another value at any time. Your code should "),e("em",[a._v("always")]),a._v(" use the current value from the parameter store. If getting the latest version is not possible, then a reboot will be required after the parameter is changed (set this requirement using the "),e("code",[a._v("@reboot_required")]),a._v(" metadata).")]),a._v(" "),e("p",[a._v("从 "),e("code",[a._v("ModuleParams")]),a._v(" 派生类，并使用 "),e("code",[a._v("DEFINE_PARAMETERS")]),a._v(" 指定参数李彪及其关联的参数属性。 参数的名称必须与其参数元数据定义相同。")]),a._v(" "),e("h4",{attrs:{id:"多实例-模块化-元数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多实例-模块化-元数据"}},[a._v("#")]),a._v(" 多实例（模块化）元数据")]),a._v(" "),e("p",[a._v("The C++ API provides macros to declare parameters as "),e("em",[a._v("class attributes")]),a._v('. You add some "boilerplate" code to regularly listen for changes in the '),e("RouterLink",{attrs:{to:"/zh/middleware/uorb.html"}},[a._v("uORB Topic")]),a._v(" associated with "),e("em",[a._v("any")]),a._v(" parameter update. Framework code then (invisibly) handles tracking uORB messages that affect your parameter attributes and keeping them in sync. In the rest of the code you can just use the defined parameter attributes and they will always be up to date!")],1),a._v(" "),e("p",[a._v("First include the required needed headers in the class header for your module or driver:")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("px4_platform_common/module_params.h")]),a._v(" to get the "),e("code",[a._v("DEFINE_PARAMETERS")]),a._v(" macro:"),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("<px4_platform_common/module_params.h>")])]),a._v("\n")])])])]),a._v(" "),e("li",[e("strong",[a._v("parameter_update.h")]),a._v(" to access the uORB "),e("code",[a._v("parameter_update")]),a._v(" message:"),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("<uORB/topics/parameter_update.h>")])]),a._v("\n")])])])]),a._v(" "),e("li",[e("strong",[a._v("Subscription.hpp")]),a._v(" for the uORB C++ subscription API:"),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("<uORB/Subscription.hpp>")])]),a._v("\n")])])])])]),a._v(" "),e("p",[a._v("Derive your class from "),e("code",[a._v("ModuleParams")]),a._v(", and use "),e("code",[a._v("DEFINE_PARAMETERS")]),a._v(" to specify a list of parameters and their associated parameter attributes. The names of the parameters must be the same as their parameter metadata definitions.")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyModule")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token base-clause"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ModuleParams")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * Check for parameter changes and update them if needed.\n     */")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("parameters_update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("DEFINE_PARAMETERS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ParamInt"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("px4"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("params"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("SYS_AUTOSTART"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" _sys_autostart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**< example parameter */")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ParamFloat"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("px4"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("params"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("ATT_BIAS_MAX"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" _att_bias_max  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**< another parameter */")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Subscriptions")]),a._v("\n    uORB"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("SubscriptionInterval _parameter_update_sub"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ORB_ID")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("parameter_update"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("_s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("调用 "),e("code",[a._v("parameters_update(parameter_update_sub);")]),a._v(" 在代码中定期检查是否有更新(这是模板)：")]),a._v(" "),e("p",[a._v("Call "),e("code",[a._v("parameters_update();")]),a._v(" periodically in code to check if there has been an update:")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyModule")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token base-clause"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ModuleParams")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" \n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * Check for parameter changes and update them if needed.\n")])])])]),e("p",[a._v("然后，参数属性 ("),e("code",[a._v("_sys_autostart")]),a._v(" 和"),e("code",[a._v("_att_bias_max")]),a._v(" 在本例中) 可用于表示参数，并随时更新参数值的变化。")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("num_instances")]),a._v(" (默认是1): 要生成的实例数 (>=1)")]),a._v(" "),e("li",[a._v('If there has been "some" parameter updated, we copy the update into a '),e("code",[a._v("parameter_update_s")]),a._v(" ("),e("code",[a._v("param_update")]),a._v("), to clear the pending update.")]),a._v(" "),e("li",[a._v("Then we call "),e("code",[a._v("ModuleParams::updateParams()")]),a._v('. This "under the hood" updates all parameter attributes listed in our '),e("code",[a._v("DEFINE_PARAMETERS")]),a._v(" list.")])]),a._v(" "),e("p",[a._v("The parameter attributes ("),e("code",[a._v("_sys_autostart")]),a._v(" and "),e("code",[a._v("_att_bias_max")]),a._v(" in this case) can then be used to represent the parameters, and will be updated whenever the parameter value changes.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("The "),e("RouterLink",{attrs:{to:"/zh/modules/module_template.html"}},[a._v("Application/Module Template")]),a._v(" uses the new-style C++ API but does not include "),e("a",{attrs:{href:"#parameter-metadata"}},[a._v("parameter metadata")]),a._v(".")],1)]),a._v(" "),e("h4",{attrs:{id:"c-api-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-api-3"}},[a._v("#")]),a._v(" C API")]),a._v(" "),e("p",[a._v("The C API can be used within both modules and drivers.")]),a._v(" "),e("p",[a._v("First include the parameter API:")]),a._v(" "),e("div",{staticClass:"language-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("<uORB/topics/parameter_update.h>")])]),a._v("\n")])])]),e("p",[a._v("Then retrieve the parameter and assign it to a variable (here "),e("code",[a._v("my_param")]),a._v("), as shown below for "),e("code",[a._v("PARAM_NAME")]),a._v(". The variable "),e("code",[a._v("my_param")]),a._v(" can then be used in your module code.")]),a._v(" "),e("div",{staticClass:"language-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("int32_t")]),a._v(" my_param "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_find")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PARAM_NAME"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("my_param"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[e("code",[a._v("param_find()")]),a._v(" 是一个“昂贵”操作，返回一个可以被 "),e("code",[a._v("param_get()")]),a._v(" 使用的句柄。 如果要多次读取该参数，可以缓存句柄，并在需要时在 "),e("code",[a._v("param_get()")]),a._v(" 中使用")]),a._v(" "),e("p",[e("code",[a._v("param_find()")]),a._v(' is an "expensive" operation, which returns a handle that can be used by '),e("code",[a._v("param_get()")]),a._v(". If you're going to read the parameter multiple times, you may cache the handle and use it in "),e("code",[a._v("param_get()")]),a._v(" when needed")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[a._v("Get the handle to the parameter")])]),a._v("\nparam_t my_param_handle "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" PARAM_INVALID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nmy_param_handle "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_find")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PARAM_NAME"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[a._v("Query the value of the parameter when needed")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int32_t")]),a._v(" my_param "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("my_param_handle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("my_param"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h3",{attrs:{id:"c-参数元数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-参数元数据"}},[a._v("#")]),a._v(" c 参数元数据")]),a._v(" "),e("p",[a._v("PX4 uses an extensive parameter metadata system to drive the user-facing presentation of parameters, and to set the default value for each parameter in firmware.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("Correct metadata is critical for good user experience in a ground station.")])]),a._v(" "),e("p",[a._v("Parameter metadata can be stored anywhere in the source tree as either "),e("strong",[a._v(".c")]),a._v(" or "),e("strong",[a._v(".yaml")]),a._v(" parameter definitions (the YAML definition is newer, and more flexible). Typically it is stored alongside its associated module.")]),a._v(" "),e("p",[a._v("The build system extracts the metadata (using "),e("code",[a._v("make parameters_metadata")]),a._v(") to build the "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[a._v("parameter reference")]),a._v(" and the parameter information "),e("a",{attrs:{href:"#publishing-parameter-metadata-to-a-gcs"}},[a._v("used by ground stations")]),a._v(".")],1),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),e("p",[a._v("After adding a "),e("em",[a._v("new")]),a._v(" parameter file you should call "),e("code",[a._v("make clean")]),a._v(" before building to generate the new parameters (parameter files are added as part of the "),e("em",[a._v("cmake")]),a._v(" configure step, which happens for clean builds and if a cmake file is modified).")])]),a._v(" "),e("h4",{attrs:{id:"yaml-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yaml-metadata"}},[a._v("#")]),a._v(" YAML Metadata")]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("注解")]),a._v(" "),e("p",[a._v("At time of writing YAML parameter definitions cannot be used in "),e("em",[a._v("libraries")]),a._v(".")])]),a._v(" "),e("p",[a._v("YAML meta data is intended as a full replacement for the "),e("strong",[a._v(".c")]),a._v(" definitions. It supports all the same metadata, along with new features like multi-instance definitions.")]),a._v(" "),e("ul",[e("li",[a._v("The YAML parameter metadata schema is here: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("validation/module_schema.yaml"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("li",[a._v("An example of YAML definitions being used can be found in the MAVLink parameter definitions: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/module.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("/src/modules/mavlink/module.yaml"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("li",[a._v("A YAML file is registered in the cmake build system by adding"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("MODULE_CONFIG\n  module.yaml\n")])])]),a._v("to the "),e("code",[a._v("px4_add_module")]),a._v(" section of the "),e("code",[a._v("CMakeLists.txt")]),a._v(" file of that module.")])]),a._v(" "),e("h4",{attrs:{id:"multi-instance-templated-yaml-meta-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-instance-templated-yaml-meta-data"}},[a._v("#")]),a._v(" Multi-Instance (Templated) YAML Meta Data")]),a._v(" "),e("p",[a._v("Templated parameter definitions are supported in "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("YAML parameter definitions"),e("OutboundLink")],1),a._v(" (templated parameter code is not supported).")]),a._v(" "),e("p",[a._v("The YAML allows you to define instance numbers in parameter names, descriptions, etc. using "),e("code",[a._v("${i}")]),a._v(". For example, below will generate MY_PARAM_1_RATE, MY_PARAM_2_RATE etc.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("#include <parameters/param.h>\n")])])]),e("p",[a._v("The following YAML definitions provide the start and end indexes.")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("num_instances")]),a._v(" (default 1): Number of instances to generate (>=1)")]),a._v(" "),e("li",[e("code",[a._v("instance_start")]),a._v(" (default 0): First instance number. If 0, "),e("code",[a._v("${i}")]),a._v(" expands to [0, N-1]`.")])]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("YAML 参数定义"),e("OutboundLink")],1),a._v(" 支持模块化参数定义(不支持模块化参数代码)。")]),a._v(" "),e("h4",{attrs:{id:"c-parameter-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-parameter-metadata"}},[a._v("#")]),a._v(" c Parameter Metadata")]),a._v(" "),e("p",[a._v("The legacy approach for defining parameter metadata is in a file with extension "),e("strong",[a._v(".c")]),a._v(" (at time of writing this is the approach most commonly used in the source tree).")]),a._v(" "),e("p",[a._v("以下 YAML 定义提供起始和结束索引。")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * Pitch P gain\n *\n * Pitch proportional gain, i.e. desired angular speed in rad/s for error 1 rad.\n *\n * @unit 1/s\n * @min 0.0\n * @max 10\n * @decimal 2\n * @increment 0.0005\n * @reboot_required true\n * @group Multicopter Attitude Control\n */")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("PARAM_DEFINE_FLOAT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MC_PITCH_P"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6.5f")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * Acceleration compensation based on GPS\n * velocity.\n *\n * @group Attitude Q estimator\n * @boolean\n */")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("PARAM_DEFINE_INT32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ATT_ACC_COMP"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("The "),e("code",[a._v("PARAM_DEFINE_*")]),a._v(" macro at the end specifies the type of parameter ("),e("code",[a._v("PARAM_DEFINE_FLOAT")]),a._v(" or "),e("code",[a._v("PARAM_DEFINE_INT32")]),a._v("), the name of the parameter (which must match the name used in code), and the default value in firmware.")]),a._v(" "),e("p",[a._v("The lines in the comment block are all optional, and are primarily used to control display and editing options within a ground station. The purpose of each line is given below (for more detail see "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("module_schema.yaml"),e("OutboundLink")],1),a._v(").")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/**\n * <title>\n *\n * <longer description, can be multi-line>\n *\n * @unit <the unit, e.g. m for meters>\n * @min <the minimum sane value. Can be overridden by the user>\n * @max <the maximum sane value. Can be overridden by the user>\n * @decimal <the minimum sane value. Can be overridden by the user>\n * @increment <the "ticks" in which this value will increment in the UI>\n * @reboot_required true <add this if changing the param requires a system restart.>\n * @boolean <add this for integer parameters that represent a boolean value>\n * @group <a title for parameters that form a group>\n */')]),a._v("\n")])])]),e("h2",{attrs:{id:"c-c-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-c-api"}},[a._v("#")]),a._v(" C / C++ API")]),a._v(" "),e("p",[a._v("Parameter metadata is collected into a JSON or XML file during each PX4 build.")]),a._v(" "),e("p",[a._v("For most flight controllers (as most have enough FLASH available), the JSON file is xz-compressed and stored within the generated binary. The file is then shared to ground stations using the "),e("a",{attrs:{href:"https://mavlink.io/en/services/component_information.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("MAVLink Component Information Protocol"),e("OutboundLink")],1),a._v(". This ensures that parameter metadata is always up-to-date with the code running on the vehicle.")]),a._v(" "),e("p",[a._v("Binaries for flight controller targets with constrained memory do not store the parameter metadata in the binary, but instead reference the same data stored on "),e("code",[a._v("px4-travis.s3.amazonaws.com")]),a._v(". This applies, for example, to the "),e("RouterLink",{attrs:{to:"/zh/flight_controller/omnibus_f4_sd.html"}},[a._v("Omnibus F4 SD")]),a._v(". The metadata is uploaded via "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/.github/workflows/metadata.yml",target:"_blank",rel:"noopener noreferrer"}},[a._v("github CI"),e("OutboundLink")],1),a._v(" for all build targets (and hence will only be available once parameters have been merged into master).")],1),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("注解")]),a._v(" "),e("p",[a._v("You can identify memory constrained boards because they specify "),e("code",[a._v("CONFIG_BOARD_CONSTRAINED_FLASH=y")]),a._v(" in their "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/release/1.12/boards/omnibus/f4sd/default.pxboard",target:"_blank",rel:"noopener noreferrer"}},[a._v("px4board definition file"),e("OutboundLink")],1),a._v(").")])]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("注解")]),a._v(" "),e("p",[a._v("The metadata on "),e("code",[a._v("px4-travis.s3.amazonaws.com")]),a._v(" is used if parameter metadata is not present on the vehicle. It may also be used as a fallback to avoid a very slow download over a low-rate telemetry link.")])]),a._v(" "),e("p",[a._v("Anyone doing custom development on a FLASH-constrained board can adjust the URL "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/component_information/CMakeLists.txt#L41",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),e("OutboundLink")],1),a._v(" to point to another server.")]),a._v(" "),e("p",[a._v("The XML file of the master branch is copied into the QGC source tree via CI and is used as a fallback in cases where no metadata is available via the component information service (this approach predates the existence of the component information protocol).")]),a._v(" "),e("h2",{attrs:{id:"further-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[a._v("#")]),a._v(" Further Information")]),a._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[a._v("Finding/Updating Parameters")])],1),a._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[a._v("Parameter Reference")])],1),a._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/platforms/common/include/px4_platform_common/param.h#L129",target:"_blank",rel:"noopener noreferrer"}},[a._v("Param implementation"),e("OutboundLink")],1),a._v(" (information on "),e("code",[a._v(".get()")]),a._v(", "),e("code",[a._v(".commit()")]),a._v(", and other methods)")])])])}),[],!1,null,null,null);t.default=r.exports}}]);