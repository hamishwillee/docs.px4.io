(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{2667:function(t,e,_){"use strict";_.r(e);var a=_(19),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"고도-모드-멀티콥터"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고도-모드-멀티콥터"}},[t._v("#")]),t._v(" 고도 모드 (멀티콥터)")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_difficulty"}},[a("img",{attrs:{src:_(330),title:"초급 난이도 비행",width:"30px"}})]),t._v(" "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_manual"}},[a("img",{attrs:{src:_(328),title:"수동/원격 제어 필요",width:"30px"}})]),t._v(" "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#altitude_only"}},[a("img",{attrs:{src:_(335),title:"필요한 고도 (예 : 기압계, 거리계)",width:"30px"}})])],1),t._v(" "),a("p",[a("em",[t._v("고도 모드")]),t._v("에서는 "),a("em",[t._v("상대적으로")]),t._v(' 비행하기 용이한 RC 모드로, 롤 및 피치 스틱이 차량 이동을 좌우 및 앞뒤 방향(차량의 "전면" 기준)으로 제어하고, 요 스틱은 수평면에서 회전 속도를 제어하고 스로틀은 상승 하강 속도를 제어합니다.')]),t._v(" "),a("p",[t._v("스틱을 놓거나 중앙에 놓으면 차량이 수평을 유지하고 현재 "),a("em",[t._v("고도")]),t._v("를 유지합니다. 수평면에서 이동하는 경우 차량은 바람 저항에 의해 모멘텀이 소실 될 때까지 계속됩니다. 바람이 불면 기체는 바람의 방향으로 표류합니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("*고도 모드< 0>는 초보 비행자에게 가장 안전한 비 GPS 수동 모드입니다. "),a("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[t._v("수동 / 안정화")]),t._v(" 모드와 비슷하지만 스틱을 놓으면 기체의 고도가 계속 유지됩니다. :::")],1),t._v(" "),a("p",[t._v("아래 다이어그램은 모드 동작을 시각적으로 보여줍니다 ("),a("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("모드 2 송신기")]),t._v("의 경우).")],1),t._v(" "),a("p",[a("img",{attrs:{src:_(944),alt:"고도 제어 MC-Mode2 RC 컨트롤러"}})]),t._v(" "),a("h2",{attrs:{id:"기술-요약"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기술-요약"}},[t._v("#")]),t._v(" 기술 요약")]),t._v(" "),a("p",[t._v("RC 수동 모드는 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[t._v("수동/안정화(멀티콥터)")]),t._v(" 모드와 같지만 "),a("em",[t._v("고도 안정화")]),t._v("가 있습니다 (가운데 스틱이 차량을 수평으로 유지하고 고정 고도를 유지).")],1),t._v(" "),a("ul",[a("li",[t._v("중앙 스틱 (데드밴드 내부) :\n"),a("ul",[a("li",[t._v("RPY는 기체 수평을 유지합니다.")]),t._v(" "),a("li",[t._v("스로틀(~ 50 %)은 현재 고도를 바람에 대해 일정하게 유지합니다.")])])]),t._v(" "),a("li",[t._v("센터  외부:\n"),a("ul",[a("li",[t._v("롤/피치 스틱은 각각의 방향에서 틸트 각도를 제어하여 해당하는 좌우와 전후 방향으로 이동합니다.")]),t._v(" "),a("li",[t._v("스로틀 스틱은 미리 정해진 최대 속도 (및 다른 축의 이동 속도)로 속도를 올리거나 내립니다.")]),t._v(" "),a("li",[t._v("요 스틱은 수평면 위의  회전 각속도를 제어합니다.")])])]),t._v(" "),a("li",[t._v("이륙:\n"),a("ul",[a("li",[t._v("착륙했을 때 스로틀 스틱을 62.5 % (하단에서 전체 범위) 이상으로 올리면 기체가 이륙합니다.")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("ul",[a("li",[t._v("수동 입력이 필요합니다 (RC 컨트롤러 또는 MAVLink를 통한 게임 패드/엄지 스틱).")]),t._v(" "),a("li",[t._v("고도는 일반적으로 기압계로 측정되며 극단적인 기상 조건에서는 정확하지 않을 수 있습니다. LIDAR/거리 센서가 장착된 기체는 높은 정확도로 고도를 제어할 수 있습니다. :::")])]),t._v(" "),a("h2",{attrs:{id:"매개-변수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#매개-변수"}},[t._v("#")]),t._v(" 매개 변수")]),t._v(" "),a("p",[t._v("이 모드는 아래의 매개 변수의 영향을받습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개 변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"MPC_Z_VEL_MAX_UP"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[t._v("MPC_Z_VEL_MAX_UP")])],1),t._v(" "),a("td",[t._v("최대 수직 상승 속도. 기본값: 3 m/s.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MPC_Z_VEL_MAX_DN"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[t._v("MPC_Z_VEL_MAX_DN")])],1),t._v(" "),a("td",[t._v("최대 수직 하강 속도. 기본값: 1 m/s.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"RCX_DZ"}}),a("code",[t._v("RCX_DZ")])]),t._v(" "),a("td",[t._v("채널 X의 RC 데드 존. 스로틀에 대한 X 값은 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_MAP_THROTTLE"}},[t._v("RC_MAP_THROTTLE")]),t._v(" 값에 따라 달라집니다. 예를 들어, 스로틀이 채널 4 인 경우 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC4_DZ"}},[t._v("RC4_DZ")]),t._v("는 데드 존을 지정합니다.")],1)]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MPC_xxx"}}),a("code",[t._v("MPC_XXXX")])]),t._v(" "),a("td",[t._v("대부분의 MPC_xxx 매개 변수는이 모드에서 비행 동작에 어느정도 영향을 미칩니다 . 예를 들어, "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v("는 기체의 호버링 추력을 정의합니다.")],1)])])])])])])}),[],!1,null,null,null);e.default=v.exports},328:function(t,e,_){t.exports=_.p+"assets/img/remote_control.e49232a6.svg"},330:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAgRSURBVHic7Z1bbBxXGcf/35nxZdd2Uyd9KYKkEiROiLsWnc2ubzF2FYKKoaBSER4oQqh9IQhRIdRKCCVVRUVVRIpAvBAJqUjQ0IpbUloiUydKnd317pLE9rZxGkQSBH0htmPH6/V653w8eO36tt7bXLw783vyzJzznb//Oh7v7HznO4QtiO+KrwFJbwuI94BoryRuIcYuAA0AGgE0Z38GgFkAkwDuAphlwk0wXxVM42C6Bm9yfKRtZNae3yQ3ZLcAANBimjfNNZ0k0c3MXSD0AKg1KLwO4DLAA0RiKCn5/PX2yLRBsUvGNuMfGOytb2xIPSoYTzD4MIwzOg88z8BZwfTK9JznzI2+cylrxl2N5ca3RTsCutSfItDjAO61evw1TIHwewl5MhGIRq0c2DLj28LBbiZ6hsGft2rMYiDGEAS9OBIIn7ZkPLMHaA0HP0PExwHqNHssIyDGECt0fPRAeMDUccwK/Kl3uj6i12R+zMATZo1hJgQ6oysLRxP++C1z4htM72CvOuGZO8qE5wE0GR3fYpIEeklvnHkhsT+RNjKwocbvG+rcpar6qwDajYy7BYizohwZ81/8p1EBhVGBHowEvqSq+iVUn+kAoJGu/6N1uP2IUQHLnvFaTKtJS/UEGEeNELT14Z/XKvr34v74QjlRyjJei2netK6+BuBz5cSpOBgD6Yz62Hj30EypIUo2/sEL3c1Us3CaCV2lxqhkmDFcp2b64/74/0rpX5LxvnDwo0w4C2BfKf2riITQxWevdIb+U2zHoo3fGwnsqAFdgGv6Eu9KXRxMdIYmiulU1KcaLaZ5a5n+DNf0lXxSKPKvviu+hvxNP6Rg47WYVpPOqK879Z6ehyCnPKd6B3vVQjsUbHxaqidAeKQ0XY6g/3bD3EuFNi7oHu8LBx9nwmula3IMzOAvjwWH/5ivYV7jW2OdHyddjwPYZoi06meKwA+NBIf/tVmjTW81WkyrIV1/Fa7pxXAvg36X736/qfFpXXkagN9QWc4gOOGZ+/ZmDXLealqHD3yMWLyLxbf6LsUzI3SxL9fDVc4ZL6R4Ga7p5dCkq/InuS5uOOMXX9fhrHmanANL6hvrCJ9be37DGS+AY6Yrcggk5PGNzq8zfn842Oc+nRoJfdoXCRxce3ad8YLoB9YIcg4S6z1ddY9vi3YEpJQR6yQ5BwYfGAsOx5aOV814XepPWS/JGRDoydXHWR4Y7K1v8s59APvT6qqVO426uD/UGZoDVsz4xobUF+GabibbZoXsXzpYNp6YKzLjq5Jg8WFWHQFL2QLKBEB19slyAjzfqCvNoc7QnACA+Yza7ZpuBVQ3q2Y6geythoA+ewU5B8nUB2SNZ+Bhe+U4BwI9DADku+Jr4JRnCkDBL2pdyiJTq2S2CSS9LXBNtxI1pSu7BYRssVuJ0yASLQIQrvEWQ+AWIYld462GuUUQ8067dTgNBu0SgLjHbiFOg4AmQeBKXyBWidwjuPJX5lUcDDQJuCkclkPgJsNW/bkUh8BinRcXC2HQjCCg5JVrLqVBwIxgkGu89UwLQNperchpMDAjmMiU6hQuuSHwTSGYxu0W4jiIxgUgXeMthkHjAlK4xlsMsxwX8CbHAWTsFuMgFuoV/X2RLYYZt1uNc+Bo3B9PLqZ3EN62W45jYHobyKZ3SIlBe9U4ByIeBLLG16mZIYDn7ZXkCFINuhICssbH/fEkw11sZgFvrUvTJuA39ulxBky07PGy8TNJ72kAU7YocgaTqebmN5YOlo2/0XcuBXYrdJgFgU5d3/3m8v/RVW+gpJC/sl6SM2DmkyuPVxmfCESjYJhazNiZ8Fuj7ZFVD6nr3rky04+sE+QMCHhhg3PraY0ELxDQbb4kB0A4NxqIrFv4sWGWAQl6znxFTkEc3/DsRiezRetfN1OOM6DfjgZC5ze6kjOvJqNkvgPAfR9bOtPqgvL9XBdzGv+eP/4BM543R1P1w0Q/vNQ99N9c1zfNJKtTMz8DyNLdYqqE0H2z9b/crEHe8of7Y9pOoauXAGw3TFZ1M6lIeuhyR/jGZo3y5k4m/PFbRPQNAGyQsGqGAf5mPtOBAkvcLu6NxL8oW1bVwydGg8N/KqRlwdnCe2/uehqgvKVbnQqBzuxIep8pvH0RdFzs8Mwo8qz7VLuOMNXPHSpmF82iC/drMW1bWlfPA2grtm+VkpC66DG1cD8AxP3xO0IX/QASxfatPmhMXVAPF2s6UObmLFy78BcH33YiC+D+q8Hh26V0LnkpzujBdyZT27cfIsYfSo1RqTD4dKMu+ko1HShz57Pru9+c3z7nOQLCy3DG53wG+Kf3Jb2PLWULlIphe/35Qu2PsuBfo3qfcO8Q48mR9ogh39qascniKQBBI+NuAUJSyXzVyC1GDV1u+V7XxZs7kp5uYnwX1fGV8ixAz+5IenqM3tfVtI1098W0+2t09UUGvmbmOGZBoDOS9G+NBaL/Nie+ybSG2ntJ8HMAesweyxj4PEg5luvNkVFYNhP3R9u7FIlnGdxv5biFsrhZujw2Eoj+3ZLxrBhkJa2RgD9b4PgrAJqtHn8NkwQ6xcwn1+a9mI1tM+8T7z9S57098QVJ/HUCDltYcDQF4G9M9EqqufmNlWl1VrIl/uQ7LnZ4kkJqkqgLzIdA6AFQa1B4HcBlgAcgxEDjAg2V+/BjBFvC+LVoMc2bkmIPQWkh8B4w7WXwTlqsrdOExarfS+Ve7gKYImBaAncJdAvEVxk0ztCv1Qt5Le6PJ237ZXLwf8jBpUblmdzOAAAAAElFTkSuQmCC"},335:function(t,e,_){t.exports=_.p+"assets/img/altitude_icon.ca9310b8.svg"},944:function(t,e,_){t.exports=_.p+"assets/img/altitude_control_mode_copter.8e02e8ec.png"}}]);