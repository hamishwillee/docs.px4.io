(window.webpackJsonp=window.webpackJsonp||[]).push([[626],{1307:function(a,t,s){a.exports=s.p+"assets/img/octomap.b6c3e521.png"},2227:function(a,t,s){"use strict";s.r(t);var e=s(18),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"octomap-3d-models-with-ros-gazebo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#octomap-3d-models-with-ros-gazebo"}},[a._v("#")]),a._v(" OctoMap 3D Models with ROS/Gazebo")]),a._v(" "),e("p",[a._v("The "),e("a",{attrs:{href:"http://octomap.github.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("OctoMap library"),e("OutboundLink")],1),a._v(" is an open source library for generating volumetric 3D environment models from sensor data. This model data can then be used by a drone for navigation and obstacle avoidance.")]),a._v(" "),e("p",[a._v("This guide covers how to use "),e("em",[a._v("OctoMap")]),a._v(" with the Gazebo "),e("a",{attrs:{href:"https://github.com/ethz-asl/rotors_simulator/wiki/RotorS-Simulator",target:"_blank",rel:"noopener noreferrer"}},[a._v("Rotors Simulator"),e("OutboundLink")],1),a._v(" and ROS.")]),a._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),e("p",[a._v("The installation requires ROS, Gazebo and the Rotors Simulator plugin. Follow the "),e("a",{attrs:{href:"https://github.com/ethz-asl/rotors_simulator",target:"_blank",rel:"noopener noreferrer"}},[a._v("Rotors Simulator instructions"),e("OutboundLink")],1),a._v(" to install.")]),a._v(" "),e("p",[a._v("Next, install the "),e("em",[a._v("OctoMap")]),a._v(" library:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ros-indigo-octomap ros-indigo-octomap-mapping\nrosdep "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" octomap_mapping\nrosmake octomap_mapping\n")])])]),e("p",[a._v("Now, open ~/catkin_ws/src/rotors_simulator/rotors_gazebo/CMakeLists.txt and add the following lines to the bottom of the file")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("find_package"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("octomap REQUIRED"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\ninclude_directories"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${OCTOMAP_INCLUDE_DIRS}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nlink_libraries"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${OCTOMAP_LIBRARIES}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("p",[a._v("Open ~/catkin_ws/src/rotors_simulator/rotors_gazebo/package.xml and add the following lines")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("build_depend"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("octomap"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/build_depend"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("run_depend"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("octomap"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/run_depend"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("Run the following two lines:")]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),e("p",[a._v("The first line changes your default shell editor to "),e("em",[a._v("gedit")]),a._v(". This is recommended for users who have little experience with "),e("em",[a._v("vim")]),a._v(" (the default editor), but can otherwise be omitted.")])]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("EDITOR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'gedit'")]),a._v("\nrosed octomap_server octomap_tracking_server.launch\n")])])]),e("p",[a._v("and change the two following lines:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("param "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"frame_id"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"string"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("value")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"map"')]),a._v(" /"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("--remap "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("from")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cloud_in"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("to")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/rgbdslam/batch_clouds"')]),a._v(" /--"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("to:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("param "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"frame_id"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"string"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("value")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"world"')]),a._v(" /"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remap "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("from")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cloud_in"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("to")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/firefly/vi_sensor/camera_depth/depth/points"')]),a._v(" /"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("h2",{attrs:{id:"running-the-simulation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-the-simulation"}},[a._v("#")]),a._v(" Running the Simulation")]),a._v(" "),e("p",[a._v("Run the following three lines in "),e("em",[a._v("separate")]),a._v(" terminal windows. This opens up "),e("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[a._v("Gazebo")]),a._v(", "),e("em",[a._v("Rviz")]),a._v(" and an octomap server.")],1),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("roslaunch rotors_gazebo mav_hovering_example_with_vi_sensor.launch  mav_name:"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("firefly\nrviz\nroslaunch octomap_server octomap_tracking_server.launch\n")])])]),e("p",[a._v("In "),e("em",[a._v("Rviz")]),a._v(", change the field 'Fixed Frame' from 'map' to 'world' in the top left of the window. Now click the add button in the bottom left and select MarkerArray. Then double click the MarkerArray and change 'Marker Topic' from '/free_cells_vis_array' to '/occupied_cells_vis_array'")]),a._v(" "),e("p",[a._v("Now you should see a part of the floor.")]),a._v(" "),e("p",[a._v("In the "),e("em",[a._v("Gazebo")]),a._v(" window, insert a cube in front of the red rotors and you should see it in "),e("em",[a._v("Rviz")]),a._v(".")]),a._v(" "),e("p",[e("img",{attrs:{src:s(1307),alt:"OctoMap Example in Gazebo"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);