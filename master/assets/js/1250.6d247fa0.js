(window.webpackJsonp=window.webpackJsonp||[]).push([[1250],{2400:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cellular-status-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cellular-status-uorb-message"}},[t._v("#")]),t._v(" cellular_status (UORB message)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/cellular_status.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("uint64 timestamp    # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 CELLULAR_STATUS_FLAG_UNKNOWN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" # State unknown or not reportable\nuint8 CELLULAR_STATUS_FLAG_FAILED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # velocity setpoint\nuint8 CELLULAR_STATUS_FLAG_INITIALIZING"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # Modem is being initialized\nuint8 CELLULAR_STATUS_FLAG_LOCKED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" # Modem is locked\nuint8 CELLULAR_STATUS_FLAG_DISABLED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("   # Modem is not enabled and is powered down\nuint8 CELLULAR_STATUS_FLAG_DISABLING"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("  # Modem is currently transitioning to the CELLULAR_STATUS_FLAG_DISABLED state\nuint8 CELLULAR_STATUS_FLAG_ENABLING"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("   # Modem is currently transitioning to the CELLULAR_STATUS_FLAG_ENABLED state\nuint8 CELLULAR_STATUS_FLAG_ENABLED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("  # Modem is enabled and powered on but not registered with a network provider and not available "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" data connections\nuint8 CELLULAR_STATUS_FLAG_SEARCHING"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("  # Modem is searching "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a network provider to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("register")]),t._v("\nuint8 CELLULAR_STATUS_FLAG_REGISTERED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("  # Modem is registered with a network provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" and data connections and messaging may be available "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" use\nuint8 CELLULAR_STATUS_FLAG_DISCONNECTING"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("  # Modem is disconnecting and deactivating the last active packet data bearer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This state will not be entered "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" more than one packet data bearer is active and one of the active bearers is deactivated\nuint8 CELLULAR_STATUS_FLAG_CONNECTING"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("  # Modem is activating and connecting the first packet data bearer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Subsequent bearer activations when another bearer is already active "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" not cause this state to be entered\nuint8 CELLULAR_STATUS_FLAG_CONNECTED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("  # One or more packet data bearers is active and connected\n\nuint8 CELLULAR_NETWORK_FAILED_REASON_NONE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" # No error\nuint8 CELLULAR_NETWORK_FAILED_REASON_UNKNOWN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # Error state is unknown\nuint8 CELLULAR_NETWORK_FAILED_REASON_SIM_MISSING"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # SIM is required "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the modem but missing\nuint8 CELLULAR_NETWORK_FAILED_REASON_SIM_ERROR"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" # SIM is available"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but not usuable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" connection\n\nuint16 status   # Status bitmap "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Roaming is active\nuint8 failure_reason #Failure reason when status in in CELLUAR_STATUS_FAILED\nuint8 type  # Cellular network radio type "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" none "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gsm "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" cdma "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" wcdma "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" lte\nuint8 quality   # Cellular network RSSI"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("RSRP in dBm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" absolute value\nuint16 mcc  # Mobile country code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" If unknown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" set to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UINT16_MAX\nuint16 mnc  # Mobile network code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" If unknown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" set to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UINT16_MAX\nuint16 lac  # Location area code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" If unknown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" set to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);