(window.webpackJsonp=window.webpackJsonp||[]).push([[540],{1478:function(e,t,s){e.exports=s.p+"assets/img/tfi2cadt01a_both_sides.8efe54f9.jpg"},1479:function(e,t,s){e.exports=s.p+"assets/img/tfi2cadt01_multi_tfrpm01.0edb50c8.jpg"},2394:function(e,t,s){"use strict";s.r(t);var r=s(19),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"tfi2cadt01-i2c-address-translator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tfi2cadt01-i2c-address-translator"}},[e._v("#")]),e._v(" TFI2CADT01 - I²C Address Translator")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TFI2CADT01",target:"_blank",rel:"noopener noreferrer"}},[e._v("TFI2CADT01"),r("OutboundLink")],1),e._v(" is an address translator module that is compatible with Pixhawk and PX4.")]),e._v(" "),r("p",[e._v("Address translation allows multiple I2C devices with the same address to coexist on an I2C network.\nThe module may be needed if using several devices that have the same hard-coded address.")]),e._v(" "),r("p",[e._v("The module has an input and an output side.\nA sensor is connected to the master device on one side.\nOn the output side sensors, whose addresses are to be translated, can be connected.\nThe module contains two pairs of connectors, each pair responsible for different translations.")]),e._v(" "),r("p",[r("img",{attrs:{src:s(1478),alt:"TFI2CADT - i2c address translator"}})]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TFI2CADT01",target:"_blank",rel:"noopener noreferrer"}},[e._v("TFI2CADT01"),r("OutboundLink")],1),e._v(" is designed as open-source hardware with GPLv3 license.\nIt is commercially available from "),r("a",{attrs:{href:"https://www.thunderfly.cz/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ThunderFly"),r("OutboundLink")],1),e._v(" company or from "),r("a",{attrs:{href:"https://www.tindie.com/products/thunderfly/tfi2cadt01-i2c-address-translator/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tindie eshop"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"address-translation-method"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#address-translation-method"}},[e._v("#")]),e._v(" Address Translation Method")]),e._v(" "),r("p",[e._v("TFI2CADT01 performs an XOR operation on the called address.\nTherefore, a new device address can be found by taking the original address and applying an XOR operation with the value specified on the module.\nBy default, the output 1 performs XOR with 0x08 value and the second port with 0x78.\nBy short-circuiting the solder jumper you can change the XOR value to 0x0f for the first and 0x7f for the second port.")]),e._v(" "),r("p",[e._v("If you need your own value for address translation, changing the configuration resistors makes it possible to set any XOR value.")]),e._v(" "),r("h2",{attrs:{id:"example-of-use"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-of-use"}},[e._v("#")]),e._v(" Example of Use")]),e._v(" "),r("p",[e._v("The tachometer sensor "),r("RouterLink",{attrs:{to:"/en/sensor/thunderfly_tachometer.html"}},[e._v("TFRPM01")]),e._v(" can be set to two different addresses using a solder jumper.\nIf the autopilot has three buses, only 6 sensors can be connected and no bus remains free (2 available addresses * 3 I2C ports).\nIn some multicopters or VTOL solutions, there is a need to measure the RPM of 8 or more elements.\nThe "),r("a",{attrs:{href:"https://www.tindie.com/products/thunderfly/tfi2cadt01-i2c-address-translator/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TFI2CADT01"),r("OutboundLink")],1),e._v(" is highly recommended in this case.")],1),e._v(" "),r("p",[r("img",{attrs:{src:s(1479),alt:"Multiple sensors"}})]),e._v(" "),r("p",[e._v("The following scheme shows how to connect 6 TFRPM01 to one autopilot bus.\nBy adding another TFI2CADT01, 4 more devices can be connected to the same bus.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNptkd9rwjAQx_-VcE8dtJB2ukEfBLEWfJCJy8CHvgRznQH7gzSBDfF_33VZB2oCyf3I576XcBc4dgohh08j-xMTRdUyWuX2I6LNErY7zJh0tuv1ubNP_7csSRZsudlHS22GHlGxAduhM3fEfrdNI1GS4emK8a85fwSyGyC9A0S5yVbrg_DZKfLtCxH9JsjhaU7VvI7pfK3_NCg_NXmO3pwl5uYt9D0yAXoWoFNP4yM9H-kspJ0FtF8CdObpURtiaNA0UisaymWsrsCesMEKcnIV1tKdbQVVeyXU9UpaXCttOwO5NQ5jGKf1_t0ep9gzhZY04sYnrz9BI4mU",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://mermaid.ink/img/pako:eNptkd9rwjAQx_-VcE8dtJB2ukEfBLEWfJCJy8CHvgRznQH7gzSBDfF_33VZB2oCyf3I576XcBc4dgohh08j-xMTRdUyWuX2I6LNErY7zJh0tuv1ubNP_7csSRZsudlHS22GHlGxAduhM3fEfrdNI1GS4emK8a85fwSyGyC9A0S5yVbrg_DZKfLtCxH9JsjhaU7VvI7pfK3_NCg_NXmO3pwl5uYt9D0yAXoWoFNP4yM9H-kspJ0FtF8CdObpURtiaNA0UisaymWsrsCesMEKcnIV1tKdbQVVeyXU9UpaXCttOwO5NQ5jGKf1_t0ep9gzhZY04sYnrz9BI4mU",alt:"Connection of multiple sensors"}}),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("TFI2CADT01 does not contain any I2C buffer or accelerator.\nAs it adds additional capacitance on the bus, we advise combining it with some bus booster, e.g. "),r("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TFI2CEXT01",target:"_blank",rel:"noopener noreferrer"}},[e._v("TFI2CEXT01"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"other-resources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-resources"}},[e._v("#")]),e._v(" Other Resources")]),e._v(" "),r("ul",[r("li",[e._v("Datasheet of "),r("a",{attrs:{href:"https://www.analog.com/media/en/technical-documentation/data-sheets/4317fa.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("LTC4317"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);