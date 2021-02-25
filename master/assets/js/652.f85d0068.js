(window.webpackJsonp=window.webpackJsonp||[]).push([[652],{2338:function(t,e,a){"use strict";a.r(e);var r=a(18),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"电池电源模块设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#电池电源模块设置"}},[t._v("#")]),t._v(" 电池电源模块设置")]),t._v(" "),r("p",[t._v("该主题解释了如何进行电源设置")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The battery monitoring features of PX4 can only be used if you have compatible hardware. In most cases this means a power module that measures the battery voltage, and may also measure the current between battery and vehicle.")])]),t._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),r("p",[t._v("The goal of the power setup is to provide a good estimate of remaining battery percentage (and capacity), so that the vehicle is not used to the point that it runs out of power and crashes (or the battery is damaged due to deep-discharge).")]),t._v(" "),r("p",[t._v("PX4 provides a number of (progressively more effective) methods that can be used to estimate the capacity:")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#basic_settings"}},[t._v("基本电池设置")]),t._v("（默认值）：将原始测量电压与“空”和“满”电压之间的范围进行比较。 这样的估计较为粗略，因为测量的电压（及其相应的容量）将在负载下产生波动。")]),t._v(" "),r("li",[r("a",{attrs:{href:"#load_compensation"}},[t._v("基于电压的负载补偿估计")]),t._v("：抵消负载对电池容量计算的影响。")]),t._v(" "),r("li",[r("a",{attrs:{href:"#current_integration"}},[t._v("基于电流积分的电压估计")]),t._v("：通过基于电流的已消耗电荷估计，对基于负载补偿电压的估计出的可用容量进行补充。 这样的容量估计相当于智能电池的容量估计。")])]),t._v(" "),r("p",[t._v("Later methods build on preceding methods. The approach you use will depend on whether the vehicle's power module can measure current.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The instructions below refer to battery 1 calibration parameters: "),r("code",[t._v("BAT1_*")]),t._v(". Other batteries use the "),r("code",[t._v("BATx_*")]),t._v(" parameters, where "),r("code",[t._v("x")]),t._v(" is the battery number. All battery calibration parameters "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#battery-calibration"}},[t._v("are listed here")]),t._v(".")],1)]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v('In addition to PX4 configuration discussed here, you should ensure that the ESC\'s low voltage cutoff is either disabled or set below the expected minimum voltage. This ensures that the battery failsafe behaviour is managed by PX4, and that ESCs will not cut out while the battery still has charge (according to the "empty-battery" setting that you have chosen).')])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[r("a",{attrs:{href:"#battery-type-comparison"}},[t._v("Battery-Type Comparison")]),t._v(" below explains the difference between the main battery types, and how that impacts the battery settings.")])]),t._v(" "),r("p",[r("span",{attrs:{id:"basic_settings"}})]),t._v(" "),r("h2",{attrs:{id:"基本电池设置-默认"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本电池设置-默认"}},[t._v("#")]),t._v(" 基本电池设置(默认)")]),t._v(" "),r("p",[t._v('The basic battery settings configure PX4 to use the default method for capacity estimate. This method compares the measured raw battery voltage to the range between cell voltages for "empty" and "full" cells (scaled by the number of cells).')]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("This approach results in relatively coarse estimations due to fluctuations in the estimated charge as the measured voltage changes under load.")])]),t._v(" "),r("p",[t._v("To configure the basic settings for battery 1:")]),t._v(" "),r("ol",[r("li",[t._v("打开 "),r("em",[t._v("QGroundControl")]),t._v(" 并连接上飞机。")]),t._v(" "),r("li",[t._v("在上面的工具条中选择 "),r("strong",[t._v("齿轮")]),t._v(" 按钮，然后在左面的工具条中选择 "),r("strong",[t._v("电源")]),t._v(" 按钮。")])]),t._v(" "),r("p",[t._v("You are presented with the basic settings that characterize the battery. The sections below explain what values to set for each field.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(613),alt:"QGC Power Setup"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("At time of writing "),r("em",[t._v("QGroundControl")]),t._v(" only allows you to set values for battery 1 in this view. For vehicles with multiple batteries you'll need to directly "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("set the parameters")]),t._v(" for battery 2 ("),r("code",[t._v("BAT2_*")]),t._v("), as described in the following sections.")],1)]),t._v(" "),r("h3",{attrs:{id:"电池芯数-串联"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#电池芯数-串联"}},[t._v("#")]),t._v(" 电池芯数（串联）")]),t._v(" "),r("p",[t._v('This sets the number of cells connected in series in the battery. Typically this will be written on the battery as a number followed by "S" (e.g "3S", "5S").')]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The voltage across a single galvanic battery cell is dependent on the chemical properties of the battery type. Lithium-Polymer (LiPo) batteries and Lithium-Ion batteries both have the same "),r("em",[t._v("nominal")]),t._v(" cell voltage of 3.7V. In order to achieve higher voltages (which will more efficiently power a vehicle), multiple cells are connected in "),r("em",[t._v("series")]),t._v(". The battery voltage at the terminals is then a multiple of the cell voltage.")])]),t._v(" "),r("p",[t._v("If the number of cells is not supplied you can calculate it by dividing the battery voltage by the nominal voltage for a single cell. The table below shows the voltage-to-cell relationship for these batteries:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Cells")]),t._v(" "),r("th",[t._v("LiPo (V)")]),t._v(" "),r("th",[t._v("LiIon (V)")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1S")]),t._v(" "),r("td",[t._v("3.7")]),t._v(" "),r("td",[t._v("3.7")])]),t._v(" "),r("tr",[r("td",[t._v("2S")]),t._v(" "),r("td",[t._v("7.4")]),t._v(" "),r("td",[t._v("7.4")])]),t._v(" "),r("tr",[r("td",[t._v("3S")]),t._v(" "),r("td",[t._v("11.1")]),t._v(" "),r("td",[t._v("11.1")])]),t._v(" "),r("tr",[r("td",[t._v("4S")]),t._v(" "),r("td",[t._v("14.8")]),t._v(" "),r("td",[t._v("14.8")])]),t._v(" "),r("tr",[r("td",[t._v("5S")]),t._v(" "),r("td",[t._v("18.5")]),t._v(" "),r("td",[t._v("18.5")])]),t._v(" "),r("tr",[r("td",[t._v("6S")]),t._v(" "),r("td",[t._v("22.2")]),t._v(" "),r("td",[t._v("22.2")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("This setting corresponds to "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("parameters")]),t._v(": "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT1_N_CELLS"}},[t._v("BAT1_N_CELLS")]),t._v(" and "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT2_N_CELLS"}},[t._v("BAT2_N_CELLS")]),t._v(".")],1)]),t._v(" "),r("h3",{attrs:{id:"full-voltage-per-cell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#full-voltage-per-cell"}},[t._v("#")]),t._v(" Full Voltage (per cell)")]),t._v(" "),r("p",[t._v("This sets the "),r("em",[t._v("nominal")]),t._v(' maximum voltage of each cell (the lowest voltage at which the cell will be considered "full").')]),t._v(" "),r("p",[t._v("The value should be set slightly lower that the nominal maximum cell voltage for the battery, but not so low that the estimated capacity is still 100% after a few minutes of flight.")]),t._v(" "),r("p",[t._v("Appropriate values to use are:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("LiPo:")]),t._v(" 4.05V (default in "),r("em",[t._v("QGroundControl")]),t._v(")")]),t._v(" "),r("li",[r("strong",[t._v("LiIon:")]),t._v(" 4.05V")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The voltage of a full battery may drop a small amount over time after charging. Setting a slightly-lower than maximum value compensates for this drop.")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("This setting corresponds to "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("parameters")]),t._v(": "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT1_V_CHARGED"}},[t._v("BAT1_V_CHARGED")]),t._v(" and "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT2_V_CHARGED"}},[t._v("BAT2_V_CHARGED")]),t._v(".")],1)]),t._v(" "),r("h3",{attrs:{id:"空电电压-每个电芯"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#空电电压-每个电芯"}},[t._v("#")]),t._v(" 空电电压（每个电芯）")]),t._v(" "),r("p",[t._v("This sets the nominal minimum safe voltage of each cell (using below this voltage may damage the battery).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("There is no single value at which a battery is said to be empty. If you choose a value that is too low the battery may be damaged due to deep discharge (and/or the vehicle may crash). If you choose a value that is too high you may unnecessarily curtail your flight.")])]),t._v(" "),r("p",[t._v("A rule of thumb for minimum per-cell voltages:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Level")]),t._v(" "),r("th",[t._v("LiPo (V)")]),t._v(" "),r("th",[t._v("LiIon (V)")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Conservative (voltage under no-load)")]),t._v(" "),r("td",[t._v("3.7")]),t._v(" "),r("td",[t._v("3")])]),t._v(" "),r("tr",[r("td",[t._v('"Real" minimum (voltage under load/while flying')]),t._v(" "),r("td",[t._v("3.5")]),t._v(" "),r("td",[t._v("2.7")])]),t._v(" "),r("tr",[r("td",[t._v("Damage battery (voltage under load)")]),t._v(" "),r("td",[t._v("3.0")]),t._v(" "),r("td",[t._v("2.5")])])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("Below the conservative range, the sooner you recharge the battery the better - it will last longer and lose capacity slower.")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("This setting corresponds to "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("parameter")]),t._v(": "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT1_V_EMPTY"}},[t._v("BAT1_V_EMPTY")]),t._v(" and "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT2_V_EMPTY"}},[t._v("BAT2_V_EMPTY")]),t._v(".")],1)]),t._v(" "),r("h3",{attrs:{id:"voltage-divider"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#voltage-divider"}},[t._v("#")]),t._v(" Voltage Divider")]),t._v(" "),r("p",[t._v("If you have a vehicle that measures voltage through a power module and the ADC of the flight controller then you should check and calibrate the measurements once per board. To calibrate you'll need a multimeter.")]),t._v(" "),r("p",[t._v("The easiest way to calibrate the divider is by using "),r("em",[t._v("QGroundControl")]),t._v(" and following the step-by-step guide on "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Power.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Setup > Power Setup"),r("OutboundLink")],1),t._v(" (QGroundControl User Guide).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("This setting corresponds to parameters: "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT1_V_DIV"}},[t._v("BAT1_V_DIV")]),t._v(" and "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT2_V_DIV"}},[t._v("BAT2_V_DIV")]),t._v(".")],1)]),t._v(" "),r("p",[r("span",{attrs:{id:"current_divider"}})]),t._v(" "),r("h3",{attrs:{id:"安培-伏特"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安培-伏特"}},[t._v("#")]),t._v(" 安培/伏特")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("This setting is not needed if you are using the basic configuration (without load compensation etc.)")])]),t._v(" "),r("p",[t._v("If you are using "),r("a",{attrs:{href:"#current_based_load_compensation"}},[t._v("Current-based Load Compensation")]),t._v(" or "),r("a",{attrs:{href:"#current_integration"}},[t._v("Current Integration")]),t._v(" the amps per volt divider must be calibrated.")]),t._v(" "),r("p",[t._v("The easiest way to calibrate the dividers is by using "),r("em",[t._v("QGroundControl")]),t._v(" and following the step-by-step guide on "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Power.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Setup > Power Setup"),r("OutboundLink")],1),t._v(" (QGroundControl User Guide).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("This setting corresponds to parameter(s): "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT1_A_PER_V"}},[t._v("BAT1_A_PER_V")]),t._v(" and "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT2_A_PER_V"}},[t._v("BAT2_A_PER_V")]),t._v(".")],1)]),t._v(" "),r("p",[r("span",{attrs:{id:"load_compensation"}})]),t._v(" "),r("h2",{attrs:{id:"基于电压估计的负载补偿"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基于电压估计的负载补偿"}},[t._v("#")]),t._v(" 基于电压估计的负载补偿")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("With well configured load compensation the voltage used for battery capacity estimation is much more stable, varying far less when flying up and down.")])]),t._v(" "),r("p",[t._v("Load compensation attempts to counteract the fluctuation in measured voltage/estimated capacity under load that occur when using the "),r("a",{attrs:{href:"#basic_settings"}},[t._v("basic configuration")]),t._v(". This works by estimating what the voltage would be for the "),r("em",[t._v("unloaded")]),t._v(" battery, and using that voltage (instead of the measured voltage) for estimating the remaining capacity.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("To use the load compensation you will still need to set the "),r("a",{attrs:{href:"#basic_settings"}},[t._v("basic configuration")]),t._v(". The "),r("em",[t._v("Empty Voltage")]),t._v(" ("),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT_V_EMPTY"}},[t._v("BAT_V_EMPTY")]),t._v(") should be set higher (than without compensation) because the compensated voltage gets used for the estimation (typically set a bit below the expected rest cell voltage when empty after use).")],1)]),t._v(" "),r("p",[t._v("PX4 supports two load compensation methods, which are enabled by "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("setting")]),t._v(" either of the two parameters below:")],1),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT1_R_INTERNAL"}},[t._v("BAT1_R_INTERNAL")]),t._v(" - "),r("a",{attrs:{href:"#current_based_load_compensation"}},[t._v("Current-based Load Compensation")]),t._v(" (recommended).")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT1_V_LOAD_DROP"}},[t._v("BAT1_V_LOAD_DROP")]),t._v(" - "),r("a",{attrs:{href:"#thrust_based_load_compensation"}},[t._v("Thrust-based Load Compensation")]),t._v(".")],1)]),t._v(" "),r("p",[r("span",{attrs:{id:"current_based_load_compensation"}})]),t._v(" "),r("h3",{attrs:{id:"基于电流的负载补偿-推荐"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基于电流的负载补偿-推荐"}},[t._v("#")]),t._v(" 基于电流的负载补偿（推荐）")]),t._v(" "),r("p",[t._v("This load compensation method relies on current measurement to determine load. It is far more accurate than "),r("a",{attrs:{href:"#thrust_based_load_compensation"}},[t._v("Thrust-based Load Compensation")]),t._v(" but requires that you have a current sensor.")]),t._v(" "),r("p",[t._v("To enable this feature:")]),t._v(" "),r("ol",[r("li",[t._v("Set the parameter "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT1_R_INTERNAL"}},[t._v("BAT1_R_INTERNAL")]),t._v(" to the internal resistance of battery 1 (and repeat for other batteries).")],1)]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("There are LiPo chargers out there which can measure the internal resistance of your battery. A typical value is 5mΩ per cell but this can vary with discharge current rating, age and health of the cells.")])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("You should also calibrate the "),r("a",{attrs:{href:"#current_divider"}},[t._v("Amps per volt divider")]),t._v(" in the basic settings screen.")])]),t._v(" "),r("p",[r("span",{attrs:{id:"thrust_based_load_compensation"}})]),t._v(" "),r("h3",{attrs:{id:"thrust-based-load-compensation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#thrust-based-load-compensation"}},[t._v("#")]),t._v(" Thrust-based Load Compensation")]),t._v(" "),r("p",[t._v("This load compensation method estimates the load based on the total thrust that gets commanded to the motors.")]),t._v(" "),r("p",[t._v(":::caution\nThis method is not particularly accurate because there's a delay between thrust command and current, and because the thrust in not linearly proportional to the current. Use "),r("a",{attrs:{href:"#current_based_load_compensation"}},[t._v("Current-based Load Compensation")]),t._v(" instead if your vehicle has a current sensor.\n:::")]),t._v(" "),r("p",[t._v("To enable this feature:")]),t._v(" "),r("ol",[r("li",[t._v("Set the parameter "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT1_V_LOAD_DROP"}},[t._v("BAT1_V_LOAD_DROP")]),t._v(" to how much voltage drop a cell shows under the load of full throttle.")],1)]),t._v(" "),r("p",[r("span",{attrs:{id:"current_integration"}})]),t._v(" "),r("h2",{attrs:{id:"voltage-based-estimation-fused-with-current-integration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#voltage-based-estimation-fused-with-current-integration"}},[t._v("#")]),t._v(" Voltage-based Estimation Fused with Current Integration")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("This is the most accurate way to measure relative battery consumption. If set up correctly with a healthy and fresh charged battery on every boot, then the estimation quality will be comparable to that from a smart battery (and theoretically allow for accurate remaining flight time estimation).")])]),t._v(" "),r("p",[t._v("This method evaluates the remaining battery capacity by "),r("em",[t._v("fusing")]),t._v(" the voltage-based estimate for the available capacity with a current-based estimate of the charge that has been consumed. It requires hardware that can accurately measure current.")]),t._v(" "),r("p",[t._v("To enable this feature:")]),t._v(" "),r("ol",[r("li",[t._v("首先使用 "),r("a",{attrs:{href:"#current_based_load_compensation"}},[t._v("当前负载补偿")]),t._v(" 精确校准电压估计。")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("Including calibrating the "),r("a",{attrs:{href:"#current_divider"}},[t._v("Amps per volt divider")]),t._v(" setting.")])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("Set the parameter "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#BAT1_CAPACITY"}},[t._v("BAT1_CAPACITY")]),t._v(" to around 90% of the advertised battery capacity (usually printed on the battery label).")],1)]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("Do not set this value too high as this may result in a poor estimation or sudden drops in estimated capacity.")])]),t._v(" "),r("hr"),t._v(" "),r("p",[r("strong",[t._v("Additional information")])]),t._v(" "),r("p",[t._v("The estimate of the charge that has been consumed over time is produced by mathematically integrating the measured current (this approach provides very accurate energy consumption estimates).")]),t._v(" "),r("p",[t._v("At system startup PX4 first uses a voltage-based estimate to determine the initial battery charge. This estimate is then fused with the value from current integration to provide a combined better estimate. The relative value placed on each estimate in the fused result depends on the battery state. The emptier the battery gets, the more of the voltage based estimate gets fused in. This prevents deep discharge (e.g. because it was configured with the wrong capacity or the start value was wrong).")]),t._v(" "),r("p",[t._v("If you always start with a healthy full battery, this approach is similar to that used by a smart battery.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("Current integration cannot be used on its own (without voltage-based estimation) because it has no way to determine the "),r("em",[t._v("initial")]),t._v(" capacity. Voltage-estimation allows you to estimate the initial capacity and provides ongoing feedback of possible errors (e.g. if the battery is faulty, or if there is a mismatch between capacity calculated using different methods).")])]),t._v(" "),r("h2",{attrs:{id:"parameter-migration-notes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameter-migration-notes"}},[t._v("#")]),t._v(" Parameter Migration Notes")]),t._v(" "),r("p",[t._v("Multiple battery support was added after PX4 v1.10, resulting in the creation of new parameters with prefix "),r("code",[t._v("BAT1_")]),t._v(" corresponding to all the old parameters with prefix "),r("code",[t._v("BAT_")]),t._v(". Changes to "),r("code",[t._v("BAT_")]),t._v(" and "),r("code",[t._v("BAT1_")]),t._v(" are currently synchronised:")]),t._v(" "),r("ul",[r("li",[t._v("If either the old or new parameters is changed, the value is copied into the other parameter (they are kept in sync in both directions).")]),t._v(" "),r("li",[t._v("If the old/new parameters are different at boot, then the value of the old "),r("code",[t._v("BAT_")]),t._v(" parameter is copied into the new "),r("code",[t._v("BAT1_")]),t._v(" parameter.")])]),t._v(" "),r("h2",{attrs:{id:"battery-type-comparison"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#battery-type-comparison"}},[t._v("#")]),t._v(" Battery-Type Comparison")]),t._v(" "),r("p",[t._v("This section provides a comparative overview of several different battery types (in particular LiPo and Li-Ion).")]),t._v(" "),r("h3",{attrs:{id:"综述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#综述"}},[t._v("#")]),t._v(" 综述")]),t._v(" "),r("ul",[r("li",[t._v("Li-Ion batteries have a higher energy density than Lipo battery packs but that comes at the expense of lower discharge rates and increased battery cost.")]),t._v(" "),r("li",[t._v("LiPo batteries are readily available and can withstand higher discharge rates that are common in multi-rotor aircraft.")]),t._v(" "),r("li",[t._v("The choice needs to be made based on the vehicle and the mission being flown. If absolute endurance is the aim then there is more of a benefit to flying to a Li-Ion battery but similarly, more caution needs to be taken. As such, the decision should be made based on the factors surrounding the flight.")])]),t._v(" "),r("h3",{attrs:{id:"优势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),r("p",[t._v("LiPo")]),t._v(" "),r("ul",[r("li",[t._v("Very common")]),t._v(" "),r("li",[t._v("Wide range of sizes, capacities and voltages")]),t._v(" "),r("li",[t._v("Inexpensive")]),t._v(" "),r("li",[t._v("High discharge rates relative to capacity (high C ratings)")]),t._v(" "),r("li",[t._v("Higher charge rates")])]),t._v(" "),r("p",[t._v("Li-Ion")]),t._v(" "),r("ul",[r("li",[t._v("Much higher energy density (up to 60% higher)")])]),t._v(" "),r("h3",{attrs:{id:"缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点:")]),t._v(" "),r("p",[t._v("LiPo")]),t._v(" "),r("ul",[r("li",[t._v("Low (relative) energy density")]),t._v(" "),r("li",[t._v("Quality can vary given abundance of suppliers")])]),t._v(" "),r("p",[t._v("Li-Ion")]),t._v(" "),r("ul",[r("li",[t._v("Not as common")]),t._v(" "),r("li",[t._v("Much more expensive")]),t._v(" "),r("li",[t._v("Not as widely available in large sizes and configurations")]),t._v(" "),r("li",[t._v("All cells are relatively small so larger packs are made up of many cells tied in series and parallel to create the required voltage and capacity")]),t._v(" "),r("li",[t._v("Lower discharge rates relative to battery size (C rating)")]),t._v(" "),r("li",[t._v("More difficult to adapt to vehicles that require high currents")]),t._v(" "),r("li",[t._v("Lower charging rates (relative to capacity)")]),t._v(" "),r("li",[t._v("Requires more stringent temperature monitoring during charge and discharge")]),t._v(" "),r("li",[t._v('Requires settings changes on the ESC to utilize max capacity ("standard" ESC low voltage settings are too high).')]),t._v(" "),r("li",[t._v("At close-to-empty the voltage of the battery is such that a ~3V difference is possible between a Lipo to Li-ion (while using a 6S battery). This could have implications on thrust expectations.")])]),t._v(" "),r("h3",{attrs:{id:"c-ratings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#c-ratings"}},[t._v("#")]),t._v(" C Ratings")]),t._v(" "),r("ul",[r("li",[t._v("A C rating is simply a multiple of the stated capacity of any battery type.")]),t._v(" "),r("li",[t._v("A C rating is relevant (and differs) for both charge and discharge rates.\n"),r("ul",[r("li",[t._v("For example, a 2000 mAh battery (irrespective of voltage) with a 10C discharge rate can safely and continuously discharge 20 amps of current (2000/1000=2Ah x 10C = 20 amps).")])])]),t._v(" "),r("li",[t._v("C Ratings are always given by the manufacturer (often on the outside of the battery pack). While they can actually be calculated, you need several pieces of information, and to measure the internal resistance of the cells.")]),t._v(" "),r("li",[t._v("LiPo batteries will always have a higher C rating than a Li-Ion battery. This is due to chemistry type but also to the internal resistance per cell (which is due to the chemistry type) leading to higher discharge rates for LiPo batteries.")]),t._v(" "),r("li",[t._v("Following manufacturer guidelines for both charge and discharge C ratings is very important for the health of your battery and to operate your vehicle safely (i.e. reduce fires, “puffing” packs and other suboptimal states during charging and discharging).")])]),t._v(" "),r("h3",{attrs:{id:"energy-density"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#energy-density"}},[t._v("#")]),t._v(" Energy Density")]),t._v(" "),r("ul",[r("li",[t._v("Energy density is how much energy is able to be stored relative to battery weight. It is generally measured and compared in Watt Hour per Kilogram (Wh/Kg).\n"),r("ul",[r("li",[t._v("Watt-hours are simply calculated by taking the nominal (i.e. not the fully charged voltage) multiplied by the capacity, e.g. 3.7v X 5 Ah = 18.5Wh. If you had a 3 cell battery pack your pack would be 18.5Wh X 3 = 55 Wh of stored energy.")])])]),t._v(" "),r("li",[t._v("When you take battery weight into account you calculate energy density by taking the watt-hours and dividing them by weight.\n"),r("ul",[r("li",[t._v("E.g. 55 Wh divided by (battery weight in grams divided by 1000). Assuming this battery weighed 300 grams then 55/(300/1000)=185 Wh/Kg.")])])]),t._v(" "),r("li",[t._v("This number 185 Wh/Kg would be on the very high-end for a LiPo battery. A Li-Ion battery on the other hand can reach 260 Wh/Kg, meaning per kilogram of battery onboard you can carry 75 more watt-hours.\n"),r("ul",[r("li",[t._v("If you know how many watts your vehicle takes to fly (which a battery current module can show you), you can equate this increased storage at no additional weight into increased flight time.")])])])])])}),[],!1,null,null,null);e.default=s.exports},613:function(t,e,a){t.exports=a.p+"assets/img/qgc_setup_power_px4.f2dcb564.jpg"}}]);