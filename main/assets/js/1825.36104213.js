(window.webpackJsonp=window.webpackJsonp||[]).push([[1825],{3334:function(t,e,a){"use strict";a.r(e);var _=a(19),i=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安装文件和代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装文件和代码"}},[t._v("#")]),t._v(" 安装文件和代码")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("supported platforms")]),t._v(" for PX4 development are:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Ubuntu Linux")]),t._v(" (Recommended)")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_mac.html"}},[t._v("Linux")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_windows_wsl.html"}},[t._v("Windows (10/11)")])],1)]),t._v(" "),a("h2",{attrs:{id:"支持的编译目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持的编译目标"}},[t._v("#")]),t._v(" 支持的编译目标")]),t._v(" "),a("p",[t._v("下表显示了您可以在每个操作系统上构建何种 PX平台的固件编译。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("平台")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Linux (Ubuntu)")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Mac")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Windows")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("NuttX based hardware:")]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk Series")]),t._v(", "),a("RouterLink",{attrs:{to:"/zh/complete_vehicles/crazyflie2.html"}},[t._v("Crazyflie")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("X")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Linux-based hardware:")]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/flight_controller/raspberry_pi_navio2.html"}},[t._v("Raspberry Pi 2/3")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Simulation:")]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("jMAVSim SITL")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Simulation:")]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/"}},[t._v("Gazebo SITL")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("X")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Simulation:")]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[t._v("Gazebo Classic SITL")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("X")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Simulation:")]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/simulation/ros_interface.html"}},[t._v("ROS with Gazebo Classic")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Simulation:")]),t._v(" ROS 2 with Gazebo")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("p",[t._v("不同操作系统的开发环境的安装请参阅：")]),t._v(" "),a("h2",{attrs:{id:"开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[t._v("#")]),t._v(" 开发环境")]),t._v(" "),a("p",[t._v("如果你对 Docker 比较熟悉的话你也可以使用预先构建好的容器作为开发环境："),a("RouterLink",{attrs:{to:"/zh/test_and_ci/docker.html"}},[t._v("Docker 容器")]),t._v("。")],1),t._v(" "),a("ul",[a("li",[t._v("Install "),a("RouterLink",{attrs:{to:"/zh/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v(" (if you prefer using an IDE to the command line).")],1),t._v(" "),a("li",[t._v("Install the "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Continue to "),a("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("Building PX4 Software")]),t._v(".")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);