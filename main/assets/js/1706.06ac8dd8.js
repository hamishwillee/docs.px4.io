(window.webpackJsonp=window.webpackJsonp||[]).push([[1706],{3125:function(t,e,a){"use strict";a.r(e);var r=a(19),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"imu-factory-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imu-factory-calibration"}},[t._v("#")]),t._v(" IMU Factory Calibration")]),t._v(" "),a("p",[t._v("PX4 OEM manufacturers can perform an IMU factory calibration in order to store persistent values for the accelerometer, gyroscope and magnetometer biases into persistent storage (usually EEPROM). This ensures that end users can always reset vehicle configurations and tuning to a safe state for flying.")]),t._v(" "),a("p",[t._v("This procedure will write the following parameters to "),a("code",[t._v("/fs/mtd_caldata")]),t._v(": "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_ACC0_ID"}},[t._v("CAL_ACC*")]),t._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_MAG0_ID"}},[t._v("CAL_MAG*")]),t._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_GYRO0_ID"}},[t._v("CAL_GYRO*")]),t._v(". This data will then be used when the parameters are set (or reset) to their default values.")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("This feature relies on the FMU having a dedicated EEPROM chip or an accompanying IMU PCBA that has sufficient space for the data. PX4 will store the data to "),a("code",[t._v("/fs/mtd_caldata")]),t._v(", creating the file if necessary.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("These values cannot be stored in the "),a("RouterLink",{attrs:{to:"/zh/dev_airframes/adding_a_new_frame.html"}},[t._v("frame configuration")]),t._v(" because they vary from device to device (the frame configuration defines the set of parameters that are applicable across all vehicles of the same type, such as the enabled sensors, "),a("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[t._v("autopilot rotation")]),t._v(" and PID tuning).")],1)]),t._v(" "),a("h2",{attrs:{id:"performing-the-factory-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performing-the-factory-calibration"}},[t._v("#")]),t._v(" Performing the Factory Calibration")]),t._v(" "),a("ol",[a("li",[t._v("Set the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_FAC_CAL_MODE"}},[t._v("SYS_FAC_CAL_MODE")]),t._v(" to 1.")],1),t._v(" "),a("li",[t._v("Perform all IMU calibrations: "),a("RouterLink",{attrs:{to:"/zh/config/accelerometer.html#performing-the-calibration"}},[t._v("accelerometer")]),t._v(", "),a("RouterLink",{attrs:{to:"/zh/config/gyroscope.html#performing-the-calibration"}},[t._v("gyroscope")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/config/compass.html#performing-the-calibration"}},[t._v("magnetometer")]),t._v(".")],1),t._v(" "),a("li",[t._v("Reboot the vehicle. This will write all "),a("code",[t._v("CAL_ACC*")]),t._v(", "),a("code",[t._v("CAL_GYRO*")]),t._v(" and "),a("code",[t._v("CAL_MAG*")]),t._v(" parameters into "),a("code",[t._v("/fs/mtd_caldata")]),t._v(".")]),t._v(" "),a("li",[t._v("Set the parameter "),a("code",[t._v("SYS_FAC_CAL_MODE")]),t._v(" back to 0 (default).")])]),t._v(" "),a("p",[t._v("Subsequent user calibrations will then take effect as usual (factory calibration data is only used for the parameter default values).")]),t._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/sensors_px4.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl User Guide > Sensors"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);