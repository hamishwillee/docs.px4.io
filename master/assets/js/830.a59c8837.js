(window.webpackJsonp=window.webpackJsonp||[]).push([[830],{1612:function(e,a,s){"use strict";s.r(a);var t=s(19),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"frequently-asked-questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[e._v("#")]),e._v(" Frequently Asked Questions")]),e._v(" "),s("h2",{attrs:{id:"build-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-errors"}},[e._v("#")]),e._v(" Build Errors")]),e._v(" "),s("h3",{attrs:{id:"flash-overflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flash-overflow"}},[e._v("#")]),e._v(" Flash Overflow")]),e._v(" "),s("p",[e._v('The amount of code that can be loaded onto a board is limited by the amount of flash memory it has.\nWhen adding additional modules or code its possible that the addition exceeds the flash memory.\nThis will result in a "flash overflow". The upstream version will always build, but depending on what a developer adds it might overflow locally.')]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("region `flash' overflowed by "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("12456")]),e._v(" bytes\n")])])]),s("p",[e._v("To remedy it, either use more recent hardware or remove modules from the build which are not essential to your use case.\nThe configuration is stored in "),s("strong",[e._v("/PX4-Autopilot/boards/px4")]),e._v(" (e.g. "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.px4board",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot/boards/px4/fmu-v5/default.px4board"),s("OutboundLink")],1),e._v(").\nTo remove a module, just comment it out:")]),e._v(" "),s("div",{staticClass:"language-cmake extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cmake"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#tune_control")]),e._v("\n")])])]),s("h4",{attrs:{id:"identifying-large-memory-consumers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#identifying-large-memory-consumers"}},[e._v("#")]),e._v(" Identifying large memory consumers")]),e._v(" "),s("p",[e._v("The command below will list the largest static allocations:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("arm-none-eabi-nm --size-sort --print-size --radix"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("dec build/px4_fmu-v5_default/px4_fmu-v5_default.elf "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('" [bBdD] "')]),e._v("\n")])])]),s("h2",{attrs:{id:"usb-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usb-errors"}},[e._v("#")]),e._v(" USB Errors")]),e._v(" "),s("h3",{attrs:{id:"the-upload-never-succeeds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-upload-never-succeeds"}},[e._v("#")]),e._v(" The upload never succeeds")]),e._v(" "),s("p",[e._v("On Ubuntu, uninstall the modem manager:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" remove modemmanager\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);