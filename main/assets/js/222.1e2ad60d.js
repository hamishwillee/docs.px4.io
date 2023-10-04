(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{2026:function(e,t,o){"use strict";o.r(t);var a=o(19),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"follow-me-mode-multicopter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#follow-me-mode-multicopter"}},[e._v("#")]),e._v(" Follow-Me Mode (Multicopter)")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_position_fixed"}},[a("img",{attrs:{src:o(327),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),e._v(" "),a("p",[a("em",[e._v("Follow Me")]),e._v(" mode allows a multicopter to autonomously hold position and altitude relative to another system that is broadcasting its position (and optionally velocity) using the "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#FOLLOW_TARGET",target:"_blank",rel:"noopener noreferrer"}},[e._v("FOLLOW_TARGET"),a("OutboundLink")],1),e._v(" MAVLink message.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(402),alt:"Follow-me Concept"}})]),e._v(" "),a("p",[e._v("The vehicle will automatically yaw to face and follow the target from a specified "),a("a",{attrs:{href:"#FLW_TGT_FA"}},[e._v("relative angle")]),e._v(", "),a("a",{attrs:{href:"#FLW_TGT_DST"}},[e._v("distance")]),e._v(" and "),a("a",{attrs:{href:"#FLW_TGT_HT"}},[e._v("height")]),e._v(" and altitude, depending on the "),a("a",{attrs:{href:"#FLW_TGT_ALT_M"}},[e._v("altitude control mode")]),e._v(".")]),e._v(" "),a("p",[e._v("By default it will follow from directly behind the target at a distance of 8 meters, and a height of 8 meters above the home (arming) position.")]),e._v(" "),a("p",[e._v("Users can adjust the follow angle, height and distance using an RC controller as shown above:")]),e._v(" "),a("ul",[a("li",[a("p",[a("em",[e._v("Follow Height")]),e._v(" is controlled with the "),a("code",[e._v("up-down")]),e._v(' input ("Throttle").\nCenter the stick to keep follow the target at a constant hight. Raise or lower the stick to adjust height.')])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Follow Distance")]),e._v(" is controlled with the "),a("code",[e._v("forward-back")]),e._v(' input ("Pitch").\nPushing the stick forward increases the follow distance, pulling it back decreases the distance.')])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Follow Angle")]),e._v(" is controlled with the "),a("code",[e._v("left-right")]),e._v(' input ("Roll").\nThe movement is from the user\'s perspective, so if you face the drone and move the stick left, it will move to your left.\nFrom above if you move the stick left the drone will move counter-clockwise.')]),e._v(" "),a("p",[e._v("Follow Angle is defined as increasing in clockwise direction relative to the target's heading (which is 0 degrees)")]),e._v(" "),a("p",[a("img",{attrs:{src:o(403),alt:"Follow-me Angle Diagram"}})])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Angle, height, and distance values set using the RC controller are discarded when you exit follow-me mode.\nIf you exit Follow-Me mode and activate it again the values will be reset to their defaults.")])]),e._v(" "),a("p",[e._v("Demo video:")]),e._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/csuMtU6seXI",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),e._v(" "),a("h2",{attrs:{id:"how-to-use-follow-me"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-follow-me"}},[e._v("#")]),e._v(" How to Use Follow Me")]),e._v(" "),a("p",[e._v("Follow-me mode is supported by "),a("em",[e._v("QGroundControl")]),e._v(" on Android devices with a GPS module, and "),a("a",{attrs:{href:"#follow-me-with-mavsdk"}},[e._v("MAVSDK")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("ul",[a("li",[e._v("This mode requires GPS.")]),e._v(" "),a("li",[e._v("This mode is currently only supported on multicopter.")]),e._v(" "),a("li",[e._v("The follow target must also be able to supply position information.")]),e._v(" "),a("li",[a("em",[e._v("QGroundControl")]),e._v(" only supports this mode on Android devices that have GPS.")])])]),e._v(" "),a("h3",{attrs:{id:"safety-precautions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#safety-precautions"}},[e._v("#")]),e._v(" Safety Precautions")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[a("strong",[e._v("Follow-me mode")]),e._v(" does not implement any type of obstacle avoidance.\nSpecial care must be taken when this mode is used.")])]),e._v(" "),a("p",[e._v("The following flight precautions should be observed:")]),e._v(" "),a("ul",[a("li",[e._v("Follow me mode should only be used in wide open areas that are unobstructed by trees, power lines, houses, etc.\n"),a("ul",[a("li",[e._v("Set the "),a("a",{attrs:{href:"#FLW_TGT_HT"}},[e._v("follow-me height")]),e._v(" to a value that is well above any surrounding obstructions.\nBy "),a("em",[e._v("default")]),e._v(" this is 8 metres above the home (arming) position.")])])]),e._v(" "),a("li",[e._v("It is "),a("em",[e._v("safer")]),e._v(" to manually fly to a safe height before engaging follow-me mode than to engage follow-me mode when landed (even though the mode implements auto take off).")]),e._v(" "),a("li",[e._v("Give your vehicle sufficient room to stop, especially when it is moving fast.")]),e._v(" "),a("li",[e._v("Be ready to switch back to Position mode if something goes wrong, in particular when using follow-me mode for the first time.")]),e._v(" "),a("li",[e._v("You can't switch follow-me mode off using RC stick movements (as that will adjust the properties).\nYou either need to have a GroundStation that can send flight mode switch signals or a flight mode switch configured in your RC transmitter.")])]),e._v(" "),a("h3",{attrs:{id:"follow-me-with-qgroundcontrol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#follow-me-with-qgroundcontrol"}},[e._v("#")]),e._v(" Follow-Me with QGroundControl")]),e._v(" "),a("p",[a("img",{attrs:{src:o(404),alt:"Follow-me QGC Example"}})]),e._v(" "),a("p",[a("em",[e._v("Follow Me")]),e._v(" mode is supported using "),a("em",[e._v("QGroundControl")]),e._v(" as a target on ground station hardware that has a GPS module.\nThe recommended configuration is a USB OTG-capable Android device with two telemetry radios.")]),e._v(" "),a("p",[e._v("To setup "),a("em",[e._v("Follow Me")]),e._v(" mode:")]),e._v(" "),a("ul",[a("li",[e._v("Connect a telemetry radio to your ground station device and another to the vehicle (this allows positioning information to be relayed between the two radios).")]),e._v(" "),a("li",[e._v("Disable sleep-mode on your Android device:\n"),a("ul",[a("li",[e._v("This setting can usually be found under: "),a("strong",[e._v("Settings > Display")]),e._v(".")]),e._v(" "),a("li",[e._v("It is important that you set your Android device to not go to sleep as this could cause the GPS signal to cease being emitted at regular intervals.")])])]),e._v(" "),a("li",[e._v("Takeoff to a height of at least 2-3 metres (recommended even though auto-takeoff is supported).\n"),a("ul",[a("li",[e._v("Set the vehicle on the ground, press the safety switch and step back at least 10 meters.")]),e._v(" "),a("li",[e._v("Arm the vehicle and takeoff.")])])]),e._v(" "),a("li",[e._v("Switch into follow-me mode.\n"),a("ul",[a("li",[e._v("The copter will first ascend to minimum safety altitude of 1 meters above the ground or home, depending on the presence of a distance sensor.")]),e._v(" "),a("li",[e._v("It will ascend until it is 3 meters within the "),a("a",{attrs:{href:"#FLW_TGT_HT"}},[e._v("follow height")]),e._v(" to avoid potential collisions before moving horizontally.")]),e._v(" "),a("li",[e._v("Copter will always adjust it's heading to face the target")])])])]),e._v(" "),a("p",[e._v("At this point you can start moving, and the drone will be following you.")]),e._v(" "),a("p",[e._v("The mode has been tested on the following Android devices:")]),e._v(" "),a("ul",[a("li",[e._v("Galaxy S10")]),e._v(" "),a("li",[e._v("Nexus 7 Tablet")])]),e._v(" "),a("h3",{attrs:{id:"follow-me-with-mavsdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#follow-me-with-mavsdk"}},[e._v("#")]),e._v(" Follow-me with MAVSDK")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://mavsdk.mavlink.io/develop/en/api_reference/classmavsdk_1_1_follow_me.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVSDK"),a("OutboundLink")],1),e._v(" supports "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/guide/follow_me.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Follow Me"),a("OutboundLink")],1),e._v(", allowing you to create a drone app that is a follow-me target.")]),e._v(" "),a("p",[e._v("For more information see the "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/guide/follow_me.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Follow Me class"),a("OutboundLink")],1),e._v(" documentation as well as the "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/examples/follow_me.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Follow Me Example"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("MAVSDK is not currently recommended, due to a bug ("),a("a",{attrs:{href:"https://github.com/mavlink/MAVSDK/issues/1756",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVSDK#1756"),a("OutboundLink")],1),e._v(" where the same message is occasionally sent twice.\nThis can confuse the target position and velocity estimator.")])]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("h3",{attrs:{id:"altitude-control-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#altitude-control-mode"}},[e._v("#")]),e._v(" Altitude Control Mode")]),e._v(" "),a("p",[a("img",{attrs:{src:o(405),alt:"Follow Me Altitude Modes"}})]),e._v(" "),a("p",[e._v("The altitude control mode determine whether the vehicle altitude is relative to the home position, terrain height, or the altitude reported by the follow target.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("2D tracking")]),e._v(" (the default "),a("a",{attrs:{href:"#FLW_TGT_ALT_M"}},[e._v("altitude mode")]),e._v(") makes the drone follow at a height relative to the fixed home position (takeoff altitude).\nThe relative distance to the drone to the target will change as you ascend and descend (use with care in hilly terrain).")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("2D + Terrain")]),e._v(" makes the drone follow at a fixed height relative to the terrain underneath it, using information from a distance sensor.")]),e._v(" "),a("ul",[a("li",[e._v("If the vehicle does not have a distance sensor following will be identical to "),a("code",[e._v("2D tracking")]),e._v(".")]),e._v(" "),a("li",[e._v('Distance sensors aren\'t always accurate and vehicles may be "jumpy" when flying in this mode.')]),e._v(" "),a("li",[e._v("Note that that height is relative to the ground underneath the vehicle, not the follow target.\nThe drone may not follow altitude changes of the target!")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("3D tracking")]),e._v(" mode makes the drone follow at a height relative to the follow target, as supplied by its GPS sensor.\nThis adapts to target altitude changes, such as when you walk up a hill.")])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Do not set the "),a("strong",[e._v("Altitude mode ("),a("a",{attrs:{href:"#FLW_TGT_ALT_M"}},[e._v("FLW_TGT_ALT_M")])]),e._v(") to "),a("code",[e._v("3D Tracking")]),e._v(" when using QGC for Android (or more generally, without checking that "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#FOLLOW_TARGET",target:"_blank",rel:"noopener noreferrer"}},[e._v("FOLLOW_TARGET.altitude"),a("OutboundLink")],1),e._v(" is an AMSL value).")]),e._v(" "),a("p",[e._v("The MAVLink "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#FOLLOW_TARGET",target:"_blank",rel:"noopener noreferrer"}},[e._v("FOLLOW_TARGET"),a("OutboundLink")],1),e._v(" message definition expects an altitude relative to mean sea level (AMSL) while QGC on Android is sending an altitude relative to the GPS ellipsoid.\nThis can differ as much as 200 meters!")]),e._v(" "),a("p",[e._v("The drone probably won't crash due to the built-in minimum safety altitude limit (1 meter), but it may fly much higher than expected.\nIf the drone's altitude is significantly different than specified, assume that the ground station's altitude output is wrong and use 2D tracking.")])]),e._v(" "),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v("The follow-me behavior can be configured using the following parameters:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"FLW_TGT_HT"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FLW_TGT_HT"}},[e._v("FLW_TGT_HT")])],1),e._v(" "),a("td",[e._v("Vehicle follow-me height, in metres. Note that this height is fixed "),a("em",[e._v("relative to the home/arming position")]),e._v(" (not the target vehicle). Default and minimum height is 8 meters (about 26 ft)")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FLW_TGT_DST"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FLW_TGT_DST"}},[e._v("FLW_TGT_DST")])],1),e._v(" "),a("td",[e._v("Vehicle/ground station separation in the "),a("em",[e._v("horizontal")]),e._v(" (x,y) plane, in metres. Minimum allowed separation is 1 meter. Default distance is 8 meters (about 26 ft).")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FLW_TGT_FA"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FLW_TGT_FA"}},[e._v("FLW_TGT_FA")])],1),e._v(" "),a("td",[e._v("Follow angle relative to the target's heading, in degrees. If a value out of the range ["),a("code",[e._v("-180.0")]),e._v(", "),a("code",[e._v("+180.0")]),e._v("] is entered, it will get automatically wrapped and applied (e.g. "),a("code",[e._v("480.0")]),e._v(" will be converted to "),a("code",[e._v("120.0")]),e._v(")")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FLW_TGT_ALT_M"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FLW_TGT_ALT_M"}},[e._v("FLW_TGT_ALT_M")])],1),e._v(" "),a("td",[e._v("Altitude control mode. "),a("br"),e._v("- "),a("code",[e._v("0")]),e._v(" = 2D Tracking (Altitude Fixed) "),a("br"),e._v("- "),a("code",[e._v("1")]),e._v(" = 2D Tracking + Terrain Following "),a("br"),e._v("- "),a("code",[e._v("2")]),e._v(" = 3D Tracking of the target's GPS altitude "),a("strong",[e._v("WARNING: "),a("a",{attrs:{href:"#altitude-control-mode"}},[e._v("DO NOT USE WITH QGC for Android")])]),e._v(".")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FLW_TGT_MAX_VEL"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FLW_TGT_MAX_VEL"}},[e._v("FLW_TGT_MAX_VEL")])],1),e._v(" "),a("td",[e._v("Maximum relative velocity for orbital motion around the target, in m/s."),a("br"),e._v("- 10 m/s has proven to be a sweet spot for aggressiveness vs smoothness."),a("br"),e._v("- Setting it to higher value means the orbit trajectory around the target will move faster, but if the drone is physically not capable of achieving that speed, it leads to an aggressive behavior.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FLW_TGT_RS"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FLW_TGT_RS"}},[e._v("FLW_TGT_RS")])],1),e._v(" "),a("td",[e._v("Dynamic filtering algorithm responsiveness that filters incoming target location."),a("br"),e._v("- "),a("code",[e._v("0.0")]),e._v(" = Very sensitive to movements and noisy estimates of position, velocity and acceleration."),a("br"),e._v("- "),a("code",[e._v("1.0")]),e._v(" = Very stable but not responsive filter")])])])]),e._v(" "),a("h3",{attrs:{id:"tips-and-tricks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips-and-tricks"}},[e._v("#")]),e._v(" Tips and tricks")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Set the "),a("a",{attrs:{href:"#FLW_TGT_DST"}},[e._v("follow distance")]),e._v(' to more than 12 meters (8 meters is a "recommended minimum").')]),e._v(" "),a("p",[e._v("There is an inherent position bias (3 ~ 5 meters) between the target and the drone's GPS sensor, which makes the drone follow a 'ghost target' somewhere near the actual target.\nThis is more obvious when the follow distance is very small.\nWe recommend that the follow distance is set to be large enough such that the GPS bias is not significant.")])]),e._v(" "),a("li",[a("p",[e._v("The speed at which you can change the follow angle depends on the "),a("a",{attrs:{href:"#FLW_TGT_MAX_VEL"}},[e._v("maximum tangential velocity")]),e._v(" setting.")]),e._v(" "),a("p",[e._v("Experimentation shows that values between "),a("code",[e._v("5 m/s")]),e._v(" are "),a("code",[e._v("10 m/s")]),e._v(" are usually suitable.")])]),e._v(" "),a("li",[a("p",[e._v("Using the RC Adjustment for height, distance and angle, you can get some creative camera shots.")]),e._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/o3DhvCL_M1E",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),e._v("This video demonstrates a Google-Earth view perspective, by adjusting the height to around 50 meters (high), distance to 1 meter (close). Which allows a perspective as shot from a satellite."),a("p")])]),e._v(" "),a("h2",{attrs:{id:"known-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known Issues")]),e._v(" "),a("ul",[a("li",[e._v("The SiK 915 Mhz "),a("RouterLink",{attrs:{to:"/en/telemetry/sik_radio.html"}},[e._v("telemetry radio")]),e._v(" is known to interfere with the GPS signal being received by some Android devices.\nKeep the radio and Android device as far apart as possible when using the follow target mode to avoid interference.")],1),e._v(" "),a("li",[e._v("QGC for Android reports an incorrect altitude (altitude above elipsoid rather than AMSL).\nThe follow altitude can be off by up to 200m!")])])])}),[],!1,null,null,null);t.default=i.exports},327:function(e,t,o){e.exports=o.p+"assets/img/position_fixed.38e4a675.svg"},402:function(e,t,o){e.exports=o.p+"assets/img/followme_concept.fdba1ad4.png"},403:function(e,t,o){e.exports=o.p+"assets/img/followme_angle.0569ffda.png"},404:function(e,t,o){e.exports=o.p+"assets/img/followme_qgc_example.9d57fc1d.jpg"},405:function(e,t,o){e.exports=o.p+"assets/img/followme_altitude_modes.bb014cb5.svg"}}]);