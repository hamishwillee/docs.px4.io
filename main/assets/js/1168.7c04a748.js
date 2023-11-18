(window.webpackJsonp=window.webpackJsonp||[]).push([[1168],{2246:function(t,a,n){"use strict";n.r(a);var e=n(19),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"generatorstatus-uorb-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generatorstatus-uorb-message"}},[t._v("#")]),t._v(" GeneratorStatus (UORB message)")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/GeneratorStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("uint64 timestamp\t\t\t# time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nuint64 STATUS_FLAG_OFF                              "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("       # Generator is off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_READY                            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("       # Generator is ready to start generating power"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_GENERATING                       "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("       # Generator is generating power"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_CHARGING                         "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("       # Generator is charging the "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("batteries")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("generating enough power to charge and provide the load"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_REDUCED_POWER                    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("      # Generator is operating at a reduced maximum power"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_MAXPOWER                         "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("      # Generator is providing the maximum output"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_OVERTEMP_WARNING                 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("      # Generator is near the maximum operating temperature"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cooling is insufficient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_OVERTEMP_FAULT                   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("     # Generator hit the maximum operating temperature and shutdown"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_ELECTRONICS_OVERTEMP_WARNING     "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v("     # Power electronics are near the maximum operating temperature"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cooling is insufficient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_ELECTRONICS_OVERTEMP_FAULT       "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v("     # Power electronics hit the maximum operating temperature and shutdown"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_ELECTRONICS_FAULT                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("    # Power electronics experienced a fault and shutdown"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_POWERSOURCE_FAULT                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v("    # The power source supplying the generator failed e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" mechanical generator stopped"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tether is no longer providing power"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" solar cell is in shade"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hydrogen reaction no longer happening"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_COMMUNICATION_WARNING            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("    # Generator controller having communication problems"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_COOLING_WARNING                  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v("    # Power electronic or generator cooling system error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_POWER_RAIL_FAULT                 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16384")]),t._v("   # Generator controller power rail experienced a fault"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_OVERCURRENT_FAULT                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32768")]),t._v("   # Generator controller exceeded the overcurrent threshold and shutdown to prevent damage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_BATTERY_OVERCHARGE_CURRENT_FAULT "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("65536")]),t._v("   # Generator controller detected a high current going into the batteries and shutdown to prevent battery damage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\nuint64 STATUS_FLAG_OVERVOLTAGE_FAULT                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("131072")]),t._v("  # Generator controller exceeded it's overvoltage threshold and shutdown to prevent it exceeding the voltage rating"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_BATTERY_UNDERVOLT_FAULT          "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("262144")]),t._v("  # Batteries are under "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("voltage")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("generator will not start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_START_INHIBITED                  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("524288")]),t._v("  # Generator start is inhibited by e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" a safety "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_MAINTENANCE_REQUIRED             "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1048576")]),t._v(" # Generator requires maintenance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_WARMING_UP                       "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2097152")]),t._v(" # Generator is not ready to generate yet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint64 STATUS_FLAG_IDLE                             "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4194304")]),t._v(" # Generator is idle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nuint64 status                      # Status flags\n\n\nfloat32 battery_current            # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Current into"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("out of battery"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Positive "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Negative "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" in"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" NaN"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" field not provided"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nfloat32 load_current               # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Current going to the UAV"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" If battery current not available this is the DC current from the generator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Positive "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Negative "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" in"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" NaN"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" field not provided\nfloat32 power_generated            # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("W"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" The power being generated"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" NaN"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" field not provided\nfloat32 bus_voltage                # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("V"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Voltage of the bus seen at the generator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or battery bus "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" battery bus is controlled by generator and at a different voltage to main bus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nfloat32 bat_current_setpoint       # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" The target battery current"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Positive "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Negative "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" in"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" NaN"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" field not provided\n\nuint32 runtime                     # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Seconds this generator has run since it was rebooted"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" UINT32_MAX"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" field not provided"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nint32 time_until_maintenance       # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Seconds until this generator requires maintenance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("  A negative value indicates maintenance is past"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("due"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" INT32_MAX"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" field not provided"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nuint16 generator_speed             # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rpm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Speed of electrical generator or alternator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" UINT16_MAX"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" field not provided"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nint16 rectifier_temperature        # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("degC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" The temperature of the rectifier or power converter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" INT16_MAX"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" field not provided"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nint16 generator_temperature        # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("degC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" The temperature of the mechanical motor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fuel cell core or generator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" INT16_MAX"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" field not provided"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);