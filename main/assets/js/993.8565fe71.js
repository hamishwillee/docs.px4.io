(window.webpackJsonp=window.webpackJsonp||[]).push([[993],{1902:function(t,e,n){"use strict";n.r(e);var a=n(19),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"setting-up-a-developer-environment-toolchain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-developer-environment-toolchain"}},[t._v("#")]),t._v(" Setting up a Developer Environment (Toolchain)")]),t._v(" "),n("p",[t._v("The "),n("em",[t._v("supported platforms")]),t._v(" for PX4 development are:")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Ubuntu Linux")]),t._v(" (Recommended)")],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_mac.html"}},[t._v("Mac OS")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_windows_wsl.html"}},[t._v("Windows (10/11)")])],1)]),t._v(" "),n("h2",{attrs:{id:"supported-targets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#supported-targets"}},[t._v("#")]),t._v(" Supported Targets")]),t._v(" "),n("p",[t._v("The table below shows what PX4 targets you can build on each OS.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Target")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Linux (Ubuntu)")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Mac")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Windows")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v("NuttX based hardware:")]),t._v(" "),n("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk Series")]),t._v(", "),n("RouterLink",{attrs:{to:"/en/complete_vehicles/crazyflie2.html"}},[t._v("Crazyflie")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("Linux-based hardware:")]),t._v(" "),n("RouterLink",{attrs:{to:"/en/flight_controller/raspberry_pi_navio2.html"}},[t._v("Raspberry Pi 2/3")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("Simulation:")]),t._v(" "),n("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[t._v("jMAVSim SITL")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("Simulation:")]),t._v(" "),n("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/"}},[t._v("Gazebo SITL")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("Simulation:")]),t._v(" "),n("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[t._v("Gazebo Classic SITL")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("Simulation:")]),t._v(" "),n("RouterLink",{attrs:{to:"/en/simulation/ros_interface.html"}},[t._v("ROS with Gazebo Classic")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("Simulation:")]),t._v(" ROS 2 with Gazebo")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),n("p",[t._v("Experienced Docker users can also build with the containers used by our continuous integration system: "),n("RouterLink",{attrs:{to:"/en/test_and_ci/docker.html"}},[t._v("Docker Containers")])],1),t._v(" "),n("h2",{attrs:{id:"next-steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),n("p",[t._v("Once you have finished setting up one of the command-line toolchains above:")]),t._v(" "),n("ul",[n("li",[t._v("Install "),n("RouterLink",{attrs:{to:"/en/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v(" (if you prefer using an IDE to the command line).")],1),t._v(" "),n("li",[t._v("Install the "),n("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Continue to "),n("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("Building PX4 Software")]),t._v(".")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);