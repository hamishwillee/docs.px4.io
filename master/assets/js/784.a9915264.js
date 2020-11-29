(window.webpackJsonp=window.webpackJsonp||[]).push([[784],{1602:function(t,e,a){"use strict";a.r(e);var n=a(18),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"configure-snapdragon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-snapdragon"}},[t._v("#")]),t._v(" Configure Snapdragon")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" The "),a("em",[t._v("Qualcomm Snapdragon Flight")]),t._v(" is discontinued (it has been superseded but PX4 does not yet support the newer version).\nThis documentation is provided for existing users, but will be removed in a future release.")])]),t._v(" "),a("p",[t._v("This topic explains how to configure the "),a("em",[t._v("Qualcomm Snapdragon Flight")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"autostart-px4-and-snap-vio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autostart-px4-and-snap-vio"}},[t._v("#")]),t._v(" Autostart PX4 and Snap VIO")]),t._v(" "),a("p",[t._v("In order to boot both the ROS node and PX4 automatically on bootup, edit the "),a("strong",[t._v("/etc/rc.local")]),t._v(" file on the Snapdragon Flight to look like this (note that the first line must change too!):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#!/bin/bash -e\n#\n# rc.local\n#\n# This script is executed at the end of each multiuser runlevel.\n# Make sure that the script will "exit 0" on success or any other\n# value on error.\n#\n# In order to enable or disable this script just change the execution\n# bits.\n#\n# By default this script does nothing.\n\n# Generate the SSH keys if non-existent\ntest -f /etc/ssh/ssh_host_dsa_key || dpkg-reconfigure openssh-server\n\n# Prepare the ROS environment\ncd /home/linaro\nsource /opt/ros/indigo/setup.bash\nsource /home/linaro/ros_ws/devel/setup.bash\n\n# Launch the mavros vislam node but add some delay otherwise startup is not reliable\nsleep 5\nroslaunch snapdragon_mavros_vislam mavros_vislam.launch > /dev/null &\n\n# Launch PX4 autopilot in VIO configuration but add some delay otherwise startup is not reliable\nsleep 5\n./px4 /home/linaro/ros_ws/src/ros-examples/px4_configs/ekf2/mainapp.conf > /dev/null &\n\nexit 0\n')])])]),a("h2",{attrs:{id:"put-snapdragon-back-into-access-point-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#put-snapdragon-back-into-access-point-mode"}},[t._v("#")]),t._v(" Put Snapdragon back into Access Point Mode")]),t._v(" "),a("p",[t._v("The Snapdragon Flight was set to station mode in the "),a("RouterLink",{attrs:{to:"/en/flight_controller/snapdragon_flight_software_installation.html#install-ros"}},[t._v("ROS Setup")]),t._v(".\nThis could be a problem if you want to fly it outdoors where your home Wi-Fi is no longer available, so we recommend putting it back into access point mode.")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/usr/local/qr-linux/wificonfig.sh -s softap\nsudo reboot\n")])])]),a("h2",{attrs:{id:"adjust-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adjust-parameters"}},[t._v("#")]),t._v(" Adjust Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter Name")]),t._v(" "),a("th",[t._v("Recommended Value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("EKF2_HEIGHT_MODE")]),t._v(" "),a("td",[t._v("3   VISION")])]),t._v(" "),a("tr",[a("td",[t._v("EKF2_AID_MASK")]),t._v(" "),a("td",[t._v("24 (VISION POS, VISION YAW)")])]),t._v(" "),a("tr",[a("td",[t._v("MPC_THR_HOVER")]),t._v(" "),a("td",[t._v("25 %")])]),t._v(" "),a("tr",[a("td",[t._v("MC_PITCHRATE_P")]),t._v(" "),a("td",[t._v("0.03")])]),t._v(" "),a("tr",[a("td",[t._v("MC_PITCHRATE_D")]),t._v(" "),a("td",[t._v("0.001")])]),t._v(" "),a("tr",[a("td",[t._v("MC_ROLLRATE_P")]),t._v(" "),a("td",[t._v("0.03")])]),t._v(" "),a("tr",[a("td",[t._v("MC_ROLLRATE_D")]),t._v(" "),a("td",[t._v("0.001")])]),t._v(" "),a("tr",[a("td",[t._v("MC_RAWRATE_P")]),t._v(" "),a("td",[t._v("0.08")])]),t._v(" "),a("tr",[a("td",[t._v("EKF2_IMU_POS_Z")]),t._v(" "),a("td",[t._v("0.030m")])]),t._v(" "),a("tr",[a("td",[t._v("EKF2_EV_POS_Z")]),t._v(" "),a("td",[t._v("0.03m")])]),t._v(" "),a("tr",[a("td",[t._v("PWM_MIN")]),t._v(" "),a("td",[t._v("1150us")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);