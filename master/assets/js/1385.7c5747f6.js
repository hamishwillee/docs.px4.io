(window.webpackJsonp=window.webpackJsonp||[]).push([[1385],{2531:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vehicle-odometry-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-odometry-uorb-message"}},[t._v("#")]),t._v(" vehicle_odometry (UORB message)")]),t._v(" "),a("p",[t._v("Vehicle odometry data. Fits ROS REP 147 for aerial vehicles")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/vehicle_odometry.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Vehicle odometry data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Fits ROS REP "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("147")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" aerial vehicles")])]),t._v("\nuint64 timestamp        # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint64 timestamp_sample\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Covariance matrix index constants")])]),t._v("\nuint8 COVARIANCE_MATRIX_X_VARIANCE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 COVARIANCE_MATRIX_Y_VARIANCE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\nuint8 COVARIANCE_MATRIX_Z_VARIANCE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\nuint8 COVARIANCE_MATRIX_ROLL_VARIANCE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nuint8 COVARIANCE_MATRIX_PITCH_VARIANCE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\nuint8 COVARIANCE_MATRIX_YAW_VARIANCE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\nuint8 COVARIANCE_MATRIX_VX_VARIANCE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 COVARIANCE_MATRIX_VY_VARIANCE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\nuint8 COVARIANCE_MATRIX_VZ_VARIANCE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\nuint8 COVARIANCE_MATRIX_ROLLRATE_VARIANCE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nuint8 COVARIANCE_MATRIX_PITCHRATE_VARIANCE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\nuint8 COVARIANCE_MATRIX_YAWRATE_VARIANCE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Position and linear velocity frame of reference constants")])]),t._v("\nuint8 LOCAL_FRAME_NED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("         # NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame\nuint8 LOCAL_FRAME_FRD"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         # FRD earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arbitrary heading reference\nuint8 LOCAL_FRAME_OTHER"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("       # Not aligned with the std frames of reference\nuint8 BODY_FRAME_FRD"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("          # FRD body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Position and linear velocity local frame of reference")])]),t._v("\nuint8 local_frame\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Position in meters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Frame of reference defined by local_frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" NaN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" invalid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unknown")])]),t._v("\nfloat32 x           # North position\nfloat32 y           # East position\nfloat32 z           # Down position\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Orientation quaternion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" First value NaN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" invalid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unknown")])]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" q            # Quaternion rotation from FRD body frame to refernce frame\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" q_offset     # Quaternion rotation from odometry reference frame to navigation frame\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Row"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("major representation of "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("x6 pose cross"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("covariance matrix URT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Order"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rotation about X axis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rotation about Y axis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rotation about Z axis")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("If position covariance invalid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unknown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" first cell is NaN")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("If orientation covariance invalid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unknown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("th cell is NaN")])]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" pose_covariance\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Reference frame of the velocity data")])]),t._v("\nuint8 velocity_frame\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Velocity in meters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Frame of reference defined by velocity_frame variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" NaN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" invalid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unknown")])]),t._v("\nfloat32 vx          # North velocity\nfloat32 vy          # East velocity\nfloat32 vz          # Down velocity\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Angular rate in body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rad"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" NaN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" invalid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unknown")])]),t._v("\nfloat32 rollspeed       # Angular velocity about X body axis\nfloat32 pitchspeed      # Angular velocity about Y body axis\nfloat32 yawspeed        # Angular velocity about Z body axis\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Row"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("major representation of "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("x6 velocity cross"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("covariance matrix URT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Linear velocity in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Angular velocity in body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Order"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rotation rate about X axis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rotation rate about Y axis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rotation rate about Z axis")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("If linear velocity covariance invalid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unknown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" first cell is NaN")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("If angular velocity covariance invalid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unknown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("th cell is NaN")])]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" velocity_covariance\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("TOPICS vehicle_odometry vehicle_mocap_odometry vehicle_visual_odometry")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("TOPICS estimator_odometry estimator_visual_odometry_aligned")])]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);