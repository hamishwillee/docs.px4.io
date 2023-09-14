(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{1202:function(e,t,r){e.exports=r.p+"assets/img/airframe_rover_ackermann.c1ab8d40.png"},1203:function(e,t,r){e.exports=r.p+"assets/img/airframe_rover_aion.85c2a38d.png"},2047:function(e,t,r){"use strict";r.r(t);var a=r(19),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rovers-ugvs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rovers-ugvs"}},[e._v("#")]),e._v(" Rovers (UGVs)")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Support for rover is "),a("RouterLink",{attrs:{to:"/en/airframes/#experimental-vehicles"}},[e._v("experimental")]),e._v(".")],1),e._v(" "),a("ul",[a("li",[e._v("Does not have a maintainer.")]),e._v(" "),a("li",[e._v("Not regularly tested by the core development team.")]),e._v(" "),a("li",[e._v("Limited support for different types of vehicles.")])]),e._v(" "),a("p",[e._v("Maintainer volunteers, "),a("RouterLink",{attrs:{to:"/en/contribute/"}},[e._v("contribution")]),e._v(" of new features, new frame configurations, or other improvements would all be very welcome!")],1)]),e._v(" "),a("p",[e._v("PX4 supports rovers (Unmanned Ground Vehicles - UGVs) with "),a("a",{attrs:{href:"#rover-types"}},[e._v("ackermann and differential")]),e._v(" steering.")]),e._v(" "),a("p",[e._v("This section contains build logs/instructions for assembling as well as configuring a number of UGV frames.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(406),alt:"Traxxas Rover Picture"}})]),e._v(" "),a("h2",{attrs:{id:"rover-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rover-types"}},[e._v("#")]),e._v(" Rover Types")]),e._v(" "),a("p",[e._v("PX4 supports rovers with:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Differential steering")]),e._v(": direction is controlled by moving the left- and right-side wheels at different speeds.\nThis kind of steering commonly used on bulldozers, tanks, and other tracked vehicles.")]),e._v(" "),a("li",[a("strong",[e._v("Ackermann steering")]),e._v(": direction is controlled by pointing wheels in the direction of travel ("),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ackermann_steering_geometry",target:"_blank",rel:"noopener noreferrer"}},[e._v("ackermann geometry"),a("OutboundLink")],1),e._v(" compensates for the fact that wheels on the inside and outside of the turn move at different rates).\nThis kind of steering is used on most commercial vehicles, including cars, trucks etc.")])]),e._v(" "),a("p",[e._v("The supported frames can be seen in "),a("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#rover"}},[e._v("Airframes Reference > Rover")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"how-to-configure-a-rover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-a-rover"}},[e._v("#")]),e._v(" How to Configure a Rover")]),e._v(" "),a("h3",{attrs:{id:"ackermann-steering-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ackermann-steering-configuration"}},[e._v("#")]),e._v(" Ackermann Steering Configuration")]),e._v(" "),a("p",[e._v("Setting up a rover with Ackermann steering is straightforward:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In the "),a("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[e._v("Airframe")]),e._v(" configuration, select the "),a("em",[e._v("Generic Ground Vehicle")]),e._v(".")],1),e._v(" "),a("p",[a("img",{attrs:{src:r(1202),alt:"Select Ackermann steered airframe"}})]),e._v(" "),a("p",[e._v("Select the "),a("strong",[e._v("Apply and Restart")]),e._v(" button.")])]),e._v(" "),a("li",[a("p",[e._v("Open the "),a("RouterLink",{attrs:{to:"/en/config/actuators.html"}},[e._v("Actuators Configuration & Testing")]),e._v(" to map the steering and throttle functions to flight controller outputs.")],1)])]),e._v(" "),a("h3",{attrs:{id:"differential-steering-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#differential-steering-configuration"}},[e._v("#")]),e._v(" Differential Steering Configuration")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In the "),a("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[e._v("Airframe")]),e._v(" configuration, select either the "),a("em",[e._v("Aion Robotics R1 UGV")]),e._v(" or "),a("em",[e._v("NXP Cup car: DF Robot GPX")])],1),e._v(" "),a("p",[a("img",{attrs:{src:r(1203),alt:"Select Differential steered airframe"}})])])]),e._v(" "),a("p",[e._v("Select the "),a("strong",[e._v("Apply and Restart")]),e._v(" button.")]),e._v(" "),a("ol",[a("li",[e._v("Open the "),a("RouterLink",{attrs:{to:"/en/config/actuators.html"}},[e._v("Actuators Configuration & Testing")]),e._v(" and map the left and right motor functions to flight controller outputs.")],1)]),e._v(" "),a("h2",{attrs:{id:"simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simulation"}},[e._v("#")]),e._v(" Simulation")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[e._v("Gazebo Classic")]),e._v(" provides simulations for both types of steering:")],1),e._v(" "),a("ul",[a("li",[e._v("Ackermann: "),a("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/gazebo_vehicles.html#ackermann-ugv"}},[e._v("ackermann rover")])],1),e._v(" "),a("li",[e._v("Differential: "),a("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/gazebo_vehicles.html#differential-ugv"}},[e._v("r1 rover")])],1)]),e._v(" "),a("h2",{attrs:{id:"videos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#videos"}},[e._v("#")]),e._v(" Videos")]),e._v(" "),a("p",[e._v("This video shows the "),a("RouterLink",{attrs:{to:"/en/frames_rover/traxxas_stampede.html"}},[e._v("Traxxas Stampede Rover")]),e._v(" (an Ackermann vehicle).")],1),e._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/N3HvSKS3nCw",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p")])}),[],!1,null,null,null);t.default=i.exports},406:function(e,t,r){e.exports=r.p+"assets/img/final_side.638e2361.jpg"}}]);