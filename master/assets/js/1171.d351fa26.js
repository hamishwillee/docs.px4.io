(window.webpackJsonp=window.webpackJsonp||[]).push([[1171],{2180:function(t,e,a){"use strict";a.r(e);var _=a(19),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"시스템-시작"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시스템-시작"}},[t._v("#")]),t._v(" 시스템 시작")]),t._v(" "),a("p",[t._v("PX4 시작은 쉘 스크립트에 의해 제어됩니다. NuttX에서는 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d"),a("OutboundLink")],1),t._v(" 폴더에 있습니다. 이 중 일부는 Posix(Linux/MacOS)에서도 사용됩니다. POSIX 전용 스크립트는 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d-posix",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d-posix"),a("OutboundLink")],1),t._v(" 폴더에 있습니다.")]),t._v(" "),a("p",[t._v("숫자와 밑줄로 시작하는 모든 파일(예: "),a("code",[t._v("10000_airplane")]),t._v(")은 기체 설정을 미리 정의합니다. 빌드시 기체 선택 UI에 대해 "),a("a",{attrs:{href:"http://qgroundcontrol.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),a("OutboundLink")],1),t._v("에 의해 구문 분석되는 "),a("code",[t._v("airframes.xml")]),t._v(" 파일로 내보내집니다. 새로운 구성을 추가하는 방법은 "),a("RouterLink",{attrs:{to:"/ko/dev_airframes/adding_a_new_frame.html"}},[t._v("여기")]),t._v("를 참고하십시오.")],1),t._v(" "),a("p",[t._v("나머지 파일은 공통 시작 로직의 일부입니다. 첫 번째 실행 파일은 다른 모든 스크립트를 호출하는 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("init.d/rcS"),a("OutboundLink")],1),t._v(" 스크립트(또는 Posix의 경우 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("init.d-posix/rcS"),a("OutboundLink")],1),t._v(")입니다.")]),t._v(" "),a("p",[t._v("다음 섹션은 PX4가 실행되는 운영 체제에 따라 달라집니다.")]),t._v(" "),a("h2",{attrs:{id:"posix-linux-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#posix-linux-macos"}},[t._v("#")]),t._v(" POSIX (Linux/MacOS)")]),t._v(" "),a("p",[t._v("Posix에서 시스템 셸은 스크립트 인터프리터로 사용됩니다(예: /bin/sh, Ubuntu에서 dash에 심볼릭 링크됨). 동작하기 위한 몇가지 조건이 있습니다.")]),t._v(" "),a("ul",[a("li",[t._v("PX4 모듈은 시스템에서 개별적으로 실행할 수 있어야합니다. 이 동작은 심볼릭 링크로 처리합니다. 각 모듈에 대해 심볼릭 링크 "),a("code",[t._v("px4-<module> -> px4")]),t._v("는 빌드 폴더의 "),a("code",[t._v("bin")]),t._v(" 디렉토리에 생성됩니다. 실행시 바이너리 경로를 확인("),a("code",[t._v("argv[0]")]),t._v(")하며, 모듈인 경우("),a("code",[t._v("px4-")]),t._v("로 시작)에는 메인 px4 인스턴스(아래 참조)에 명령을 전송합니다.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("px4-")]),t._v(" 접두사는 시스템 명령(예: "),a("code",[t._v("shutdown")]),t._v(")과의 충돌을 피하기 위해 사용되며, "),a("code",[t._v("px4-<TAB>")]),t._v("를 입력하여 간단한 탭 완성을 사용할 수 있습니다.")])]),t._v(" "),a("ul",[a("li",[t._v("쉘은 심볼릭 링크를 찾을 위치를 알고 있어야 합니다. 이를 위하여, 기호 링크가 있는 "),a("code",[t._v("bin")]),t._v(" 디렉토리가 시작 스크립트를 실행하기 직전에 "),a("code",[t._v("PATH")]),t._v(" 변수에 추가됩니다.")]),t._v(" "),a("li",[t._v("쉘은 각 모듈을 새로운(클라이언트) 프로세스로 시작합니다. 각 클라이언트 프로세스는 실제 모듈이 스레드로 실행되는 px4(서버)의 기본 인스턴스와 통신합니다. 이 일련의 과정은 "),a("a",{attrs:{href:"http://man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("UNIX 소켓"),a("OutboundLink")],1),t._v("으로 처리합니다. 서버는 클라이언트가 연결하고 명령을 보낼 수 있는 소켓으로 수신 대기합니다. 그런 다음 서버는 출력과 반환 코드를 다시 클라이언트로 전송합니다.")]),t._v(" "),a("li",[t._v("시작 스크립트는 "),a("code",[t._v("px4-")]),t._v(" 접두어를 쓰지 않고, "),a("code",[t._v("commander start")]),t._v(" 명령처럼 모듈을 직접 호출합니다. 이것은 alias를 사용하여 작동합니다. 각 모듈에 대해 "),a("code",[t._v("alias <module>=px4-<module>")]),t._v(" 형식의 별칭이 "),a("code",[t._v("bin/px4-alias.sh")]),t._v(" 파일에 생성됩니다.")]),t._v(" "),a("li",[a("code",[t._v("rcS")]),t._v(" 스크립트는 PX4 메인 인스턴스에서 실행됩니다. 모듈을 시작하지 않고, 먼저 "),a("code",[t._v("PATH")]),t._v(" 변수를 업데이트한 다음 "),a("code",[t._v("rcS")]),t._v(" 파일을 인수로 사용하여 셸을 실행합니다.")]),t._v(" "),a("li",[t._v("그 외에도, 다중 기체 시뮬레이션을 위하여 여러 서버 인스턴스를 시작할 수 있습니다. 클라이언트는 "),a("code",[t._v("--instance")]),t._v("로 인스턴스를 선택합니다. 인스턴스는 "),a("code",[t._v("$px4_instance")]),t._v(" 변수를 통하여 스크립트에서 사용할 수 있습니다.")])]),t._v(" "),a("p",[t._v("모듈은 PX4가 시스템에서 실행 중이면, 터미널에서 실행할 수 있습니다. 예를 들어:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd <PX4-Autopilot>/build/px4_sitl_default/bin\n./px4-commander takeoff\n./px4-listener sensor_accel\n")])])]),a("h3",{attrs:{id:"동적-모듈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#동적-모듈"}},[t._v("#")]),t._v(" 동적 모듈")]),t._v(" "),a("p",[t._v("일반적으로 모든 모듈은 단일 PX4 실행 파일로 컴파일됩니다. 그러나, POSIX에는 "),a("code",[t._v("dyn")]),t._v(" 명령을 사용하여 PX4에 로드할 수 있는 별도의 파일로 모듈을 컴파일하는 옵션이 있습니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dyn ./test.px4mod\n")])])]),a("h2",{attrs:{id:"nuttx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuttx"}},[t._v("#")]),t._v(" NuttX")]),t._v(" "),a("p",[t._v("NuttX에는 통합된 쉘 인터프리터("),a("a",{attrs:{href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=139629410",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttShell(NSH)"),a("OutboundLink")],1),t._v(")에서 스크립트를 직접 실행할 수 있습니다.")]),t._v(" "),a("h3",{attrs:{id:"시스템-부팅-디버깅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시스템-부팅-디버깅"}},[t._v("#")]),t._v(" 시스템 부팅 디버깅")]),t._v(" "),a("p",[t._v("소프트웨어 구성 요소의 드라이버 오류로 인하여 부팅이 중단되지는 않습니다. 이것은 시작 스크립트에서 "),a("code",[t._v("set +e")]),t._v("를 통하여 제어됩니다.")]),t._v(" "),a("p",[t._v("부팅 순서는 "),a("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("시스템 콘솔")]),t._v("을 연결하고, 보드의 전원을 껐다 켜서 디버깅할 수 있습니다. 부팅 로그에는 부팅 순서에 대한 자세한 정보가 포함되어 있으며, 부팅 중단 이유에 대한 힌트가 포함되어 있습니다.")],1),t._v(" "),a("h4",{attrs:{id:"일반적인-부팅-실패-사례"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#일반적인-부팅-실패-사례"}},[t._v("#")]),t._v(" 일반적인 부팅 실패 사례")]),t._v(" "),a("ul",[a("li",[t._v("맞춤형 애플리케이션의 경우: 시스템에 RAM이 부족합니다. "),a("code",[t._v("free")]),t._v(" 명령을 실행하여 사용 가능한 RAM의 용량을 확인합니다.")]),t._v(" "),a("li",[t._v("스택 추적을 초래하는 소프트웨어 오류 또는 주장")])]),t._v(" "),a("h3",{attrs:{id:"시스템-시작-변경"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시스템-시작-변경"}},[t._v("#")]),t._v(" 시스템 시작 변경")]),t._v(" "),a("p",[t._v("대부분의 경우 기본 부팅을 사용자 지정하는 것이 더 나은 접근 방식이며, 아래에서 자세하게 설명합니다. 전체 부팅을 변경 하는 경우 microSD 카드의 "),a("code",[t._v("etc")]),t._v(" 폴더에 "),a("code",[t._v("/fs/microsd/etc/rc.txt")]),t._v(" 파일을 생성합니다. 이 파일이 없으면, 시스템에서는 아무 것도 자동으로 시작되지 않습니다.")]),t._v(" "),a("h3",{attrs:{id:"시스템-시작-사용자-정의"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시스템-시작-사용자-정의"}},[t._v("#")]),t._v(" 시스템 시작 사용자 정의")]),t._v(" "),a("p",[t._v("시스템 시작을 사용자가 정의하는 가장 좋은 방법은 "),a("RouterLink",{attrs:{to:"/ko/dev_airframes/adding_a_new_frame.html"}},[t._v("새로운 기체 구성")]),t._v("을 도입하는 것입니다. 약간의 변경만 하는 경우(예: 하나 이상의 응용 프로그램을 시작하거나 다른 믹서를 사용하는 경우)에는 시작시 특수 후크를 사용할 수 있습니다.")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("시스템 부트 파일은 UNIX LINE ENDINGS가 필요한 UNIX FILES입니다. Windows에서 편집하는 경우 적절한 편집기를 사용하여야 합니다.")])]),t._v(" "),a("p",[t._v("세 가지 주요 후크가 있습니다. microsd 카드의 루트 폴더는 "),a("code",[t._v("/fs/microsd")]),t._v(" 경로로 식별됩니다.")]),t._v(" "),a("ul",[a("li",[t._v("/fs/microsd/etc/config.txt")]),t._v(" "),a("li",[t._v("/fs/microsd/etc/extras.txt")]),t._v(" "),a("li",[t._v("/fs/microsd/etc/mixers/NAME_OF_MIXER")])]),t._v(" "),a("h4",{attrs:{id:"구성-사용자-정의-config-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구성-사용자-정의-config-txt"}},[t._v("#")]),t._v(" 구성 사용자 정의(config.txt)")]),t._v(" "),a("p",[a("code",[t._v("config.txt")]),t._v(" 파일을 사용하여 쉘 변수를 수정할 수 있습니다. 기본 시스템이 구성후나 부팅 "),a("em",[t._v("전에")]),t._v(" 로드됩니다.")]),t._v(" "),a("h4",{attrs:{id:"추가-응용-프로그램-시작"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-응용-프로그램-시작"}},[t._v("#")]),t._v(" 추가 응용 프로그램 시작")]),t._v(" "),a("p",[a("code",[t._v("extras.txt")]),t._v("는 기본 시스템 부팅 후에, 추가로 애플리케이션을 시작할 수 있습니다. 일반적으로, 페이로드 콘트롤러나 유사한 선택적 사용자 지정 구성 요소들입니다.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("시스템 부팅 파일에서 잘못된 명령을 실행하면, 부팅이 실패할 수 있습니다. 일반적으로 시스템은 부팅 실패 후 mavlink 메시지를 스트리밍하지 않습니다. 이 경우 시스템 콘솔에 인쇄된 오류 메시지를 확인하여야 합니다. 이 방식으로 펌웨어를 다시 컴파일하지 않고 믹서 파일을 개별 설정할 수 있습니다.")]),t._v(" "),a("p",[t._v("다음 예는 사용자 정의 애플리케이션 시작 방법을 설명합니다.")]),t._v(" "),a("ul",[a("li",[t._v("다음 내용으로 SD 카드 "),a("code",[t._v("etc/extras.txt")]),t._v("에 파일을 생성합니다."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("custom_app start\n")])])])]),t._v(" "),a("li",[a("code",[t._v("set +e")]),t._v("과 "),a("code",[t._v("set -e")]),t._v(" 명령어를 사용하여 선택적으로 명령을 지정할 수 있습니다."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("set +e\noptional_app start      # Will not result in boot failure if optional_app is unknown or fails\nset -e\n\nmandatory_app start     # Will abort boot if mandatory_app is unknown or fails\n")])])])])]),t._v(" "),a("h4",{attrs:{id:"커스텀-믹서-시작하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#커스텀-믹서-시작하기"}},[t._v("#")]),t._v(" 커스텀 믹서 시작하기")]),t._v(" "),a("p",[t._v("기본적으로 시스템은 "),a("code",[t._v("/etc/mixers")]),t._v("에서 믹서를 로드합니다. "),a("code",[t._v("/fs/microsd/etc/mixers")]),t._v("에 같은 이름의 파일이 있는 경우에는 이 파일이 대신 로드됩니다. 이를 통하여 펌웨어를 다시 컴파일할 필요 없이, 믹서 파일을 사용자가 정의할 수 있습니다.")]),t._v(" "),a("h5",{attrs:{id:"예제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예제"}},[t._v("#")]),t._v(" 예제")]),t._v(" "),a("p",[t._v("다음 예는 사용자 지정 Aux 믹서를 추가하는 방법입니다.")]),t._v(" "),a("ul",[a("li",[t._v("믹서 콘텐츠로 SD 카드에 "),a("code",[t._v("etc/mixers/gimbal.aux.mix")]),t._v(" 파일을 생성합니다.")]),t._v(" "),a("li",[t._v("이를 사용하기 위하여, 아래의 내용으로 추가 파일 "),a("code",[t._v("etc/config.txt")]),t._v("를 생성합니다."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("set MIXER_AUX gimbal\nset PWM_AUX_OUT 1234\nset PWM_AUX_DISARMED 1500\nset PWM_AUX_MIN 1000\nset PWM_AUX_MAX 2000\nset PWM_AUX_RATE 50 \n")])])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);