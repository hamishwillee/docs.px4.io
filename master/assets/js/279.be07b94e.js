(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{1344:function(r,t,e){r.exports=e.p+"assets/img/ark_microhard_serial.1de60f06.jpg"},1345:function(r,t,e){r.exports=e.p+"assets/img/microhard_serial_on_vehicle.1a0bd748.jpg"},1346:function(r,t,e){r.exports=e.p+"assets/img/pico_configurator.44905091.png"},1347:function(r,t,e){r.exports=e.p+"assets/img/ark_microhard_serial_ports.b39d5f90.jpg"},2637:function(r,t,e){"use strict";e.r(t);var o=e(19),a=Object(o.a)({},(function(){var r=this,t=r.$createElement,o=r._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[o("h1",{attrs:{id:"microhard-직렬-라디오"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#microhard-직렬-라디오"}},[r._v("#")]),r._v(" Microhard 직렬 라디오")]),r._v(" "),o("p",[o("a",{attrs:{href:"http://microhardcorp.com/P900.php",target:"_blank",rel:"noopener noreferrer"}},[r._v("Microhard Pico Serial"),o("OutboundLink")],1),r._v(" 무전기는 차량 무전기와 GCS 간의 MAVLink 통신이 가능합니다. Microhard Pico 직렬 라디오는 포인트 투 포인트, 포인트 투 멀티 포인트와 메시 모드를 지원하는 최대 1W 출력의 라디오입니다. Microhard Pico 라디오는 AES-256 암호화로 주문할 수도 있습니다.")]),r._v(" "),o("p",[r._v("기본 설정을 사용시, 출력이 1W로 설정의 대략적인 범위는 8km (5 마일)입니다. 단일 지상국 라디오를 사용하여 지점 대 다중 지점 또는 메시를 사용하여 여러 기체와 통신 가능합니다. 기체의 MAVLINK ID는 각기 달라야 합니다.")]),r._v(" "),o("p",[o("img",{attrs:{src:e(1344),alt:"Microhard 라디오"}})]),r._v(" "),o("h2",{attrs:{id:"구매"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#구매"}},[r._v("#")]),r._v(" 구매:")]),r._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/1w-900mhz-serial-telemetry-air-radio/",target:"_blank",rel:"noopener noreferrer"}},[r._v("1W 900MHz 직렬 텔레메트리 라디오"),o("OutboundLink")],1),r._v(" (기체)")]),r._v(" "),o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/1w-900mhz-serial-telemetry-ground-radio/",target:"_blank",rel:"noopener noreferrer"}},[r._v("1W 900MHz 직렬 텔레메트리 라디오"),o("OutboundLink")],1),r._v(" (지상국)")]),r._v(" "),o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/1w-2400mhz-serial-telemetry-radio/",target:"_blank",rel:"noopener noreferrer"}},[r._v("1W 2.4GHz 직렬 텔레메트리 라디오"),o("OutboundLink")],1),r._v(" (기체)")]),r._v(" "),o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/1w-2400mhz-usb-serial-telemetry-radio/",target:"_blank",rel:"noopener noreferrer"}},[r._v("1W 2.4GHz 직렬 텔레메트리 라디오"),o("OutboundLink")],1),r._v(" (지상국)")])]),r._v(" "),o("h2",{attrs:{id:"연결"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#연결"}},[r._v("#")]),r._v(" 연결")]),r._v(" "),o("h3",{attrs:{id:"기체-라디오"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#기체-라디오"}},[r._v("#")]),r._v(" 기체 라디오")]),r._v(" "),o("p",[r._v("차량 라디오를 비행 콘트롤러 "),o("code",[r._v("TELEM1")]),r._v(" 포트에 연결합니다 (모든 무료 직렬 포트를 사용할 수 있음). 이를 위하여 Pixhawk 표준 6핀 JST GH 텔레메트리 케이블이 제공됩니다.")]),r._v(" "),o("p",[r._v("라디오의 출력 전력이 100mW 미만으로 설정된 경우에는 텔레메트리 케이블로 전원을 공급할 수 있습니다. 더 높은 출력의 라디오는 2 핀 Molex Nano-Fit (즉, 배터리에서)를 통하여 별도로 전원을 공급하여야 합니다.")]),r._v(" "),o("p",[o("img",{attrs:{src:e(1345),alt:"기체의 Microhard 라디오"}})]),r._v(" "),o("h3",{attrs:{id:"지상국-라디오"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#지상국-라디오"}},[r._v("#")]),r._v(" 지상국 라디오")]),r._v(" "),o("p",[r._v("USB C를 통하여 지상 라디오를 지상국에 연결합니다. USB PD를 사용하는 경우에는 라디오에 별도로 전원을 공급할 필요가 없습니다 (1W 전원 공급 가능).")]),r._v(" "),o("h2",{attrs:{id:"설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[r._v("#")]),r._v(" 설정")]),r._v(" "),o("p",[r._v("지상 라디오, 에어 라디오, PX4와 QGroundControl은 모두 동일한 전송 속도로 설정되어야합니다.")]),r._v(" "),o("p",[r._v("PX4는 텔레메트리 라디오에 "),o("code",[r._v("TELEM1")]),r._v("을 사용하도록 설정되며, 기본전송속도는 57600 (권장)입니다. 이 포트 및 전송 속도를 사용하는 경우에는 추가로 PX4 설정할 필요는 없습니다.")]),r._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[r._v("Note")]),r._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[r._v("MAVLink 주변기기")]),r._v(" 지침에 따라 다른 직렬 포트로 설정하거나 전송속도를 변경할 수 있습니다.")],1)]),r._v(" "),o("p",[r._v("라디오는 "),o("a",{attrs:{href:"https://arkelectron.com/wp-content/uploads/2021/04/PicoConfig-1.7.zip",target:"_blank",rel:"noopener noreferrer"}},[r._v("Pico Config"),o("OutboundLink")],1),r._v("를 사용하여 설정합니다 (Windows 에만 해당).")]),r._v(" "),o("p",[o("img",{attrs:{src:e(1346),alt:"Pico Config"}})]),r._v(" "),o("p",[r._v("차량 라디오 설정에는 라디오의 3핀 JST-GH Config 포트와 "),o("em",[r._v("Pico Config")]),r._v("를 실행하는 Windows PC 간에 FTDI 어댑터를 연결하여합니다 (라디오에 전원이 공급되어야 하며 배터리 또는 비행 콘트롤러의 "),o("code",[r._v("TELEM1")]),r._v(" 포트에 대한 데이터 연결). "),o("em",[r._v("Pico Config")]),r._v("는 자동으로 라디오를 감지합니다. 전송속도를 PX4 (및 지상국 라디오)와 일치하도록 설정합니다.")]),r._v(" "),o("p",[o("img",{attrs:{src:e(1347),alt:"Ark Microhard Serial - 포트"}})]),r._v(" "),o("p",[r._v("지상국 라디오 USB C 연결은 라디오 설정(및 원격 측정 데이터)에 사용할 수 있습니다. "),o("em",[r._v("Pico Config")]),r._v("는 설정 포트를 자동으로 감지하고 연결합니다. 전송속도가 PX4와 일치하도록 설정하십시오.")]),r._v(" "),o("p",[r._v("라디오와 PX4가 동일한 전송속도로 설정되면, 라디오로 QGroundControl을 기체에 연결할 수 있습니다. "),o("em",[r._v("QGroundControl")]),r._v("은 라디오를 자동으로 감지하지 않으므로 먼저 "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SettingsView/SettingsView.html",target:"_blank",rel:"noopener noreferrer"}},[r._v('응용 프로그램 설정 > 통신 링크에서 새 "직렬 연결"을 만듭니다.'),o("OutboundLink")],1),r._v(" (PX4/라디오에서 사용하는 것과 동일한 전송속도 설정).")])])}),[],!1,null,null,null);t.default=a.exports}}]);