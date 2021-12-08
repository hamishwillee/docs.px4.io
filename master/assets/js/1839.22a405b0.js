(window.webpackJsonp=window.webpackJsonp||[]).push([[1839],{3262:function(s,a,r){"use strict";r.r(a);var t=r(19),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"raspberry-pi-ros-安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-ros-安装"}},[s._v("#")]),s._v(" Raspberry Pi - ROS 安装")]),s._v(" "),r("p",[s._v("这是本文指导如何在树莓派2上安装 ROS-indigo ，部署成与 Pixhawk 协同的一台地面站计算机的。")]),s._v(" "),r("h2",{attrs:{id:"系统必备组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统必备组件"}},[s._v("#")]),s._v(" 系统必备组件")]),s._v(" "),r("ul",[r("li",[s._v("具有显示器、键盘或配置 ssh 连接的工作树莓派")]),s._v(" "),r("li",[s._v('本指南假定您的 RPi 上安装了 Raspbian "JESSIE"。 否则：'),r("a",{attrs:{href:"https://www.raspberrypi.org/downloads/raspbian/",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装"),r("OutboundLink")],1),s._v(" 或 "),r("a",{attrs:{href:"http://raspberrypi.stackexchange.com/questions/27858/upgrade-to-raspbian-jessie",target:"_blank",rel:"noopener noreferrer"}},[s._v("升级"),r("OutboundLink")],1),s._v(" 你的 Raspbian Wheezy 到 Jessie。")])]),s._v(" "),r("h2",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),r("p",[s._v("按照 "),r("a",{attrs:{href:"http://wiki.ros.org/ROSberryPi/Installing%20ROS%20Indigo%20on%20Raspberry%20Pi",target:"_blank",rel:"noopener noreferrer"}},[s._v("本指南 "),r("OutboundLink")],1),s._v(' 实际安装 ROS Indigo。 注意：安装 "ROS-Comm" 变体。 桌面变体太臃肿了。')]),s._v(" "),r("h3",{attrs:{id:"安装程序包时出错"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装程序包时出错"}},[s._v("#")]),s._v(" 安装程序包时出错")]),s._v(" "),r("p",[s._v("如果你想下载软件包（例如，"),r("code",[s._v("sudo apt-get install ros-indigo-ros-tutorials")]),s._v('），你可能会得到一个错误，说："无法找到 ros-indigo-ros-tutorials"。')]),s._v(" "),r("p",[s._v("如果是这样，请按以下步骤操作：转到您的 catkin 工作区（例如 ~/ros_catkin_ws）并更改包的名称。")]),s._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[s._v("$ "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/ros_catkin_ws\n\n$ rosinstall_generator ros_tutorials --rosdistro indigo --deps --wet-only --exclude roslisp --tar "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" indigo-custom_ros.rosinstall\n")])])]),r("p",[s._v("接下来，使用 wstool 更新您的工作区。")]),s._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[s._v("$ wstool merge -t src indigo-custom_ros.rosinstall\n\n$ wstool update -t src\n")])])]),r("p",[s._v("下一步（仍在工作区文件夹中），source 并创建文件。")]),s._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[s._v("$ "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /opt/ros/indigo/setup.bash\n\n$ "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" devel/setup.bash\n\n$ catkin_make\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);