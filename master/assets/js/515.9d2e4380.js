(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{1622:function(e,t,o){"use strict";o.r(t);var _=o(18),n=Object(_.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"offboard-mode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#offboard-mode"}},[e._v("#")]),e._v(" Offboard Mode")]),e._v(" "),_("p",[_("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_position_fixed"}},[_("img",{attrs:{src:o(322),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),e._v(" "),_("p",[e._v("The vehicle obeys a position, velocity or attitude setpoint provided over MAVLink.\nThe setpoint may be provided by a MAVLink API (e.g. "),_("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVSDK"),_("OutboundLink")],1),e._v(" or "),_("a",{attrs:{href:"https://github.com/mavlink/mavros",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVROS"),_("OutboundLink")],1),e._v(") running on a companion computer (and usually connected via serial cable or wifi).")]),e._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),_("p",[e._v("Not all co-ordinate frames and field values allowed by MAVLink are supported for all setpoint messages and vehicles.\nRead the sections below "),_("em",[e._v("carefully")]),e._v(" to ensure only supported values are used.\nNote also that setpoints must be streamed at > 2Hz before entering the mode and while the mode is operational.")])]),e._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),_("ul",[_("li",[e._v("This mode requires position or pose/attitude information - e.g. GPS, optical flow, visual-inertial odometry, mocap, etc.")]),e._v(" "),_("li",[e._v("RC control is disabled except to change modes.")]),e._v(" "),_("li",[e._v("The vehicle must be armed before this mode can be engaged.")]),e._v(" "),_("li",[e._v("The vehicle must be already be receiving a "),_("strong",[e._v("stream of target setpoints (>2Hz)")]),e._v(" before this mode can be engaged.")]),e._v(" "),_("li",[e._v("The vehicle will exit the mode if target setpoints are not received at a rate of > 2Hz.")]),e._v(" "),_("li",[e._v("Not all co-ordinate frames and field values allowed by MAVLink are supported.")])])]),e._v(" "),_("h2",{attrs:{id:"description"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),_("p",[e._v("Offboard mode is primarily used for controlling vehicle movement and attitude, and supports only a very limited set of MAVLink messages (more may be supported in future).")]),e._v(" "),_("p",[e._v("Other operations, like taking off, landing, return to launch, are best handled using the appropriate modes.\nOperations like uploading, downloading missions can be performed in any mode.")]),e._v(" "),_("p",[e._v("A stream of setpoint commands must be received by the vehicle prior to engaging the mode, and in order to remain in the mode (if the message rate falls below 2Hz the vehicle will stop).\nIn order to hold position while in this mode, the vehicle must receive a stream of setpoints for the current position.")]),e._v(" "),_("p",[e._v("Offboard mode requires an active connection to a remote MAVLink system (e.g. companion computer or GCS).\nIf the connection is lost, after a timeout ("),_("a",{attrs:{href:"#COM_OF_LOSS_T"}},[e._v("COM_OF_LOSS_T")]),e._v(") the vehicle will attempt to land or perform some other failsafe action.\nThe action is defined in the parameters "),_("a",{attrs:{href:"#COM_OBL_ACT"}},[e._v("COM_OBL_ACT")]),e._v(" and "),_("a",{attrs:{href:"#COM_OBL_RC_ACT"}},[e._v("COM_OBL_RC_ACT")]),e._v(".")]),e._v(" "),_("h2",{attrs:{id:"supported-messages"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#supported-messages"}},[e._v("#")]),e._v(" Supported Messages")]),e._v(" "),_("h3",{attrs:{id:"copter-vtol"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#copter-vtol"}},[e._v("#")]),e._v(" Copter/VTOL")]),e._v(" "),_("ul",[_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("SET_POSITION_TARGET_LOCAL_NED"),_("OutboundLink")],1)]),e._v(" "),_("ul",[_("li",[e._v("The following input combinations are supported: "),e._v(" "),_("ul",[_("li",[e._v("Position setpoint (only "),_("code",[e._v("x")]),e._v(", "),_("code",[e._v("y")]),e._v(", "),_("code",[e._v("z")]),e._v(")")]),e._v(" "),_("li",[e._v("Velocity setpoint (only "),_("code",[e._v("vx")]),e._v(", "),_("code",[e._v("yy")]),e._v(", "),_("code",[e._v("vz")]),e._v(")")]),e._v(" "),_("li",[e._v("Acceleration setpoint  (only "),_("code",[e._v("afx")]),e._v(", "),_("code",[e._v("afy")]),e._v(", "),_("code",[e._v("afz")]),e._v(")")]),e._v(" "),_("li",[e._v("Position setpoint "),_("strong",[e._v("and")]),e._v(" velocity setpoint (the velocity setpoint is used as feedforward; it is added to the output of the position controller and the result is used as the input to the velocity controller).")]),e._v(" "),_("li",[e._v("Position setpoint "),_("strong",[e._v("and")]),e._v(" velocity setpoint "),_("strong",[e._v("and")]),e._v(" acceleration (the acceleration setpoint is used as feedforward; it is added to the output of the position controller and the result is used as the input to the velocity controller).")])])])]),e._v(" "),_("ul",[_("li",[_("ul",[_("li",[e._v("PX4 supports the following  "),_("code",[e._v("coordinate_frame")]),e._v(" values (only): "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_LOCAL_NED"),_("OutboundLink")],1),e._v(" and "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_BODY_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_BODY_NED"),_("OutboundLink")],1),e._v(".")])])])])]),e._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_GLOBAL_INT",target:"_blank",rel:"noopener noreferrer"}},[e._v("SET_POSITION_TARGET_GLOBAL_INT"),_("OutboundLink")],1)]),e._v(" "),_("ul",[_("li",[e._v("The following input combinations are supported: "),e._v(" "),_("ul",[_("li",[_("p",[e._v("Position setpoint (only "),_("code",[e._v("lat_int")]),e._v(", "),_("code",[e._v("lon_int")]),e._v(", "),_("code",[e._v("alt")]),e._v(")")])]),e._v(" "),_("li",[_("p",[e._v("Velocity setpoint (only "),_("code",[e._v("vx")]),e._v(", "),_("code",[e._v("yy")]),e._v(", "),_("code",[e._v("vz")]),e._v(")")])]),e._v(" "),_("li",[_("p",[_("em",[e._v("Thrust")]),e._v(" setpoint  (only "),_("code",[e._v("afx")]),e._v(", "),_("code",[e._v("afy")]),e._v(", "),_("code",[e._v("afz")]),e._v(")")]),e._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),_("p",[e._v('Acceleration setpoint values are mapped to create a normalized thrust setpoint (i.e. acceleration setpoints are not "properly" supported).')])])]),e._v(" "),_("li",[_("p",[e._v("Position setpoint "),_("strong",[e._v("and")]),e._v(" velocity setpoint (the velocity setpoint is used as feedforward; it is added to the output of the position controller and the result is used as the input to the velocity controller).")])])])])]),e._v(" "),_("ul",[_("li",[e._v("PX4 supports the following  "),_("code",[e._v("coordinate_frame")]),e._v(" values (only): "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_GLOBAL",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_GLOBAL"),_("OutboundLink")],1),e._v(".")])])]),e._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[e._v("SET_ATTITUDE_TARGET"),_("OutboundLink")],1)]),e._v(" "),_("ul",[_("li",[e._v("The following input combinations are supported:\n"),_("ul",[_("li",[e._v("Attitude/orientation ("),_("code",[e._v("SET_ATTITUDE_TARGET.q")]),e._v(") with thrust setpoint ("),_("code",[e._v("SET_ATTITUDE_TARGET.thrust")]),e._v(").")]),e._v(" "),_("li",[e._v("Body rate ("),_("code",[e._v("SET_ATTITUDE_TARGET")]),e._v(" "),_("code",[e._v(".body_roll_rate")]),e._v(" ,"),_("code",[e._v(".body_pitch_rate")]),e._v(", "),_("code",[e._v(".body_yaw_rate")]),e._v(") with thrust setpoint  ("),_("code",[e._v("SET_ATTITUDE_TARGET.thrust")]),e._v(").")])])])])])]),e._v(" "),_("h3",{attrs:{id:"fixed-wing"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing"}},[e._v("#")]),e._v(" Fixed Wing")]),e._v(" "),_("ul",[_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("SET_POSITION_TARGET_LOCAL_NED"),_("OutboundLink")],1)]),e._v(" "),_("ul",[_("li",[e._v("The following input combinations are supported (via "),_("code",[e._v("type_mask")]),e._v("): "),e._v(" "),_("ul",[_("li",[e._v("Position setpoint ("),_("code",[e._v("x")]),e._v(", "),_("code",[e._v("y")]),e._v(", "),_("code",[e._v("z")]),e._v(" only; velocity and acceleration setpoints are ignored).\n"),_("ul",[_("li",[_("p",[e._v("Specify the "),_("em",[e._v("type")]),e._v(" of the setpoint in "),_("code",[e._v("type_mask")]),e._v(" (if these bits are not set the vehicle will fly in a flower-like pattern):")]),e._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),_("p",[e._v("Some of the "),_("em",[e._v("setpoint type")]),e._v(" values below are not part of the MAVLink standard for the "),_("code",[e._v("type_mask")]),e._v(" field.")])]),e._v(" "),_("p",[e._v("The values are:")]),e._v(" "),_("ul",[_("li",[e._v("292: Gliding setpoint.\nThis configures TECS to prioritize airspeed over altitude in order to make the vehicle glide when there is no thrust (i.e. pitch is controlled to regulate airspeed).\nIt is equivalent to setting "),_("code",[e._v("type_mask")]),e._v(" as "),_("code",[e._v("POSITION_TARGET_TYPEMASK_Z_IGNORE")]),e._v(", "),_("code",[e._v("POSITION_TARGET_TYPEMASK_VZ_IGNORE")]),e._v(", "),_("code",[e._v("POSITION_TARGET_TYPEMASK_AZ_IGNORE")]),e._v(".")]),e._v(" "),_("li",[e._v("4096: Takeoff setpoint.")]),e._v(" "),_("li",[e._v("8192: Land setpoint.")]),e._v(" "),_("li",[e._v("12288: Loiter setpoint (fly a circle centred on setpoint).")]),e._v(" "),_("li",[e._v("16384: Idle setpoint (zero throttle, zero roll / pitch).")])])])])])])]),e._v(" "),_("li",[e._v("PX4 supports the coordinate frames ("),_("code",[e._v("coordinate_frame")]),e._v(" field): "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_LOCAL_NED"),_("OutboundLink")],1),e._v(" and "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_BODY_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_BODY_NED"),_("OutboundLink")],1),e._v(".")])])]),e._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_GLOBAL_INT",target:"_blank",rel:"noopener noreferrer"}},[e._v("SET_POSITION_TARGET_GLOBAL_INT"),_("OutboundLink")],1)]),e._v(" "),_("ul",[_("li",[e._v("The following input combinations are supported (via "),_("code",[e._v("type_mask")]),e._v("): "),e._v(" "),_("ul",[_("li",[e._v("Position setpoint (only "),_("code",[e._v("lat_int")]),e._v(", "),_("code",[e._v("lon_int")]),e._v(", "),_("code",[e._v("alt")]),e._v(")\n"),_("ul",[_("li",[_("p",[e._v("Specify the "),_("em",[e._v("type")]),e._v(" of the setpoint in "),_("code",[e._v("type_mask")]),e._v(" (if these bits are not set the vehicle will fly in a flower-like pattern):")]),e._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),_("p",[e._v("The "),_("em",[e._v("setpoint type")]),e._v(" values below are not part of the MAVLink standard for the "),_("code",[e._v("type_mask")]),e._v(" field.")])]),e._v(" "),_("p",[e._v("The values are:")]),e._v(" "),_("ul",[_("li",[e._v("4096: Takeoff setpoint.")]),e._v(" "),_("li",[e._v("8192: Land setpoint.")]),e._v(" "),_("li",[e._v("12288: Loiter setpoint (fly a circle centred on setpoint).")]),e._v(" "),_("li",[e._v("16384: Idle setpoint (zero throttle, zero roll / pitch).")])])])])])])]),e._v(" "),_("li",[e._v("PX4 supports the following  "),_("code",[e._v("coordinate_frame")]),e._v(" values (only): "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_GLOBAL",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_GLOBAL"),_("OutboundLink")],1),e._v(".")])])]),e._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[e._v("SET_ATTITUDE_TARGET"),_("OutboundLink")],1)]),e._v(" "),_("ul",[_("li",[e._v("The following input combinations are supported:\n"),_("ul",[_("li",[e._v("Attitude/orientation ("),_("code",[e._v("SET_ATTITUDE_TARGET.q")]),e._v(") with thrust setpoint ("),_("code",[e._v("SET_ATTITUDE_TARGET.thrust")]),e._v(").")]),e._v(" "),_("li",[e._v("Body rate ("),_("code",[e._v("SET_ATTITUDE_TARGET")]),e._v(" "),_("code",[e._v(".body_roll_rate")]),e._v(" ,"),_("code",[e._v(".body_pitch_rate")]),e._v(", "),_("code",[e._v(".body_yaw_rate")]),e._v(") with thrust setpoint  ("),_("code",[e._v("SET_ATTITUDE_TARGET.thrust")]),e._v(").")])])])])])]),e._v(" "),_("h3",{attrs:{id:"rover"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rover"}},[e._v("#")]),e._v(" Rover")]),e._v(" "),_("ul",[_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("SET_POSITION_TARGET_LOCAL_NED"),_("OutboundLink")],1)]),e._v(" "),_("ul",[_("li",[e._v("The following input combinations are supported (in "),_("code",[e._v("type_mask")]),e._v("): "),e._v(" "),_("ul",[_("li",[e._v("Position setpoint (only "),_("code",[e._v("x")]),e._v(", "),_("code",[e._v("y")]),e._v(", "),_("code",[e._v("z")]),e._v(")\n"),_("ul",[_("li",[_("p",[e._v("Specify the "),_("em",[e._v("type")]),e._v(" of the setpoint in "),_("code",[e._v("type_mask")]),e._v(":")]),e._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),_("p",[e._v("The "),_("em",[e._v("setpoint type")]),e._v(" values below are not part of the MAVLink standard for the "),_("code",[e._v("type_mask")]),e._v(" field.\n::")]),e._v(" "),_("p",[e._v("The values are:")]),e._v(" "),_("ul",[_("li",[e._v("12288: Loiter setpoint (vehicle stops when close enough to setpoint).")])])])])])]),e._v(" "),_("li",[e._v("Velocity setpoint (only "),_("code",[e._v("vx")]),e._v(", "),_("code",[e._v("yy")]),e._v(", "),_("code",[e._v("vz")]),e._v(")")])])])]),e._v(" "),_("ul",[_("li",[e._v("PX4 supports the coordinate frames ("),_("code",[e._v("coordinate_frame")]),e._v(" field): "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_LOCAL_NED"),_("OutboundLink")],1),e._v(" and "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_BODY_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_BODY_NED"),_("OutboundLink")],1),e._v(".")])])]),e._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_GLOBAL_INT",target:"_blank",rel:"noopener noreferrer"}},[e._v("SET_POSITION_TARGET_GLOBAL_INT"),_("OutboundLink")],1)]),e._v(" "),_("ul",[_("li",[e._v("The following input combinations are supported (in "),_("code",[e._v("type_mask")]),e._v("): "),e._v(" "),_("ul",[_("li",[e._v("Position setpoint (only "),_("code",[e._v("lat_int")]),e._v(", "),_("code",[e._v("lon_int")]),e._v(", "),_("code",[e._v("alt")]),e._v(")")])])]),e._v(" "),_("li",[e._v("Specify the "),_("em",[e._v("type")]),e._v(" of the setpoint in "),_("code",[e._v("type_mask")]),e._v(" (not part of the MAVLink standard).\nThe values are:\n"),_("ul",[_("li",[e._v("Following bits not set then normal behaviour.")]),e._v(" "),_("li",[e._v("12288: Loiter setpoint (vehicle stops when close enough to setpoint).")])])])]),e._v(" "),_("ul",[_("li",[e._v("PX4 supports the coordinate frames ("),_("code",[e._v("coordinate_frame")]),e._v(" field): "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_GLOBAL",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_GLOBAL"),_("OutboundLink")],1),e._v(".")])])]),e._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[e._v("SET_ATTITUDE_TARGET"),_("OutboundLink")],1)]),e._v(" "),_("ul",[_("li",[e._v("The following input combinations are supported:\n"),_("ul",[_("li",[e._v("Attitude/orientation ("),_("code",[e._v("SET_ATTITUDE_TARGET.q")]),e._v(") with thrust setpoint ("),_("code",[e._v("SET_ATTITUDE_TARGET.thrust")]),e._v(")."),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),_("p",[e._v("Only the yaw setting is actually used/extracted.")])])])])])])])]),e._v(" "),_("h2",{attrs:{id:"offboard-parameters"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#offboard-parameters"}},[e._v("#")]),e._v(" Offboard Parameters")]),e._v(" "),_("p",[_("em",[e._v("Offboard mode")]),e._v(" is affected by the following parameters:")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("Parameter")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("span",{attrs:{id:"COM_OF_LOSS_T"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_OF_LOSS_T"}},[e._v("COM_OF_LOSS_T")])],1),e._v(" "),_("td",[e._v("Time-out (in seconds) to wait when offboard connection is lost before triggering offboard lost failsafe ("),_("code",[e._v("COM_OBL_ACT")]),e._v(" and "),_("code",[e._v("COM_OBL_RC_ACT")]),e._v(")")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"COM_OBL_ACT"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_OBL_ACT"}},[e._v("COM_OBL_ACT")])],1),e._v(" "),_("td",[e._v("Mode to switch to if offboard control is lost when "),_("em",[e._v("not")]),e._v(" connected to RC (Values are - 0: "),_("RouterLink",{attrs:{to:"/en/flight_modes/land.html"}},[e._v("Land")]),e._v(", 1: "),_("RouterLink",{attrs:{to:"/en/flight_modes/hold.html"}},[e._v("Hold")]),e._v(", 2: "),_("RouterLink",{attrs:{to:"/en/flight_modes/return.html"}},[e._v("Return ")]),e._v(").")],1)]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"COM_OBL_RC_ACT"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_OBL_RC_ACT"}},[e._v("COM_OBL_RC_ACT")])],1),e._v(" "),_("td",[e._v("Mode to switch to if offboard control is lost while still connected to RC control (Values are - 0: "),_("em",[e._v("Position")]),e._v(", 1: "),_("RouterLink",{attrs:{to:"/en/flight_modes/altitude_mc.html"}},[e._v("Altitude")]),e._v(", 2: "),_("em",[e._v("Manual")]),e._v(", 3: "),_("RouterLink",{attrs:{to:"/en/flight_modes/return.html"}},[e._v("Return ")]),e._v(", 4: "),_("RouterLink",{attrs:{to:"/en/flight_modes/land.html"}},[e._v("Land")]),e._v(").")],1)]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"COM_RC_OVERRIDE"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[e._v("COM_RC_OVERRIDE")])],1),e._v(" "),_("td",[e._v("If enabled, stick movement on a multicopter (or VTOL in multicopter mode) gives control back to the pilot in "),_("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" (except when vehicle is handling a critical battery failsafe). This can be separately enabled for auto modes and for offboard mode, and is enabled in auto modes by default.")],1)])])]),e._v(" "),_("h2",{attrs:{id:"developer-resources"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#developer-resources"}},[e._v("#")]),e._v(" Developer Resources")]),e._v(" "),_("p",[e._v("Typically developers do not directly work at the MAVLink layer, but instead use a robotics API like "),_("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVSDK"),_("OutboundLink")],1),e._v(" or "),_("a",{attrs:{href:"http://www.ros.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROS"),_("OutboundLink")],1),e._v(" (these provide a developer friendly API, and take care of managing and maintaining connections, sending messages and monitoring responses - the minutiae of working with "),_("em",[e._v("Offboard mode")]),e._v(" and MAVLink).")]),e._v(" "),_("p",[e._v("The following resources may be useful for a developer audience:")]),e._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/en/ros/offboard_control.html"}},[e._v("Offboard Control from Linux")]),e._v(" (PX4 Devguide)")],1),e._v(" "),_("li",[_("RouterLink",{attrs:{to:"/en/ros/mavros_offboard.html"}},[e._v("MAVROS Offboard control example")]),e._v(" (PX4 Devguide)")],1)])])}),[],!1,null,null,null);t.default=n.exports},322:function(e,t,o){e.exports=o.p+"assets/img/position_fixed.c1403cf0.svg"}}]);