(window.webpackJsonp=window.webpackJsonp||[]).push([[801],{1559:function(e,t,a){"use strict";a.r(t);var n=a(19),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"safe-landing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#safe-landing"}},[e._v("#")]),e._v(" Safe Landing")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Safe Landing")]),e._v(" feature ensures that vehicles only land on flat terrain.")]),e._v(" "),a("p",[e._v("The feature can be enabled in both "),a("RouterLink",{attrs:{to:"/en/flight_modes/land.html"}},[e._v("Land mode")]),e._v(" and "),a("RouterLink",{attrs:{to:"/en/flight_modes/mission.html"}},[e._v("Mission mode")]),e._v(" on multicopter vehicles that have a companion computer running the appropriate vision software.\nIt can also be used for VTOL vehicles in MC mode.")],1),e._v(" "),a("p",[e._v("If commanded to land, the vehicle first descends to a height where it can measure the surface (companion computer "),a("code",[e._v("loiter_height")]),e._v(" parameter).\nIf the landing area is not sufficiently flat, the vehicle moves outwards in a square-spiral pattern, periodically stopping to re-check the terrain for a landing spot that isn't too rough.")]),e._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/9SuJYcT0Mgc",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),e._v(" "),a("h2",{attrs:{id:"limitations-capabilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitations-capabilities"}},[e._v("#")]),e._v(" Limitations/Capabilities")]),e._v(" "),a("p",[e._v("Safe landing is designed for finding flat areas in rough terrain.")]),e._v(" "),a("ul",[a("li",[e._v('Landing on a road is not prevented; if a car is detected it will be "forgotten" once it moves past.')]),e._v(" "),a("li",[e._v("Landing on water may occur if using radar or ultrasound sensors, but should not occur if using stereo cameras or LIDAR.\n"),a("ul",[a("li",[e._v("The system will only land if it is able to detect ground.\nFor stereo cameras, water that is rough enough to have sufficient distinguishing features for analysis will not be flat enough to land on.")])])])]),e._v(" "),a("h2",{attrs:{id:"px4-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),a("p",[e._v("Safe landing is enabled within PX4 by "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("setting")]),e._v(" the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_OBS_AVOID"}},[e._v("COM_OBS_AVOID")]),e._v(" to 1.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[a("code",[e._v("COM_OBS_AVOID")]),e._v(" also enables "),a("RouterLink",{attrs:{to:"/en/computer_vision/obstacle_avoidance.html#mission_mode"}},[e._v("Obstacle Avoidance in Missions")]),e._v(" and any other features that use the "),a("RouterLink",{attrs:{to:"/en/computer_vision/path_planning_interface.html"}},[e._v("Path Planning Offboard Interface")]),e._v(" (Trajectory Interface) to integrate external path planning services with PX4.")],1)]),e._v(" "),a("h2",{attrs:{id:"companion-computer-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#companion-computer-setup"}},[e._v("#")]),e._v(" Companion Computer Setup")]),e._v(" "),a("p",[e._v("Companion-side setup and configuration is provided in the "),a("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/avoidance"),a("OutboundLink")],1),e._v(" Github repo.")]),e._v(" "),a("p",[e._v("This covers the common setup for obstacle avoidance and collision prevention, and includes specific sections for using the "),a("em",[e._v("safe landing planner")]),e._v(" (which provides companion-side support for this feature):")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance#safe-landing-planner",target:"_blank",rel:"noopener noreferrer"}},[e._v("Simulation setup"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance#safe-landing-planner-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Harware setup"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("The configuration information includes, among other things, how to set up safe landing for different cameras, sizes of vehicles, and the height at which the decision to land or not is taken.")]),e._v(" "),a("p",[a("span",{attrs:{id:"interface"}})]),e._v(" "),a("h2",{attrs:{id:"safe-landing-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#safe-landing-interface"}},[e._v("#")]),e._v(" Safe Landing Interface")]),e._v(" "),a("p",[e._v("PX4 uses the "),a("RouterLink",{attrs:{to:"/en/computer_vision/path_planning_interface.html"}},[e._v("Path Planning Interface")]),e._v(" for integrating path planning services from a companion computer (including "),a("RouterLink",{attrs:{to:"/en/computer_vision/obstacle_avoidance.html#mission_mode"}},[e._v("Obstacle Avoidance in missions")]),e._v(", "),a("RouterLink",{attrs:{to:"/en/computer_vision/safe_landing.html"}},[e._v("Safe Landing")]),e._v(", and future services).")],1),e._v(" "),a("p",[e._v("The interface (messages sent) between PX4 and the companion are exactly the same as for any other path planning services.\nNote however that the safe landing planner only uses information in Point 0 of the "),a("code",[e._v("TRAJECTORY_REPRESENTATION_WAYPOINTS")]),e._v(" message for the desired path.")]),e._v(" "),a("h2",{attrs:{id:"supported-hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[e._v("#")]),e._v(" Supported Hardware")]),e._v(" "),a("p",[e._v("Tested companion computers and cameras are listed in "),a("a",{attrs:{href:"https://github.com/PX4/avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/avoidance"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://youtu.be/CxIsJWtVaTA?t=963",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vision and offboard control interfaces"),a("OutboundLink")],1),e._v(" (PX4 Developer Summit 2019: Martina Rivizzigno, Auterion Computer Vision Engineer)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/avoidance"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance#safe-landing-planner",target:"_blank",rel:"noopener noreferrer"}},[e._v("Simulation setup > Safe Landing Planner"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance#ssafe-landing-planner-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hardware setup > Safe Landing Planner"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);