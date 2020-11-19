(window.webpackJsonp=window.webpackJsonp||[]).push([[782],{1599:function(e,t,r){"use strict";r.r(t);var a=r(18),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"silicon-errata"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#silicon-errata"}},[e._v("#")]),e._v(" Silicon Errata")]),e._v(" "),r("p",[e._v("This page lists known issues with silicon (hardware) errata of 3rd-party parts (micro controller, sensors, etc.) used on the Pixhawk board series. Depending on the type of silicon error, these cannot be fixed in software and might impose specific limitations.")]),e._v(" "),r("h2",{attrs:{id:"fmuv2-pixhawk-silicon-errata"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fmuv2-pixhawk-silicon-errata"}},[e._v("#")]),e._v(" FMUv2 / Pixhawk Silicon Errata")]),e._v(" "),r("h3",{attrs:{id:"stm32f427vit6-errata"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stm32f427vit6-errata"}},[e._v("#")]),e._v(" STM32F427VIT6 (errata)")]),e._v(" "),r("p",[e._v("Flash Bank 2 and full speed USB device exclusive.")]),e._v(" "),r("p",[e._v("Silicon revisions up to rev 2 (revision 3 is the first not affected) can produce errors / data corruption when accessing the 2nd flash bank while there is activity on PA12, which is one of the USB data lines. There is no workaround / software fix for this, except to not use the flash bank #2.\nSince USB is needed to program the device, Pixhawk revisions built with silicon revisions < rev 3 can only use up to 1MB of the 2MB flash of the microprocessor.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" The errata is fixed in later versions, but this may not be detected if you are using an older bootloader.\nSee "),r("RouterLink",{attrs:{to:"/en/config/firmware.html#bootloader"}},[e._v("Firmware > FMUv2 Bootloader Update")]),e._v(" for more information.")],1)]),e._v(" "),r("h2",{attrs:{id:"fmuv1-pixhawk-silicon-errata"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fmuv1-pixhawk-silicon-errata"}},[e._v("#")]),e._v(" FMUv1 / Pixhawk Silicon Errata")]),e._v(" "),r("p",[e._v("No known issues.")])])}),[],!1,null,null,null);t.default=i.exports}}]);