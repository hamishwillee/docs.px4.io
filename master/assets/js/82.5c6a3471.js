(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1386:function(t,r,a){t.exports=a.p+"assets/img/alpha_uavlink_back.efdb1715.jpg"},1387:function(t,r,a){t.exports=a.p+"assets/img/alpha_uavlink_front.672c8f87.jpg"},1388:function(t,r,a){t.exports=a.p+"assets/img/doiting_eps_12f_back.620f356a.jpg"},1389:function(t,r,a){t.exports=a.p+"assets/img/doiting_eps_12f_front.b229149a.jpg"},1390:function(t,r,a){t.exports=a.p+"assets/img/pixracer_network_setup_connection_windows.4b6c2413.png"},1391:function(t,r,a){t.exports=a.p+"assets/img/pixracer_network_setup_security_windows.646da5eb.png"},1392:function(t,r,a){t.exports=a.p+"assets/img/wifi_bridge.5e243a79.png"},1393:function(t,r,a){t.exports=a.p+"assets/img/esp8266_flashing_rig.900b6050.jpg"},1394:function(t,r,a){t.exports=a.p+"assets/img/esp8266_pinout.4c1f434c.jpg"},1395:function(t,r,a){t.exports=a.p+"assets/img/esp8266_flashing_ftdi.bc982baa.jpg"},2757:function(t,r,a){"use strict";a.r(r);var e=a(19),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"esp8266-wifi-모듈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-wifi-모듈"}},[t._v("#")]),t._v(" ESP8266 WiFi 모듈")]),t._v(" "),e("p",[t._v("ESP8266와 유사품은 전체 TCP/IP와 마이크로 컨트롤러 기능을 제공하는 저렴한 Wi-Fi 모듈입니다. 모든 Pixhawk 시리즈 콘트롤러에서 사용 가능합니다.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("ESP8266은 [Pixracer](../flight_controller/pixracer.md)와 함께 사용되는 *실제적인* 기본 WiFi 모듈입니다 (일반적으로 번들로 함꼐 제공됨).")])]),t._v(" "),e("h2",{attrs:{id:"구매처"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#구매처"}},[t._v("#")]),t._v(" 구매처")]),t._v(" "),e("p",[t._v("ESP8266 모듈은 여러 곳에서 쉽게 구매할 수 있습니다. 몇 군데의 구매처는 아래에 나열되어 있습니다.")]),t._v(" "),e("p",[t._v("대부분의 모듈은 3.3V 입력 (전용)을 지원하지만 일부 비행 콘트롤러(예 : Pixhawk 4)는 5V에서 출력됩니다 (호환성을 확인하고 필요한 경우 전압을 낮추어야합니다).")]),t._v(" "),e("p",[t._v("3.3V 사용 모듈:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.sparkfun.com/products/13678",target:"_blank",rel:"noopener noreferrer"}},[t._v("WRL-17146"),e("OutboundLink")],1),t._v(" (Sparkfun)")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://us.gearbest.com/boards-shields/pp_009604906563.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AI 클라우드"),e("OutboundLink")],1),t._v(" - 단종됨 (GearBeast)")])]),t._v(" "),e("p",[t._v("5.0V 사용 모듈:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.banggood.com/Wireless-Wifi-to-Uart-Telemetry-Module-With-Antenna-for-Mini-APM-Flight-Controller-p-1065339.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AI Thinker"),e("OutboundLink")],1),t._v(" (Banggood)")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.banggood.com/MAVLink-Wifi-Bridge-2_4G-Wireless-Wifi-Telemetry-Module-with-Antenna-for-Pixhawk-APM-Flight-Controller-p-1428590.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AlphaUAVLink"),e("OutboundLink")],1),t._v(" (Banggood)")])]),t._v(" "),e("p",[e("span",{attrs:{id:"px4_config"}})]),t._v(" "),e("h2",{attrs:{id:"pixhawk-px4-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-px4-설정"}},[t._v("#")]),t._v(" Pixhawk/PX4 설정")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("먼저 PX4 호환 ESP8266 펌웨어("),e("a",{attrs:{href:"#esp8266-flashing-firmware-advanced"}},[t._v("아래 참조")]),t._v(")로 라디오를 "),e("em",[t._v("업데이트")]),t._v("할 수 있습니다. 제조 매뉴얼에 업데이트가 필요한 지 확인하십시오.")])]),t._v(" "),e("p",[t._v("무료 UART에서 ESP8266을 Pixhawk 시리즈 비행 콘트롤러(예 : Pixracer)에 연결합니다.")]),t._v(" "),e("p",[t._v("USB로 비행 컨트롤러를 지상국에 연결합니다 (WiFi가 아직 완전히 설정되지 않았으므로).")]),t._v(" "),e("p",[e("em",[t._v("QGroundControl")]),t._v(" 사용법:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/config/firmware.html"}},[t._v("최신 PX4 펌웨어를 비행 컨트롤러에 로드합니다")]),t._v(".")],1),t._v(" "),e("li",[t._v("ESP8266 연결용 "),e("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("직렬 포트를 설정")]),t._v("합니다. ESP8266에 설정된 값과 일치하려면 전송 속도를 921600으로 설정하여야 합니다.")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[t._v("Configure MAVLink")]),t._v(" on the corresponding serial port in order to receive telemetry and transmit commands over the ESP8266.")],1)]),t._v(" "),e("p",[t._v("무선 연결용 비행 콘트롤러 직렬 포트를 설정후에는 지상국과 기체간의 물리적 USB 연결을 해제할 수 있습니다.")]),t._v(" "),e("h2",{attrs:{id:"esp8266을-통한-qgc-연결"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esp8266을-통한-qgc-연결"}},[t._v("#")]),t._v(" ESP8266을 통한 QGC 연결")]),t._v(" "),e("p",[t._v("이 모듈은 지상국과 기체 연결용 WiFi 핫스팟을 노출합니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("ESP8266 핫스팟 설정은 보드와 함께 제공됩니다. 일반적으로 보드 뒷면 또는 포장지에 인쇄되어 있습니다.")]),t._v(" "),e("p",[t._v("일반적인 공장 네트워크 설정은 다음과 같습니다.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("SSID:")]),t._v(" PixRacer")]),t._v(" "),e("li",[e("strong",[t._v("비밀번호:")]),t._v(" pixracer")]),t._v(" "),e("li",[e("strong",[t._v("WiFi Channel:")]),t._v(" 11")]),t._v(" "),e("li",[e("strong",[t._v("UART 속도:")]),t._v(" 921600")])]),t._v(" "),e("p",[t._v("다른 모듈은 다음과 같은 설정을 사용할 수 있습니다.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("SSID:")]),t._v(" IFFRC_xxxxxxxx")]),t._v(" "),e("li",[e("strong",[t._v("비밀번호:")]),t._v(" 12345678")]),t._v(" "),e("li",[e("strong",[t._v("IP:")]),t._v(" 192.168.4.1")]),t._v(" "),e("li",[e("strong",[t._v("포트:")]),t._v(" 6789 (TCP)")])]),t._v(" "),e("p",[t._v("AlphaUILink 및 DOITING의 보드 예는 다음과 같습니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1386),width:"250px",alt:"AlphaUAVLink - 뒷면"}}),t._v(" "),e("img",{attrs:{src:a(1387),width:"250px",alt:"AlphaUAVLink - 앞면"}}),t._v(" "),e("img",{attrs:{src:a(1388),width:"250px",alt:"DOITING EPS 12F - 뒷면"}}),t._v(" "),e("img",{attrs:{src:a(1389),width:"250px",alt:"DOITING EPS 12F - 앞면"}})])]),t._v(" "),e("p",[t._v("Wi-Fi가 활성화된 "),e("em",[t._v("QGroundControl")]),t._v(" 지상국 컴퓨터/태블릿에서 ESP8266용 무선 네트워크를 연결합니다. Windows 컴퓨터에서 이름이 "),e("strong",[t._v("Pixracer")]),t._v("이고 암호가 "),e("strong",[t._v("pixracer")]),t._v("인 네트워크 연결 설정은 다음과 같습니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1390),alt:"Windows 네트워크 설정: 연결"}}),t._v(" "),e("img",{attrs:{src:a(1391),alt:"Windows 네트워크 설정: 보안"}})]),t._v(" "),e("p",[e("em",[t._v("QGroundControl")]),t._v('은 지상국 컴퓨터가 "Pixracer"라는 이름의 WiFi에 연결되면 자동으로 기체에 연결됩니다.')]),t._v(" "),e("p",[t._v("다른 WiFi 이름을 가진 모듈을 사용하는 경우에는, 다음 섹션에 표시된대로 QGroundControl WiFi 연결을 수동으로 설정하여야 합니다.")]),t._v(" "),e("h2",{attrs:{id:"비표준-wifi-연결-qgc-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#비표준-wifi-연결-qgc-설정"}},[t._v("#")]),t._v(" 비표준 WiFi 연결 QGC 설정")]),t._v(" "),e("p",[e("em",[t._v("QGroundControl")]),t._v('은 지상국 컴퓨터가 "Pixracer"라는 이름의 WiFi에 연결되면 자동으로 기체에 연결됩니다. 다른 이름의 액세스 포인트에는 사용자 지정 통신 연결을 수동으로 생성하여야 합니다.')]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SettingsView/SettingsView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("애플리케이션 설정 > 통신 링크"),e("OutboundLink")],1),t._v("로 이동합니다.")]),t._v(" "),e("li",[t._v("적절한 설정으로 새 연결을 추가합니다.")]),t._v(" "),e("li",[t._v("새 연결을 선택하고, "),e("strong",[t._v("연결")]),t._v("을 클릭합니다.")]),t._v(" "),e("li",[t._v("이제 기체에 연결되어야 합니다.")])]),t._v(" "),e("h2",{attrs:{id:"확인"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#확인"}},[t._v("#")]),t._v(" 확인")]),t._v(" "),e("p",[t._v("이제 무선 링크를 통해 QGC 컴퓨터에서 HUD 이동을 확인하고, ESP8266 WiFi 브리지에 대한 요약 패널을 볼 수 있습니다 (아래 그림 참조).")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1392),alt:"Wi-Fi 브리지 QGC 요약"}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("연결 문제가 발생하면 "),e("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/Support/troubleshooting_qgc.html#waiting_for_connection",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGC 설치/설정 문제"),e("OutboundLink")],1),t._v("를 참고하십시오.")])]),t._v(" "),e("h2",{attrs:{id:"esp8266-플래싱-펌웨어-고급"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-플래싱-펌웨어-고급"}},[t._v("#")]),t._v(" ESP8266 플래싱/펌웨어 (고급)")]),t._v(" "),e("p",[t._v("다른 제조업체의 ESP8266 모듈에는 사전에 적절한 ESP8266 펌웨어가 설치되어 있지 않을 수 있습니다. 아래 지침은 적절한 버전으로 라디오를 업데이트 방법을 설명합니다.")]),t._v(" "),e("h3",{attrs:{id:"사전-빌드-바이너리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사전-빌드-바이너리"}},[t._v("#")]),t._v(" 사전 빌드 바이너리")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.grubba.com/mavesp8266/firmware-1.2.2.bin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MavLink ESP8266 Firmware V 1.2.2"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"소스-빌드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#소스-빌드"}},[t._v("#")]),t._v(" 소스 빌드")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/dogmaphobic/mavesp8266",target:"_blank",rel:"noopener noreferrer"}},[t._v("펌웨어 저장소"),e("OutboundLink")],1),t._v("에는 ESP8266 펌웨어 빌드와 플래시 지침과 도구들이 있습니다.")]),t._v(" "),e("h3",{attrs:{id:"펌웨어-ota-업데이트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-ota-업데이트"}},[t._v("#")]),t._v(" 펌웨어 OTA 업데이트")]),t._v(" "),e("p",[t._v("펌웨어 1.0.4 이상에서는 ESP의 "),e("em",[t._v("무선 업데이트")]),t._v(" 기능을 사용하여 업데이트 가능합니다. AP WiFi 링크에 연결하고 "),e("code",[t._v("http://192.168.4.1/update")]),t._v("로 이동합니다. 위에서 다운로드한 펌웨어 파일을 WiFi 모듈에 업로드할 수 있습니다.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("이것은 펌웨어를 업데이트하는 가장 손쉬운 방법입니다.")])]),t._v(" "),e("h3",{attrs:{id:"esp8266-펌웨어-플래싱"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-펌웨어-플래싱"}},[t._v("#")]),t._v(" ESP8266 펌웨어 플래싱")]),t._v(" "),e("p",[t._v("플래싱전에 아래 설명대로 "),e("em",[t._v("플래시 모드")]),t._v("에서 ESP8266을 부팅합니다. "),e("a",{attrs:{href:"https://github.com/dogmaphobic/mavesp8266",target:"_blank",rel:"noopener noreferrer"}},[t._v("MavESP8266"),e("OutboundLink")],1),t._v(" 저장소를 복제한 경우 제공된 "),e("a",{attrs:{href:"http://platformio.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlatformIO"),e("OutboundLink")],1),t._v(" 도구 및 환경을 사용하여 펌웨어를 빌드하고 플래시할 수 있습니다. 위에서 사전 빌드 펌웨어를 다운로드한 경우에는 "),e("a",{attrs:{href:"https://github.com/espressif/esptool",target:"_blank",rel:"noopener noreferrer"}},[t._v("esptool"),e("OutboundLink")],1),t._v(" 유틸리티를 다운로드후 아래 명령어를 실행하십시오.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("esptool.py --baud 921600 --port /dev/your_serial_port write_flash 0x00000 firmware_xxxxx.bin\n")])])]),e("p",[t._v("여기서:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("firmware_xxxxx.bin")]),t._v("은 위에서 다운로드 한 펌웨어입니다.")]),t._v(" "),e("li",[e("strong",[t._v("your_serial_port")]),t._v("는 ESP8266이 연결된 직렬 포트의 이름입니다 (예 : "),e("code",[t._v("/dev/cu.usbmodem")]),t._v(").")])]),t._v(" "),e("h3",{attrs:{id:"펌웨어-플래싱을-위한-배선"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-플래싱을-위한-배선"}},[t._v("#")]),t._v(" 펌웨어 플래싱을 위한 배선")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("대부분의 ESP8266 모듈은 3.3V (전용)를 지원하지만, 일부 비행 콘트롤러(예 : Pixhawk 4)는 5V에서 출력됩니다. 호환성을 확인하고, 필요한 경우 전압을 낮추어야 합니다.")])]),t._v(" "),e("p",[t._v("ESP8266을 "),e("em",[t._v("플래시 모드")]),t._v("로 설정하는 다양한 방법이 있지만, 모든 USB/UART 어댑터가 자동 모드 전환에 필요한 모든 핀을 제공하는 것은 아닙니다. "),e("em",[t._v("플래시 모드")]),t._v("에서 ESP8266을 부팅하려면, GPIO-0 핀을 로우(GND)로 설정하고 CH_PD 핀을 하이(VCC)로 설정합니다. 설정 예은 다음과 같습니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1393),alt:"esp8266 깜박이는 장비"}})]),t._v(" "),e("p",[t._v("RX, TX, VCC 및 GND가 FTDI 어댑터에서 ESP8266으로 연결되는 케이블을 직접 제작하였습니다. ESP8266에서 GPIO-0 및 CH_PD에 연결된 두 개의 와이어를 여분으로 남겨 두었습니다. 각각 GND 및 VCC에 연결하여 플래시 모드로 부팅 가능합니다.")]),t._v(" "),e("h4",{attrs:{id:"esp8266-esp-01-핀배열"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-esp-01-핀배열"}},[t._v("#")]),t._v(" ESP8266 (ESP-01) 핀배열")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1394),alt:"esp8266 wifi 모듈 핀배열"}})]),t._v(" "),e("h4",{attrs:{id:"ftdi-usb-uart-어댑터를-사용한-플래싱-다이어그램"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ftdi-usb-uart-어댑터를-사용한-플래싱-다이어그램"}},[t._v("#")]),t._v(" FTDI USB / UART 어댑터를 사용한 플래싱 다이어그램")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1395),alt:"esp8266 플래싱"}})])])}),[],!1,null,null,null);r.default=s.exports}}]);