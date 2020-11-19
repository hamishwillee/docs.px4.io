(window.webpackJsonp=window.webpackJsonp||[]).push([[934],{1932:function(e,t,a){"use strict";a.r(t);var r=a(18),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frequently-asked-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[e._v("#")]),e._v(" Frequently Asked Questions")]),e._v(" "),a("h2",{attrs:{id:"build-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-errors"}},[e._v("#")]),e._v(" Build Errors")]),e._v(" "),a("h3",{attrs:{id:"flash-overflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flash-overflow"}},[e._v("#")]),e._v(" Flash Overflow")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" Use the FMUv4 architecture to obtain double the flash. The first available board from this generation is the "),a("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/pixracer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pixracer"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v('The amount of code that can be loaded onto a board is limited by the amount of flash memory it has. When adding additional modules or code its possible that the addition exceeds the flash memory. This will result in a "flash overflow". The upstream version will always build, but depending on what a developer adds it might overflow locally.')]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("region `flash' overflowed by "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("12456")]),e._v(" bytes\n")])])]),a("p",[e._v("To remedy it, either use more recent hardware or remove modules from the build which are not essential to your use case. The configurations are stored "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/cmake/configs",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". To remove a module, just comment it out:")]),e._v(" "),a("div",{staticClass:"language-cmake extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cmake"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#drivers/trone")]),e._v("\n")])])]),a("h2",{attrs:{id:"usb-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usb-errors"}},[e._v("#")]),e._v(" USB Errors")]),e._v(" "),a("h3",{attrs:{id:"the-upload-never-succeeds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-upload-never-succeeds"}},[e._v("#")]),e._v(" The upload never succeeds")]),e._v(" "),a("p",[e._v("On Ubuntu, uninstall the modem manager:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" remove modemmanager\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);