(window.webpackJsonp=window.webpackJsonp||[]).push([[1201],{2454:function(s,t,e){"use strict";e.r(t);var a=e(18),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"高级-linux-安装用例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级-linux-安装用例"}},[s._v("#")]),s._v(" 高级 Linux 安装用例")]),s._v(" "),e("h2",{attrs:{id:"使用-jtag-编程调试器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-jtag-编程调试器"}},[s._v("#")]),s._v(" 使用 JTAG 编程调试器")]),s._v(" "),e("p",[s._v("Linux 用户需要为 JTAG 调试器接入 USB 总线开放权限。")]),s._v(" "),e("p",[s._v("使用 "),e("code",[s._v("sudo")]),s._v(" 模式运行 "),e("code",[s._v("ls")]),s._v("，确保命令成功运行：")]),s._v(" "),e("p",[s._v("然后，暂时授予 "),e("code",[s._v("sudo")]),s._v(" 权限，运行此命令：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])]),e("p",[s._v("将当前用户添加到组 "),e("strong",[s._v("plugdev")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/rule.tmp "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('_EOF\n# All 3D Robotics (includes PX4) devices\nSUBSYSTEM=="usb", ATTR{idVendor}=="26AC", GROUP="plugdev"\n# FTDI (and Black Magic Probe) Devices\nSUBSYSTEM=="usb", ATTR{idVendor}=="0483", GROUP="plugdev"\n# Olimex Devices\nSUBSYSTEM=="usb",  ATTR{idVendor}=="15ba", GROUP="plugdev"\n_EOF')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/rule.tmp /etc/udev/rules.d/10-px4.rules\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/init.d/udev restart\n")])])]),e("p",[s._v("The user needs to be added to the group "),e("strong",[s._v("plugdev")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -a -G plugdev "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);