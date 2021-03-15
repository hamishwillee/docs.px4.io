(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1377:function(a,t,s){"use strict";s.r(t);var e=s(18),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"gazebo-vehicles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-vehicles"}},[a._v("#")]),a._v(" Gazebo Vehicles")]),a._v(" "),e("p",[a._v("This topic lists/displays the vehicles supported by the PX4 "),e("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[a._v("Gazebo")]),a._v(" simulation and the "),e("code",[a._v("make")]),a._v(" commands required to run them (the commands are run from a terminal in the "),e("strong",[a._v("PX4-Autopilot")]),a._v(" directory).")],1),a._v(" "),e("p",[a._v("Supported vehicle types include: mutirotors, VTOL, VTOL Tailsitter, Plane, Rover, Submarine/UUV.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("For the full list of build targets run "),e("code",[a._v("make px4_sitl list_vmd_make_targets")]),a._v(" (and filter on those that start with "),e("code",[a._v("gazebo_")]),a._v(").")])]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),e("p",[a._v("The "),e("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[a._v("Gazebo")]),a._v(" page shows how to install Gazebo, how to enable video and load custom maps, and many other configuration options.")],1)]),a._v(" "),e("h2",{attrs:{id:"multicopter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multicopter"}},[a._v("#")]),a._v(" Multicopter")]),a._v(" "),e("p",[e("a",{attrs:{id:"quadrotor"}})]),a._v(" "),e("h3",{attrs:{id:"quadrotor-default"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quadrotor-default"}},[a._v("#")]),a._v(" Quadrotor (Default)")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo\n")])])]),e("p",[e("a",{attrs:{id:"quadrotor_optical_flow"}})]),a._v(" "),e("h3",{attrs:{id:"quadrotor-with-optical-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quadrotor-with-optical-flow"}},[a._v("#")]),a._v(" Quadrotor with Optical Flow")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo_iris_opt_flow\n")])])]),e("p",[e("a",{attrs:{id:"3dr_solo"}})]),a._v(" "),e("h3",{attrs:{id:"_3dr-solo-quadrotor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3dr-solo-quadrotor"}},[a._v("#")]),a._v(" 3DR Solo (Quadrotor)")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo_solo\n")])])]),e("p",[e("img",{attrs:{src:s(401),alt:"3DR Solo in Gazebo"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"typhoon_h480"}})]),a._v(" "),e("h3",{attrs:{id:"typhoon-h480-hexrotor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typhoon-h480-hexrotor"}},[a._v("#")]),a._v(" Typhoon H480 (Hexrotor)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("make px4_sitl gazebo_typhoon_h480\n")])])]),e("p",[e("img",{attrs:{src:s(402),alt:"Typhoon H480 in Gazebo"}})]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),e("p",[a._v("This target also supports "),e("a",{attrs:{href:"#video"}},[a._v("video streaming simulation")]),a._v(".")])]),a._v(" "),e("p",[e("a",{attrs:{id:"fixed_wing"}})]),a._v(" "),e("h2",{attrs:{id:"plane-fixed-wing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plane-fixed-wing"}},[a._v("#")]),a._v(" Plane/Fixed Wing")]),a._v(" "),e("p",[e("a",{attrs:{id:"standard_plane"}})]),a._v(" "),e("h3",{attrs:{id:"standard-plane"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#standard-plane"}},[a._v("#")]),a._v(" Standard Plane")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo_plane\n")])])]),e("p",[e("img",{attrs:{src:s(403),alt:"Plane in Gazebo"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"standard_plane_catapult"}})]),a._v(" "),e("h4",{attrs:{id:"standard-plane-with-catapult-launch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#standard-plane-with-catapult-launch"}},[a._v("#")]),a._v(" Standard Plane with Catapult Launch")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo_plane_catapult\n")])])]),e("p",[a._v("This model simulates hand/catapult launch, which can be used for "),e("RouterLink",{attrs:{to:"/ko/flying/fixed_wing_takeoff.html#fixed-wing-takeoff"}},[a._v("fixed wing takeoff")]),a._v(" in position mode, takeoff mode, or missions.")],1),a._v(" "),e("p",[a._v("The plane will automatically be launched as soon as the vehicle is armed.")]),a._v(" "),e("h2",{attrs:{id:"vtol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[a._v("#")]),a._v(" VTOL")]),a._v(" "),e("p",[e("a",{attrs:{id:"standard_vtol"}})]),a._v(" "),e("h3",{attrs:{id:"standard-vtol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#standard-vtol"}},[a._v("#")]),a._v(" Standard VTOL")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo_standard_vtol\n")])])]),e("p",[e("img",{attrs:{src:s(404),alt:"Standard VTOL in Gazebo"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"tailsitter_vtol"}})]),a._v(" "),e("h3",{attrs:{id:"tailsitter-vtol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tailsitter-vtol"}},[a._v("#")]),a._v(" Tailsitter VTOL")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo_tailsitter\n")])])]),e("p",[e("img",{attrs:{src:s(405),alt:"Tailsitter VTOL in Gazebo"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"ugv"}})]),a._v(" "),e("h2",{attrs:{id:"unmmanned-ground-vehicle-ugv-rover-car"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unmmanned-ground-vehicle-ugv-rover-car"}},[a._v("#")]),a._v(" Unmmanned Ground Vehicle (UGV/Rover/Car)")]),a._v(" "),e("p",[e("a",{attrs:{id:"ugv_ackerman"}})]),a._v(" "),e("h3",{attrs:{id:"ackerman-ugv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ackerman-ugv"}},[a._v("#")]),a._v(" Ackerman UGV")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo_rover\n")])])]),e("p",[e("img",{attrs:{src:s(406),alt:"Rover in Gazebo"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"ugv_differential"}})]),a._v(" "),e("h3",{attrs:{id:"differential-ugv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#differential-ugv"}},[a._v("#")]),a._v(" Differential UGV")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo_r1_rover\n")])])]),e("p",[e("img",{attrs:{src:s(407),alt:"Rover in Gazebo"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"uuv"}})]),a._v(" "),e("h2",{attrs:{id:"unmanned-underwater-vehicle-uuv-submarine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unmanned-underwater-vehicle-uuv-submarine"}},[a._v("#")]),a._v(" Unmanned Underwater Vehicle (UUV/Submarine)")]),a._v(" "),e("p",[e("a",{attrs:{id:"uuv_hippocampus"}})]),a._v(" "),e("h3",{attrs:{id:"hippocampus-tuhh-uuv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hippocampus-tuhh-uuv"}},[a._v("#")]),a._v(" HippoCampus TUHH UUV")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo_uuv_hippocampus\n")])])]),e("p",[e("img",{attrs:{src:s(408),alt:"Submarine/UUV"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"usv"}})]),a._v(" "),e("h2",{attrs:{id:"unmanned-surface-vehicle-usv-boat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unmanned-surface-vehicle-usv-boat"}},[a._v("#")]),a._v(" Unmanned Surface Vehicle (USV/Boat)")]),a._v(" "),e("p",[e("a",{attrs:{id:"usv_boat"}})]),a._v(" "),e("h3",{attrs:{id:"boat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#boat"}},[a._v("#")]),a._v(" Boat")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo_boat\n")])])]),e("p",[e("img",{attrs:{src:s(409),alt:"Boat/USV"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"airship"}})]),a._v(" "),e("h2",{attrs:{id:"airship"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#airship"}},[a._v("#")]),a._v(" Airship")]),a._v(" "),e("p",[e("a",{attrs:{id:"cloudship"}})]),a._v(" "),e("h3",{attrs:{id:"cloudship"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cloudship"}},[a._v("#")]),a._v(" Cloudship")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo_cloudship\n")])])]),e("p",[e("img",{attrs:{src:s(410),alt:"Airship"}})])])}),[],!1,null,null,null);t.default=r.exports},401:function(a,t,s){a.exports=s.p+"assets/img/solo.3fbf2c5a.png"},402:function(a,t,s){a.exports=s.p+"assets/img/typhoon.b0922215.jpg"},403:function(a,t,s){a.exports=s.p+"assets/img/plane.25759cbc.png"},404:function(a,t,s){a.exports=s.p+"assets/img/standard_vtol.1d8abc90.png"},405:function(a,t,s){a.exports=s.p+"assets/img/tailsitter.96f4fdd2.png"},406:function(a,t,s){a.exports=s.p+"assets/img/rover.9cde6058.png"},407:function(a,t,s){a.exports=s.p+"assets/img/r1_rover.d003c2b9.png"},408:function(a,t,s){a.exports=s.p+"assets/img/hippocampus.b8be87de.png"},409:function(a,t,s){a.exports=s.p+"assets/img/boat.e06399af.png"},410:function(a,t,s){a.exports=s.p+"assets/img/airship.08c6642d.png"}}]);