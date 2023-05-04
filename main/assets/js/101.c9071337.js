(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1518:function(a,s,t){a.exports=t.p+"assets/img/solo.3fbf2c5a.png"},1519:function(a,s,t){a.exports=t.p+"assets/img/typhoon.b0922215.jpg"},1520:function(a,s,t){a.exports=t.p+"assets/img/plane.25759cbc.png"},1521:function(a,s,t){a.exports=t.p+"assets/img/standard_vtol.1d8abc90.png"},1522:function(a,s,t){a.exports=t.p+"assets/img/tailsitter.96f4fdd2.png"},1523:function(a,s,t){a.exports=t.p+"assets/img/rover.9cde6058.png"},1524:function(a,s,t){a.exports=t.p+"assets/img/r1_rover.d003c2b9.png"},1525:function(a,s,t){a.exports=t.p+"assets/img/hippocampus.b8be87de.png"},1526:function(a,s,t){a.exports=t.p+"assets/img/boat.e06399af.png"},1527:function(a,s,t){a.exports=t.p+"assets/img/airship.08c6642d.png"},3736:function(a,s,t){"use strict";t.r(s);var e=t(19),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"gazebo-classic-vehicles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-classic-vehicles"}},[a._v("#")]),a._v(" Gazebo Classic Vehicles")]),a._v(" "),e("p",[a._v("This topic lists/displays the vehicles supported by the PX4 "),e("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[a._v("Gazebo Classic")]),a._v(" simulation and the "),e("code",[a._v("make")]),a._v(" commands required to run them (the commands are run from a terminal in the "),e("strong",[a._v("PX4-Autopilot")]),a._v(" directory).")],1),a._v(" "),e("p",[a._v("Supported vehicle types include: mutirotors, VTOL, VTOL Tailsitter, Plane, Rover, Submarine/UUV.")]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("注解")]),a._v(" "),e("p",[a._v("The "),e("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[a._v("Gazebo Classic")]),a._v(" page shows how to install Gazebo Classic, how to enable video and load custom maps, and many other configuration options.")],1)]),a._v(" "),e("h2",{attrs:{id:"multicopter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multicopter"}},[a._v("#")]),a._v(" Multicopter")]),a._v(" "),e("p",[e("a",{attrs:{id:"quadrotor"}})]),a._v(" "),e("h3",{attrs:{id:"quadrotor-default"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quadrotor-default"}},[a._v("#")]),a._v(" Quadrotor (Default)")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic\n")])])]),e("p",[e("a",{attrs:{id:"quadrotor_optical_flow"}})]),a._v(" "),e("h3",{attrs:{id:"quadrotor-with-optical-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quadrotor-with-optical-flow"}},[a._v("#")]),a._v(" Quadrotor with Optical Flow")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic_iris_opt_flow\n")])])]),e("h3",{attrs:{id:"quadrotor-with-depth-camera"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quadrotor-with-depth-camera"}},[a._v("#")]),a._v(" Quadrotor with Depth Camera")]),a._v(" "),e("p",[a._v("These models have a depth camera attached, modelled on the Intel® RealSense™ D455.")]),a._v(" "),e("p",[e("em",[a._v("Forward-facing depth camera:")])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic_iris_depth_camera\n")])])]),e("p",[e("em",[a._v("Downward-facing depth camera:")])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic_iris_downward_depth_camera\n")])])]),e("p",[e("a",{attrs:{id:"3dr_solo"}})]),a._v(" "),e("h3",{attrs:{id:"_3dr-solo-quadrotor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3dr-solo-quadrotor"}},[a._v("#")]),a._v(" 3DR Solo (Quadrotor)")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic_solo\n")])])]),e("p",[e("img",{attrs:{src:t(1518),alt:"3DR Solo in Gazebo Classic"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"typhoon_h480"}})]),a._v(" "),e("h3",{attrs:{id:"typhoon-h480-hexrotor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typhoon-h480-hexrotor"}},[a._v("#")]),a._v(" Typhoon H480 (Hexrotor)")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic_typhoon_h480\n")])])]),e("p",[e("img",{attrs:{src:t(1519),alt:"Typhoon H480 in Gazebo Classic"}})]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("注解")]),a._v(" "),e("p",[a._v("This target also supports "),e("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/#video-streaming"}},[a._v("video streaming simulation")]),a._v(".")],1)]),a._v(" "),e("p",[e("a",{attrs:{id:"fixed_wing"}})]),a._v(" "),e("h2",{attrs:{id:"plane-fixed-wing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plane-fixed-wing"}},[a._v("#")]),a._v(" Plane/Fixed Wing")]),a._v(" "),e("p",[e("a",{attrs:{id:"standard_plane"}})]),a._v(" "),e("h3",{attrs:{id:"standard-plane"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#standard-plane"}},[a._v("#")]),a._v(" Standard Plane")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic_plane\n")])])]),e("p",[e("img",{attrs:{src:t(1520),alt:"Plane in Gazebo Classic"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"standard_plane_catapult"}})]),a._v(" "),e("h4",{attrs:{id:"standard-plane-with-catapult-launch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#standard-plane-with-catapult-launch"}},[a._v("#")]),a._v(" Standard Plane with Catapult Launch")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic_plane_catapult\n")])])]),e("p",[a._v("This model simulates hand/catapult launch, which can be used for "),e("RouterLink",{attrs:{to:"/zh/flight_modes/takeoff.html#fixed-wing-fw"}},[a._v("fixed wing takeoff")]),a._v(" in position mode, takeoff mode, or missions.")],1),a._v(" "),e("p",[a._v("The plane will automatically be launched as soon as the vehicle is armed.")]),a._v(" "),e("h2",{attrs:{id:"vtol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[a._v("#")]),a._v(" VTOL")]),a._v(" "),e("p",[e("a",{attrs:{id:"standard_vtol"}})]),a._v(" "),e("h3",{attrs:{id:"standard-vtol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#standard-vtol"}},[a._v("#")]),a._v(" Standard VTOL")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic_standard_vtol\n")])])]),e("p",[e("img",{attrs:{src:t(1521),alt:"Standard VTOL in Gazebo Classic"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"tailsitter_vtol"}})]),a._v(" "),e("h3",{attrs:{id:"tailsitter-vtol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tailsitter-vtol"}},[a._v("#")]),a._v(" Tailsitter VTOL")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic_tailsitter\n")])])]),e("p",[e("img",{attrs:{src:t(1522),alt:"Tailsitter VTOL in Gazebo Classic"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"ugv"}})]),a._v(" "),e("h2",{attrs:{id:"unmmanned-ground-vehicle-ugv-rover-car"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unmmanned-ground-vehicle-ugv-rover-car"}},[a._v("#")]),a._v(" Unmmanned Ground Vehicle (UGV/Rover/Car)")]),a._v(" "),e("h3",{attrs:{id:"ackermann-ugv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ackermann-ugv"}},[a._v("#")]),a._v(" Ackermann UGV")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic_rover\n")])])]),e("p",[e("img",{attrs:{src:t(1523),alt:"Rover in Gazebo Classic"}})]),a._v(" "),e("h3",{attrs:{id:"differential-ugv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#differential-ugv"}},[a._v("#")]),a._v(" Differential UGV")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic_r1_rover\n")])])]),e("p",[e("img",{attrs:{src:t(1524),alt:"Rover in Gazebo Classic"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"uuv"}})]),a._v(" "),e("h2",{attrs:{id:"unmanned-underwater-vehicle-uuv-submarine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unmanned-underwater-vehicle-uuv-submarine"}},[a._v("#")]),a._v(" Unmanned Underwater Vehicle (UUV/Submarine)")]),a._v(" "),e("p",[e("a",{attrs:{id:"uuv_hippocampus"}})]),a._v(" "),e("h3",{attrs:{id:"hippocampus-tuhh-uuv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hippocampus-tuhh-uuv"}},[a._v("#")]),a._v(" HippoCampus TUHH UUV")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic_uuv_hippocampus\n")])])]),e("p",[e("img",{attrs:{src:t(1525),alt:"Submarine/UUV"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"usv"}})]),a._v(" "),e("h2",{attrs:{id:"unmanned-surface-vehicle-usv-boat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unmanned-surface-vehicle-usv-boat"}},[a._v("#")]),a._v(" Unmanned Surface Vehicle (USV/Boat)")]),a._v(" "),e("p",[e("a",{attrs:{id:"usv_boat"}})]),a._v(" "),e("h3",{attrs:{id:"boat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#boat"}},[a._v("#")]),a._v(" Boat")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic_boat\n")])])]),e("p",[e("img",{attrs:{src:t(1526),alt:"Boat/USV"}})]),a._v(" "),e("p",[e("a",{attrs:{id:"airship"}})]),a._v(" "),e("h2",{attrs:{id:"airship"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#airship"}},[a._v("#")]),a._v(" Airship")]),a._v(" "),e("p",[e("a",{attrs:{id:"cloudship"}})]),a._v(" "),e("h3",{attrs:{id:"cloudship"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cloudship"}},[a._v("#")]),a._v(" Cloudship")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gazebo-classic_cloudship\n")])])]),e("p",[e("img",{attrs:{src:t(1527),alt:"Airship"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);