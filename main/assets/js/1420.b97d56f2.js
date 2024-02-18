(window.webpackJsonp=window.webpackJsonp||[]).push([[1420],{2612:function(e,t,a){"use strict";a.r(t);var s=a(19),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"px4-docker-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-docker-containers"}},[e._v("#")]),e._v(" PX4 Docker Containers")]),e._v(" "),a("p",[e._v("Docker containers are provided for the complete "),a("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html#supported-targets"}},[e._v("PX4 development toolchain")]),e._v(" including NuttX and Linux based hardware, "),a("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[e._v("Gazebo Classic")]),e._v(" simulation, and "),a("RouterLink",{attrs:{to:"/en/simulation/ros_interface.html"}},[e._v("ROS")]),e._v(".")],1),e._v(" "),a("p",[e._v("This topic shows how to use the "),a("a",{attrs:{href:"#px4_containers"}},[e._v("available docker containers")]),e._v(" to access the build environment in a local Linux computer.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Dockerfiles and README can be found on "),a("a",{attrs:{href:"https://github.com/PX4/containers/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github here"),a("OutboundLink")],1),e._v(".\nThey are built automatically on "),a("a",{attrs:{href:"https://hub.docker.com/u/px4io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("PX4 containers are currently only supported on Linux (if you don't have Linux you can run the container "),a("a",{attrs:{href:"#virtual_machine"}},[e._v("inside a virtual machine")]),e._v(").\nDo not use "),a("code",[e._v("boot2docker")]),e._v(" with the default Linux image because it contains no X-Server.")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/installation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Docker"),a("OutboundLink")],1),e._v(" for your Linux computer, preferably using one of the Docker-maintained package repositories to get the latest stable version. You can use either the "),a("em",[e._v("Enterprise Edition")]),e._v(" or (free) "),a("em",[e._v("Community Edition")]),e._v(".")]),e._v(" "),a("p",[e._v("For local installation of non-production setups on "),a("em",[e._v("Ubuntu")]),e._v(", the quickest and easiest way to install Docker is to use the "),a("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script",target:"_blank",rel:"noopener noreferrer"}},[e._v("convenience script"),a("OutboundLink")],1),e._v(" as shown below (alternative installation methods are found on the same page):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -fsSL get.docker.com -o get-docker.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" get-docker.sh\n")])])]),a("p",[e._v("The default installation requires that you invoke "),a("em",[e._v("Docker")]),e._v(" as the root user (i.e. using "),a("code",[e._v("sudo")]),e._v("). However, for building the PX4 firmware we suggest to "),a("a",{attrs:{href:"https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user",target:"_blank",rel:"noopener noreferrer"}},[e._v("use docker as a non-root user"),a("OutboundLink")],1),e._v(". That way, your build folder won't be owned by root after using docker.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create docker group (may not be required)")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("groupadd")]),e._v(" docker\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Add your user to the docker group.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" -aG docker "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$USER")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Log in/out again before using docker!")]),e._v("\n")])])]),a("p",[a("a",{attrs:{id:"px4_containers"}})]),e._v(" "),a("h2",{attrs:{id:"container-hierarchy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-hierarchy"}},[e._v("#")]),e._v(" Container Hierarchy")]),e._v(" "),a("p",[e._v("The available containers are on "),a("a",{attrs:{href:"https://github.com/PX4/PX4-containers/blob/master/README.md#container-hierarchy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("These allow testing of various build targets and configurations (the included tools can be inferred from their names).\nThe containers are hierarchical, such that containers have the functionality of their parents.\nFor example, the partial hierarchy below shows that the docker container with nuttx build tools ("),a("code",[e._v("px4-dev-nuttx-focal")]),e._v(") does not include ROS 2, while the simulation containers do:")]),e._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("- px4io/px4-dev-base-focal\n  - px4io/px4-dev-nuttx-focal\n  - px4io/px4-dev-simulation-focal\n    - px4io/px4-dev-ros-noetic\n      - px4io/px4-dev-ros2-foxy\n  - px4io/px4-dev-ros2-rolling\n- px4io/px4-dev-base-jammy\n  - px4io/px4-dev-nuttx-jammy\n")])])]),a("p",[e._v("The most recent version can be accessed using the "),a("code",[e._v("latest")]),e._v(" tag: "),a("code",[e._v("px4io/px4-dev-nuttx-focal:latest")]),e._v("\n(available tags are listed for each container on "),a("em",[e._v("hub.docker.com")]),e._v(".\nFor example, the "),a("code",[e._v("px4io/px4-dev-nuttx-focal")]),e._v(" tags can be found "),a("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-nuttx-focal/tags?page=1&ordering=last_updated",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Typically you should use a recent container, but not necessarily the "),a("code",[e._v("latest")]),e._v(" (as this changes too often).")])]),e._v(" "),a("h2",{attrs:{id:"use-the-docker-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-the-docker-container"}},[e._v("#")]),e._v(" Use the Docker Container")]),e._v(" "),a("p",[e._v("The following instructions show how to build PX4 source code on the host computer using a toolchain running in a docker container.\nThe information assumes that you have already downloaded the PX4 source code to "),a("strong",[e._v("src/PX4-Autopilot")]),e._v(", as shown:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" src\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" src\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/PX4/PX4-Autopilot.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" PX4-Autopilot\n")])])]),a("h3",{attrs:{id:"helper-script-docker-run-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helper-script-docker-run-sh"}},[e._v("#")]),e._v(" Helper Script (docker_run.sh)")]),e._v(" "),a("p",[e._v("The easiest way to use the containers is via the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/docker_run.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker_run.sh"),a("OutboundLink")],1),e._v(" helper script.\nThis script takes a PX4 build command as an argument (e.g. "),a("code",[e._v("make tests")]),e._v("). It starts up docker with a recent version (hard coded) of the appropriate container and sensible environment settings.")]),e._v(" "),a("p",[e._v("For example, to build SITL you would call (from within the "),a("strong",[e._v("/PX4-Autopilot")]),e._v(" directory):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./Tools/docker_run.sh "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'make px4_sitl_default'")]),e._v("\n")])])]),a("p",[e._v("Or to start a bash session using the NuttX toolchain:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./Tools/docker_run.sh "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'bash'")]),e._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The script is easy because you don't need to know anything much about "),a("em",[e._v("Docker")]),e._v(" or think about what container to use. However it is not particularly robust! The manual approach discussed in the "),a("a",{attrs:{href:"#manual_start"}},[e._v("section below")]),e._v(" is more flexible and should be used if you have any problems with the script.")])]),e._v(" "),a("p",[a("a",{attrs:{id:"manual_start"}})]),e._v(" "),a("h3",{attrs:{id:"calling-docker-manually"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calling-docker-manually"}},[e._v("#")]),e._v(" Calling Docker Manually")]),e._v(" "),a("p",[e._v("The syntax of a typical command is shown below.\nThis runs a Docker container that has support for X forwarding (makes the simulation GUI available from inside the container).\nIt maps the directory "),a("code",[e._v("<host_src>")]),e._v(" from your computer to "),a("code",[e._v("<container_src>")]),e._v(" inside the container and forwards the UDP port needed to connect "),a("em",[e._v("QGroundControl")]),e._v(".\nWith the "),a("code",[e._v("-–privileged")]),e._v(" option it will automatically have access to the devices on your host (e.g. a joystick and GPU). If you connect/disconnect a device you have to restart the container.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# enable access to xhost from the container")]),e._v("\nxhost +\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run docker")]),e._v("\ndocker run -it --privileged "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --env"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("LOCAL_USER_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v(" -u"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -v "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("host_src"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("container_src"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(":rw "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -v /tmp/.X11-unix:/tmp/.X11-unix:ro "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("DISPLAY")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(":0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("14570")]),e._v(":14570/udp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("local_container_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("container"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("build_command"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("Where,")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("<host_src>")]),e._v(": The host computer directory to be mapped to "),a("code",[e._v("<container_src>")]),e._v(" in the container. This should normally be the "),a("strong",[e._v("PX4-Autopilot")]),e._v(" directory.")]),e._v(" "),a("li",[a("code",[e._v("<container_src>")]),e._v(": The location of the shared (source) directory when inside the container.")]),e._v(" "),a("li",[a("code",[e._v("<local_container_name>")]),e._v(": A name for the docker container being created. This can later be used if we need to reference the container again.")]),e._v(" "),a("li",[a("code",[e._v("<container>:<tag>")]),e._v(": The container with version tag to start - e.g.: "),a("code",[e._v("px4io/px4-dev-ros:2017-10-23")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("<build_command>")]),e._v(": The command to invoke on the new container. E.g. "),a("code",[e._v("bash")]),e._v(" is used to open a bash shell in the container.")])]),e._v(" "),a("p",[e._v("The concrete example below shows how to open a bash shell and share the directory "),a("strong",[e._v("~/src/PX4-Autopilot")]),e._v(" on the host computer.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# enable access to xhost from the container")]),e._v("\nxhost +\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run docker and open bash shell")]),e._v("\ndocker run -it --privileged "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--env"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("LOCAL_USER_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v(" -u"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-v ~/src/PX4-Autopilot:/src/PX4-Autopilot/:rw "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-v /tmp/.X11-unix:/tmp/.X11-unix:ro "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("DISPLAY")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(":0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--network "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("px4-ros px4io/px4-dev-ros2-foxy:2022-07-31 "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("We use the host network mode to avoid conflicts between the UDP port access control when using QGroundControl on the same system as the docker container.")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v('If you encounter the error "Can\'t open display: :0", '),a("code",[e._v("DISPLAY")]),e._v(" may need to be set to a different value.\nOn Linux (XWindow) hosts you can change "),a("code",[e._v("-e DISPLAY=:0")]),e._v(" to "),a("code",[e._v("-e DISPLAY=$DISPLAY")]),e._v(".\nOn other hosts you might iterate the value of "),a("code",[e._v("0")]),e._v(" in "),a("code",[e._v("-e DISPLAY=:0")]),e._v(' until the "Can\'t open display: :0" error goes away.')])]),e._v(" "),a("p",[e._v("If everything went well you should be in a new bash shell now.\nVerify if everything works by running, for example, SITL:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" src/PX4-Autopilot    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#This is <container_src>")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl_default gazebo-classic\n")])])]),a("h3",{attrs:{id:"re-enter-the-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#re-enter-the-container"}},[e._v("#")]),e._v(" Re-enter the Container")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("docker run")]),e._v(" command can only be used to create a new container. To get back into this container (which will retain your changes) simply do:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# start the container")]),e._v("\ndocker start container_name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# open a new bash shell in this container")]),e._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it container_name "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n")])])]),a("p",[e._v("If you need multiple shells connected to the container, just open a new shell and execute that last command again.")]),e._v(" "),a("h3",{attrs:{id:"clearing-the-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clearing-the-container"}},[e._v("#")]),e._v(" Clearing the Container")]),e._v(" "),a("p",[e._v("Sometimes you may need to clear a container altogether. You can do so using its name:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" mycontainer\n")])])]),a("p",[e._v("If you can't remember the name, then you can list inactive container ids and then delete them, as shown below:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v(" -a -q\n45eeb98f1dd9\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" 45eeb98f1dd9\n")])])]),a("h3",{attrs:{id:"qgroundcontrol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol"}},[e._v("#")]),e._v(" QGroundControl")]),e._v(" "),a("p",[e._v("When running a simulation instance e.g. SITL inside the docker container and controlling it via "),a("em",[e._v("QGroundControl")]),e._v(" from the host, the communication link has to be set up manually. The autoconnect feature of "),a("em",[e._v("QGroundControl")]),e._v(" does not work here.")]),e._v(" "),a("p",[e._v("In "),a("em",[e._v("QGroundControl")]),e._v(", navigate to "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/settings_view/settings_view.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Settings"),a("OutboundLink")],1),e._v(" and select Comm Links. Create a new link that uses the UDP protocol. The port depends on the used "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[e._v("configuration"),a("OutboundLink")],1),e._v(" e.g. port 14570 for the SITL config. The IP address is the one of your docker container, usually 172.17.0.1/16 when using the default network. The IP address of the docker container can be found with the following command (assuming the container name is "),a("code",[e._v("mycontainer")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ docker inspect -f "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'{ {range .NetworkSettings.Networks}}{ {.IPAddress}}{ {end}}'")]),e._v(" mycontainer\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Spaces between double curly braces above should be not be present (they are needed to avoid a UI rendering problem in gitbook).")])]),e._v(" "),a("h3",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("h4",{attrs:{id:"permission-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permission-errors"}},[e._v("#")]),e._v(" Permission Errors")]),e._v(" "),a("p",[e._v('The container creates files as needed with a default user - typically "root". This can lead to permission errors where the user on the host computer is not able to access files created by the container.')]),e._v(" "),a("p",[e._v("The example above uses the line "),a("code",[e._v('--env=LOCAL_USER_ID="$(id -u)"')]),e._v(" to create a user in the container with the same UID as the user on the host. This ensures that all files created within the container will be accessible on the host.")]),e._v(" "),a("h4",{attrs:{id:"graphics-driver-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphics-driver-issues"}},[e._v("#")]),e._v(" Graphics Driver Issues")]),e._v(" "),a("p",[e._v("It's possible that running Gazebo Classic will result in a similar error message like the following:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("libGL error: failed to load driver: swrast\n")])])]),a("p",[e._v("In that case the native graphics driver for your host system must be installed. Download the right driver and install it inside the container. For Nvidia drivers the following command should be used (otherwise the installer will see the loaded modules from the host and refuse to proceed):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./NVIDIA-DRIVER.run -a -N --ui"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("none --no-kernel-module\n")])])]),a("p",[e._v("More information on this can be found "),a("a",{attrs:{href:"http://gernotklingler.com/blog/howto-get-hardware-accelerated-opengl-support-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("a",{attrs:{id:"virtual_machine"}})]),e._v(" "),a("h2",{attrs:{id:"virtual-machine-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-machine-support"}},[e._v("#")]),e._v(" Virtual Machine Support")]),e._v(" "),a("p",[e._v("Any recent Linux distribution should work.")]),e._v(" "),a("p",[e._v("The following configuration is tested:")]),e._v(" "),a("ul",[a("li",[e._v("OS X with VMWare Fusion and Ubuntu 14.04 (Docker container with GUI support on Parallels make the X-Server crash).")])]),e._v(" "),a("p",[a("strong",[e._v("Memory")])]),e._v(" "),a("p",[e._v("Use at least 4GB memory for the virtual machine.")]),e._v(" "),a("p",[a("strong",[e._v("Compilation problems")])]),e._v(" "),a("p",[e._v("If compilation fails with errors like this:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("The bug is not reproducible, so it is likely a hardware or OS problem.\nc++: internal compiler error: Killed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("program cc1plus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("Try disabling parallel builds.")]),e._v(" "),a("p",[a("strong",[e._v("Allow Docker Control from the VM Host")])]),e._v(" "),a("p",[e._v("Edit "),a("code",[e._v("/etc/defaults/docker")]),e._v(" and add this line:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DOCKER_OPTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${DOCKER_OPTS}")]),e._v(' -H unix:///var/run/docker.sock -H 0.0.0.0:2375"')]),e._v("\n")])])]),a("p",[e._v("You can then control docker from your host OS:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DOCKER_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("tcp://"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ip of your VM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(":2375\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# run some docker command to see if it works, e.g. ps")]),e._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);