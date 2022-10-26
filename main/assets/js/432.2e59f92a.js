(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{1525:function(s,a,t){s.exports=t.p+"assets/img/setup_whole.a50d8747.jpg"},1526:function(s,a,t){s.exports=t.p+"assets/img/power-pins.b7d302d0.jpg"},2985:function(s,a,t){"use strict";t.r(a);var e=t(19),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"오드로이드-c1에서-qgroundcontrol로의-동영상-스트리밍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#오드로이드-c1에서-qgroundcontrol로의-동영상-스트리밍"}},[s._v("#")]),s._v(" 오드로이드 C1에서 QGroundControl로의 동영상 스트리밍")]),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v("이 글 일부는 내용이 오래됐습니다. 여러 커뮤니티 구성원은 최근 우분투 버전에 맞추어 절차를 다시 시험해주었으면 좋겠고, 위치에 오드로이드 설치 절차 내용도 가져다 두었으면 좋겠습니다.")])]),s._v(" "),e("p",[s._v("이 주제에서는 보조 컴퓨터("),e("a",{attrs:{href:"https://magazine.odroid.com/wp-content/uploads/odroid-c1-user-manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("Odroid C1"),e("OutboundLink")],1),s._v(")에 붙은 카메라(로지텍 C920)로 동영상을 촬영한 후 (무선랜 연결에 실어) 다른 컴퓨터로 실시간 전송하여 "),e("em",[s._v("QGroundControl")]),s._v("에 띄우는 방법을 보여드립니다.")]),s._v(" "),e("p",[s._v("하드웨어 구성은 아래 그림과 같습니다. 다음 부분으로 구성합니다:")]),s._v(" "),e("ul",[e("li",[s._v("오드로이드 C1")]),s._v(" "),e("li",[s._v("로지텍 카메라 C920")]),s._v(" "),e("li",[s._v("무선랜 모듈 TP-LINK TL-WN722N")])]),s._v(" "),e("p",[e("img",{attrs:{src:t(1525),alt:"설정"}})]),s._v(" "),e("p",[s._v("절차는 우분투 14.04에서 테스트했지만 최근 우분투 버전에서도 비슷한 방식으로 동작할 수도 있습니다.")]),s._v(" "),e("h2",{attrs:{id:"오드로이드-c1에-리눅스-환경-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#오드로이드-c1에-리눅스-환경-설치"}},[s._v("#")]),s._v(" 오드로이드 C1에 리눅스 환경 설치")]),s._v(" "),e("p",[s._v("오드로이드 C1에는 5V 직류 전원 커넥터로 전원을 공급합니다. 오드로이드를 드론에 연결할 경우 아래 그림과 같이 홀을 관통하는 "),e("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/how-to-solder---through-hole-soldering",target:"_blank",rel:"noopener noreferrer"}},[s._v("방식"),e("OutboundLink")],1),s._v("으로 5V 직류 연결 커넥터 옆 핀 두개의 납땜을 권장합니다.")]),s._v(" "),e("h2",{attrs:{id:"대안-전원-연결-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#대안-전원-연결-설정"}},[s._v("#")]),s._v(" 대안 전원 연결 설정")]),s._v(" "),e("p",[s._v("오드로이드 C1에는 5V 직류 전원 커넥터로 전원을 공급합니다. 오드로이드를 드론에 연결할 경우 아래 그림과 같이 홀을 관통하는 "),e("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/how-to-solder---through-hole-soldering",target:"_blank",rel:"noopener noreferrer"}},[s._v("방식"),e("OutboundLink")],1),s._v("으로 5V 직류 연결 커넥터 옆 핀 두개의 납땜을 권장합니다. 전원은 예제 설정과 같이 점퍼 케이블(그림 위쪽의 적색 케이블)을 직류 전압 공급원(5V)과 오드로이드 C1에 연결하고, 점퍼 케이블(그림 위쪽의 흑색)을 회로의 접지부와 오드로이드 C1의 접지 핀을 연결하여 끌어옵니다.")]),s._v(" "),e("p",[e("img",{attrs:{src:t(1526),alt:"전원 핀"}})]),s._v(" "),e("h2",{attrs:{id:"오드로이드-c1-무선랜-연결-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#오드로이드-c1-무선랜-연결-사용"}},[s._v("#")]),s._v(" 오드로이드 C1 무선랜 연결 사용")]),s._v(" "),e("p",[s._v('이 절에서는 오드로이드 C1을 액세스 포인트로 구성하는 방법을 알려드리겠습니다. 이 내용은 pixhawk.org의 "액세스 포인트" 구축 자습서(더이상 내용이 없음)의 일부 적용 예에서 가져왔습니다.')]),s._v(" "),e("h2",{attrs:{id:"무선랜-액세스-포인트-구성"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#무선랜-액세스-포인트-구성"}},[s._v("#")]),s._v(" 무선랜 액세스 포인트 구성")]),s._v(" "),e("p",[s._v("다음 단계에서는 오드로이드 C1에서 무선랜 모듈 이름을 wlan0(으)로 지정했음을 가정합니다. wlan0이(가) 나오는 모든 부분 대신 인터페이스 이름이 차이가 있는 경우 적절한 이름(예: wlan1)으로 바꾸십시오. Odroid C1으로 촬영한 카메라 동영상을 컴퓨터에서 실행하는 QGroundControl로의 실시간 전송을 활성화하려 한다면 이 절의 내용을 따를 필요가 없습니다. 그러나, 오드로이드 C1를 자체 동작 모드 시스템으로 사용할 수 있는 액세스 포인트로 구성할 것이기에 이 내용을 보여드립니다. TP-LINK TL-WN722N을 무선랜 모듈로 활용합니다.")]),s._v(" "),e("p",[s._v("다음 단계에서는 오드로이드 C1에서 무선랜 모듈 이름을 wlan0(으)로 지정했음을 가정합니다. wlan0이(가) 나오는 모든 부분 대신 인터페이스 이름이 차이가 있는 경우 적절한 이름(예: wlan1)으로 바꾸십시오.")]),s._v(" "),e("h3",{attrs:{id:"액세스-포인트-내장-컴퓨터"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#액세스-포인트-내장-컴퓨터"}},[s._v("#")]),s._v(" 액세스 포인트 내장 컴퓨터")]),s._v(" "),e("p",[s._v("좀 더 자세한 내용은 "),e("a",{attrs:{href:"http://elinux.org/RPI-Wireless-Hotspot",target:"_blank",rel:"noopener noreferrer"}},[s._v("RPI-Wireless-Hotspot"),e("OutboundLink")],1),s._v(" 문서를 살펴볼 수 있습니다")]),s._v(" "),e("p",[s._v("필요한 프로그램을 설치하십시오")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" hostapd udhcpd\n")])])]),e("p",[s._v("DHCP를 설정합니다. "),e("code",[s._v("/etc/udhcpd.conf")]),s._v(" 파일을 편집하십시오")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("start "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.100 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is the range of IPs that the hotspot will give to client devices.")]),s._v("\nend "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.200\ninterface wlan0 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The device uDHCP listens on.")]),s._v("\nremaining "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nopt dns "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.2")]),s._v(".2.2 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The DNS servers client devices will use (if routing through the Ethernet link).")]),s._v("\nopt subnet "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\nopt router "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.1 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The Onboard Computer's IP address on wlan0 which we will set up shortly.")]),s._v("\nopt lease "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("864000")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 10 day DHCP lease time in seconds")]),s._v("\n")])])]),e("p",[e("code",[s._v("/etc/default/udhcpd")]),s._v(" 파일을 편집하여 다음 줄을:")]),s._v(" "),e("p",[e("code",[s._v("/etc/default/udhcpd")]),s._v(" 파일을 편집하여 다음 줄을:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DHCPD_ENABLED")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v("\n")])])]),e("p",[s._v("다음처럼 주석 처리하십시오.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#DHCPD_ENABLED="no"')]),s._v("\n")])])]),e("p",[s._v("초기 (무선랜 클라이언트) 자동 설정을 끄십시오. 다음 줄을(아마 해당 설정은 같이 두지 않든지 모두 두지 않는게 좋을지도 모릅니다):")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("auto wlan0\niface wlan0 inet static\naddress "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.1\nnetmask "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\nnetwork "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.0\nbroadcast "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.255\nwireless-power off\n")])])]),e("p",[s._v("초기 (무선랜 클라이언트) 자동 설정을 끄십시오. 다음 줄을(아마 해당 설정은 같이 두지 않든지 모두 두지 않는게 좋을지도 모릅니다):")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("allow-hotplug wlan0\nwpa-roam /etc/wpa_supplicant/wpa_supplicant.conf\niface default inet dhcp\n")])])]),e("p",[s._v("을:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#allow-hotplug wlan0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#iface default inet dhcp")]),s._v("\n")])])]),e("p",[e("em",[s._v("오드로이드 C1 자습서")]),s._v("(pixhawk.org에 있었음)의 내용을 따라 무선랜 연결을 설정했다면, "),e("code",[s._v("/etc/network/interfaces.d/wlan0")]),s._v(" 파일을 이미 만들었을지도 모릅니다. 파일의 해당 줄을 모두 주석처리하여 더이상 설정 내용이 반영되지 않게 하십시오.")]),s._v(" "),e("p",[s._v("HostAPD를 설정하십시오. WPA 보안 네트워크를 만들려면 "),e("code",[s._v("/etc/hostapd/hostapd.conf")]),s._v(" 파일을 편집(없다면 새로 만드십시오)하고, 다음 줄을 추가하십시오:")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("auth_algs=1\nchannel=6            # Channel to use\nhw_mode=g\nieee80211n=1          # 802.11n assuming your device supports it\nignore_broadcast_ssid=0\ninterface=wlan0\nwpa=2\nwpa_key_mgmt=WPA-PSK\nwpa_pairwise=TKIP\nrsn_pairwise=CCMP\n# Change the to the proper driver\ndriver=nl80211\n# Change these to something else if you want\nssid=OdroidC1\nwpa_passphrase=QGroundControl\n")])])]),e("p",[e("code",[s._v("ssid=")]),s._v(", "),e("code",[s._v("channel=")]),s._v(", "),e("code",[s._v("wpa_passphrase=")]),s._v(" 값을 원하는 값으로 바꾸십시오. SSID는 다른 서비스에 뿌려주는 핫스팟 이름이고, 채널은 핫스팟을 실행할 주파수 대역이며, wpa_passphrase는 무선 네트워크의 암호입니다. 더 많은 옵션 내용을 보려면 "),e("code",[s._v("/usr/share/doc/hostapd/examples/hostapd.conf.gz")]),s._v(" 파일을 살펴보십시오. 해당 영역에서 사용하지 않는 채널을 확인하십시오. "),e("em",[s._v("wavemon")]),s._v(" 과 같은 도구를 활용해볼 수 있습니다.")]),s._v(" "),e("p",[e("code",[s._v("/etc/default/hostapd")]),s._v(" 파일을 편집하여 다음 줄을:")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('#DAEMON_CONF=""\n')])])]),e("p",[s._v("다음과 같이 주석처리하십시오:")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('DAEMON_CONF="/etc/hostapd/hostapd.conf"\n')])])]),e("p",[s._v("내장 컴퓨터 자체를 액세스 포인트로 띄워 나타내는데는 이정도면 충분하며, 지상 통제 장치에서 연결할 수 있습니다. 실제 액세스 포인트로 동작하게끔 하려면(무선랜 트래픽을 온보드 컴퓨터의 이더넷 연결로 전달하려면), 라우팅과 네트워크 주소 변환(NAT)을 설정해야합니다.")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo update-rc.d hostapd enable\nsudo update-rc.d udhcpd enable\n")])])]),e("p",[s._v("내장 컴퓨터 자체를 액세스 포인트로 띄워 나타내는데는 이정도면 충분하며, 지상 통제 장치에서 연결할 수 있습니다. 실제 액세스 포인트로 동작하게끔 하려면(무선랜 트래픽을 온보드 컴퓨터의 이더넷 연결로 전달하려면), 라우팅과 네트워크 주소 변환(NAT)을 설정해야합니다. 커널에서 IP 전달을 활성화하십시오:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo 1 > /proc/sys/net/ipv4/ip_forward"')]),s._v("\n")])])]),e("p",[s._v("이 설정을 영구적으로 동작하게 하려면, 다음 명령을 실행하십시오:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT\n")])])]),e("p",[s._v("/etc/network/interfaces 파일을 편집하여 다음 줄을 파일 하단에 추가하십시오:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iptables-save > /etc/iptables.ipv4.nat"')]),s._v("\n")])])]),e("p",[s._v("컴퓨터와 오드로이드 C1에 지스트리머 꾸러미를 설치하고 스트리밍을 시작하려면, "),e("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/src/VideoReceiver/README.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("QGroundControl README"),e("OutboundLink")],1),s._v("에 설명하는 내용을 따르십시오.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("up iptables-restore "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" /etc/iptables.ipv4.nat\n")])])]),e("h1",{attrs:{id:"지스트리머-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#지스트리머-설치"}},[s._v("#")]),s._v(" 지스트리머 설치")]),s._v(" "),e("p",[s._v("uvch264 플러그인으로 오드로이드에서 스트리밍 전송을 시작할 수 없다면, v4l2src 플러그인도 함께 시작하게 할 수도 있습니다.")]),s._v(" "),e("p",[s._v("여기서 "),e("code",[s._v("xxx.xxx.xxx.xxx")]),s._v(" 부분은 QGC를 실행하는 컴퓨터의 IP 주소입니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("gst-launch-1.0 v4l2src "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("device")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/video0 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" video/x-h264,width"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1920")]),s._v(",height"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v(",framerate"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("/1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" h264parse "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" rtph264pay "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" udpsink "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("host")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx.xxx.xxx.xxx "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("\n")])])]),e("p",[s._v("여기사 "),e("code",[s._v("xxx.xxx.xxx.xxx")]),s._v(" 부분은 QGC를 실행하는 컴퓨터의 IP 주소입니다.")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[e("code",[s._v("Permission denied")]),s._v(" 오류가 뜬다면, 위 명령 앞에 "),e("code",[s._v("sudo")]),s._v("를 붙여야 합니다.")])]),s._v(" "),e("p",[s._v("대신 아래와 같이 현재 사용자를 "),e("code",[s._v("video")]),s._v(" 그룹에 추가할 수 있습니다(그리고 로그아웃한 다음 다시 로그인하십시오).")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -aG video "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("\n")])])]),e("p",[s._v("실시간 동영상 전송 화면을 누르면, 좌측 하단 구석에는 인공위성 지도가 뜨고, 전체 배경에 동영상이 뜹니다.")]),s._v(" "),e("p",[e("img",{attrs:{src:t(418),alt:"QGC에서의 실시간 동영상 전송 화면"}})]),s._v(" "),e("p",[s._v("실시간 동영상 전송 화면을 누르면, 좌측 하단 구석에는 인공위성 지도가 뜨고, 전체 배경에 동영상이 뜹니다.")])])}),[],!1,null,null,null);a.default=n.exports},418:function(s,a,t){s.exports=t.p+"assets/img/qgc-screenshot.b181c617.png"}}]);