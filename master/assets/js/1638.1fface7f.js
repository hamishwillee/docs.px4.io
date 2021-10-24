(window.webpackJsonp=window.webpackJsonp||[]).push([[1638],{3045:function(t,a,e){"use strict";e.r(a);var n=e(19),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"battery-status-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#battery-status-uorb-message"}},[t._v("#")]),t._v(" battery_status (UORB message)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/battery_status.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("uint64 timestamp            # time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool connected              # Whether or not a battery is connected"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" based on a voltage threshold\nfloat32 voltage_v           # Battery voltage in volts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 voltage_filtered_v  # Battery voltage in volts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filtered"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 current_a           # Battery current in amperes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 current_filtered_a  # Battery current in amperes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filtered"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 current_average_a   # Battery current average in amperes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 discharged_mah      # Discharged amount in mAh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 remaining           # From "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" to "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 scale               # Power scaling factor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nfloat32 temperature         # temperature of the battery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" NaN "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\nint32 cell_count            # Number of cells\n\nuint8 BATTERY_SOURCE_POWER_MODULE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 BATTERY_SOURCE_EXTERNAL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 BATTERY_SOURCE_ESCS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 source                # Battery source\nuint8 priority              # Zero based priority is the connection on the Power Controller V1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vn AKA BrickN"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint16 capacity             # actual capacity of the battery\nuint16 cycle_count          # number of discharge cycles the battery has experienced\nuint16 run_time_to_empty    # predicted remaining battery capacity based on the present rate of discharge in min\nuint16 average_time_to_empty    # predicted remaining battery capacity based on the average rate of discharge in min\nuint16 serial_number        # serial number of the battery pack\nuint16 manufacture_date     # manufacture date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" part of serial number of the battery pack"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" formated as"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Day "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Month×"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Year–"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1980")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("×"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v("\nuint16 state_of_health      # state of health"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" FullChargeCapacity"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("DesignCapacity"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint16 max_error            # max error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expected margin of error in "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" in the state"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("of"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("charge calculation with a range of "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" to "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("\nuint8 id                    # ID number of a battery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Should be unique and consistent "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the lifetime of a vehicle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("indexed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint16 interface_error      # interface error counter\n\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" voltage_cell_v      # Battery individual cell voltages\nfloat32 max_cell_voltage_delta  # Max difference between individual cell voltages\n\nbool is_powering_off            # Power off event imminent indication"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" false "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unknown\n\n\nuint8 BATTERY_WARNING_NONE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      # no battery low voltage warning active\nuint8 BATTERY_WARNING_LOW "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("       # warning of low voltage\nuint8 BATTERY_WARNING_CRITICAL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  # critical voltage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" abort immediately\nuint8 BATTERY_WARNING_EMERGENCY "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" # immediate landing required\nuint8 BATTERY_WARNING_FAILED "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("    # the battery has failed completely\n\nuint8 warning                       # current battery warning\n\n\nuint8 MAX_INSTANCES "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\nfloat32 average_power               # The average power of the current discharge\nfloat32 available_energy            # The predicted charge or energy remaining in the battery\nfloat32 remaining_capacity          # The compensated battery capacity remaining\nfloat32 design_capacity             # The design capacity of the battery\nuint16 average_time_to_full         # The predicted remaining time until the battery reaches full charge"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in minutes\nuint16 over_discharge_count         # Number of battery overdischarge\nfloat32 nominal_voltage             # Nominal voltage of the battery pack\n\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);