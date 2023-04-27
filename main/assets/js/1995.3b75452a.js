(window.webpackJsonp=window.webpackJsonp||[]).push([[1995],{3640:function(t,s,e){"use strict";e.r(s);var n=e(19),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tunecontrol-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tunecontrol-uorb-message"}},[t._v("#")]),t._v(" TuneControl (UORB message)")]),t._v(" "),e("p",[t._v("This message is used to control the tunes, when the tune_id is set to CUSTOM then the frequency, duration are used otherwise those values are ignored.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/TuneControl.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("This message is used to control the tunes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" when the tune_id is set to CUSTOM")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("then")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("the frequency"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" duration are used otherwise those values are ignored"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nuint64 timestamp     # time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 TUNE_ID_STOP                 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 TUNE_ID_STARTUP              "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 TUNE_ID_ERROR                "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 TUNE_ID_NOTIFY_POSITIVE      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint8 TUNE_ID_NOTIFY_NEUTRAL       "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nuint8 TUNE_ID_NOTIFY_NEGATIVE      "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nuint8 TUNE_ID_ARMING_WARNING       "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\nuint8 TUNE_ID_BATTERY_WARNING_SLOW "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\nuint8 TUNE_ID_BATTERY_WARNING_FAST "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nuint8 TUNE_ID_GPS_WARNING          "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\nuint8 TUNE_ID_ARMING_FAILURE       "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nuint8 TUNE_ID_PARACHUTE_RELEASE    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\nuint8 TUNE_ID_SINGLE_BEEP          "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\nuint8 TUNE_ID_HOME_SET             "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\nuint8 TUNE_ID_SD_INIT              "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\nuint8 TUNE_ID_SD_ERROR             "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nuint8 TUNE_ID_PROG_PX4IO           "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\nuint8 TUNE_ID_PROG_PX4IO_OK        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v("\nuint8 TUNE_ID_PROG_PX4IO_ERR       "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\nuint8 TUNE_ID_POWER_OFF            "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v("\nuint8 NUMBER_OF_TUNES              "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n\nuint8 tune_id        # tune_id corresponding to TuneID"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" from the tune_defaults"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h in the tunes library\nbool tune_override   # "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" true the tune which is playing will be stopped and the new started\nuint16 frequency     # in Hz\nuint32 duration      # in us\nuint32 silence       # in us\nuint8 volume         # value between "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" supported by backend\n\nuint8 VOLUME_LEVEL_MIN "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 VOLUME_LEVEL_DEFAULT "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\nuint8 VOLUME_LEVEL_MAX "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n\nuint8 ORB_QUEUE_LENGTH "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);