(window.webpackJsonp=window.webpackJsonp||[]).push([[1130],{2363:function(s,t,a){"use strict";a.r(t);var e=a(18),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"高级-linux-安装用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级-linux-安装用例"}},[s._v("#")]),s._v(" 高级 Linux 安装用例")]),s._v(" "),a("h2",{attrs:{id:"使用-jtag-编程调试器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-jtag-编程调试器"}},[s._v("#")]),s._v(" 使用 JTAG 编程调试器")]),s._v(" "),a("p",[s._v("Linux 用户需要为 JTAG 调试器接入 USB 总线开放权限。")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("Note")]),s._v(" 对于 Archlinux：使用如下命令将 plugdev 组替换成 uucp")])]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("sudo")]),s._v(" 模式运行 "),a("code",[s._v("ls")]),s._v("，确保命令成功运行：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])]),a("p",[s._v("然后，暂时授予 "),a("code",[s._v("sudo")]),s._v(" 权限，运行此命令：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/rule.tmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('_EOF\n# All 3D Robotics (includes PX4) devices\nSUBSYSTEM=="usb", ATTR{idVendor}=="26AC", GROUP="plugdev"\n# FTDI (and Black Magic Probe) Devices\nSUBSYSTEM=="usb", ATTR{idVendor}=="0483", GROUP="plugdev"\n# Olimex Devices\nSUBSYSTEM=="usb",  ATTR{idVendor}=="15ba", GROUP="plugdev"\n_EOF')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/rule.tmp /etc/udev/rules.d/10-px4.rules\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/init.d/udev restart\n")])])]),a("p",[s._v("将当前用户添加到组 "),a("strong",[s._v("plugdev")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -a -G plugdev "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);