(window.webpackJsonp=window.webpackJsonp||[]).push([[989],{1927:function(t,n,s){"use strict";s.r(n);var a=s(19),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"internal-combustion-engine-status-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#internal-combustion-engine-status-uorb-message"}},[t._v("#")]),t._v(" internal_combustion_engine_status (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/internal_combustion_engine_status.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp\t\t\t\t\t# time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 STATE_STOPPED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\t\t\t\t\t# The engine is not running"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This is the "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint8 STATE_STARTING "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t\t\t\t# The engine is starting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This is a transient state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint8 STATE_RUNNING "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\t\t\t\t\t# The engine is running normally"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint8 STATE_FAULT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\t\t\t\t\t# The engine can no longer function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint8 state\n\nuint32 FLAG_GENERAL_ERROR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t\t\t\t# General error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nuint32 FLAG_CRANKSHAFT_SENSOR_ERROR_SUPPORTED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\t# Error of the crankshaft sensor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This flag is optional"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint32 FLAG_CRANKSHAFT_SENSOR_ERROR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\nuint32 FLAG_TEMPERATURE_SUPPORTED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\t\t\t# Temperature levels"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" These flags are optional\nuint32 FLAG_TEMPERATURE_BELOW_NOMINAL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("      \t# Under"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("temperature warning\nuint32 FLAG_TEMPERATURE_ABOVE_NOMINAL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("      \t# Over"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("temperature warning\nuint32 FLAG_TEMPERATURE_OVERHEATING "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("      \t\t# Critical overheating\nuint32 FLAG_TEMPERATURE_EGT_ABOVE_NOMINAL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("     \t# Exhaust gas over"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("temperature warning\n\nuint32 FLAG_FUEL_PRESSURE_SUPPORTED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v("\t\t# Fuel pressure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" These flags are optional\nuint32 FLAG_FUEL_PRESSURE_BELOW_NOMINAL  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v("     \t# Under"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pressure warning\nuint32 FLAG_FUEL_PRESSURE_ABOVE_NOMINAL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("   \t# Over"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pressure warning\n\nuint32 FLAG_DETONATION_SUPPORTED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v("\t\t\t# Detonation warning"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This flag is optional"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint32 FLAG_DETONATION_OBSERVED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("    \t\t# Detonation condition observed warning\n\nuint32 FLAG_MISFIRE_SUPPORTED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v("\t\t\t# Misfire warning"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This flag is optional"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint32 FLAG_MISFIRE_OBSERVED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16384")]),t._v("   \t\t\t# Misfire condition observed warning\n\nuint32 FLAG_OIL_PRESSURE_SUPPORTED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32768")]),t._v("\t\t# Oil pressure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" These flags are optional\nuint32 FLAG_OIL_PRESSURE_BELOW_NOMINAL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65536")]),t._v("   \t# Under"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pressure warning\nuint32 FLAG_OIL_PRESSURE_ABOVE_NOMINAL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("131072")]),t._v("  \t# Over"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pressure warning\n\nuint32 FLAG_DEBRIS_SUPPORTED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("262144")]),t._v("\t\t\t# Debris warning"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This flag is optional\nuint32 FLAG_DEBRIS_DETECTED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("524288")]),t._v("  \t\t\t# Detection of debris warning\nuint32 flags\n\nuint8 engine_load_percent\t\t\t\t# Engine load estimate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" percent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nuint32 engine_speed_rpm\t\t\t\t\t# Engine speed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" revolutions per minute\nfloat32 spark_dwell_time_ms \t\t\t\t# Spark dwell time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" millisecond\nfloat32 atmospheric_pressure_kpa\t\t\t# "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Atmospheric")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("barometric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pressure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kilopascal\nfloat32 intake_manifold_pressure_kpa\t\t\t# Engine intake manifold pressure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kilopascal\nfloat32 intake_manifold_temperature\t\t\t# Engine intake manifold temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kelvin\nfloat32 coolant_temperature\t\t\t\t# Engine coolant temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kelvin\nfloat32 oil_pressure\t\t\t\t\t# Oil pressure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kilopascal\nfloat32 oil_temperature\t\t\t\t\t# Oil temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kelvin\nfloat32 fuel_pressure\t\t\t\t\t# Fuel pressure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kilopascal\nfloat32 fuel_consumption_rate_cm3pm\t\t\t# Instant fuel consumption estimate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("centimeter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("minute\nfloat32 estimated_consumed_fuel_volume_cm3\t\t# Estimate of the consumed fuel since the start of the engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" centimeter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint8 throttle_position_percent\t\t\t\t# Throttle position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" percent\nuint8 ecu_index\t\t\t\t\t\t# The index of the publishing ECU\n\n\nuint8 SPARK_PLUG_SINGLE         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 SPARK_PLUG_FIRST_ACTIVE   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 SPARK_PLUG_SECOND_ACTIVE  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 SPARK_PLUG_BOTH_ACTIVE    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint8 spark_plug_usage\t\t\t\t\t# Spark plug activity report"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nfloat32 ignition_timing_deg\t\t\t\t# Cylinder ignition timing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" angular degrees of the crankshaft\nfloat32 injection_time_ms\t\t\t\t# Fuel injection time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" millisecond\nfloat32 cylinder_head_temperature\t\t\t# Cylinder head "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("temperature")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CHT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kelvin\nfloat32 exhaust_gas_temperature\t\t\t\t# Exhaust gas "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("temperature")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EGT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kelvin\nfloat32 lambda_coefficient\t\t\t\t# Estimated lambda coefficient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dimensionless ratio\n\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);