(window.webpackJsonp=window.webpackJsonp||[]).push([[1582],{2943:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cellularstatus-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cellularstatus-uorb-message"}},[t._v("#")]),t._v(" CellularStatus (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/CellularStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp    # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 CELLULAR_STATUS_FLAG_UNKNOWN"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" # State unknown or not reportable\nuint8 CELLULAR_STATUS_FLAG_FAILED"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # velocity setpoint\nuint8 CELLULAR_STATUS_FLAG_INITIALIZING"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # Modem is being initialized\nuint8 CELLULAR_STATUS_FLAG_LOCKED"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" # Modem is locked\nuint8 CELLULAR_STATUS_FLAG_DISABLED"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("   # Modem is not enabled and is powered down\nuint8 CELLULAR_STATUS_FLAG_DISABLING"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("  # Modem is currently transitioning to the CELLULAR_STATUS_FLAG_DISABLED state\nuint8 CELLULAR_STATUS_FLAG_ENABLING"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("   # Modem is currently transitioning to the CELLULAR_STATUS_FLAG_ENABLED state\nuint8 CELLULAR_STATUS_FLAG_ENABLED"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("  # Modem is enabled and powered on but not registered with a network provider and not available "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" data connections\nuint8 CELLULAR_STATUS_FLAG_SEARCHING"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("  # Modem is searching "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a network provider to "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("register")]),t._v("\nuint8 CELLULAR_STATUS_FLAG_REGISTERED"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("  # Modem is registered with a network provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" and data connections and messaging may be available "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" use\nuint8 CELLULAR_STATUS_FLAG_DISCONNECTING"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("  # Modem is disconnecting and deactivating the last active packet data bearer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This state will not be entered "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" more than one packet data bearer is active and one of the active bearers is deactivated\nuint8 CELLULAR_STATUS_FLAG_CONNECTING"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("  # Modem is activating and connecting the first packet data bearer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Subsequent bearer activations when another bearer is already active "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" not cause this state to be entered\nuint8 CELLULAR_STATUS_FLAG_CONNECTED"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("  # One or more packet data bearers is active and connected\n\nuint8 CELLULAR_NETWORK_FAILED_REASON_NONE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" # No error\nuint8 CELLULAR_NETWORK_FAILED_REASON_UNKNOWN"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # Error state is unknown\nuint8 CELLULAR_NETWORK_FAILED_REASON_SIM_MISSING"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # SIM is required "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the modem but missing\nuint8 CELLULAR_NETWORK_FAILED_REASON_SIM_ERROR"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" # SIM is available"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but not usable "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" connection\n\nuint16 status   # Status bitmap "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Roaming is active\nuint8 failure_reason #Failure reason when status in in CELLUAR_STATUS_FAILED\nuint8 type  # Cellular network radio type "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" none "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gsm "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" cdma "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" wcdma "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" lte\nuint8 quality   # Cellular network RSSI"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("RSRP in dBm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" absolute value\nuint16 mcc  # Mobile country code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" If unknown"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" set to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UINT16_MAX\nuint16 mnc  # Mobile network code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" If unknown"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" set to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UINT16_MAX\nuint16 lac  # Location area code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" If unknown"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" set to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);