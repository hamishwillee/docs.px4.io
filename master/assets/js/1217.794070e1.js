(window.webpackJsonp=window.webpackJsonp||[]).push([[1217],{2253:function(s,t,a){"use strict";a.r(t);var e=a(19),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"macos-개발-환경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos-개발-환경"}},[s._v("#")]),s._v(" MacOS 개발 환경")]),s._v(" "),a("p",[s._v("아래에서 macOS용 PX4 개발 환경 설정 방법을 설명합니다. PX4 빌드에 사용되어 집니다.")]),s._v(" "),a("ul",[a("li",[s._v("Pixhawk와 기타 NuttX 기반 하드웨어")]),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[s._v("jMAVSim 시뮬레이션")])],1),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[s._v("가제보 시뮬레이션")])],1)]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("DETAILS")]),s._v(" "),a("p",[s._v("애플 M1 맥북 사용자 Apple M1 Macbook이 있는 경우 x86 터미널을 설정하여 터미널을 x86으로 실행해야 합니다.")]),s._v(" "),a("ol",[a("li",[s._v("유틸리티 폴더("),a("strong",[s._v("Finder > 이동 메뉴 > 유틸리티")]),s._v(")에서 터미널 애플리케이션을 찾습니다.")]),s._v(" "),a("li",[a("em",[s._v("Terminal.app")]),s._v("을 선택하고 마우스 오른쪽 버튼으로 클릭한 다음 "),a("strong",[s._v("복제")]),s._v("를 선택합니다.")]),s._v(" "),a("li",[s._v("복제된 터미널 앱의 이름을 변경합니다(예: "),a("em",[s._v("x86 터미널")]),s._v("으로)")]),s._v(" "),a("li",[s._v("이름이 변경된 "),a("em",[s._v("x86 Terminal")]),s._v(" 앱을 선택하고 마우스 오른쪽 버튼을 클릭하고 **정보 입수*를 선택합니다.")]),s._v(" "),a("li",[a("strong",[s._v("Rosetta를 사용하여 열기")]),s._v(" 확인란을 선택하고, 창을 닫습니다.")]),s._v(" "),a("li",[s._v("현재 PX4 도구 모음을 지원하는 "),a("em",[s._v("x86 터미널")]),s._v("을 실행합니다.")])])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("이 설정은 PX4 개발 팀에서 지원합니다. 다른 대상을 빌드하려면 "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html#supported-targets"}},[s._v("다른 OS")]),s._v("(또는 "),a("RouterLink",{attrs:{to:"/ko/advanced/dev_env_unsupported.html"}},[s._v("지원되지 않는 개발 환경")]),s._v(")를 사용하여야 합니다.")],1)]),s._v(" "),a("h2",{attrs:{id:"영상-가이드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#영상-가이드"}},[s._v("#")]),s._v(" 영상 가이드")]),s._v(" "),a("p",[s._v("@"),a("a",{attrs:{href:"https://youtu.be/tMbMGiMs1cQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("유투브"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"homebrew-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-설치"}},[s._v("#")]),s._v(" Homebrew 설치")]),s._v(" "),a("p",[s._v("Homebrew 설치는 빠르고 쉽습니다: "),a("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[s._v("설치 방법"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"더-많은-열린-파일-활성화-ld-너무-많은-열린-파일-오류-처리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#더-많은-열린-파일-활성화-ld-너무-많은-열린-파일-오류-처리"}},[s._v("#")]),s._v(' 더 많은 열린 파일 활성화("LD: 너무 많은 열린 파일" 오류 처리)')]),s._v(" "),a("p",[a("code",[s._v("~/.zshenv")]),s._v(" 파일을 생성하거나 추가하고(터미널에서 "),a("code",[s._v("open ~/.zshenv")]),s._v(" 실행) 다음 줄을 추가합니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("ulimit")]),s._v(" -S -n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\n")])])]),a("h2",{attrs:{id:"python-버전-시행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-버전-시행"}},[s._v("#")]),s._v(" Python 버전 시행")]),s._v(" "),a("p",[a("code",[s._v("~/.zshrc")]),s._v(" 파일이 없으면 생성하여, 파일에 다음 줄을 추가합니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Point pip3 to MacOS system python 3 pip")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pip3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/pip3\n")])])]),a("h2",{attrs:{id:"공통-도구"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#공통-도구"}},[s._v("#")]),s._v(" 공통 도구")]),s._v(" "),a("p",[s._v("Homebrew를 설치 후, 셸에서 다음 명령을 실행하여 공통 도구를 설치합니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("brew tap PX4/px4\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" px4-dev\n")])])]),a("p",[s._v("필요한 파이썬 패키지들을 설치합니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install required packages using pip3")]),s._v("\npython3 -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --user pyserial empy toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if this fails with a permissions error, your Python install is in a system path - use this command instead:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -H python3 -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --user pyserial empy toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n")])])]),a("h2",{attrs:{id:"가제보-시뮬레이션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#가제보-시뮬레이션"}},[s._v("#")]),s._v(" 가제보 시뮬레이션")]),s._v(" "),a("p",[s._v("Gazebo로 SITL 시뮬레이션을 설치하려면:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --cask xquartz\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" px4-sim-gazebo\n")])])]),a("p",[s._v("jMAVSim과 함께 SITL 시뮬레이션을 사용하려면, 최신 버전의 Java(예: Java 15)를 설치합니다. They can be removed once it is fixed (along with this note).\n:::")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("PX4 v1.11 이상용 jMAVSim에는 JDK 15 이상의 버전이 필요합니다.")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("brew tap AdoptOpenJDK/openjdk\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --cask adoptopenjdk15\n")])])]),a("h2",{attrs:{id:"jmavsim-시뮬레이션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-시뮬레이션"}},[s._v("#")]),s._v(" jMAVSim 시뮬레이션")]),s._v(" "),a("p",[s._v("이전 버전의 경우 macOS 사용자는 "),a("code",[s._v('스레드 "main" java.lang.UnsupportedClassVersionError의 예외:')]),s._v(" 오류가 발생할 수 있습니다. 여기에서 수정 방법을 참고하십시오: "),a("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html#troubleshooting"}},[s._v("SITL이 있는 jMAVSim > 문제 해결")]),s._v(").")],1),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" px4-sim-jmavsim\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" px4-sim-jmavsim\n")])])]),a("p",[s._v("명령줄 도구 모음 설정후, 다음을 수행합니다.")]),s._v(" "),a("p",[s._v("For earlier versions macOS users might see the error "),a("code",[s._v('Exception in thread "main" java.lang.UnsupportedClassVersionError:')]),s._v(". You can find the fix in the "),a("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html#troubleshooting"}},[s._v("jMAVSim with SITL > Troubleshooting")]),s._v(").")],1)]),s._v(" "),a("h2",{attrs:{id:"다음-단계"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#다음-단계"}},[s._v("#")]),s._v(" 다음 단계")]),s._v(" "),a("p",[s._v("Once you have finished setting up the command-line toolchain:")]),s._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/dev_setup/vscode.html"}},[s._v("VSCode")]),s._v("를 설치합니다(명령줄에 IDE 사용을 선호하는 경우).")],1),s._v(" "),a("li",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("QGroundControl 일일 빌드"),a("OutboundLink")],1),s._v(" 설치 :::tip "),a("em",[s._v("일일 빌드")]),s._v("에는 릴리스 빌드에 숨겨진 개발 도구가 포함됩니다. 또한, 릴리스 빌드에서 아직 지원되지 않는 새로운 PX4 기능에 대한 액세스를 제공할 수도 있습니다.\n:::")]),s._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[s._v("빌드 지침")]),s._v("을 계속 진행합니다.")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);