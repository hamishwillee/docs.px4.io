(window.webpackJsonp=window.webpackJsonp||[]).push([[1085],{2253:function(a,t,s){"use strict";s.r(t);var r=s(18),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"설정-가능-직렬-포트-드라이버-구성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설정-가능-직렬-포트-드라이버-구성"}},[a._v("#")]),a._v(" 설정 가능 직렬 포트 드라이버 구성")]),a._v(" "),s("p",[a._v("이 주제에서는 사용자가 비행체 제어 장치 보드의 설정 직렬 포트를 (매개변수를 설정하여) 동작하게 하는 방법을 설명합니다.")]),a._v(" "),s("h2",{attrs:{id:"전제-조건"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[a._v("#")]),a._v(" 전제 조건")]),a._v(" "),s("p",[a._v("드라이버를 이미 설치했고, 다음 명령으로 셸을 시작한 상황을 가정합니다:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("driver_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" start -d "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("serial_port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("baudrate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" -b p:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("param_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("여기서,")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("-d")]),a._v(": 직렬 포트 이름.")]),a._v(" "),s("li",[s("code",[a._v("-b")]),a._v(": 드라이버에서 다중 전송율을 지원할 경우 전송율(선택). 전송율 설정을 지원하는 경우 드라이버에서 "),s("code",[a._v("-b p:<param_name>")]),a._v("와 같이 전송율과 매개변수 이름으로 전송율을 지정할 수 있어야합니다(이 값은 "),s("code",[a._v("px4_get_parameter_value()")]),a._v("에서 해석 가능). > "),s("strong",[a._v("Tip")]),a._v(" 예제는 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/drivers/gps/gps.cpp#L1023",target:"_blank",rel:"noopener noreferrer"}},[a._v("GPS 드라이버"),s("OutboundLink")],1),a._v("를 참고하십시오.\n:::")])]),a._v(" "),s("h2",{attrs:{id:"설정-가능-드라이버-구성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설정-가능-드라이버-구성"}},[a._v("#")]),a._v(" 설정 가능 드라이버 구성")]),a._v(" "),s("p",[a._v("설정 가능 드라이버를 구성하려면:")]),a._v(" "),s("ol",[s("li",[a._v("YAML 모듈 설정 파일을 만드십시오:\n"),s("ul",[s("li",[a._v("드라이버 소스 코드 디렉터리에 새 파일을 "),s("strong",[a._v("module.yaml")]),a._v("로 만드십시오")]),a._v(" "),s("li",[a._v("필요한 경우 다음 텍스트를 넣고 설정 값을 바꾸십시오:"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("module_name: uLanding Radar\nserial_config:\n    - command: ulanding_radar start -d ${SERIAL_DEV} -b p:${BAUD_PARAM}\n      port_config_param:\n        name: SENS_ULAND_CFG\n        group: Sensors\n")])])])])])])]),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),s("p",[a._v("모듈 설정 파일에 대한 완전한 내용은 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("validation/module_schema.yaml"),s("OutboundLink")],1),a._v(" 파일에서 찾아볼 수 있습니다. CI의 모든 설정 파일을 검증할 때도 활용합니다.")])]),a._v(" "),s("ol",[s("li",[a._v("드라이버 모듈에 "),s("strong",[a._v("CMakeLists.txt")]),a._v(" 파일을 넣고 다음 모듈 설정 내용을 추가하십시오:"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("px4_add_module(\n MODULE drivers__ulanding\n MAIN ulanding_radar\n SRCS\n     ulanding.cpp\n MODULE_CONFIG\n     module.yaml\n )\n")])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);