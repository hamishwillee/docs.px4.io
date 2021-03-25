(window.webpackJsonp=window.webpackJsonp||[]).push([[1282],{2686:function(t,e,a){"use strict";a.r(e);var s=a(18),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"px4-docker-容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-docker-容器"}},[t._v("#")]),t._v(" PX4 Docker 容器")]),t._v(" "),a("p",[t._v("Docker 容器被提供用于完整的 "),a("RouterLink",{attrs:{to:"/zh/setup/dev_env.html#supported-targets"}},[t._v("PX4 开发工具链")]),t._v("，包括基于 NuttX 和 Linux 的硬件，"),a("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[t._v("Gazebo Simulation")]),t._v(" 和 "),a("RouterLink",{attrs:{to:"/zh/simulation/ros_interface.html"}},[t._v("ROS")]),t._v("。")],1),t._v(" "),a("p",[t._v("本主题说明如何使用 "),a("a",{attrs:{href:"#px4_containers"}},[t._v("available docker containers")]),t._v(" 访问本地 Linux 计算机中的构建环境。")]),t._v(" "),a("p",[t._v("为您的 Linux 计算机 "),a("a",{attrs:{href:"https://docs.docker.com/installation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Docker"),a("OutboundLink")],1),t._v("，最好使用 Docker 维护的一个软件包存储库来获取最新的稳定版本。 您可以使用 "),a("em",[t._v("Enterprise Edition")]),t._v(" 或（free）"),a("em",[t._v("Community Edition")]),t._v("。\n:::")]),t._v(" "),a("h2",{attrs:{id:"系统必备组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统必备组件"}},[t._v("#")]),t._v(" 系统必备组件")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4 containers are currently only supported on Linux (if you don't have Linux you can run the container [inside a virtual machine](#virtual_machine)). Do not use `boot2docker` with the default Linux image because it contains no X-Server.")])]),t._v(" "),a("p",[t._v("默认安装要求您以 root 用户身份调用 * Docker*（即使用"),a("code",[t._v("sudo")]),t._v("）。 如果您希望 "),a("a",{attrs:{href:"https://docs.docker.com/engine/installation/linux/linux-postinstall/#manage-docker-as-a-non-root-user",target:"_blank",rel:"noopener noreferrer"}},[t._v("use Docker as a non-root user"),a("OutboundLink")],1),t._v("，您可以选择将用户添加到“docker”组，然后注销或者登陆：")]),t._v(" "),a("p",[t._v("下面列出了可用的本地编辑（来自 "),a("a",{attrs:{href:"https://github.com/PX4/containers/blob/master/docker/px4-dev/README.md#container-hierarchy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1),t._v("）：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL get.docker.com -o get-docker.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" get-docker.sh\n")])])]),a("p",[t._v("可以使用 "),a("code",[t._v("latest")]),t._v(" 标记访问最新版本："),a("code",[t._v("px4io/px4-dev-ros:latest")]),t._v("（为 "),a("em",[t._v("hub.docker.com")]),t._v(" 上的每个容器列出可用标记。 例如，"),a("em",[t._v("px4-dev-ros")]),t._v(" 标签可以在 "),a("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-ros/tags/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v("）。 That way, your build folder won't be owned by root after using docker.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("＃创建 docker 组（可能不是必需的）\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" docker\n＃将您的用户添加到 docker 组。\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -aG docker $ "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v("\n＃在使用 docker 之前再次登录/注销！\n")])])]),a("p",[a("a",{attrs:{id:"px4_containers"}})]),t._v(" "),a("h2",{attrs:{id:"本地编辑层次结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地编辑层次结构"}},[t._v("#")]),t._v(" 本地编辑层次结构")]),t._v(" "),a("p",[t._v("The available containers are on "),a("a",{attrs:{href:"https://github.com/PX4/containers/blob/master/README.md#container-hierarchy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("使用容器的最简单方法是通过 "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/Tools/docker_run.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker_run.sh"),a("OutboundLink")],1),t._v(" 帮助程序脚本。 此脚本将 PX4 构建命令作为参数（例如 "),a("code",[t._v("make tests")]),t._v("）。 For example, below you can see that the docker container with nuttx build tools ("),a("code",[t._v("px4-dev-nuttx-focal")]),t._v(") does not include ROS 2, while the simulation containers do:")]),t._v(" "),a("ul",[a("li",[t._v("px4io/px4-dev-base-focal\n"),a("ul",[a("li",[t._v("px4io/px4-dev-nuttx-focal")]),t._v(" "),a("li",[t._v("px4io/px4-dev-simulation-focal\n"),a("ul",[a("li",[t._v("px4io/px4-dev-ros-noetic")]),t._v(" "),a("li",[t._v("px4io/px4-dev-ros2-foxy")])])])])])]),t._v(" "),a("p",[t._v("The most recent version can be accessed using the "),a("code",[t._v("latest")]),t._v(" tag: "),a("code",[t._v("px4io/px4-dev-nuttx-bionic:latest")]),t._v(" (available tags are listed for each container on "),a("em",[t._v("hub.docker.com")]),t._v(". For example, the "),a("code",[t._v("px4io/px4-dev-nuttx-bionic")]),t._v(" tags can be found "),a("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-nuttx-bionic/tags?page=1&ordering=last_updated",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Typically you should use a recent container, but not necessarily the "),a("code",[t._v("latest")]),t._v(" (as this changes too often).")])]),t._v(" "),a("h2",{attrs:{id:"使用-docker-容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-容器"}},[t._v("#")]),t._v(" 使用 Docker 容器")]),t._v(" "),a("p",[t._v("典型命令的语法如下所示。 这将运行一个支持 X 指令的 Docker 容器（使容器内部的模拟 GUI 可用）。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" src\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" src\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/Firmware.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Firmware\n")])])]),a("h3",{attrs:{id:"助手脚本-docker-run-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#助手脚本-docker-run-sh"}},[t._v("#")]),t._v(" 助手脚本（docker_run.sh）")]),t._v(" "),a("p",[t._v("The easiest way to use the containers is via the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/docker_run.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker_run.sh"),a("OutboundLink")],1),t._v(" helper script. This script takes a PX4 build command as an argument (e.g. "),a("code",[t._v("make tests")]),t._v("). It starts up docker with a recent version (hard coded) of the appropriate container and sensible environment settings.")]),t._v(" "),a("p",[t._v("下面的具体示例显示了如何打开 bash shell 并在主机上共享目录 "),a("strong",[t._v("〜/src/Firmware")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./Tools/docker_run.sh "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'make px4_sitl_default'")]),t._v("\n")])])]),a("p",[t._v("Or to start a bash session using the NuttX toolchain:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo ./Tools/docker_run.sh 'bash'\n")])])]),a("p",[a("code",[t._v("docker run")]),t._v(" 命令只能用于创建新容器。 要重新进入此容器（将保留您的更改），只需执行以下操作： The manual approach discussed in the "),a("a",{attrs:{href:"#manual_start"}},[t._v("section below")]),t._v(" is more flexible and should be used if you have any problems with the script.\n:::")]),t._v(" "),a("p",[a("a",{attrs:{id:"manual_start"}})]),t._v(" "),a("h3",{attrs:{id:"手动调用-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动调用-docker"}},[t._v("#")]),t._v(" 手动调用 Docker")]),t._v(" "),a("p",[t._v("The syntax of a typical command is shown below. This runs a Docker container that has support for X forwarding (makes the simulation GUI available from inside the container). It maps the directory "),a("code",[t._v("<host_src>")]),t._v(" from your computer to "),a("code",[t._v("<container_src>")]),t._v(" inside the container and forwards the UDP port needed to connect "),a("em",[t._v("QGroundControl")]),t._v(". With the "),a("code",[t._v("-–privileged")]),t._v(" option it will automatically have access to the devices on your host (e.g. a joystick and GPU). If you connect/disconnect a device you have to restart the container.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable access to xhost from the container")]),t._v("\nxhost +\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run docker")]),t._v("\ndocker run -it --privileged "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --env"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("LOCAL_USER_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -u"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("lt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("host_src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("lt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("container_src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(":rw "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v /tmp/.X11-unix:/tmp/.X11-unix:ro "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("DISPLAY")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(":0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14556")]),t._v(":14556/udp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("lt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("local_container_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("lt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("container"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("lt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("lt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("build_command"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Where,")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<host_src>")]),t._v(": The host computer directory to be mapped to "),a("code",[t._v("<container_src>")]),t._v(" in the container. This should normally be the "),a("strong",[t._v("PX4-Autopilot")]),t._v(" directory.")]),t._v(" "),a("li",[a("code",[t._v("<container_src>")]),t._v(": The location of the shared (source) directory when inside the container.")]),t._v(" "),a("li",[a("code",[t._v("<local_container_name>")]),t._v(": A name for the docker container being created. This can later be used if we need to reference the container again.")]),t._v(" "),a("li",[a("code",[t._v("<container>:<tag>")]),t._v(": The container with version tag to start - e.g.: "),a("code",[t._v("px4io/px4-dev-ros:2017-10-23")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("<build_command>")]),t._v(": The command to invoke on the new container. E.g. "),a("code",[t._v("bash")]),t._v(" is used to open a bash shell in the container.")])]),t._v(" "),a("p",[t._v("The concrete example below shows how to open a bash shell and share the directory "),a("strong",[t._v("~/src/PX4-Autopilot")]),t._v(" on the host computer.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable access to xhost from the container")]),t._v("\nxhost +\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run docker and open bash shell")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker run -it --privileged "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--env"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("LOCAL_USER_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -u"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v ~/src/Firmware:/src/firmware/:rw "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v /tmp/.X11-unix:/tmp/.X11-unix:ro "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("DISPLAY")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(":0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14556")]),t._v(":14556/udp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mycontainer px4io/px4-dev-ros:2017-10-23 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),a("p",[t._v("运行模拟实例时，例如在 docker 容器内的 SITL 并通过 "),a("em",[t._v("QGroundControl")]),t._v(" 从主机控制它，必须手动设置通信链接。 "),a("em",[t._v("QGroundControl")]),t._v(" 的自动连接功能在此处不起作用。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" src/firmware    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#This is &lt;container_src&gt;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_default gazebo\n")])])]),a("h3",{attrs:{id:"重新进入容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新进入容器"}},[t._v("#")]),t._v(" 重新进入容器")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("docker run")]),t._v(" command can only be used to create a new container. To get back into this container (which will retain your changes) simply do:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start the container")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker start container_name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# open a new bash shell in this container")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it container_name "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),a("p",[t._v("If you need multiple shells connected to the container, just open a new shell and execute that last command again.")]),t._v(" "),a("h3",{attrs:{id:"清理容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清理容器"}},[t._v("#")]),t._v(" 清理容器")]),t._v(" "),a("p",[t._v("Sometimes you may need to clear a container altogether. You can do so using its name:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" mycontainer\n")])])]),a("p",[t._v("If you can't remember the name, then you can list inactive container ids and then delete them, as shown below:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -a -q\n45eeb98f1dd9\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" 45eeb98f1dd9\n")])])]),a("h3",{attrs:{id:"qgroundcontrol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol"}},[t._v("#")]),t._v(" QGroundControl")]),t._v(" "),a("p",[t._v("在这种情况下，必须安装主机系统的本机图形驱动程序。 下载正确的驱动程序并将其安装在容器中。")]),t._v(" "),a("p",[t._v("In "),a("em",[t._v("QGroundControl")]),t._v(", navigate to "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SettingsView/SettingsView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Settings"),a("OutboundLink")],1),t._v(" and select Comm Links. Create a new link that uses the UDP protocol. The port depends on the used "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("configuration"),a("OutboundLink")],1),t._v(" e.g. port 14570 for the SITL config. The IP address is the one of your docker container, usually 172.17.0.1/16 when using the default network. The IP address of the docker container can be found with the following command (assuming the container name is "),a("code",[t._v("mycontainer")]),t._v("):")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">&")]),t._v("lt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("local_container_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("：正在创建的 docker 容器的名称 如果我们需要再次引用容器，以后可以使用它。\n")])])]),a("p",[t._v("：正在创建的 docker 容器的名称 如果我们需要再次引用容器，以后可以使用它。\n")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Spaces between double curly braces above should be not be present (they are needed to avoid a UI rendering problem in gitbook).")])]),t._v(" "),a("h3",{attrs:{id:"故障处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#故障处理"}},[t._v("#")]),t._v(" 故障处理")]),t._v(" "),a("h4",{attrs:{id:"权限错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限错误"}},[t._v("#")]),t._v(" 权限错误")]),t._v(" "),a("p",[t._v('The container creates files as needed with a default user - typically "root". This can lead to permission errors where the user on the host computer is not able to access files created by the container.')]),t._v(" "),a("p",[t._v("The example above uses the line "),a("code",[t._v('--env=LOCAL_USER_ID="$(id -u)"')]),t._v(" to create a user in the container with the same UID as the user on the host. This ensures that all files created within the container will be accessible on the host.")]),t._v(" "),a("h4",{attrs:{id:"图形驱动问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图形驱动问题"}},[t._v("#")]),t._v(" 图形驱动问题")]),t._v(" "),a("p",[t._v("It's possible that running Gazebo will result in a similar error message like the following:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("libGL error: failed to load driver: swrast\n")])])]),a("p",[t._v("In that case the native graphics driver for your host system must be installed. Download the right driver and install it inside the container. For Nvidia drivers the following command should be used (otherwise the installer will see the loaded modules from the host and refuse to proceed):")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./NVIDIA-DRIVER.run -a -N --ui"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("none --no-kernel-module\n")])])]),a("p",[t._v("如果编译失败，则出现以下错误：")]),t._v(" "),a("p",[a("a",{attrs:{id:"virtual_machine"}})]),t._v(" "),a("h2",{attrs:{id:"虚拟机支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机支持"}},[t._v("#")]),t._v(" 虚拟机支持")]),t._v(" "),a("p",[t._v("尝试禁用并行构建。")]),t._v(" "),a("p",[t._v("The following configuration is tested:")]),t._v(" "),a("ul",[a("li",[t._v("OS X with VMWare Fusion and Ubuntu 14.04 (Docker container with GUI support on Parallels make the X-Server crash).")])]),t._v(" "),a("p",[a("strong",[t._v("Memory")])]),t._v(" "),a("p",[t._v("Use at least 4GB memory for the virtual machine.")]),t._v(" "),a("p",[a("strong",[t._v("Compilation problems")])]),t._v(" "),a("p",[t._v("If compilation fails with errors like this:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("这个错误是不可复现的，可能是硬件或操作系统问题。\nThe bug is not reproducible, so it is likely a hardware or OS problem.\nc++: internal compiler error: Killed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program cc1plus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Try disabling parallel builds.")]),t._v(" "),a("p",[a("strong",[t._v("Allow Docker Control from the VM Host")])]),t._v(" "),a("p",[t._v("Edit "),a("code",[t._v("/etc/defaults/docker")]),t._v(" and add this line:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOCKER_OPTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${DOCKER_OPTS}")]),t._v(' -H unix:///var/run/docker.sock -H 0.0.0.0:2375"')]),t._v("\n")])])]),a("p",[t._v("You can then control docker from your host OS:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOCKER_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tcp://"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("lt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" of your VM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(":2375\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# run some docker command to see if it works, e.g. ps")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);