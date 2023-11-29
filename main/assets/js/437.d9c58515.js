(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{2796:function(t,e,a){"use strict";a.r(e);var r=a(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"수동-안정화-모드-멀티콥터"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#수동-안정화-모드-멀티콥터"}},[t._v("#")]),t._v(" 수동/안정화 모드 (멀티콥터)")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_difficulty"}},[r("img",{attrs:{src:a(337),title:"중급 난이도 비행",width:"30px"}})]),t._v(" "),r("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_manual"}},[r("img",{attrs:{src:a(329),title:"수동/원격 제어 필요",width:"30px"}})])],1),t._v(" "),r("p",[t._v("The "),r("em",[t._v("Manual/Stabilized")]),t._v(" mode stabilizes the multicopter when the RC control sticks are centred. 기체를 수동으로 움직이거나 조종하려면 스틱을 중앙의 바깥쪽으로 제어합니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("This multicopter mode is enabled if you set either "),r("em",[t._v("Manual")]),t._v(" or "),r("em",[t._v("Stabilized")]),t._v(" modes.")])]),t._v(" "),r("p",[t._v("When under manual control the roll and pitch sticks control the "),r("em",[t._v("angle")]),t._v(" of the vehicle (attitude) around the respective axes, the yaw stick controls the rate of rotation above the horizontal plane, and the throttle controls altitude/speed.")]),t._v(" "),r("p",[t._v("조종 스틱을 놓으면 중앙 데드 존으로 돌아갑니다. 롤 포크와 피치 스틱이 중앙에 오면 멀티 피터가 수평을 유지하고 정지합니다. 기체는 적절하게 균형을 잡고, 스로틀이 적절하게 설정되고("),r("a",{attrs:{href:"#params"}},[t._v("아래")]),t._v(" 참고), 외력이 가해지지 않으면 (예 : 바람), 고도에 유지되거나 유지됩니다. 기체는는 바람 방향으로 표류하게 되며, 고도를 유지하기 위해서는 스로틀을 제어하여야 합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(398),alt:"MC Manual Flight"}})]),t._v(" "),r("h2",{attrs:{id:"기술적-설명"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기술적-설명"}},[t._v("#")]),t._v(" 기술적 설명")]),t._v(" "),r("p",[t._v("조종사의 입력은 롤 및 피치 각 명령과 요 율 명령으로 전달됩니다. Throttle is rescaled (see "),r("a",{attrs:{href:"#params"}},[t._v("below")]),t._v(") and passed directly to control allocation. 자동 조종 장치는 자세를 제어합니다. 즉, RC 스틱이 컨트롤러 데드 존 내부에 집중 될 때 롤과 피치 각을 제로로 조절합니다 (결과적으로 태도가 수평이 됨). 자동 조종 장치는 바람 (또는 다른 원인)으로 인한 드리프트를 보상하지 않습니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("ul",[r("li",[t._v("수동 입력이 필요합니다 (RC 컨트롤러 또는 MAVLink를 통한 게임 패드/엄지 스틱).")])])]),t._v(" "),r("p",[r("a",{attrs:{id:"params"}})]),t._v(" "),r("h2",{attrs:{id:"매개-변수"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#매개-변수"}},[t._v("#")]),t._v(" 매개 변수")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("매개 변수")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{id:"MPC_THR_HOVER"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")])],1),t._v(" "),r("td",[t._v("스로틀 스틱이 중앙에 있고 "),r("code",[t._v("MPC_THR_CURVE")]),t._v("가 기본값으로 설정되어있을 때 출력되는 호버 스로틀입니다.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"MPC_THR_CURVE"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_CURVE"}},[t._v("MPC_THR_CURVE")])],1),t._v(" "),r("td",[t._v("스로틀 스케일링을 정의합니다. 기본적으로이 값은 "),r("strong",[t._v("호버 추력으로 조정")]),t._v("으로 설정되어 있습니다. 즉, 스로틀 스틱이 중앙에있을 때 구성된 호버 스로틀이 출력되고 ("),r("code",[t._v("MPC_THR_HOVER")]),t._v(") 스틱 입력이 선형으로 조정됩니다. "),r("br"),t._v("강력한 기체의 경우 호버 스로틀이 매우 낮아 (예 : 20 % 미만) 스로틀 입력이 왜곡 될 수 있습니다. 즉, 여기서 추력의 80 %는 스틱 입력의 상단 절반으로, 하단은 20 %로 제어됩니다. 필요한 경우 "),r("code",[t._v("MPC_THR_CURVE")]),t._v("를 "),r("strong",[t._v("No Rescale")]),t._v("로 설정하여 배율을 다시 조정할 수 없습니다 (스로틀 매핑에 대한 스틱 입력은 "),r("code",[t._v("MPC_THR_HOVER")]),t._v("과 무관 함).")])])])])])}),[],!1,null,null,null);e.default=s.exports},329:function(t,e,a){t.exports=a.p+"assets/img/remote_control.5fceab4e.svg"},337:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAMAAACdDFNcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAaFQTFRFR3BM57QW46oc6LQW57QX57QW57QW/78A57QW5rMa57QW57MV6LkX6LQW/8wA57MV57QW57QW57QV57MW5rQW57QW57QW378g27Yk5rQW6bQX57UV5rQW5rMU57UV57QW47MT5rMa57QW57QW57MY57QW67EU6bUW6LMX5rMW6LMX57QX57QW57IU57QW5rMW6LMX6LQW57UW57QW5rUU67gU57QV6LQV5rMV57UW5bAS6bYW4bQP57IY57MW57QX57QW57QW5rUZ57MW47gc57UX5rQV57MY5rQU57QW57UW5K4b57MW57QX5rQW57QW6LMX6LQW57QW6LQX57QV5rMV57QX57QW6LUX6bMW5LUV6LQW5rMW57QV57QX57QW5rMa57QW57QW57QW5LYS6LIX57MW/6oA57QX67EU57QW57cY57QW57QW6LQW57QW57QY57QW5bYW1aor57QW7rsR5rQX6LQX57QV6LQW6LQW6LUV57UV57MW5rQW6LUW57QW6LMV57UW6LYX57QW5rMX7bYS5rMW6LQV5rUX57QWHpMEJAAAAIp0Uk5TAPgJxO7+wwT5Cu2zC+8FVMjGp4DQ3fEIB8VEsrsyVn0bHvDUQNMaRU2lV8z7P61Qb5iX8jQZ1o+bjR0jETWUkuveH6ISwD02M+DRE8e0UslDpPdYdzyI/FkvMK5Rv8t0FLjzqxwhdgO1DfUgwbyat0HVOwb0D3BOVZnPbsq2sK+xg39C+ocORoSGrQ6rKgAAAsdJREFUaN612ndbGkEQBvCFO+DgpBfpSJEAaowttqhJ1MTYY0kxvffeq+llPnUIAQLCwd3tzPs/v+dhYfdmZ44xNemIbXo97kW/KEmif9Ht+bIZ62A4sYa9UQkacrrnVO4Hr90Zl5vQlRgizk4O/PiYHdrE/mZKJ74tg6oIOR34vhCojhDWiGdnQVPkpAbccmAINOau95la/egy6EjPpDq9XwRdCRRU4I5p0J0ZR9s9ehs4Er3TWj8kAFfWLrfSrx8EzqS7lPUlbh3gyZziuguAEJfCUe34AChZsTTlpwEpo810J5YOpvON+mQKjQf7jYaFvwiIce1d/puAmpf1+sRVXH6ofnftB+R46p58gJ5MDS/g8/P/9cdAkGNV/gEFf6VaLQFJhsv8GA0/UK4j7TR8yljiC0AUZ4lfoeI/lZ5RBire8Hd1fgJZ1ov8dzr+V5Ffo+PdxVtZLx3fa2UxIMxZdoaSjzMvJZ9gHkr+JAtR8mbWTcn72AlK/gizUfKHmUTJG6h54sUh/mmJ/5jE24r4UCA+0ogPZOLHCeXD8JuVMRcdHypWCr/p+M80F59KvpIWgRulEjlCxe+WKuTXVPwq6fVBDP67njyk4QfLd6spGn6hcjWMUuiPqvfaDO21mZnx9Qs1PYUwPt9X2xK5hq3n6/o5IwFcPZCtb0ddwuXf7W3VvUe9szV0SpOI5Zp4r7GRmTNh6ab+Zm3YGSx+vGkP+dY5HF1u3qJmRpTNu6w4C33h49fTc8rjh640r96dbTma4Vwf11Lr0U+Qq90bMbadF47q/v+bxi0q5m6vdO7flFPlSFJX2elOqh+oaj6fn29ZNExsR2a1/QLyhMZ5c+a+eny+T8e0/Kms7hsI6zpn/cMDbSfD4uACx5sKQWekRX2+8XE1yPuihXF7S+EljrCR4cS6U0jkzT6/TZJs/rfmfCK+Y1X1wT/yG3MVH20xOwAAAABJRU5ErkJggg=="},398:function(t,e,a){t.exports=a.p+"assets/img/manual_stabilized_MC.857b681e.png"}}]);