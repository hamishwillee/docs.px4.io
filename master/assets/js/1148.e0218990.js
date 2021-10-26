(window.webpackJsonp=window.webpackJsonp||[]).push([[1148],{2155:function(t,r,e){"use strict";e.r(r);var o=e(19),_=Object(o.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"멀티콥터-지오메트리-파일"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-지오메트리-파일"}},[t._v("#")]),t._v(" 멀티콥터 지오메트리 파일")]),t._v(" "),e("p",[t._v("지오메트리 파일은 PX4 속도 콘트롤러의 출력을 특정 모터에 매핑하는 믹서를 정의합니다. 파일은 각 로터의 위치, 추력 방향, 회전 방향, 추력 및 항력 계수를 기술합니다.")]),t._v(" "),e("h2",{attrs:{id:"신규-지오메트리-추가-방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#신규-지오메트리-추가-방법"}},[t._v("#")]),t._v(" 신규 지오메트리 추가 방법")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/lib/mixer/MultirotorMixer/geometries",target:"_blank",rel:"noopener noreferrer"}},[t._v("/src/lib/mixer/MultirotorMixer/geometry"),e("OutboundLink")],1),t._v('에 새 TOML 지오메트리 파일(예: "foo.toml")을 생성합니다. 파일에는 새로운 '),e("strong",[t._v("키")]),t._v("가 포함되어야 합니다(예: "),e("code",[t._v('key = "4fo"')]),t._v("). 필수 필드에 대한 정보는 "),e("a",{attrs:{href:"#geometry-file-format"}},[t._v("기하학 파일 형식")]),t._v("을 참고하십시오.")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/mixer/MultirotorMixer/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("/src/lib/mixer/MultirotorMixer/CMakeLists.txt"),e("OutboundLink")],1),t._v("에 지오메트리 파일을 추가합니다.")]),t._v(" "),e("li",[t._v("새 지오메트리를 사용하는 새로운 "),e("RouterLink",{attrs:{to:"/ko/concept/mixing.html"}},[t._v("믹서 파일")]),t._v("을 생성합니다. 예를 들어 새로운 키(이 경우 "),e("code",[t._v("4fo")]),t._v(")가 포함된 행으로 "),e("strong",[t._v("ROMFS/px4fmu_common/mixers/foo.main.mix")]),t._v("를 만들 수 있습니다."),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("R 4fo\n")])])])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/dev_airframes/adding_a_new_frame.html#add-new-airframe-to-qgroundcontrol"}},[t._v("기체 설정")]),t._v("에서 새 믹서를 설정합니다(예: "),e("strong",[t._v("init.d/airframes/myconfig")]),t._v(")."),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("set MIXER foo\n")])])])],1)]),t._v(" "),e("h2",{attrs:{id:"지오메트리-파일-형식"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#지오메트리-파일-형식"}},[t._v("#")]),t._v(" 지오메트리 파일 형식")]),t._v(" "),e("p",[t._v("지오메트리 파일은 "),e("code",[t._v("[info]")]),t._v(", "),e("code",[t._v("[rotor_default]")]),t._v(" 및 "),e("code",[t._v("[[rotor]]")]),t._v(" 헤더로 구분되는 섹션으로 구분되는 일반 텍스트 파일입니다(지오메트리의 각 로터에 대한 "),e("code",[t._v("[[rotor]]")]),t._v(" 섹션이 있음).")]),t._v(" "),e("p",[t._v("각 섹션에서 허용되는 필드는 아래에 나열되어 있습니다("),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/mixer/MultirotorMixer/geometries/tools/px_generate_mixers.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("px_generate_mixers.py"),e("OutboundLink")],1),t._v(" 스크립트에 정의됨).")]),t._v(" "),e("h3",{attrs:{id:"info-section"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#info-section"}},[t._v("#")]),t._v(" [info] section")]),t._v(" "),e("p",[e("code",[t._v("[info]")]),t._v(" 섹션은 리더 및 PX4용 파일을 식별합니다.")]),t._v(" "),e("p",[t._v("다음 값들을 정의하여야 합니다.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("key:")]),t._v(" 파일이 다른 기하 도형 파일과 구별될 수 있도록 하는 임의의 식별자입니다. 관례에 따라 키는 일반적으로 로터의 수와 그 뒤에 하나 또는 두 개의 문자가 있습니다(이 문자는 설정을 암시할 수 "),e("em",[t._v("있습니다")]),t._v('). 예: "4hb"')]),t._v(" "),e("li",[e("strong",[t._v("description:")]),t._v(' 지오메트리 파일에 설정에 대하여 사람이 읽을 수 있는 설명입니다. 예: "H 구성의 일반 쿼드콥터"')])]),t._v(" "),e("h3",{attrs:{id:"rotor-default"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rotor-default"}},[t._v("#")]),t._v(" [rotor_default]")]),t._v(" "),e("p",[e("code",[t._v("[rotor_default]")]),t._v(" 섹션은 해당 키가 "),e("code",[t._v("[[rotor]]")]),t._v(" 정의에 제공되지 않은 경우에는 로터에 기본값이 적용되도록 지정합니다. 예를 들어, 회전 방향은 모든 로터에 대해 정의되거나 기본값이 지정될 수 있습니다.")]),t._v(" "),e("p",[t._v("허용되는 키는 아래 "),e("code",[t._v("[[rotor]]")]),t._v(" 섹션에 설명되어 있습니다(고유한 "),e("em",[t._v("name")]),t._v("과 같은 키에 대한 기본값을 정의하는 것은 의미가 없습니다.")]),t._v(" "),e("h3",{attrs:{id:"rotor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rotor"}},[t._v("#")]),t._v(" [[rotor]]")]),t._v(" "),e("p",[t._v("각 "),e("code",[t._v("[rotor]")]),t._v(" 섹션은 로터의 지오메트리 값을 설명합니다. 기본값은 "),e("code",[t._v("[rotor_default]")]),t._v("에 제공될 수 있습니다(로터 섹션의 값이 우선함).")]),t._v(" "),e("p",[t._v("허용되는 키들은 다음과 같습니다.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("name:")]),t._v(' 사람이 읽을 수 있는 로터의 이름입니다. 예: "front_right_top"')]),t._v(" "),e("li",[e("strong",[t._v("position:")]),t._v(" 차체 프레임에서 기체 무게 중심을 기준으로 로터의 위치를 설명하는 벡터입니다(앞-오른쪽-아래). 이것은 믹서가 정규화되어 있으므로, 어떤 단위(예: 미터, 패덤, 무엇이든)든지 상관없습니다(거리 사이의 비율이 중요함).")]),t._v(" "),e("li",[e("strong",[t._v("axis:")]),t._v(" 로터에 의해 생성된 추력의 방향을 설명하는 몸체 프레임 벡터(전방-우향-하향). 예를 들어 "),e("code",[t._v("[1.0, 0.0, -1.0]")]),t._v("은 로터가 상향 및 전방 추력을 동일하게 생성함을 의미합니다(예: 각도 45도).")]),t._v(" "),e("li",[e("strong",[t._v("direction:")]),t._v(" 로터의 회전 방향을 지정합니다. "),e("code",[t._v("CW")]),t._v("(시계 방향) 또는 "),e("code",[t._v("CCW")]),t._v("(반시계 방향)")]),t._v(" "),e("li",[e("strong",[t._v("Ct:")]),t._v(" 무차원 추력 계수. 예를 들어, "),e("code",[t._v("Ct")]),t._v("가 2.0인 로터는 "),e("code",[t._v("Ct")]),t._v("가 1.0인 로터보다 2배의 추력을 생성합니다.")]),t._v(" "),e("li",[e("strong",[t._v("Cm:")]),t._v(" 무차원 드래그 토크 계수. 이것은 회전하는 프로펠러에 의해 생성되는 축방향 토크와 관련이 있습니다. 드래그와 추력을 함께 사용하여 일부 토크를 생성할 수 있는 경우 "),e("code",[t._v("Ct")]),t._v("를 기준으로 설정하여야 합니다. 0으로 설정하면, 믹서는 로터가 축방향 토크를 생성하지 않음을 가정합니다.")])]),t._v(" "),e("h2",{attrs:{id:"예제-파일"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#예제-파일"}},[t._v("#")]),t._v(" 예제 파일")]),t._v(" "),e("p",[t._v("소스에는 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/mixer/MultirotorMixer/geometries/",target:"_blank",rel:"noopener noreferrer"}},[t._v("/src/lib/mixer/Multirotor Mixer/geometry/"),e("OutboundLink")],1),t._v("와 같은 다양한 예제가 있습니다.")]),t._v(" "),e("p",[t._v("트라이콥터 지오메트리("),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/mixer/MultirotorMixer/geometries/tri_y.toml",target:"_blank",rel:"noopener noreferrer"}},[t._v("tri_y.toml"),e("OutboundLink")],1),t._v(")는 다음과 같습니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('# Tri Y\n\n[info]\nkey = "3y"\ndescription = "Tri Y"\n\n[rotor_default]\naxis      = [0.0, 0.0, -1.0]\nCt        = 1.0\nCm        = 0.0\ndirection = "CW"\n\n[[rotors]]\nname      = "front_right"\nposition  = [0.5, 0.866025, 0.0]\n\n[[rotors]]\nname      = "front_left"\nposition  = [0.5, -0.866025, 0.0]\n\n[[rotors]]\nname      = "rear"\nposition  = [-1.0, 0.0, 0.0]\n')])])])])}),[],!1,null,null,null);r.default=_.exports}}]);