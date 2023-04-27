(window.webpackJsonp=window.webpackJsonp||[]).push([[776],{2657:function(s,a,t){"use strict";t.r(a);var e=t(19),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"raspberry-pi-2-3-navio2-자동조종장치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi-2-3-navio2-자동조종장치"}},[s._v("#")]),s._v(" Raspberry Pi 2/3 Navio2 자동조종장치")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("PX4에서는 이 제품을 제조하지 않습니다. 하드웨어 지원과 호환 문제는 [제조사](https://emlid.com/)에 문의하십시오.")])]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("이 비행 콘트롤러에 대한 PX4는 "),e("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[s._v("테스트 단계")]),s._v("입니다.")],1)]),s._v(" "),e("p",[s._v("Raspberry Pi 2/3 Navio2 오토파일럿의 개발자 퀵 스타트 가이드입니다. 이를 통해 PX4를 빌드하고 Raspberry Pi로 전송하거나 빌드할 수 있습니다.")]),s._v(" "),e("p",[e("img",{attrs:{src:t(895),alt:"라즈베리파이 이미지"}})]),s._v(" "),e("h2",{attrs:{id:"운영체제-이미지"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#운영체제-이미지"}},[s._v("#")]),s._v(" 운영체제 이미지")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://docs.emlid.com/navio2/configuring-raspberry-pi",target:"_blank",rel:"noopener noreferrer"}},[s._v("Navio 2용 Emlid RT Raspbian 이미지"),e("OutboundLink")],1),s._v("를 사용하십시오. 기본 이미지에는 아래 표시된 대부분의 설정이 완료되어 있습니다.")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("시스템  커널을 업그레이드 하지마십시오. 업그레이드하면 필요한 HW 지원이 없는 새 커널을 설치할 수 있습니다. "),e("code",[s._v("ls /sys/class/pwm")]),s._v("으로 확인할 수 있습니다. 디렉토리가 비어 있으면 안됩니다.")])]),s._v(" "),e("h2",{attrs:{id:"접근-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#접근-설정"}},[s._v("#")]),s._v(" 접근 설정")]),s._v(" "),e("p",[s._v('Raspbian 이미지에는 이미 SSH 설정이 되어있습니다. 사용자 이름은 "pi"이고, 비밀번호는 "raspberry"입니다. 네트워크를 통해 RPi2/3에 연결한 다음(이더넷은 기본적으로 DHCP와 함께 제공되도록 설정 됨) WiFi 액세스 설정을 할 수 있습니다. 이 가이드에서는 사용자 이름과 암호가 기본값으로 유지된다고 가정합니다.')]),s._v(" "),e("p",[s._v("RPi2/3를 설정하여 로컬 Wi-Fi에 연결하려면 "),e("a",{attrs:{href:"https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("이 가이드"),e("OutboundLink")],1),s._v("를 참고하십시오.")]),s._v(" "),e("p",[s._v("네트워크에서 라즈베리파이의 IP 주소를 검색한 다음, SSH를 사용하여 연결할 수 있습니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" pi@"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IP-ADDRESS"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),e("h2",{attrs:{id:"파일시스템-확장"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#파일시스템-확장"}},[s._v("#")]),s._v(" 파일시스템 확장")]),s._v(" "),e("p",[s._v("OS를 설치후 "),e("a",{attrs:{href:"https://www.raspberrypi.org/documentation/configuration/raspi-config.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("파일시스템을 확장"),e("OutboundLink")],1),s._v("하여 SD 카드에 전영역을 확보하십시오.")]),s._v(" "),e("h2",{attrs:{id:"navio-rgb-오버레이-비활성화"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#navio-rgb-오버레이-비활성화"}},[s._v("#")]),s._v(" Navio RGB 오버레이 비활성화")]),s._v(" "),e("p",[s._v("기존 Navio RGB 오버레이는 PX4에서 RGB Led 용으로 사용하는 GPIO를 요구합니다. "),e("code",[s._v("navio-rgb")]),s._v(" 오버레이를 활성화하는 줄에 주석을 달아 "),e("code",[s._v("/boot/config.txt")]),s._v("를 편집합니다.")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#dtoverlay=navio-rgb\n")])])]),e("h2",{attrs:{id:"호스트명-변경"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#호스트명-변경"}},[s._v("#")]),s._v(" 호스트명 변경")]),s._v(" "),e("p",[s._v('네트워크에있는 다른 라즈베리파이와 충돌을 방지하려면 기본 호스트 이름을 변경하는 것이 좋습니다. 설정 예제에서는 "px4autopilot"을 사용하였습니다. SSH를 통해 라즈베리파이에 연결하고 아래의 지침을 따르십시오.')]),s._v(" "),e("p",[s._v("호스트명 파일을 편집합니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/hostname\n")])])]),e("p",[s._v("`raspberry</ 0>를 원하는 호스트명으로 변경하십시오(제한된 문자가 있는 한 단어 적용).")]),e("p"),s._v(" "),e("p",{attrs:{"spaces-before":"0"}},[s._v("다음으로 호스트 파일을 변경해야합니다.")]),s._v(" "),e("pre",[e("code",{staticClass:"sh"},[s._v("sudo nano /etc/hosts\n`")])]),s._v(" "),e("p",[e("code",[s._v("127.0.1.1 raspberry")]),s._v(" 항목을 "),e("code",[s._v("127.0.1.1 <YOURNEWHOSTNAME>")]),s._v("로 변경합니다.")]),s._v(" "),e("p",[s._v("완료후 라즈베리파이를 재부팅하여 네트워크에 다시 연결합니다.")]),s._v(" "),e("h2",{attrs:{id:"avahi-설정-zeroconf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#avahi-설정-zeroconf"}},[s._v("#")]),s._v(" Avahi 설정 (Zeroconf)")]),s._v(" "),e("p",[s._v("라즈베리파이에 쉽게 연결하려면 호스트 이름을 직접 지정하여 모든 네트워크에서 쉽게 접근할 수 있는 Avahi(Zeroconf)를 설정하는 것이 좋습니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" avahi-daemon\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" insserv avahi-daemon\n")])])]),e("p",[s._v("다음으로 Avahi 설정 파일을 편집합니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/avahi/services/multiple.service\n")])])]),e("p",[s._v("다음 내용을 파일에 추가하십시오.")]),s._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token prolog"}},[s._v("<?xml version=\"1.0\" standalone='no'?>")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token doctype"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<!")]),e("span",{pre:!0,attrs:{class:"token doctype-tag"}},[s._v("DOCTYPE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token name"}},[s._v("service-group")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token name"}},[s._v("SYSTEM")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"avahi-service.dtd"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("service-group")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("name")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("replace-wildcards")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("yes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("%h"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("_device-info._tcp"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("0"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("txt-record")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("model=RackMac"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("txt-record")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("_ssh._tcp"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("22"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("service-group")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n")])])]),e("p",[s._v("데몬 다시 시작합니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/init.d/avahi-daemon restart\n")])])]),e("p",[s._v("이제, 완료되었습니다. 네트워크의 모든 컴퓨터에서 호스트 이름으로 라즈베리파이에 직접 접근할 수 있어야 합니다.")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("검색하려면 호스트 이름에 .local을 추가해야 하는 경우도 있습니다.")])]),s._v(" "),e("h2",{attrs:{id:"ssh-공개키-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh-공개키-설정"}},[s._v("#")]),s._v(" SSH 공개키 설정")]),s._v(" "),e("p",[s._v("PX4 실행 파일을 보드에 자동으로 푸시하려면 라즈베리파이에 암호가 필요없는 접근 방법을 설정하여야합니다. 이를 위하여 공개키 인증 방법을 사용합니다.")]),s._v(" "),e("p",[s._v("새 SSH 키를 생성하려면 다음 명령을 입력하십시오. "),e("code",[s._v("<YOURNANME>@<YOURDEVICE>")]),s._v("에 적절한 호스트 이름을 선택하십시오.  여기서는 "),e("code",[s._v("pi@px4autopilot")]),s._v("을 사용하였습니다.")]),s._v(" "),e("p",[s._v("이 명령은 HOST 개발 컴퓨터에서 실행되어야합니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("ssh-keygen -t rsa -C pi@px4autopilot\n")])])]),e("p",[s._v("이 명령을 입력하면 키를 저장할 위치를 묻는 메시지가 표시됩니다. Enter를 눌러 기본 위치($HOME/.ssh/id_rsa)에 저장하는 것이 좋습니다.")]),s._v(" "),e("p",[s._v("이제 홈 폴더의 "),e("code",[s._v(".ssh")]),s._v(" 디렉토리에 "),e("code",[s._v("id_rsa")]),s._v("와 "),e("code",[s._v("id_rsa.pub")]),s._v(" 파일이 표시됩니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" ~/.ssh\nauthorized_keys  id_rsa  id_rsa.pub  known_hosts\n")])])]),e("p",[e("code",[s._v("id_rsa")]),s._v(" 파일은 개인키입니다. 이 파일은 개발 컴퓨터에 보관하십시오. "),e("code",[s._v("id_rsa.pub")]),s._v(" 파일은 공개키입니다. 이것은 연결 대상 컴퓨터에 보관합니다.")]),s._v(" "),e("p",[s._v("공개키를 라즈베리파이에 복사하려면 다음 명령을 사용하여 authorized_keys 파일에 공개키를 추가하고 SSH를 통해 전송합니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa.pub "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" pi@px4autopilot "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cat >> .ssh/authorized_keys'")]),s._v("\n")])])]),e("p",[s._v('이번에는 암호(기본적으로 "raspberry")로 인증하여야 합니다.')]),s._v(" "),e("p",[s._v("이제, "),e("code",[s._v("ssh pi@px4autopilot")]),s._v("을 실행하면 비밀번호 프롬프트없이 연결됩니다.")]),s._v(" "),e("p",[s._v('"'),e("code",[s._v("Agent admitted failure to sign using the key.")]),s._v('" 메시지가 표시되면 RSA 또는 DSA ID를 인증 에이전트 ssh-agent에 추가하고 다음 명령을 실행합니다.')]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("ssh-add\n")])])]),e("p",[s._v("그래도 작동하지 않으면, "),e("code",[s._v("rm ~/.ssh/id*")]),s._v("로 키를 삭제하고 위의 과정을 다시 진행하십시오.")]),s._v(" "),e("h2",{attrs:{id:"파일-전송-테스트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#파일-전송-테스트"}},[s._v("#")]),s._v(" 파일 전송 테스트")]),s._v(" "),e("p",[s._v("SCP를 사용하여 네트워크(WiFi 또는 이더넷)를 통하여 개발 컴퓨터에서 대상 보드로 파일을 전송합니다.")]),s._v(" "),e("p",[s._v("설정을 테스트하려면 지금 네트워크를 통해 개발 PC에서 라즈베리파이로 파일을 푸시해보십시오. 라즈베리파이에 네트워크 접근 권한이 있는 지 확인후, SSH를 사용할 수 있습니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hello.txt\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" hello.txt pi@px4autopilot:/home/pi/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" hello.txt\n")])])]),e("p",[s._v('"hello.txt"파일을 라즈베리파이의 홈 폴더에 복사합니다. 파일이 실제로 복사되었는지 확인후, 다음 단계로 진행합니다.')]),s._v(" "),e("h2",{attrs:{id:"코드-빌드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#코드-빌드"}},[s._v("#")]),s._v(" 코드 빌드")]),s._v(" "),e("p",[s._v('아래와 같이 개발 컴퓨터( "크로스 컴파일러" 빌드)에서 소스 코드를 빌드하거나, 라즈베리파이에서( "네이티브" 빌드)에서 빌드할 수 있습니다.')]),s._v(" "),e("h3",{attrs:{id:"크로스-컴파일러-빌드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#크로스-컴파일러-빌드"}},[s._v("#")]),s._v(" 크로스 컴파일러 빌드")]),s._v(" "),e("p",[s._v("먼저 개발 컴퓨터에 "),e("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux.html"}},[s._v("Ubunto 개발 환경")]),s._v("을 설치하십시오.")],1),s._v(" "),e("p",[s._v("다음을 사용하여 라즈베리파이의 IP(또는 호스트 이름)를 설정합니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AUTOPILOT_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".X.X\n")])])]),e("p",[s._v("또는")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AUTOPILOT_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pi_hostname.domain\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v("환경변수는 빌드전에 설정하여야합니다. 그렇지 않으면, "),e("code",[s._v("make upload")]),s._v(" 과정에서 라즈베리파이 컴퓨터를 검색할 수 없습니다.")])]),s._v(" "),e("p",[s._v("실행 파일을 빌드하십시오.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" PX4-Autopilot\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" emlid_navio2 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for cross-compiler build")]),s._v("\n")])])]),e("p",[s._v("px4 실행 파일은 "),e("strong",[s._v("build/emlid_navio2_native/")]),s._v(" 디렉토리에 위치합니다. ssh로 라즈베리파에에 연결 가능 여부를 확인하십시오. "),e("a",{attrs:{href:"#setting-up-access"}},[s._v("라즈베리파이에 접근 방법")]),s._v("을 참고하십시오.")]),s._v(" "),e("p",[s._v("다음 명령으로 업로드하십시오.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" PX4-Autopilot\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" emlid_navio2 upload "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for cross-compiler build")]),s._v("\n")])])]),e("p",[s._v("그리고 SSH로 루트 계정으로 접근하여 다음 명령을 실행하십시오.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/px4\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ./bin/px4 -s px4.config\n")])])]),e("h3",{attrs:{id:"네이티브-빌드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#네이티브-빌드"}},[s._v("#")]),s._v(" 네이티브 빌드")]),s._v(" "),e("p",[s._v("네이티브 빌드는 라즈베리파이에서 실행하는 빌드입니다. 다른 옵션은 크로스 컴파일한 PX4 실행 파일를 라즈베리파이에 직접 푸시하는 것입니다.")]),s._v(" "),e("p",[s._v("Pi에서 아래의 명령을 실행하여 라즈베리파이에서 빌드 시스템을 설정합니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cmake python-empy\n")])])]),e("p",[s._v("펌웨어를 라즈베리파이에 직접 복제한 다음, 기본 대상("),e("code",[s._v("emlid_navio2_native")]),s._v(")을 빌드합니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" PX4-Autopilot\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" emlid_navio2_native\n")])])]),e("p",[s._v("px4 실행 파일은 "),e("strong",[s._v("build/emlid_navio2_default/")]),s._v(" 디렉토리에 위치합니다. 다음 명령어를 실행하십시오:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ./build/emlid_navio2_native/px4 build/emlid_navio2_native/etc -s ./posix-configs/rpi/px4.config\n")])])]),e("p",[s._v("px4를 실행한 성공적인 빌드 화면은 다음과 같습니다:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("\n______  __   __    ___\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ___ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" / /   /   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/ /  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" V /   / /"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  __/   /   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  / /_"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     / /^"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/\n\npx4 starting.\n\n\npxh"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),e("h2",{attrs:{id:"자동-실행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#자동-실행"}},[s._v("#")]),s._v(" 자동 실행")]),s._v(" "),e("p",[s._v("px4를 자동으로 시작하려면 "),e("strong",[s._v("/etc/rc.local")]),s._v(" 파일의 "),e("code",[s._v("exit 0")]),s._v(" 앞 줄에 아래 내용을 추가합니다. 네이티브 빌드를 사용하는 경우 적절하게 변경하십시오.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/pi "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./bin/px4 -d -s px4.config "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" px4.log\n")])])])])}),[],!1,null,null,null);a.default=n.exports},895:function(s,a,t){s.exports=t.p+"assets/img/hardware-rpi2.44769dea.jpg"}}]);