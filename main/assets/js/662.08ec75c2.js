(window.webpackJsonp=window.webpackJsonp||[]).push([[662],{1482:function(e,t,s){e.exports=s.p+"assets/img/tfi2cadt01a_both_sides.8efe54f9.jpg"},1483:function(e,t,s){e.exports=s.p+"assets/img/tfi2cadt01_multi_tfrpm01.0edb50c8.jpg"},3860:function(e,t,s){"use strict";s.r(t);var a=s(19),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"tfi2cadt01-i2c-address-translator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tfi2cadt01-i2c-address-translator"}},[e._v("#")]),e._v(" TFI2CADT01 - I²C Address Translator")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TFI2CADT01",target:"_blank",rel:"noopener noreferrer"}},[e._v("TFI2CADT01"),a("OutboundLink")],1),e._v(" is an address translator module that is compatible with Pixhawk and PX4.")]),e._v(" "),a("p",[e._v("Address translation allows multiple I2C devices with the same address to coexist on an I2C network. The module may be needed if using several devices that have the same hard-coded address.")]),e._v(" "),a("p",[e._v("The module has an input and an output side. A sensor is connected to the master device on one side. On the output side sensors, whose addresses are to be translated, can be connected. The module contains two pairs of connectors, each pair responsible for different translations.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(1482),alt:"TFI2CADT - i2c address translator"}})]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TFI2CADT01",target:"_blank",rel:"noopener noreferrer"}},[e._v("TFI2CADT01"),a("OutboundLink")],1),e._v(" is designed as open-source hardware with GPLv3 license. It is commercially available from "),a("a",{attrs:{href:"https://www.thunderfly.cz/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ThunderFly"),a("OutboundLink")],1),e._v(" company or from "),a("a",{attrs:{href:"https://www.tindie.com/products/thunderfly/tfi2cadt01-i2c-address-translator/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tindie eshop"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"address-translation-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#address-translation-method"}},[e._v("#")]),e._v(" Address Translation Method")]),e._v(" "),a("p",[e._v("TFI2CADT01 performs an XOR operation on the called address. Therefore, a new device address can be found by taking the original address and applying an XOR operation with the value specified on the module. By default, the output 1 performs XOR with 0x08 value and the second port with 0x78. By short-circuiting the solder jumper you can change the XOR value to 0x0f for the first and 0x7f for the second port.")]),e._v(" "),a("p",[e._v("If you need your own value for address translation, changing the configuration resistors makes it possible to set any XOR value.")]),e._v(" "),a("h2",{attrs:{id:"example-of-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-use"}},[e._v("#")]),e._v(" Example of Use")]),e._v(" "),a("p",[e._v("The tachometer sensor "),a("RouterLink",{attrs:{to:"/zh/sensor/thunderfly_tachometer.html"}},[e._v("TFRPM01")]),e._v(" can be set to two different addresses using a solder jumper. If the autopilot has three buses, only 6 sensors can be connected and no bus remains free (2 available addresses * 3 I2C ports). In some multicopters or VTOL solutions, there is a need to measure the RPM of 8 or more elements. The "),a("a",{attrs:{href:"https://www.tindie.com/products/thunderfly/tfi2cadt01-i2c-address-translator/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TFI2CADT01"),a("OutboundLink")],1),e._v(" is highly recommended in this case.")],1),e._v(" "),a("p",[a("img",{attrs:{src:s(1483),alt:"Multiple sensors"}})]),e._v(" "),a("p",[e._v("The following scheme shows how to connect 6 TFRPM01 to one autopilot bus. By adding another TFI2CADT01, 4 more devices can be connected to the same bus.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNptkd9rwjAQx_-VcE8dtJB2ukEfBLEWfJCJy8CHvgRznQH7gzSBDfF_33VZB2oCyf3I576XcBc4dgohh08j-xMTRdUyWuX2I6LNErY7zJh0tuv1ubNP_7csSRZsudlHS22GHlGxAduhM3fEfrdNI1GS4emK8a85fwSyGyC9A0S5yVbrg_DZKfLtCxH9JsjhaU7VvI7pfK3_NCg_NXmO3pwl5uYt9D0yAXoWoFNP4yM9H-kspJ0FtF8CdObpURtiaNA0UisaymWsrsCesMEKcnIV1tKdbQVVeyXU9UpaXCttOwO5NQ5jGKf1_t0ep9gzhZY04sYnrz9BI4mU",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://mermaid.ink/img/pako:eNptkd9rwjAQx_-VcE8dtJB2ukEfBLEWfJCJy8CHvgRznQH7gzSBDfF_33VZB2oCyf3I576XcBc4dgohh08j-xMTRdUyWuX2I6LNErY7zJh0tuv1ubNP_7csSRZsudlHS22GHlGxAduhM3fEfrdNI1GS4emK8a85fwSyGyC9A0S5yVbrg_DZKfLtCxH9JsjhaU7VvI7pfK3_NCg_NXmO3pwl5uYt9D0yAXoWoFNP4yM9H-kspJ0FtF8CdObpURtiaNA0UisaymWsrsCesMEKcnIV1tKdbQVVeyXU9UpaXCttOwO5NQ5jGKf1_t0ep9gzhZY04sYnrz9BI4mU",alt:"Connection of multiple sensors"}}),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("TFI2CADT01 does not contain any I2C buffer or accelerator. As it adds additional capacitance on the bus, we advise combining it with some bus booster, e.g. [TFI2CEXT01](https://github.com/ThunderFly-aerospace/TFI2CEXT01).")])]),e._v(" "),a("h3",{attrs:{id:"other-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-resources"}},[e._v("#")]),e._v(" Other Resources")]),e._v(" "),a("ul",[a("li",[e._v("Datasheet of "),a("a",{attrs:{href:"https://www.analog.com/media/en/technical-documentation/data-sheets/4317fa.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("LTC4317"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);