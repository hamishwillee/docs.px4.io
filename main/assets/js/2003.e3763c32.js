(window.webpackJsonp=window.webpackJsonp||[]).push([[2003],{3648:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vehicleairdata-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vehicleairdata-uorb-message"}},[t._v("#")]),t._v(" VehicleAirData (UORB message)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleAirData.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("\nuint64 timestamp            # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint64 timestamp_sample     # the timestamp of the raw "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint32 baro_device_id       # unique device ID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the selected barometer\n\nfloat32 baro_alt_meter          # Altitude above MSL calculated from temperature compensated baro sensor data using an ISA corrected "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" sea level pressure SENS_BARO_QNH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nfloat32 baro_temp_celcius       # Temperature in degrees Celsius\nfloat32 baro_pressure_pa        # Absolute pressure in Pascals\n\nfloat32 rho             # air density\n\nuint8 calibration_count     # Calibration changed counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Monotonically increases whenever calibration changes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);