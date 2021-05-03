(window.webpackJsonp=window.webpackJsonp||[]).push([[1323],{2744:function(a,t,e){"use strict";e.r(t);var s=e(18),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"将串口驱动程序设计为用户可配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将串口驱动程序设计为用户可配置"}},[a._v("#")]),a._v(" 将串口驱动程序设计为用户可配置")]),a._v(" "),e("p",[a._v("本主题介绍了如何设置一个串行驱动程序，使其能够被最终用户配置(通过参数) 在飞行控制器板的任何可配置串行端口上运行。")]),a._v(" "),e("h2",{attrs:{id:"操作前提"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作前提"}},[a._v("#")]),a._v(" 操作前提")]),a._v(" "),e("p",[a._v("假定驱动程序已经存在，并使用命令语法在shell中启动:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("driver_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" start -d "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("serial_port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-b "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("baudrate"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" -b p:"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("param_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("上述命令中：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("-d")]),a._v("：串口名称")]),a._v(" "),e("li",[e("code",[a._v("-b")]),a._v("：波特率(可选) 如果驱动程序支持多个波特率。 如果支持，驱动程序必须允许您在"),e("code",[a._v("-b p:<param_name>")]),a._v("(可以用"),e("code",[a._v("px4_get_parameter_value()")]),a._v("解析) 中将速率指定为一个baudrate和一个参数名。 >"),e("strong",[a._v("提示")]),a._v("参考以"),e("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/src/drivers/gps/gps.cpp#L1023",target:"_blank",rel:"noopener noreferrer"}},[a._v("Gps驱动"),e("OutboundLink")],1),a._v("为例。\n:::")])]),a._v(" "),e("h2",{attrs:{id:"使驱动程序可配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使驱动程序可配置"}},[a._v("#")]),a._v(" 使驱动程序可配置")]),a._v(" "),e("p",[a._v("使驱动程序可配置：")]),a._v(" "),e("ol",[e("li",[a._v("创建一个YAML模块配置文件\n"),e("ul",[e("li",[a._v("在驱动文件目录中新建一个名为"),e("strong",[a._v("module.yaml")]),a._v("的文件。")]),a._v(" "),e("li",[a._v("插入以下文本并根据需要进行调整： ``` module_name: uLanding Radar serial_config:"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('command: ulanding_radar start -d ${SERIAL_DEV} -b p:${BAUD_PARAM} port_config_param: name: SENS_ULAND_CFG group: Sensors ``` &#062; <strong x-id="1">Note</strong> The full documentation of the module configuration file can be found in the <a href="https://github.com/PX4/Firmware/blob/master/validation/module_schema.yaml">validation/module_schema.yaml</a> file. This is also used to validate all configuration files in CI.\n')])])])])])])]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("注解")]),a._v(" "),e("p",[a._v("The full documentation of the module configuration file can be found in the "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("validation/module_schema.yaml"),e("OutboundLink")],1),a._v(" file. This is also used to validate all configuration files in CI.")])]),a._v(" "),e("ol",[e("li",[a._v("将模块配置添加到名为"),e("strong",[a._v("CMakeLists.txt")]),a._v("的驱动模块文件中: px4_add_module( MODULE drivers__ulanding MAIN ulanding_radar SRCS ulanding.cpp MODULE_CONFIG module.yaml )"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("px4_add_module(\n MODULE drivers__ulanding\n MAIN ulanding_radar\n SRCS\n     ulanding.cpp\n MODULE_CONFIG\n     module.yaml\n )\n")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);