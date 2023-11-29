(window.webpackJsonp=window.webpackJsonp||[]).push([[1342],{2416:function(a,s,t){"use strict";t.r(s);var r=t(19),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"raspberry-pi-ros-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-ros-installation"}},[a._v("#")]),a._v(" Raspberry Pi - ROS installation")]),a._v(" "),t("p",[a._v("This is a guide on how to install ROS-indigo on a Raspberry Pi 2 serving as a companion computer for Pixhawk.")]),a._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[a._v("#")]),a._v(" Prerequisites")]),a._v(" "),t("ul",[t("li",[a._v("A working Raspberry Pi with monitor, keyboard, or configured SSH connection")]),a._v(" "),t("li",[a._v('This guide assumes that you have Raspbian "JESSIE" installed on your RPi. If not: '),t("a",{attrs:{href:"https://www.raspberrypi.org/downloads/raspbian/",target:"_blank",rel:"noopener noreferrer"}},[a._v("install it"),t("OutboundLink")],1),a._v(" or "),t("a",{attrs:{href:"http://raspberrypi.stackexchange.com/questions/27858/upgrade-to-raspbian-jessie",target:"_blank",rel:"noopener noreferrer"}},[a._v("upgrade"),t("OutboundLink")],1),a._v(" your Raspbian Wheezy to Jessie.")])]),a._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),t("p",[a._v("Follow "),t("a",{attrs:{href:"http://wiki.ros.org/ROSberryPi/Installing%20ROS%20Indigo%20on%20Raspberry%20Pi",target:"_blank",rel:"noopener noreferrer"}},[a._v("this guide"),t("OutboundLink")],1),a._v(' for the actual installation of ROS Indigo. Note: Install the "ROS-Comm" variant. The Desktop variant is too heavyweight.')]),a._v(" "),t("h3",{attrs:{id:"errors-when-installing-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#errors-when-installing-packages"}},[a._v("#")]),a._v(" Errors when installing packages")]),a._v(" "),t("p",[a._v("If you want to download packages (e.g. "),t("code",[a._v("sudo apt-get install ros-indigo-ros-tutorials")]),a._v('), you might get an error saying: "unable to locate package ros-indigo-ros-tutorials".')]),a._v(" "),t("p",[a._v("If so, proceed as follows:\nGo to your catkin workspace (e.g. ~/ros_catkin_ws) and change the name of the packages.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/ros_catkin_ws\n\n$ rosinstall_generator ros_tutorials --rosdistro indigo --deps --wet-only --exclude roslisp --tar "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" indigo-custom_ros.rosinstall\n")])])]),t("p",[a._v("Next, update your workspace with wstool.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ wstool merge -t src indigo-custom_ros.rosinstall\n\n$ wstool update -t src\n")])])]),t("p",[a._v("Next (still in your workspace folder), source and make your files.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /opt/ros/indigo/setup.bash\n\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" devel/setup.bash\n\n$ catkin_make\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);