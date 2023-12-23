(window.webpackJsonp=window.webpackJsonp||[]).push([[961],{1843:function(a,t,e){"use strict";e.r(t);var s=e(19),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"parameters-configurations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-configurations"}},[a._v("#")]),a._v(" Parameters & Configurations")]),a._v(" "),e("p",[a._v("PX4 uses the "),e("em",[a._v("param subsystem")]),a._v(" (a flat table of "),e("code",[a._v("float")]),a._v(" and "),e("code",[a._v("int32_t")]),a._v(" values) and text files (for startup scripts) to store its configuration.")]),a._v(" "),e("p",[a._v("This section discusses the "),e("em",[a._v("param")]),a._v(" subsystem in detail.\nIt covers how to list, save and load parameters, and how to define them and make them available to ground stations.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/en/concept/system_startup.html"}},[a._v("System startup")]),a._v(" and the way that "),e("RouterLink",{attrs:{to:"/en/dev_airframes/adding_a_new_frame.html"}},[a._v("frame configuration")]),a._v(" startup scripts work are detailed on other pages.")],1)]),a._v(" "),e("h2",{attrs:{id:"command-line-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-line-usage"}},[a._v("#")]),a._v(" Command Line Usage")]),a._v(" "),e("p",[a._v("The PX4 "),e("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[a._v("system console")]),a._v(" offers the "),e("RouterLink",{attrs:{to:"/en/modules/modules_command.html#param"}},[a._v("param")]),a._v(" tool, which can be used to set parameters, read their value, save them, and export and restore to/from files.")],1),a._v(" "),e("h3",{attrs:{id:"getting-and-setting-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-and-setting-parameters"}},[a._v("#")]),a._v(" Getting and Setting Parameters")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("param show")]),a._v(" command lists all system parameters:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("param show\n")])])]),e("p",[a._v('To be more selective, a partial parameter name with wildcard "*" can be used:')]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("nsh"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" param show RC_MAP_A*\nSymbols: x "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" used, + "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" saved, * "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" unsaved\nx   RC_MAP_AUX1 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("359,498")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_AUX2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("360,499")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_AUX3 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("361,500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nx   RC_MAP_ACRO_SW "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("375,514")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n\n "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("723")]),a._v(" parameters total, "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("532")]),a._v(" used.\n")])])]),e("p",[a._v("You can use the "),e("code",[a._v("-c")]),a._v(" flag to show all parameters that have changed (from their defaults):")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("param show -c\n")])])]),e("p",[a._v("You can use "),e("code",[a._v("param show-for-airframe")]),a._v(" to show all parameters that have changed from their defaults for just the current airframe's definition file (and defaults it imports).")]),a._v(" "),e("h3",{attrs:{id:"exporting-and-loading-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exporting-and-loading-parameters"}},[a._v("#")]),a._v(" Exporting and Loading Parameters")]),a._v(" "),e("p",[a._v("You can save any parameters that have been "),e("em",[a._v("changed")]),a._v(" (that are different from airframe defaults).")]),a._v(" "),e("p",[a._v("The standard "),e("code",[a._v("param save")]),a._v(" command will store the parameters in the current default file:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("param save\n")])])]),e("p",[a._v("If provided with an argument, it will store the parameters instead to this new location:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("param save /fs/microsd/vtol_param_backup\n")])])]),e("p",[a._v("There are two different commands to "),e("em",[a._v("load")]),a._v(" parameters:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("param load")]),a._v(" first does a full reset of all parameters to their defaults, and then overwrites parameter values with any values stored in the file.")]),a._v(" "),e("li",[e("code",[a._v("param import")]),a._v(" just overwrites parameter values with the values from the file and then saves the result (i.e. effectively calls "),e("code",[a._v("param save")]),a._v(").")])]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("load")]),a._v(' effectively resets the parameters to the state when the parameters were saved (we say "effectively" because any parameters saved in the file will be updated, but other parameters may have different firmware-defined default values than when the parameters file was created).')]),a._v(" "),e("p",[a._v("By contrast, "),e("code",[a._v("import")]),a._v(" merges the parameters in the file with the current state of the vehicle.\nThis can be used, for example, to just import a parameter file containing calibration data, without overwriting the rest of the system configuration.")]),a._v(" "),e("p",[a._v("Examples for both cases are shown below:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Reset the parameters to when file was saved")]),a._v("\nparam load /fs/microsd/vtol_param_backup\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Optionally save params (not done automatically with load)")]),a._v("\nparam save\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Merge the saved parameters with current parameters")]),a._v("\nparam "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" /fs/microsd/vtol_param_backup\n")])])]),e("h2",{attrs:{id:"creating-defining-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-defining-parameters"}},[a._v("#")]),a._v(" Creating/Defining Parameters")]),a._v(" "),e("p",[a._v("Parameters definitions have two parts:")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#parameter-metadata"}},[a._v("Parameter metadata")]),a._v(" specifies the default value for each parameter in firmware along with other metadata for presentation (and editing) of parameters in ground control stations and documentation.")]),a._v(" "),e("li",[e("a",{attrs:{href:"#c-c-api"}},[a._v("C/C++ Code")]),a._v(" that provides access to get and/or subscribe to parameter values from within PX4 modules and drivers.")])]),a._v(" "),e("p",[a._v("Several approaches are described below for writing both the metadata and code.\nWhere possible code should use newer "),e("a",{attrs:{href:"#yaml-metadata"}},[a._v("YAML metadata")]),a._v(" and "),e("a",{attrs:{href:"#c-api"}},[a._v("C++ API")]),a._v(" over the older C parameter/code definitions, as these are more flexible and robust.")]),a._v(" "),e("p",[a._v("Parameter metadata is "),e("a",{attrs:{href:"#publishing-parameter-metadata-to-a-gcs"}},[a._v("compiled into the firmware")]),a._v(",\nand made available to ground stations via the "),e("a",{attrs:{href:"https://mavlink.io/en/services/component_information.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("MAVLink Component Information service"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("h3",{attrs:{id:"parameter-names"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameter-names"}},[a._v("#")]),a._v(" Parameter Names")]),a._v(" "),e("p",[a._v("Parameter names must be no more than 16 ASCII characters.")]),a._v(" "),e("p",[a._v("By convention, every parameter in a group should share the same (meaningful) string prefix followed by an underscore, and "),e("code",[a._v("MC_")]),a._v(" and "),e("code",[a._v("FW_")]),a._v(" are used for parameters related specifically to Multicopter or Fixed-wing systems.\nThis convention is not enforced.")]),a._v(" "),e("p",[a._v("The name must match in both code and "),e("a",{attrs:{href:"#parameter-metadata"}},[a._v("parameter metadata")]),a._v(" to correctly associate the parameter with its metadata (including default value in Firmware).")]),a._v(" "),e("h3",{attrs:{id:"c-c-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-c-api"}},[a._v("#")]),a._v(" C / C++ API")]),a._v(" "),e("p",[a._v("There are separate C and C++ APIs that can be used to access parameter values from within PX4 modules and drivers.")]),a._v(" "),e("p",[a._v("One important difference between the APIs is that the C++ version has a more efficient standardized mechanism to synchronize with changes to parameter values (i.e. from a GCS).")]),a._v(" "),e("p",[a._v("Synchronization is important because a parameter can be changed to another value at any time.\nYour code should "),e("em",[a._v("always")]),a._v(" use the current value from the parameter store.\nIf getting the latest version is not possible, then a reboot will be required after the parameter is changed (set this requirement using the "),e("code",[a._v("@reboot_required")]),a._v(" metadata).")]),a._v(" "),e("p",[a._v("In addition, the C++ version has also better type-safety and less overhead in terms of RAM.\nThe drawback is that the parameter name must be known at compile-time, while the C API can take a dynamically created name as a string.")]),a._v(" "),e("h4",{attrs:{id:"c-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-api"}},[a._v("#")]),a._v(" C++ API")]),a._v(" "),e("p",[a._v("The C++ API provides macros to declare parameters as "),e("em",[a._v("class attributes")]),a._v('.\nYou add some "boilerplate" code to regularly listen for changes in the '),e("RouterLink",{attrs:{to:"/en/middleware/uorb.html"}},[a._v("uORB Topic")]),a._v(" associated with "),e("em",[a._v("any")]),a._v(" parameter update.\nFramework code then (invisibly) handles tracking uORB messages that affect your parameter attributes and keeping them in sync.\nIn the rest of the code you can just use the defined parameter attributes and they will always be up to date!")],1),a._v(" "),e("p",[a._v("First include the required needed headers in the class header for your module or driver:")]),a._v(" "),e("ul",[e("li",[e("p",[e("strong",[a._v("px4_platform_common/module_params.h")]),a._v(" to get the "),e("code",[a._v("DEFINE_PARAMETERS")]),a._v(" macro:")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("<px4_platform_common/module_params.h>")])]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("parameter_update.h")]),a._v(" to access the uORB "),e("code",[a._v("parameter_update")]),a._v(" message:")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("<uORB/topics/parameter_update.h>")])]),a._v("\n")])])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("Subscription.hpp")]),a._v(" for the uORB C++ subscription API:")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("<uORB/Subscription.hpp>")])]),a._v("\n")])])])])]),a._v(" "),e("p",[a._v("Derive your class from "),e("code",[a._v("ModuleParams")]),a._v(", and use "),e("code",[a._v("DEFINE_PARAMETERS")]),a._v(" to specify a list of parameters and their associated parameter attributes.\nThe names of the parameters must be the same as their parameter metadata definitions.")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyModule")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token base-clause"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ModuleParams")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n\t * Check for parameter changes and update them if needed.\n\t */")]),a._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("parameters_update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("DEFINE_PARAMETERS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ParamInt"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("px4"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("params"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("SYS_AUTOSTART"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" _sys_autostart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**< example parameter */")]),a._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ParamFloat"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("px4"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("params"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("ATT_BIAS_MAX"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" _att_bias_max  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**< another parameter */")]),a._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Subscriptions")]),a._v("\n\tuORB"),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),a._v("SubscriptionInterval _parameter_update_sub"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ORB_ID")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("parameter_update"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("_s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("Update the cpp file with boilerplate to check for the uORB message related to parameter updates.")]),a._v(" "),e("p",[a._v("Call "),e("code",[a._v("parameters_update();")]),a._v(" periodically in code to check if there has been an update:")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Module")]),e("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[a._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("parameters_update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("_parameter_update_sub"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("updated")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t\tparameter_update_s param_update"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\t_parameter_update_sub"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("copy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("param_update"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// If any parameter updated, call updateParams() to check if")]),a._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// this class attributes need updating (and do so).")]),a._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("updateParams")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("In the above method:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("_parameter_update_sub.updated()")]),a._v(" tells us if there is "),e("em",[a._v("any")]),a._v(" update to the "),e("code",[a._v("param_update")]),a._v(" uORB message (but not what parameter is affected).")]),a._v(" "),e("li",[a._v('If there has been "some" parameter updated, we copy the update into a '),e("code",[a._v("parameter_update_s")]),a._v(" ("),e("code",[a._v("param_update")]),a._v("), to clear the pending update.")]),a._v(" "),e("li",[a._v("Then we call "),e("code",[a._v("ModuleParams::updateParams()")]),a._v('.\nThis "under the hood" updates all parameter attributes listed in our '),e("code",[a._v("DEFINE_PARAMETERS")]),a._v(" list.")])]),a._v(" "),e("p",[a._v("The parameter attributes ("),e("code",[a._v("_sys_autostart")]),a._v(" and "),e("code",[a._v("_att_bias_max")]),a._v(" in this case) can then be used to represent the parameters, and will be updated whenever the parameter value changes.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("The "),e("RouterLink",{attrs:{to:"/en/modules/module_template.html"}},[a._v("Application/Module Template")]),a._v(" uses the new-style C++ API but does not include "),e("a",{attrs:{href:"#parameter-metadata"}},[a._v("parameter metadata")]),a._v(".")],1)]),a._v(" "),e("h4",{attrs:{id:"c-api-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-api-2"}},[a._v("#")]),a._v(" C API")]),a._v(" "),e("p",[a._v("The C API can be used within both modules and drivers.")]),a._v(" "),e("p",[a._v("First include the parameter API:")]),a._v(" "),e("div",{staticClass:"language-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("<parameters/param.h>")])]),a._v("\n")])])]),e("p",[a._v("Then retrieve the parameter and assign it to a variable (here "),e("code",[a._v("my_param")]),a._v("), as shown below for "),e("code",[a._v("PARAM_NAME")]),a._v(".\nThe variable "),e("code",[a._v("my_param")]),a._v(" can then be used in your module code.")]),a._v(" "),e("div",{staticClass:"language-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("int32_t")]),a._v(" my_param "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_find")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PARAM_NAME"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("my_param"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),e("p",[a._v("If "),e("code",[a._v("PARAM_NAME")]),a._v(" was declared in parameter metadata then its default value will be set, and the above call to find the parameter should always succeed.")])]),a._v(" "),e("p",[e("code",[a._v("param_find()")]),a._v(' is an "expensive" operation, which returns a handle that can be used by '),e("code",[a._v("param_get()")]),a._v(".\nIf you're going to read the parameter multiple times, you may cache the handle and use it in "),e("code",[a._v("param_get()")]),a._v(" when needed")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[a._v("Get the handle to the parameter")])]),a._v("\nparam_t my_param_handle "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" PARAM_INVALID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nmy_param_handle "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_find")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PARAM_NAME"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[a._v("#")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[a._v("Query the value of the parameter when needed")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int32_t")]),a._v(" my_param "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("param_get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("my_param_handle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("my_param"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h3",{attrs:{id:"parameter-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameter-metadata"}},[a._v("#")]),a._v(" Parameter Metadata")]),a._v(" "),e("p",[a._v("PX4 uses an extensive parameter metadata system to drive the user-facing presentation of parameters, and to set the default value for each parameter in firmware.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Correct metadata is critical for good user experience in a ground station.")])]),a._v(" "),e("p",[a._v("Parameter metadata can be stored anywhere in the source tree as either "),e("strong",[a._v(".c")]),a._v(" or "),e("strong",[a._v(".yaml")]),a._v(" parameter definitions (the YAML definition is newer, and more flexible).\nTypically it is stored alongside its associated module.")]),a._v(" "),e("p",[a._v("The build system extracts the metadata (using "),e("code",[a._v("make parameters_metadata")]),a._v(") to build the "),e("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html"}},[a._v("parameter reference")]),a._v(" and the parameter information "),e("a",{attrs:{href:"#publishing-parameter-metadata-to-a-gcs"}},[a._v("used by ground stations")]),a._v(".")],1),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("After adding a "),e("em",[a._v("new")]),a._v(" parameter file you should call "),e("code",[a._v("make clean")]),a._v(" before building to generate the new parameters (parameter files are added as part of the "),e("em",[a._v("cmake")]),a._v(" configure step, which happens for clean builds and if a cmake file is modified).")])]),a._v(" "),e("h4",{attrs:{id:"yaml-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yaml-metadata"}},[a._v("#")]),a._v(" YAML Metadata")]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),e("p",[a._v("At time of writing YAML parameter definitions cannot be used in "),e("em",[a._v("libraries")]),a._v(".")])]),a._v(" "),e("p",[a._v("YAML meta data is intended as a full replacement for the "),e("strong",[a._v(".c")]),a._v(" definitions.\nIt supports all the same metadata, along with new features like multi-instance definitions.")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("The YAML parameter metadata schema is here: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("validation/module_schema.yaml"),e("OutboundLink")],1),a._v(".")])]),a._v(" "),e("li",[e("p",[a._v("An example of YAML definitions being used can be found in the MAVLink parameter definitions: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/mavlink/module.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("/src/modules/mavlink/module.yaml"),e("OutboundLink")],1),a._v(".")])]),a._v(" "),e("li",[e("p",[a._v("A YAML file is registered in the cmake build system by adding")]),a._v(" "),e("div",{staticClass:"language-cmake extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cmake"}},[e("code",[a._v("MODULE_CONFIG\n\tmodule.yaml\n")])])]),e("p",[a._v("to the "),e("code",[a._v("px4_add_module")]),a._v(" section of the "),e("code",[a._v("CMakeLists.txt")]),a._v(" file of that module.")])])]),a._v(" "),e("h4",{attrs:{id:"multi-instance-templated-yaml-meta-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-instance-templated-yaml-meta-data"}},[a._v("#")]),a._v(" Multi-Instance (Templated) YAML Meta Data")]),a._v(" "),e("p",[a._v("Templated parameter definitions are supported in "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("YAML parameter definitions"),e("OutboundLink")],1),a._v(" (templated parameter code is not supported).")]),a._v(" "),e("p",[a._v("The YAML allows you to define instance numbers in parameter names, descriptions, etc. using "),e("code",[a._v("${i}")]),a._v(".\nFor example, below will generate MY_PARAM_1_RATE, MY_PARAM_2_RATE etc.")]),a._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[a._v("MY_PARAM_$"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("_RATE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("description")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("short")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Maximum rate for instance $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("The following YAML definitions provide the start and end indexes.")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("num_instances")]),a._v(" (default 1): Number of instances to generate (>=1)")]),a._v(" "),e("li",[e("code",[a._v("instance_start")]),a._v(" (default 0): First instance number. If 0, "),e("code",[a._v("${i}")]),a._v(" expands to [0, N-1]`.")])]),a._v(" "),e("p",[a._v("For a full example see the MAVLink parameter definitions: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/mavlink/module.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("/src/modules/mavlink/module.yaml"),e("OutboundLink")],1)]),a._v(" "),e("h4",{attrs:{id:"c-parameter-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-parameter-metadata"}},[a._v("#")]),a._v(" c Parameter Metadata")]),a._v(" "),e("p",[a._v("The legacy approach for defining parameter metadata is in a file with extension "),e("strong",[a._v(".c")]),a._v(" (at time of writing this is the approach most commonly used in the source tree).")]),a._v(" "),e("p",[a._v("Parameter metadata sections look like the following examples:")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * Pitch P gain\n *\n * Pitch proportional gain, i.e. desired angular speed in rad/s for error 1 rad.\n *\n * @unit 1/s\n * @min 0.0\n * @max 10\n * @decimal 2\n * @increment 0.0005\n * @reboot_required true\n * @group Multicopter Attitude Control\n */")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("PARAM_DEFINE_FLOAT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MC_PITCH_P"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6.5f")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * Acceleration compensation based on GPS\n * velocity.\n *\n * @group Attitude Q estimator\n * @boolean\n */")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("PARAM_DEFINE_INT32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ATT_ACC_COMP"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("The "),e("code",[a._v("PARAM_DEFINE_*")]),a._v(" macro at the end specifies the type of parameter ("),e("code",[a._v("PARAM_DEFINE_FLOAT")]),a._v(" or "),e("code",[a._v("PARAM_DEFINE_INT32")]),a._v("), the name of the parameter (which must match the name used in code), and the default value in firmware.")]),a._v(" "),e("p",[a._v("The lines in the comment block are all optional, and are primarily used to control display and editing options within a ground station.\nThe purpose of each line is given below (for more detail see "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("module_schema.yaml"),e("OutboundLink")],1),a._v(").")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('/**\n * <title>\n *\n * <longer description, can be multi-line>\n *\n * @unit <the unit, e.g. m for meters>\n * @min <the minimum sane value. Can be overridden by the user>\n * @max <the maximum sane value. Can be overridden by the user>\n * @decimal <the minimum sane value. Can be overridden by the user>\n * @increment <the "ticks" in which this value will increment in the UI>\n * @reboot_required true <add this if changing the param requires a system restart.>\n * @boolean <add this for integer parameters that represent a boolean value>\n * @group <a title for parameters that form a group>\n */')]),a._v("\n")])])]),e("h2",{attrs:{id:"publishing-parameter-metadata-to-a-gcs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publishing-parameter-metadata-to-a-gcs"}},[a._v("#")]),a._v(" Publishing Parameter Metadata to a GCS")]),a._v(" "),e("p",[a._v("The parameter metadata JSON file is compiled into firmware (or hosted on the Internet), and made available to ground stations via the "),e("a",{attrs:{href:"https://mavlink.io/en/services/component_information.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("MAVLink Component Metadata service"),e("OutboundLink")],1),a._v(".\nThis ensures that metadata is always up-to-date with the code running on the vehicle.")]),a._v(" "),e("p",[a._v("This process is the same as for "),e("RouterLink",{attrs:{to:"/en/concept/events_interface.html#publishing-event-metadata-to-a-gcs"}},[a._v("events metadata")]),a._v(".\nFor more information see "),e("RouterLink",{attrs:{to:"/en/advanced/px4_metadata.html"}},[a._v("PX4 Metadata (Translation & Publication)")])],1),a._v(" "),e("h2",{attrs:{id:"further-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[a._v("#")]),a._v(" Further Information")]),a._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[a._v("Finding/Updating Parameters")])],1),a._v(" "),e("li",[e("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html"}},[a._v("Parameter Reference")])],1),a._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/platforms/common/include/px4_platform_common/param.h#L129",target:"_blank",rel:"noopener noreferrer"}},[a._v("Param implementation"),e("OutboundLink")],1),a._v(" (information on "),e("code",[a._v(".get()")]),a._v(", "),e("code",[a._v(".commit()")]),a._v(", and other methods)")])])])}),[],!1,null,null,null);t.default=r.exports}}]);