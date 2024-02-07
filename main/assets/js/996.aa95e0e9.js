(window.webpackJsonp=window.webpackJsonp||[]).push([[996],{1932:function(e,a,t){"use strict";t.r(a);var i=t(19),n=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"obstacle-avoidance-multicopter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#obstacle-avoidance-multicopter"}},[e._v("#")]),e._v(" Obstacle Avoidance (Multicopter)")]),e._v(" "),t("p",[t("em",[e._v("Obstacle Avoidance")]),e._v(" enables a vehicle to navigate around obstacles when following a preplanned path.")]),e._v(" "),t("p",[e._v("The feature requires a companion computer that is running computer vision software.\nThis software provides a route for a given desired trajectory, mapping and navigating around obstacles to achieve the best path.")]),e._v(" "),t("p",[e._v("Obstacle avoidance is intended for automatic modes, and is currently supported for multicopter vehicles in "),t("a",{attrs:{href:"#mission_mode"}},[e._v("Missions")]),e._v(" and "),t("a",{attrs:{href:"#offboard_mode"}},[e._v("Offboard mode")]),e._v(".")]),e._v(" "),t("p",[e._v("This topic explains how the feature is set up and enabled in both modes.")]),e._v(" "),t("h2",{attrs:{id:"limitations-capabilities"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitations-capabilities"}},[e._v("#")]),e._v(" Limitations/Capabilities")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The maximum speed for obstacle avoidance is currently approximately 3 m/s (due to the cost of computing the avoidance path).")]),e._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("Obstacle avoidance can use the "),t("em",[e._v("local planner")]),e._v(" (emits messages at ~30Hz and can move at around 3 m/s) or "),t("em",[e._v("global planner")]),e._v(" (emits messages at ~10Hz and mission speed with obstacle avoidance is around 1-1.5 m/s).")])])])]),e._v(" "),t("p",[t("a",{attrs:{id:"offboard_mode"}})]),e._v(" "),t("h2",{attrs:{id:"offboard-mode-avoidance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#offboard-mode-avoidance"}},[e._v("#")]),e._v(" Offboard Mode Avoidance")]),e._v(" "),t("p",[e._v("PX4 supports obstacle avoidance in "),t("RouterLink",{attrs:{to:"/en/flight_modes/offboard.html"}},[e._v("Offboard mode")]),e._v(".")],1),e._v(" "),t("p",[e._v("The desired route comes from a "),t("RouterLink",{attrs:{to:"/en/ros/"}},[e._v("ROS")]),e._v(" node running on a companion computer.\nThis is passed into an obstacle avoidance module (another ROS node).\nThe avoidance software sends the planned path to the flight stack as a stream of "),t("code",[e._v("SET_POSITION_TARGET_LOCAL_NED")]),e._v(" messages.")],1),e._v(" "),t("p",[e._v("The only required PX4-side setup is to put PX4 into "),t("em",[e._v("Offboard mode")]),e._v(".")]),e._v(" "),t("p",[e._v("Companion-side hardware setup and hardware/software configuration is provided in the "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance"),t("OutboundLink")],1),e._v(" Github repo.")]),e._v(" "),t("p",[t("a",{attrs:{id:"mission_mode"}})]),e._v(" "),t("h2",{attrs:{id:"mission-mode-avoidance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mission-mode-avoidance"}},[e._v("#")]),e._v(" Mission Mode Avoidance")]),e._v(" "),t("p",[e._v("PX4 supports obstacle avoidance in "),t("RouterLink",{attrs:{to:"/en/flight_modes_mc/mission.html"}},[e._v("Mission mode")]),e._v(", using avoidance software running on a separate companion computer.")],1),e._v(" "),t("h3",{attrs:{id:"mission-progression"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mission-progression"}},[e._v("#")]),e._v(" Mission Progression")]),e._v(" "),t("p",[e._v("Mission behaviour with obstacle avoidance enabled is "),t("em",[e._v("slightly different")]),e._v(" to the original plan.")]),e._v(" "),t("p",[e._v("The difference when avoidance is active are:")]),e._v(" "),t("ul",[t("li",[e._v('A waypoint is "reached" when the vehicle is within the acceptance radius, regardless of its heading.\n'),t("ul",[t("li",[e._v('This differs from normal missions, in which the vehicle must reach a waypoint with a certain heading (i.e. in a "close to" straight line from the previous waypoint). This constraint cannot be fulfilled when obstacle avoidance is active because the obstacle avoidance algorithm has full control of the vehicle heading, and the vehicle always moves in the current field of view.')])])]),e._v(" "),t("li",[e._v("PX4 starts emitting a new current/next waypoint once the previous waypoint is reached (i.e. as soon as the vehicle enters its acceptance radius).")]),e._v(" "),t("li",[e._v("If a waypoint is "),t("em",[e._v("inside")]),e._v(" an obstacle it may be unreachable (and the mission will be stuck).\n"),t("ul",[t("li",[e._v("If the vehicle projection on the line previous-current waypoint passes the current waypoint, the acceptance radius is enlarged such that the current waypoint is set as reached")]),e._v(" "),t("li",[e._v("If the vehicle is within the x-y acceptance radius, the altitude acceptance is modified such that the mission progresses (even if it is not in the altitude acceptance radius).")])])]),e._v(" "),t("li",[e._v("The original mission speed (as set in "),t("em",[e._v("QGroundControl")]),e._v("/PX4) is ignored.\nThe speed will be determined by the avoidance software:\n"),t("ul",[t("li",[t("em",[e._v("local planner")]),e._v(" mission speed is around 3 m/s.")]),e._v(" "),t("li",[t("em",[e._v("global planner")]),e._v(" mission speed is around 1-1.5 m/s.")])])])]),e._v(" "),t("p",[e._v("If PX4 stops receiving setpoint updates for more than half a second it will switch into "),t("RouterLink",{attrs:{to:"/en/flight_modes_mc/hold.html"}},[e._v("Hold mode")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"px4-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),t("p",[e._v("Obstacle avoidance is enabled within PX4 by "),t("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("setting")]),e._v(" the "),t("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_OBS_AVOID"}},[e._v("COM_OBS_AVOID")]),e._v(" to 1.")],1),e._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[t("code",[e._v("COM_OBS_AVOID")]),e._v(" also enables "),t("RouterLink",{attrs:{to:"/en/computer_vision/safe_landing.html"}},[e._v("Safe Landing")]),e._v(" and any other features that use the PX4 "),t("RouterLink",{attrs:{to:"/en/computer_vision/path_planning_interface.html"}},[e._v("Path Planning Offboard Interface")]),e._v(" (Trajectory Interface) to integrate external path planning services with PX4.")],1)]),e._v(" "),t("h2",{attrs:{id:"companion-computer-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#companion-computer-setup"}},[e._v("#")]),e._v(" Companion Computer Setup")]),e._v(" "),t("p",[e._v("Companion-side hardware setup and hardware/software configuration is provided in the "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance"),t("OutboundLink")],1),e._v(" Github repo.")]),e._v(" "),t("p",[e._v("Obstacle avoidance in missions can use either the "),t("em",[e._v("local planner")]),e._v(" or "),t("em",[e._v("global planner")]),e._v(" (the local planner is recommended/better performing).")]),e._v(" "),t("p",[t("a",{attrs:{id:"interface"}})]),e._v(" "),t("h2",{attrs:{id:"obstacle-avoidance-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#obstacle-avoidance-interface"}},[e._v("#")]),e._v(" Obstacle Avoidance Interface")]),e._v(" "),t("p",[e._v("PX4 uses the "),t("RouterLink",{attrs:{to:"/en/computer_vision/path_planning_interface.html"}},[e._v("Path Planning Offboard Interface")]),e._v(" for integrating path planning services from a companion computer (including "),t("RouterLink",{attrs:{to:"/en/computer_vision/obstacle_avoidance.html#mission_mode"}},[e._v("Obstacle Avoidance in missions")]),e._v(", "),t("RouterLink",{attrs:{to:"/en/computer_vision/safe_landing.html"}},[e._v("Safe Landing")]),e._v(", and future services).")],1),e._v(" "),t("p",[e._v("The interface (messages sent) between PX4 and the companion are "),t("em",[e._v("exactly")]),e._v(" the same as for any other path planning services.")]),e._v(" "),t("h2",{attrs:{id:"supported-hardware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[e._v("#")]),e._v(" Supported Hardware")]),e._v(" "),t("p",[e._v("Tested companion computers and cameras are listed in "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);