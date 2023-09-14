(window.webpackJsonp=window.webpackJsonp||[]).push([[1630],{2991:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"sensoruwb-uorb-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sensoruwb-uorb-message"}},[t._v("#")]),t._v(" SensorUwb (UORB message)")]),t._v(" "),n("p",[t._v("UWB distance contains the distance information measured by an ultra-wideband positioning system, such as Pozyx or NXP Rddrone.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/SensorUwb.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("UWB distance contains the distance information measured by an ultra"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wideband positioning system"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("such")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("as Pozyx or NXP Rddrone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nuint64  timestamp       # time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint32  sessionid       # UWB SessionID\nuint32  time_offset     # Time between Ranging Rounds in ms\nuint32  counter         # Number of Ranges since last Start of Ranging\nuint16  mac         # MAC adress of "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Initiator")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("controller"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint16  mac_dest        # MAC adress of "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Responder")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Controlee"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint16  status          # status feedback #\nuint8   nlos            # None line of site condition y"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("n\nfloat32 distance        # distance in m to the UWB receiver\n\n\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Angle of arrival"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Angle in Degree "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60.")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" FOV in both axis is "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),t._v(" degrees")])]),t._v("\nfloat32 aoa_azimuth_dev # Angle of arrival of first incomming RX msg\nfloat32 aoa_elevation_dev   # Angle of arrival of first incomming RX msg\nfloat32 aoa_azimuth_resp    # Angle of arrival of first incomming RX msg at the responder\nfloat32 aoa_elevation_resp  # Angle of arrival of first incomming RX msg at the responder\n\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Figure of merit "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the angle measurements")])]),t._v("\nuint8 aoa_azimuth_fom       # AOA Azimuth FOM\nuint8 aoa_elevation_fom     # AOA Elevation FOM\nuint8 aoa_dest_azimuth_fom  # AOA Azimuth FOM\nuint8 aoa_dest_elevation_fom    # AOA Elevation FOM\n\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Initiator physical configuration")])]),t._v("\nuint8 orientation       # Direction the sensor faces from MAV_SENSOR_ORIENTATION "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Standard configuration is Antennas facing down and azimuth aligened in forward direction")])]),t._v("\nfloat32 offset_x        # UWB initiator offset in X "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("axis")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NED drone frame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 offset_y        # UWB initiator offset in Y "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("axis")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NED drone frame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 offset_z        # UWB initiator offset in Z "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("axis")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NED drone frame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);