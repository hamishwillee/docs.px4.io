(window.webpackJsonp=window.webpackJsonp||[]).push([[758],{2624:function(e,t,a){"use strict";a.r(t);var s=a(19),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"비글본-블루"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비글본-블루"}},[e._v("#")]),e._v(" 비글본 블루")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("PX4에서는 이 제품을 제조하지 않습니다. 하드웨어 지원과 호환 문제는 [제조사](https://beagleboard.org/blue)에 문의하십시오.")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("이 비행 컨트롤러에 대한 PX4 지원은 "),s("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[e._v("테스트 단계")]),e._v("입니다.")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://beagleboard.org/blue",target:"_blank",rel:"noopener noreferrer"}},[e._v("BeagleBone Blue"),s("OutboundLink")],1),e._v("는 올인원 리눅스 기반 컴퓨터입니다. 로봇 공학에 최적화되어 있지만, 이 작고 저렴한 보드에는 비행 콘트롤러에 필요한 모든 센서와 주변 장치가 있습니다. 이 항목에서는 "),s("a",{attrs:{href:"https://github.com/StrawsonDesign/librobotcontrol",target:"_blank",rel:"noopener noreferrer"}},[e._v("librobotcontrol"),s("OutboundLink")],1),e._v(" 로봇 패키지로 PX4를 실행하기 위한 보드 설정 방법을 설명합니다.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(775),alt:"BeagleBone - 레이블이 있는 다이어그램"}})]),e._v(" "),s("h2",{attrs:{id:"os-이미지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os-이미지"}},[e._v("#")]),e._v(" OS 이미지")]),e._v(" "),s("p",[s("em",[e._v("BeagleBone Blue")]),e._v(" 이미지는 여기에서 다운로드할 수 있습니다.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://beagleboard.org/latest-images",target:"_blank",rel:"noopener noreferrer"}},[e._v("가장 안정적인 OS 이미지"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://rcn-ee.net/rootfs/bb.org/testing/",target:"_blank",rel:"noopener noreferrer"}},[e._v(" 테스트 OS 이미지"),s("OutboundLink")],1),e._v("(자주 업데이트됨).")])]),e._v(" "),s("p",[e._v("플래시 OS 이미지에 대한 정보는 "),s("a",{attrs:{href:"https://github.com/beagleboard/beaglebone-blue/wiki/Flashing-firmware",target:"_blank",rel:"noopener noreferrer"}},[e._v("이 페이지"),s("OutboundLink")],1),e._v("를 참고하십시오. 기타 유용한 정보는 "),s("a",{attrs:{href:"https://github.com/beagleboard/beaglebone-blue/wiki/Frequently-Asked-Questions-(FAQ)",target:"_blank",rel:"noopener noreferrer"}},[e._v("FAQ"),s("OutboundLink")],1),e._v("을 참고하십시오.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("실시간 커널로 업데이트 할 수 있으며, 업데이트 하는경우 "),s("em",[e._v("librobotcontrol")]),e._v("이 실시간 커널에서 제대로 작동하는지 다시 확인합니다.")])]),e._v(" "),s("p",[e._v("The latest OS images at time of updating this document is "),s("a",{attrs:{href:"https://debian.beagleboard.org/images/bone-debian-10.3-iot-armhf-2020-04-06-4gb.img.xz",target:"_blank",rel:"noopener noreferrer"}},[e._v("bone-debian-10.3-iot-armhf-2020-04-06-4gb.img.xz"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"크로스-컴파일러-빌드-권장"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#크로스-컴파일러-빌드-권장"}},[e._v("#")]),e._v(" 크로스 컴파일러 빌드 (권장)")]),e._v(" "),s("p",[s("em",[e._v("BeagleBone Blue")]),e._v("에 대해 PX4를 구축 방법은 개발 컴퓨터에서 컴파일하여 PX4 실행 가능한 이진 파일을 BeagleBone Blue에 직접 업로드하는 것입니다.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("이 접근 방식은 배포 속도와 사용 편의성 때문에 "),s("a",{attrs:{href:"#native_builds"}},[e._v("네이티브 빌드")]),e._v(" 보다 권장됩니다.")])]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("PX4 빌드에는 빌드에 자동으로 포함되는 [librobotcontrol](http://strawsondesign.com/docs/librobotcontrol/)이 필요합니다. 그러나, 필요한 경우 독립적으로 설치하고 테스트할 수 있습니다.")])]),e._v(" "),s("h3",{attrs:{id:"beaglebone-blue-wifi-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beaglebone-blue-wifi-설정"}},[e._v("#")]),e._v(" Beaglebone Blue WIFI 설정")]),e._v(" "),s("p",[e._v("보드에 쉽게 액세스하려면 Wi-Fi를 통해 네트워크에 연결할 수 있습니다.")]),e._v(" "),s("p",[e._v("절차는 다음과 같습니다 (보드에서 실행).")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v("\nconnmanctl\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("scan wifi\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("services\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#(at this point you should see your network SSID appear.)")]),e._v("\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("agent on\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("connect "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("SSID"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n    Enter Passphrase\nconnmanctl"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("quit\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("The format of the "),s("code",[e._v("<SSID>")]),e._v(" above is normally the text 'wifi' followed by a string of other characters. After entering the command you will be prompted to enter the wifi password.")])]),e._v(" "),s("h3",{attrs:{id:"beaglebone에서-ssh-루트-로그인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beaglebone에서-ssh-루트-로그인"}},[e._v("#")]),e._v(" Beaglebone에서 SSH 루트 로그인")]),e._v(" "),s("p",[e._v("Root login can be enabled on the board with:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"PermitRootLogin yes"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v("  /etc/ssh/sshd_config "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" systemctl restart sshd\n")])])]),s("h3",{attrs:{id:"크로스-컴파일러-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#크로스-컴파일러-설정"}},[e._v("#")]),e._v(" 크로스 컴파일러 설정")]),e._v(" "),s("ol",[s("li",[e._v("먼저 * rsync*를 설정합니다. WiFi 또는 이더넷과 같은 네트워크를 통해 개발 컴퓨터에서 대상 보드로 파일을 전송하는 데 사용됩니다. 키 인증을 사용하는 SSH를 통한 "),s("em",[e._v("rsync")]),e._v("의 경우 다음 단계를 따르세요 (개발 머신에서).\n"),s("ol",[s("li",[s("p",[e._v("이전에 생성하지 않은 경우 SSH 키를 생성합니다.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ssh-keygen -t rsa\n")])])]),s("ol",[s("li",[e._v("ENTER //no passphrase")]),e._v(" "),s("li",[e._v("ENTER")]),e._v(" "),s("li",[e._v("ENTER")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("/etc/hosts")]),e._v("에서 BeagleBone Blue 보드를 "),s("code",[e._v("beaglebone")]),e._v("으로 정의하고 암호없는 SSH 액세스를 위해 공개 SSH 키를 보드에 복사합니다.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ssh-copy-id debian@beaglebone\n")])])])]),e._v(" "),s("li",[s("p",[e._v("또는 beaglebone의 IP를 직접 사용할 수 있습니다.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ssh-copy-id debian@<IP>\n")])])])]),e._v(" "),s("li",[s("p",[e._v("확인 메시지가 표시되면 : yes")])]),e._v(" "),s("li",[s("p",[e._v("루트 비밀번호 입력")])])])]),e._v(" "),s("li",[e._v("크로스 컴파일러 설정\n"),s("ol",[s("li",[e._v("툴체인 다운로드\n"),s("ol",[s("li",[s("p",[e._v("First install the toolchain into "),s("em",[e._v("/opt/bbblue_toolchain/gcc-arm-linux-gnueabihf")]),e._v(". Here is an example of using soft link to select which version of the toolchain you want to use:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p /opt/bbblue_toolchain/gcc-arm-linux-gnueabihf\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" -R "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("777")]),e._v(" /opt/bbblue_toolchain\n   "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /opt/bbblue_toolchain/gcc-arm-linux-gnueabihf\n")])])]),s("p",[e._v("The ARM Cross Compiler for "),s("em",[e._v("BeagleBone Blue")]),e._v(" can be found at "),s("a",{attrs:{href:"https://www.linaro.org/downloads/#gnu_and_llvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linaro Toolchain Binaries site"),s("OutboundLink")],1),e._v(".")])])])])])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("GCC")]),e._v(" "),s("p",[e._v("in the toolchain should be compatible with kernel in "),s("em",[e._v("BeagleBone Blue")]),e._v(". General rule of thumb is to choose a toolchain where version of GCC is not higher than version of GCC which comes with the OS image on "),s("em",[e._v("BeagleBone Blue")]),e._v(".")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("     Download and unpack [gcc-linaro-13.0.0-2022.06-x86_64_arm-linux-gnueabihf.tar.xz](https://snapshots.linaro.org/gnu-toolchain/13.0-2022.06-1/arm-linux-gnueabihf/gcc-linaro-13.0.0-2022.06-x86_64_arm-linux-gnueabihf.tar.xz) to the bbblue_toolchain folder.\n\n     Different ARM Cross Compiler versions for *BeagleBone Blue* can be found at \\[Linaro Toolchain Binaries site\\](http://www.linaro.org/downloads/).\n\n     ```sh\n     wget https://snapshots.linaro.org/gnu-toolchain/13.0-2022.06-1/arm-linux-gnueabihf/gcc-linaro-13.0.0-2022.06-x86_64_arm-linux-gnueabihf.tar.xz\n     tar -xf gcc-linaro-13.0.0-2022.06-x86_64_arm-linux-gnueabihf.tar.xz\n     ```\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("The GCC version of the toolchain should be compatible with kernel in "),s("em",[e._v("BeagleBone Blue")]),e._v(".")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("     As a general rule of thumb is to choose a toolchain where the version of GCC is not higher than the version of GCC which comes with the OS image on *BeagleBone Blue*.\n\n  1. Add it to the PATH in ~/.profile as shown below\n\n     ```sh\n     export PATH=$PATH:/opt/bbblue_toolchain/gcc-arm-linux-gnueabihf/gcc-linaro-13.0.0-2022.06-x86_64_arm-linux-gnueabihf/bin\n     ```\n     :::note\n")])])]),s("p",[e._v("Logout and Login to apply the change, or execute the same line on your current shell.\n:::")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  1. Setup other dependencies by downloading the PX4 source code and then running the setup scripts:\n     ```\n     Setup other dependencies by downloading the PX4 source code and then running the setup scripts:\n\n        git clone https://github.com/PX4/PX4-Autopilot.git --recursive\n        bash ./Tools/setup/ubuntu.sh --no-nuttx --no-sim-tools\n\n\n    You may have to edit the upload target to match with your setup:\n ```\n\n     You may have to edit the upload target to match with your setup:\n     ```sh\n     nano PX4-Autopilot/boards/beaglebone/blue/cmake/upload.cmake\n\n        # in row 37 change debian@beaglebone.lan TO root@beaglebone (or root@<IP>)\n     ```\n\n     See the [Development Environment Setup](../dev_setup/dev_env_linux_ubuntu.md) instructions for additional information.\n")])])]),s("h3",{attrs:{id:"교차-컴파일-및-업로드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#교차-컴파일-및-업로드"}},[e._v("#")]),e._v(" 교차 컴파일 및 업로드")]),e._v(" "),s("p",[e._v("Compile and Upload")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("make beaglebone_blue_default upload\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("Without upload, files stored local in build folder.")])]),e._v(" "),s("p",[e._v("To test the uploaded files, run the following commands on the "),s("em",[e._v("BeagleBone Blue")]),e._v(" board:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/debian/px4 \n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" ./bin/px4 -s px4.config \n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("Currently "),s("em",[e._v("librobotcontrol")]),e._v(" requires root access.")])]),e._v(" "),s("p",[s("a",{attrs:{id:"native_builds"}})]),e._v(" "),s("h2",{attrs:{id:"네이티브-빌드-선택-사항"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#네이티브-빌드-선택-사항"}},[e._v("#")]),e._v(" 네이티브 빌드(선택 사항)")]),e._v(" "),s("p",[e._v("You can also natively build PX4 builds directly on the BeagleBone Blue.")]),e._v(" "),s("p",[e._v("After acquiring the pre-built library,")]),e._v(" "),s("ol",[s("li",[s("em",[e._v("librobotcontrol")]),e._v(" 설치 디렉터리를 선택하고, 원하지 않는 다른 헤더가 포함되지 않도록 "),s("code",[e._v("LIBROBOTCONTROL_INSTALL_DIR")]),e._v(" 환경변수를 설정합니다.")]),e._v(" "),s("li",[s("strong",[e._v("robotcontrol.h")]),e._v(" 및 **rc/***를 "),s("code",[e._v("$LIBROBOTCONTROL_INSTALL_DIR/include")]),e._v(" 폴더에 설치합니다.")]),e._v(" "),s("li",[e._v("사전 빌드된 기본 (ARM) 버전의 librobotcontrol.\\ *을 "),s("code",[e._v("$LIBROBOTCONTROL_INSTALL_DIR/lib")]),e._v(" 폴더에 설치합니다.")])]),e._v(" "),s("p",[e._v("Run the following commands on the BeagleBone Blue (i.e. via SSH):")]),e._v(" "),s("ol",[s("li",[e._v("종속성 설치:"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("종속성 설치: \n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" cmake python-empy\n")])])])]),e._v(" "),s("li",[e._v("PX4 펌웨어를 BeagleBone Blue에 복제합니다.")]),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux.html"}},[e._v("표준 빌드 시스템 설치")]),e._v("를 계속 진행합니다.")],1)]),e._v(" "),s("h2",{attrs:{id:"changes-in-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changes-in-config"}},[e._v("#")]),e._v(" Changes in config")]),e._v(" "),s("p",[e._v("All changes can be made in de px4.config file directly on beaglebone. For example, you can change the WIFI to wlan.")]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("If you want to change permanently, you have to change "),s("strong",[e._v("PX4-Autopilot/posix-configs/bbblue/px4.config")]),e._v(" on the Build Machine before build.")])]),e._v(" "),s("h2",{attrs:{id:"부팅-중-자동-시작"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#부팅-중-자동-시작"}},[e._v("#")]),e._v(" 부팅 중 자동 시작")]),e._v(" "),s("p",[e._v("Here is an example [/etc/rc.local]:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/sh -e")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# rc.local")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This script is executed at the end of each multiuser runlevel.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Make sure that the script will "exit 0" on success or any other')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# value on error.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# In order to enable or disable this script just change the execution")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# bits.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# By default this script does nothing.")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# wait for services to start up")]),e._v("\n/bin/sleep "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/debian/px4 \n\n/home/debian/px4/bin/px4 -d -s /home/debian/px4/px4.config "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /home/debian/px4/PX4.log "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exit")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])])]),s("p",[e._v("Below is a "),s("em",[e._v("systemd")]),e._v(" service example [/lib/systemd/system/px4-quad-copter.service]:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Description")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("PX4 Quadcopter Service\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("After")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("networking.service network-online.target \n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("StartLimitIntervalSec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Conflicts")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("px4-fixed-wing.service\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WorkingDirectory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/home/debian/px4\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("root\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/home/debian/px4/bin/px4 -d -s /home/debian/px4/px4.config  \n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("on-failure\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("RestartSec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WantedBy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("multi-user.target\n")])])]),s("h3",{attrs:{id:"기타"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기타"}},[e._v("#")]),e._v(" 기타")]),e._v(" "),s("h4",{attrs:{id:"파워-서보-레일"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#파워-서보-레일"}},[e._v("#")]),e._v(" 파워 서보 레일")]),e._v(" "),s("p",[e._v("When PX4 starts, it automatically applies power to servos.")]),e._v(" "),s("h4",{attrs:{id:"독특한-기능"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#독특한-기능"}},[e._v("#")]),e._v(" 독특한 기능")]),e._v(" "),s("p",[e._v("BeagleBone Blue has some unique features such as multiple choices of WiFi interfaces and power sources. Refer to comments in "),s("strong",[e._v("/home/debian/px4/px4.config")]),e._v(" for usage of these features.")]),e._v(" "),s("h4",{attrs:{id:"sbus-신호-변환기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sbus-신호-변환기"}},[e._v("#")]),e._v(" SBUS 신호 변환기")]),e._v(" "),s("p",[e._v("SBUS signal from receiver (e.g., FrSky X8R) is an inverted signal. UARTs on BeagleBone Blue can only work with non-inverted 3.3V level signal. "),s("RouterLink",{attrs:{to:"/ko/tutorials/linux_sbus.html"}},[e._v("This tutorial")]),e._v(" contains a SBUS signal inverter circuit.")],1),e._v(" "),s("h4",{attrs:{id:"일반적인-연결"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#일반적인-연결"}},[e._v("#")]),e._v(" 일반적인 연결")]),e._v(" "),s("p",[e._v("For a quadcopter with GPS and an SBUS receiver, here are typical connections:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("비글본 블루에서 모터 1, 2, 3 및 4의 ESC를 서보 출력의 채널 1, 2, 3 및 4에 연결합니다. 비글본 블루에서 ESC 커넥터에 전원 출력이 포함되어 있는 경우 핀, 제거 및 서보 채널의 전원 출력 핀에 연결하지 마십시오.")])]),e._v(" "),s("li",[s("p",[e._v("dsm2와 일치하는 커넥터가있는 경우 위에서 언급한 변환된 SBUS 신호를 dsm2 포트에 연결하고, 그렇지 않으면 사용 가능한 다른 UART 포트에 연결하고 "),s("strong",[e._v("/home/debian/px4/px4.config")]),e._v("에서 해당 포트를 변경합니다.")])]),e._v(" "),s("li",[s("p",[e._v("GPS 모듈의 신호를 비글본 블루의 GPS 포트에 연결합니다 BeagleBone Blue에있는 GPS 포트의 신호 핀은 3.3V만 허용하므로 이에 적합한 GPS 모듈을 선택하십시오.")])])])])}),[],!1,null,null,null);t.default=n.exports},775:function(e,t,a){e.exports=a.p+"assets/img/BeagleBone_Blue_balloons.76d575fa.jpg"}}]);