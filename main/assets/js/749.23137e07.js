(window.webpackJsonp=window.webpackJsonp||[]).push([[749],{2585:function(t,e,s){"use strict";s.r(e);var a=s(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"arch-linux-개발-환경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arch-linux-개발-환경"}},[t._v("#")]),t._v(" Arch Linux 개발 환경")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("이 개발 환경은 "),a("RouterLink",{attrs:{to:"/ko/advanced/dev_env_unsupported.html"}},[t._v("지원되지 않습니다")]),t._v(". 지원되는 환경과 도구에 대한 정보는 "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("도구 모음 설치")]),t._v("를 참고하십시오!")],1)]),t._v(" "),a("p",[t._v("PX4-Autopilot 저장소는 PX4 개발을 위하여 Arch Linux 설치 스크립트를 제공합니다: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/arch.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tools/setup/arch.sh"),a("OutboundLink")],1),t._v(". ")]),t._v(" "),a("p",[t._v("The script installs (by default) all tools to build PX4 for NuttX targets and run simulation with "),a("em",[t._v("jMAVsim")]),t._v(". You can additionally install the "),a("em",[t._v("Gazebo-Classic")]),t._v(" simulator by specifying the command line argument: "),a("code",[t._v("--gazebo")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:s(716),alt:"Arch Linux 가제보"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("이 설명서는 Arch Linux 보다 설정하기 편리하여, "),a("a",{attrs:{href:"https://manjaro.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Manjaro"),a("OutboundLink")],1),t._v("(Arch 기반 배포)에서 테스트하였습니다.")])]),t._v(" "),a("p",[t._v("스크립트를 가져와 실행하려면 다음 중 하나를 실행합니다.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("PX4 소스 코드를 다운로드")]),t._v("하고 스크립트를 실행합니다."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone https://github.com/PX4/PX4-Autopilot.git\nbash PX4-Autopilot/Tools/setup/arch.sh\n")])])])],1),t._v(" "),a("li",[t._v("필요한 스크립트만 다운로드하여 실행합니다."),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/arch.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/requirements.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" arch.sh\n")])])])])]),t._v(" "),a("p",[t._v("스크립트는 다음의 매개변수를 사용합니다.")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("--gazebo")]),t._v(": 이 매개변수를 추가하여 "),a("a",{attrs:{href:"https://aur.archlinux.org/packages/gazebo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AUR"),a("OutboundLink")],1),t._v("에서 Gazebo를 설치합니다. :::note Gazebo는 소스에서 컴파일됩니다. 설치에 시간이 걸리고, "),a("code",[t._v("sudo")]),t._v(" 비밀번호를 여러 번 입력하여야 합니다(종속성의 경우).\n:::")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("--no-nuttx")]),t._v(": NuttX/Pixhawk 도구 모음을 설치하지 않습니다(즉, 시뮬레이션만 사용하는 경우).")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("--no-sim-tools")]),t._v(": jMAVSim/Gazebo를 설치하지 않습니다(예: Pixhawk/NuttX 대상만 대상으로 하는 경우).")])])])])}),[],!1,null,null,null);e.default=o.exports},716:function(t,e,s){t.exports=s.p+"assets/img/arch-gazebo.f32cc6d9.png"}}]);