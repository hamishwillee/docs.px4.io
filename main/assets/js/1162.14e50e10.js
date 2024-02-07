(window.webpackJsonp=window.webpackJsonp||[]).push([[1162],{2300:function(t,a,e){"use strict";e.r(a);var s=e(19),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"batterystatus-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#batterystatus-uorb-message"}},[t._v("#")]),t._v(" BatteryStatus (UORB message)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/BatteryStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("uint64 timestamp\t\t\t# time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool connected\t\t\t\t# Whether or not a battery is connected"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" based on a voltage threshold\nfloat32 voltage_v\t\t\t# Battery voltage in volts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 voltage_filtered_v\t# Battery voltage in volts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filtered"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 current_a\t\t\t# Battery current in amperes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 current_filtered_a\t# Battery current in amperes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filtered"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 current_average_a\t# Battery current average in "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("amperes")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" FW average in level flight"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 discharged_mah\t\t# Discharged amount in mAh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 remaining\t\t\t# From "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" to "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 scale\t\t\t\t# Power scaling factor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 time_remaining_s\t# predicted time in seconds remaining until battery is empty under previous averaged load"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NAN "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 temperature\t\t\t# temperature of the battery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" NaN "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nuint8 cell_count\t\t\t# Number of cells"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\n\nuint8 BATTERY_SOURCE_POWER_MODULE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 BATTERY_SOURCE_EXTERNAL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 BATTERY_SOURCE_ESCS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 source\t\t\t\t# Battery source\nuint8 priority\t\t\t\t# Zero based priority is the connection on the Power Controller V1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vn AKA BrickN"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint16 capacity\t\t\t\t# actual capacity of the battery\nuint16 cycle_count\t\t\t# number of discharge cycles the battery has experienced\nuint16 average_time_to_empty\t# predicted remaining battery capacity based on the average rate of discharge in min\nuint16 serial_number\t\t# serial number of the battery pack\nuint16 manufacture_date\t\t# manufacture date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" part of serial number of the battery pack"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Formatted as"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Day "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Month×"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Year–"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1980")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("×"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v("\nuint16 state_of_health\t\t# state of health"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" FullChargeCapacity"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("DesignCapacity"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint16 max_error\t\t\t# max error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expected margin of error in "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" in the state"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("of"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("charge calculation with a range of "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" to "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("\nuint8 id\t\t\t\t\t# ID number of a battery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Should be unique and consistent "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the lifetime of a vehicle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("indexed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint16 interface_error\t\t# interface error counter\n\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" voltage_cell_v\t\t# Battery individual cell voltages"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 max_cell_voltage_delta\t# Max difference between individual cell voltages\n\nbool is_powering_off\t\t\t# Power off event imminent indication"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" false "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nbool is_required\t\t\t# Set "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the battery is explicitly required before arming\n\n\nuint8 BATTERY_WARNING_NONE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\t\t# no battery low voltage warning active\nuint8 BATTERY_WARNING_LOW "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t\t# warning of low voltage\nuint8 BATTERY_WARNING_CRITICAL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\t# critical voltage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" abort immediately\nuint8 BATTERY_WARNING_EMERGENCY "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\t# immediate landing required\nuint8 BATTERY_WARNING_FAILED "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\t# the battery has failed completely\nuint8 BATTERY_STATE_UNHEALTHY "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" # Battery is diagnosed to be defective or an error occurred"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" usage is discouraged "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" prohibited"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Possible "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("causes")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("faults"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" are listed in faults field"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint8 BATTERY_STATE_CHARGING "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" # Battery is charging\n\nuint8 BATTERY_FAULT_DEEP_DISCHARGE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" # Battery has deep discharged\nuint8 BATTERY_FAULT_SPIKES "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # Voltage spikes\nuint8 BATTERY_FAULT_CELL_FAIL"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # One or more cells have failed\nuint8 BATTERY_FAULT_OVER_CURRENT "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" # Over"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("current\nuint8 BATTERY_FAULT_OVER_TEMPERATURE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" # Over"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("temperature\nuint8 BATTERY_FAULT_UNDER_TEMPERATURE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" # Under"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("temperature fault\nuint8 BATTERY_FAULT_INCOMPATIBLE_VOLTAGE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" # Vehicle voltage is not compatible with battery one\nuint8 BATTERY_FAULT_INCOMPATIBLE_FIRMWARE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" # Battery firmware is not compatible with current autopilot firmware\nuint8 BATTERY_FAULT_INCOMPATIBLE_MODEL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" # Battery model is not supported by the system\nuint8 BATTERY_FAULT_HARDWARE_FAILURE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" # hardware problem\nuint8 BATTERY_WARNING_OVER_TEMPERATURE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" # Over"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("temperature\nuint8 BATTERY_FAULT_COUNT "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" # Counter "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" keep it as last element"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\nuint16 faults\t\t# Smart battery supply status"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("fault "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("flags")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bitmask"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" health indication"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint32 custom_faults \t# Bitmask indicating smart battery internal manufacturer faults"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" those are not user actionable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint8 warning\t\t# Current battery warning\nuint8 mode \t\t# Battery mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Note"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the normal operation mode\n\nuint8 BATTERY_MODE_UNKNOWN "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" # Battery does not support a mode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" it does"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" is operational\nuint8 BATTERY_MODE_AUTO_DISCHARGING "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # Battery is "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("discharging")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("towards storage level"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 BATTERY_MODE_HOT_SWAP "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # Battery in hot"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("swap mode\nuint8 BATTERY_MODE_COUNT "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" # Counter "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" keep it as last "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("element")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("once we're fully migrated to events interface we can just comment this"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\n\nuint8 MAX_INSTANCES "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\nfloat32 average_power               # The average power of the current discharge\nfloat32 available_energy            # The predicted charge or energy remaining in the battery\nfloat32 full_charge_capacity_wh     # The compensated battery capacity\nfloat32 remaining_capacity_wh       # The compensated battery capacity remaining\nfloat32 design_capacity             # The design capacity of the battery\nuint16 average_time_to_full         # The predicted remaining time until the battery reaches full charge"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in minutes\nuint16 over_discharge_count         # Number of battery overdischarge\nfloat32 nominal_voltage             # Nominal voltage of the battery pack\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);