(window.webpackJsonp=window.webpackJsonp||[]).push([[1325],{2452:function(a,e,t){"use strict";t.r(e);var r=t(19),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"making-serial-port-drivers-user-configurable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#making-serial-port-drivers-user-configurable"}},[a._v("#")]),a._v(" Making Serial Port Drivers User-Configurable")]),a._v(" "),t("p",[a._v("This topic explains how to set up a serial driver so that it can be end-user configured (via parameters) to run on any of a flight controller board's configurable serial ports.")]),a._v(" "),t("h2",{attrs:{id:"preconditions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[a._v("#")]),a._v(" Preconditions")]),a._v(" "),t("p",[a._v("The driver is assumed to already exist, and be started in the shell using the command syntax:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("driver_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" start -d "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("serial_port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("baudrate"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" -b p:"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("param_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("where,")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("-d")]),a._v(": serial port name.")]),a._v(" "),t("li",[t("code",[a._v("-b")]),a._v(": Baud rate (optional) if the driver supports multiple baud rates.\nIf supported, the driver must allow you to specify the rate as both a bare baudrate and as a parameter name in the form "),t("code",[a._v("-b p:<param_name>")]),a._v(" (which can be parsed with "),t("code",[a._v("px4_get_parameter_value()")]),a._v(")."),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("See the "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/drivers/gps/gps.cpp#L1023",target:"_blank",rel:"noopener noreferrer"}},[a._v("gps driver"),t("OutboundLink")],1),a._v(" for an example.")])])])]),a._v(" "),t("h2",{attrs:{id:"making-the-driver-configurable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#making-the-driver-configurable"}},[a._v("#")]),a._v(" Making the Driver Configurable")]),a._v(" "),t("p",[a._v("To make driver configurable:")]),a._v(" "),t("ol",[t("li",[a._v("Create a YAML module configuration file:\n"),t("ul",[t("li",[a._v("Add a new file in the driver's source directory named "),t("strong",[a._v("module.yaml")])]),a._v(" "),t("li",[a._v("Insert the following text and adjust as needed:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("module_name: uLanding Radar\nserial_config:\n    - command: ulanding_radar start -d ${SERIAL_DEV} -b p:${BAUD_PARAM}\n      port_config_param:\n        name: SENS_ULAND_CFG\n        group: Sensors\n")])])])])]),a._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),t("p",[a._v("The full documentation of the module configuration file can be found in the "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("validation/module_schema.yaml"),t("OutboundLink")],1),a._v(" file.\nThis is also used to validate all configuration files in CI.")])])]),a._v(" "),t("li",[a._v("Add the module configuration to the "),t("strong",[a._v("CMakeLists.txt")]),a._v(" file for the driver module:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("px4_add_module(\n\tMODULE drivers__ulanding\n\tMAIN ulanding_radar\n\tSRCS\n\t\tulanding.cpp\n\tMODULE_CONFIG\n\t\tmodule.yaml\n\t)\n")])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);