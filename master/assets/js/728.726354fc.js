(window.webpackJsonp=window.webpackJsonp||[]).push([[728],{1310:function(a,s,t){a.exports=t.p+"assets/img/octomap.b6c3e521.png"},3232:function(a,s,t){"use strict";t.r(s);var r=t(19),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,r=a._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"具有-ros-gazebo-的-octomap-3d-模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#具有-ros-gazebo-的-octomap-3d-模型"}},[a._v("#")]),a._v(" 具有 ROS/Gazebo 的 OctoMap 3D 模型")]),a._v(" "),r("p",[r("a",{attrs:{href:"http://octomap.github.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v(" OctoMap 库 "),r("OutboundLink")],1),a._v("是一个开源库，用于根据传感器数据生成体积 3D 环境模型。 然后，该模型数据可由无人机用于导航和避障。")]),a._v(" "),r("p",[a._v("本指南介绍了如何使用 "),r("em",[a._v("OctoMap")]),a._v(" 与 Gazebo "),r("a",{attrs:{href:"https://github.com/ethz-asl/rotors_simulator/wiki/RotorS-Simulator",target:"_blank",rel:"noopener noreferrer"}},[a._v("Rotors Simulato "),r("OutboundLink")],1),a._v(" 和 ROS。")]),a._v(" "),r("h2",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),r("p",[a._v("安装需要 ROS，Gazebo 和 Rotors Simulator 插件。 按照"),r("a",{attrs:{href:"https://github.com/ethz-asl/rotors_simulator",target:"_blank",rel:"noopener noreferrer"}},[a._v(" Rotors Simulator instructions "),r("OutboundLink")],1),a._v("进行安装。")]),a._v(" "),r("p",[a._v("接下来，安装 "),r("em",[a._v("OctoMap")]),a._v(" 库：")]),a._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ros-indigo-octomap ros-indigo-octomap-mapping\nrosdep "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" octomap_mapping\nrosmake octomap_mapping\n")])])]),r("p",[a._v("现在，打开 ~/catkin_ws/src/rotors_simulator/rotors_gazebo/CMakeLists.txt 并在文件底部添加以下行")]),a._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[a._v("find_package"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("octomap REQUIRED"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\ninclude_directories"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${OCTOMAP_INCLUDE_DIRS}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nlink_libraries"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${OCTOMAP_LIBRARIES}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),r("p",[a._v("打开 ~/catkin_ws/src/rotors_simulator/rotors_gazebo/package.xml 并添加以下行")]),a._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("build_depend"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("octomap"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/build_depend"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("run_depend"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("octomap"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/run_depend"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),r("p",[a._v("运行以下两行：")]),a._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[a._v("注解")]),a._v(" "),r("p",[a._v("The first line changes your default shell editor to "),r("em",[a._v("gedit")]),a._v(". This is recommended for users who have little experience with "),r("em",[a._v("vim")]),a._v(" (the default editor), but can otherwise be omitted.")])]),a._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("EDITOR")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'gedit'")]),a._v("\nrosed octomap_server octomap_tracking_server.launch\n")])])]),r("p",[a._v("到：")]),a._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("param "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"frame_id"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"string"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("value")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"map"')]),a._v(" /"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("--remap "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("from")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cloud_in"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("to")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/rgbdslam/batch_clouds"')]),a._v(" /--"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("--remap "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("from")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cloud_in"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("to")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/rgbdslam/batch_clouds"')]),a._v(" /--"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),r("p",[a._v("to:")]),a._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("param "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("name")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"frame_id"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("type")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"string"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("value")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"world"')]),a._v(" /"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remap "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("from")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cloud_in"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("to")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/firefly/vi_sensor/camera_depth/depth/points"')]),a._v(" /"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remap "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("from")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cloud_in"')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("to")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/firefly/vi_sensor/camera_depth/depth/points"')]),a._v(" /"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),r("h2",{attrs:{id:"运行仿真"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行仿真"}},[a._v("#")]),a._v(" 运行仿真")]),a._v(" "),r("p",[a._v("在* Rviz *中，将“固定帧”字段从“地图”更改为窗口左上角的“世界”。 现在单击左下角的添加按钮，然后选择 MarkerArray。")]),a._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[a._v("roslaunch rotors_gazebo mav_hovering_example_with_vi_sensor.launch  mav_name:"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("firefly\nrviz\nroslaunch octomap_server octomap_tracking_server.launch\n")])])]),r("p",[a._v("In "),r("em",[a._v("Rviz")]),a._v(", change the field 'Fixed Frame' from 'map' to 'world' in the top left of the window. Now click the add button in the bottom left and select MarkerArray. Then double click the MarkerArray and change 'Marker Topic' from '/free_cells_vis_array' to '/occupied_cells_vis_array'")]),a._v(" "),r("p",[a._v("在* Gazebo "),r("em",[a._v("窗口中，在红色转子前插入一个立方体，您应该在")]),a._v(" Rviz *中看到它。")]),a._v(" "),r("p",[a._v("In the "),r("em",[a._v("Gazebo")]),a._v(" window, insert a cube in front of the red rotors and you should see it in "),r("em",[a._v("Rviz")]),a._v(".")]),a._v(" "),r("p",[r("img",{attrs:{src:t(1310),alt:"OctoMap Example in Gazebo"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);