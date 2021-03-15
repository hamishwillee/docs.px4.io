(window.webpackJsonp=window.webpackJsonp||[]).push([[876],{1788:function(e,r,t){"use strict";t.r(r);var a=t(18),n=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"teraranger-rangefinders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#teraranger-rangefinders"}},[e._v("#")]),e._v(" TeraRanger Rangefinders")]),e._v(" "),t("p",[e._v("TeraRanger provide a number of lightweight distance measurement sensor based on infrared Time-of-Flight (ToF) technology.\nThey are typically faster and have greater range than sonar, and smaller and lighter than laser-based systems.")]),e._v(" "),t("p",[e._v("PX4 supports:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.terabee.com/shop/lidar-tof-range-finders/teraranger-one/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TeraRanger One"),t("OutboundLink")],1),e._v(" (0.2 - 14 m) (Requires an "),t("a",{attrs:{href:"https://www.terabee.com/shop/accessories/i2c-adapter-for-teraranger-one/",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2C adapter"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.terabee.com/shop/lidar-tof-range-finders/teraranger-evo-60m/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TeraRanger Evo 60m"),t("OutboundLink")],1),e._v(" (0.5 – 60 m)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.terabee.com/shop/lidar-tof-range-finders/teraranger-evo-600hz/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TeraRanger Evo 600Hz"),t("OutboundLink")],1),e._v(" (0.75 - 8 m)")])]),e._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("The "),t("em",[e._v("Terranger One")]),e._v(" is used in the "),t("RouterLink",{attrs:{to:"/en/flight_controller/snapdragon_flight.html"}},[e._v("Qualcomm Snapdragon Flight")]),e._v(".")],1)]),e._v(" "),t("h2",{attrs:{id:"where-to-buy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),t("ul",[t("li",[e._v("TBD")])]),e._v(" "),t("h2",{attrs:{id:"pinouts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pinouts"}},[e._v("#")]),e._v(" Pinouts")]),e._v(" "),t("h2",{attrs:{id:"wiring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),t("p",[e._v("All TeraRanger sensors must be connected via the I2C bus.")]),e._v(" "),t("p",[e._v("While TeraRanger One requires an "),t("a",{attrs:{href:"https://www.terabee.com/shop/accessories/i2c-adapter-for-teraranger-one/",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2C adapter"),t("OutboundLink")],1),e._v(" any sensor from TeraRanger Evo series can be connected directly to the autopilot.")]),e._v(" "),t("h2",{attrs:{id:"software-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#software-configuration"}},[e._v("#")]),e._v(" Software Configuration")]),e._v(" "),t("p",[e._v("The sensors are enabled using the parameter "),t("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_EN_TRANGER"}},[e._v("SENS_EN_TRANGER")]),e._v(" (you can set the type of sensor or that PX4 should auto-detect the type).")],1),e._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("If using auto-detect for Evo sensors the minimum and maximum values for the range are set to the lowest and highest possible readings across the Evo family (currently 0.5 - 60 m).\nIn order to use the correct max/min values the appropriate model of the Evo sensor should be set in the parameter (instead of using autodetect).")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("The driver for this rangefinder is usually present in firmware. If missing, you would also need to add the driver ("),t("code",[e._v("distance_sensor/teraranger")]),e._v(") to the board configuration.")])]),e._v(" "),t("h2",{attrs:{id:"further-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/en/modules/modules_driver_distance_sensor.html#teraranger"}},[e._v("Modules Reference: Distance Sensor (Driver) : teraranger")])],1)])])}),[],!1,null,null,null);r.default=n.exports}}]);