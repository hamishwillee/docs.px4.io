(window.webpackJsonp=window.webpackJsonp||[]).push([[1906],{3421:function(a,t,e){"use strict";e.r(t);var s=e(19),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"사용자-설정-가능-직렬-포트-드라이버-제작"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용자-설정-가능-직렬-포트-드라이버-제작"}},[a._v("#")]),a._v(" 사용자 설정 가능 직렬 포트 드라이버 제작")]),a._v(" "),e("p",[a._v("비행 콘트롤러에서 설정 가능 직렬 포트에서 실행되도록 사용자가 (매개변수를 통하여) 구성할 수 있도록 직렬 드라이버를 설정하는 방법을 설명합니다.")]),a._v(" "),e("h2",{attrs:{id:"전제-조건"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[a._v("#")]),a._v(" 전제 조건")]),a._v(" "),e("p",[a._v("제공되는 드라이버를 사용하여, 쉘에서 다음 명령어로 시작합니다.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("driver_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" start -d "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("serial_port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-b "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("baudrate"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" -b p:"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("param_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("여기서,")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("-d")]),a._v(": serial port name.")]),a._v(" "),e("li",[e("code",[a._v("-b")]),a._v(": Baud rate (optional) if the driver supports multiple baud rates. If supported, the driver must allow you to specify the rate as both a bare baudrate and as a parameter name in the form "),e("code",[a._v("-b p:<param_name>")]),a._v(" (which can be parsed with "),e("code",[a._v("px4_get_parameter_value()")]),a._v("). :::tip See the "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/drivers/gps/gps.cpp#L1023",target:"_blank",rel:"noopener noreferrer"}},[a._v("gps driver"),e("OutboundLink")],1),a._v(" for an example.\n:::")])]),a._v(" "),e("h2",{attrs:{id:"설정-가능-드라이버-제작"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설정-가능-드라이버-제작"}},[a._v("#")]),a._v(" 설정 가능 드라이버 제작")]),a._v(" "),e("p",[a._v("드라이버를 설정 가능하게 하려면:")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Create a YAML module configuration file:")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Add a new file in the driver's source directory named "),e("strong",[a._v("module.yaml")])])]),a._v(" "),e("li",[e("p",[a._v("Insert the following text and adjust as needed:")]),a._v(" "),e("div",{staticClass:"language-cmake extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cmake"}},[e("code",[a._v("module_name: uLanding Radar\nserial_config:\n    - command: ulanding_radar start -d "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("${")]),a._v("SERIAL_DEV"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" -b p:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("${")]),a._v("BAUD_PARAM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n      port_config_param:\n        name: SENS_ULAND_CFG\n        group: Sensors\n")])])])])])])]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),e("p",[a._v("The full documentation of the module configuration file can be found in the "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("validation/module_schema.yaml"),e("OutboundLink")],1),a._v(" file. This is also used to validate all configuration files in CI.")])]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Add the module configuration to the "),e("strong",[a._v("CMakeLists.txt")]),a._v(" file for the driver module:")]),a._v(" "),e("div",{staticClass:"language-cmake extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cmake"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("px4_add_module")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n MODULE drivers__ulanding\n MAIN ulanding_radar\n SRCS\n     ulanding.cpp\n MODULE_CONFIG\n     module.yaml\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);