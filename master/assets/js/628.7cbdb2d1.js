(window.webpackJsonp=window.webpackJsonp||[]).push([[628],{2242:function(a,r,e){"use strict";e.r(r);var t=e(19),s=Object(t.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"가난한-자의-샘플링-프로파일러"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#가난한-자의-샘플링-프로파일러"}},[a._v("#")]),a._v(" 가난한 자의 샘플링 프로파일러")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/platforms/nuttx/Debug/poor-mans-profiler.sh",target:"_blank",rel:"noopener noreferrer"}},[a._v("Poor Man's Sampling Profiler"),t("OutboundLink")],1),a._v("(PMSP) 셸 스크립트를 사용하여 PX4 성능 평가 방법을 설명합니다. 이것은 원래 "),t("a",{attrs:{href:"https://poormansprofiler.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Mark Callaghan과 Domas Mituzas"),t("OutboundLink")],1),a._v("가 발명한 알려진 방법의 구현입니다.")]),a._v(" "),t("h2",{attrs:{id:"접근"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#접근"}},[a._v("#")]),a._v(" 접근")]),a._v(" "),t("p",[a._v("PMSP는 현재 스택 추적을 샘플링하기 위하여, 주기적으로 펌웨어 실행을 중단하여 작동하는 쉘 스크립트입니다. 샘플링된 스택 추적은 텍스트 파일에 추가됩니다. 샘플링이 완료되면(일반적으로 약 1시간 이상 소요) 수집된 스택 추적이 "),t("em",[a._v("접혀집니다")]),a._v(". "),t("em",[a._v("접기")]),a._v("의 결과는 모든 유사한 스택 추적이 함께 결합되고, 해당 발생 횟수가 기록된다는 점(프로그램의 같은 지점에서 얻은 것)을 제외하고 동일한 스택 추적을 포함하는 또 다른 텍스트 파일입니다. 그런 다음 접힌 스택이 시각화 스크립트에 제공되며, 이를 위하여 "),t("a",{attrs:{href:"http://www.brendangregg.com/flamegraphs.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("FlameGraph - 오픈 소스 스택 추적 시각화 도구"),t("OutboundLink")],1),a._v("를 사용합니다.")]),a._v(" "),t("h2",{attrs:{id:"기본-사용법"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#기본-사용법"}},[a._v("#")]),a._v(" 기본 사용법")]),a._v(" "),t("h3",{attrs:{id:"전제-조건"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[a._v("#")]),a._v(" 전제 조건")]),a._v(" "),t("p",[a._v("프로파일러는 GDB에서 임베디드 대상에서 PX4를 실행합니다. 따라서, 대상을 프로파일링하기 전에 프로파일링할 하드웨어가 있어야 하고, 해당 하드웨어에 펌웨어를 컴파일하고 업로드하여야 합니다. 그런 다음, GDB 서버를 실행하고 보드와 상호 작용하려면, DroneCode Probe와 같은 "),t("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html#debug-probes"}},[a._v("SWD(JTAG) 하드웨어 디버깅 인터페이스")]),a._v("가 필요합니다.")],1),a._v(" "),t("h3",{attrs:{id:"디버거-장치-결정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#디버거-장치-결정"}},[a._v("#")]),a._v(" 디버거 장치 결정")]),a._v(" "),t("p",[t("code",[a._v("poor-mans-profiler.sh")]),a._v("는 "),t("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html#dronecode-probe"}},[a._v("DroneCode Probe")]),a._v("와 함께 사용하는 경우에는 올바른 USB 장치를 자동으로 감지하고 사용합니다. 다른 종류의 프로브를 사용하는 경우에는 디버거가 있는 특정 _기기_를 전달하여야 할 수 있습니다. bash 명령 "),t("code",[a._v("ls -alh /dev/serial/by-id/")]),a._v("을 사용하여, Ubuntu에서 가능한 장치를 열거할 수 있습니다. 예를 들어, 다음 장치는 USB를 통해 연결된 Pixhawk 4 및 DroneCode Probe로 열거됩니다.")],1),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("user@ubuntu:~/PX4-Autopilot$ ls -alh /dev/serial/by-id/\ntotal 0\ndrwxr-xr-x 2 root root 100 Apr 23 18:57 .\ndrwxr-xr-x 4 root root  80 Apr 23 18:48 ..\nlrwxrwxrwx 1 root root  13 Apr 23 18:48 usb-3D_Robotics_PX4_FMU_v5.x_0-if00 -> ../../ttyACM0\nlrwxrwxrwx 1 root root  13 Apr 23 18:57 usb-Black_Sphere_Technologies_Black_Magic_Probe_BFCCB401-if00 -> ../../ttyACM1\nlrwxrwxrwx 1 root root  13 Apr 23 18:57 usb-Black_Sphere_Technologies_Black_Magic_Probe_BFCCB401-if02 -> ../../ttyACM2\n")])])]),t("p",[a._v("이 경우 스크립트는 "),t("code",[a._v("*Black_Magic_Probe*-if00")]),a._v("이라는 장치를 자동으로 선택합니다. 그러나, 다른 장치를 사용 중이면, 위의 목록에서 적절한 ID를 찾을 수 있습니다.")]),a._v(" "),t("p",[a._v("그런 다음, 다음과 같이 "),t("code",[a._v("--gdbdev")]),a._v(" 인수를 사용하여 적절한 장치를 전달합니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./poor-mans-profiler.sh --elf"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("build/px4_fmu-v4_default/px4_fmu-v4_default.elf --nsamples"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("30000")]),a._v(" --gdbdev"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/dev/ttyACM2\n")])])]),t("h3",{attrs:{id:"실행"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#실행"}},[a._v("#")]),a._v(" 실행")]),a._v(" "),t("p",[a._v("프로파일러의 기본 사용법은 빌드 시스템을 통하여 사용할 수 있습니다. 예를 들어, 다음 명령은 10000개의 샘플로 px4_fmu-v4pro 대상을 빌드하고, 프로파일링합니다("),t("em",[a._v("FlameGraph")]),a._v("를 가져와 필요에 따라 경로에 추가).")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("make px4_fmu-v4pro_default profile\n")])])]),t("p",[a._v("샘플 수 설정을 포함하여 빌드 프로세스를 더 자세히 제어하려면, "),t("a",{attrs:{href:"#implementation"}},[a._v("구현")]),a._v("을 참고하십시오.")]),a._v(" "),t("h2",{attrs:{id:"출력-내용-이해"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#출력-내용-이해"}},[a._v("#")]),a._v(" 출력 내용 이해")]),a._v(" "),t("p",[a._v("예제 출력의 스크린샷이 아래에 제공됩니다(여기에서는 대화형이 아님에 유의).")]),a._v(" "),t("p",[t("img",{attrs:{src:e(689),alt:"FlameGraph 예제"}})]),a._v(" "),t("p",[a._v("플레임 그래프에서 수평 레벨은 스택 프레임을 나타내는 반면, 각 프레임의 너비는 샘플링된 횟수에 비례합니다. 결과적으로 함수가 샘플링되는 횟수는 실행 빈도에 시간을 곱한 값에 비례합니다.")]),a._v(" "),t("h2",{attrs:{id:"가능한-이슈들"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#가능한-이슈들"}},[a._v("#")]),a._v(" 가능한 이슈들")]),a._v(" "),t("p",[a._v("스크립트는 임시 솔루션으로 개발되었으므로 몇 가지 문제가 있습니다. 사용중에 다음 내용을 확인하십시오:")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("GDB가 오작동하는 경우 스크립트가 이를 감지하지 못하고 계속 실행될 수 있습니다. 이 경우, 명백하게 가용한 스택이 나타나지 않습니다. 이를 피하기 위해 사용자는 가장 최근에 GDB를 호출한 stderr 출력이 포함된 "),t("code",[a._v("/tmp/pmpn-gdberr.log")]),a._v(" 파일을 주기적으로 확인하여야 합니다. 앞으로 스크립트는 종료 코드를 통하여 문제를 나타내는 자동 모드에서 GDB를 호출하도록 수정되어야 합니다.")])]),a._v(" "),t("li",[t("p",[a._v("때때로 GDB는 스택 추적을 샘플링하는 동안 정지합니다. 이 문제가 나타나면, 대상의 동작이 알 수 없는 이유로 종료됩니다. 해결책은 스크립트를 일단 직접 멈추고 "),t("code",[a._v("--append")]),a._v(" 옵션을 붙여 다시 실행하는 것입니다. 앞으로 모든 GDB 호출에 대해 시간 초과를 적용하도록 스크립트를 수정할 예정입니다.")])]),a._v(" "),t("li",[t("p",[a._v("다중 스레드 환경을 지원하지 않습니다. 단일 코어 임베디드 대상은 항상 하나의 스레드에서 실행되기 때문에 영향을 미치지 않지만, 이 제한으로 인하여 프로파일러는 다른 많은 응용 프로그램과 호환되지 않습니다. 향후에는 샘플당 여러 스택 추적을 지원하도록 스택 폴더를 수정하여야 합니다.")])])]),a._v(" "),t("h2",{attrs:{id:"구현"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#구현"}},[a._v("#")]),a._v(" 구현")]),a._v(" "),t("p",[a._v("스크립트는 "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/platforms/nuttx/Debug/poor-mans-profiler.sh",target:"_blank",rel:"noopener noreferrer"}},[a._v("/platforms/nuttx/Debug/poor-mans-profiler.sh"),t("OutboundLink")],1),a._v("에 있습니다. 실행되면 지정된 시간 간격으로 지정된 수의 샘플을 수행합니다. 수집된 샘플은 시스템 임시 디렉토리(일반적으로 "),t("code",[a._v("/tmp")]),a._v(")의 텍스트 파일에 저장됩니다. 샘플링이 완료되면 스크립트는 자동으로 스택 폴더를 호출하며, 그 결과는 임시 디렉토리의 인접 파일에 저장됩니다. 스택이 성공적으로 접힌 경우에는 스크립트는 "),t("em",[a._v("FlameGraph")]),a._v(" 스크립트를 호출하고, 결과를 대화형 SVG 파일에 저장합니다. 모든 이미지 뷰어가 대화형 이미지를 지원하는 것은 아닙니다. 결과 SVG를 웹 브라우저에서 여는 것이 좋습니다.")]),a._v(" "),t("p",[a._v("FlameGraph 스크립트는 "),t("code",[a._v("PATH")]),a._v("에 있어야 합니다. 그렇지 않으면 PMSP가 실행을 거부합니다.")]),a._v(" "),t("p",[a._v("PMSP는 GDB를 사용하여 스택 추적을 수집합니다. 현재 "),t("code",[a._v("arm-none-eabi-gdb")]),a._v("를 사용하고 있으며, 향후 다른 도구 모음이 추가될 수 있습니다.")]),a._v(" "),t("p",[a._v("메모리 위치를 기호에 매핑하려면, 스크립트가 현재 대상에서 실행 중인 실행 파일을 참조하여야 합니다. 이것은 현재 실행 중인 ELF의 위치를 가리키는 경로(저장소의 루트에 상대적)를 예상하는 옵션 "),t("code",[a._v("--elf=<file>")]),a._v("으로 실행됩니다.")]),a._v(" "),t("p",[a._v("사용 예:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./poor-mans-profiler.sh --elf"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("build/px4_fmu-v4_default/px4_fmu-v4_default.elf --nsamples"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("30000")]),a._v("\n")])])]),t("p",[a._v("스크립트를 실행할 때마다 이전 스택을 덮어씁니다. 덮어쓰지 않고 이전 스택에 추가하려면, "),t("code",[a._v("--append")]),a._v(" 옵션을 사용하십시오.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./poor-mans-profiler.sh --elf"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("build/px4_fmu-v4_default/px4_fmu-v4_default.elf --nsamples"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("30000")]),a._v(" --append\n")])])]),t("p",[a._v("예상과 같이, "),t("code",[a._v("--append")]),a._v("와 함께 "),t("code",[a._v("--nsamples=0")]),a._v("은 대상에 전혀 액세스하지 않고 SVG만 재생성하도록 스크립트에 지시합니다.")]),a._v(" "),t("p",[a._v("어떻게 작동하는지 더 깊이 이해하려면 스크립트를 분석하십시오.")])])}),[],!1,null,null,null);r.default=s.exports},689:function(a,r,e){a.exports=e.p+"assets/img/flamegraph-example.6536b608.png"}}]);