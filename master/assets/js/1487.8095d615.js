(window.webpackJsonp=window.webpackJsonp||[]).push([[1487],{2698:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"px4-도커-컨테이너"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-도커-컨테이너"}},[t._v("#")]),t._v(" PX4 도커 컨테이너")]),t._v(" "),a("p",[t._v("도커 컨테이너는 NuttX 및 Linux 기반 하드웨어, "),a("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[t._v("Gazebo 시뮬레이션")]),t._v(" 및 "),a("RouterLink",{attrs:{to:"/ko/simulation/ros_interface.html"}},[t._v("ROS")]),t._v("를 포함한 전체 "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html#supported-targets"}},[t._v("PX4 개발 툴체인")]),t._v("을 제공됩니다.")],1),t._v(" "),a("p",[a("a",{attrs:{href:"#px4_containers"}},[t._v("도커 컨테이너")]),t._v("를 사용하여 Linux 컴퓨터에서 빌드하는 방법을 설명합니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Dockerfile와 README는 "),a("a",{attrs:{href:"https://github.com/PX4/containers/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1),t._v("에서 찾을 수 있습니다. "),a("a",{attrs:{href:"https://hub.docker.com/u/px4io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub"),a("OutboundLink")],1),t._v("에서 자동으로 빌드됩니다.")])]),t._v(" "),a("h2",{attrs:{id:"전제-조건"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[t._v("#")]),t._v(" 전제 조건")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4 컨테이너는 현재 Linux만 지원됩니다(Linux가 없는 경우 [가상 머신](#virtual_machine)에서 컨테이너를 실행할 수 있음). 기본 Linux 이미지에는 X-Server가 포함되어 있지 않으므로, `boot2docker`를 사용하지 마십시오.")])]),t._v(" "),a("p",[t._v("Linux 컴퓨터에 "),a("a",{attrs:{href:"https://docs.docker.com/installation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker를 설치"),a("OutboundLink")],1),t._v("합니다. 가급적이면 Docker에서 유지 관리하는 패키지 저장소를 사용하여 최신 안정 버전을 다운로드 하십시오. "),a("em",[t._v("엔터프라이즈 에디션")]),t._v(" 또는 (무료) "),a("em",[t._v("커뮤니티 에디션")]),t._v("을 사용할 수 있습니다.")]),t._v(" "),a("p",[a("em",[t._v("Ubuntu")]),t._v("에 비프로덕션 설정을 로컬로 설치하는 경우 Docker를 설치하는 가장 빠르고 쉬운 방법은 아래와 같이 "),a("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-convenience-script",target:"_blank",rel:"noopener noreferrer"}},[t._v("편리한 스크립트"),a("OutboundLink")],1),t._v("를 사용하는 것입니다(대체 설치 방법은 같은 페이지):")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL get.docker.com -o get-docker.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" get-docker.sh\n")])])]),a("p",[t._v("기본 설치에서는 루트 사용자로 "),a("em",[t._v("Docker")]),t._v("를 호출하여야 합니다(예: "),a("code",[t._v("sudo")]),t._v(" 사용). 그러나 PX4 펌웨어를 빌드하려면 "),a("a",{attrs:{href:"https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user",target:"_blank",rel:"noopener noreferrer"}},[t._v("도커를 루트가 아닌 일반 사용자 계정을 사용"),a("OutboundLink")],1),t._v("하는 것이 좋습니다. 그렇게하면, docker를 사용한 후 빌드 폴더를 관리자가 소유하지 않습니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create docker group (may not be required)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" docker\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add your user to the docker group.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -aG docker "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$USER")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Log in/out again before using docker!")]),t._v("\n")])])]),a("p",[a("a",{attrs:{id:"px4_containers"}})]),t._v(" "),a("h2",{attrs:{id:"컨테이너-계층"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너-계층"}},[t._v("#")]),t._v(" 컨테이너 계층")]),t._v(" "),a("p",[t._v("사용 가능한 컨테이너는 "),a("a",{attrs:{href:"https://github.com/PX4/containers/blob/master/README.md#container-hierarchy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1),t._v("에 있습니다.")]),t._v(" "),a("p",[t._v("이를 통하여 다양한 빌드 대상 및 구성을 테스트할 수 있습니다(포함된 도구는 이름에서 유추할 수 있음). 컨테이너는 상위 컨테이너의 기능을 갖도록 계층적입니다. 예를 들어, 아래에서 nuttx 빌드 도구("),a("code",[t._v("px4-dev-nuttx-focal")]),t._v(")가 있는 도커 컨테이너에는 ROS 2가 포함되어 있지 않지만, 시뮬레이션 컨테이너에는 포함되어 있습니다.")]),t._v(" "),a("ul",[a("li",[t._v("px4io/px4-dev-base-focal\n"),a("ul",[a("li",[t._v("px4io/px4-dev-nuttx-focal")]),t._v(" "),a("li",[t._v("px4io/px4-dev-simulation-focal\n"),a("ul",[a("li",[t._v("px4io/px4-dev-ros-noetic")]),t._v(" "),a("li",[t._v("px4io/px4-dev-ros2-foxy")])])])])])]),t._v(" "),a("p",[t._v("가장 최신 버전은 "),a("code",[t._v("latest")]),t._v(" 태그를 사용하여 액세스할 수 있습니다. "),a("code",[t._v("px4io/px4-dev-nuttx-bionic:latest")]),t._v(" (사용 가능한 태그는 "),a("em",[t._v("hub.docker.com")]),t._v("의 각 컨테이너에 나열되어 있습니다.)\n:::")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("일반적으로 최근 컨테이너를 사용하여야 하지만 반드시 "),a("code",[t._v("최신 버전")]),t._v("일 필요는 없습니다(너무 자주 변경됨). PX4 소스 코드를 다음과 같이 "),a("strong",[t._v("src/PX4-Autopilot")]),t._v("에 이미 다운로드했음을 가정합니다:")]),t._v(" "),a("h2",{attrs:{id:"도커-컨테이너-활용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#도커-컨테이너-활용"}},[t._v("#")]),t._v(" 도커 컨테이너 활용")]),t._v(" "),a("p",[t._v("도커 컨테이너에서 실행되는 툴체인을 사용하여 호스트 컴퓨터에서 PX4 빌드 방법을 설명합니다. PX4 소스 코드를 "),a("strong",[t._v("src/PX4-Autopilot")]),t._v("에 미리 다운로드하여야 합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" src\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" src\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n")])])]),a("h3",{attrs:{id:"보조-스크립트-docker-run-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#보조-스크립트-docker-run-sh"}},[t._v("#")]),t._v(" 보조 스크립트(docker_run.sh)")]),t._v(" "),a("p",[t._v("컨테이너를 사용하는 가장 쉬운 방법은 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/docker_run.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker_run.sh"),a("OutboundLink")],1),t._v(" 도우미 스크립트를 사용하는 것입니다. 이 스크립트는 PX4 빌드 명령을 인수로 사용합니다(예: "),a("code",[t._v("make 테스트")]),t._v("). 적절한 컨테이너 및 합리적인 환경 설정의 최신 버전(하드 코딩됨)으로 도커를 시작합니다.")]),t._v(" "),a("p",[t._v("예를 들어, SITL을 빌드하려면 다음을 호출합니다("),a("strong",[t._v("/PX4-Autopilot")]),t._v(" 디렉토리 내에서).")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./Tools/docker_run.sh "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'make px4_sitl_default'")]),t._v("\n")])])]),a("p",[t._v("또는 NuttX 도구 체인을 사용하여 bash 세션을 시작합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./Tools/docker_run.sh 'bash'\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("스크립트 실행시에 "),a("em",[t._v("Docker")]),t._v("에 대하여 자세하게 알 필요는 없습니다. 그러나, 특별히 견고하지는 않습니다! "),a("a",{attrs:{href:"#manual_start"}},[t._v("아래 섹션")]),t._v("에 설명된 수동 접근 방식이 더 유연하며, 스크립트에 문제가 있는 경우에 사용합니다. "),a("code",[t._v("-–privileged")]),t._v(" 옵션을 사용하면 호스트의 장치(예: 조이스틱, CPU)에 자동으로 접근합니다.")]),t._v(" "),a("p",[a("a",{attrs:{id:"manual_start"}})]),t._v(" "),a("h3",{attrs:{id:"도커-수동-호출"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#도커-수동-호출"}},[t._v("#")]),t._v(" 도커 수동 호출")]),t._v(" "),a("p",[t._v("일반적인 명령어 구문은 다음과 같습니다. 이것은 X 포워딩을 지원하는 Docker 컨테이너를 실행합니다(컨테이너 내부에서 시뮬레이션 GUI를 사용할 수 있게 함). 컴퓨터의 디렉토리 "),a("code",[t._v("<host_src>")]),t._v("을 컨테이너 내부의 "),a("code",[t._v("<container_src>")]),t._v("으로 매핑하고, "),a("em",[t._v("QGroundControl")]),t._v("을 연결하는 데 필요한 UDP 포트를 전달합니다. "),a("code",[t._v("--privileged")]),t._v(" 옵션을 사용하면 호스트의 장치(예: 조이스틱 및 GPU)에 자동으로 액세스할 수 있습니다. 장치를 연결/연결 해제하는 경우에는 컨테이너를 다시 시작하여야 합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable access to xhost from the container")]),t._v("\nxhost +\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run docker")]),t._v("\ndocker run -it --privileged "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --env"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("LOCAL_USER_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -u"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("host_src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("container_src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":rw "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v /tmp/.X11-unix:/tmp/.X11-unix:ro "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("DISPLAY")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(":0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14570")]),t._v(":14570/udp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("local_container_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("container"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("build_command"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("여기서,")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<host_src>")]),t._v(": 컨테이너에서 "),a("code",[t._v("<container_src>")]),t._v("에 매핑될 호스트 컴퓨터 디렉터리입니다. 이것은 일반적으로 "),a("strong",[t._v("PX4-Autopilot")]),t._v(" 디렉토리입니다.")]),t._v(" "),a("li",[a("code",[t._v("<container_src>")]),t._v(": 컨테이너 내부에서 공유(소스) 디렉토리의 위치입니다.")]),t._v(" "),a("li",[a("code",[t._v("<local_container_name>")]),t._v(": 생성 중인 도커 컨테이너의 이름입니다. 나중에 컨테이너를 다시 참조해야 하는 경우에 사용할 수 있습니다.")]),t._v(" "),a("li",[a("code",[t._v("<container>:<tag>")]),t._v(": 시작할 버전 태그가 있는 컨테이너입니다(예: "),a("code",[t._v("px4io/px4-dev-ros:2017-10-23")]),t._v(").")]),t._v(" "),a("li",[a("code",[t._v("<build_command>")]),t._v(": 새 컨테이너에서 호출할 명령어입니다. 예: "),a("code",[t._v("bash")]),t._v("는 컨테이너에서 bash 쉘을 실행합니다.")])]),t._v(" "),a("p",[t._v("아래의 예는 호스트 컴퓨터에서 bash 셸을 열고, "),a("strong",[t._v("~/src/PX4-Autopilot")]),t._v(" 디렉터리를 공유하는 방법을 설명합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable access to xhost from the container")]),t._v("\nxhost +\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run docker and open bash shell")]),t._v("\ndocker run -it --privileged "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--env"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("LOCAL_USER_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -u"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v ~/src/PX4-Autopilot:/src/PX4-Autopilot/:rw "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v /tmp/.X11-unix:/tmp/.X11-unix:ro "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("DISPLAY")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(":0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14570")]),t._v(":14570/udp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mycontainer px4io/px4-dev-ros:2017-10-23 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),a("p",[t._v("모든 것이 잘 실행되면, 새로운 bash 쉘이 실행됩니다. 예를 들어 SITL을 실행하여 모든 것이 작동하는 지 확인하십시오.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" src/PX4-Autopilot    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#This is <container_src>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_default gazebo\n")])])]),a("h3",{attrs:{id:"컨테이너-재진입"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너-재진입"}},[t._v("#")]),t._v(" 컨테이너 재진입")]),t._v(" "),a("p",[a("code",[t._v("docker run")]),t._v(" 명령은 새 컨테이너를 생성합니다. 변경 사항을 유지하는 이 컨테이너로 돌아가려면 다음을 실행하십시오.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start the container")]),t._v("\ndocker start container_name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# open a new bash shell in this container")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it container_name "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),a("p",[t._v("컨테이너에 연결된 여러 셸이 필요한 경우에는 새 셸을 열고 마지막 명령을 다시 실행합니다.")]),t._v(" "),a("h3",{attrs:{id:"컨테이너-정리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#컨테이너-정리"}},[t._v("#")]),t._v(" 컨테이너 정리")]),t._v(" "),a("p",[t._v("때로는 컨테이너를 완전히 비워야 합니다. 이름을 사용하여 정리할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" mycontainer\n")])])]),a("p",[t._v("이름이 기억나지 않으면, 아래와 같이 비활성 컨테이너 ID를 나열한 다음 삭제합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -a -q\n45eeb98f1dd9\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" 45eeb98f1dd9\n")])])]),a("h3",{attrs:{id:"qgroundcontrol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol"}},[t._v("#")]),t._v(" QGroundControl")]),t._v(" "),a("p",[t._v("시뮬레이션 인스턴스를 실행시에는 도커 컨테이너 내부의 SITL과 호스트에서 "),a("em",[t._v("QGroundControl")]),t._v("을 통해 제어하려면 네트워크를 수동으로 설정하여야 합니다. "),a("em",[t._v("QGroundControl")]),t._v("에 자동으로 연결되지 않습니다.")]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v("에서 "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SettingsView/SettingsView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("설정"),a("OutboundLink")],1),t._v("으로 이동하여 네트워크를 선택합니다. ::: 포트는 사용된 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("구성"),a("OutboundLink")],1),t._v("에 따라 다릅니다. 예: SITL 구성을 위한 포트 14570 IP 주소는 도커 컨테이너 중 하나이며, 기본 네트워크는 172.17.0.1/16입니다. 도커 컨테이너의 IP 주소는 다음 명령으로 찾을 수 있습니다(컨테이너 이름이 "),a("code",[t._v("mycontainer")]),t._v("라고 가정).")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ docker inspect -f "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{ {range .NetworkSettings.Networks}}{ {.IPAddress}}{ {end}}'")]),t._v(" mycontainer\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("위의 이중 중괄호 사이에는 공백이 없어야 합니다(gitbook에서 UI 렌더링 문제를 피하기 위해 필요함). 이렇게 하면 호스트 컴퓨터의 사용자가 컨테이너에서 만든 파일에 접근할 수 없는 권한 오류가 나타납니다.")]),t._v(" "),a("h3",{attrs:{id:"문제-해결"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")]),t._v(" "),a("h4",{attrs:{id:"권한-에러"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#권한-에러"}},[t._v("#")]),t._v(" 권한 에러")]),t._v(" "),a("p",[t._v('컨테이너는 기본 사용자(일반적으로 "루트") 계정으로 파일을 생성합니다. 이것 때문에, 호스트 컴퓨터의 사용자가 컨테이너에서 생성한 파일에 액세스할 수 없는 상황이 발생합니다.')]),t._v(" "),a("p",[t._v("위의 예는 "),a("code",[t._v('--env=LOCAL_USER_ID="$(id -u)"')]),t._v(" 줄을 사용하여 호스트의 사용자와 동일한 UID를 가진 사용자를 컨테이너에 생성합니다. 이렇게 하면 컨테이너 내에서 생성된 모든 파일을 호스트에서 액세스할 수 있습니다.")]),t._v(" "),a("h4",{attrs:{id:"그래픽-드라이버-문제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#그래픽-드라이버-문제"}},[t._v("#")]),t._v(" 그래픽 드라이버 문제")]),t._v(" "),a("p",[t._v("Gazebo를 실행하면 다음과 같은 유사한 오류 메시지가 나타날 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("libGL error: failed to load driver: swrast\n")])])]),a("p",[t._v("이 경우 호스트 시스템의 기본 그래픽 드라이버를 설치합니다. 올바른 드라이버를 다운로드하여 컨테이너 내부에 설치합니다. Nvidia 드라이버의 경우 다음 명령어를 사용합니다(그렇지 않으면 설치 프로그램이 호스트에서 로드된 모듈을 보고 진행을 거부합니다).")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./NVIDIA-DRIVER.run -a -N --ui"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("none --no-kernel-module\n")])])]),a("p",[t._v("이에 대한 자세한 내용은 "),a("a",{attrs:{href:"http://gernotklingler.com/blog/howto-get-hardware-accelerated-opengl-support-docker/",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),a("OutboundLink")],1),t._v("를 참고하십시오.")]),t._v(" "),a("p",[a("a",{attrs:{id:"virtual_machine"}})]),t._v(" "),a("h2",{attrs:{id:"가상-머신-지원"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#가상-머신-지원"}},[t._v("#")]),t._v(" 가상 머신 지원")]),t._v(" "),a("p",[t._v("최신 Linux 배포판에서는 정상적으로 작동하여야 합니다.")]),t._v(" "),a("p",[t._v("다음 설정은 테스트 되었습니다.")]),t._v(" "),a("ul",[a("li",[t._v("VMWare Fusion 및 Ubuntu 14.04가 포함된 OS X(Parallels에서 GUI를 지원하는 Docker 컨테이너로 인해 X-Server가 충돌함).")])]),t._v(" "),a("p",[a("strong",[t._v("메모리")])]),t._v(" "),a("p",[t._v("가상 머신에 최소 4GB 메모리를 사용하십시오.")]),t._v(" "),a("p",[a("strong",[t._v("컴파일 문제")])]),t._v(" "),a("p",[t._v("다음과 같은 오류로 컴파일이 실패하는 경우:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("The bug is not reproducible, so it is likely a hardware or OS problem.\nc++: internal compiler error: Killed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("program cc1plus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("병렬 빌드를 비활성화하십시오.")]),t._v(" "),a("p",[a("strong",[t._v("VM 호스트에서 Docker 제어를 허용합니다.")])]),t._v(" "),a("p",[a("code",[t._v("/etc/defaults/docker")]),t._v("에 다음 줄을 추가합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOCKER_OPTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${DOCKER_OPTS}")]),t._v(' -H unix:///var/run/docker.sock -H 0.0.0.0:2375"')]),t._v("\n")])])]),a("p",[t._v("이제 호스트 운영체제에서 도커를 제어할 수 있습니다:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOCKER_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tcp://"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ip of your VM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":2375\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# run some docker command to see if it works, e.g. ps")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n")])])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);