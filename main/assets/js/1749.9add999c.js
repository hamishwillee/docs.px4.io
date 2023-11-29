(window.webpackJsonp=window.webpackJsonp||[]).push([[1749],{3114:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vehicleodometry-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vehicleodometry-uorb-message"}},[t._v("#")]),t._v(" VehicleOdometry (UORB message)")]),t._v(" "),s("p",[t._v("Vehicle odometry data. Fits ROS REP 147 for aerial vehicles")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleOdometry.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Vehicle odometry data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Fits ROS REP "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("147")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" aerial vehicles")])]),t._v("\nuint64 timestamp        # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 timestamp_sample\n\nuint8 POSE_FRAME_UNKNOWN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 POSE_FRAME_NED     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # NED earth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame\nuint8 POSE_FRAME_FRD     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # FRD world"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arbitrary heading reference\nuint8 pose_frame            # Position and orientation frame of reference\n\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" position         # Position in meters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Frame of reference defined by local_frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" NaN "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" invalid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unknown\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" q                # Quaternion rotation from FRD body frame to reference frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" First value NaN "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" invalid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unknown\n\nuint8 VELOCITY_FRAME_UNKNOWN  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 VELOCITY_FRAME_NED      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # NED earth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame\nuint8 VELOCITY_FRAME_FRD      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # FRD world"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arbitrary heading reference\nuint8 VELOCITY_FRAME_BODY_FRD "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" # FRD body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame\nuint8 velocity_frame        # Reference frame of the velocity data\n\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" velocity         # Velocity in meters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Frame of reference defined by velocity_frame variable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" NaN "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" invalid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unknown\n\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" angular_velocity # Angular velocity in body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" NaN "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" invalid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unknown\n\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" position_variance\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" orientation_variance\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" velocity_variance\n\nuint8 reset_counter\nint8 quality\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("TOPICS vehicle_odometry vehicle_mocap_odometry vehicle_visual_odometry")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("TOPICS estimator_odometry")])]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);