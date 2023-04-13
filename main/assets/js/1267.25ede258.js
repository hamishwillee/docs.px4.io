(window.webpackJsonp=window.webpackJsonp||[]).push([[1267],{2336:function(e,r,t){"use strict";t.r(r);var a=t(19),o=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"barometers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#barometers"}},[e._v("#")]),e._v(" Barometers")]),e._v(" "),t("p",[e._v("Barometers measure atmospheric pressure, and are used in drones as altitude sensors.")]),e._v(" "),t("p",[e._v("Most flight controller hardware on which PX4 incudes a barometer.\nBy default PX4 will select the barometer with the highest priority (if any are present), and configure it as a data source for "),t("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html#height"}},[e._v("Height estimation")]),e._v(".\nIf a sensor fault is detected, PX4 will fall back to the next highest priority sensor.")],1),e._v(" "),t("p",[e._v("Generally barometers require no user configuration (or thought)!")]),e._v(" "),t("h2",{attrs:{id:"hardware-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hardware-options"}},[e._v("#")]),e._v(" Hardware Options")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_pixhawk_standard.html"}},[e._v("Pixhawk standard")]),e._v(" flight controllers include a barometer, as do "),t("RouterLink",{attrs:{to:"/en/flight_controller/"}},[e._v("many others")]),e._v(".")],1),e._v(" "),t("p",[e._v("They are also present in other hardware:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://doc.cuav.net/gps/neo-series-gnss/en/neo-3-pro.html#key-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("CUAV NEO 3 Pro GNSS module"),t("OutboundLink")],1),e._v(" ("),t("RouterLink",{attrs:{to:"/en/modules/modules_driver_baro.html#ms5611"}},[e._v("MS5611")]),e._v(")")],1)]),e._v(" "),t("p",[e._v("The supported baro part numbers can be inferred from the driver names, which are listed in "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot/src/drivers/barometer"),t("OutboundLink")],1),e._v(" and from the "),t("RouterLink",{attrs:{to:"/en/modules/modules_driver_baro.html"}},[e._v("Modules Reference: Baro (Driver)")]),e._v(" documentation.\nAt time of writing, drivers/parts include: bmp280, bmp388 (and BMP380), dps310, goertek (spl06), invensense (icp10100, icp10111, icp101xx, icp201xx), lps22hb, lps25h, lps33hw, maiertek (mpc2520), mpl3115a2, ms5611, ms5837, tcbp001ta")],1),e._v(" "),t("h2",{attrs:{id:"px4-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),t("p",[e._v("Generally barometers require no user configuration.\nIf needed, you can:")]),e._v(" "),t("ul",[t("li",[e._v("Enable/Disable barometers as data source for "),t("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html#height"}},[e._v("Height estimation")]),e._v(" using the "),t("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_BARO_CTRL"}},[e._v("EKF2_BARO_CTRL")]),e._v(" parameter.")],1),e._v(" "),t("li",[e._v("Change the selection order of barometers using the "),t("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_BARO0_PRIO"}},[e._v("CAL_BAROx_PRIO")]),e._v(" parameters for each baro.")],1),e._v(" "),t("li",[e._v("Disable a baro by setting its "),t("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_BARO0_PRIO"}},[e._v("CAL_BAROx_PRIO")]),e._v(" value to "),t("code",[e._v("0")]),e._v(".")],1)]),e._v(" "),t("h2",{attrs:{id:"calibration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calibration"}},[e._v("#")]),e._v(" Calibration")]),e._v(" "),t("p",[e._v("Barometers don't require calibration.")]),e._v(" "),t("h2",{attrs:{id:"developer-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#developer-information"}},[e._v("#")]),e._v(" Developer Information")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Baro driver source code"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/en/modules/modules_driver_baro.html"}},[e._v("Modules Reference: Baro (Driver)")]),e._v(" documentation.")],1)])])}),[],!1,null,null,null);r.default=o.exports}}]);