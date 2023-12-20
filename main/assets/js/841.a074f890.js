(window.webpackJsonp=window.webpackJsonp||[]).push([[841],{1514:function(t,a,s){t.exports=s.p+"assets/img/octomap.39b181da.png"},3225:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"octomap-3d-models-with-ros-gazebo-classic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#octomap-3d-models-with-ros-gazebo-classic"}},[t._v("#")]),t._v(" OctoMap 3D Models with ROS/Gazebo Classic")]),t._v(" "),e("p",[t._v("The "),e("a",{attrs:{href:"http://octomap.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OctoMap library"),e("OutboundLink")],1),t._v(" is an open source library for generating volumetric 3D environment models from sensor data. This model data can then be used by a drone for navigation and obstacle avoidance.")]),t._v(" "),e("p",[t._v("This guide covers how to use "),e("em",[t._v("OctoMap")]),t._v(" with the "),e("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" "),e("a",{attrs:{href:"https://github.com/ethz-asl/rotors_simulator/wiki/RotorS-Simulator",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rotors Simulator"),e("OutboundLink")],1),t._v(" and ROS.")],1),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("The installation requires ROS, "),e("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" and the Rotors Simulator plugin. Follow the "),e("a",{attrs:{href:"https://github.com/ethz-asl/rotors_simulator",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rotors Simulator instructions"),e("OutboundLink")],1),t._v(" to install.")],1),t._v(" "),e("p",[t._v("Next, install the "),e("em",[t._v("OctoMap")]),t._v(" library:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ros-indigo-octomap ros-indigo-octomap-mapping\nrosdep "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" octomap_mapping\nrosmake octomap_mapping\n")])])]),e("p",[t._v("Now, open "),e("code",[t._v("~/catkin_ws/src/rotors_simulator/rotors_gazebo/CMakeLists.txt")]),t._v(" and add the following lines to the bottom of the file:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("find_package"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("octomap REQUIRED"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninclude_directories"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${OCTOMAP_INCLUDE_DIRS}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlink_libraries"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${OCTOMAP_LIBRARIES}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Open "),e("code",[t._v("~/catkin_ws/src/rotors_simulator/rotors_gazebo/package.xml")]),t._v(" and add the following lines:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("build_depend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("octomap"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("build_depend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("run_depend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("octomap"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("run_depend")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Run the following two lines:")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("The first line changes your default shell editor to "),e("em",[t._v("gedit")]),t._v(". This is recommended for users who have little experience with "),e("em",[t._v("vim")]),t._v(" (the default editor), but can otherwise be omitted.")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EDITOR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gedit'")]),t._v("\nrosed octomap_server octomap_tracking_server.launch\n")])])]),e("p",[t._v("and change the two following lines:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("frame_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("map"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n...\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!--remap from="cloud_in" to="/rgbdslam/batch_clouds" /--\x3e')]),t._v("\n")])])]),e("p",[t._v("to:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("frame_id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("string"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("world"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n...\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("remap")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cloud_in"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/firefly/vi_sensor/camera_depth/depth/points"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("h2",{attrs:{id:"running-the-simulation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-the-simulation"}},[t._v("#")]),t._v(" Running the Simulation")]),t._v(" "),e("p",[t._v("Run the following three lines in "),e("em",[t._v("separate")]),t._v(" terminal windows. This opens up "),e("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(", "),e("em",[t._v("Rviz")]),t._v(" and an octomap server.")],1),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("roslaunch rotors_gazebo mav_hovering_example_with_vi_sensor.launch  mav_name:"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("firefly\nrviz\nroslaunch octomap_server octomap_tracking_server.launch\n")])])]),e("p",[t._v("In "),e("em",[t._v("Rviz")]),t._v(", change the field 'Fixed Frame' from 'map' to 'world' in the top left of the window. Now click the add button in the bottom left and select MarkerArray. Then double click the MarkerArray and change 'Marker Topic' from "),e("code",[t._v("/free_cells_vis_array")]),t._v(" to "),e("code",[t._v("/occupied_cells_vis_array")]),t._v(".")]),t._v(" "),e("p",[t._v("Now you should see a part of the floor.")]),t._v(" "),e("p",[t._v("In the "),e("em",[t._v("Gazebo Classic")]),t._v(" window, insert a cube in front of the red rotors and you should see it in "),e("em",[t._v("Rviz")]),t._v(".")]),t._v(" "),e("p",[e("img",{attrs:{src:s(1514),alt:"OctoMap Example in Gazebo"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);