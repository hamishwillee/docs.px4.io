(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{1510:function(t,a,s){t.exports=s.p+"assets/img/rascal110.a862a787.jpg"},1511:function(t,a,s){t.exports=s.p+"assets/img/rascal_options.518234ff.jpg"},1512:function(t,a,s){t.exports=s.p+"assets/img/tf-g1.45590633.jpg"},1513:function(t,a,s){t.exports=s.p+"assets/img/tf-r1_towing.9d0ffd85.jpg"},3122:function(t,a,s){"use strict";s.r(a);var r=s(19),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"flightgear-차량"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flightgear-차량"}},[t._v("#")]),t._v(" FlightGear 차량")]),t._v(" "),r("p",[t._v("PX4 "),r("RouterLink",{attrs:{to:"/ko/simulation/flightgear.html"}},[t._v("FlightGear")]),t._v(" 시뮬레이션이 지원하는 차량과 실행 "),r("code",[t._v("make")]),t._v(" 명령을 설명합니다. 명령은 "),r("strong",[t._v("PX4-Autopilot")]),t._v(" 디렉토리의 터미널에서 실행됩니다. 지원되는 차량 유형은 고정익, 오토자이로와 로버입니다(이러한 유형 내에 특정 프레임이 있음).")],1),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("빌드 대상의 전체 목록을 보려면 "),r("code",[t._v("make px4_sitl list_vmd_make_targets")]),t._v("를 실행하십시오("),r("code",[t._v("flightgear_")]),t._v("로 시작하는 대상 필터링).")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/simulation/flightgear.html"}},[t._v("FlightGear")]),t._v(" 페이지에는 FlightGear 설치 및 사용 방법이 자세히 설명되어있습니다.(이 페이지는 차량별 기능 요약).")],1)]),t._v(" "),r("p",[r("a",{attrs:{id:"standard_plane"}})]),t._v(" "),r("h2",{attrs:{id:"표준-고정익"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#표준-고정익"}},[t._v("#")]),t._v(" 표준 고정익")]),t._v(" "),r("p",[t._v("FlightGear는 많은 고정익 모델을 지원합니다. UAV 개발에 가장 적합한 모델은 "),r("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/FlightGear-Rascal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rascal RC 비행기"),r("OutboundLink")],1),t._v("입니다(여러가지 변형이 존재함).")]),t._v(" "),r("p",[r("img",{attrs:{src:s(1510),alt:"FlightGear의 Rascal 고정익"}})]),t._v(" "),r("p",[t._v("변형은 주로 "),r("a",{attrs:{href:"http://wiki.flightgear.org/Flight_Dynamics_Model",target:"_blank",rel:"noopener noreferrer"}},[t._v("FDM"),r("OutboundLink")],1),t._v(" 모델에 따라 달라집니다. 모든 변형에는 컴퓨터 키보드에서 "),r("code",[t._v("=")]),t._v(" 키를 눌러 활성화할 수 있는 공통 기능 선택 표가 있습니다.")]),t._v(" "),r("p",[t._v("고급 기능 활성화에 사용할 수 있는 팝업 테이블이 있습니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(1511),alt:"Rascal 비행기 FlightGear 고급 옵션"}})]),t._v(" "),r("p",[t._v("가장 관련성이 높은 옵션은 다음과 같습니다.")]),t._v(" "),r("ul",[r("li",[t._v("연기 - 공중에서 항공기의 가시성을 향상시키기 위해 연기 흔적을 생성합니다(연기와 입자 옵션은 "),r("strong",[t._v("FG 보기 > 렌더링 옵션 > 입자 확인란")]),t._v("에서 활성화함).")]),t._v(" "),r("li",[t._v("궤적 마커 - 비행 궤적을 따라 직교 마커를 표시합니다.")])]),t._v(" "),r("p",[t._v("궤적 마커는 세계 좌표의 절대 비행 경로를 보여주고, 연기 흔적은 기단의 상대 경로를 보여줍니다.")]),t._v(" "),r("h3",{attrs:{id:"rascal-110-yasim"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rascal-110-yasim"}},[t._v("#")]),t._v(" Rascal 110 YASim")]),t._v(" "),r("p",[t._v("Rascal 모델의 주요 변형에는 연소 피스톤 엔진 모델이 있습니다. 이것은 공회전 엔진 RPM에서 프로펠러의 회전을 일으키는 0이 아닌 공회전 전력을 초래합니다.")]),t._v(" "),r("p",[t._v("실행 명령어는 다음과 같습니다.")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_nolockstep flightgear_rascal\n")])])]),r("h3",{attrs:{id:"rascal-110-electric-yasim"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rascal-110-electric-yasim"}},[t._v("#")]),t._v(" Rascal 110 Electric YASim")]),t._v(" "),r("p",[t._v("전기 엔진을 장착한 Rascal 차량.")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_nolockstep flightgear_rascal-electric\n")])])]),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("이 변종에는 최신 FlightGear 코드가 필요합니다(적어도 2020년 4월 26일부터 출처).\n그렇지 않으면, 전기 엔진의 예기치 않은 정의로 인하여 FlightGear가 충돌합니다.")])]),t._v(" "),r("h3",{attrs:{id:"rascal-110-jsbsim"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rascal-110-jsbsim"}},[t._v("#")]),t._v(" Rascal 110 JSBsim")]),t._v(" "),r("p",[t._v("Rascal JSBsim 변종.")]),t._v(" "),r("p",[t._v("이 변형에는 직접적인 "),r("code",[t._v("make")]),t._v(" 옵션이 없지만, "),r("strong",[t._v("rascal.json")]),t._v(" 설정 파일("),r("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4-FlightGear-Bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-FlightGear-Bridge"),r("OutboundLink")],1),t._v("의 일부)에서 수동으로 선택할 수 있습니다. "),r("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4-FlightGear-Bridge/blob/master/models/rascal.json#L2",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 파일"),r("OutboundLink")],1),t._v("에서 "),r("code",[t._v("Rascal110-YASim")]),t._v("을 "),r("code",[t._v("Rascal110-JSBSim")]),t._v("으로 변경하면 됩니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"autogyro"}})]),t._v(" "),r("h2",{attrs:{id:"오토자이로"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#오토자이로"}},[t._v("#")]),t._v(" 오토자이로")]),t._v(" "),r("p",[t._v("FlightGear에서 지원하는 유일한 UAV 오토자이로 모델은 "),r("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TF-G1",target:"_blank",rel:"noopener noreferrer"}},[t._v("TF-G1 Autogyro"),r("OutboundLink")],1),t._v("입니다.")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_nolockstep flightgear_tf-g1\n")])])]),r("p",[r("img",{attrs:{src:s(1512),alt:"FlightGear의 TF-G1"}})]),t._v(" "),r("p",[r("a",{attrs:{id:"ugv"}})]),t._v(" "),r("h2",{attrs:{id:"ackerman-차량-ugv-rover"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ackerman-차량-ugv-rover"}},[t._v("#")]),t._v(" Ackerman 차량 (UGV/Rover)")]),t._v(" "),r("h3",{attrs:{id:"tf-r1-지상-지원-로버"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tf-r1-지상-지원-로버"}},[t._v("#")]),t._v(" TF-R1 지상 지원 로버")]),t._v(" "),r("p",[t._v("이 로버에는 견인 히치가 장착되어 있으며, 다른 차량의 항공 견인에 사용될 수 있습니다.")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_nolockstep flightgear_tf-r1\n")])])]),r("p",[r("img",{attrs:{src:s(1513),alt:"FlightGear의 TF-R1 로버"}})]),t._v(" "),r("p",[r("a",{attrs:{id:"quadrotor"}})]),t._v(" "),r("h2",{attrs:{id:"쿼드콥터"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#쿼드콥터"}},[t._v("#")]),t._v(" 쿼드콥터")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/FlightGear-TF-Mx1",target:"_blank",rel:"noopener noreferrer"}},[t._v("불완전한 멀티콥터 모델"),r("OutboundLink")],1),t._v("만 있습니다. 이것은 아직 사용할 수 없습니다(숫자적으로 불안정하고 추가 작업이 필요함).")]),t._v(" "),r("h1",{attrs:{id:"신규-차량-추가"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#신규-차량-추가"}},[t._v("#")]),t._v(" 신규 차량 추가")]),t._v(" "),r("p",[t._v("새 차량 모델은 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-FlightGear-Bridge/tree/master/models",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-FlightGear-Bridge/models/"),r("OutboundLink")],1),t._v(" 디렉토리에 git 하위 모듈로 포함되어야 합니다. 이 디렉토리에는 제어 채널 정의 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-FlightGear-Bridge/blob/master/models/rascal.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON 파일"),r("OutboundLink")],1),t._v("이 있습니다.")]),t._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"FgModel"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Rascal110-YASim"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Url"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/ThunderFly-aerospace/FlightGear-Rascal/archive/master.zip"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Controls"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/controls/flight/aileron"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-1"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/controls/flight/elevator"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-1"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/controls/flight/rudder"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/controls/engines/engine/throttle"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n                "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("p",[t._v("파일 내용 의미는 다음과 같습니다.")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("FgModel")]),t._v(' - 모델 디렉토리의 "XXXX-set.xml"에 해당하는 FlightGear 모델의 정확한 대소문자 구분 이름입니다(여기서 XXXX는 모델 이름).')]),t._v(" "),r("li",[r("code",[t._v("URL")]),t._v("은 선택 사항이며 현재 사용되지 않습니다. 웹에서 모델을 자동으로 다운로드하는 것이며, 차후 사용하기 위한 것입니다.")]),t._v(" "),r("li",[r("code",[t._v("컨트롤")]),t._v(" - 차량을 추가하는 과정에서 가장 중요한 부분입니다. 이 섹션에는 PX4 믹서 파일과 "),r("a",{attrs:{href:"http://wiki.flightgear.org/Property_tree",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightGear 속성 트리"),r("OutboundLink")],1),t._v(" 간의 매핑이 포함되어 있습니다.\n"),r("ul",[r("li",[t._v("목록의 첫 번째 숫자는 PX4 믹서 출력을 선택합니다.")]),t._v(" "),r("li",[t._v("경로 문자열은 속성 트리의 FlightGear 변수 위치입니다.")])])]),t._v(" "),r("li",[t._v("목록의 마지막 숫자는 믹서 입력의 반전 또는 크기 조정을 허용하는 승수입니다.")])]),t._v(" "),r("p",[t._v("이 모든 파일을 준비한 후에는, 새 차량을 PX4 make 시스템에 포함하여야 합니다.")]),t._v(" "),r("p",[t._v("PX4 설정은 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/c5341da8137f460c84f47f0e38293667ea69a6cb/platforms/posix/cmake/sitl_target.cmake#L164-L171",target:"_blank",rel:"noopener noreferrer"}},[t._v("/platforms/posix/cmake/sitl_target.cmake"),r("OutboundLink")],1),t._v("에 있습니다. 새 차량의 json 이름이 목록에 추가되어야 합니다.")])])}),[],!1,null,null,null);a.default=e.exports}}]);