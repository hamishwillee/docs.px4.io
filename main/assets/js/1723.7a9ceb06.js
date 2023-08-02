(window.webpackJsonp=window.webpackJsonp||[]).push([[1723],{3129:function(a,t,s){"use strict";s.r(t);var r=s(19),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"사용자-설정-가능-직렬-포트-드라이버-제작"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용자-설정-가능-직렬-포트-드라이버-제작"}},[a._v("#")]),a._v(" 사용자 설정 가능 직렬 포트 드라이버 제작")]),a._v(" "),s("p",[a._v("비행 콘트롤러에서 설정 가능 직렬 포트에서 실행되도록 사용자가 (매개변수를 통하여) 구성할 수 있도록 직렬 드라이버를 설정하는 방법을 설명합니다.")]),a._v(" "),s("h2",{attrs:{id:"전제-조건"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[a._v("#")]),a._v(" 전제 조건")]),a._v(" "),s("p",[a._v("제공되는 드라이버를 사용하여, 쉘에서 다음 명령어로 시작합니다.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("driver_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" start -d "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("serial_port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("baudrate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" -b p:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("param_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("여기서,")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("-d")]),a._v(": 직렬 포트 이름")]),a._v(" "),s("li",[s("code",[a._v("-b")]),a._v(": 드라이버가 다중 전송 속도를 지원하는 경우 전송 속도(선택 사항). 지원되는 경우 드라이버는 "),s("code",[a._v("-bp:<param_name>")]),a._v(" 형식("),s("code",[a._v("px4_get_parameter_value()으로 구문 분석할 수 있음)의 매개변수 이름과 기본 전송 속도를 지정할 수 있어야 합니다.")]),a._v("). :::tip 샘플은 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/drivers/gps/gps.cpp#L1023",target:"_blank",rel:"noopener noreferrer"}},[a._v("GPS 드라이버"),s("OutboundLink")],1),a._v("를 참조하십시오.\n:::")])]),a._v(" "),s("h2",{attrs:{id:"설정-가능-드라이버-제작"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설정-가능-드라이버-제작"}},[a._v("#")]),a._v(" 설정 가능 드라이버 제작")]),a._v(" "),s("p",[a._v("드라이버를 설정 가능하게 하려면:")]),a._v(" "),s("ol",[s("li",[a._v("YAML 모듈 구성 파일을 만듭니다.\n"),s("ul",[s("li",[a._v("드라이버의 소스 디렉토리에 "),s("strong",[a._v("module.yaml")]),a._v(" 파일을 추가합니다.")]),a._v(" "),s("li",[a._v("다음 텍스트를 삽입하고 필요에 따라 조정합니다."),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("module_name: uLanding Radar\nserial_config:\n    - command: ulanding_radar start -d ${SERIAL_DEV} -b p:${BAUD_PARAM}\n      port_config_param:\n        name: SENS_ULAND_CFG\n        group: Sensors\n")])])])])])])]),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),s("p",[a._v("모듈 구성 파일의 전체 매뉴얼은 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/validation/module_schema.yaml",target:"_blank",rel:"noopener noreferrer"}},[a._v("validation/module_schema.yaml"),s("OutboundLink")],1),a._v(" 파일을 참고하십시오. 이 파일은 CI의 모든 설정 파일을 검증에도 사용됩니다.")])]),a._v(" "),s("ol",[s("li",[a._v("드라이버 모듈의 "),s("strong",[a._v("CMakeLists.txt")]),a._v(" 파일에 모듈 구성을 추가합니다."),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("px4_add_module(\n MODULE drivers__ulanding\n MAIN ulanding_radar\n SRCS\n     ulanding.cpp\n MODULE_CONFIG\n     module.yaml\n )\n")])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);