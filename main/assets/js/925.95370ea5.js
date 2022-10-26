(window.webpackJsonp=window.webpackJsonp||[]).push([[925],{1688:function(e,t,n){"use strict";n.r(t);var a=n(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"path-planning-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#path-planning-interface"}},[e._v("#")]),e._v(" Path Planning Interface")]),e._v(" "),n("p",[e._v("PX4 uses a number of MAVLink interfaces for integrating path planning services from a companion computer (including obstacle avoidance in missions, "),n("RouterLink",{attrs:{to:"/en/computer_vision/safe_landing.html"}},[e._v("safe landing")]),e._v(", and future services):")],1),e._v(" "),n("ul",[n("li",[e._v("There are two "),n("a",{attrs:{href:"https://mavlink.io/en/services/trajectory.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Path Planning Protocol"),n("OutboundLink")],1),e._v(" interfaces:\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_WAYPOINTS",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESENTATION_WAYPOINTS"),n("OutboundLink")],1),e._v(": Used by PX4 to send the "),n("em",[e._v("desired path")]),e._v(".\nMay be used by path planning software to send PX4 a stream of setpoints for the "),n("em",[e._v("planned path")]),e._v(".")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_BEZIER",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESENTATION_BEZIER"),n("OutboundLink")],1),e._v(" may (alternatively) be used by path planning software to send PX4 the "),n("em",[e._v("planned path")]),e._v(" as a bezier curve.\nThe curve indicates the (moving) position setpoint of the vehicle over a given time period.")])])]),e._v(" "),n("li",[e._v("The "),n("a",{attrs:{href:"https://mavlink.io/en/services/heartbeat.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HEARTBEAT/Connection Protocol"),n("OutboundLink")],1),e._v(' is used for "proof of life" detection.')]),e._v(" "),n("li",[n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#LOCAL_POSITION_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("LOCAL_POSITION_NED"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ALTITUDE",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALTITUDE"),n("OutboundLink")],1),e._v(" send the vehicle local position and altitude, respectively.")])]),e._v(" "),n("p",[e._v("Path planning is enabled on PX4 in automatic modes (landing, takeoff, hold, mission, return) if "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_OBS_AVOID"}},[e._v("COM_OBS_AVOID=1")]),e._v(".\nIn these modes planning software is expected to supply setpoints to PX4; if the software cannot support a particular flight mode it must mirror back setpoints from the vehicle.")],1),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("The message flows from PX4 UORB topics, through MAVLink, to ROS and back again are all documented in: "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance#message-flows",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance > Message Flows"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("p",[e._v("All services that use this interface send and receive messages of the same type/format.\nDevelopers can therefore use this interface to create their own new companion-side path planning services, or tweak the existing planner software.")]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("The "),n("RouterLink",{attrs:{to:"/en/complete_vehicles/px4_vision_kit.html"}},[e._v("PX4 Vision Autonomy Development Kit")]),e._v(" is recommended for developing path planning software.\nIt comes with "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 avoidance"),n("OutboundLink")],1),e._v(" software pre-installed, and can be used as the base for your own algorithms.")],1)]),e._v(" "),n("h2",{attrs:{id:"px4-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),n("p",[e._v("Path planning is activated in PX4 by "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("setting")]),e._v(" the "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_OBS_AVOID"}},[e._v("COM_OBS_AVOID")]),e._v(" to 1.")],1),e._v(" "),n("h2",{attrs:{id:"companion-computer-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#companion-computer-setup"}},[e._v("#")]),e._v(" Companion Computer Setup")]),e._v(" "),n("p",[e._v("Companion-side hardware setup and hardware/software configuration is provided in the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance"),n("OutboundLink")],1),e._v(" Github repo.")]),e._v(" "),n("p",[e._v("The actual setup/configuration required depends on the planner being used.")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("Only one planner can run on the companion computer at a time (at time of writing).\nThis means that offboard features that use different planners cannot be enabled on the same vehicle. a vehicle at the same time (e.g. a vehicle can support obstacle avoidance and collision prevent, but not also safe landing - or visa versa).")])]),e._v(" "),n("p",[n("span",{attrs:{id:"waypoint_interface"}})]),e._v(" "),n("h2",{attrs:{id:"trajectory-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#trajectory-interface"}},[e._v("#")]),e._v(" Trajectory Interface")]),e._v(" "),n("p",[e._v("PX4 sends information about the "),n("em",[e._v("desired path")]),e._v(" to the companion computer (when "),n("code",[e._v("COM_OBS_AVOID=1")]),e._v(", in "),n("em",[e._v("auto")]),e._v(" modes), and receives back a stream of setpoints for the "),n("em",[e._v("planned path")]),e._v(" from the path planning software.")]),e._v(" "),n("p",[e._v("The desired path information is sent by PX4 using "),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_WAYPOINTS",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESENTATION_WAYPOINTS"),n("OutboundLink")],1),e._v(" messages, as described below in "),n("a",{attrs:{href:"#px4_waypoint_interface"}},[e._v("PX4 Waypoint Interface")]),e._v(".")]),e._v(" "),n("p",[e._v("Path planner software sends back setpoints for the "),n("em",[e._v("planned path")]),e._v(" using either "),n("code",[e._v("TRAJECTORY_REPRESENTATION_WAYPOINTS")]),e._v(" (see "),n("a",{attrs:{href:"#companion_waypoint_interface"}},[e._v("Companion Waypoint Interface")]),e._v(") or "),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_BEZIER",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESENTATION_BEZIER"),n("OutboundLink")],1),e._v(" (see "),n("a",{attrs:{href:"#bezier_interface"}},[e._v("Companion Bezier Trajectory Interface")]),e._v(").\nThe difference is that the waypoint just specifies the next setpoint destination, while the bezier trajectory describes the exact vehicle motion (i.e. a setpoint that moves in time).")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("Route planning software should not mix these interfaces while executing a task (PX4 will use the last received message of either type).")])]),e._v(" "),n("p",[n("span",{attrs:{id:"px4_waypoint_interface"}})]),e._v(" "),n("h3",{attrs:{id:"px4-waypoint-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-waypoint-interface"}},[e._v("#")]),e._v(" PX4 Waypoint Interface")]),e._v(" "),n("p",[e._v("PX4 sends the desired path in "),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_WAYPOINTS",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESENTATION_WAYPOINTS"),n("OutboundLink")],1),e._v(" messages at 5Hz.")]),e._v(" "),n("p",[e._v("The fields set by PX4 as shown:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("time_usec")]),e._v(": UNIX Epoch time.")]),e._v(" "),n("li",[n("code",[e._v("valid_points")]),e._v(": 3")]),e._v(" "),n("li",[e._v("Point 0 - Current waypoint "),n("em",[e._v("type adapted")]),e._v(" by FlightTaskAutoMapper (see "),n("a",{attrs:{href:"#type_adapted"}},[e._v("notes below")]),e._v("):\n"),n("ul",[n("li",[n("code",[e._v("pos_x[0]")]),e._v(", "),n("code",[e._v("pos_y[0]")]),e._v(", "),n("code",[e._v("pos_z[0]")]),e._v(": Type adapted x-y-z NED local position of "),n("em",[e._v("current")]),e._v(" mission waypoint.")]),e._v(" "),n("li",[n("code",[e._v("vel_x[0]")]),e._v(", "),n("code",[e._v("vel_y[0]")]),e._v(", "),n("code",[e._v("vel_z[0]")]),e._v(": Type adapted x-y-z NED local velocity of "),n("em",[e._v("current")]),e._v(" mission waypoint.")]),e._v(" "),n("li",[n("code",[e._v("acc_x[0]")]),e._v(", "),n("code",[e._v("acc_y[0]")]),e._v(", "),n("code",[e._v("acc_z[0]")]),e._v(": NaN")]),e._v(" "),n("li",[n("code",[e._v("pos_yaw[0]")]),e._v(": Current yaw angle")]),e._v(" "),n("li",[n("code",[e._v("vel_yaw[0]")]),e._v(": NaN")]),e._v(" "),n("li",[n("code",[e._v("command[0]")]),e._v(": The "),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#mav_commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Command"),n("OutboundLink")],1),e._v(" for the current waypoint.")])])]),e._v(" "),n("li",[e._v("Point 1 - Current waypoint (Unmodified/not type adapted)):\n"),n("ul",[n("li",[n("code",[e._v("pos_x[1]")]),e._v(", "),n("code",[e._v("pos_y[1]")]),e._v(", "),n("code",[e._v("pos_z[1]")]),e._v(": x-y-z NED local position of "),n("em",[e._v("current")]),e._v(" mission waypoint")]),e._v(" "),n("li",[n("code",[e._v("vel_x[1]")]),e._v(", "),n("code",[e._v("vel_y[1]")]),e._v(", "),n("code",[e._v("vel_z[1]")]),e._v(": NaN")]),e._v(" "),n("li",[n("code",[e._v("acc_x[1]")]),e._v(", "),n("code",[e._v("acc_y[1]")]),e._v(", "),n("code",[e._v("acc_z[1]")]),e._v(": NaN")]),e._v(" "),n("li",[n("code",[e._v("pos_yaw[1]")]),e._v(": Yaw setpoint")]),e._v(" "),n("li",[n("code",[e._v("vel_yaw[1]")]),e._v(": Yaw speed setpoint")]),e._v(" "),n("li",[n("code",[e._v("command[1]")]),e._v(": The "),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#mav_commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Command"),n("OutboundLink")],1),e._v(" for the current waypoint.")])])]),e._v(" "),n("li",[e._v("Point 2 - Next waypoint in local coordinates (unmodified/not type adapted):\n"),n("ul",[n("li",[n("code",[e._v("pos_x[2]")]),e._v(", "),n("code",[e._v("pos_y[2]")]),e._v(", "),n("code",[e._v("pos_z[2]")]),e._v(": x-y-z NED local position of "),n("em",[e._v("next")]),e._v(" mission waypoint")]),e._v(" "),n("li",[n("code",[e._v("vel_x[2]")]),e._v(", "),n("code",[e._v("vel_y[2]")]),e._v(", "),n("code",[e._v("vel_z[2]")]),e._v(": NaN")]),e._v(" "),n("li",[n("code",[e._v("acc_x[2]")]),e._v(", "),n("code",[e._v("acc_y[2]")]),e._v(", "),n("code",[e._v("acc_z[2]")]),e._v(": NaN")]),e._v(" "),n("li",[n("code",[e._v("pos_yaw[2]")]),e._v(": Yaw setpoint")]),e._v(" "),n("li",[n("code",[e._v("vel_yaw[2]")]),e._v(": Yaw speed setpoint")]),e._v(" "),n("li",[n("code",[e._v("command[2]")]),e._v(": The "),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#mav_commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Command"),n("OutboundLink")],1),e._v(" for the next waypoint.")])])]),e._v(" "),n("li",[e._v("All other indices/fields are set as NaN.")])]),e._v(" "),n("p",[n("span",{attrs:{id:"type_adapted"}}),e._v("\nNotes:")]),e._v(" "),n("ul",[n("li",[e._v("Point 0 is the current waypoint/target modified based on the type of target.\nFor example, it makes sense when landing to specify the target x, y coordinates and a descent velocity.\nTo achieve this "),n("code",[e._v("FlightTaskAutoMapper")]),e._v(" modifies land waypoints in Point 0 to set the z component of position to NAN and the z-velocity to a desired value.")]),e._v(" "),n("li",[e._v("Point 1 and 2 are not used by the safe landing planner.")]),e._v(" "),n("li",[e._v("Point 1 is used by local and global planner.")])]),e._v(" "),n("p",[n("span",{attrs:{id:"companion-failure-handling"}})]),e._v(" "),n("h4",{attrs:{id:"handling-of-companion-failure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#handling-of-companion-failure"}},[e._v("#")]),e._v(" Handling of Companion Failure")]),e._v(" "),n("p",[e._v("PX4 safely handles the case where messages are not received from the offboard system:")]),e._v(" "),n("ul",[n("li",[e._v("If no planner is running and "),n("code",[e._v("COM_OBS_AVOID")]),e._v(" is enabled at/from boot:\n"),n("ul",[n("li",[e._v("preflight checks will fail (irrespective of vehicle mode) and it won't fly until "),n("code",[e._v("COM_OBS_AVOID")]),e._v(" is set to 0.")])])]),e._v(" "),n("li",[e._v("If no planner is running and "),n("code",[e._v("COM_OBS_AVOID")]),e._v(" is enabled after boot:\n"),n("ul",[n("li",[e._v("the vehicle will run normally in manual modes.")]),e._v(" "),n("li",[e._v("if you switch to an autonomous mode (e.g. Land Mode) it will immediately fall back to "),n("RouterLink",{attrs:{to:"/en/flight_modes/hold.html"}},[e._v("Hold mode")]),e._v(".")],1)])]),e._v(" "),n("li",[e._v("When external path planning is enabled:\n"),n("ul",[n("li",[e._v("if the "),n("code",[e._v("HEARTBEAT")]),e._v(" is lost PX4 will emit a status message (which is displayed in "),n("em",[e._v("QGroundControl")]),e._v(') stating either "Avoidance system lost" or "Avoidance system timeout" (depending on the vehicle state). This is irrespective of the current flight mode.')]),e._v(" "),n("li",[e._v("if a trajectory message is not received for more than 0.5 seconds and the vehicle is in an autonomous mode (Return, Mission, Takeoff, Land), the vehicle will switch into "),n("RouterLink",{attrs:{to:"/en/flight_modes/hold.html"}},[e._v("Hold mode")]),e._v(".")],1)]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("A planner must always provide points in this timeframe.")]),e._v(" "),n("ul",[n("li",[e._v("A planner will mirror back setpoints it receives when the vehicle is in a mode/state for which it doesn't provide path planning. (i.e. the vehicle will follow its desired path, delayed by a very small amount).")])])]),e._v(" "),n("ul",[n("li",[e._v("If the execution time of the last-supplied bezier trajectory expires during path planning (when using the "),n("a",{attrs:{href:"#bezier_interface"}},[e._v("Bezier Trajectory Interface")]),e._v("), this is treated the same as not getting a new message within 0.5 seconds (i.e. vehicle switches to "),n("RouterLink",{attrs:{to:"/en/flight_modes/hold.html"}},[e._v("Hold mode")]),e._v(").")],1)])])]),e._v(" "),n("p",[n("span",{attrs:{id:"companion_waypoint_interface"}})]),e._v(" "),n("h2",{attrs:{id:"companion-waypoint-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#companion-waypoint-interface"}},[e._v("#")]),e._v(" Companion Waypoint Interface")]),e._v(" "),n("p",[e._v("The path planning software (running on the companion computer) "),n("em",[e._v("may")]),e._v(" send the planned path to PX4 as a stream of "),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_WAYPOINTS",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESENTATION_WAYPOINTS"),n("OutboundLink")],1),e._v(" messages that have the setpoint in Point 0.")]),e._v(" "),n("p",[e._v("The fields for the messages from the companion computer are set as shown:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("time_usec")]),e._v(": UNIX Epoch time.")]),e._v(" "),n("li",[n("code",[e._v("valid_points")]),e._v(": 1")]),e._v(" "),n("li",[e._v("Current vehicle information:\n"),n("ul",[n("li",[n("code",[e._v("pos_x[0]")]),e._v(", "),n("code",[e._v("pos_y[0]")]),e._v(", "),n("code",[e._v("pos_z[0]")]),e._v(": x-y-z NED vehicle local position setpoint")]),e._v(" "),n("li",[n("code",[e._v("vel_x[0]")]),e._v(", "),n("code",[e._v("vel_y[0]")]),e._v(", "),n("code",[e._v("vel_z[0]")]),e._v(": x-y-z NED velocity setpoint")]),e._v(" "),n("li",[n("code",[e._v("acc_x[0]")]),e._v(", "),n("code",[e._v("acc_y[0]")]),e._v(", "),n("code",[e._v("acc_z[0]")]),e._v(": NaN")]),e._v(" "),n("li",[n("code",[e._v("pos_yaw[0]")]),e._v(": Yaw angle setpoint")]),e._v(" "),n("li",[n("code",[e._v("vel_yaw[0]")]),e._v(": Yaw speed setpoint")]),e._v(" "),n("li",[n("code",[e._v("command[0]")]),e._v(": NaN.")])])]),e._v(" "),n("li",[e._v("All other indices/fields are set as NaN.")])]),e._v(" "),n("p",[e._v("A planner that implements this interface must:")]),e._v(" "),n("ul",[n("li",[e._v("Emit setpoints at more than 2Hz when receiving messages from PX4.\nPX4 will enter "),n("RouterLink",{attrs:{to:"/en/flight_modes/hold.html"}},[e._v("Hold mode")]),e._v(" if no message is received for more than 0.5s.")],1),e._v(" "),n("li",[e._v("Mirror back setpoints it receives when it doesn't support planning for the current vehicle state (e.g. the local planner would mirror back messages sent during safe landing, because it does not support Land mode).")])]),e._v(" "),n("p",[n("span",{attrs:{id:"bezier_interface"}})]),e._v(" "),n("h2",{attrs:{id:"companion-bezier-trajectory-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#companion-bezier-trajectory-interface"}},[e._v("#")]),e._v(" Companion Bezier Trajectory Interface")]),e._v(" "),n("p",[e._v("The path planning software (running on the companion computer) "),n("em",[e._v("may")]),e._v(" send the planned path to PX4 as a stream of "),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_BEZIER",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESENTATION_BEZIER"),n("OutboundLink")],1),e._v(" messages.")]),e._v(" "),n("p",[e._v("The message defines the path that the vehicle should follow in terms of a curve (defined by the control points), starting at the message "),n("code",[e._v("timestamp")]),e._v(" and reaching the final point after time "),n("code",[e._v("delta")]),e._v(".\nPX4 calculates its new setpoint (the expected current position/velocity/acceleration along the curve) using the time that the message was sent, the current time, and the total time for the curve (delta).")]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("For example, say the message was sent 0.1 seconds ago and "),n("code",[e._v("delta")]),e._v(" (curve duration) is 0.3s.\nPX4 can calculate its setpoint at the 0.1s position in the curve.")])]),e._v(" "),n("p",[e._v("In more detail, the "),n("code",[e._v("TRAJECTORY_REPRESENTATION_BEZIER")]),e._v(" is parsed as follows:")]),e._v(" "),n("ul",[n("li",[e._v("The number of bezier control points determines the degree of the bezier curve.\nFor example, 3 points makes a quadratic bezier curve with constant acceleration.")]),e._v(" "),n("li",[e._v("The bezier curve must be the same degree in x, y, z, and yaw, with all bezier control points finite")]),e._v(" "),n("li",[e._v("The "),n("code",[e._v("delta")]),e._v(" array should have the value corresponding with the last bezier control point indicate the duration that the waypoint takes to execute the curve to that point, from beginning to end.\nOther values in the "),n("code",[e._v("delta")]),e._v(" array are ignored.")]),e._v(" "),n("li",[e._v("The timestamp of the MAVLink message should be the time that the curve starts, and communication delay and clock mismatch will be compensated for on the flight controller via the timesync mechanism.")]),e._v(" "),n("li",[e._v("The control points should all be specified in local coordinates ("),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_LOCAL_NED"),n("OutboundLink")],1),e._v(").")]),e._v(" "),n("li",[e._v("Bezier curves expire after the execution time of the bezier curve has been reached.\nEnsure that new messages are sent at a high enough rate/with long enough execution time that this does not happen (or the vehicle will switch to Hold mode).")])]),e._v(" "),n("h2",{attrs:{id:"supported-hardware"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[e._v("#")]),e._v(" Supported Hardware")]),e._v(" "),n("p",[e._v("Tested companion computers and cameras are listed in "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance"),n("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);