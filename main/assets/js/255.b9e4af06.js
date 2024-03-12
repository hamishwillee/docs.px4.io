(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{1554:function(a,t,e){a.exports=e.p+"assets/img/x500.090d40a6.png"},1555:function(a,t,e){a.exports=e.p+"assets/img/x500_depth.472dc2c5.png"},1556:function(a,t,e){a.exports=e.p+"assets/img/rc_cessna.6a0dbf6a.png"},1557:function(a,t,e){a.exports=e.p+"assets/img/advanced_plane.e96f12af.png"},1558:function(a,t,e){a.exports=e.p+"assets/img/standard_vtol.bfa914eb.png"},3398:function(a,t,e){"use strict";e.r(t);var s=e(19),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"gazebo-vehicles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-vehicles"}},[a._v("#")]),a._v(" Gazebo Vehicles")]),a._v(" "),s("p",[a._v("This topic lists/displays the vehicles supported by the PX4 "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/"}},[a._v("Gazebo")]),a._v(" simulation, and the "),s("code",[a._v("make")]),a._v(" commands required to run them (the commands are run from a terminal in the "),s("strong",[a._v("PX4-Autopilot")]),a._v(" directory).")],1),a._v(" "),s("p",[a._v("The models are included in PX4 as a submodule that is fetched from the "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/gazebo_models.html"}},[a._v("Gazebo Models Repository")]),a._v(".")],1),a._v(" "),s("p",[a._v("Supported vehicle types include: mutirotor, VTOL, Plane.")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("See "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/vehicles.html"}},[a._v("Gazebo Classic Vehicles")]),a._v(" for vehicles that work with the older "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[a._v('Gazebo "Classic" simulation')]),a._v(". Note that vehicle models are not interchangable between the two versions of the simulator: the vehicles on this page only work with (new) "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/"}},[a._v("Gazebo")]),a._v(".")],1)]),a._v(" "),s("h2",{attrs:{id:"multicopter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multicopter"}},[a._v("#")]),a._v(" Multicopter")]),a._v(" "),s("h3",{attrs:{id:"x500-quadrotor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x500-quadrotor"}},[a._v("#")]),a._v(" X500 Quadrotor")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gz_x500\n")])])]),s("h3",{attrs:{id:"x500-quadrotor-with-visual-odometry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x500-quadrotor-with-visual-odometry"}},[a._v("#")]),a._v(" X500 Quadrotor with Visual Odometry")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gz_x500_vision\n")])])]),s("p",[s("img",{attrs:{src:e(1554),alt:"x500 in Gazebo"}})]),a._v(" "),s("h3",{attrs:{id:"x500-quadrotor-with-depth-camera"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x500-quadrotor-with-depth-camera"}},[a._v("#")]),a._v(" X500 Quadrotor with Depth Camera")]),a._v(" "),s("p",[a._v("These models have a depth camera attached, modelled on the OAK-D.")]),a._v(" "),s("p",[s("em",[a._v("Forward-facing depth camera:")])]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gz_x500_depth\n")])])]),s("p",[s("img",{attrs:{src:e(1555),alt:"x500 with depth camera in Gazebo"}})]),a._v(" "),s("h3",{attrs:{id:"x500-quadrotor-with-monocular-camera"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x500-quadrotor-with-monocular-camera"}},[a._v("#")]),a._v(" X500 Quadrotor with Monocular Camera")]),a._v(" "),s("p",[a._v("This models has a simple monocular camera sensor attached (there is no physical camera visualization on the model itself).")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gz_x500_mono_cam\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),s("p",[a._v("The camera cannot yet be used to stream video or for image capture in QGroundControl. "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues/22563",target:"_blank",rel:"noopener noreferrer"}},[a._v("PX4-Autopilot#22563"),s("OutboundLink")],1),a._v(" can be used to track the additional work needed to fully enable these use cases.")])]),a._v(" "),s("h2",{attrs:{id:"plane-fixed-wing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plane-fixed-wing"}},[a._v("#")]),a._v(" Plane/Fixed-wing")]),a._v(" "),s("h3",{attrs:{id:"standard-plane"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#standard-plane"}},[a._v("#")]),a._v(" Standard Plane")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gz_rc_cessna\n")])])]),s("p",[s("img",{attrs:{src:e(1556),alt:"Plane in Gazebo"}})]),a._v(" "),s("h3",{attrs:{id:"advanced-plane"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-plane"}},[a._v("#")]),a._v(" Advanced Plane")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gz_advanced_plane\n")])])]),s("p",[s("img",{attrs:{src:e(1557),alt:"Advanced Plane in Gazebo"}})]),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),s("p",[a._v('The difference between the Advanced Plane and the "regular plane" lies in the Lift Physics that the two models use:')]),a._v(" "),s("ul",[s("li",[a._v("You can configure the "),s("em",[a._v("Advanced Lift Drag")]),a._v(" plugin used by the model to more closely match a particular vehicle using the "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/tools_avl_automation.html"}},[a._v("Advanced Lift Drag Tool")]),a._v(".")],1),a._v(" "),s("li",[a._v("For more detail on the lift calculations for the Advanced Plane, see "),s("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo-classic/blob/20ded0757b4f2cb362833538716caf1e938b162a/src/liftdrag_plugin/README.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("PX4-SITL_gazebo-classic/src/liftdrag_plugin/README.md"),s("OutboundLink")],1)])])]),a._v(" "),s("h2",{attrs:{id:"vtol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[a._v("#")]),a._v(" VTOL")]),a._v(" "),s("h3",{attrs:{id:"standard-vtol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#standard-vtol"}},[a._v("#")]),a._v(" Standard VTOL")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl gz_standard_vtol\n")])])]),s("p",[s("img",{attrs:{src:e(1558),alt:"Standard VTOL in Gazebo Classic"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);