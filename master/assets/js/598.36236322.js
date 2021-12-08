(window.webpackJsonp=window.webpackJsonp||[]).push([[598],{2107:function(e,t,a){"use strict";a.r(t);var l=a(19),s=Object(l.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"우분투에-인텔-리얼센스-r200-드라이버-설치"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#우분투에-인텔-리얼센스-r200-드라이버-설치"}},[e._v("#")]),e._v(" 우분투에 인텔 리얼센스 R200 드라이버 설치")]),e._v(" "),l("p",[e._v("이 튜토리얼에서는 촬영 이미지를 ROS(Robot Operation System)를 통하여 액세스할 수 있도록, Linux 환경에서 Intel RealSense R200 카메라 드라이버를 설치 방법을 설명합니다. RealSense R200 카메라 헤드는 다음과 같습니다.")]),e._v(" "),l("p",[l("img",{attrs:{src:a(449),alt:"인텔 리얼센스 카메라 전면"}})]),e._v(" "),l("p",[e._v("버추어 박스의 게스트 운영체제로 동작하는 우분투 운영체제(OS)에서 드라이버를 설치합니다. Virtual Box가 실행되는 호스트 컴퓨터, Virtual Box 및 게스트 시스템의 사양은 다음과 같습니다.")]),e._v(" "),l("ul",[l("li",[e._v("호스트 운영체제: 윈도우 8")]),e._v(" "),l("li",[e._v("프로세서: Intel(R) Core(TM) i7-4702MQ CPU @ 2.20GHz")]),e._v(" "),l("li",[e._v("버추어박스: 오라클 가상 머신. 버전 5.0.14 r105127")]),e._v(" "),l("li",[e._v("확장: Virtual Box용 확장 패키지 설치(USB3 지원에 필요)")]),e._v(" "),l("li",[e._v("게스트 운영체제: 리눅스 - 우분투 14.04.3 LTS")])]),e._v(" "),l("p",[e._v("지침서의 순서는 다음 방식을 따릅니다. 첫 부분에서는 버추어박스에 게스트 운영체제로 우분투 14.04 설치 방법을 설명합니다. 두번째 부분에서는 ROS 인디고와 카메라 드라이버 설치 방법을 알려줍니다. 자주 사용되는 표현의 의미는 다음과 같습니다.")]),e._v(" "),l("ul",[l("li",[e._v("버추어 박스(VB): 서로 다른 가상 머신을 실행하는 프로그램. 이 경우 오라클 가상 머신입니다.")]),e._v(" "),l("li",[e._v("가상 머신(VM): 버추어 박스에서 게스트 시스템으로 실행하는 운영체제. 이 경우 우분투를 지칭합니다.")])]),e._v(" "),l("h2",{attrs:{id:"버추어-박스에-우분투-14-04-3-lts-설치"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#버추어-박스에-우분투-14-04-3-lts-설치"}},[e._v("#")]),e._v(" 버추어 박스에 우분투 14.04.3 LTS 설치")]),e._v(" "),l("ul",[l("li",[e._v("64비트 리눅스를 설치할 새 가상 머신(VM)을 만드십시오.")]),e._v(" "),l("li",[e._v("Ubuntu 14.04.3 LTS: ("),l("a",{attrs:{href:"https://ubuntu.com/download/desktop",target:"_blank",rel:"noopener noreferrer"}},[e._v("ubuntu-14.04.3-desktop-amd64.iso"),l("OutboundLink")],1),e._v(")의 iso 파일을 다운로드합니다.")]),e._v(" "),l("li",[e._v("우분투를 설치하십시오:\n"),l("ul",[l("li",[e._v("설치 과정에서 다음 두가지 옵션을 끄십시오:\n"),l("ul",[l("li",[e._v("설치 중 업데이트 다운로드")]),e._v(" "),l("li",[e._v("서드파티 소프트웨어 설치")])])])])]),e._v(" "),l("li",[e._v("설치 후, 전체 데스크톱(화면)에 우분투 화면이 뜨도록 버추어 박스를 활성화합니다:\n"),l("ul",[l("li",[e._v("우분투 가상 머신을 시작하고, 로그인한 다음, 버추어 박스 메뉴 표시줄의 "),l("strong",[e._v("장치->게스트 추가 CD 이미지 설치")]),e._v("를 누르십시오.")]),e._v(" "),l("li",[e._v("우분투에서 창이 오픈되면, "),l("strong",[e._v("실행")]),e._v("을 누르고 암호를 입력하십시오.")]),e._v(" "),l("li",[e._v("설치가 끝난 후에 가상머신을 다시 시작하십시오. 이제, 전체 데스크톱 화면에 가상 머신 화면이 표시되어야합니다.")]),e._v(" "),l("li",[e._v("업데이트 설치 여부를 묻는 창이 우분투에 뜰 경우, 거절하십시오.")])])]),e._v(" "),l("li",[e._v("버추어 박스 USB 3 컨트롤러 활성:\n"),l("ul",[l("li",[e._v("가상 머신을 종료합니다.")]),e._v(" "),l("li",[e._v('가상 머신 설정에서 메뉴 선택 USB로 이동하고 "USB 3.0(xHCI)"를 선택합니다. Virtual Box용 확장 패키지를 설치한 경우에만 가능합니다.')]),e._v(" "),l("li",[e._v("가상 머신을 다시 시작합니다.")])])])]),e._v(" "),l("h2",{attrs:{id:"ros-인디고-설치"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#ros-인디고-설치"}},[e._v("#")]),e._v(" ROS 인디고 설치")]),e._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"http://wiki.ros.org/indigo/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROS 인디고 설치 안내서"),l("OutboundLink")],1),e._v("를 참고하십시오.\n"),l("ul",[l("li",[e._v("데스크톱 전체 버전을 설치하십시오.")]),e._v(" "),l("li",[e._v('"Initialize rosdep"과 "Environment setup" 부분에 설명한 단계를 실행하십시오.')])])])]),e._v(" "),l("h2",{attrs:{id:"카메라-드라이버-설치"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#카메라-드라이버-설치"}},[e._v("#")]),e._v(" 카메라 드라이버 설치")]),e._v(" "),l("ul",[l("li",[e._v("git을 설치하십시오:")])]),e._v(" "),l("div",{staticClass:"language-bash extra-class"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[l("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),l("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),l("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),l("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v("\n")])])]),l("ul",[l("li",[l("p",[e._v("드라이버를 다운로드하고 설치하십시오")]),e._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://github.com/bestmodule/RealSense_ROS",target:"_blank",rel:"noopener noreferrer"}},[e._v("RealSense_ROS 저장소"),l("OutboundLink")],1),e._v("를 복제하십시오:"),l("div",{staticClass:"language-bash extra-class"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[l("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/bestmodule/RealSense_ROS.git\n")])])])])])]),e._v(" "),l("li",[l("p",[l("a",{attrs:{href:"https://github.com/bestmodule/RealSense_ROS/tree/master/r200_install",target:"_blank",rel:"noopener noreferrer"}},[e._v("이곳"),l("OutboundLink")],1),e._v("의 절차를 따르십시오.")]),e._v(" "),l("ul",[l("li",[e._v("패키지 설치할 지 여부를 물어보면 엔터키를 입력하십시오."),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("Intel Low Power Subsystem support in ACPI mode (MFD_INTEL_LPSS_ACPI) [N/m/y/?] (NEW)\n")])])]),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("Intel Low Power Subsystem support in PCI mode (MFD_INTEL_LPSS_PCI) [N/m/y/?] (NEW)\n\n")])])]),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("Dell Airplane Mode Switch driver (DELL_RBTN) [N/m/y/?] (NEW)\n")])])])]),e._v(" "),l("li",[e._v("설치 프로세스가 끝날 때 나타날 수 있는 다음 오류 메시지는 드라이버의 오작동으로 이어지지 않아야 합니다."),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("rmmod: ERROR: Module uvcvideo is not currently loaded\n")])])])])])]),e._v(" "),l("li",[l("p",[e._v("설치 과정이 끝나면, 가상 머신을 다시 시작하십시오.")])]),e._v(" "),l("li",[l("p",[e._v("카메라 드라이버 시험:")]),e._v(" "),l("ul",[l("li",[e._v("인텔 리얼센스 카메라 헤드를 USB3 케이블로 USB3 방식을 따르는 컴퓨터의 포트에 연결하십시오.")]),e._v(" "),l("li",[e._v("버추어 박스의 메뉴 표시줄에서 장치->USB->Intel Corp Intel RealSense 3D Camera R200를 눌러 가상 머신에 USB 카메라를 연결하십시오.")]),e._v(" "),l("li",[e._v("[패키지 해제 폴더]/Bin/DSReadCameraInfo 파일을 실행하십시오:\n"),l("ul",[l("li",[e._v("다음 오류 메시지가 나타나면 카메라 연결을 해제하십시오(컴퓨터에서 물리적으로 USB 케이블을 뽑아내십시오). 다시 연결한 후, 버추어 박스의 메뉴표시줄에서 장치->USB->Intel Corp Intel RealSense 3D Camera R200를 다시 누르고,  [언팩 폴더]/Bin/DSReadCameraInfo 파일을 다시 실행하십시오"),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("DSAPI call failed at ReadCameraInfo.cpp:134!\n")])])])]),e._v(" "),l("li",[e._v("카메라 드라이버가 동작하고 Intel RealSense R200을 인식하면, Intel RealSense R200 카메라 헤드 정보를 살펴보아야 합니다.")])])])])]),e._v(" "),l("li",[l("p",[e._v("ROS 노들릿(nodlet) 설치 및 시험:")]),e._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://github.com/bestmodule/RealSense_ROS/blob/master/realsense_dist/2.3/doc/RealSense-ROS-R200-nodelet.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("이곳"),l("OutboundLink")],1),e._v('의 "설치" 부분에 언급한 설치 절차를 따라 ROS 노들릿을 설치하십시오.')]),e._v(" "),l("li",[l("a",{attrs:{href:"https://github.com/bestmodule/RealSense_ROS/blob/master/realsense_dist/2.3/doc/RealSense-ROS-R200-nodelet.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("이곳"),l("OutboundLink")],1),e._v('의 "Running the R200 nodelet"  부분에 언급한 절차를 따라 ROS 노들릿과 Intel RealSense R200 카메라 헤드를 시험하십시오.\n'),l("ul",[l("li",[e._v("모든 기능이 동작하면 ROS 토픽에 Intel RealSense R200 카메라로부터 제각기 다른 데이터 스트림이 나타납니다.")])])])])])])])}),[],!1,null,null,null);t.default=s.exports},449:function(e,t,a){e.exports=a.p+"assets/img/intel_realsense.6e908069.png"}}]);