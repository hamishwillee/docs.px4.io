(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{1893:function(e,t,a){"use strict";a.r(t);var r=a(18),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"battery-and-power-module-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#battery-and-power-module-setup"}},[e._v("#")]),e._v(" Battery and Power Module Setup")]),e._v(" "),r("p",[e._v("This topic explains how to configure power settings.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" The battery monitoring features of PX4 can only be used if you have compatible hardware. In most cases this means a power module that measures the battery voltage, and may also measure the current between battery and vehicle.")])]),e._v(" "),r("h2",{attrs:{id:"개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[e._v("#")]),e._v(" 개요")]),e._v(" "),r("p",[e._v("The goal of the power setup is to provide a good estimate of remaining battery percentage (and capacity), so that the vehicle is not used to the point that it runs out of power and crashes (or the battery is damaged due to deep-discharge).")]),e._v(" "),r("p",[e._v("PX4 provides a number of (progressively more effective) methods that can be used to estimate the capacity:")]),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#basic_settings"}},[e._v("Basic Battery Settings")]),e._v(' (default): raw measured voltage is compared to the range between "empty" and "full" voltages. This results in coarse estimates because measured voltage (and its corresponding capacity) will fluctuate under load.')]),e._v(" "),r("li",[r("a",{attrs:{href:"#load_compensation"}},[e._v("Voltage-based Estimation with Load Compensation")]),e._v(": Counteracts the effects of loading on the capacity calculation.")]),e._v(" "),r("li",[r("a",{attrs:{href:"#current_integration"}},[e._v("Voltage-based Estimation with Current Integration")]),e._v(": Fuses the load-compensated voltage-based estimate for the available capacity with a current-based estimate of the charge that has been consumed. This results in a capacity estimate that is comparable to that of a smart battery.")])]),e._v(" "),r("p",[e._v("Later methods build on preceding methods. The approach you use will depend on whether the vehicle's power module can measure current.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" The instructions below refer to battery 1 calibration parameters: "),r("code",[e._v("BAT1_*")]),e._v(". Other batteries use the "),r("code",[e._v("BATx_*")]),e._v(" parameters, where "),r("code",[e._v("x")]),e._v(" is the battery number. All battery calibration parameters "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#battery-calibration"}},[e._v("are listed here")]),e._v(".")],1)]),e._v(" "),r("p",[r("span")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(' In addition to PX4 configuration discussed here, you should ensure that the ESC\'s low voltage cutoff is either disabled or set below the expected minimum voltage. This ensures that the battery failsafe behaviour is managed by PX4, and that ESCs will not cut out while the battery still has charge (according to the "empty-battery" setting that you have chosen).')])]),e._v(" "),r("p",[r("span")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" "),r("a",{attrs:{href:"#battery-type-comparison"}},[e._v("Battery-Type Comparison")]),e._v(" below explains the difference between the main battery types, and how that impacts the battery settings.")])]),e._v(" "),r("p",[r("span",{attrs:{id:"basic_settings"}})]),e._v(" "),r("h2",{attrs:{id:"basic-battery-settings-default"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-battery-settings-default"}},[e._v("#")]),e._v(" Basic Battery Settings (default)")]),e._v(" "),r("p",[e._v('The basic battery settings configure PX4 to use the default method for capacity estimate. This method compares the measured raw battery voltage to the range between cell voltages for "empty" and "full" cells (scaled by the number of cells).')]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" This approach results in relatively coarse estimations due to fluctuations in the estimated charge as the measured voltage changes under load.")])]),e._v(" "),r("p",[e._v("To configure the basic settings for battery 1:")]),e._v(" "),r("ol",[r("li",[e._v("Start "),r("em",[e._v("QGroundControl")]),e._v(" and connect the vehicle.")]),e._v(" "),r("li",[e._v("Select the "),r("strong",[e._v("Gear")]),e._v(" icon (Vehicle Setup) in the top toolbar and then "),r("strong",[e._v("Power")]),e._v(" in the sidebar.")])]),e._v(" "),r("p",[e._v("You are presented with the basic settings that characterize the battery. The sections below explain what values to set for each field.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(609),alt:"QGC Power Setup"}})]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" At time of writing "),r("em",[e._v("QGroundControl")]),e._v(" only allows you to set values for battery 1 in this view. For vehicles with multiple batteries you'll need to directly "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("set the parameters")]),e._v(" for battery 2 ("),r("code",[e._v("BAT2_*")]),e._v("), as described in the following sections.")],1)]),e._v(" "),r("h3",{attrs:{id:"number-of-cells-in-series"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#number-of-cells-in-series"}},[e._v("#")]),e._v(" Number of Cells (in Series)")]),e._v(" "),r("p",[e._v('This sets the number of cells connected in series in the battery. Typically this will be written on the battery as a number followed by "S" (e.g "3S", "5S").')]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" The voltage across a single galvanic battery cell is dependent on the chemical properties of the battery type. Lithium-Polymer (LiPo) batteries and Lithium-Ion batteries both have the same "),r("em",[e._v("nominal")]),e._v(" cell voltage of 3.7V. In order to achieve higher voltages (which will more efficiently power a vehicle), multiple cells are connected in "),r("em",[e._v("series")]),e._v(". The battery voltage at the terminals is then a multiple of the cell voltage.")])]),e._v(" "),r("p",[e._v("If the number of cells is not supplied you can calculate it by dividing the battery voltage by the nominal voltage for a single cell. The table below shows the voltage-to-cell relationship for these batteries:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Cells")]),e._v(" "),r("th",[e._v("LiPo (V)")]),e._v(" "),r("th",[e._v("LiIon (V)")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("1S")]),e._v(" "),r("td",[e._v("3.7")]),e._v(" "),r("td",[e._v("3.7")])]),e._v(" "),r("tr",[r("td",[e._v("2S")]),e._v(" "),r("td",[e._v("7.4")]),e._v(" "),r("td",[e._v("7.4")])]),e._v(" "),r("tr",[r("td",[e._v("3S")]),e._v(" "),r("td",[e._v("11.1")]),e._v(" "),r("td",[e._v("11.1")])]),e._v(" "),r("tr",[r("td",[e._v("4S")]),e._v(" "),r("td",[e._v("14.8")]),e._v(" "),r("td",[e._v("14.8")])]),e._v(" "),r("tr",[r("td",[e._v("5S")]),e._v(" "),r("td",[e._v("18.5")]),e._v(" "),r("td",[e._v("18.5")])]),e._v(" "),r("tr",[r("td",[e._v("6S")]),e._v(" "),r("td",[e._v("22.2")]),e._v(" "),r("td",[e._v("22.2")])])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" This setting corresponds to "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("parameters")]),e._v(": "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT1_N_CELLS"}},[e._v("BAT1_N_CELLS")]),e._v(" and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT2_N_CELLS"}},[e._v("BAT2_N_CELLS")])],1)]),e._v(" "),r("h3",{attrs:{id:"full-voltage-per-cell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#full-voltage-per-cell"}},[e._v("#")]),e._v(" Full Voltage (per cell)")]),e._v(" "),r("p",[e._v("This sets the "),r("em",[e._v("nominal")]),e._v(' maximum voltage of each cell (the lowest voltage at which the cell will be considered "full").')]),e._v(" "),r("p",[e._v("The value should be set slightly lower that the nominal maximum cell voltage for the battery, but not so low that the estimated capacity is still 100% after a few minutes of flight.")]),e._v(" "),r("p",[e._v("Appropriate values to use are:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("LiPo:")]),e._v(" 4.05V (default in "),r("em",[e._v("QGroundControl")]),e._v(")")]),e._v(" "),r("li",[r("strong",[e._v("LiIon:")]),e._v(" 4.05V")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" The voltage of a full battery may drop a small amount over time after charging. Setting a slightly-lower than maximum value compensates for this drop.")])]),e._v(" "),r("p",[r("span")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" This setting corresponds to "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("parameters")]),e._v(": "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT1_V_CHARGED"}},[e._v("BAT1_V_CHARGED")]),e._v(" and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT2_V_CHARGED"}},[e._v("BAT2_V_CHARGED")]),e._v(".")],1)]),e._v(" "),r("h3",{attrs:{id:"empty-voltage-per-cell"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#empty-voltage-per-cell"}},[e._v("#")]),e._v(" Empty Voltage (per cell)")]),e._v(" "),r("p",[e._v("This sets the nominal minimum safe voltage of each cell (using below this voltage may damage the battery).")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" There is no single value at which a battery is said to be empty. If you choose a value that is too low the battery may be damaged due to deep discharge (and/or the vehicle may crash). If you choose a value that is too high you may unnecessarily curtail your flight.")])]),e._v(" "),r("p",[e._v("A rule of thumb for minimum per-cell voltages:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Level")]),e._v(" "),r("th",[e._v("LiPo (V)")]),e._v(" "),r("th",[e._v("LiIon (V)")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Conservative (voltage under no-load)")]),e._v(" "),r("td",[e._v("3.7")]),e._v(" "),r("td",[e._v("3")])]),e._v(" "),r("tr",[r("td",[e._v('"Real" minimum (voltage under load/while flying')]),e._v(" "),r("td",[e._v("3.5")]),e._v(" "),r("td",[e._v("2.7")])]),e._v(" "),r("tr",[r("td",[e._v("Damage battery (voltage under load)")]),e._v(" "),r("td",[e._v("3.0")]),e._v(" "),r("td",[e._v("2.5")])])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" Below the conservative range, the sooner you recharge the battery the better - it will last longer and lose capacity slower.")])]),e._v(" "),r("p",[r("span")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" This setting corresponds to "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("parameter")]),e._v(": "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT1_V_EMPTY"}},[e._v("BAT1_V_EMPTY")]),e._v(" and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT2_V_EMPTY"}},[e._v("BAT2_V_EMPTY")]),e._v(".")],1)]),e._v(" "),r("h3",{attrs:{id:"voltage-divider"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#voltage-divider"}},[e._v("#")]),e._v(" Voltage Divider")]),e._v(" "),r("p",[e._v("If you have a vehicle that measures voltage through a power module and the ADC of the flight controller then you should check and calibrate the measurements once per board. To calibrate you'll need a multimeter.")]),e._v(" "),r("p",[e._v("The easiest way to calibrate the divider is by using "),r("em",[e._v("QGroundControl")]),e._v(" and following the step-by-step guide on "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Power.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setup > Power Setup"),r("OutboundLink")],1),e._v(" (QGroundControl User Guide).")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" This setting corresponds to parameters: "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT1_V_DIV"}},[e._v("BAT1_V_DIV")]),e._v(" and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT2_V_DIV"}},[e._v("BAT2_V_DIV")]),e._v(".")],1)]),e._v(" "),r("p",[r("span",{attrs:{id:"current_divider"}})]),e._v(" "),r("h3",{attrs:{id:"amps-per-volt"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#amps-per-volt"}},[e._v("#")]),e._v(" Amps per volt")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" This setting is not needed if you are using the basic configuration (without load compensation etc.)")])]),e._v(" "),r("p",[e._v("If you are using "),r("a",{attrs:{href:"#current_based_load_compensation"}},[e._v("Current-based Load Compensation")]),e._v(" or "),r("a",{attrs:{href:"#current_integration"}},[e._v("Current Integration")]),e._v(" the amps per volt divider must be calibrated.")]),e._v(" "),r("p",[e._v("The easiest way to calibrate the dividers is by using "),r("em",[e._v("QGroundControl")]),e._v(" and following the step-by-step guide on "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Power.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setup > Power Setup"),r("OutboundLink")],1),e._v(" (QGroundControl User Guide).")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" This setting corresponds to parameter(s): "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT1_A_PER_V"}},[e._v("BAT1_A_PER_V")]),e._v(" and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT2_A_PER_V"}},[e._v("BAT2_A_PER_V")]),e._v(".")],1)]),e._v(" "),r("p",[r("span",{attrs:{id:"load_compensation"}})]),e._v(" "),r("h2",{attrs:{id:"voltage-based-estimation-with-load-compensation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#voltage-based-estimation-with-load-compensation"}},[e._v("#")]),e._v(" Voltage-based Estimation with Load Compensation")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" With well configured load compensation the voltage used for battery capacity estimation is much more stable, varying far less when flying up and down.")])]),e._v(" "),r("p",[e._v("Load compensation attempts to counteract the fluctuation in measured voltage/estimated capacity under load that occur when using the "),r("a",{attrs:{href:"#basic_settings"}},[e._v("basic configuration")]),e._v(". This works by estimating what the voltage would be for the "),r("em",[e._v("unloaded")]),e._v(" battery, and using that voltage (instead of the measured voltage) for estimating the remaining capacity.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" To use the load compensation you will still need to set the "),r("a",{attrs:{href:"#basic_settings"}},[e._v("basic configuration")]),e._v(". The "),r("em",[e._v("Empty Voltage")]),e._v(" ("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT_V_EMPTY"}},[e._v("BAT_V_EMPTY")]),e._v(") should be set higher (than without compensation) because the compensated voltage gets used for the estimation (typically set a bit below the expected rest cell voltage when empty after use).")],1)]),e._v(" "),r("p",[e._v("PX4 supports two load compensation methods, which are enabled by "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("setting")]),e._v(" either of the two parameters below:")],1),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT1_R_INTERNAL"}},[e._v("BAT1_R_INTERNAL")]),e._v(" - "),r("a",{attrs:{href:"#current_based_load_compensation"}},[e._v("Current-based Load Compensation")]),e._v(" (recommended).")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT1_V_LOAD_DROP"}},[e._v("BAT1_V_LOAD_DROP")]),e._v(" - "),r("a",{attrs:{href:"#thrust_based_load_compensation"}},[e._v("Thrust-based Load Compensation")]),e._v(".")],1)]),e._v(" "),r("p",[r("span",{attrs:{id:"current_based_load_compensation"}})]),e._v(" "),r("h3",{attrs:{id:"current-based-load-compensation-recommended"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#current-based-load-compensation-recommended"}},[e._v("#")]),e._v(" Current-based Load Compensation (recommended)")]),e._v(" "),r("p",[e._v("This load compensation method relies on current measurement to determine load. It is far more accurate than "),r("a",{attrs:{href:"#thrust_based_load_compensation"}},[e._v("Thrust-based Load Compensation")]),e._v(" but requires that you have a current sensor.")]),e._v(" "),r("p",[e._v("To enable this feature:")]),e._v(" "),r("ol",[r("li",[e._v("Set the parameter "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT1_R_INTERNAL"}},[e._v("BAT1_R_INTERNAL")]),e._v(" to the internal resistance of battery 1 (and repeat for other batteries). > "),r("strong",[e._v("Tip")]),e._v(" There are LiPo chargers out there which can measure the internal resistance of your battery. A typical value is 5mΩ per cell but this can vary with discharge current rating, age and health of the cells.")],1),e._v(" "),r("li",[e._v("You should also calibrate the "),r("a",{attrs:{href:"#current_divider"}},[e._v("Amps per volt divider")]),e._v(" in the basic settings screen.")])]),e._v(" "),r("p",[r("span",{attrs:{id:"thrust_based_load_compensation"}})]),e._v(" "),r("h3",{attrs:{id:"thrust-based-load-compensation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#thrust-based-load-compensation"}},[e._v("#")]),e._v(" Thrust-based Load Compensation")]),e._v(" "),r("p",[e._v("This load compensation method estimates the load based on the total thrust that gets commanded to the motors.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Caution")]),e._v(" This method is not particularly accurate because there's a delay between thrust command and current, and because the thrust in not linearly proportional to the current. Use "),r("a",{attrs:{href:"#current_based_load_compensation"}},[e._v("Current-based Load Compensation")]),e._v(" instead if your vehicle has a current sensor.")])]),e._v(" "),r("p",[e._v("To enable this feature:")]),e._v(" "),r("ol",[r("li",[e._v("Set the parameter "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT1_V_LOAD_DROP"}},[e._v("BAT1_V_LOAD_DROP")]),e._v(" to how much voltage drop a cell shows under the load of full throttle.")],1)]),e._v(" "),r("p",[r("span",{attrs:{id:"current_integration"}})]),e._v(" "),r("h2",{attrs:{id:"voltage-based-estimation-fused-with-current-integration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#voltage-based-estimation-fused-with-current-integration"}},[e._v("#")]),e._v(" Voltage-based Estimation Fused with Current Integration")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" This is the most accurate way to measure relative battery consumption. If set up correctly with a healthy and fresh charged battery on every boot, then the estimation quality will be comparable to that from a smart battery (and theoretically allow for accurate remaining flight time estimation).")])]),e._v(" "),r("p",[e._v("This method evaluates the remaining battery capacity by "),r("em",[e._v("fusing")]),e._v(" the voltage-based estimate for the available capacity with a current-based estimate of the charge that has been consumed. It requires hardware that can accurately measure current.")]),e._v(" "),r("p",[e._v("To enable this feature:")]),e._v(" "),r("ol",[r("li",[e._v("First set up accurate voltage estimation using "),r("a",{attrs:{href:"#current_based_load_compensation"}},[e._v("current-based load compensation")]),e._v(".")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" Including calibrating the "),r("a",{attrs:{href:"#current_divider"}},[e._v("Amps per volt divider")]),e._v(" setting.")])]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("Set the parameter "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT1_CAPACITY"}},[e._v("BAT1_CAPACITY")]),e._v(" to around 90% of the advertised battery capacity (usually printed on the battery label).")],1)]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" Do not set this value too high as this may result in a poor estimation or sudden drops in estimated capacity.")])]),e._v(" "),r("hr"),e._v(" "),r("p",[r("strong",[e._v("Additional information")])]),e._v(" "),r("p",[e._v("The estimate of the charge that has been consumed over time is produced by mathematically integrating the measured current (this approach provides very accurate energy consumption estimates).")]),e._v(" "),r("p",[e._v("At system startup PX4 first uses a voltage-based estimate to determine the initial battery charge. This estimate is then fused with the value from current integration to provide a combined better estimate. The relative value placed on each estimate in the fused result depends on the battery state. The emptier the battery gets, the more of the voltage based estimate gets fused in. This prevents deep discharge (e.g. because it was configured with the wrong capacity or the start value was wrong).")]),e._v(" "),r("p",[e._v("If you always start with a healthy full battery, this approach is similar to that used by a smart battery.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" Current integration cannot be used on its own (without voltage-based estimation) because it has no way to determine the "),r("em",[e._v("initial")]),e._v(" capacity. Voltage-estimation allows you to estimate the initial capacity and provides ongoing feedback of possible errors (e.g. if the battery is faulty, or if there is a mismatch between capacity calculated using different methods).")])]),e._v(" "),r("h2",{attrs:{id:"parameter-migration-notes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameter-migration-notes"}},[e._v("#")]),e._v(" Parameter Migration Notes")]),e._v(" "),r("p",[e._v("Multiple battery support was added after PX4 v1.10, resulting in the creation of new parameters with prefix "),r("code",[e._v("BAT1_")]),e._v(" corresponding to all the old parameters with prefix "),r("code",[e._v("BAT_")]),e._v(". Changes to "),r("code",[e._v("BAT_")]),e._v(" and "),r("code",[e._v("BAT1_")]),e._v(" are currently synchronised:")]),e._v(" "),r("ul",[r("li",[e._v("If either the old or new parameters is changed, the value is copied into the other parameter (they are kept in sync in both directions).")]),e._v(" "),r("li",[e._v("If the old/new parameters are different at boot, then the value of the old "),r("code",[e._v("BAT_")]),e._v(" parameter is copied into the new "),r("code",[e._v("BAT1_")]),e._v(" parameter.")])]),e._v(" "),r("h2",{attrs:{id:"battery-type-comparison"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#battery-type-comparison"}},[e._v("#")]),e._v(" Battery-Type Comparison")]),e._v(" "),r("p",[e._v("This section provides a comparative overview of several different battery types (in particular LiPo and Li-Ion).")]),e._v(" "),r("h3",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("ul",[r("li",[e._v("Li-Ion batteries have a higher energy density than Lipo battery packs but that comes at the expense of lower discharge rates and increased battery cost.")]),e._v(" "),r("li",[e._v("LiPo batteries are readily available and can withstand higher discharge rates that are common in multi-rotor aircraft.")]),e._v(" "),r("li",[e._v("The choice needs to be made based on the vehicle and the mission being flown. If absolute endurance is the aim then there is more of a benefit to flying to a Li-Ion battery but similarly, more caution needs to be taken. As such, the decision should be made based on the factors surrounding the flight.")])]),e._v(" "),r("h3",{attrs:{id:"advantages"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#advantages"}},[e._v("#")]),e._v(" Advantages")]),e._v(" "),r("p",[e._v("LiPo")]),e._v(" "),r("ul",[r("li",[e._v("Very common")]),e._v(" "),r("li",[e._v("Wide range of sizes, capacities and voltages")]),e._v(" "),r("li",[e._v("Inexpensive")]),e._v(" "),r("li",[e._v("High discharge rates relative to capacity (high C ratings)")]),e._v(" "),r("li",[e._v("Higher charge rates")])]),e._v(" "),r("p",[e._v("Li-Ion")]),e._v(" "),r("ul",[r("li",[e._v("Much higher energy density (up to 60% higher)")])]),e._v(" "),r("h3",{attrs:{id:"disadvantages"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#disadvantages"}},[e._v("#")]),e._v(" Disadvantages:")]),e._v(" "),r("p",[e._v("LiPo")]),e._v(" "),r("ul",[r("li",[e._v("Low (relative) energy density")]),e._v(" "),r("li",[e._v("Quality can vary given abundance of suppliers")])]),e._v(" "),r("p",[e._v("Li-Ion")]),e._v(" "),r("ul",[r("li",[e._v("Not as common")]),e._v(" "),r("li",[e._v("Much more expensive")]),e._v(" "),r("li",[e._v("Not as widely available in large sizes and configurations")]),e._v(" "),r("li",[e._v("All cells are relatively small so larger packs are made up of many cells tied in series and parallel to create the required voltage and capacity")]),e._v(" "),r("li",[e._v("Lower discharge rates relative to battery size (C rating)")]),e._v(" "),r("li",[e._v("More difficult to adapt to vehicles that require high currents")]),e._v(" "),r("li",[e._v("Lower charging rates (relative to capacity)")]),e._v(" "),r("li",[e._v("Requires more stringent temperature monitoring during charge and discharge")]),e._v(" "),r("li",[e._v('Requires settings changes on the ESC to utilize max capacity ("standard" ESC low voltage settings are too high).')]),e._v(" "),r("li",[e._v("At close-to-empty the voltage of the battery is such that a ~3V difference is possible between a Lipo to Li-ion (while using a 6S battery). This could have implications on thrust expectations.")])]),e._v(" "),r("h3",{attrs:{id:"c-ratings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#c-ratings"}},[e._v("#")]),e._v(" C Ratings")]),e._v(" "),r("ul",[r("li",[e._v("A C rating is simply a multiple of the stated capacity of any battery type.")]),e._v(" "),r("li",[e._v("A C rating is relevant (and differs) for both charge and discharge rates.\n"),r("ul",[r("li",[e._v("For example, a 2000 mAh battery (irrespective of voltage) with a 10C discharge rate can safely and continuously discharge 20 amps of current (2000/1000=2Ah x 10C = 20 amps).")])])]),e._v(" "),r("li",[e._v("C Ratings are always given by the manufacturer (often on the outside of the battery pack). While they can actually be calculated, you need several pieces of information, and to measure the internal resistance of the cells.")]),e._v(" "),r("li",[e._v("LiPo batteries will always have a higher C rating than a Li-Ion battery. This is due to chemistry type but also to the internal resistance per cell (which is due to the chemistry type) leading to higher discharge rates for LiPo batteries.")]),e._v(" "),r("li",[e._v("Following manufacturer guidelines for both charge and discharge C ratings is very important for the health of your battery and to operate your vehicle safely (i.e. reduce fires, “puffing” packs and other suboptimal states during charging and discharging).")])]),e._v(" "),r("h3",{attrs:{id:"energy-density"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#energy-density"}},[e._v("#")]),e._v(" Energy Density")]),e._v(" "),r("ul",[r("li",[e._v("Energy density is how much energy is able to be stored relative to battery weight. It is generally measured and compared in Watt Hour per Kilogram (Wh/Kg).\n"),r("ul",[r("li",[e._v("Watt-hours are simply calculated by taking the nominal (i.e. not the fully charged voltage) multiplied by the capacity, e.g. 3.7v X 5 Ah = 18.5Wh. If you had a 3 cell battery pack your pack would be 18.5Wh X 3 = 55 Wh of stored energy.")])])]),e._v(" "),r("li",[e._v("When you take battery weight into account you calculate energy density by taking the watt-hours and dividing them by weight.\n"),r("ul",[r("li",[e._v("E.g. 55 Wh divided by (battery weight in grams divided by 1000). Assuming this battery weighed 300 grams then 55/(300/1000)=185 Wh/Kg.")])])]),e._v(" "),r("li",[e._v("This number 185 Wh/Kg would be on the very high-end for a LiPo battery. A Li-Ion battery on the other hand can reach 260 Wh/Kg, meaning per kilogram of battery onboard you can carry 75 more watt-hours.\n"),r("ul",[r("li",[e._v("If you know how many watts your vehicle takes to fly (which a battery current module can show you), you can equate this increased storage at no additional weight into increased flight time.")])])])])])}),[],!1,null,null,null);t.default=o.exports},609:function(e,t,a){e.exports=a.p+"assets/img/qgc_setup_power_px4.f2dcb564.jpg"}}]);