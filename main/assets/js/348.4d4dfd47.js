(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{3274:function(e,t,a){"use strict";a.r(t);var r=a(19),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"热校准和补偿"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#热校准和补偿"}},[e._v("#")]),e._v(" 热校准和补偿")]),e._v(" "),r("p",[e._v("PX4 contains functionality to calibrate and compensate accelerometer, gyro, magnetometer, and barometric pressure sensors for the effect of changing sensor temperature on sensor bias.")]),e._v(" "),r("p",[e._v("本主题详细介绍了 "),r("a",{attrs:{href:"#test_setup"}},[e._v("测试环境")]),e._v(" 和 "),r("a",{attrs:{href:"#calibration_procedures"}},[e._v("校准过程")]),e._v("。 最后是 "),r("a",{attrs:{href:"#implementation"}},[e._v("实施过程")]),e._v(" 的描述。")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("After thermal calibration, the thermal calibration parameters ("),r("code",[e._v("TC_*")]),e._v(") are used for "),r("em",[e._v("all")]),e._v(" calibration/compensation of the respective sensors. Any subsequent standard calibration will therefore update "),r("code",[e._v("TC_*")]),e._v(' parameters and not the "normal" '),r("code",[e._v("SYS_CAL_*")]),e._v(" calibration parameters (and in some cases these parameters may be reset).")])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("Releases up to PX4 v1.14, do not support thermal calibration of the magnetometer.")])]),e._v(" "),r("p",[r("a",{attrs:{id:"test_setup"}})]),e._v(" "),r("h2",{attrs:{id:"测试设置-最佳实践"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试设置-最佳实践"}},[e._v("#")]),e._v(" 测试设置/最佳实践")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"#calibration_procedures"}},[e._v("calibration procedures")]),e._v(" described in the following sections are ideally run in an "),r("em",[e._v("environmental chamber")]),e._v(" (a temperature and humidity controlled environment) as the board is heated from the lowest to the highest operating/calibration temperature. Before starting the calibration, the board is first "),r("em",[e._v("cold soaked")]),e._v(" (cooled to the minimum temperature and allowed to reach equilibrium).")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("Active electric heating elements will affect the magnetometer calibration values.\nEnsure that heating elements are either inactive or sufficiently far from the sensor to avoid injecting noise into the magnetometer calibration.")])]),e._v(" "),r("p",[e._v("对于冷却，您可以使用普通的家用冰箱达到 -20C，商用冰箱可以达到 -40C 的量级。 The board should be placed in a ziplock/anti-static bag containing a silica packet, with a power lead coming out through a sealed hole. 冷却后，可将袋子移至测试环境，并在同一袋中继续测试。")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("防静电袋和硅胶干燥剂是为了防止水蒸气在电路板上冷凝。")])]),e._v(" "),r("p",[e._v("它可以在没有商业级环境房间的情况下进行校准。 可以使用内部空间很小的泡沫塑料盒来创造一个简单的环境容器。 这允许自驾仪将空气相对快速地自加热（确保盒子有一个小孔以平衡容器内外压力，但仍然能够在容器内加热）。")]),e._v(" "),r("p",[e._v("使用这种设置可以将电路板加热到约 70C 。 经验表明，许多普通电路板可以加热到这个温度不会产生不良副作用。 如有疑问，请与制造商核实安全操作的温度范围。")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),r("p",[e._v("要检查板上的热校准状态，请使用 MAVlink 控制台(或NuttX 控制台) 检查来自传感器的报告的内部温度。")])]),e._v(" "),r("p",[r("a",{attrs:{id:"calibration_procedures"}})]),e._v(" "),r("h2",{attrs:{id:"校准过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#校准过程"}},[e._v("#")]),e._v(" 校准过程")]),e._v(" "),r("p",[e._v("PX4 支持两种校准过程：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#onboard_calibration"}},[e._v("板载校准")]),e._v(" - 校准在电路板上运行。 该方法需要知道测试设置中可实现的温升量。")]),e._v(" "),r("li",[r("a",{attrs:{href:"#offboard_calibration"}},[e._v("板外校准")]),e._v(" - 基于在校准过程期间收集的日志信息在计算机上计算补偿参数。 该方法允许用户可视地检查数据和曲线拟合的质量。")])]),e._v(" "),r("p",[e._v("The offboard approach is more complex and slower, but requires less knowledge of the test setup and is easier to validate.")]),e._v(" "),r("p",[r("a",{attrs:{id:"onboard_calibration"}})]),e._v(" "),r("h3",{attrs:{id:"板载校准过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#板载校准过程"}},[e._v("#")]),e._v(" 板载校准过程")]),e._v(" "),r("p",[e._v("Onboard calibration is run entirely on the device. It require knowledge of the amount of temperature rise that is achievable with the test setup.")]),e._v(" "),r("p",[e._v("To perform and onboard calibration:")]),e._v(" "),r("ol",[r("li",[e._v("确保在校准前设置机架类型，否则在设置飞控板时校准参数将丢失。")]),e._v(" "),r("li",[e._v("为电路板供电并将 "),r("code",[e._v("SYS_CAL _ *")]),e._v("参数设置为 1，以便在下次启动时启用所需传感器的校准。 [^1]")]),e._v(" "),r("li",[e._v("将"),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_CAL_TDEL"}},[e._v(" SYS_CAL_TDEL ")]),e._v(" 参数设置为板载校准器完成所需的温升度数。 如果此参数太小，则校准将提前完成，并且校准的温度范围将不足以在电路板完全预热时进行补偿。 如果此参数设置得太大，则板载校准器将永远不会完成。 在设置此参数时，应考虑到电路板自加热导致的温度升高。 如果传感器的温升量未知，则应使用板外校准方法。")],1),e._v(" "),r("li",[e._v("将 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_CAL_TMIN"}},[e._v(" SYS_CAL_TMIN ")]),e._v(" 参数设置为您希望校准器发挥作用的最低温度数据。 更低的冷却温度能够用于减少冷却时间，同时保持对校准最低温度的控制。 如果校准器温度低于此参数设置的值，则不会使用传感器的数据。")],1),e._v(" "),r("li",[e._v("将 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_CAL_TMAX"}},[e._v(" SYS_CAL_TMAX ")]),e._v(" 参数设置为校准器起作用的最高起始传感器温度。 如果起始温度高于此参数设置的值，校准将退出并报告错误。 注意，如果不同传感器测量的温度的差异超过 "),r("code",[e._v("SYS_CAL_TMAX")]),e._v(" 和 "),r("code",[e._v("SYS_CAL_TMIN")]),e._v("的差值 ，则校准将不可能启动。")],1),e._v(" "),r("li",[e._v("断开电源并将电路板冷却至低于"),r("code",[e._v("SYS_CAL_TMIN")]),e._v("参数指定的起始温度。 请注意，在校准开始之前启动过程有10秒的延迟，以允许所有传感器稳定，并且传感器在此期间会内部发热。")]),e._v(" "),r("li",[e._v("保持电路板静止[^2]，接通电源并加热到足够高的温度，以达到由"),r("code",[e._v("SYS_CAL_TDEL")]),e._v("参数指定的温升。 校准期间，完成百分比将打印到系统控制台。 [^3]")]),e._v(" "),r("li",[e._v("校准完成后，断开电源，让电路板冷却到校准范围内的温度，然后再执行下一步。")]),e._v(" "),r("li",[e._v("Perform a 6-point accel calibration via the system console using "),r("code",[e._v("commander calibrate accel")]),e._v(" or via "),r("em",[e._v("QGroundControl")]),e._v(". 如果首次设置电路板，则还需要执行陀螺仪和磁力计校准。")]),e._v(" "),r("li",[e._v("在任何传感器校准之后的首次飞行之前，电路板必须重新上电，因为校准带来的突然的偏移变化可能会扰乱导航估计器，并且某些参数直到下次启动时才会被使用它们的算法加载。")])]),e._v(" "),r("p",[r("a",{attrs:{id:"offboard_calibration"}})]),e._v(" "),r("h3",{attrs:{id:"板外校准过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#板外校准过程"}},[e._v("#")]),e._v(" 板外校准过程")]),e._v(" "),r("p",[e._v("Offboard calibration is run on a development computer using data collected during the calibration test. This method provides a way to visually check the quality of data and curve fit.")]),e._v(" "),r("p",[e._v("To perform an offboard calibration:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("确保在校准前设置机架类型，否则在设置飞控板时校准参数将丢失。")])]),e._v(" "),r("li",[r("p",[e._v("Power up the board and set the "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TC_A_ENABLE"}},[e._v("TC_A_ENABLE")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TC_B_ENABLE"}},[e._v("TC_B_ENABLE")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TC_G_ENABLE"}},[e._v("TC_G_ENABLE")]),e._v(", and "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TC_M_ENABLE"}},[e._v("TC_M_ENABLE")]),e._v(" parameters to "),r("code",[e._v("1")]),e._v(".")],1)]),e._v(" "),r("li",[r("p",[e._v("Set all "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_ACC0_ID"}},[e._v("CAL_ACC*")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_GYRO0_ID"}},[e._v("CAL_GYRO*")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_MAG0_ID"}},[e._v("CAL_MAG*")]),e._v(", and "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_BARO0_ID"}},[e._v("CAL_BARO*")]),e._v(" parameters to defaults.")],1)]),e._v(" "),r("li",[r("p",[e._v("将 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_MODE"}},[e._v(" SDLOG_MODE ")]),e._v(" 参数设置为 2 以从系统启动时就开始记录日志。")],1)]),e._v(" "),r("li",[r("p",[e._v("Set the "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE")]),e._v(" checkbox for "),r("em",[e._v("thermal calibration")]),e._v(" (bit 2) to log the raw sensor data required for calibration.")],1)]),e._v(" "),r("li",[r("p",[e._v("将电路板冷却到操作所需的最低温度。")])]),e._v(" "),r("li",[r("p",[e._v("接通电源并保持电路板静止[^2]，将其缓慢加热至所需的最高工作温度。 [^3]")])]),e._v(" "),r("li",[r("p",[e._v("断开电源并取出 .ulog 文件。")])]),e._v(" "),r("li",[r("p",[e._v("Open a terminal window in the "),r("strong",[e._v("Firmware/Tools")]),e._v(" directory and run the python calibration script:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("python process_sensor_caldata.py "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("full path name to .ulog file"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),r("p",[e._v("This will generate a "),r("strong",[e._v(".pdf")]),e._v(" file showing the measured data and curve fits for each sensor, and a "),r("strong",[e._v(".params")]),e._v(" file containing the calibration parameters.")])]),e._v(" "),r("li",[r("p",[e._v("Power the board, connect "),r("em",[e._v("QGroundControl")]),e._v(" and load the parameter from the generated "),r("strong",[e._v(".params")]),e._v(" file onto the board using "),r("em",[e._v("QGroundControl")]),e._v(". 由于参数的数量，加载它们可能需要一些时间。")])]),e._v(" "),r("li",[r("p",[e._v("参数完成加载后，将"),r("code",[e._v("SDLOG_MODE")]),e._v("设置为 1 以重新启用常规日志并断开电源。")])]),e._v(" "),r("li",[r("p",[e._v("Power the board and perform a normal accelerometer sensor calibration using "),r("em",[e._v("QGroundControl")]),e._v(". 重要的是，此步骤在飞控板处于校准温度范围内进行。 此步骤后的首次飞行之前，应重新启动电路板，因为突然的偏置变化会扰乱导航估计器，并且某些参数直到下次启动时才会被使用它们的算法加载。")])])]),e._v(" "),r("p",[r("a",{attrs:{id:"implementation"}})]),e._v(" "),r("h2",{attrs:{id:"实施细节"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实施细节"}},[e._v("#")]),e._v(" 实施细节")]),e._v(" "),r("p",[e._v("Calibration refers to the process of measuring the change in sensor value across a range of internal temperatures, and performing a polynomial fit on the data to calculate a set of coefficients (stored as parameters) that can be used to correct the sensor data. Compensation refers to the process of using the internal temperature to calculate an offset that is subtracted from the sensor reading to correct for changing offset with temperature")]),e._v(" "),r("p",[e._v("The accelerometer, gyro, and magnetometer sensor offsets are calculated using a 3rd order polynomial, whereas the barometric pressure sensor offset is calculated using a 5th order polynomial. Example fits are show below:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(482),alt:"Thermal calibration accel"}})]),e._v(" "),r("p",[r("img",{attrs:{src:a(483),alt:"Thermal calibration gyro"}})]),e._v(" "),r("p",[r("img",{attrs:{src:a(484),alt:"Thermal calibration mag"}})]),e._v(" "),r("p",[r("img",{attrs:{src:a(485),alt:"Thermal calibration barometer"}})]),e._v(" "),r("h3",{attrs:{id:"校准参数存储"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#校准参数存储"}},[e._v("#")]),e._v(" 校准参数存储")]),e._v(" "),r("p",[e._v("With the existing parameter system implementation we are limited to storing each value in the struct as a separate entry. To work around this limitation the following logical naming convention is used for the "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#thermal-compensation"}},[e._v("thermal compensation parameters")]),e._v(":")],1),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("TC_"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("type"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("instance"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("_"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("cal_name"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("_"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("axis"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),r("p",[e._v("Where:")]),e._v(" "),r("ul",[r("li",[r("p",[r("code",[e._v("type")]),e._v(": is a single character indicating the type of sensor where "),r("code",[e._v("A")]),e._v(" = accelerometer, "),r("code",[e._v("G")]),e._v(" = rate gyroscope, "),r("code",[e._v("M")]),e._v(" = magnetometer, and "),r("code",[e._v("B")]),e._v(" = barometer.")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("instance")]),e._v("：是一个整数 0、1或2 ，允许至多校准三个相同 "),r("code",[e._v("type")]),e._v(" 的传感器。")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("cal_name")]),e._v("：是标识校准值的字符串。 它具有可能的值如下：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("Xn")]),e._v("：多项式系数，其中n是系数的阶数，例如 "),r("code",[e._v("X3* (temperature - reference temperature)**3")]),e._v(" 。")]),e._v(" "),r("li",[r("code",[e._v("SCL")]),e._v("：比例（缩放）系数")]),e._v(" "),r("li",[r("code",[e._v("TREF")]),e._v("：参考温度(deg C)。")]),e._v(" "),r("li",[r("code",[e._v("TMIN")]),e._v("：最低有效温度(deg C)。")]),e._v(" "),r("li",[r("code",[e._v("TMAX")]),e._v("：最高有效温度(deg C)。")])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("axis")]),e._v("：是一个整数0，1或2，指示校准数据为飞控板参照系的 X，Y 或 Z 轴。 对于气压传感器，省略 "),r("code",[e._v("axis")]),e._v(" 后缀。")])])]),e._v(" "),r("p",[e._v("Examples:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TC_A1_TREF"}},[e._v("TC_A1_TREF")]),e._v(" 是第二个加速度计的参考温度。")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TC_G0_X3_0"}},[e._v("TC_G0_X3_0")]),e._v(" 是第一个陀螺 x 轴的 "),r("code",[e._v("^3")]),e._v(" 系数。")],1)]),e._v(" "),r("h3",{attrs:{id:"校准参数使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#校准参数使用"}},[e._v("#")]),e._v(" 校准参数使用")]),e._v(" "),r("p",[e._v("The correction for thermal offsets (using the calibration parameters) is performed in the "),r("RouterLink",{attrs:{to:"/zh/modules/modules_system.html#sensors"}},[e._v("sensors module")]),e._v(". The reference temperature is subtracted from the measured temperature to obtain a delta temperature where:")],1),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("delta = measured_temperature - reference_temperature\n")])])]),r("p",[e._v("The delta temperature is then used to calculate a offset, where:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("offset = X0 + X1*delta + X2*delta**2 + ... + Xn*delta**n\n")])])]),r("p",[e._v("The offset and temperature scale factor are then used to correct the sensor measurement where:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("corrected_measurement = (raw_measurement - offset) * scale_factor\n")])])]),r("p",[e._v("If the temperature is above the test range set by the "),r("code",[e._v("*_TMIN")]),e._v(" and "),r("code",[e._v("*_TMAX")]),e._v(" parameters, then the measured temperature will be clipped to remain within the limits.")]),e._v(" "),r("p",[e._v("Correction of the accelerometer, gyroscope, magnetometer, or barometer data is enabled by setting "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TC_A_ENABLE"}},[e._v("TC_A_ENABLE")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TC_G_ENABLE"}},[e._v("TC_G_ENABLE")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TC_M_ENABLE"}},[e._v("TC_M_ENABLE")]),e._v(", or "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TC_B_ENABLE"}},[e._v("TC_B_ENABLE")]),e._v(" parameters to 1 respectively.")],1),e._v(" "),r("h3",{attrs:{id:"与遗留-cal-参数和-commander-控制校准的兼容性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#与遗留-cal-参数和-commander-控制校准的兼容性"}},[e._v("#")]),e._v(" 与遗留 "),r("code",[e._v("CAL*")]),e._v(" 参数和 commander 控制校准的兼容性")]),e._v(" "),r("p",[e._v("The legacy temperature-agnostic PX4 rate gyro and accelerometer sensor calibration is performed by the commander module and involves adjusting offset, and in the case of accelerometer calibration, scale factor calibration parameters. The offset and scale factor parameters are applied within the driver for each sensor. These parameters are found in the "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#sensor-calibration"}},[e._v("CAL parameter group")]),e._v(".")],1),e._v(" "),r("p",[e._v("Onboard temperature calibration is controlled by the events module and the corrections are applied within the sensors module before the sensor combined uORB topic is published. This means that if thermal compensation is being used, all of the corresponding legacy offset and scale factor parameters must be set to defaults of zero and unity before a thermal calibration is performed. If an on-board temperature calibration is performed, this will be done automatically, however if an offboard calibration is being performed it is important that the legacy "),r("code",[e._v("CAL*OFF")]),e._v(" and "),r("code",[e._v("CAL*SCALE")]),e._v(" parameters be reset before calibration data is logged.")]),e._v(" "),r("p",[e._v("If accel thermal compensation has been enabled by setting the "),r("code",[e._v("TC_A_ENABLE")]),e._v(" parameter to 1, then the commander controlled 6-point accel calibration can still be performed. However, instead of adjusting the "),r("code",[e._v("*OFF")]),e._v(" and "),r("code",[e._v("*SCALE")]),e._v(" parameters in the "),r("code",[e._v("CAL")]),e._v(" parameter group, these parameters are set to defaults and the thermal compensation "),r("code",[e._v("X0")]),e._v(" and "),r("code",[e._v("SCL")]),e._v(" parameters are adjusted instead.")]),e._v(" "),r("p",[e._v("If gyro thermal compensation has been enabled by setting the "),r("code",[e._v("TC_G_ENABLE")]),e._v(" parameter to 1, then the commander controlled gyro calibration can still be performed, however it will be used to shift the compensation curve up or down by the amount required to zero the angular rate offset. It achieves this by adjusting the X0 coefficients.")]),e._v(" "),r("p",[e._v("If magnetometer thermal compensation has been enabled by setting the "),r("code",[e._v("TC_M_ENABLE")]),e._v(" parameter to 1, then the commander controlled 6-point accel calibration can still be performed. However, instead of adjusting the "),r("code",[e._v("*OFF")]),e._v(" and "),r("code",[e._v("*SCALE")]),e._v(" parameters in the "),r("code",[e._v("CAL")]),e._v(" parameter group, these parameters are set to defaults and the thermal compensation "),r("code",[e._v("X0")]),e._v(" and "),r("code",[e._v("SCL")]),e._v(" parameters are adjusted instead.")]),e._v(" "),r("h3",{attrs:{id:"局限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#局限"}},[e._v("#")]),e._v(" 局限")]),e._v(" "),r("p",[e._v("Scale factors are assumed to be temperature invariant due to the difficulty associated with measuring these at different temperatures. This limits the usefulness of the accelerometer calibration to those sensor models with stable scale factors. In theory with a thermal chamber or IMU heater capable of controlling IMU internal temperature to within a degree, it would be possible to perform a series of 6 sided accelerometer calibrations and correct the accelerometers for both offset and scale factor. Due to the complexity of integrating the required board movement with the calibration algorithm, this capability has not been included.")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("[^1]: 当校准开始时，"),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_CAL_ACCEL"}},[e._v("SYS_CAL_Accel")]),e._v("、"),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_CAL_BARO"}},[e._v("SYS_CAL_Baro")]),e._v(" 和 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_CAL_GYRO"}},[e._v("SYS_CAL_GYRO")]),e._v(" 参数重置为 0。\n[^2]: 气压传感器偏置的校准需要一个稳定的气压环境。 由于天气的原因，空气压力变化缓慢，建筑物内部的气压会因室外风的波动和暖通空调系统的运行而迅速变化。\n[^3]: 在加热冷却板时必须小心，以避免在某些情况下在板上形成凝结物，导致电路板损坏。")],1)])}),[],!1,null,null,null);t.default=o.exports},482:function(e,t,a){e.exports=a.p+"assets/img/thermal_calibration_accel.07d46ab7.png"},483:function(e,t,a){e.exports=a.p+"assets/img/thermal_calibration_gyro.f6ae4a1a.png"},484:function(e,t,a){e.exports=a.p+"assets/img/thermal_calibration_mag.87e307fe.png"},485:function(e,t,a){e.exports=a.p+"assets/img/thermal_calibration_baro.cafe78c9.png"}}]);