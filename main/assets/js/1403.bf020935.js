(window.webpackJsonp=window.webpackJsonp||[]).push([[1403],{2648:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"우분투-서버-기반-파일럿파이"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#우분투-서버-기반-파일럿파이"}},[s._v("#")]),s._v(" 우분투 서버 기반 파일럿파이")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("라즈베리파이 4B의 우분투 서버는 많은 전류를 소비하고 많은 열을 발생합니다.\n이 하드웨어를 사용시에는 고열 방출과 고전력 소비 환경을 고려하여 설계되었습니다.")])]),s._v(" "),t("h2",{attrs:{id:"개발자-가이드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#개발자-가이드"}},[s._v("#")]),s._v(" 개발자 가이드")]),s._v(" "),t("h3",{attrs:{id:"운영체제-이미지"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#운영체제-이미지"}},[s._v("#")]),s._v(" 운영체제 이미지")]),s._v(" "),t("p",[s._v("armhf와 arm64 arch가 모두 지원됩니다.")]),s._v(" "),t("h4",{attrs:{id:"armhf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#armhf"}},[s._v("#")]),s._v(" armhf")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://cdimage.ubuntu.com/releases/18.04.5/release/ubuntu-18.04.5-preinstalled-server-armhf+raspi2.img.xz",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu Server 18.04.5 for RPi2"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://cdimage.ubuntu.com/releases/18.04.5/release/ubuntu-18.04.5-preinstalled-server-armhf+raspi3.img.xz",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu Server 18.04.5 for RPi3"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://cdimage.ubuntu.com/releases/18.04.5/release/ubuntu-18.04.5-preinstalled-server-armhf+raspi4.img.xz",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu Server 18.04.5 for RPi4"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://cdimage.ubuntu.com/releases/20.04.1/release/ubuntu-20.04.2-preinstalled-server-arm64+raspi.img.xz",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu Server 20.04.1 for RPi 2/3/4"),t("OutboundLink")],1)])]),s._v(" "),t("h4",{attrs:{id:"arm64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arm64"}},[s._v("#")]),s._v(" arm64")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://cdimage.ubuntu.com/releases/18.04.5/release/ubuntu-18.04.5-preinstalled-server-arm64+raspi3.img.xz",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu Server 18.04.5 for RPi3"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://cdimage.ubuntu.com/releases/18.04.5/release/ubuntu-18.04.5-preinstalled-server-arm64+raspi4.img.xz",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu Server 18.04.5 for RPi4"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://cdimage.ubuntu.com/releases/20.04.1/release/ubuntu-20.04.2-preinstalled-server-arm64+raspi.img.xz",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ubuntu Server 20.04.1 for RPi 3/4"),t("OutboundLink")],1)])]),s._v(" "),t("h4",{attrs:{id:"최신-운영체제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#최신-운영체제"}},[s._v("#")]),s._v(" 최신 운영체제")]),s._v(" "),t("p",[s._v("새로운 업데이트 버전은 공식 "),t("a",{attrs:{href:"https://cdimage.ubuntu.com/releases/",target:"_blank",rel:"noopener noreferrer"}},[s._v("cdimage"),t("OutboundLink")],1),s._v(" 페이지를 참조하십시오.")]),s._v(" "),t("h3",{attrs:{id:"최초-부팅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#최초-부팅"}},[s._v("#")]),s._v(" 최초 부팅")]),s._v(" "),t("p",[s._v("라즈베리파이의 WiFi를 처음 설정시 홈 라우터와 라즈벡리파이, 모니터와 키보드 사이에 유선 이더넷 연결을 사용하는 것이 편리합니다.")]),s._v(" "),t("h4",{attrs:{id:"부팅전-과정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#부팅전-과정"}},[s._v("#")]),s._v(" 부팅전 과정")]),s._v(" "),t("p",[s._v("SD 카드를 컴퓨터에 장착하고 네트워크 설정을 수정합니다.")]),s._v(" "),t("p",[s._v("공식 가이드</ 0>를 참고하십시오.")]),t("p"),s._v(" "),t("p",[s._v("이제 SD 카드를 라즈베리파이에 삽입하고, 처음으로 부팅하십시오. 유선 이더넷을 통한 SSH 연결하거나 또는 키보드 및 모니터를 통하여 라즈베리파이 쉘 액세스 권한을 확인하십시오.")]),s._v(" "),t("h4",{attrs:{id:"wifi-지역"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wifi-지역"}},[s._v("#")]),s._v(" WiFi 지역")]),s._v(" "),t("p",[s._v("먼저 필요한 패키지를 설치하십시오.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" crda\n")])])]),t("p",[t("code",[s._v("/etc/default/crda")]),s._v(" 파일을 편집하여 WiFi 지역을 설정하십시오. "),t("a",{attrs:{href:"https://www.arubanetworks.com/techdocs/InstantWenger_Mobile/Advanced/Content/Instant%20User%20Guide%20-%20volumes/Country_Codes_List.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("참고 목록"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/default/crda\n")])])]),t("p",[s._v("라즈베리파이는 재부팅후 WiFi 네트워크에 연결할 수 있습니다.")]),s._v(" "),t("h4",{attrs:{id:"호스트명과-mdns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#호스트명과-mdns"}},[s._v("#")]),s._v(" 호스트명과 mDNS")]),s._v(" "),t("p",[s._v("먼저 호스트 이름을 설정합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/hostname\n")])])]),t("p",[s._v("호스트 이름을 적절하게 변경하십시오. 그런 다음 mDNS에 필요한 패키지를 설치합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" avahi-daemon\n")])])]),t("p",[s._v("재부팅합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])])]),t("p",[s._v("위의 작업 후 WiFi 접근성을 회복하십시오.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" ubuntu@pi_hostname.local\n")])])]),t("h4",{attrs:{id:"무-비밀번호-인증-선택-사항"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#무-비밀번호-인증-선택-사항"}},[s._v("#")]),s._v(" 무 비밀번호 인증 (선택 사항)")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("비밀번호 없는 인증"),t("OutboundLink")],1),s._v("도 설정 가능합니다.")]),s._v(" "),t("h3",{attrs:{id:"운영체제-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#운영체제-설정"}},[s._v("#")]),s._v(" 운영체제 설정")]),s._v(" "),t("h4",{attrs:{id:"config-txt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-txt"}},[s._v("#")]),s._v(" config.txt")]),s._v(" "),t("p",[s._v("우분투의 해당 파일은 "),t("code",[s._v("/boot/firmware/usercfg.txt")]),s._v(" 입니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /boot/firmware/usercfg.txt\n")])])]),t("p",[s._v("파일을 다음의 내용으로 변경합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable sc16is752 overlay")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtoverlay")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sc16is752-spi1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable I2C-1 and set the frequency to 400KHz")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtparam")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("i2c_arm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on,i2c_arm_baudrate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("400000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable spidev0.0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtparam")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("spi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable RC input")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enable_uart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable I2C-0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtparam")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("i2c_vc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# switch Bluetooth to miniuart")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtoverlay")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("miniuart-bt\n")])])]),t("h4",{attrs:{id:"cmdline-txt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmdline-txt"}},[s._v("#")]),s._v(" cmdline.txt")]),s._v(" "),t("p",[s._v("우분투 서버 20.04 에서:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /boot/firmware/cmdline.txt\n")])])]),t("p",[s._v("우분투 서버 18.04 이전 버전에서는 "),t("code",[s._v("nobtcmd.txt")]),s._v("와 "),t("code",[s._v("btcmd.txt")]),s._v("를 모두 수정하여야 합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /boot/firmware/nobtcmd.txt\n")])])]),t("p",[t("code",[s._v("console=/dev/ttyAMA0,115200")]),s._v("을 찾아 제거하여, 직렬 인터페이스에서 로그인 쉘을 비활성화합니다.")]),s._v(" "),t("p",[s._v("마지막 단어 뒤에 "),t("code",[s._v("isolcpus=2")]),s._v("를 추가합니다. 그러면 전체 파일이 다음과 같이 표시됩니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("net.ifnames"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" dwc_otg.lpm_enable"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tty1 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("root")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("LABEL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("writable "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rootfstype")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ext4 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("elevator")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("deadline rootwait fixrtc "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("isolcpus")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),t("p",[s._v("위의 줄은 Linux 커널이 CPU 코어 2에서 프로세스를 예약하지 않음을 나타냅니다. 나중에 해당 코어에서 PX4를 수동으로 실행합니다.")]),s._v(" "),t("p",[s._v("재부팅하고 라즈베리파이에 SSH로 로그인합니다.")]),s._v(" "),t("p",[s._v("UART 인터페이스를 확인합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /dev/tty*\n")])])]),t("p",[t("code",[s._v("/dev/ttyAMA0")]),s._v(", "),t("code",[s._v("/dev/ttySC0")]),s._v(" 및 "),t("code",[s._v("/dev/ttySC1")]),s._v(" 파일이 있어야합니다.")]),s._v(" "),t("p",[s._v("I2C 인터페이스를 확인합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /dev/i2c*\n")])])]),t("p",[t("code",[s._v("/dev/i2c-0")]),s._v(" 와 "),t("code",[s._v("/dev/i2c-1")]),s._v(" 파일이 있어야 합니다.")]),s._v(" "),t("p",[s._v("SPI 인터페이스를 확인합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /dev/spidev*\n")])])]),t("p",[t("code",[s._v("/dev/spidev0.0")]),s._v(" 파일이 있어야 합니다.")]),s._v(" "),t("h4",{attrs:{id:"rc-local"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rc-local"}},[s._v("#")]),s._v(" rc.local")]),s._v(" "),t("p",[s._v("이 섹션에서는 "),t("strong",[s._v("rc.local")]),s._v(" 자동 시작 스크립트를 설정합니다. 이 파일은 Ubuntu OS에 설치시에는 존재하지 않으므로, 생성하여야합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/rc.local\n")])])]),t("p",[s._v("아래 내용을 파일에 추가하십시오.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"25"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/gpio/export\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"in"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/gpio/gpio25/direction\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /sys/class/gpio/gpio25/value"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Launching PX4"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/ubuntu/px4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" taskset -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ./bin/px4 -d -s pilotpi_mc.config "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /home/ubuntu/px4/px4.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"25"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/gpio/unexport\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("p",[s._v("저장후 종료합니다. 그런 다음 권한을 설정하십시오.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /etc/rc.local\n")])])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("필요 없는 경우에는 전원 스위치를 꺼는 것을 잊지 마십시오!")])]),s._v(" "),t("h4",{attrs:{id:"csi-카메라"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csi-카메라"}},[s._v("#")]),s._v(" CSI 카메라")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("Enable CSI 카메라는 I2C-0에서 작동하는 모든 것을 중지합니다.")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /boot/firmware/usercfg.txt\n")])])]),t("p",[s._v("파일 끝에 다음 내용을 추가합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("start_x")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),t("h3",{attrs:{id:"코드-빌드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#코드-빌드"}},[s._v("#")]),s._v(" 코드 빌드")]),s._v(" "),t("p",[s._v("터미널에 다음 명령을 실행하여 "),t("em",[s._v("최신")]),s._v(" 버전의 소스를 복제하십시오.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("최신 코드를 빌드하는 과정입니다.")])]),s._v(" "),t("h4",{attrs:{id:"라즈베리파이-업로드-대상-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#라즈베리파이-업로드-대상-설정"}},[s._v("#")]),s._v(" 라즈베리파이 업로드 대상 설정")]),s._v(" "),t("p",[s._v("다음을 사용하여 라즈베리파이의 IP(또는 호스트 이름)를 설정합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AUTOPILOT_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".X.X\n")])])]),t("p",[s._v("또는")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AUTOPILOT_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pi_hostname.local\n")])])]),t("p",[s._v("사용자 이름을 설정하여야 합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AUTOPILOT_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ubuntu\n")])])]),t("h4",{attrs:{id:"armhf-타겟용-빌드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#armhf-타겟용-빌드"}},[s._v("#")]),s._v(" armhf 타겟용 빌드")]),s._v(" "),t("p",[s._v("실행 파일을 빌드하십시오.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" Firmware\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" scumaker_pilotpi_default\n")])])]),t("p",[s._v("다음 명령으로 업로드하십시오:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" scumaker_pilotpi_default upload\n")])])]),t("h4",{attrs:{id:"armhf용-대체-빌드-방법-도커-사용"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#armhf용-대체-빌드-방법-도커-사용"}},[s._v("#")]),s._v(" armhf용 대체 빌드 방법 (도커 사용)")]),s._v(" "),t("p",[s._v("If you are compiling for the first time with docker, please refer to the "),t("RouterLink",{attrs:{to:"/ko/test_and_ci/docker.html#prerequisites"}},[s._v("official docs")]),s._v(".")],1),s._v(" "),t("p",[s._v("firmware 폴더에서 다음 명령을 실행합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./Tools/docker_run.sh "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export AUTOPILOT_HOST=192.168.X.X; export AUTOPILOT_USER=ubuntu; export NO_NINJA_BUILD=1; make scumaker_pilotpi_default upload"')]),s._v("\n")])])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("mDNS는 docker에서 지원하지 않습니다. 업로드시에 올바른 IP 주소를 설정하여야합니다.")])]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("IDE가 ninja 빌드를 지원하지 않는 경우 `NO_NINJA_BUILD = 1` 옵션을 사용하십시오. 업로드하지 않고도 컴파일할 수 있습니다. `upload` 대상을 제거하십시오.")])]),s._v(" "),t("p",[s._v("다음 명령으로 코드를 컴파일합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./Tools/docker_run.sh "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"make scumaker_pilotpi_default"')]),s._v("\n")])])]),t("h4",{attrs:{id:"arm64-타겟용-빌드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arm64-타겟용-빌드"}},[s._v("#")]),s._v(" arm64 타겟용 빌드")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("이 단계에서는 "),t("code",[s._v("aarch64-linux-gnu")]),s._v(" 도구 체인을 설치하여야 합니다.")])]),s._v(" "),t("p",[s._v("실행 파일을 빌드하십시오.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" PX4-Autopilot\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" scumaker_pilotpi_arm64\n")])])]),t("p",[s._v("다음 명령으로 업로드하십시오:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" scumaker_pilotpi_arm64 upload\n")])])]),t("h4",{attrs:{id:"arm64용-대체-빌드-방법-도커-사용"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arm64용-대체-빌드-방법-도커-사용"}},[s._v("#")]),s._v(" arm64용 대체 빌드 방법 (도커 사용)")]),s._v(" "),t("p",[s._v("If you are compiling for the first time with docker, please refer to the "),t("RouterLink",{attrs:{to:"/ko/test_and_ci/docker.html#prerequisites"}},[s._v("official docs")]),s._v(".")],1),s._v(" "),t("p",[t("code",[s._v("PX4-Autopilot")]),s._v(" 폴더에서 다음 명령을 실행합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./Tools/docker_run.sh "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export AUTOPILOT_HOST=192.168.X.X; export AUTOPILOT_USER=ubuntu; export NO_NINJA_BUILD=1; make scumaker_pilotpi_arm64 upload"')]),s._v("\n")])])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("mDNS는 docker에서 지원하지 않습니다. 업로드시에 올바른 IP 주소를 설정하여야합니다.")])]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("IDE가 ninja 빌드를 지원하지 않는 경우 `NO_NINJA_BUILD = 1` 옵션을 사용하십시오. `upload` 대상을 제거하면, 업로드하지 않고도 컴파일할 수 있습니다.")])]),s._v(" "),t("p",[s._v("다음 명령으로 코드를 컴파일합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./Tools/docker_run.sh "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"make scumaker_pilotpi_arm64"')]),s._v("\n")])])]),t("h4",{attrs:{id:"수동-px4-실행"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#수동-px4-실행"}},[s._v("#")]),s._v(" 수동 PX4 실행")]),s._v(" "),t("p",[s._v("ssh에서 다음을 명령어를 실행하십시오.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" px4\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" taskset -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ./bin/px4 -s pilotpi_mc.config\n")])])]),t("p",[s._v("이제 PX4는 다중로터 설정으로 시작합니다.")]),s._v(" "),t("p",[s._v("라즈베리파이에서 "),t("code",[s._v("bin/px4")]),s._v("를 실행시 다음과 같은 유사한 문제가 발생한 경우:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("bin/px4: /lib/xxxx/xxxx: version `GLIBC_2.29' not found (required by bin/px4)\n")])])]),t("p",[s._v("docker로 컴파일하여야 합니다.")]),s._v(" "),t("p",[s._v("다음 단계로 진행하기 전에 먼저 기존 빌드를 삭제합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf build/scumaker_pilotpi_*\n")])])]),t("p",[s._v("그런 다음 위의 해당 부분에서 계속 진행합니다.")]),s._v(" "),t("h3",{attrs:{id:"사후-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#사후-설정"}},[s._v("#")]),s._v(" 사후 설정")]),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ko/flight_controller/raspberry_pi_pilotpi_rpios.html"}},[s._v("여기")]),s._v("의 지침을 참조하십시오.")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);