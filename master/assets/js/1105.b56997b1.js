(window.webpackJsonp=window.webpackJsonp||[]).push([[1105],{2281:function(t,e,s){"use strict";s.r(e);var a=s(18),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"px4-도커-컨테이너"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-도커-컨테이너"}},[t._v("#")]),t._v(" PX4 도커 컨테이너")]),t._v(" "),s("p",[t._v("도커 컨테이너는 NuttX와 리눅스 기반 하드웨어 "),s("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[t._v("가제보 모의시험")]),t._v(", "),s("RouterLink",{attrs:{to:"/ko/simulation/ros_interface.html"}},[t._v("ROS")]),t._v("가 들어있는 완전한 "),s("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html#supported-targets"}},[t._v("PX4 개발 툴체인")]),t._v("을 제공합니다.")],1),t._v(" "),s("p",[t._v("이 주제에서는 로컬 리눅스 컴퓨터에서 빌드 환경에 접근할 수 있는 "),s("a",{attrs:{href:"#px4_containers"}},[t._v("가용 도커 컨테이너")]),t._v(" 활용법을 알려드리도록 하겠습니다.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Dockerfile 과 README 는 "),s("a",{attrs:{href:"https://github.com/PX4/containers/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 곳 Github"),s("OutboundLink")],1),t._v("에 있습니다. 이 파일은 "),s("a",{attrs:{href:"https://hub.docker.com/u/px4io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("도커 허브"),s("OutboundLink")],1),t._v("에 자동으로 만들어줍니다.")])]),t._v(" "),s("h2",{attrs:{id:"준비-요건"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#준비-요건"}},[t._v("#")]),t._v(" 준비 요건")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("PX4 컨테이너는 현재 리눅스만 지원합니다(리눅스를 설치하지 않았다면 [가상 머신에서](#virtual_machine) 컨테이너를 실행할 수 있습니다). X 서버가 들어있지 않으므로 기본 리눅스 이미지에서 `boot2docker`를 실행하지 마십시오")])]),t._v(" "),s("p",[t._v("기본 설치시 "),s("em",[t._v("도커")]),t._v("를 루트 사용자로 실행해야 합니다(예: "),s("code",[t._v("sudo")]),t._v(" 활용). 그러나 PX4 펌웨어를 빌드하려면 "),s("a",{attrs:{href:"https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user",target:"_blank",rel:"noopener noreferrer"}},[t._v("비 루트 사용자 계정으로 도커를 실행"),s("OutboundLink")],1),t._v(" 하시는게 좋습니다.")]),t._v(" "),s("p",[t._v("가용 컨테이너는 아래와 같습니다("),s("a",{attrs:{href:"https://github.com/PX4/containers/blob/master/README.md#container-hierarchy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1),t._v("에 있음):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL get.docker.com -o get-docker.sh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" get-docker.sh\n")])])]),s("p",[s("code",[t._v("px4io/px4-dev-nuttx:latest")]),t._v("와 같이 "),s("code",[t._v("latest")]),t._v(" 태그를 활용하면 가장 최근의 버전에 접근할 수 있습니다. (가용 태그는 "),s("em",[t._v("hub.docker.com")]),t._v("의 각 컨테이너에 들어있습니다. 예를 들면, "),s("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-nuttx/tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),s("OutboundLink")],1),t._v("에서는, "),s("em",[t._v("px4-dev-ros")]),t._v("태그를 찾아볼 수 있습니다). 이렇게 하면, 도커를 활용하면서 빌드 폴더를 루트 소유로 만들지 않습니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create docker group (may not be required)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" docker\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add your user to the docker group.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -aG docker "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$USER")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Log in/out again before using docker!")]),t._v("\n")])])]),s("p",[s("a",{attrs:{id:"px4_containers"}})]),t._v(" "),s("h2",{attrs:{id:"컨테이너-계층"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너-계층"}},[t._v("#")]),t._v(" 컨테이너 계층")]),t._v(" "),s("p",[t._v("가용 컨테이너는 아래와 같습니다("),s("a",{attrs:{href:"https://github.com/PX4/containers/blob/master/README.md#container-hierarchy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1),t._v("에 있음):")]),t._v(" "),s("p",[t._v("컨테이너를 활용하는 가장 쉬운 방법은 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/docker_run.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker_run.sh"),s("OutboundLink")],1),t._v(" 보조 스크립트를 활용한 방법입니다. 이 스크립트는 PX4 빌드 명령을 인자 값으로 취합니다 (예: "),s("code",[t._v("make tests")]),t._v("). For example, below you can see that the docker container with nuttx build tools ("),s("code",[t._v("px4-dev-nuttx-focal")]),t._v(") does not include ROS 2, while the simulation containers do:")]),t._v(" "),s("ul",[s("li",[t._v("px4io/px4-dev-base-focal\n"),s("ul",[s("li",[t._v("px4io/px4-dev-nuttx-focal")]),t._v(" "),s("li",[t._v("px4io/px4-dev-simulation-focal\n"),s("ul",[s("li",[t._v("px4io/px4-dev-ros-noetic")]),t._v(" "),s("li",[t._v("px4io/px4-dev-ros2-foxy")])])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("보통 최근의 컨테이너를 활용해야 하나, 최신이 필요한 것은 아닙니다 (변경이 너무 자주 일어나기 때문).")])]),t._v(" "),s("p",[t._v("다음 절차는 도커 컨테이너에서 실행하는 툴체인으로 호스트 컴퓨터에서 PX4 소스 코드를 빌드하는 방법을 보여줍니다. PX4 소스 코드를 다음과 같이 "),s("strong",[t._v("src/PX4-Autopilot")]),t._v("에 이미 다운로드했음을 가정합니다:")]),t._v(" "),s("h2",{attrs:{id:"도커-컨테이너-활용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#도커-컨테이너-활용"}},[t._v("#")]),t._v(" 도커 컨테이너 활용")]),t._v(" "),s("p",[t._v("보통 사용하는 명령의 문법은 다음과 같습니다. 이 명령은 X 포워딩을 지원하는 도커 컨테이너를 실행합니다(컨테이너에서 모의시험 GUI 환경을 사용할 수 있습니다).")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" src\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" src\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n")])])]),s("h3",{attrs:{id:"보조-스크립트-docker-run-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#보조-스크립트-docker-run-sh"}},[t._v("#")]),t._v(" 보조 스크립트(docker_run.sh)")]),t._v(" "),s("p",[t._v("The easiest way to use the containers is via the "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/docker_run.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker_run.sh"),s("OutboundLink")],1),t._v(" helper script. This script takes a PX4 build command as an argument (e.g. "),s("code",[t._v("make tests")]),t._v("). It starts up docker with a recent version (hard coded) of the appropriate container and sensible environment settings.")]),t._v(" "),s("p",[t._v("아래의 보강 예제에서는 호스트 컴퓨터에서 배시 셸을 열고 "),s("strong",[t._v("~/src/PX4-Autopilot")]),t._v("  디렉터리를 공유하는 방법을 보여줍니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("./Tools/docker_run.sh "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'make px4_sitl_default'")]),t._v("\n")])])]),s("p",[t._v("Or to start a bash session using the NuttX toolchain:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("./Tools/docker_run.sh 'bash'\n")])])]),s("p",[s("code",[t._v("docker run")]),t._v(" 명령은 새 컨테이너를 만들 때만 사용합니다. 이 컨테이너로 돌아가려면 (바뀐 내용은 그대로 유지) 다음 명령을 실행하십시오: 컴퓨터의 "),s("code",[t._v("<host_src>")]),t._v(" 디렉터리를 컨테이너의 "),s("code",[t._v("<container_src>")]),t._v(" 디렉터리로 대응하며 "),s("em",[t._v("QGroundControl")]),t._v("에 연결할 UDP 포트 데이터를 전달합니다. "),s("code",[t._v("-–privileged")]),t._v(" 옵션을 사용하면 호스트의 장치(예: 조이스틱, CPU)에 자동으로 접근합니다.")]),t._v(" "),s("p",[s("a",{attrs:{id:"manual_start"}})]),t._v(" "),s("h3",{attrs:{id:"도커-직접-호출"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#도커-직접-호출"}},[t._v("#")]),t._v(" 도커 직접 호출")]),t._v(" "),s("p",[t._v("The syntax of a typical command is shown below. This runs a Docker container that has support for X forwarding (makes the simulation GUI available from inside the container). It maps the directory "),s("code",[t._v("<host_src>")]),t._v(" from your computer to "),s("code",[t._v("<container_src>")]),t._v(" inside the container and forwards the UDP port needed to connect "),s("em",[t._v("QGroundControl")]),t._v(". With the "),s("code",[t._v("-–privileged")]),t._v(" option it will automatically have access to the devices on your host (e.g. a joystick and GPU). If you connect/disconnect a device you have to restart the container.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable access to xhost from the container")]),t._v("\nxhost +\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run docker")]),t._v("\ndocker run -it --privileged "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --env"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("LOCAL_USER_ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -u"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("host_src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("container_src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":rw "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v /tmp/.X11-unix:/tmp/.X11-unix:ro "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("DISPLAY")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(":0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14570")]),t._v(":14570/udp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("local_container_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("container"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("build_command"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("아래의 보강 예제에서는 호스트 컴퓨터에서 배시 셸을 열고 "),s("strong",[t._v("~/src/PX4-Autopilot")]),t._v("  디렉터리를 공유하는 방법을 보여줍니다.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("<host_src>")]),t._v(": The host computer directory to be mapped to "),s("code",[t._v("<container_src>")]),t._v(" in the container. This should normally be the "),s("strong",[t._v("PX4-Autopilot")]),t._v(" directory.")]),t._v(" "),s("li",[s("code",[t._v("<container_src>")]),t._v(": The location of the shared (source) directory when inside the container.")]),t._v(" "),s("li",[s("code",[t._v("<local_container_name>")]),t._v(": A name for the docker container being created. This can later be used if we need to reference the container again.")]),t._v(" "),s("li",[s("code",[t._v("<container>:<tag>")]),t._v(": The container with version tag to start - e.g.: "),s("code",[t._v("px4io/px4-dev-ros:2017-10-23")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("<build_command>")]),t._v(": The command to invoke on the new container. E.g. "),s("code",[t._v("bash")]),t._v(" is used to open a bash shell in the container.")])]),t._v(" "),s("p",[t._v("The concrete example below shows how to open a bash shell and share the directory "),s("strong",[t._v("~/src/PX4-Autopilot")]),t._v(" on the host computer.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable access to xhost from the container")]),t._v("\nxhost +\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run docker and open bash shell")]),t._v("\ndocker run -it --privileged "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--env"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("LOCAL_USER_ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -u"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v ~/src/PX4-Autopilot:/src/PX4-Autopilot/:rw "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v /tmp/.X11-unix:/tmp/.X11-unix:ro "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("DISPLAY")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(":0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14570")]),t._v(":14570/udp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mycontainer px4io/px4-dev-ros:2017-10-23 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),s("p",[t._v("도커 컨테이너에서 SITL과 같은 모의시험 인스턴스를 실행하고 호스트에서  "),s("em",[t._v("QGroundControl")]),t._v("로 제어할 때, 통신 링크는 직접 설정해야합니다. 여기서 "),s("em",[t._v("QGroundControl")]),t._v("의 자동 연결 기능은 동작하지 않습니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" src/PX4-Autopilot    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#This is <container_src>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_default gazebo\n")])])]),s("h3",{attrs:{id:"컨테이너-재진입"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너-재진입"}},[t._v("#")]),t._v(" 컨테이너 재진입")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("docker run")]),t._v(" command can only be used to create a new container. To get back into this container (which will retain your changes) simply do:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start the container")]),t._v("\ndocker start container_name\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# open a new bash shell in this container")]),t._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it container_name "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),s("p",[t._v("If you need multiple shells connected to the container, just open a new shell and execute that last command again.")]),t._v(" "),s("h3",{attrs:{id:"컨테이너-정리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너-정리"}},[t._v("#")]),t._v(" 컨테이너 정리")]),t._v(" "),s("p",[t._v("Sometimes you may need to clear a container altogether. You can do so using its name:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("docker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" mycontainer\n")])])]),s("p",[t._v("If you can't remember the name, then you can list inactive container ids and then delete them, as shown below:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("docker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -a -q\n45eeb98f1dd9\ndocker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" 45eeb98f1dd9\n")])])]),s("h3",{attrs:{id:"qgroundcontrol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol"}},[t._v("#")]),t._v(" QGroundControl")]),t._v(" "),s("p",[t._v("이 경우 호스트 시스템에 자체 그래픽 드라이버를 설치해야 합니다. 올바른 드라이버를 다운로드하시고 컨테이너 내부에 설치하십시오.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("이중 중괄호 사이에 공백문자를 두어서는 안됩니다(gitbook의 인터페이스 렌더링 문제로 일부러 빈칸을 두었습니다). ::: The port depends on the used "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("configuration"),s("OutboundLink")],1),t._v(" e.g. port 14570 for the SITL config. The IP address is the one of your docker container, usually 172.17.0.1/16 when using the default network. The IP address of the docker container can be found with the following command (assuming the container name is "),s("code",[t._v("mycontainer")]),t._v("):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ docker inspect -f "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{ {range .NetworkSettings.Networks}}{ {.IPAddress}}{ {end}}'")]),t._v(" mycontainer\n")])])]),s("p",[t._v('컨테이너에서는 기본 사용자 권한으로 필요한 파일을 만듭니다. 보통 기본 사용자는 "root"입니다. 이렇게 하면 호스트 컴퓨터의 사용자가 컨테이너에서 만든 파일에 접근할 수 없는 권한 오류가 나타납니다.')]),t._v(" "),s("h3",{attrs:{id:"문제-해결"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")]),t._v(" "),s("h4",{attrs:{id:"권한-오류"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#권한-오류"}},[t._v("#")]),t._v(" 권한 오류")]),t._v(" "),s("p",[t._v("위 예제에서는 호스트 사용자와 동일한 UID로 컨테이너의 사용자를 만들 때 "),s("code",[t._v('--env=LOCAL_USER_ID="$(id -u)"')]),t._v(" 행을 활용합니다. 이 명령을 사용하면 호스트에서 컨테이너에 만든 모든 파일을 접근할 수 있습니다.")]),t._v(" "),s("p",[t._v("The example above uses the line "),s("code",[t._v('--env=LOCAL_USER_ID="$(id -u)"')]),t._v(" to create a user in the container with the same UID as the user on the host. This ensures that all files created within the container will be accessible on the host.")]),t._v(" "),s("h4",{attrs:{id:"그래픽-드라이버-문제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#그래픽-드라이버-문제"}},[t._v("#")]),t._v(" 그래픽 드라이버 문제")]),t._v(" "),s("p",[t._v("It's possible that running Gazebo will result in a similar error message like the following:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("libGL error: failed to load driver: swrast\n")])])]),s("p",[t._v("In that case the native graphics driver for your host system must be installed. Download the right driver and install it inside the container. For Nvidia drivers the following command should be used (otherwise the installer will see the loaded modules from the host and refuse to proceed):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("./NVIDIA-DRIVER.run -a -N --ui"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("none --no-kernel-module\n")])])]),s("p",[t._v("다음 오류로 컴파일에 실패했을 경우:")]),t._v(" "),s("p",[s("a",{attrs:{id:"virtual_machine"}})]),t._v(" "),s("h2",{attrs:{id:"가상-머신-지원"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#가상-머신-지원"}},[t._v("#")]),t._v(" 가상 머신 지원")]),t._v(" "),s("p",[t._v("병렬 빌드가 아닌 단일 빌드로 진행해보십시오.")]),t._v(" "),s("p",[t._v("The following configuration is tested:")]),t._v(" "),s("ul",[s("li",[t._v("OS X with VMWare Fusion and Ubuntu 14.04 (Docker container with GUI support on Parallels make the X-Server crash).")])]),t._v(" "),s("p",[s("strong",[t._v("Memory")])]),t._v(" "),s("p",[t._v("Use at least 4GB memory for the virtual machine.")]),t._v(" "),s("p",[s("strong",[t._v("Compilation problems")])]),t._v(" "),s("p",[t._v("동시 빌드가 아닌 단일 빌드로 진행해보십시오.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("The bug is not reproducible, so it is likely a hardware or OS problem.\nc++: internal compiler error: Killed "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program cc1plus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Try disabling parallel builds.")]),t._v(" "),s("p",[s("strong",[t._v("Allow Docker Control from the VM Host")])]),t._v(" "),s("p",[t._v("이제 호스트 운영체제에서 도커를 제어할 수 있습니다:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOCKER_OPTS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${DOCKER_OPTS}")]),t._v(' -H unix:///var/run/docker.sock -H 0.0.0.0:2375"')]),t._v("\n")])])]),s("p",[t._v("You can then control docker from your host OS:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOCKER_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tcp://"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ip of your VM"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":2375\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# run some docker command to see if it works, e.g. ps")]),t._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);