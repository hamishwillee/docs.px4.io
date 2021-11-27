(window.webpackJsonp=window.webpackJsonp||[]).push([[698],{2809:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"airspeed-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airspeed-calibration"}},[e._v("#")]),e._v(" Airspeed Calibration")]),e._v(" "),a("p",[e._v("The airspeed calibration needs to read a stable baseline with 0 airspeed in order to determine an offset.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/sensor/airspeed.html"}},[e._v("Airspeed sensors")]),e._v(" are highly recommended for Fixed Wing and VTOL vehicles.")],1)]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("Unlike most other sensor drivers, the airspeed sensor drivers are not automatically started. Before calibration they must be "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("enabled via the corresponding parameter")]),e._v(":")],1),e._v(" "),a("ul",[a("li",[e._v("Sensirion SDP3X ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_SDP3X"}},[e._v("SENS_EN_SDP3X")]),e._v(")")],1),e._v(" "),a("li",[e._v("TE MS4525 ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_MS4525"}},[e._v("SENS_EN_MS4525")]),e._v(")")],1),e._v(" "),a("li",[e._v("TE MS5525 ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_MS5525"}},[e._v("SENS_EN_MS5525")]),e._v(")")],1),e._v(" "),a("li",[e._v("Eagle Tree airspeed sensor ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_ETSASPD"}},[e._v("SENS_EN_ETSASPD")]),e._v(")")],1)])]),e._v(" "),a("h2",{attrs:{id:"执行校准"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行校准"}},[e._v("#")]),e._v(" 执行校准")]),e._v(" "),a("p",[e._v("The airspeed calibration needs to read a stable baseline with 0 airspeed in order to determine an offset. Cup your hands over the pitot to block any wind (if calibrating the sensor indoors this is not needed) and then blow into the tube using your mouth (to signal completion of the calibration).")]),e._v(" "),a("p",[e._v("To calibrate the airspeed sensor:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("打开 "),a("em",[e._v("QGroundControl")]),e._v(" 并连接上飞机。")])]),e._v(" "),a("li",[a("p",[e._v("Enable the airspeed sensors if not already done (as in "),a("em",[e._v("warning")]),e._v(" above).")])]),e._v(" "),a("li",[a("p",[e._v("Select the "),a("strong",[e._v("Gear")]),e._v(" icon (Vehicle Setup) in the top toolbar and then "),a("strong",[e._v("Sensors")]),e._v(" in the sidebar.")])]),e._v(" "),a("li",[a("p",[e._v("Click the "),a("strong",[e._v("Airspeed")]),e._v(" sensor button.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(630),alt:"Airspeed calibration"}})])]),e._v(" "),a("li",[a("p",[e._v("Shield the sensor from the wind (i.e. cup it with your hand). Take care not to block any of its holes.")])]),e._v(" "),a("li",[a("p",[e._v("Click "),a("strong",[e._v("OK")]),e._v(" to start the calibration.")])]),e._v(" "),a("li",[a("p",[e._v("Once asked for, blow into the tip of the pitot tube to signal the end of calibration.")])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("Blowing into the tube is also a basic check that the dynamic and static ports are installed correctly. If they are swapped then the sensor will read a large negative differential pressure when you blow into the tube, and the calibration will abort with an error.")])]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Wait for 2-3 seconds before removing the covering (calibration completes silently after several seconds)")])]),e._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/sensors_px4.html#airspeed",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl User Guide > Sensors"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports},630:function(e,t,r){e.exports=r.p+"assets/img/sensor_airspeed.f6803c33.jpg"}}]);