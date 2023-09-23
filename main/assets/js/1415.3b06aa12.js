(window.webpackJsonp=window.webpackJsonp||[]).push([[1415],{2624:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"macos-개발-환경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos-개발-환경"}},[t._v("#")]),t._v(" MacOS 개발 환경")]),t._v(" "),a("p",[t._v("아래에서 macOS용 PX4 개발 환경 설정 방법을 설명합니다. PX4 빌드에 사용되어 집니다.")]),t._v(" "),a("ul",[a("li",[t._v("Pixhawk와 기타 NuttX 기반 하드웨어")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[t._v("jMAVSim 시뮬레이션")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic Simulation")])],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("이 설정은 PX4 개발 팀에서 지원합니다. 다른 대상을 빌드하려면 "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html#supported-targets"}},[t._v("다른 OS")]),t._v("(또는 "),a("RouterLink",{attrs:{to:"/ko/advanced/dev_env_unsupported.html"}},[t._v("지원되지 않는 개발 환경")]),t._v(")를 사용하여야 합니다.")],1)]),t._v(" "),a("h2",{attrs:{id:"영상-가이드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#영상-가이드"}},[t._v("#")]),t._v(" 영상 가이드")]),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"https://youtu.be/tMbMGiMs1cQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"base-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-setup"}},[t._v("#")]),t._v(" Base Setup")]),t._v(" "),a("p",[t._v('The "base" macOS setup installs the tools needed for building firmware, and includes the common tools that will be needed for installing/using the simulators.')]),t._v(" "),a("h3",{attrs:{id:"environment-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-setup"}},[t._v("#")]),t._v(" Environment Setup")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("DETAILS")]),t._v(" "),a("p",[t._v("애플 M1 맥북 사용자 Apple M1 Macbook이 있는 경우 x86 터미널을 설정하여 터미널을 x86으로 실행해야 합니다.")]),t._v(" "),a("ol",[a("li",[t._v("유틸리티 폴더("),a("strong",[t._v("Finder > 이동 메뉴 > 유틸리티")]),t._v(")에서 터미널 애플리케이션을 찾습니다.")]),t._v(" "),a("li",[a("em",[t._v("Terminal.app")]),t._v("을 선택하고 마우스 오른쪽 버튼으로 클릭한 다음 "),a("strong",[t._v("복제")]),t._v("를 선택합니다.")]),t._v(" "),a("li",[t._v("복제된 터미널 앱의 이름을 변경합니다(예: "),a("em",[t._v("x86 터미널")]),t._v("으로)")]),t._v(" "),a("li",[t._v("이름이 변경된 "),a("em",[t._v("x86 Terminal")]),t._v(" 앱을 선택하고 마우스 오른쪽 버튼을 클릭하고 **정보 입수*를 선택합니다.")]),t._v(" "),a("li",[a("strong",[t._v("Rosetta를 사용하여 열기")]),t._v(" 확인란을 선택하고, 창을 닫습니다.")]),t._v(" "),a("li",[t._v("Run the "),a("em",[t._v("x86 Terminal")]),t._v(" as usual, which will fully support the current PX4 toolchain")])])]),t._v(" "),a("p",[t._v("First set up the environment")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Enable more open files by appending the following line to the "),a("code",[t._v("~/.zshenv")]),t._v(" file (creating it if necessary):")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("ulimit")]),t._v(" -S -n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.zshenv\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If you don't do this, the build toolchain may report the error: "),a("code",[t._v('"LD: too many open files"')])])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Enforce Python 3 by appending the following lines to "),a("code",[t._v("~/.zshenv")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Point pip3 to MacOS system python 3 pip")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("pip3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/bin/pip3\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"공통-도구"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#공통-도구"}},[t._v("#")]),t._v(" 공통 도구")]),t._v(" "),a("p",[t._v("To setup the environment to be able to build for Pixhawk/NuttX hardware (and install the common tools for using simulators):")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Install Homebrew by following these "),a("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("installation instructions"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Run these commands in your shell to install the common tools:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew tap PX4/px4\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-dev\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Install the required Python packages:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install required packages using pip3")]),t._v("\npython3 -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pyserial empty toml numpy pandas jinja2 pyyaml pyros-genmsg packaging kconfiglib future jsonschema\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if this fails with a permissions error, your Python install is in a system path - use this command instead:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H python3 -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pyserial empty toml numpy pandas jinja2 pyyaml pyros-genmsg packaging kconfiglib future jsonschema\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"gazebo-classic-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-classic-simulation"}},[t._v("#")]),t._v(" Gazebo Classic Simulation")]),t._v(" "),a("p",[t._v("To setup the environment for "),a("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" simulation:")],1),t._v(" "),a("ol",[a("li",[a("p",[t._v("Run the following commands in your shell:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew unlink tbb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i.bak "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/disable! date:/s/^/  /; /disable! date:/s/./#/3'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("brew --prefix"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/Library/Taps/homebrew/homebrew-core/Formula/tbb@2020.rb\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tbb@2020\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" tbb@2020\n")])])]),a("p",[t._v("jMAVSim과 함께 SITL 시뮬레이션을 사용하려면, 최신 버전의 Java(예: Java 15)를 설치합니다. They can be removed once it is fixed (along with this note).\n:::")])]),t._v(" "),a("li",[a("p",[t._v("To install SITL simulation with Gazebo Classic:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask temurin\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask xquartz\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim-gazebo\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Run the macOS setup script: "),a("code",[t._v("PX4-Autopilot/Tools/setup/macos.sh")]),t._v(" The easiest way to do this is to clone the PX4 source, and then run the script from the directory, as shown:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot/Tools/setup\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" macos.sh\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"jmavsim-시뮬레이션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-시뮬레이션"}},[t._v("#")]),t._v(" jMAVSim 시뮬레이션")]),t._v(" "),a("p",[t._v("To setup the environment for "),a("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" simulation:")],1),t._v(" "),a("ol",[a("li",[a("p",[t._v("Install a recent version of Java (e.g. Java 15). You can download "),a("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 15 (or later) from Oracle"),a("OutboundLink")],1),t._v(" or use "),a("a",{attrs:{href:"https://adoptium.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eclipse Temurin"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask temurin\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Install jMAVSim:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim-jmavsim\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4 v1.11 and beyond require at least JDK 15 for jMAVSim simulation.")]),t._v(" "),a("p",[t._v("For earlier versions, macOS users might see the error "),a("code",[t._v('Exception in thread "main" java.lang.UnsupportedClassVersionError:')]),t._v(". You can find the fix in the "),a("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html#troubleshooting"}},[t._v("jMAVSim with SITL > Troubleshooting")]),t._v(").")],1)])])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("h2",{attrs:{id:"다음-단계"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#다음-단계"}},[t._v("#")]),t._v(" 다음 단계")]),t._v(" "),a("p",[t._v("Once you have finished setting up the command-line toolchain:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v("를 설치합니다(명령줄에 IDE 사용을 선호하는 경우).")],1),t._v(" "),a("li",[t._v("Install the "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("daily build")]),t._v(" includes development tools that are hidden in release builds. 또한, 릴리스 빌드에서 아직 지원되지 않는 새로운 PX4 기능에 대한 액세스를 제공할 수도 있습니다.")])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("빌드 지침")]),t._v("을 계속 진행합니다.")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);