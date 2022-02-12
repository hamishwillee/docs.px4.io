(window.webpackJsonp=window.webpackJsonp||[]).push([[1231],{2303:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"고급-linux-사용-사례"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고급-linux-사용-사례"}},[s._v("#")]),s._v(" 고급 Linux 사용 사례")]),s._v(" "),a("h2",{attrs:{id:"jtag-프로그래밍-어댑터-사용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jtag-프로그래밍-어댑터-사용"}},[s._v("#")]),s._v(" JTAG 프로그래밍 어댑터 사용")]),s._v(" "),a("p",[s._v("Linux 사용자는 JTAG 프로그래밍 어댑터용 USB 버스에 대한 액세스를 허용하여야 합니다.")]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),a("p",[s._v("Archlinux의 경우: 다음 명령에서 그룹 plugdev를 uucp로 변경합니다.")])]),s._v(" "),a("p",[a("code",[s._v("sudo")]),s._v(" 모드에서 간단한 "),a("code",[s._v("ls")]),s._v("를 실행하여, 아래 명령이 실행되는 지 확인합니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])]),a("p",[s._v("그런 다음 "),a("code",[s._v("sudo")]),s._v(" 권한을 일시적으로 부여한 후에, 다음 명령을 실행합니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/rule.tmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('_EOF\n# All 3D Robotics (includes PX4) devices\nSUBSYSTEM=="usb", ATTR{idVendor}=="26AC", GROUP="plugdev"\n# FTDI (and Black Magic Probe) Devices\nSUBSYSTEM=="usb", ATTR{idVendor}=="0483", GROUP="plugdev"\n# Olimex Devices\nSUBSYSTEM=="usb",  ATTR{idVendor}=="15ba", GROUP="plugdev"\n_EOF')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/rule.tmp /etc/udev/rules.d/10-px4.rules\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/init.d/udev restart\n")])])]),a("p",[s._v("사용자를 "),a("strong",[s._v("plugdev")]),s._v(" 그룹에 추가하여야 합니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -a -G plugdev "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);