(window.webpackJsonp=window.webpackJsonp||[]).push([[807],{1629:function(t,e,a){"use strict";a.r(e);var i=a(18),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"silicon-errata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#silicon-errata"}},[t._v("#")]),t._v(" Silicon Errata")]),t._v(" "),a("p",[t._v("This page lists known issues with silicon (hardware) errata of 3rd-party parts (micro controller, sensors, etc.) used on the Pixhawk board series. Depending on the type of silicon error, these cannot be fixed in software and might impose specific limitations.")]),t._v(" "),a("h2",{attrs:{id:"fmuv2-pixhawk-silicon-errata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fmuv2-pixhawk-silicon-errata"}},[t._v("#")]),t._v(" FMUv2 / Pixhawk Silicon Errata")]),t._v(" "),a("h3",{attrs:{id:"stm32f427vit6-errata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stm32f427vit6-errata"}},[t._v("#")]),t._v(" STM32F427VIT6 (errata)")]),t._v(" "),a("p",[t._v("Flash Bank 2 and full speed USB device exclusive.")]),t._v(" "),a("p",[t._v("Silicon revisions up to rev 2 (revision 3 is the first not affected) can produce errors / data corruption when accessing the 2nd flash bank while there is activity on PA12, which is one of the USB data lines. There is no workaround / software fix for this, except to not use the flash bank #2.\nSince USB is needed to program the device, Pixhawk revisions built with silicon revisions < rev 3 can only use up to 1MB of the 2MB flash of the microprocessor.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The errata is fixed in later versions, but this may not be detected if you are using an older bootloader.\nSee "),a("RouterLink",{attrs:{to:"/en/config/firmware.html#bootloader"}},[t._v("Firmware > FMUv2 Bootloader Update")]),t._v(" for more information.")],1)]),t._v(" "),a("h2",{attrs:{id:"fmuv1-pixhawk-silicon-errata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fmuv1-pixhawk-silicon-errata"}},[t._v("#")]),t._v(" FMUv1 / Pixhawk Silicon Errata")]),t._v(" "),a("p",[t._v("No known issues.")])])}),[],!1,null,null,null);e.default=r.exports}}]);