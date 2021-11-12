(window.webpackJsonp=window.webpackJsonp||[]).push([[630],{2264:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"비글본-블루"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비글본-블루"}},[t._v("#")]),t._v(" 비글본 블루")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이 제품을 제조하지 않습니다. 하드웨어 지원과 호환 문제는 [제조사](https://beagleboard.org/blue)에 문의하십시오.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("이 비행 컨트롤러에 대한 PX4 지원은 "),s("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[t._v("테스트 단계")]),t._v("입니다.")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://beagleboard.org/blue",target:"_blank",rel:"noopener noreferrer"}},[t._v("BeagleBone Blue"),s("OutboundLink")],1),t._v("는 올인원 리눅스 기반 컴퓨터입니다. 로봇 공학에 최적화되어 있지만, 이 작고 저렴한 보드에는 비행 콘트롤러에 필요한 모든 센서와 주변 장치가 있습니다. 이 항목에서는 "),s("a",{attrs:{href:"https://github.com/StrawsonDesign/librobotcontrol",target:"_blank",rel:"noopener noreferrer"}},[t._v("librobotcontrol"),s("OutboundLink")],1),t._v(" 로봇 패키지로 PX4를 실행하기 위한 보드 설정 방법을 설명합니다.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(720),alt:"BeagleBone - 레이블이 있는 다이어그램"}})]),t._v(" "),s("h2",{attrs:{id:"os-이미지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os-이미지"}},[t._v("#")]),t._v(" OS 이미지")]),t._v(" "),s("p",[s("em",[t._v("BeagleBone Blue")]),t._v(" 이미지는 여기에서 다운로드할 수 있습니다.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://beagleboard.org/latest-images",target:"_blank",rel:"noopener noreferrer"}},[t._v("가장 안정적인 OS 이미지"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://rcn-ee.net/rootfs/bb.org/testing/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 테스트 OS 이미지"),s("OutboundLink")],1),t._v("(자주 업데이트됨).")])]),t._v(" "),s("p",[t._v("플래시 OS 이미지에 대한 정보는 "),s("a",{attrs:{href:"https://github.com/beagleboard/beaglebone-blue/wiki/Flashing-firmware",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 페이지"),s("OutboundLink")],1),t._v("를 참고하십시오. 기타 유용한 정보는 "),s("a",{attrs:{href:"https://github.com/beagleboard/beaglebone-blue/wiki/Frequently-Asked-Questions-(FAQ)",target:"_blank",rel:"noopener noreferrer"}},[t._v("FAQ"),s("OutboundLink")],1),t._v("을 참고하십시오.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("실시간 커널로 업데이트 할 수 있으며, 업데이트 하는경우 "),s("em",[t._v("librobotcontrol")]),t._v("이 실시간 커널에서 제대로 작동하는지 다시 확인합니다.")])]),t._v(" "),s("p",[t._v("이 문서를 업데이트 시점의 최신 OS 이미지는 "),s("a",{attrs:{href:"https://debian.beagleboard.org/images/bone-debian-9.9-iot-armhf-2019-08-03-4gb.img.xz",target:"_blank",rel:"noopener noreferrer"}},[t._v("bone-debian-9.9-iot-armhf-2019-08-03-4gb.img.xz"),s("OutboundLink")],1),t._v("입니다.")]),t._v(" "),s("h2",{attrs:{id:"크로스-컴파일러-빌드-권장"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#크로스-컴파일러-빌드-권장"}},[t._v("#")]),t._v(" 크로스 컴파일러 빌드 (권장)")]),t._v(" "),s("p",[s("em",[t._v("BeagleBone Blue")]),t._v("에 대해 PX4를 구축 방법은 개발 컴퓨터에서 컴파일하여 PX4 실행 가능한 이진 파일을 BeagleBone Blue에 직접 업로드하는 것입니다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("이 접근 방식은 배포 속도와 사용 편의성 때문에 "),s("a",{attrs:{href:"#native_builds"}},[t._v("네이티브 빌드")]),t._v(" 보다 권장됩니다.")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("PX4 빌드에는 빌드에 자동으로 포함되는 [librobotcontrol](http://strawsondesign.com/docs/librobotcontrol/)이 필요합니다. 그러나, 필요한 경우 독립적으로 설치하고 테스트할 수 있습니다.")])]),t._v(" "),s("h3",{attrs:{id:"beaglebone-blue-wifi-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beaglebone-blue-wifi-설정"}},[t._v("#")]),t._v(" Beaglebone Blue WIFI 설정")]),t._v(" "),s("p",[t._v("보드에 쉽게 액세스하려면 Wi-Fi를 통해 네트워크에 연결할 수 있습니다.")]),t._v(" "),s("p",[t._v("절차는 다음과 같습니다 (보드에서 실행).")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v("\nconnmanctl\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("scan wifi\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("services\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#(at this point you should see your network SSID appear.)")]),t._v("\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("agent on\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("connect "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SSID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("quit\n")])])]),s("h3",{attrs:{id:"beaglebone에서-ssh-루트-로그인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beaglebone에서-ssh-루트-로그인"}},[t._v("#")]),t._v(" Beaglebone에서 SSH 루트 로그인")]),t._v(" "),s("p",[t._v("아래의 명령어로 보드에서 루트 로그인을 활성화 할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PermitRootLogin yes"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("  /etc/ssh/sshd_config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" systemctl restart sshd\n")])])]),s("h3",{attrs:{id:"크로스-컴파일러-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#크로스-컴파일러-설정"}},[t._v("#")]),t._v(" 크로스 컴파일러 설정")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("먼저 * rsync*를 설정합니다. WiFi 또는 이더넷과 같은 네트워크를 통해 개발 컴퓨터에서 대상 보드로 파일을 전송하는 데 사용됩니다. 키 인증을 사용하는 SSH를 통한 "),s("em",[t._v("rsync")]),t._v("의 경우 다음 단계를 따르세요 (개발 머신에서).")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("이전에 생성하지 않은 경우 SSH 키를 생성합니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(" ssh-keygen -t rsa\n")])])]),s("ol",[s("li",[t._v("ENTER //no passphrase")]),t._v(" "),s("li",[t._v("ENTER")]),t._v(" "),s("li",[t._v("ENTER")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("/etc/hosts")]),t._v("에서 BeagleBone Blue 보드를 "),s("code",[t._v("beaglebone")]),t._v("으로 정의하고 암호없는 SSH 액세스를 위해 공개 SSH 키를 보드에 복사합니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(" ssh-copy-id root@beaglebone\n")])])])]),t._v(" "),s("li",[s("p",[t._v("또는 beaglebone의 IP를 직접 사용할 수 있습니다. "),s("code",[t._v("ssh-copy-id root@<IP>")])])]),t._v(" "),s("li",[s("p",[t._v("확인 메시지가 표시되면 : yes")])]),t._v(" "),s("li",[s("p",[t._v("루트 비밀번호 입력")])])])]),t._v(" "),s("li",[s("p",[t._v("크로스 컴파일러 설정")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("툴체인 다운로드")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("먼저 툴체인을 "),s("em",[t._v("/opt/bbblue_toolchain/gcc-arm-linux-gnueabihf")]),t._v("에 설치합니다. 다음은 소프트 링크를 사용하여 사용할 도구 모음 버전을 선택하는 예입니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v(" mkdir -p /opt/bbblue_toolchain/gcc-arm-linux-gnueabihf\n chmod -R 777 /opt/bbblue_toolchain\n")])])]),s("p",[s("em",[t._v("BeagleBone Blue")]),t._v(" 용 ARM 크로스 컴파일러는 "),s("a",{attrs:{href:"http://www.linaro.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linaro Toolchain Binaries 사이트"),s("OutboundLink")],1),t._v("에서 찾을 수 있습니다.")])])])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("툴체인의 GCC는 "),s("em",[t._v("BeagleBone Blue")]),t._v("의 커널과 호환되어야 합니다. 경험상 일반적으로 GCC 버전이 "),s("em",[t._v("BeagleBone Blue")]),t._v("의 OS 이미지와 함께 제공되는 GCC 버전보다 높지 않은 도구 모음을 선택합니다.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("        [gcc-linaro-7.5.0-2019.12-x86_64_arm-linux-gnueabihf](https://releases.linaro.org/components/toolchain/binaries/latest-7/arm-linux-gnueabihf/gcc-linaro-7.5.0-2019.12-x86_64_arm-linux-gnueabihf.tar.xz)를 bbblue_toolchain 폴더에 다운로드하고 압축을 해제합니다.\n        \n        *BeagleBone Blue*를위한 다양한 ARM 크로스 컴파일러 버전은 [Linaro Toolchain Binaries 사이트](http://www.linaro.org/downloads/)에서 찾을 수 있습니다.\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("도구 모음의 GCC 버전은 "),s("em",[t._v("BeagleBone Blue")]),t._v(" 커널과 호환되어야 합니다.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("        경험상 일반적으로 GCC 버전이 *BeagleBone Blue*의 OS 이미지와 함께 제공되는 GCC 버전보다 높지 않은 도구 모음을 선택합니다.\n    \n    2. 아래와 같이 ~/.profile의 PATH에 추가합니다\n        \n        ```sh\n        export PATH=$PATH:/opt/bbblue_toolchain/gcc-arm-linux-gnueabihf/gcc-linaro-6.3.1-2017.05-x86_64_arm-linux-gnueabihf/bin\n        ```\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("로그 아웃후 다시 로그인하여 변경 사항을 적용하거나 현재 셸에서 동일한 줄을 실행합니다.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("        [개발 환경 설정](../dev_setup/dev_env_linux_ubuntu.md) 지침을 따릅니다.\n        \n        설정과 일치하도록 업로드 대상을 편집해야 할 수 있습니다.\n        \n            nano PX4-Autopilot/boards/beaglebone/blue/cmake/upload.cmake\n            \n            #in row 37 change debian@beaglebone.lan --\x3e root@beaglebone (or root@<IP>)\n")])])]),s("h3",{attrs:{id:"교차-컴파일-및-업로드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#교차-컴파일-및-업로드"}},[t._v("#")]),t._v(" 교차 컴파일 및 업로드")]),t._v(" "),s("p",[t._v("컴파일 및 업로드")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("make beaglebone_blue_default upload\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("업로드하지 않으면, 파일이 로컬 빌드 폴더에 저장됩니다.")])]),t._v(" "),s("p",[t._v("업로드한 파일을 테스트하려면 "),s("em",[t._v("BeagleBone Blue")]),t._v(" 보드에서 다음 명령을 실행합니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /home/debian/px4 \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./bin/px4 -s px4.config \n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("현재 "),s("em",[t._v("librobotcontrol")]),t._v("에는 루트 권한이 필요합니다.")])]),t._v(" "),s("p",[s("span",{attrs:{id:"native_builds"}})]),t._v(" "),s("h2",{attrs:{id:"네이티브-빌드-선택-사항"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#네이티브-빌드-선택-사항"}},[t._v("#")]),t._v(" 네이티브 빌드(선택 사항)")]),t._v(" "),s("p",[t._v("BeagleBone Blue에서 직접 PX4를 빌드할 수 있습니다.")]),t._v(" "),s("p",[t._v("사전 구축된 라이브러리를 설치후")]),t._v(" "),s("ol",[s("li",[s("em",[t._v("librobotcontrol")]),t._v(" 설치 디렉터리를 선택하고, 원하지 않는 다른 헤더가 포함되지 않도록 "),s("code",[t._v("LIBROBOTCONTROL_INSTALL_DIR")]),t._v(" 환경변수를 설정합니다.")]),t._v(" "),s("li",[s("strong",[t._v("robotcontrol.h")]),t._v(" 및 **rc/***를 "),s("code",[t._v("$LIBROBOTCONTROL_INSTALL_DIR/include")]),t._v(" 폴더에 설치합니다.")]),t._v(" "),s("li",[t._v("사전 빌드된 기본 (ARM) 버전의 librobotcontrol.\\ *을 "),s("code",[t._v("$LIBROBOTCONTROL_INSTALL_DIR/lib")]),t._v(" 폴더에 설치합니다.")])]),t._v(" "),s("p",[t._v("BeagleBone Blue에서 다음 명령을 실행합니다 (예 : SSH를 통해).")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("종속성 설치:\nsh\nsudo apt-get update\nsudo apt-get install cmake python-empy")])]),t._v(" "),s("li",[s("p",[t._v("PX4 펌웨어를 BeagleBone Blue에 복제합니다.")])]),t._v(" "),s("li",[s("p",[s("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux.html"}},[t._v("표준 빌드 시스템 설치")]),t._v("를 계속 진행합니다.")],1)])]),t._v(" "),s("h2",{attrs:{id:"설정-변경"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설정-변경"}},[t._v("#")]),t._v(" 설정 변경")]),t._v(" "),s("p",[t._v("모든 변경은 beaglebone의 px4.config 파일에서 직접 수행할 수 있습니다. 예를 들어 WIFI를 wlan으로 변경할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("영구적으로 변경하려면, 빌드전에 빌드 머신에서 "),s("strong",[t._v("PX4-Autopilot/posix-configs/bbblue/px4.config")]),t._v("를 변경하여야 합니다.")])]),t._v(" "),s("h2",{attrs:{id:"부팅-중-자동-시작"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#부팅-중-자동-시작"}},[t._v("#")]),t._v(" 부팅 중 자동 시작")]),t._v(" "),s("p",[t._v("다음은 [/etc/rc.local] 예제입니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh -e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rc.local")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This script is executed at the end of each multiuser runlevel.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Make sure that the script will "exit 0" on success or any other')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# value on error.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# In order to enable or disable this script just change the execution")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bits.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# By default this script does nothing.")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# wait for services to start up")]),t._v("\n/bin/sleep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /home/debian/px4 \n\n/home/debian/px4/bin/px4 -d -s /home/debian/px4/px4.config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /home/debian/px4/PX4.log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),s("p",[t._v("다음은 "),s("em",[t._v("systemd")]),t._v(" 서비스 예제입니다. [/lib/systemd/system/px4-quad-copter.service] :")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Description")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PX4 Quadcopter Service\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("After")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("networking.service network-online.target \n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("StartLimitIntervalSec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Conflicts")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("px4-fixed-wing.service\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WorkingDirectory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/debian/px4\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/debian/px4/bin/px4 -d -s /home/debian/px4/px4.config  \n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("on-failure\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RestartSec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WantedBy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multi-user.target\n")])])]),s("h3",{attrs:{id:"기타"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기타"}},[t._v("#")]),t._v(" 기타")]),t._v(" "),s("h4",{attrs:{id:"파워-서보-레일"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#파워-서보-레일"}},[t._v("#")]),t._v(" 파워 서보 레일")]),t._v(" "),s("p",[t._v("PX4가 시작되면 자동으로 서보에 전원을 공급합니다.")]),t._v(" "),s("h4",{attrs:{id:"독특한-기능"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#독특한-기능"}},[t._v("#")]),t._v(" 독특한 기능")]),t._v(" "),s("p",[t._v("BeagleBone Blue에는 다양한 WiFi 인터페이스와 전원 소스와 같은 몇 가지 고유한 기능이 있습니다. 이러한 기능을 사용하려면 "),s("strong",[t._v("/home/debian/px4/px4.config")]),t._v("의 주석을 참고하십시오.")]),t._v(" "),s("h4",{attrs:{id:"sbus-신호-변환기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sbus-신호-변환기"}},[t._v("#")]),t._v(" SBUS 신호 변환기")]),t._v(" "),s("p",[t._v("수신기의 SBUS 신호(예: FrSky X8R)는 반전된 신호입니다. BeagleBone Blue의 UART는 반전되지 않은 3.3V 레벨 신호에서만 작동할 수 있습니다. 이 "),s("RouterLink",{attrs:{to:"/ko/tutorials/linux_sbus.html"}},[t._v("자습서")]),t._v("에는 SBUS 신호 인버터 회로가 포함되어 있습니다.")],1),t._v(" "),s("h4",{attrs:{id:"일반적인-연결"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#일반적인-연결"}},[t._v("#")]),t._v(" 일반적인 연결")]),t._v(" "),s("p",[t._v("GPS와 SBUS 수신기가 있는 쿼드콥터의 경우의 일반적인 연결은 다음과 같습니다.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("비글본 블루에서 모터 1, 2, 3 및 4의 ESC를 서보 출력의 채널 1, 2, 3 및 4에 연결합니다. 비글본 블루에서 ESC 커넥터에 전원 출력이 포함되어 있는 경우 핀, 제거 및 서보 채널의 전원 출력 핀에 연결하지 마십시오.")])]),t._v(" "),s("li",[s("p",[t._v("dsm2와 일치하는 커넥터가있는 경우 위에서 언급한 변환된 SBUS 신호를 dsm2 포트에 연결하고, 그렇지 않으면 사용 가능한 다른 UART 포트에 연결하고 "),s("strong",[t._v("/home/debian/px4/px4.config")]),t._v("에서 해당 포트를 변경합니다.")])]),t._v(" "),s("li",[s("p",[t._v("GPS 모듈의 신호를 비글본 블루의 GPS 포트에 연결합니다 BeagleBone Blue에있는 GPS 포트의 신호 핀은 3.3V만 허용하므로 이에 적합한 GPS 모듈을 선택하십시오.")])])])])}),[],!1,null,null,null);e.default=n.exports},720:function(t,e,a){t.exports=a.p+"assets/img/BeagleBone_Blue_balloons.76d575fa.jpg"}}]);