(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{1649:function(t,e,a){"use strict";a.r(e);var i=a(18),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"altitude-mode-fixed-wing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#altitude-mode-fixed-wing"}},[t._v("#")]),t._v(" Altitude Mode (Fixed Wing)")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_difficulty"}},[i("img",{attrs:{src:a(324),title:"Easy to fly",width:"30px"}})]),t._v(" "),i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_manual"}},[i("img",{attrs:{src:a(323),title:"Manual/Remote control required",width:"30px"}})]),t._v(" "),i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#altitude_only"}},[i("img",{attrs:{src:a(327),title:"Altitude required (e.g. Baro, Rangefinder)",width:"30px"}})])],1),t._v(" "),i("p",[t._v("The "),i("em",[t._v("Altitude")]),t._v(" flight mode makes it easier for users to control vehicle altitude, and in particular to reach and maintain a fixed altitude. The mode will not attempt to hold the vehicle course against wind.")]),t._v(" "),i("p",[t._v("The climb/descent rate is controlled via the pitch/elevator stick. Once centered the autopilot latches onto the current altitude and will maintain it during yaw/roll, and at any airspeed.")]),t._v(" "),i("p",[t._v("The throttle input controls airspeed.  Roll and pitch are angle-controlled (so it is impossible to roll over or loop the vehicle).")]),t._v(" "),i("p",[t._v("When all remote control inputs are centered (no roll, pitch, yaw, and ~50% throttle) the aircraft will return to straight, level flight (subject to wind) and keep its current altitude.")]),t._v(" "),i("p",[t._v("The diagram below shows the mode behaviour visually (for a "),i("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("mode 2 transmitter")]),t._v(").")],1),t._v(" "),i("p",[i("img",{attrs:{src:a(820),alt:"Altitude Control FW"}})]),t._v(" "),i("h2",{attrs:{id:"technical-summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#technical-summary"}},[t._v("#")]),t._v(" Technical Summary")]),t._v(" "),i("p",[t._v("RC/manual mode like Stabilized mode but with altitude stabilization (centered sticks put vehicle into straight and level flight and maintain current altitude). The vehicle course is not maintained, and can drift due to wind.")]),t._v(" "),i("ul",[i("li",[t._v("Centered Roll/Pitch/Yaw inputs (inside deadband):\n"),i("ul",[i("li",[t._v("Autopilot levels vehicle/wings and maintains altitude.")]),t._v(" "),i("li",[t._v("Throttle stick controls the airspeed of the aircraft if an airspeed sensor is connected. Without an airspeed sensor the user cannot control throttle (in which case the vehicle will fly level at cruise throttle ("),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_THR_CRUISE"}},[t._v("FW_THR_CRUISE")]),t._v("), increasing or decreasing throttle as needed to climb or descend).")],1)])]),t._v(" "),i("li",[t._v("Outside center:\n"),i("ul",[i("li",[t._v("Pitch stick controls altitude.")]),t._v(" "),i("li",[t._v("Throttle stick controls the airspeed of the aircraft (as for centered Roll/Pitch/Yaw inputs).")]),t._v(" "),i("li",[t._v("Roll stick controls roll angle. Autopilot will maintain "),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight",target:"_blank",rel:"noopener noreferrer"}},[t._v("coordinated flight"),i("OutboundLink")],1),t._v(".\nThis is same as in "),i("RouterLink",{attrs:{to:"/en/flight_modes/stabilized_fw.html"}},[t._v("Stabilized mode")]),t._v(".")],1),t._v(" "),i("li",[t._v("Yaw stick actuates the rudder (signal will be added to the one calculated by the autopilot to maintain "),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight",target:"_blank",rel:"noopener noreferrer"}},[t._v("coordinated flight"),i("OutboundLink")],1),t._v(").\nThis is same as in "),i("RouterLink",{attrs:{to:"/en/flight_modes/stabilized_fw.html"}},[t._v("Stabilized mode")]),t._v(".")],1)])])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("ul",[i("li",[t._v("Manual input is required (RC controller, or gamepad/thumbsticks through MAVLink).")]),t._v(" "),i("li",[t._v("The altitude is normally measured using a barometer, which may become inaccurate in extreme weather conditions.\nVehicles that include a LIDAR/range sensor will be able to control altitude with greater reliability and accuracy.")])])]),t._v(" "),i("h2",{attrs:{id:"parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),i("p",[t._v("The mode is affected by the following parameters:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Parameter")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("span",{attrs:{id:"FW_AIRSPD_MIN"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_AIRSPD_MIN"}},[t._v("FW_AIRSPD_MIN")])],1),t._v(" "),i("td",[t._v("Min airspeed/throttle. Default: 10 m/s.")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"FW_AIRSPD_MAX"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_AIRSPD_MAX"}},[t._v("FW_AIRSPD_MAX")])],1),t._v(" "),i("td",[t._v("Max airspeed/throttle. Default: 20 m/s.")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"FW_AIRSPD_TRIM"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_AIRSPD_TRIM"}},[t._v("FW_AIRSPD_TRIM")])],1),t._v(" "),i("td",[t._v("Cruise speed. Default: 15 m/s.")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"FW_MAN_P_MAX"}},[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_MAN_P_MAX"}},[t._v("FW_MAN_P_MAX")])],1)]),t._v(" "),i("td",[t._v("Max pitch for manual control in attitude stabilized mode. Default: 45 degrees.")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"FW_MAN_R_MAX"}},[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_MAN_R_MAX"}},[t._v("FW_MAN_R_MAX")])],1)]),t._v(" "),i("td",[t._v("Max roll for manual control in attitude stabilized mode. Default: 45 degrees.")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"FW_L1_CONTROL"}},[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#fw-l1-control"}},[t._v("FW L1 Control")])],1)]),t._v(" "),i("td",[t._v("The roll/yaw needed to maintain the commanded altitude and airspeed are also affected by the FW L1 Control parameters.")])])])])])}),[],!1,null,null,null);e.default=r.exports},323:function(t,e,a){t.exports=a.p+"assets/img/remote_control.e49232a6.svg"},324:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAgRSURBVHic7Z1bbBxXGcf/35nxZdd2Uyd9KYKkEiROiLsWnc2ubzF2FYKKoaBSER4oQqh9IQhRIdRKCCVVRUVVRIpAvBAJqUjQ0IpbUloiUydKnd317pLE9rZxGkQSBH0htmPH6/V653w8eO36tt7bXLw783vyzJzznb//Oh7v7HznO4QtiO+KrwFJbwuI94BoryRuIcYuAA0AGgE0Z38GgFkAkwDuAphlwk0wXxVM42C6Bm9yfKRtZNae3yQ3ZLcAANBimjfNNZ0k0c3MXSD0AKg1KLwO4DLAA0RiKCn5/PX2yLRBsUvGNuMfGOytb2xIPSoYTzD4MIwzOg88z8BZwfTK9JznzI2+cylrxl2N5ca3RTsCutSfItDjAO61evw1TIHwewl5MhGIRq0c2DLj28LBbiZ6hsGft2rMYiDGEAS9OBIIn7ZkPLMHaA0HP0PExwHqNHssIyDGECt0fPRAeMDUccwK/Kl3uj6i12R+zMATZo1hJgQ6oysLRxP++C1z4htM72CvOuGZO8qE5wE0GR3fYpIEeklvnHkhsT+RNjKwocbvG+rcpar6qwDajYy7BYizohwZ81/8p1EBhVGBHowEvqSq+iVUn+kAoJGu/6N1uP2IUQHLnvFaTKtJS/UEGEeNELT14Z/XKvr34v74QjlRyjJei2netK6+BuBz5cSpOBgD6Yz62Hj30EypIUo2/sEL3c1Us3CaCV2lxqhkmDFcp2b64/74/0rpX5LxvnDwo0w4C2BfKf2riITQxWevdIb+U2zHoo3fGwnsqAFdgGv6Eu9KXRxMdIYmiulU1KcaLaZ5a5n+DNf0lXxSKPKvviu+hvxNP6Rg47WYVpPOqK879Z6ehyCnPKd6B3vVQjsUbHxaqidAeKQ0XY6g/3bD3EuFNi7oHu8LBx9nwmula3IMzOAvjwWH/5ivYV7jW2OdHyddjwPYZoi06meKwA+NBIf/tVmjTW81WkyrIV1/Fa7pxXAvg36X736/qfFpXXkagN9QWc4gOOGZ+/ZmDXLealqHD3yMWLyLxbf6LsUzI3SxL9fDVc4ZL6R4Ga7p5dCkq/InuS5uOOMXX9fhrHmanANL6hvrCJ9be37DGS+AY6Yrcggk5PGNzq8zfn842Oc+nRoJfdoXCRxce3ad8YLoB9YIcg4S6z1ddY9vi3YEpJQR6yQ5BwYfGAsOx5aOV814XepPWS/JGRDoydXHWR4Y7K1v8s59APvT6qqVO426uD/UGZoDVsz4xobUF+GabibbZoXsXzpYNp6YKzLjq5Jg8WFWHQFL2QLKBEB19slyAjzfqCvNoc7QnACA+Yza7ZpuBVQ3q2Y6geythoA+ewU5B8nUB2SNZ+Bhe+U4BwI9DADku+Jr4JRnCkDBL2pdyiJTq2S2CSS9LXBNtxI1pSu7BYRssVuJ0yASLQIQrvEWQ+AWIYld462GuUUQ8067dTgNBu0SgLjHbiFOg4AmQeBKXyBWidwjuPJX5lUcDDQJuCkclkPgJsNW/bkUh8BinRcXC2HQjCCg5JVrLqVBwIxgkGu89UwLQNperchpMDAjmMiU6hQuuSHwTSGYxu0W4jiIxgUgXeMthkHjAlK4xlsMsxwX8CbHAWTsFuMgFuoV/X2RLYYZt1uNc+Bo3B9PLqZ3EN62W45jYHobyKZ3SIlBe9U4ByIeBLLG16mZIYDn7ZXkCFINuhICssbH/fEkw11sZgFvrUvTJuA39ulxBky07PGy8TNJ72kAU7YocgaTqebmN5YOlo2/0XcuBXYrdJgFgU5d3/3m8v/RVW+gpJC/sl6SM2DmkyuPVxmfCESjYJhazNiZ8Fuj7ZFVD6nr3rky04+sE+QMCHhhg3PraY0ELxDQbb4kB0A4NxqIrFv4sWGWAQl6znxFTkEc3/DsRiezRetfN1OOM6DfjgZC5ze6kjOvJqNkvgPAfR9bOtPqgvL9XBdzGv+eP/4BM543R1P1w0Q/vNQ99N9c1zfNJKtTMz8DyNLdYqqE0H2z9b/crEHe8of7Y9pOoauXAGw3TFZ1M6lIeuhyR/jGZo3y5k4m/PFbRPQNAGyQsGqGAf5mPtOBAkvcLu6NxL8oW1bVwydGg8N/KqRlwdnCe2/uehqgvKVbnQqBzuxIep8pvH0RdFzs8Mwo8qz7VLuOMNXPHSpmF82iC/drMW1bWlfPA2grtm+VkpC66DG1cD8AxP3xO0IX/QASxfatPmhMXVAPF2s6UObmLFy78BcH33YiC+D+q8Hh26V0LnkpzujBdyZT27cfIsYfSo1RqTD4dKMu+ko1HShz57Pru9+c3z7nOQLCy3DG53wG+Kf3Jb2PLWULlIphe/35Qu2PsuBfo3qfcO8Q48mR9ogh39qascniKQBBI+NuAUJSyXzVyC1GDV1u+V7XxZs7kp5uYnwX1fGV8ixAz+5IenqM3tfVtI1098W0+2t09UUGvmbmOGZBoDOS9G+NBaL/Nie+ybSG2ntJ8HMAesweyxj4PEg5luvNkVFYNhP3R9u7FIlnGdxv5biFsrhZujw2Eoj+3ZLxrBhkJa2RgD9b4PgrAJqtHn8NkwQ6xcwn1+a9mI1tM+8T7z9S57098QVJ/HUCDltYcDQF4G9M9EqqufmNlWl1VrIl/uQ7LnZ4kkJqkqgLzIdA6AFQa1B4HcBlgAcgxEDjAg2V+/BjBFvC+LVoMc2bkmIPQWkh8B4w7WXwTlqsrdOExarfS+Ve7gKYImBaAncJdAvEVxk0ztCv1Qt5Le6PJ237ZXLwf8jBpUblmdzOAAAAAElFTkSuQmCC"},327:function(t,e,a){t.exports=a.p+"assets/img/altitude_icon.ca9310b8.svg"},820:function(t,e,a){t.exports=a.p+"assets/img/altitude_control_mode_fw.925c7f56.png"}}]);