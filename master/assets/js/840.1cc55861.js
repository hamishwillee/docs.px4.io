(window.webpackJsonp=window.webpackJsonp||[]).push([[840],{1630:function(s,t,e){"use strict";e.r(t);var a=e(19),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"advanced-linux-installation-use-cases"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-linux-installation-use-cases"}},[s._v("#")]),s._v(" Advanced Linux Installation Use-Cases")]),s._v(" "),e("h2",{attrs:{id:"using-jtag-programming-adapters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-jtag-programming-adapters"}},[s._v("#")]),s._v(" Using JTAG Programming Adapters")]),s._v(" "),e("p",[s._v("Linux users need to explicitly allow access to the USB bus for JTAG programming adapters.")]),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v("For Archlinux: replace the group plugdev with uucp in the following commands")])]),s._v(" "),e("p",[s._v("Run a simple "),e("code",[s._v("ls")]),s._v(" in "),e("code",[s._v("sudo")]),s._v(" mode to ensure the commands below succeed:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])]),e("p",[s._v("Then with "),e("code",[s._v("sudo")]),s._v(" rights temporarily granted, run this command:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/rule.tmp "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('_EOF\n# All 3D Robotics (includes PX4) devices\nSUBSYSTEM=="usb", ATTR{idVendor}=="26AC", GROUP="plugdev"\n# FTDI (and Black Magic Probe) Devices\nSUBSYSTEM=="usb", ATTR{idVendor}=="0483", GROUP="plugdev"\n# Olimex Devices\nSUBSYSTEM=="usb",  ATTR{idVendor}=="15ba", GROUP="plugdev"\n_EOF')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/rule.tmp /etc/udev/rules.d/10-px4.rules\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/init.d/udev restart\n")])])]),e("p",[s._v("The user needs to be added to the group "),e("strong",[s._v("plugdev")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -a -G plugdev "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);