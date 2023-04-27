(window.webpackJsonp=window.webpackJsonp||[]).push([[434],{2638:function(t,_,v){"use strict";v.r(_);var r=v(19),e=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"mro-x2-1-자동조종장치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mro-x2-1-자동조종장치"}},[t._v("#")]),t._v(" mRo-X2.1 자동조종장치")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이 제품을 제조하지 않습니다. 하드웨어 지원과 호환 문제는 [제조사](https://store.mrobotics.io/)에 문의하십시오.")])]),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.mRobotics.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" mRo-X2.1 자동 조종 장치"),r("OutboundLink")],1),t._v("는  Pixhawk"),r("sup",[t._v("®")]),t._v(" - 프로젝트 "),r("strong",[t._v("FMUv2")]),t._v(" 오픈 하드웨어 디자인을 기반으로합니다. PX4를 "),r("a",{attrs:{href:"https://nuttx.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),r("OutboundLink")],1),t._v(" OS에서 실행합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:v(849),alt:"mRo X2.1"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("이 비행 컨트롤러는 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("제조업체의 지원")]),t._v("을 받을 수 있습니다.")],1)]),t._v(" "),r("h2",{attrs:{id:"요약"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#요약"}},[t._v("#")]),t._v(" 요약")]),t._v(" "),r("ul",[r("li",[t._v("메인 시스템 온칩: "),r("a",{attrs:{href:"http://www.st.com/web/en/catalog/mmc/FM141/SC1169/SS1577/LN1789",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32F427"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[t._v("CPU : STM32F427VIT6 ARM"),r("sup",[t._v("®")]),t._v(" 마이크로 컨트롤러 - 개정판 3")]),t._v(" "),r("li",[t._v("IO: STM32F100C8T6 ARM"),r("sup",[t._v("®")]),t._v(" 마이크로 컨트롤러")])])]),t._v(" "),r("li",[t._v("센서:\n"),r("ul",[r("li",[t._v("Invensense"),r("sup",[t._v("®")]),t._v(" MPU9250 9DOF")]),t._v(" "),r("li",[t._v("Invensense ICM-20602 6DOF")]),t._v(" "),r("li",[t._v("MEAS MS5611 기압계")])])]),t._v(" "),r("li",[t._v("크기/중량\n"),r("ul",[r("li",[t._v("크기: 36mm x 50mm (수직, 수평 또는 헤더가 설치되지 않은 상태로 주문 가능)")]),t._v(" "),r("li",[t._v("장착 지점 : 직경 30.5mm x 30.5mm 3.2mm")]),t._v(" "),r("li",[t._v("중량: 10.9g")])])])]),t._v(" "),r("p",[t._v("아래 다이어그램은 Pixhawk 1과 비교한 것입니다. mRo는 거의 동일한 하드웨어와 연결 기능을 제공하지만, 설치 공간이 훨씬 작습니다. 주요 차이점은 업데이트된 센서와 Rev 3 FMU입니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:v(850),alt:"Mro Pixhawk 1과 X2.1 비교"}})]),t._v(" "),r("h2",{attrs:{id:"연결성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#연결성"}},[t._v("#")]),t._v(" 연결성")]),t._v(" "),r("ul",[r("li",[t._v("2.54mm 헤더 :")]),t._v(" "),r("li",[t._v("I2C가 장착 된 GPS(UART4)")]),t._v(" "),r("li",[t._v("CAN 버스")]),t._v(" "),r("li",[t._v("RC 입력")]),t._v(" "),r("li",[t._v("PPM 입력")]),t._v(" "),r("li",[t._v("Spektrum 입력")]),t._v(" "),r("li",[t._v("RSSI 입력")]),t._v(" "),r("li",[t._v("sBus 입력")]),t._v(" "),r("li",[t._v("sBus 출력")]),t._v(" "),r("li",[t._v("전원 입력")]),t._v(" "),r("li",[t._v("부저 출력")]),t._v(" "),r("li",[t._v("LED 출력")]),t._v(" "),r("li",[t._v("Servo 출력 8개")]),t._v(" "),r("li",[t._v("Aux 출력 6개")]),t._v(" "),r("li",[t._v("오프 보드 microUSB 커넥터")]),t._v(" "),r("li",[t._v("강제 종료 핀 출력 "),r("em",[t._v("(현재 펌웨어에서 지원되지 않음)")])]),t._v(" "),r("li",[t._v("항속 센서")]),t._v(" "),r("li",[t._v("USART2 (Telem 1)")]),t._v(" "),r("li",[t._v("USART3 (Telem 2)")]),t._v(" "),r("li",[t._v("UART7 (콘솔)")]),t._v(" "),r("li",[t._v("UART8 (OSD)")])]),t._v(" "),r("h2",{attrs:{id:"px4-부트로더-문제"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-부트로더-문제"}},[t._v("#")]),t._v(" PX4 부트로더 문제")]),t._v(" "),r("p",[t._v("기본적으로 mRo X2.1은 PX4가 아닌 ArduPilot"),r("sup",[t._v("®")]),t._v(" 용으로 미리 설정되어 제공될 수 있습니다. 이는 보드가 X2.1 대신 FMUv2로 인식될 때 펌웨어 업데이트 중에 나타납니다.")]),t._v(" "),r("p",[t._v("이 경우 "),r("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/raw/master/assets/hardware/BL_Update_X21.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("BL_Update_X21.zip"),r("OutboundLink")],1),t._v("을 사용하여 부트로더를 업데이트하여합니다 이 캘리브레이션을 수행하지 않으면 나침반 방향이 잘못되어 보조 IMU는 감지되지 않을 수 있습니다. 이 캘리브레이션을 수행하지 않으면 나침반 방향이 잘못되어 보조 IMU는 감지되지 않을 수 있습니다.")]),t._v(" "),r("p",[t._v("업데이트 단계는 다음과 같습니다.")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/raw/master/assets/hardware/BL_Update_X21.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("BL_Update_X21.zip"),r("OutboundLink")],1),t._v("을 다운로드하고 압축을 해제하십시오.")]),t._v(" "),r("li",[r("em",[t._v("BL_Update_X21")]),t._v(" 폴더를 찾으십시오. 여기에는 "),r("strong",[t._v("rc.txt")]),t._v(" 파일이 들어있는 "),r("strong",[t._v("bin")]),t._v(" 파일과 "),r("strong",[t._v("/etc")]),t._v(" 하위 폴더가 있습니다")]),t._v(" "),r("li",[t._v("이 파일을 마이크로 SD 카드의 루트 디렉토리에 복사하여 mRO x2.1에 삽입하십시오.")]),t._v(" "),r("li",[t._v("Mro x2.1의 전원을 켜십시오. 부팅시까지 기다렸다가 한 번 재부팅하십시오.")])]),t._v(" "),r("h2",{attrs:{id:"구매처"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#구매처"}},[t._v("#")]),t._v(" 구매처")]),t._v(" "),r("p",[t._v("이 제품은 "),r("a",{attrs:{href:"https://store.mrobotics.io/mRo-X2-1-Rev-2-p/m10021a.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("mRobotics"),r("sup",[t._v("®")]),t._v(" 상점"),r("OutboundLink")],1),t._v("에서 주문할 수 있습니다.")]),t._v(" "),r("h2",{attrs:{id:"배선-가이드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#배선-가이드"}},[t._v("#")]),t._v(" 배선 가이드")]),t._v(" "),r("p",[r("img",{attrs:{src:v(851),alt:"mRo_X2.1 배선"}})]),t._v(" "),r("h2",{attrs:{id:"펌웨어-빌드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-빌드"}},[t._v("#")]),t._v(" 펌웨어 빌드")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("대부분의 사용자들은 펌웨어를 빌드할 필요는 없습니다. 이미 사전에 빌드 되어 있으며 *QGroundControl*가 설치되어 있다면 하드웨어가 적절히 연결되면 자동으로 설치됩니다.")]),t._v(" "),r("p",[t._v(":::")]),t._v(" "),r("p",[t._v("이 대상에 대한 "),r("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("PX4 빌드")]),t._v(" 방법 :")],1),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("make mro_x21_default\n")])])]),r("h2",{attrs:{id:"회로도"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#회로도"}},[t._v("#")]),t._v(" 회로도")]),t._v(" "),r("p",[t._v("이 보드는 mRo 하드웨어 저장수 "),r("a",{attrs:{href:"https://github.com/mRoboticsIO/Hardware/blob/master/X2.1/Docs/x21_V2_schematic.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("x21_V2_schematic.pdf"),r("OutboundLink")],1),t._v("에 문서화되어 있습니다.")]),t._v(" "),r("h2",{attrs:{id:"시리얼-포트-매핑"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#시리얼-포트-매핑"}},[t._v("#")]),t._v(" 시리얼 포트 매핑")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("UART")]),t._v(" "),r("th",[t._v("장치")]),t._v(" "),r("th",[t._v("포트")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("USART1")]),t._v(" "),r("td",[t._v("/dev/ttyS0")]),t._v(" "),r("td",[t._v("IO 디버그")])]),t._v(" "),r("tr",[r("td",[t._v("USART2")]),t._v(" "),r("td",[t._v("/dev/ttyS1")]),t._v(" "),r("td",[t._v("SERIAL1")])]),t._v(" "),r("tr",[r("td",[t._v("USART3")]),t._v(" "),r("td",[t._v("/dev/ttyS2")]),t._v(" "),r("td",[t._v("TELEM2")])]),t._v(" "),r("tr",[r("td",[t._v("UART4")]),t._v(" "),r("td",[t._v("/dev/ttyS3")]),t._v(" "),r("td",[t._v("GPS/I2C")])]),t._v(" "),r("tr",[r("td",[t._v("USART6")]),t._v(" "),r("td",[t._v("/dev/ttyS4")]),t._v(" "),r("td",[t._v("PX4IO")])]),t._v(" "),r("tr",[r("td",[t._v("UART7")]),t._v(" "),r("td",[t._v("/dev/ttyS5")]),t._v(" "),r("td",[t._v("SERIAL5 콘솔")])]),t._v(" "),r("tr",[r("td",[t._v("UART8")]),t._v(" "),r("td",[t._v("/dev/ttyS6")]),t._v(" "),r("td",[t._v("SERIAL4")])])])])])])}),[],!1,null,null,null);_.default=e.exports},849:function(t,_,v){t.exports=v.p+"assets/img/mro_x2.1.791ba315.jpg"},850:function(t,_,v){t.exports=v.p+"assets/img/px1_x21.b591626b.jpg"},851:function(t,_,v){t.exports=v.p+"assets/img/mro_x21_wiring.1666afcb.png"}}]);