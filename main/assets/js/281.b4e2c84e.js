(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{1876:function(e,t,a){"use strict";a.r(t);var r=a(19),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"thermal-calibration-and-compensation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#thermal-calibration-and-compensation"}},[e._v("#")]),e._v(" Thermal Calibration and Compensation")]),e._v(" "),r("p",[e._v("PX4 contains functionality to calibrate and compensate accelerometer, gyro, magnetometer, and barometric pressure sensors for the effect of changing sensor temperature on sensor bias.")]),e._v(" "),r("p",[e._v("This topic details the "),r("a",{attrs:{href:"#test_setup"}},[e._v("test environment")]),e._v(" and "),r("a",{attrs:{href:"#calibration_procedures"}},[e._v("calibration procedures")]),e._v(".\nAt the end there is a description of the "),r("a",{attrs:{href:"#implementation"}},[e._v("implementation")]),e._v(".")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("After thermal calibration, the thermal calibration parameters ("),r("code",[e._v("TC_*")]),e._v(") are used for "),r("em",[e._v("all")]),e._v(" calibration/compensation of the respective sensors.\nAny subsequent standard calibration will therefore update "),r("code",[e._v("TC_*")]),e._v(' parameters and not the "normal" '),r("code",[e._v("SYS_CAL_*")]),e._v(" calibration parameters (and in some cases these parameters may be reset).")])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("Releases up to PX4 v1.14, do not support thermal calibration of the magnetometer.")])]),e._v(" "),r("p",[r("a",{attrs:{id:"test_setup"}})]),e._v(" "),r("h2",{attrs:{id:"test-setup-best-practice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#test-setup-best-practice"}},[e._v("#")]),e._v(" Test Setup/Best Practice")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"#calibration_procedures"}},[e._v("calibration procedures")]),e._v(" described in the following sections are ideally run in an "),r("em",[e._v("environmental chamber")]),e._v(" (a temperature and humidity controlled environment) as the board is heated from the lowest to the highest operating/calibration temperature.\nBefore starting the calibration, the board is first "),r("em",[e._v("cold soaked")]),e._v(" (cooled to the minimum temperature and allowed to reach equilibrium).")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("Active electric heating elements will affect the magnetometer calibration values.\nEnsure that heating elements are either inactive or sufficiently far from the sensor to avoid injecting noise into the magnetometer calibration.")])]),e._v(" "),r("p",[e._v("For the cold soak you can use a regular home freezer to achieve -20C, and commercial freezers can achieve of the order of -40C.\nThe board should be placed in a ziplock/anti-static bag containing a silica packet, with a power lead coming out through a sealed hole.\nAfter the cold soak the bag can be moved to the test environment and the test continued in the same bag.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("The bag/silica is to prevent condensation from forming on the board.")])]),e._v(" "),r("p",[e._v("It possible to perform the calibration without a commercial-grade environment chamber.\nA simple environment container can be created using a styrofoam box with a very small internal volume of air.\nThis allows the autopilot to self-heat the air relatively quickly (be sure that the box has a small hole to equalize to ambient room pressure, but still be able to heat up inside).")]),e._v(" "),r("p",[e._v("Using this sort of setup it is possible to heat a board to ~70C.\nAnecdotal evidence suggests that many common boards can be heated to this temperature without adverse side effects.\nIf in doubt, check the safe operating range with your manufacturer.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("To check the status of the onboard thermal calibration use the MAVlink console (or NuttX console) to check the reported internal temp from the sensor.")])]),e._v(" "),r("p",[r("a",{attrs:{id:"calibration_procedures"}})]),e._v(" "),r("h2",{attrs:{id:"calibration-procedures"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calibration-procedures"}},[e._v("#")]),e._v(" Calibration Procedures")]),e._v(" "),r("p",[e._v("PX4 supports two calibration procedures:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#onboard_calibration"}},[e._v("onboard")]),e._v(" - calibration is run on the board itself. This method requires knowledge of the amount of temperature rise that is achievable with the test setup.")]),e._v(" "),r("li",[r("a",{attrs:{href:"#offboard_calibration"}},[e._v("offboard")]),e._v(" - compensation parameters are calculated on a development computer based on log information collected during the calibration procedure. This method allows users to visually check the quality of the data and curve-fit.")])]),e._v(" "),r("p",[e._v("The offboard approach is more complex and slower, but requires less knowledge of the test setup and is easier to validate.")]),e._v(" "),r("p",[r("a",{attrs:{id:"onboard_calibration"}})]),e._v(" "),r("h3",{attrs:{id:"onboard-calibration-procedure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#onboard-calibration-procedure"}},[e._v("#")]),e._v(" Onboard Calibration Procedure")]),e._v(" "),r("p",[e._v("Onboard calibration is run entirely on the device. It require knowledge of the amount of temperature rise that is achievable with the test setup.")]),e._v(" "),r("p",[e._v("To perform and onboard calibration:")]),e._v(" "),r("ol",[r("li",[e._v("Ensure the frame type is set before calibration, otherwise calibration parameters will be lost when the board is setup.")]),e._v(" "),r("li",[e._v("Power the board and set the "),r("code",[e._v("SYS_CAL_*")]),e._v(" parameters to 1 to enable calibration of the required sensors at the next startup. [^1]")]),e._v(" "),r("li",[e._v("Set the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_CAL_TDEL"}},[e._v("SYS_CAL_TDEL")]),e._v(" parameter to the number of degrees of temperature rise required for the onboard calibrator to complete. If this parameter is too small, then the calibration will complete early and the temperature range for the calibration will not be sufficient to compensate when the board is fully warmed up. If this parameter is set too large, then the onboard calibrator will never complete. allowance should be made for the rise in temperature due to the boards self heating when setting this parameter. If the amount of temperature rise at the sensors is unknown, then the off-board method should be used.")],1),e._v(" "),r("li",[e._v("Set the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_CAL_TMIN"}},[e._v("SYS_CAL_TMIN")]),e._v(" parameter to the lowest temperature data that you want the calibrator to use. This enables a lower cold soak ambient temperature to be used to reduce the cold soak time whilst maintaining control over the calibration minimum temperature. The data for a sensor will not be used by the calibrator if it is below the value set by this parameter.")],1),e._v(" "),r("li",[e._v("Set the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_CAL_TMAX"}},[e._v("SYS_CAL_TMAX")]),e._v(" parameter to the highest starting sensor temperature that should be accepted by the calibrator. If the starting temperature is higher than the value set by this parameter, the calibration will exit with an error. Note that if the variation in measured temperature between different sensors exceeds the gap between "),r("code",[e._v("SYS_CAL_TMAX")]),e._v(" and "),r("code",[e._v("SYS_CAL_TMIN")]),e._v(", then it will be impossible for the calibration to start.")],1),e._v(" "),r("li",[e._v("Remove power and cold soak the board to below the starting temperature specified by the "),r("code",[e._v("SYS_CAL_TMIN")]),e._v(" parameter. Note that there is a 10 second delay on startup before calibration starts to allow any sensors to stabilise and the sensors will warm internally during this period.")]),e._v(" "),r("li",[e._v("Keeping the board stationary[^2], apply power and warm to a temperature high enough to achieve the temperature rise specified by the "),r("code",[e._v("SYS_CAL_TDEL")]),e._v(" parameter. The completion percentage is printed to the system console during calibration. [^3]")]),e._v(" "),r("li",[e._v("When the calibration completes, remove power, allow the board to cool to a temperature that is within the calibration range before performing the next step.")]),e._v(" "),r("li",[e._v("Perform a 6-point accel calibration via the system console using "),r("code",[e._v("commander calibrate accel")]),e._v(" or via "),r("em",[e._v("QGroundControl")]),e._v(". If the board is being set-up for the first time, the gyro and magnetometer calibration will also need to be performed.")]),e._v(" "),r("li",[e._v("The board should always be re-powered before flying after any sensor calibration, because sudden offset changes from calibration can upset the navigation estimator and some parameters are not loaded by the algorithms that use them until the next startup.")])]),e._v(" "),r("p",[r("a",{attrs:{id:"offboard_calibration"}})]),e._v(" "),r("h3",{attrs:{id:"offboard-calibration-procedure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#offboard-calibration-procedure"}},[e._v("#")]),e._v(" Offboard Calibration Procedure")]),e._v(" "),r("p",[e._v("Offboard calibration is run on a development computer using data collected during the calibration test. This method provides a way to visually check the quality of data and curve fit.")]),e._v(" "),r("p",[e._v("To perform an offboard calibration:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Ensure the frame type is set before calibration, otherwise calibration parameters will be lost when the board is setup.")])]),e._v(" "),r("li",[r("p",[e._v("Power up the board and set the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TC_A_ENABLE"}},[e._v("TC_A_ENABLE")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TC_B_ENABLE"}},[e._v("TC_B_ENABLE")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TC_G_ENABLE"}},[e._v("TC_G_ENABLE")]),e._v(", and "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TC_M_ENABLE"}},[e._v("TC_M_ENABLE")]),e._v(" parameters to "),r("code",[e._v("1")]),e._v(".")],1)]),e._v(" "),r("li",[r("p",[e._v("Set all "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_ACC0_ID"}},[e._v("CAL_ACC*")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_GYRO0_ID"}},[e._v("CAL_GYRO*")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_MAG0_ID"}},[e._v("CAL_MAG*")]),e._v(", and "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_BARO0_ID"}},[e._v("CAL_BARO*")]),e._v(" parameters to defaults.")],1)]),e._v(" "),r("li",[r("p",[e._v("Set the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_MODE"}},[e._v("SDLOG_MODE")]),e._v(" parameter to 2 to enable logging of data from boot.")],1)]),e._v(" "),r("li",[r("p",[e._v("Set the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE")]),e._v(" checkbox for "),r("em",[e._v("thermal calibration")]),e._v(" (bit 2) to log the raw sensor data required for calibration.")],1)]),e._v(" "),r("li",[r("p",[e._v("Cold soak the board to the minimum temperature it will be required to operate in.")])]),e._v(" "),r("li",[r("p",[e._v("Apply power and keeping the board still [^2], warm it slowly to the maximum required operating temperature. [^3]")])]),e._v(" "),r("li",[r("p",[e._v("Remove power and extract the .ulog file.")])]),e._v(" "),r("li",[r("p",[e._v("Open a terminal window in the "),r("strong",[e._v("Firmware/Tools")]),e._v(" directory and run the python calibration script:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("python process_sensor_caldata.py "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("full path name to .ulog file"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),r("p",[e._v("This will generate a "),r("strong",[e._v(".pdf")]),e._v(" file showing the measured data and curve fits for each sensor, and a "),r("strong",[e._v(".params")]),e._v(" file containing the calibration parameters.")])]),e._v(" "),r("li",[r("p",[e._v("Power the board, connect "),r("em",[e._v("QGroundControl")]),e._v(" and load the parameter from the generated "),r("strong",[e._v(".params")]),e._v(" file onto the board using "),r("em",[e._v("QGroundControl")]),e._v(". Due to the number of parameters, loading them may take some time.")])]),e._v(" "),r("li",[r("p",[e._v("After parameters have finished loading, set "),r("code",[e._v("SDLOG_MODE")]),e._v(" to 1 to re-enable normal logging and remove power.")])]),e._v(" "),r("li",[r("p",[e._v("Power the board and perform a normal accelerometer sensor calibration using "),r("em",[e._v("QGroundControl")]),e._v(". It is important that this step is performed when board is within the calibration temperature range. The board must be repowered after this step before flying as the sudden offset changes can upset the navigation estimator and some parameters are not loaded by the algorithms that use them until the next startup.")])])]),e._v(" "),r("p",[r("a",{attrs:{id:"implementation"}})]),e._v(" "),r("h2",{attrs:{id:"implementation-detail"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implementation-detail"}},[e._v("#")]),e._v(" Implementation Detail")]),e._v(" "),r("p",[e._v("Calibration refers to the process of measuring the change in sensor value across a range of internal temperatures, and performing a polynomial fit on the data to calculate a set of coefficients (stored as parameters) that can be used to correct the sensor data. Compensation refers to the process of using the internal temperature to calculate an offset that is subtracted from the sensor reading to correct for changing offset with temperature")]),e._v(" "),r("p",[e._v("The accelerometer, gyro, and magnetometer sensor offsets are calculated using a 3rd order polynomial, whereas the barometric pressure sensor offset is calculated using a 5th order polynomial. Example fits are show below:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(498),alt:"Thermal calibration accel"}})]),e._v(" "),r("p",[r("img",{attrs:{src:a(499),alt:"Thermal calibration gyro"}})]),e._v(" "),r("p",[r("img",{attrs:{src:a(500),alt:"Thermal calibration mag"}})]),e._v(" "),r("p",[r("img",{attrs:{src:a(501),alt:"Thermal calibration barometer"}})]),e._v(" "),r("h3",{attrs:{id:"calibration-parameter-storage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calibration-parameter-storage"}},[e._v("#")]),e._v(" Calibration Parameter Storage")]),e._v(" "),r("p",[e._v("With the existing parameter system implementation we are limited to storing each value in the struct as a separate entry. To work around this limitation the following logical naming convention is used for the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#thermal-compensation"}},[e._v("thermal compensation parameters")]),e._v(":")],1),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("TC_"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("type"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("instance"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("_"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("cal_name"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("_"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("axis"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),r("p",[e._v("Where:")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("type")]),e._v(": is a single character indicating the type of sensor where "),r("code",[e._v("A")]),e._v(" = accelerometer, "),r("code",[e._v("G")]),e._v(" = rate gyroscope, "),r("code",[e._v("M")]),e._v(" = magnetometer, and "),r("code",[e._v("B")]),e._v(" = barometer.")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("instance")]),e._v(": is an integer 0,1 or 2 allowing for calibration of up to three sensors of the same "),r("code",[e._v("type")]),e._v(".")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("cal_name")]),e._v(": is a string identifying the calibration value. It has the following possible values:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("Xn")]),e._v(": Polynomial coefficient where n is the order of the coefficient, e.g. "),r("code",[e._v("X3 * (temperature - reference temperature)**3")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("SCL")]),e._v(": scale factor.")]),e._v(" "),r("li",[r("code",[e._v("TREF")]),e._v(": reference temperature (deg C).")]),e._v(" "),r("li",[r("code",[e._v("TMIN")]),e._v(": minimum valid temperature (deg C).")]),e._v(" "),r("li",[r("code",[e._v("TMAX")]),e._v(": maximum valid temperature (deg C).")])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("axis")]),e._v(": is an integer 0,1 or 2 indicating that the calibration data is for X,Y or Z axis in the board frame of reference. For the barometric pressure sensor, the "),r("code",[e._v("axis")]),e._v(" suffix is omitted.")])])]),e._v(" "),r("p",[e._v("Examples:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TC_A1_TREF"}},[e._v("TC_A1_TREF")]),e._v(" is the reference temperature for the second accelerometer.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TC_G0_X3_0"}},[e._v("TC_G0_X3_0")]),e._v(" is the "),r("code",[e._v("^3")]),e._v(" coefficient for the first gyro x-axis.")],1)]),e._v(" "),r("h3",{attrs:{id:"calibration-parameter-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calibration-parameter-usage"}},[e._v("#")]),e._v(" Calibration Parameter Usage")]),e._v(" "),r("p",[e._v("The correction for thermal offsets (using the calibration parameters) is performed in the "),r("RouterLink",{attrs:{to:"/en/modules/modules_system.html#sensors"}},[e._v("sensors module")]),e._v(".\nThe reference temperature is subtracted from the measured temperature to obtain a delta temperature where:")],1),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("delta = measured_temperature - reference_temperature\n")])])]),r("p",[e._v("The delta temperature is then used to calculate a offset, where:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("offset = X0 + X1*delta + X2*delta**2 + ... + Xn*delta**n\n")])])]),r("p",[e._v("The offset and temperature scale factor are then used to correct the sensor measurement where:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("corrected_measurement = (raw_measurement - offset) * scale_factor\n")])])]),r("p",[e._v("If the temperature is above the test range set by the "),r("code",[e._v("*_TMIN")]),e._v(" and "),r("code",[e._v("*_TMAX")]),e._v(" parameters, then the measured temperature will be clipped to remain within the limits.")]),e._v(" "),r("p",[e._v("Correction of the accelerometer, gyroscope, magnetometer, or barometer data is enabled by setting "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TC_A_ENABLE"}},[e._v("TC_A_ENABLE")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TC_G_ENABLE"}},[e._v("TC_G_ENABLE")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TC_M_ENABLE"}},[e._v("TC_M_ENABLE")]),e._v(", or "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TC_B_ENABLE"}},[e._v("TC_B_ENABLE")]),e._v(" parameters to 1 respectively.")],1),e._v(" "),r("h3",{attrs:{id:"compatibility-with-legacy-cal-parameters-and-commander-controlled-calibration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-with-legacy-cal-parameters-and-commander-controlled-calibration"}},[e._v("#")]),e._v(" Compatibility with legacy "),r("code",[e._v("CAL_*")]),e._v(" parameters and commander controlled calibration")]),e._v(" "),r("p",[e._v("The legacy temperature-agnostic PX4 rate gyro and accelerometer sensor calibration is performed by the commander module and involves adjusting offset, and in the case of accelerometer calibration, scale factor calibration parameters. The offset and scale factor parameters are applied within the driver for each sensor. These parameters are found in the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#sensor-calibration"}},[e._v("CAL parameter group")]),e._v(".")],1),e._v(" "),r("p",[e._v("Onboard temperature calibration is controlled by the events module and the corrections are applied within the sensors module before the sensor combined uORB topic is published. This means that if thermal compensation is being used, all of the corresponding legacy offset and scale factor parameters must be set to defaults of zero and unity before a thermal calibration is performed. If an on-board temperature calibration is performed, this will be done automatically, however if an offboard calibration is being performed it is important that the legacy "),r("code",[e._v("CAL*OFF")]),e._v(" and "),r("code",[e._v("CAL*SCALE")]),e._v(" parameters be reset before calibration data is logged.")]),e._v(" "),r("p",[e._v("If accel thermal compensation has been enabled by setting the "),r("code",[e._v("TC_A_ENABLE")]),e._v(" parameter to 1, then the commander controlled 6-point accel calibration can still be performed.\nHowever, instead of adjusting the "),r("code",[e._v("*OFF")]),e._v(" and "),r("code",[e._v("*SCALE")]),e._v(" parameters in the "),r("code",[e._v("CAL")]),e._v(" parameter group, these parameters are set to defaults and the thermal compensation "),r("code",[e._v("X0")]),e._v(" and "),r("code",[e._v("SCL")]),e._v(" parameters are adjusted instead.")]),e._v(" "),r("p",[e._v("If gyro thermal compensation has been enabled by setting the "),r("code",[e._v("TC_G_ENABLE")]),e._v(" parameter to 1, then the commander controlled gyro calibration can still be performed, however it will be used to shift the compensation curve up or down by the amount required to zero the angular rate offset. It achieves this by adjusting the X0 coefficients.")]),e._v(" "),r("p",[e._v("If magnetometer thermal compensation has been enabled by setting the "),r("code",[e._v("TC_M_ENABLE")]),e._v(" parameter to 1, then the commander controlled 6-point accel calibration can still be performed.\nHowever, instead of adjusting the "),r("code",[e._v("*OFF")]),e._v(" and "),r("code",[e._v("*SCALE")]),e._v(" parameters in the "),r("code",[e._v("CAL")]),e._v(" parameter group, these parameters are set to defaults and the thermal compensation "),r("code",[e._v("X0")]),e._v(" and "),r("code",[e._v("SCL")]),e._v(" parameters are adjusted instead.")]),e._v(" "),r("h3",{attrs:{id:"limitations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[e._v("#")]),e._v(" Limitations")]),e._v(" "),r("p",[e._v("Scale factors are assumed to be temperature invariant due to the difficulty associated with measuring these at different temperatures. This limits the usefulness of the accelerometer calibration to those sensor models with stable scale factors. In theory with a thermal chamber or IMU heater capable of controlling IMU internal temperature to within a degree, it would be possible to perform a series of 6 sided accelerometer calibrations and correct the accelerometers for both offset and scale factor. Due to the complexity of integrating the required board movement with the calibration algorithm, this capability has not been included.")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("[^1]: The "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_CAL_ACCEL"}},[e._v("SYS_CAL_ACCEL")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_CAL_BARO"}},[e._v("SYS_CAL_BARO")]),e._v(" and "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_CAL_GYRO"}},[e._v("SYS_CAL_GYRO")]),e._v(" parameters are reset to 0 when the calibration is started.\n[^2]: Calibration of the barometric pressure sensor offsets requires a stable air pressure environment. The air pressure will change slowly due to weather and inside buildings can change rapidly due to external wind fluctuations and HVAC system operation.\n[^3]: Care must be taken when warming a cold soaked board to avoid formation of condensation on the board that can cause board damage under some circumstances.")],1)])}),[],!1,null,null,null);t.default=o.exports},498:function(e,t,a){e.exports=a.p+"assets/img/thermal_calibration_accel.07d46ab7.png"},499:function(e,t,a){e.exports=a.p+"assets/img/thermal_calibration_gyro.f6ae4a1a.png"},500:function(e,t,a){e.exports=a.p+"assets/img/thermal_calibration_mag.87e307fe.png"},501:function(e,t,a){e.exports=a.p+"assets/img/thermal_calibration_baro.cafe78c9.png"}}]);