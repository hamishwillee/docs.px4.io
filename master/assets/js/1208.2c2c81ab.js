(window.webpackJsonp=window.webpackJsonp||[]).push([[1208],{2286:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"라즈베리-파이-os-기반-파일럿파이"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#라즈베리-파이-os-기반-파일럿파이"}},[s._v("#")]),s._v(" 라즈베리 파이 OS 기반 파일럿파이")]),s._v(" "),t("h2",{attrs:{id:"개발자-가이드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#개발자-가이드"}},[s._v("#")]),s._v(" 개발자 가이드")]),s._v(" "),t("h3",{attrs:{id:"운영체제-이미지"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#운영체제-이미지"}},[s._v("#")]),s._v(" 운영체제 이미지")]),s._v(" "),t("p",[s._v("항상 최신의 공식 "),t("a",{attrs:{href:"https://downloads.raspberrypi.org/raspios_lite_armhf_latest",target:"_blank",rel:"noopener noreferrer"}},[s._v("Raspberry Pi OS Lite"),t("OutboundLink")],1),s._v(" 이미지를 사용하는 것을 권장합니다.")]),s._v(" "),t("p",[s._v("설치를 위히 라즈베리파이에 SSH 연결이 가능하여야 합니다.")]),s._v(" "),t("h3",{attrs:{id:"접근-설정-선택-사항"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#접근-설정-선택-사항"}},[s._v("#")]),s._v(" 접근 설정 (선택 사항)")]),s._v(" "),t("h4",{attrs:{id:"호스트명과-mdns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#호스트명과-mdns"}},[s._v("#")]),s._v(" 호스트명과 mDNS")]),s._v(" "),t("p",[s._v("mDNS 사용하면, IP 주소 대신 호스트명으로 라즈베리파이에 연결할 수 있습니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" raspi-config\n")])])]),t("p",[t("strong",[s._v("Network Options > Hostname")]),s._v("로 이동하십시오. 설정하고 종료합니다. "),t("a",{attrs:{href:"https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("비밀번호 없는 인증"),t("OutboundLink")],1),s._v("도 설정 가능합니다.")]),s._v(" "),t("h3",{attrs:{id:"운영체제-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#운영체제-설정"}},[s._v("#")]),s._v(" 운영체제 설정")]),s._v(" "),t("h4",{attrs:{id:"config-txt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-txt"}},[s._v("#")]),s._v(" config.txt")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /boot/config.txt\n")])])]),t("p",[s._v("파일을 다음의 내용으로 변경합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable sc16is752 overlay")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtoverlay")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sc16is752-spi1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable I2C-1 and set the frequency to 400KHz")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtparam")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("i2c_arm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on,i2c_arm_baudrate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("400000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable spidev0.0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtparam")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("spi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable RC input")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enable_uart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable I2C-0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtparam")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("i2c_vc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# switch Bluetooth to miniuart")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtoverlay")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("miniuart-bt\n")])])]),t("h4",{attrs:{id:"cmdline-txt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmdline-txt"}},[s._v("#")]),s._v(" cmdline.txt")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" raspi-config\n")])])]),t("p",[t("strong",[s._v("Interfacing Options > Serial > login shell = No > hardware = Yes")]),s._v(". 로그인 셸없이 UART를 활성화합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /boot/cmdline.txt\n")])])]),t("p",[s._v("마지막 단어 뒤에 "),t("code",[s._v("isolcpus=2")]),s._v("를 추가합니다. 전체 파일은 다음과 같습니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tty1 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("root")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PARTUUID"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxxxxxxx-xx "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rootfstype")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ext4 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("elevator")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("deadline fsck.repair"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes rootwait "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("isolcpus")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),t("p",[s._v("이것은 리눅스 커널이 CPU 코어 2에서 프로세스를 예약하지 않도록 지시합니다. 나중에 해당 코어에서 PX4를 수동으로 실행합니다.")]),s._v(" "),t("p",[s._v("재부팅하고 라즈베리파이에 SSH로 로그인합니다.")]),s._v(" "),t("p",[s._v("UART 인터페이스를 확인합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /dev/tty*\n")])])]),t("p",[t("code",[s._v("/dev/ttyAMA0")]),s._v(", "),t("code",[s._v("/dev/ttySC0")]),s._v(" 및 "),t("code",[s._v("/dev/ttySC1")]),s._v(" 파일이 있어야합니다.")]),s._v(" "),t("p",[s._v("I2C 인터페이스를 확인합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /dev/i2c*\n")])])]),t("p",[t("code",[s._v("/dev/i2c-0")]),s._v(" 와 "),t("code",[s._v("/dev/i2c-1")]),s._v(" 파일이 있어야 합니다.")]),s._v(" "),t("p",[s._v("SPI 인터페이스를 확인합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /dev/spidev*\n")])])]),t("p",[t("code",[s._v("/dev/spidev0.0")]),s._v(" 파일이 있어야 합니다.")]),s._v(" "),t("h4",{attrs:{id:"rc-local"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rc-local"}},[s._v("#")]),s._v(" rc.local")]),s._v(" "),t("p",[s._v("이 섹션에서는 "),t("strong",[s._v("rc.local")]),s._v(" 자동 시작 스크립트를 설정합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/rc.local\n")])])]),t("p",[t("code",[s._v("exit 0")]),s._v(" 줄 위에 아래 내용을 추가합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"25"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/gpio/export\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"in"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/gpio/gpio25/direction\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /sys/class/gpio/gpio25/value"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Launching PX4"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/pi/px4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" taskset -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ./bin/px4 -d -s pilotpi_mc.config "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /home/pi/px4/px4.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"25"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/gpio/unexport\n")])])]),t("p",[s._v("저장후 종료합니다.")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("필요 없는 경우에는 스위치를 꺼는 것을 잊지 마십시오.")])]),s._v(" "),t("h4",{attrs:{id:"csi-카메라"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csi-카메라"}},[s._v("#")]),s._v(" CSI 카메라")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("Enable CSI 카메라는 I2C-0에서 작동하는 모든 것을 중지합니다.")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" raspi-config\n")])])]),t("p",[t("strong",[s._v("Interfacing Options > Camera")])]),s._v(" "),t("h3",{attrs:{id:"코드-빌드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#코드-빌드"}},[s._v("#")]),s._v(" 코드 빌드")]),s._v(" "),t("p",[s._v("터미널에 다음 명령을 실행하여 "),t("em",[s._v("최신")]),s._v(" 버전의 소스를 복제하십시오.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("최신 코드를 빌드하는 과정입니다.")])]),s._v(" "),t("h4",{attrs:{id:"raspberry-pi-os용-크로스-빌드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-os용-크로스-빌드"}},[s._v("#")]),s._v(" Raspberry Pi OS용 크로스 빌드")]),s._v(" "),t("p",[s._v("다음을 사용하여 라즈베리파이의 IP(또는 호스트 이름)를 설정합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AUTOPILOT_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".X.X\n")])])]),t("p",[s._v("또는")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AUTOPILOT_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pi_hostname.local\n")])])]),t("p",[s._v("실행 파일을 빌드하십시오.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" PX4-Autopilot\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" scumaker_pilotpi_default\n")])])]),t("p",[s._v("다음 명령으로 업로드하십시오.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" scumaker_pilotpi_default upload\n")])])]),t("p",[s._v("ssh에서 다음을 명령어를 실행하십시오.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" px4\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" taskset -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ./bin/px4 -s pilotpi_mc.config\n")])])]),t("p",[s._v("이제 PX4는 다중로터 설정으로 시작합니다.")]),s._v(" "),t("p",[s._v("라즈베리파이에서 "),t("code",[s._v("bin/px4")]),s._v("를 실행시 다음과 같은 유사한 문제가 발생한 경우:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("bin/px4: /lib/xxxx/xxxx: version `GLIBC_2.29' not found (required by bin/px4)\n")])])]),t("p",[s._v("docker로 컴파일하여야 합니다.")]),s._v(" "),t("p",[s._v("다음 단계로 진행하기 전에 먼저 기존 빌드를 삭제합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf build/scumaker_pilotpi_default\n")])])]),t("h3",{attrs:{id:"대체-빌드-방법-도커-사용"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#대체-빌드-방법-도커-사용"}},[s._v("#")]),s._v(" 대체 빌드 방법 (도커 사용)")]),s._v(" "),t("p",[s._v("다음 방법은 CI에 배포된 동일한 도구 세트를 제공할 수 있습니다.")]),s._v(" "),t("p",[s._v("docker로 처음 컴파일하는 경우에는 "),t("RouterLink",{attrs:{to:"/ko/test_and_ci/docker.html#prerequisites"}},[s._v("공식 문서")]),s._v("를 참조하십시오.")],1),s._v(" "),t("p",[s._v("PX4-Autopilot 폴더에서 다음 명령을 실행합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./Tools/docker_run.sh "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export AUTOPILOT_HOST=192.168.X.X; export NO_NINJA_BUILD=1; make scumaker_pilotpi_default upload"')]),s._v("\n")])])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("mDNS는 docker에서 지원하지 않습니다. 업로드시에 올바른 IP 주소를 설정하여야합니다.")])]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("IDE가 ninja 빌드를 지원하지 않는 경우 `NO_NINJA_BUILD = 1` 옵션을 사용하십시오. 업로드하지 않고도 컴파일할 수 있습니다. `upload` 대상을 제거하십시오.")])]),s._v(" "),t("p",[s._v("다음 명령으로 코드를 컴파일합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./Tools/docker_run.sh "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"make scumaker_pilotpi_default"')]),s._v("\n")])])]),t("h3",{attrs:{id:"사후-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#사후-설정"}},[s._v("#")]),s._v(" 사후 설정")]),s._v(" "),t("p",[s._v("기체가 제대로 작동하려면 이러한 추가 항목을 확인하여야 합니다.")]),s._v(" "),t("h4",{attrs:{id:"믹서-파일"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#믹서-파일"}},[s._v("#")]),s._v(" 믹서 파일")]),s._v(" "),t("p",[s._v("믹서 파일은 "),t("code",[s._v("pilotpi_xx.conf")]),s._v("에 정의되어 있습니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mixer load /dev/pwm_output0 etc/mixers/quad_x.main.mix\n")])])]),t("p",[s._v("사용 가능한 모든 믹서는 "),t("code",[s._v("etc/mixers")]),s._v("에 저장됩니다. 직접 만들 수도 있습니다.")]),s._v(" "),t("h4",{attrs:{id:"외부-나침반"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#외부-나침반"}},[s._v("#")]),s._v(" 외부 나침반")]),s._v(" "),t("p",[s._v("시작 스크립트("),t("code",[s._v("*. config")]),s._v(")에서 다음을 찾을 수 있습니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# external GPS & compass")]),s._v("\ngps start -d /dev/ttySC0 -i uart -p ubx -s\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#hmc5883 start -X")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ist8310 start -X")]),s._v("\n")])])]),t("p",[s._v("사용자의 환경에 맞추어 주석을 적절하게 제거하십시오. GPS 모듈과 함께 제공되는 나침반이 확실하지 않습니까? 다음 명령을 실행하고 출력을 확인합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" i2c-tools\ni2cdetect -y "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("p",[s._v("샘플 출력:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f\n00:          -- -- -- -- -- -- -- -- -- -- -- 0e -- \n10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- 1e -- \n20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- \n70: -- -- -- -- -- -- -- --\n")])])]),t("p",[t("code",[s._v("1e")]),s._v("는 HMC5883 기반 나침반이 외부 I2C 버스에 장착되어 있음을 나타냅니다. 마찬가지로, IST8310의 값은 "),t("code",[s._v("0e")]),s._v("입니다.")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("일반적으로 그중 하나에 나타납니다. 외부 I2C 버스에 연결된 경우 다른 장치도 여기에 같이 표시됩니다. ("),t("code",[s._v("/dev/i2c-0")]),s._v(")")])])])}),[],!1,null,null,null);a.default=r.exports}}]);