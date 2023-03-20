(window.webpackJsonp=window.webpackJsonp||[]).push([[1454],{2769:function(s,e,t){"use strict";t.r(e);var a=t(19),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"드라이버-개발"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#드라이버-개발"}},[s._v("#")]),s._v(" 드라이버 개발")]),s._v(" "),t("p",[s._v("PX4 장치 드라이버는 "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/lib/drivers/device",target:"_blank",rel:"noopener noreferrer"}},[s._v("장치"),t("OutboundLink")],1),s._v(" 프레임워크를 기반으로 합니다.")]),s._v(" "),t("h2",{attrs:{id:"드라이버-생성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#드라이버-생성"}},[s._v("#")]),s._v(" 드라이버 생성")]),s._v(" "),t("p",[s._v("PX4는 "),t("RouterLink",{attrs:{to:"/ko/middleware/uorb.html"}},[s._v("uORB")]),s._v("의 데이터를 거의 독점적으로 사용합니다. 일반적인 주변 장치 유형에 대한 드라이버는 올바른 uORB 메시지(예: 자이로, 가속도계, 압력 센서 등)를 게시하여야 합니다.")],1),s._v(" "),t("p",[s._v("새 드라이버를 만드는 가장 좋은 방법은 템플릿과 유사한 드라이버로 시작하는 것입니다("),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[s._v("src/drivers"),t("OutboundLink")],1),s._v(" 참조).")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("More detailed information about working with specific I/O buses and sensors may be available in "),t("RouterLink",{attrs:{to:"/ko/sensor_bus/"}},[s._v("Sensor and Actuator Buses")]),s._v(" section.")],1)]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[s._v("올바른 uORB 주제를 게시하는 것은 드라이버가 "),t("em",[s._v("준수해야")]),s._v(" 하는 유일한 패턴입니다.")])]),s._v(" "),t("h2",{attrs:{id:"핵심-아키텍처"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#핵심-아키텍처"}},[s._v("#")]),s._v(" 핵심 아키텍처")]),s._v(" "),t("p",[s._v("PX4는 "),t("RouterLink",{attrs:{to:"/ko/concept/architecture.html"}},[s._v("반응형 시스템")]),s._v("이며, "),t("RouterLink",{attrs:{to:"/ko/middleware/uorb.html"}},[s._v("uORB")]),s._v(" 게시/구독을 사용하여 메시지를 전송합니다. 파일 핸들은 시스템의 핵심 작업에 필요하지 않거나 사용되지 않습니다. 두 가지 주요 API가 사용됩니다.")],1),s._v(" "),t("ul",[t("li",[s._v("PX4가 실행되는 시스템에 따라 파일, 네트워크 또는 공유 메모리 백엔드가 있는 게시/구독 시스템.")]),s._v(" "),t("li",[s._v("장치를 열거하고 구성을 가져오거나 설정할 수 있는 전역 장치 레지스트리. 이것은 연결 목록이나 파일 시스템에 대한 매핑처럼 간단할 수 있습니다.")])]),s._v(" "),t("h2",{attrs:{id:"장치-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#장치-id"}},[s._v("#")]),s._v(" 장치 ID")]),s._v(" "),t("p",[s._v("PX4는 장치 ID를 사용하여 시스템 전체에서 개별 센서를 일관되게 식별합니다. 이러한 ID는 구성 매개변수에 저장되며, 센서 보정 값을 일치시키고 어떤 센서가 어떤 로그 파일 항목에 기록되는 지 결정합니다.")]),s._v(" "),t("p",[s._v("센서의 순서(예: "),t("code",[s._v("/dev/mag0")]),s._v(" 및 대체 "),t("code",[s._v("/dev/mag1")]),s._v("가 있는 경우)는 우선순위를 결정하지 않습니다. 높은 우선순위는 대신 게시된 uORB 주제입니다.")]),s._v(" "),t("h3",{attrs:{id:"디코딩-예제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#디코딩-예제"}},[s._v("#")]),s._v(" 디코딩 예제")]),s._v(" "),t("p",[s._v("시스템에 3개의 자력계가 있는 경우에는 비행 로그(.px4log)를 사용하여 매개변수를 덤프합니다. 세 개의 매개변수는 센서 ID를 인코딩하고, "),t("code",[s._v("MAG_PRIME")]),s._v("은 어떤 자력계가 기본 센서로 선택되었는 지 식별합니다. 각 MAGx_ID는 24비트 숫자이며, 수동 디코딩을 하가 위하여 왼쪽에 0을 채워야 합니다.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("CAL_MAG0_ID = 73225.0\nCAL_MAG1_ID = 66826.0\nCAL_MAG2_ID = 263178.0\nCAL_MAG_PRIME = 73225.0\n")])])]),t("p",[s._v("이것은 주소 "),t("code",[s._v("0x1E")]),s._v("의 버스 1, I2C를 통해 연결된 외부 HMC5983입니다. 로그 파일에 "),t("code",[s._v("IMU.MagX")]),s._v("로 표시됩니다.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# device ID 73225 in 24-bit binary:\n00000001  00011110  00001 001\n\n# decodes to:\nHMC5883   0x1E    bus 1 I2C\n")])])]),t("p",[s._v("이것은 SPI, 버스 1, 슬레이브 선택 슬롯 5를 통하여 연결된 내부 HMC5983입니다. 로그 파일에 "),t("code",[s._v("IMU1.MagX")]),s._v("로 표시됩니다.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# device ID 66826 in 24-bit binary:\n00000001  00000101  00001 010\n\n# decodes to:\nHMC5883   dev 5   bus 1 SPI\n")])])]),t("p",[s._v("그리고 이것은 SPI, 버스 1, 슬레이브 선택 슬롯 4를 통하여 연결된 내부 MPU9250 자력계입니다. 로그 파일에 "),t("code",[s._v("IMU2.MagX")]),s._v("로 표시됩니다.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# device ID 263178 in 24-bit binary:\n00000100  00000100  00001 010\n\n#decodes to:\nMPU9250   dev 4   bus 1 SPI\n")])])]),t("h3",{attrs:{id:"장치-id-인코딩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#장치-id-인코딩"}},[s._v("#")]),s._v(" 장치 ID 인코딩")]),s._v(" "),t("p",[s._v("장치 ID는 이 형식에 따른 24비트 숫자입니다. 첫 번째 필드는 위의 디코딩 예에서 최하위 비트입니다.")]),s._v(" "),t("div",{staticClass:"language-C extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DeviceStructure")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DeviceBusType")]),s._v(" bus_type "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint8_t")]),s._v(" bus"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// which instance of the bus type")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint8_t")]),s._v(" address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// address on the bus (eg. I2C address)")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint8_t")]),s._v(" devtype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// device class specific device type")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[t("code",[s._v("bus_type")]),s._v("은 다음과 같이 디코딩됩니다.")]),s._v(" "),t("div",{staticClass:"language-C extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DeviceBusType")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  DeviceBusType_UNKNOWN "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  DeviceBusType_I2C     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  DeviceBusType_SPI     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  DeviceBusType_UAVCAN  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[t("code",[s._v("devtype")]),s._v("은 다음과 같이 디코딩됩니다.")]),s._v(" "),t("div",{staticClass:"language-C extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_MAG_DEVTYPE_HMC5883")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x01")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_MAG_DEVTYPE_LSM303D")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x02")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_MAG_DEVTYPE_ACCELSIM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x03")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_MAG_DEVTYPE_MPU9250")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x04")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_ACC_DEVTYPE_LSM303D")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x11")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_ACC_DEVTYPE_BMA180")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x12")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_ACC_DEVTYPE_MPU6000")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x13")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_ACC_DEVTYPE_ACCELSIM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x14")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_ACC_DEVTYPE_GYROSIM")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x15")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_ACC_DEVTYPE_MPU9250")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x16")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_GYR_DEVTYPE_MPU6000")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x21")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_GYR_DEVTYPE_L3GD20")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x22")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_GYR_DEVTYPE_GYROSIM")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x23")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_GYR_DEVTYPE_MPU9250")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x24")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_RNG_DEVTYPE_MB12XX")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x31")])])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("DRV_RNG_DEVTYPE_LL40LS")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token expression"}},[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x32")])])]),s._v("\n")])])]),t("h2",{attrs:{id:"디버깅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#디버깅"}},[s._v("#")]),s._v(" 디버깅")]),s._v(" "),t("p",[s._v("일반적인 디버깅 주제는 "),t("RouterLink",{attrs:{to:"/ko/debug/"}},[s._v("디버깅/로깅")]),s._v("을 참고하십시오.")],1),s._v(" "),t("h3",{attrs:{id:"상세-로깅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#상세-로깅"}},[s._v("#")]),s._v(" 상세 로깅")]),s._v(" "),t("p",[s._v("드라이버(및 기타 모듈)는 기본적으로 최소한의 자세한 로그 문자열을 출력합니다(예: "),t("code",[s._v("PX4_DEBUG")]),s._v(", "),t("code",[s._v("PX4_WARN")]),s._v(", "),t("code",[s._v("PX4_ERR")]),s._v(" 등).")]),s._v(" "),t("p",[s._v("로그 상세도는 빌드 시 "),t("code",[s._v("RELEASE_BUILD")]),s._v("(기본값), "),t("code",[s._v("DEBUG_BUILD")]),s._v("(상세) 또는 "),t("code",[s._v("TRACE_BUILD")]),s._v("(매우 상세) 매크로를 사용하여 정의됩니다.")]),s._v(" "),t("p",[s._v("드라이버 "),t("code",[s._v("px4_add_module")]),s._v(" 함수("),t("strong",[s._v("CMakeLists.txt")]),s._v(")에서 "),t("code",[s._v("COMPILE_FLAGS")]),s._v("를 사용하여 로깅 수준을 변경합니다. 아래 코드 조각은 단일 모듈 또는 드라이버에 대해 DEBUG_BUILD 수준 디버깅을 활성화하에 필요한 변경 사항을 나타냅니다.")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("px4_add_module(\n    MODULE templates__module\n    MAIN module\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    COMPILE_FLAGS\n        -DDEBUG_BUILD\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    SRCS\n        module.cpp\n    DEPENDS\n        modules__uORB\n    )\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("자세한 로깅은 .cpp 파일의 맨 위에(포함하기 전에) "),t("code",[s._v("#define DEBUG_BUILD")]),s._v("를 추가하여 파일별로 활성화할 수 있습니다.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);