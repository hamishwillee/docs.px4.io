(window.webpackJsonp=window.webpackJsonp||[]).push([[1352],{2511:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"obstacle-distance-uorb-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#obstacle-distance-uorb-message"}},[t._v("#")]),t._v(" obstacle_distance (UORB message)")]),t._v(" "),n("p",[t._v("Obstacle distances in front of the sensor.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/obstacle_distance.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Obstacle distances in front of the sensor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\nuint64 timestamp        # time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 frame     #Coordinate frame of reference "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the yaw rotation and offset of the sensor data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Defaults to MAV_FRAME_GLOBAL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" which is North aligned"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" For body"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mounted sensors use MAV_FRAME_BODY_FRD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" which is vehicle front aligned"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint8 MAV_FRAME_GLOBAL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 MAV_FRAME_LOCAL_NED "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 MAV_FRAME_BODY_FRD "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n\nuint8 sensor_type # Type from MAV_DISTANCE_SENSOR "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint8 MAV_DISTANCE_SENSOR_LASER "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 MAV_DISTANCE_SENSOR_ULTRASOUND "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 MAV_DISTANCE_SENSOR_INFRARED "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 MAV_DISTANCE_SENSOR_RADAR "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\nuint16"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("72")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" distances # Distance of obstacles around the UAV with index "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" corresponding to local North"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" A value of "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" means that the obstacle is right in front of the sensor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" A value of max_distance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" means no obstacle is present"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" A value of UINT16_MAX "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" unknown"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("not used"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" In a array element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" one unit corresponds to "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("cm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nfloat32 increment # Angular width in degrees of each array element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nuint16 min_distance # Minimum distance the sensor can measure in centimeters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint16 max_distance # Maximum distance the sensor can measure in centimeters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nfloat32 angle_offset # Relative angle offset of the "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("index element in the distances array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Value of "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" corresponds to forward"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Positive values are offsets to the right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("TOPICS obstacle_distance obstacle_distance_fused")])]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);