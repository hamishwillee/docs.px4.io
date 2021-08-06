(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{1539:function(e,t,a){"use strict";a.r(t);var o=a(19),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"battery-and-power-module-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#battery-and-power-module-setup"}},[e._v("#")]),e._v(" Battery and Power Module Setup")]),e._v(" "),o("p",[e._v("This topic explains how to configure power settings.")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("The battery monitoring features of PX4 can only be used if you have compatible hardware.\nIn most cases this means a power module that measures the battery voltage, and may also measure the current between battery and vehicle.")])]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("The goal of the power setup is to provide a good estimate of remaining battery percentage (and capacity), so that the vehicle is not used to the point that it runs out of power and crashes (or the battery is damaged due to deep-discharge).")]),e._v(" "),o("p",[e._v("PX4 provides a number of (progressively more effective) methods that can be used to estimate the capacity:")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"#basic_settings"}},[e._v("Basic Battery Settings")]),e._v(' (default): raw measured voltage is compared to the range between "empty" and "full" voltages.\nThis results in coarse estimates because measured voltage (and its corresponding capacity) will fluctuate under load.')]),e._v(" "),o("li",[o("a",{attrs:{href:"#load_compensation"}},[e._v("Voltage-based Estimation with Load Compensation")]),e._v(": Counteracts the effects of loading on the capacity calculation.")]),e._v(" "),o("li",[o("a",{attrs:{href:"#current_integration"}},[e._v("Voltage-based Estimation with Current Integration")]),e._v(": Fuses the load-compensated voltage-based estimate for the available capacity with a current-based estimate of the charge that has been consumed.\nThis results in a capacity estimate that is comparable to that of a smart battery.")])]),e._v(" "),o("p",[e._v("Later methods build on preceding methods.\nThe approach you use will depend on whether the vehicle's power module can measure current.")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("The instructions below refer to battery 1 calibration parameters: "),o("code",[e._v("BAT1_*")]),e._v(".\nOther batteries use the "),o("code",[e._v("BATx_*")]),e._v(" parameters, where "),o("code",[e._v("x")]),e._v(" is the battery number.\nAll battery calibration parameters "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#battery-calibration"}},[e._v("are listed here")]),e._v(".")],1)]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v('In addition to PX4 configuration discussed here, you should ensure that the ESC\'s low voltage cutoff is either disabled or set below the expected minimum voltage.\nThis ensures that the battery failsafe behaviour is managed by PX4, and that ESCs will not cut out while the battery still has charge (according to the "empty-battery" setting that you have chosen).')])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[o("a",{attrs:{href:"#battery-type-comparison"}},[e._v("Battery-Type Comparison")]),e._v(" below explains the difference between the main battery types, and how that impacts the battery settings.")])]),e._v(" "),o("p",[o("span",{attrs:{id:"basic_settings"}})]),e._v(" "),o("h2",{attrs:{id:"basic-battery-settings-default"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-battery-settings-default"}},[e._v("#")]),e._v(" Basic Battery Settings (default)")]),e._v(" "),o("p",[e._v('The basic battery settings configure PX4 to use the default method for capacity estimate.\nThis method compares the measured raw battery voltage to the range between cell voltages for "empty" and "full" cells (scaled by the number of cells).')]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("This approach results in relatively coarse estimations due to fluctuations in the estimated charge as the measured voltage changes under load.")])]),e._v(" "),o("p",[e._v("To configure the basic settings for battery 1:")]),e._v(" "),o("ol",[o("li",[e._v("Start "),o("em",[e._v("QGroundControl")]),e._v(" and connect the vehicle.")]),e._v(" "),o("li",[e._v("Select the "),o("strong",[e._v("Gear")]),e._v(" icon (Vehicle Setup) in the top toolbar and then "),o("strong",[e._v("Power")]),e._v(" in the sidebar.")])]),e._v(" "),o("p",[e._v("You are presented with the basic settings that characterize the battery.\nThe sections below explain what values to set for each field.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(610),alt:"QGC Power Setup"}})]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("At time of writing "),o("em",[e._v("QGroundControl")]),e._v(" only allows you to set values for battery 1 in this view.\nFor vehicles with multiple batteries you'll need to directly "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("set the parameters")]),e._v(" for battery 2 ("),o("code",[e._v("BAT2_*")]),e._v("), as described in the following sections.")],1)]),e._v(" "),o("h3",{attrs:{id:"number-of-cells-in-series"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#number-of-cells-in-series"}},[e._v("#")]),e._v(" Number of Cells (in Series)")]),e._v(" "),o("p",[e._v('This sets the number of cells connected in series in the battery.\nTypically this will be written on the battery as a number followed by "S" (e.g "3S", "5S").')]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("The voltage across a single galvanic battery cell is dependent on the chemical properties of the battery type.\nLithium-Polymer (LiPo) batteries and Lithium-Ion batteries both have the same "),o("em",[e._v("nominal")]),e._v(" cell voltage of 3.7V.\nIn order to achieve higher voltages (which will more efficiently power a vehicle), multiple cells are connected in "),o("em",[e._v("series")]),e._v(".\nThe battery voltage at the terminals is then a multiple of the cell voltage.")])]),e._v(" "),o("p",[e._v("If the number of cells is not supplied you can calculate it by dividing the battery voltage by the nominal voltage for a single cell.\nThe table below shows the voltage-to-cell relationship for these batteries:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Cells")]),e._v(" "),o("th",[e._v("LiPo (V)")]),e._v(" "),o("th",[e._v("LiIon (V)")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("1S")]),e._v(" "),o("td",[e._v("3.7")]),e._v(" "),o("td",[e._v("3.7")])]),e._v(" "),o("tr",[o("td",[e._v("2S")]),e._v(" "),o("td",[e._v("7.4")]),e._v(" "),o("td",[e._v("7.4")])]),e._v(" "),o("tr",[o("td",[e._v("3S")]),e._v(" "),o("td",[e._v("11.1")]),e._v(" "),o("td",[e._v("11.1")])]),e._v(" "),o("tr",[o("td",[e._v("4S")]),e._v(" "),o("td",[e._v("14.8")]),e._v(" "),o("td",[e._v("14.8")])]),e._v(" "),o("tr",[o("td",[e._v("5S")]),e._v(" "),o("td",[e._v("18.5")]),e._v(" "),o("td",[e._v("18.5")])]),e._v(" "),o("tr",[o("td",[e._v("6S")]),e._v(" "),o("td",[e._v("22.2")]),e._v(" "),o("td",[e._v("22.2")])])])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("This setting corresponds to "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("parameters")]),e._v(": "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT1_N_CELLS"}},[e._v("BAT1_N_CELLS")]),e._v(" and "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT2_N_CELLS"}},[e._v("BAT2_N_CELLS")]),e._v(".")],1)]),e._v(" "),o("h3",{attrs:{id:"full-voltage-per-cell"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#full-voltage-per-cell"}},[e._v("#")]),e._v(" Full Voltage (per cell)")]),e._v(" "),o("p",[e._v("This sets the "),o("em",[e._v("nominal")]),e._v(' maximum voltage of each cell (the lowest voltage at which the cell will be considered "full").')]),e._v(" "),o("p",[e._v("The value should be set slightly lower that the nominal maximum cell voltage for the battery, but not so low that the estimated capacity is still 100% after a few minutes of flight.")]),e._v(" "),o("p",[e._v("Appropriate values to use are:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("LiPo:")]),e._v(" 4.05V (default in "),o("em",[e._v("QGroundControl")]),e._v(")")]),e._v(" "),o("li",[o("strong",[e._v("LiIon:")]),e._v(" 4.05V")])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("The voltage of a full battery may drop a small amount over time after charging.\nSetting a slightly-lower than maximum value compensates for this drop.")])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("This setting corresponds to "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("parameters")]),e._v(": "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT1_V_CHARGED"}},[e._v("BAT1_V_CHARGED")]),e._v(" and "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT2_V_CHARGED"}},[e._v("BAT2_V_CHARGED")]),e._v(".")],1)]),e._v(" "),o("h3",{attrs:{id:"empty-voltage-per-cell"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#empty-voltage-per-cell"}},[e._v("#")]),e._v(" Empty Voltage (per cell)")]),e._v(" "),o("p",[e._v("This sets the nominal minimum safe voltage of each cell (using below this voltage may damage the battery).")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("There is no single value at which a battery is said to be empty.\nIf you choose a value that is too low the battery may be damaged due to deep discharge (and/or the vehicle may crash).\nIf you choose a value that is too high you may unnecessarily curtail your flight.")])]),e._v(" "),o("p",[e._v("A rule of thumb for minimum per-cell voltages:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Level")]),e._v(" "),o("th",[e._v("LiPo (V)")]),e._v(" "),o("th",[e._v("LiIon (V)")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Conservative (voltage under no-load)")]),e._v(" "),o("td",[e._v("3.7")]),e._v(" "),o("td",[e._v("3")])]),e._v(" "),o("tr",[o("td",[e._v('"Real" minimum (voltage under load/while flying')]),e._v(" "),o("td",[e._v("3.5")]),e._v(" "),o("td",[e._v("2.7")])]),e._v(" "),o("tr",[o("td",[e._v("Damage battery (voltage under load)")]),e._v(" "),o("td",[e._v("3.0")]),e._v(" "),o("td",[e._v("2.5")])])])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Below the conservative range, the sooner you recharge the battery the better - it will last longer and lose capacity slower.")])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("This setting corresponds to "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("parameter")]),e._v(": "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT1_V_EMPTY"}},[e._v("BAT1_V_EMPTY")]),e._v(" and "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT2_V_EMPTY"}},[e._v("BAT2_V_EMPTY")]),e._v(".")],1)]),e._v(" "),o("h3",{attrs:{id:"voltage-divider"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#voltage-divider"}},[e._v("#")]),e._v(" Voltage Divider")]),e._v(" "),o("p",[e._v("If you have a vehicle that measures voltage through a power module and the ADC of the flight controller then you should check and calibrate the measurements once per board. To calibrate you'll need a multimeter.")]),e._v(" "),o("p",[e._v("The easiest way to calibrate the divider is by using "),o("em",[e._v("QGroundControl")]),e._v(" and following the step-by-step guide on "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Power.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setup > Power Setup"),o("OutboundLink")],1),e._v(" (QGroundControl User Guide).")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("This setting corresponds to parameters: "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT1_V_DIV"}},[e._v("BAT1_V_DIV")]),e._v(" and "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT2_V_DIV"}},[e._v("BAT2_V_DIV")]),e._v(".")],1)]),e._v(" "),o("p",[o("span",{attrs:{id:"current_divider"}})]),e._v(" "),o("h3",{attrs:{id:"amps-per-volt"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#amps-per-volt"}},[e._v("#")]),e._v(" Amps per volt")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("This setting is not needed if you are using the basic configuration (without load compensation etc.)")])]),e._v(" "),o("p",[e._v("If you are using "),o("a",{attrs:{href:"#current_based_load_compensation"}},[e._v("Current-based Load Compensation")]),e._v(" or "),o("a",{attrs:{href:"#current_integration"}},[e._v("Current Integration")]),e._v(" the amps per volt divider must be calibrated.")]),e._v(" "),o("p",[e._v("The easiest way to calibrate the dividers is by using "),o("em",[e._v("QGroundControl")]),e._v(" and following the step-by-step guide on "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Power.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setup > Power Setup"),o("OutboundLink")],1),e._v(" (QGroundControl User Guide).")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("This setting corresponds to parameter(s): "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT1_A_PER_V"}},[e._v("BAT1_A_PER_V")]),e._v(" and "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT2_A_PER_V"}},[e._v("BAT2_A_PER_V")]),e._v(".")],1)]),e._v(" "),o("p",[o("span",{attrs:{id:"load_compensation"}})]),e._v(" "),o("h2",{attrs:{id:"voltage-based-estimation-with-load-compensation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#voltage-based-estimation-with-load-compensation"}},[e._v("#")]),e._v(" Voltage-based Estimation with Load Compensation")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("With well configured load compensation the voltage used for battery capacity estimation is much more stable, varying far less when flying up and down.")])]),e._v(" "),o("p",[e._v("Load compensation attempts to counteract the fluctuation in measured voltage/estimated capacity under load that occur when using the "),o("a",{attrs:{href:"#basic_settings"}},[e._v("basic configuration")]),e._v(". This works by estimating what the voltage would be for the "),o("em",[e._v("unloaded")]),e._v(" battery, and using that voltage (instead of the measured voltage) for estimating the remaining capacity.")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("To use the load compensation you will still need to set the "),o("a",{attrs:{href:"#basic_settings"}},[e._v("basic configuration")]),e._v(". The "),o("em",[e._v("Empty Voltage")]),e._v(" ("),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT_V_EMPTY"}},[e._v("BAT_V_EMPTY")]),e._v(") should be set higher (than without compensation) because the compensated voltage gets used for the estimation (typically set a bit below the expected rest cell voltage when empty after use).")],1)]),e._v(" "),o("p",[e._v("PX4 supports two load compensation methods, which are enabled by "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("setting")]),e._v(" either of the two parameters below:")],1),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT1_R_INTERNAL"}},[e._v("BAT1_R_INTERNAL")]),e._v(" - "),o("a",{attrs:{href:"#current_based_load_compensation"}},[e._v("Current-based Load Compensation")]),e._v(" (recommended).")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT1_V_LOAD_DROP"}},[e._v("BAT1_V_LOAD_DROP")]),e._v(" - "),o("a",{attrs:{href:"#thrust_based_load_compensation"}},[e._v("Thrust-based Load Compensation")]),e._v(".")],1)]),e._v(" "),o("p",[o("span",{attrs:{id:"current_based_load_compensation"}})]),e._v(" "),o("h3",{attrs:{id:"current-based-load-compensation-recommended"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#current-based-load-compensation-recommended"}},[e._v("#")]),e._v(" Current-based Load Compensation (recommended)")]),e._v(" "),o("p",[e._v("This load compensation method relies on current measurement to determine load.\nIt is far more accurate than "),o("a",{attrs:{href:"#thrust_based_load_compensation"}},[e._v("Thrust-based Load Compensation")]),e._v(" but requires that you have a current sensor.")]),e._v(" "),o("p",[e._v("To enable this feature:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Set the parameter "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT1_R_INTERNAL"}},[e._v("BAT1_R_INTERNAL")]),e._v(" to the internal resistance of  battery 1 (and repeat for other batteries).")],1),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("There are LiPo chargers out there which can measure the internal resistance of your battery.\nA typical value is 5mΩ per cell but this can vary with discharge current rating, age and health of the cells.")])])]),e._v(" "),o("li",[o("p",[e._v("You should also calibrate the "),o("a",{attrs:{href:"#current_divider"}},[e._v("Amps per volt divider")]),e._v(" in the basic settings screen.")])])]),e._v(" "),o("p",[o("span",{attrs:{id:"thrust_based_load_compensation"}})]),e._v(" "),o("h3",{attrs:{id:"thrust-based-load-compensation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#thrust-based-load-compensation"}},[e._v("#")]),e._v(" Thrust-based Load Compensation")]),e._v(" "),o("p",[e._v("This load compensation method estimates the load based on the total thrust that gets commanded to the motors.")]),e._v(" "),o("p",[e._v(":::caution\nThis method is not particularly accurate because there's a delay between thrust command and current, and because the thrust in not linearly proportional to the current.\nUse "),o("a",{attrs:{href:"#current_based_load_compensation"}},[e._v("Current-based Load Compensation")]),e._v(" instead if your vehicle has a current sensor.\n:::")]),e._v(" "),o("p",[e._v("To enable this feature:")]),e._v(" "),o("ol",[o("li",[e._v("Set the parameter "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT1_V_LOAD_DROP"}},[e._v("BAT1_V_LOAD_DROP")]),e._v(" to how much voltage drop a cell shows under the load of full throttle.")],1)]),e._v(" "),o("p",[o("span",{attrs:{id:"current_integration"}})]),e._v(" "),o("h2",{attrs:{id:"voltage-based-estimation-fused-with-current-integration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#voltage-based-estimation-fused-with-current-integration"}},[e._v("#")]),e._v(" Voltage-based Estimation Fused with Current Integration")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("This is the most accurate way to measure relative battery consumption.\nIf set up correctly with a healthy and fresh charged battery on every boot, then the estimation quality will be comparable to that from a smart battery (and theoretically allow for accurate remaining flight time estimation).")])]),e._v(" "),o("p",[e._v("This method evaluates the remaining battery capacity by "),o("em",[e._v("fusing")]),e._v(" the voltage-based estimate for the available capacity with a current-based estimate of the charge that has been consumed.\nIt requires hardware that can accurately measure current.")]),e._v(" "),o("p",[e._v("To enable this feature:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("First set up accurate voltage estimation using "),o("a",{attrs:{href:"#current_based_load_compensation"}},[e._v("current-based load compensation")]),e._v(".")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Including calibrating the "),o("a",{attrs:{href:"#current_divider"}},[e._v("Amps per volt divider")]),e._v(" setting.")])])]),e._v(" "),o("li",[o("p",[e._v("Set the parameter "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#BAT1_CAPACITY"}},[e._v("BAT1_CAPACITY")]),e._v(" to around 90% of the advertised battery capacity (usually printed on the battery label).")],1),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("Do not set this value too high as this may result in a poor estimation or sudden drops in estimated capacity.")])])])]),e._v(" "),o("hr"),e._v(" "),o("p",[o("strong",[e._v("Additional information")])]),e._v(" "),o("p",[e._v("The estimate of the charge that has been consumed over time is produced by mathematically integrating the measured current (this approach provides very accurate energy consumption estimates).")]),e._v(" "),o("p",[e._v("At system startup PX4 first uses a voltage-based estimate to determine the initial battery charge. This estimate is then fused with the value from current integration to provide a combined better estimate.\nThe relative value placed on each estimate in the fused result depends on the battery state.\nThe emptier the battery gets, the more of the voltage based estimate gets fused in. This prevents deep discharge (e.g. because it was configured with the wrong capacity or the start value was wrong).")]),e._v(" "),o("p",[e._v("If you always start with a healthy full battery, this approach is similar to that used by a smart battery.")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("Current integration cannot be used on its own (without voltage-based estimation) because it has no way to determine the "),o("em",[e._v("initial")]),e._v(" capacity.\nVoltage-estimation allows you to estimate the initial capacity and provides ongoing feedback of possible errors (e.g. if the battery is faulty, or if there is a mismatch between capacity calculated using different methods).")])]),e._v(" "),o("h2",{attrs:{id:"parameter-migration-notes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parameter-migration-notes"}},[e._v("#")]),e._v(" Parameter Migration Notes")]),e._v(" "),o("p",[e._v("Multiple battery support was added after PX4 v1.10, resulting in the creation of new parameters with prefix "),o("code",[e._v("BAT1_")]),e._v(" corresponding to all the old parameters with prefix "),o("code",[e._v("BAT_")]),e._v(".\nChanges to "),o("code",[e._v("BAT_")]),e._v(" and "),o("code",[e._v("BAT1_")]),e._v(" are currently synchronised:")]),e._v(" "),o("ul",[o("li",[e._v("If either the old or new parameters is changed, the value is copied into the other parameter (they are kept in sync in both directions).")]),e._v(" "),o("li",[e._v("If the old/new parameters are different at boot, then the value of the old "),o("code",[e._v("BAT_")]),e._v(" parameter is copied into the new "),o("code",[e._v("BAT1_")]),e._v(" parameter.")])]),e._v(" "),o("h2",{attrs:{id:"battery-type-comparison"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#battery-type-comparison"}},[e._v("#")]),e._v(" Battery-Type Comparison")]),e._v(" "),o("p",[e._v("This section provides a comparative overview of several different battery types (in particular LiPo and Li-Ion).")]),e._v(" "),o("h3",{attrs:{id:"overview-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview-2"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("ul",[o("li",[e._v("Li-Ion batteries have a higher energy density than Lipo battery packs but that comes at the expense of lower discharge rates and increased battery cost.")]),e._v(" "),o("li",[e._v("LiPo batteries are readily available and can withstand higher discharge rates that are common in multi-rotor aircraft.")]),e._v(" "),o("li",[e._v("The choice needs to be made based on the vehicle and the mission being flown.\nIf absolute endurance is the aim then there is more of a benefit to flying to a Li-Ion battery but similarly, more caution needs to be taken.\nAs such, the decision should be made based on the factors surrounding the flight.")])]),e._v(" "),o("h3",{attrs:{id:"advantages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#advantages"}},[e._v("#")]),e._v(" Advantages")]),e._v(" "),o("p",[e._v("LiPo")]),e._v(" "),o("ul",[o("li",[e._v("Very common")]),e._v(" "),o("li",[e._v("Wide range of sizes, capacities and voltages")]),e._v(" "),o("li",[e._v("Inexpensive")]),e._v(" "),o("li",[e._v("High discharge rates relative to capacity (high C ratings)")]),e._v(" "),o("li",[e._v("Higher charge rates")])]),e._v(" "),o("p",[e._v("Li-Ion")]),e._v(" "),o("ul",[o("li",[e._v("Much higher energy density (up to 60% higher)")])]),e._v(" "),o("h3",{attrs:{id:"disadvantages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disadvantages"}},[e._v("#")]),e._v(" Disadvantages:")]),e._v(" "),o("p",[e._v("LiPo")]),e._v(" "),o("ul",[o("li",[e._v("Low (relative) energy density")]),e._v(" "),o("li",[e._v("Quality can vary given abundance of suppliers")])]),e._v(" "),o("p",[e._v("Li-Ion")]),e._v(" "),o("ul",[o("li",[e._v("Not as common")]),e._v(" "),o("li",[e._v("Much more expensive")]),e._v(" "),o("li",[e._v("Not as widely available in large sizes and configurations")]),e._v(" "),o("li",[e._v("All cells are relatively small so larger packs are made up of many cells tied in series and parallel to create the required voltage and capacity")]),e._v(" "),o("li",[e._v("Lower discharge rates relative to battery size (C rating)")]),e._v(" "),o("li",[e._v("More difficult to adapt to vehicles that require high currents")]),e._v(" "),o("li",[e._v("Lower charging rates (relative to capacity)")]),e._v(" "),o("li",[e._v("Requires more stringent temperature monitoring during charge and discharge")]),e._v(" "),o("li",[e._v('Requires settings changes on the ESC to utilize max capacity ("standard" ESC low voltage settings are too high).')]),e._v(" "),o("li",[e._v("At close-to-empty the voltage of the battery is such that a ~3V difference is possible between a Lipo to Li-ion (while using a 6S battery).\nThis could have implications on thrust expectations.")])]),e._v(" "),o("h3",{attrs:{id:"c-ratings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#c-ratings"}},[e._v("#")]),e._v(" C Ratings")]),e._v(" "),o("ul",[o("li",[e._v("A C rating is simply a multiple of the stated capacity of any battery type.")]),e._v(" "),o("li",[e._v("A C rating is relevant (and differs) for both charge and discharge rates.\n"),o("ul",[o("li",[e._v("For example, a 2000 mAh battery (irrespective of voltage) with a 10C discharge rate can safely and continuously discharge 20 amps of current (2000/1000=2Ah x 10C = 20 amps).")])])]),e._v(" "),o("li",[e._v("C Ratings are always given by the manufacturer (often on the outside of the battery pack).\nWhile they can actually be calculated, you need several pieces of information, and to measure the internal resistance of the cells.")]),e._v(" "),o("li",[e._v("LiPo batteries will always have a higher C rating than a Li-Ion battery.\nThis is due to chemistry type but also to the internal resistance per cell (which is due to the chemistry type) leading to higher discharge rates for LiPo batteries.")]),e._v(" "),o("li",[e._v("Following manufacturer guidelines for both charge and discharge C ratings is very important for the health of your battery and to operate your vehicle safely (i.e. reduce fires, “puffing” packs and other suboptimal states during charging and discharging).")])]),e._v(" "),o("h3",{attrs:{id:"energy-density"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#energy-density"}},[e._v("#")]),e._v(" Energy Density")]),e._v(" "),o("ul",[o("li",[e._v("Energy density is how much energy is able to be stored relative to battery weight.\nIt is generally measured and compared in Watt Hour per Kilogram (Wh/Kg).\n"),o("ul",[o("li",[e._v("Watt-hours are simply calculated by taking the nominal (i.e. not the fully charged voltage) multiplied by the capacity, e.g. 3.7v X 5 Ah = 18.5Wh.\nIf you had a 3 cell battery pack your pack would be 18.5Wh X 3 = 55 Wh of stored energy.")])])]),e._v(" "),o("li",[e._v("When you take battery weight into account you calculate energy density by taking the watt-hours and dividing them by weight.\n"),o("ul",[o("li",[e._v("E.g. 55 Wh divided by (battery weight in grams divided by 1000).\nAssuming this battery weighed 300 grams then 55/(300/1000)=185 Wh/Kg.")])])]),e._v(" "),o("li",[e._v("This number 185 Wh/Kg would be on the very high-end for a LiPo battery.\nA Li-Ion battery on the other hand can reach 260 Wh/Kg, meaning per kilogram of battery onboard you can carry 75 more watt-hours.\n"),o("ul",[o("li",[e._v("If you know how many watts your vehicle takes to fly (which a battery current module can show you), you can equate this increased storage at no additional weight into increased flight time.")])])])])])}),[],!1,null,null,null);t.default=r.exports},610:function(e,t,a){e.exports=a.p+"assets/img/qgc_setup_power_px4.f2dcb564.jpg"}}]);