(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1730:function(t,a,r){},1782:function(t,a,r){"use strict";r(1730)},3458:function(t,a,r){"use strict";r.r(a);r(1782);var _=r(19),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"机架参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#机架参考"}},[t._v("#")]),t._v(" 机架参考")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),_("p",[_("strong",[t._v("此列表是使用 "),_("code",[t._v("make airframe_metadata")]),t._v("命令从源码"),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/px4airframes/markdownout.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("自动生成的"),_("OutboundLink")],1),t._v("。")])])]),t._v(" "),_("p",[t._v("This page lists all supported airframes and types including the motor assignment and numbering. "),_("strong",[t._v("绿色的")]),t._v("为顺时针转动的电机，"),_("strong",[t._v("蓝色的")]),t._v("为逆时针转动的电机。")]),t._v(" "),_("p",[_("strong",[t._v("AUX")]),t._v(" 通道可能在一些飞行控制器上不存在。 如果存在，PWM AUX 通道通常被标记为 "),_("strong",[t._v("AUX OUT")]),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"旋翼机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#旋翼机"}},[t._v("#")]),t._v(" 旋翼机")]),t._v(" "),_("h3",{attrs:{id:"旋翼机-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#旋翼机-2"}},[t._v("#")]),t._v(" 旋翼机")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(517)}}),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("常规输出接法")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("ul",[_("li",[_("b",[t._v("电机1")]),t._v(": 右舷推进器")]),_("li",[_("b",[t._v("电机2")]),t._v(": 左舷推进器")]),_("li",[_("b",[t._v("电机3")]),t._v(": 尾部推进器")]),_("li",[_("b",[t._v("舵机1")]),t._v(": 推力倾斜")])])])])])])]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"airship_airship_cloudship"}},[_("td",[t._v("Cloudship")]),t._v(" "),_("td",[t._v("Maintainer: John Doe <john@example.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 2507")])])])])])]),t._v(" "),_("h2",{attrs:{id:"飞机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#飞机"}},[t._v("#")]),t._v(" 飞机")]),t._v(" "),_("h3",{attrs:{id:"飞机-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#飞机-2"}},[t._v("#")]),t._v(" 飞机")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(518)}}),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("常规输出接法")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("ul",[_("li",[_("b",[t._v("电机1")]),t._v(": 油门")]),_("li",[_("b",[t._v("Servo1")]),t._v(": rotor_head_L")]),_("li",[_("b",[t._v("Servo2")]),t._v(": rotor_head_R")])])])])])])]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"autogyro_autogyro_thunderfly_auto-g2"}},[_("td",[_("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/Auto-G2/"}},[t._v("ThunderFly Auto-G2")])]),t._v(" "),_("td",[t._v("Maintainer: ThunderFly s.r.o., Roman Dvorak <dvorakroman@thunderfly.cz>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 17002")]),_("p",[_("b",[t._v("Specific Outputs:")]),_("ul",[_("li",[_("b",[t._v("Servo3")]),t._v(": elevator")]),_("li",[_("b",[t._v("Servo4")]),t._v(": rudder")]),_("li",[_("b",[t._v("Servo5")]),t._v(": rudder (second, optional)")]),_("li",[_("b",[t._v("Servo6")]),t._v(": wheel")])])])])]),t._v(" "),_("tr",{attrs:{id:"autogyro_autogyro_thunderfly_tf-g2"}},[_("td",[_("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TF-G2/"}},[t._v("ThunderFly TF-G2")])]),t._v(" "),_("td",[t._v("Maintainer: ThunderFly s.r.o., Roman Dvorak <dvorakroman@thunderfly.cz>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 17003")]),_("p",[_("b",[t._v("Specific Outputs:")]),_("ul",[_("li",[_("b",[t._v("Servo3")]),t._v(": rudder")])])])])])])])]),t._v(" "),_("h2",{attrs:{id:"balloon"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#balloon"}},[t._v("#")]),t._v(" Balloon")]),t._v(" "),_("h3",{attrs:{id:"balloon-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#balloon-2"}},[t._v("#")]),t._v(" Balloon")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(519)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"balloon_balloon_thunderfly_balloon_tf-b1"}},[_("td",[_("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TF-B1/"}},[t._v("ThunderFly balloon TF-B1")])]),t._v(" "),_("td",[t._v("Maintainer: ThunderFly s.r.o."),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 18001")])])])])])]),t._v(" "),_("h2",{attrs:{id:"copter"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#copter"}},[t._v("#")]),t._v(" Copter")]),t._v(" "),_("h3",{attrs:{id:"dodecarotor-cox"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dodecarotor-cox"}},[t._v("#")]),t._v(" Dodecarotor cox")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(520)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"copter_dodecarotor_cox_generic_dodecarotor_cox_geometry"}},[_("td",[t._v("Generic Dodecarotor cox geometry")]),t._v(" "),_("td",[t._v("Maintainer: William Peale <develop707@gmail.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 24001")])])])])])]),t._v(" "),_("h3",{attrs:{id:"helicopter"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#helicopter"}},[t._v("#")]),t._v(" Helicopter")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(521)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"copter_helicopter_generic_helicopter_(tail_esc)"}},[_("td",[t._v("通用直升机(Tail ESC)")]),t._v(" "),_("td",[t._v("Maintainer: John Doe <john@example.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 16001")])])])])])]),t._v(" "),_("h3",{attrs:{id:"hexarotor"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hexarotor"}},[t._v("#")]),t._v(" Hexarotor +")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(522)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"copter_hexarotor_+_generic_hexarotor_+_geometry"}},[_("td",[t._v("Generic Hexarotor + geometry")]),t._v(" "),_("td",[t._v("Maintainer: Lorenz Meier <lorenz@px4.io>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 7001")])])])])])]),t._v(" "),_("h3",{attrs:{id:"hexarotor-coaxial"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hexarotor-coaxial"}},[t._v("#")]),t._v(" Hexarotor Coaxial")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(523)}}),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("常规输出接法")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("ul",[_("li",[_("b",[t._v("电机1")]),t._v(": 右前顶部; 角度:60; 方向:顺时针")]),_("li",[_("b",[t._v("电机2")]),t._v(": 右前底部; 角度:60; 方向:逆时针")]),_("li",[_("b",[t._v("电机3")]),t._v(": 后顶部; 角度:180; 方向:顺时针")]),_("li",[_("b",[t._v("电机4")]),t._v(": 后底部; 角度:180; 方向:逆时针")]),_("li",[_("b",[t._v("电机5")]),t._v(": 左前顶部; 角度:-60; 方向:顺时针")]),_("li",[_("b",[t._v("电机6")]),t._v(": 左前底部; 角度:-60; 方向:逆时针")])])])])])])]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"copter_hexarotor_coaxial_generic_hexarotor_coaxial_geometry"}},[_("td",[t._v("Generic Hexarotor coaxial geometry")]),t._v(" "),_("td",[t._v("Maintainer: Lorenz Meier <lorenz@px4.io>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 11001")])])])])])]),t._v(" "),_("h3",{attrs:{id:"hexarotor-x"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hexarotor-x"}},[t._v("#")]),t._v(" Hexarotor x")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(524)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"copter_hexarotor_x_generic_hexarotor_x_geometry"}},[_("td",[t._v("Generic Hexarotor x geometry")]),t._v(" "),_("td",[t._v("Maintainer: Lorenz Meier <lorenz@px4.io>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 6001")])])]),t._v(" "),_("tr",{attrs:{id:"copter_hexarotor_x_uvify_draco-r"}},[_("td",[t._v("UVify Draco-R")]),t._v(" "),_("td",[t._v("Maintainer: Hyon Lim <lim@uvify.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 6002")])])])])])]),t._v(" "),_("h3",{attrs:{id:"octorotor"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#octorotor"}},[t._v("#")]),t._v(" Octorotor +")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(525)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"copter_octorotor_+_generic_octocopter_+_geometry"}},[_("td",[t._v("Generic Octocopter + geometry")]),t._v(" "),_("td",[t._v("Maintainer: Lorenz Meier <lorenz@px4.io>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 9001")])])])])])]),t._v(" "),_("h3",{attrs:{id:"octorotor-coaxial"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#octorotor-coaxial"}},[t._v("#")]),t._v(" Octorotor Coaxial")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(526)}}),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("常规输出接法")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("ul",[_("li",[_("b",[t._v("电机1")]),t._v(": 电机1")]),_("li",[_("b",[t._v("电机2")]),t._v(": 电机2")]),_("li",[_("b",[t._v("电机3")]),t._v(": 电机3")]),_("li",[_("b",[t._v("电机4")]),t._v(": 电机4")]),_("li",[_("b",[t._v("电机5")]),t._v(": 电机5")]),_("li",[_("b",[t._v("电机6")]),t._v(": 电机6")]),_("li",[_("b",[t._v("电机7")]),t._v(": 电机7")]),_("li",[_("b",[t._v("电机8")]),t._v(": 电机8")])])])])])])]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"copter_octorotor_coaxial_generic_10__octo_coaxial_geometry"}},[_("td",[t._v('Generic 10" Octo coaxial geometry')]),t._v(" "),_("td",[t._v("Maintainer: Lorenz Meier <lorenz@px4.io>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 12001")])])])])])]),t._v(" "),_("h3",{attrs:{id:"octorotor-x"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#octorotor-x"}},[t._v("#")]),t._v(" Octorotor x")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(527)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"copter_octorotor_x_generic_octocopter_x_geometry"}},[_("td",[t._v("Generic Octocopter X geometry")]),t._v(" "),_("td",[t._v("Maintainer: Lorenz Meier <lorenz@px4.io>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 8001")])])])])])]),t._v(" "),_("h3",{attrs:{id:"quadrotor"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#quadrotor"}},[t._v("#")]),t._v(" Quadrotor +")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(528)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"copter_quadrotor_+_generic_quad_+_geometry"}},[_("td",[t._v("Generic Quad + geometry")]),t._v(" "),_("td",[t._v("Maintainer: John Doe <john@example.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 5001")])])])])])]),t._v(" "),_("h3",{attrs:{id:"quadrotor-h"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#quadrotor-h"}},[t._v("#")]),t._v(" Quadrotor H")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(529)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"copter_quadrotor_h_betafpv_beta75x_2s_brushless_whoop"}},[_("td",[t._v("BetaFPV Beta75X 2S Brushless Whoop")]),t._v(" "),_("td",[t._v("Maintainer: Beat Kueng <beat-kueng@gmx.net>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4041")])])])])])]),t._v(" "),_("h3",{attrs:{id:"quadrotor-x"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#quadrotor-x"}},[t._v("#")]),t._v(" Quadrotor x")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(530)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"copter_quadrotor_x_generic_quadcopter"}},[_("td",[t._v("Generic Quadcopter")]),t._v(" "),_("td",[t._v("Maintainer: Lorenz Meier <lorenz@px4.io>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4001")])])]),t._v(" "),_("tr",{attrs:{id:"copter_quadrotor_x_s500_generic"}},[_("td",[t._v("S500 Generic")]),t._v(" "),_("td",[t._v("Maintainer: Lorenz Meier <lorenz@px4.io>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4014")])])]),t._v(" "),_("tr",{attrs:{id:"copter_quadrotor_x_holybro_s500"}},[_("td",[t._v("Holybro S500")]),t._v(" "),_("td",[t._v("Maintainer: Lorenz Meier <lorenz@px4.io>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4015")])])]),t._v(" "),_("tr",{attrs:{id:"copter_quadrotor_x_px4_vision_dev_kit_v1"}},[_("td",[t._v("PX4 Vision Dev Kit v1")]),t._v(" "),_("td",[t._v("Maintainer: John Doe <john@example.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4016")])])]),t._v(" "),_("tr",{attrs:{id:"copter_quadrotor_x_nxp_hovergames"}},[_("td",[t._v("NXP HoverGames")]),t._v(" "),_("td",[t._v("Maintainer: Iain Galloway <iain.galloway@nxp.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4017")])])]),t._v(" "),_("tr",{attrs:{id:"copter_quadrotor_x_holybro_x500_v2"}},[_("td",[t._v("Holybro X500 V2")]),t._v(" "),_("td",[t._v("Maintainer: Farhang Naderi <farhang.nba@gmail.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4019")])])]),t._v(" "),_("tr",{attrs:{id:"copter_quadrotor_x_px4_vision_dev_kit_v1.5"}},[_("td",[t._v("PX4 Vision Dev Kit v1.5")]),t._v(" "),_("td",[t._v("Maintainer: John Doe <john@example.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4020")])])]),t._v(" "),_("tr",{attrs:{id:"copter_quadrotor_x_generic_250_racer"}},[_("td",[t._v("Generic 250 Racer")]),t._v(" "),_("td",[t._v("Maintainer: Lorenz Meier <lorenz@px4.io>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4050")])])]),t._v(" "),_("tr",{attrs:{id:"copter_quadrotor_x_holybro_qav250"}},[_("td",[_("a",{attrs:{href:"https://docs.px4.io/main/en/frames_multicopter/holybro_qav250_pixhawk4_mini.html"}},[t._v("HolyBro QAV250")])]),t._v(" "),_("td",[t._v("Maintainer: Beat Kueng <beat-kueng@gmx.net>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4052")])])]),t._v(" "),_("tr",{attrs:{id:"copter_quadrotor_x_holybro_kopis_2"}},[_("td",[t._v("Holybro Kopis 2")]),t._v(" "),_("td",[t._v("Maintainer: Beat Kueng <beat@px4.io>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4053")])])]),t._v(" "),_("tr",{attrs:{id:"copter_quadrotor_x_advanced_technology_labs_(atl)_mantis_edu"}},[_("td",[t._v("Advanced Technology Labs (ATL) Mantis EDU")]),t._v(" "),_("td",[_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4061")])])]),t._v(" "),_("tr",{attrs:{id:"copter_quadrotor_x_uvify_ifo"}},[_("td",[t._v("UVify IFO")]),t._v(" "),_("td",[t._v("Maintainer: Hyon Lim <lim@uvify.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4071")])])]),t._v(" "),_("tr",{attrs:{id:"copter_quadrotor_x_uvify_ifo"}},[_("td",[t._v("UVify IFO")]),t._v(" "),_("td",[t._v("Maintainer: Hyon Lim <lim@uvify.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4073")])])]),t._v(" "),_("tr",{attrs:{id:"copter_quadrotor_x_coex_clover_4"}},[_("td",[t._v("COEX Clover 4")]),t._v(" "),_("td",[t._v("Maintainer: Oleg Kalachev <okalachev@gmail.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4500")])])]),t._v(" "),_("tr",{attrs:{id:"copter_quadrotor_x_crazyflie_2.1"}},[_("td",[t._v("Crazyflie 2.1")]),t._v(" "),_("td",[t._v("Maintainer: Dennis Shtatov <densht@gmail.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 4901")])])])])])]),t._v(" "),_("h3",{attrs:{id:"仿真"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#仿真"}},[t._v("#")]),t._v(" 仿真")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(353)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"copter_simulation_hil_quadcopter_x"}},[_("td",[t._v("HIL Quadcopter X")]),t._v(" "),_("td",[t._v("Maintainer: Lorenz Meier <lorenz@px4.io>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 1001")])])]),t._v(" "),_("tr",{attrs:{id:"copter_simulation_sih_quadcopter_x"}},[_("td",[t._v("SIH Quadcopter X")]),t._v(" "),_("td",[t._v("Maintainer: Romain Chiappinelli <romain.chiap@gmail.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 1100")])])])])])]),t._v(" "),_("h3",{attrs:{id:"tricopter-y"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tricopter-y"}},[t._v("#")]),t._v(" Tricopter Y+")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(531)}}),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("常规输出接法")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("ul",[_("li",[_("b",[t._v("电机1")]),t._v(": 电机1")]),_("li",[_("b",[t._v("电机2")]),t._v(": 电机2")]),_("li",[_("b",[t._v("电机3")]),t._v(": 电机3")]),_("li",[_("b",[t._v("舵机1")]),t._v(": 偏航角舵机")])])])])])])]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"copter_tricopter_y+_generic_multirotor_with_tilt"}},[_("td",[t._v("通用的带倾斜多旋翼")]),t._v(" "),_("td",[t._v("Maintainer: John Doe <john@example.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 14001")])])])])])]),t._v(" "),_("h2",{attrs:{id:"plane"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#plane"}},[t._v("#")]),t._v(" Plane")]),t._v(" "),_("h3",{attrs:{id:"flying-wing"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flying-wing"}},[t._v("#")]),t._v(" Flying Wing")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(532)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"plane_flying_wing_generic_flying_wing"}},[_("td",[t._v("Generic Flying Wing")]),t._v(" "),_("td",[t._v("Maintainer: John Doe <john@example.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 3000")])])])])])]),t._v(" "),_("h3",{attrs:{id:"plane-a-tail"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#plane-a-tail"}},[t._v("#")]),t._v(" Plane A-Tail")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(533)}}),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("常规输出接法")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("ul",[_("li",[_("b",[t._v("电机1")]),t._v(": 油门")]),_("li",[_("b",[t._v("舵机1")]),t._v(": 右副翼")]),_("li",[_("b",[t._v("舵机2")]),t._v(": 左副翼")]),_("li",[_("b",[t._v("舵机3")]),t._v(": V型尾右")]),_("li",[_("b",[t._v("舵机2")]),t._v(": V型尾左")]),_("li",[_("b",[t._v("舵机5")]),t._v(": 轮子")]),_("li",[_("b",[t._v("舵机6")]),t._v(": 襟翼右")]),_("li",[_("b",[t._v("舵机7")]),t._v(": 襟翼左")])])])])])])]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"plane_plane_a-tail_applied_aeronautics_albatross"}},[_("td",[t._v("Applied Aeronautics Albatross")]),t._v(" "),_("td",[t._v("Maintainer: Andreas Antener <andreas@uaventure.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 2106")])])])])])]),t._v(" "),_("h3",{attrs:{id:"仿真-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#仿真-2"}},[t._v("#")]),t._v(" 仿真")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(353)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"plane_simulation_sih_plane_aert"}},[_("td",[t._v("SIH plane AERT")]),t._v(" "),_("td",[t._v("Maintainer: Romain Chiappinelli <romain.chiap@gmail.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 1101")])])])])])]),t._v(" "),_("h3",{attrs:{id:"standard-plane"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#standard-plane"}},[t._v("#")]),t._v(" Standard Plane")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(534)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"plane_standard_plane_generic_standard_plane"}},[_("td",[t._v("通用标准飞机")]),t._v(" "),_("td",[t._v("Maintainer: John Doe <john@example.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 2100")])])])])])]),t._v(" "),_("h2",{attrs:{id:"rover"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rover"}},[t._v("#")]),t._v(" Rover")]),t._v(" "),_("h3",{attrs:{id:"rover-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rover-2"}},[t._v("#")]),t._v(" Rover")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(535)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"rover_rover_generic_ground_vehicle_(ackermann)"}},[_("td",[t._v("通用地面车辆(Ackermann)")]),t._v(" "),_("td",[_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 50000")]),_("p",[_("b",[t._v("Specific Outputs:")]),_("ul",[_("li",[_("b",[t._v("电机1")]),t._v(": 油门")]),_("li",[_("b",[t._v("舵机1")]),t._v(": 转向")])])])])]),t._v(" "),_("tr",{attrs:{id:"rover_rover_aion_robotics_r1_ugv"}},[_("td",[_("a",{attrs:{href:"https://www.aionrobotics.com/r1"}},[t._v("Aion Robotics R1 UGV")])]),t._v(" "),_("td",[t._v("Maintainer: John Doe <john@example.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 50003")])])]),t._v(" "),_("tr",{attrs:{id:"rover_rover_nxp_cup_car:_df_robot_gpx"}},[_("td",[t._v("NXP Cup car: DF Robot GPX")]),t._v(" "),_("td",[t._v("Maintainer: Katrin Moritz"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 50004")]),_("p",[_("b",[t._v("Specific Outputs:")]),_("ul",[_("li",[_("b",[t._v("电机1")]),t._v(": 剩余轮子速度")]),_("li",[_("b",[t._v("舵机1")]),t._v(": 转向")])])])])])])])]),t._v(" "),_("h2",{attrs:{id:"underwater-robot"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#underwater-robot"}},[t._v("#")]),t._v(" Underwater Robot")]),t._v(" "),_("h3",{attrs:{id:"underwater-robot-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#underwater-robot-2"}},[t._v("#")]),t._v(" Underwater Robot")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(434)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"underwater_robot_underwater_robot_generic_underwater_robot"}},[_("td",[t._v("Generic Underwater Robot")]),t._v(" "),_("td",[t._v("Maintainer: John Doe <john@example.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 60000")])])]),t._v(" "),_("tr",{attrs:{id:"underwater_robot_underwater_robot_hippocampus_uuv_(unmanned_underwater_vehicle)"}},[_("td",[t._v("HippoCampus UUV (Unmanned Underwater Vehicle)")]),t._v(" "),_("td",[t._v("Maintainer: Daniel Duecker <daniel.duecker@tuhh.de>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 60001")])])])])])]),t._v(" "),_("h3",{attrs:{id:"vectored-6-dof-uuv"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vectored-6-dof-uuv"}},[t._v("#")]),t._v(" Vectored 6 DOF UUV")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(354)}}),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("常规输出接法")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("ul",[_("li",[_("b",[t._v("电机1")]),t._v(": 电机1，逆时针，船首水平右舷，逆时针桨")]),_("li",[_("b",[t._v("电机2")]),t._v(": 电机2，逆时针，船首水平左舷，逆时针桨")]),_("li",[_("b",[t._v("电机3")]),t._v(": 电机3，逆时针，船尾水平右舷，顺时针桨")]),_("li",[_("b",[t._v("电机4")]),t._v(": 电机4，逆时针，船尾水平左舷，顺时针桨")]),_("li",[_("b",[t._v("电机5")]),t._v(": 电机5，逆时针，船首垂直右舷，逆时针桨")]),_("li",[_("b",[t._v("电机6")]),t._v(": 电机6，逆时针，船首垂直左舷，顺时针桨")]),_("li",[_("b",[t._v("电机7")]),t._v(": 电机7，逆时针，船尾垂直右舷，顺时针桨")]),_("li",[_("b",[t._v("电机8")]),t._v(": 电机8，逆时针，船尾垂直左舷，逆时针桨")])])])])])])]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"underwater_robot_vectored_6_dof_uuv_bluerov2_(heavy_configuration)"}},[_("td",[t._v("BlueROV2 (Heavy Configuration)")]),t._v(" "),_("td",[t._v("Maintainer: Thies Lennart Alff <thies.lennart.alff@tuhh.de>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 60002")])])])])])]),t._v(" "),_("h2",{attrs:{id:"vtol"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[t._v("#")]),t._v(" VTOL")]),t._v(" "),_("h3",{attrs:{id:"仿真-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#仿真-3"}},[t._v("#")]),t._v(" 仿真")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(353)}}),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("常规输出接法")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("ul",[_("li",[_("b",[t._v("电机1")]),t._v(": 右侧电机")]),_("li",[_("b",[t._v("电机2")]),t._v(": 左侧电机")]),_("li",[_("b",[t._v("舵机1")]),t._v(": 右升降副翼")]),_("li",[_("b",[t._v("舵机2")]),t._v(": 左升降副翼")])])])])])])]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"vtol_simulation_sih_tailsitter_duo"}},[_("td",[t._v("SIH Tailsitter Duo")]),t._v(" "),_("td",[t._v("Maintainer: Romain Chiappinelli <romain.chiap@gmail.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 1102")])])])])])]),t._v(" "),_("h3",{attrs:{id:"standard-vtol"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#standard-vtol"}},[t._v("#")]),t._v(" Standard VTOL")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(536)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"vtol_standard_vtol_hil_standard_vtol_quadplane"}},[_("td",[t._v("HIL Standard VTOL QuadPlane")]),t._v(" "),_("td",[t._v("Maintainer: Roman Bapst <roman@auterion.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 1002")])])]),t._v(" "),_("tr",{attrs:{id:"vtol_standard_vtol_generic_standard_vtol"}},[_("td",[t._v("通用标准VTOL")]),t._v(" "),_("td",[t._v("Maintainer: John Doe <john@example.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 13000")])])]),t._v(" "),_("tr",{attrs:{id:"vtol_standard_vtol_vertical_technologies_deltaquad"}},[_("td",[t._v("Vertical Technologies DeltaQuad")]),t._v(" "),_("td",[t._v("Maintainer: Sander Smeets <sander@droneslab.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 13013")]),_("p",[_("b",[t._v("Specific Outputs:")]),_("ul",[_("li",[_("b",[t._v("电机1")]),t._v(": 电机1")]),_("li",[_("b",[t._v("电机2")]),t._v(": 电机2")]),_("li",[_("b",[t._v("电机3")]),t._v(": 电机3")]),_("li",[_("b",[t._v("电机4")]),t._v(": 电机4")]),_("li",[_("b",[t._v("舵机1")]),t._v(": 右升降副翼")]),_("li",[_("b",[t._v("舵机2")]),t._v(": 左升降副翼")]),_("li",[_("b",[t._v("舵机3")]),t._v(": 推进器电机")]),_("li",[_("b",[t._v("电机4")]),t._v(": 推进器逆向通道")])])])])]),t._v(" "),_("tr",{attrs:{id:"vtol_standard_vtol_babyshark_vtol"}},[_("td",[t._v("BabyShark VTOL")]),t._v(" "),_("td",[t._v("Maintainer: Silvan Fuhrer <silvan@auterion.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 13014")]),_("p",[_("b",[t._v("Specific Outputs:")]),_("ul",[_("li",[_("b",[t._v("电机1")]),t._v(": 电机1")]),_("li",[_("b",[t._v("电机2")]),t._v(": 电机2")]),_("li",[_("b",[t._v("电机3")]),t._v(": 电机3")]),_("li",[_("b",[t._v("电机4")]),t._v(": 电机4")]),_("li",[_("b",[t._v("电机5")]),t._v(": 推进器电机")]),_("li",[_("b",[t._v("舵机1")]),t._v(": 转向")]),_("li",[_("b",[t._v("舵机2")]),t._v(": A型尾左")]),_("li",[_("b",[t._v("舵机3")]),t._v(": A型尾右")])])])])])])])]),t._v(" "),_("h3",{attrs:{id:"立式垂直起落飞机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#立式垂直起落飞机"}},[t._v("#")]),t._v(" 立式垂直起落飞机")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(434)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"vtol_vtol_tailsitter_generic_vtol_tailsitter"}},[_("td",[t._v("通用立式垂直起落飞机")]),t._v(" "),_("td",[t._v("Maintainer: John Doe <john@example.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 13200")])])])])])]),t._v(" "),_("h3",{attrs:{id:"vtol-tiltrotor"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vtol-tiltrotor"}},[t._v("#")]),t._v(" VTOL Tiltrotor")]),t._v(" "),_("div",{staticClass:"frame_common"},[_("img",{attrs:{src:r(537)}})]),t._v(" "),_("div",{staticClass:"frame_variant"},[_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),_("th")])]),t._v(" "),_("tbody",[_("tr",{attrs:{id:"vtol_vtol_tiltrotor_generic_quadplane_vtol_tiltrotor"}},[_("td",[t._v("Generic Quadplane VTOL Tiltrotor")]),t._v(" "),_("td",[_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 13030")])])]),t._v(" "),_("tr",{attrs:{id:"vtol_vtol_tiltrotor_generic_tiltrotor_vtol"}},[_("td",[t._v("通用倾转旋翼机")]),t._v(" "),_("td",[t._v("Maintainer: John Doe <john@example.com>"),_("p",[_("code",[t._v("SYS_AUTOSTART")]),t._v(" = 13100")])])])])])])])}),[],!1,null,null,null);a.default=e.exports},353:function(t,a,r){t.exports=r.p+"assets/img/AirframeSimulation.8e9a5495.svg"},354:function(t,a,r){t.exports=r.p+"assets/img/Vectored6DofUUV.dee49215.svg"},434:function(t,a,r){t.exports=r.p+"assets/img/AirframeUnknown.6bd4e304.svg"},517:function(t,a,r){t.exports=r.p+"assets/img/Airship.3885e2c4.svg"},518:function(t,a,r){t.exports=r.p+"assets/img/Autogyro.af349cff.svg"},519:function(t,a,r){t.exports=r.p+"assets/img/Balloon.c29c5179.svg"},520:function(t,a,r){t.exports=r.p+"assets/img/DodecaRotorXCoaxial.8d9fe74c.svg"},521:function(t,a,r){t.exports=r.p+"assets/img/Helicopter.47cf1f21.svg"},522:function(t,a,r){t.exports=r.p+"assets/img/HexaRotorPlus.050f111b.svg"},523:function(t,a,r){t.exports=r.p+"assets/img/Y6B.e9204978.svg"},524:function(t,a,r){t.exports=r.p+"assets/img/HexaRotorX.bc406d7b.svg"},525:function(t,a,r){t.exports=r.p+"assets/img/OctoRotorPlus.9d6e2748.svg"},526:function(t,a,r){t.exports=r.p+"assets/img/OctoRotorXCoaxial.8b17ef1e.svg"},527:function(t,a,r){t.exports=r.p+"assets/img/OctoRotorX.8bc0f3cc.svg"},528:function(t,a,r){t.exports=r.p+"assets/img/QuadRotorPlus.2b6c9636.svg"},529:function(t,a,r){t.exports=r.p+"assets/img/QuadRotorH.cad8ece6.svg"},530:function(t,a,r){t.exports=r.p+"assets/img/QuadRotorX.8e9a5495.svg"},531:function(t,a,r){t.exports=r.p+"assets/img/YPlus.a73f7d79.svg"},532:function(t,a,r){t.exports=r.p+"assets/img/FlyingWing.9dba7ba0.svg"},533:function(t,a,r){t.exports=r.p+"assets/img/PlaneATail.982c856e.svg"},534:function(t,a,r){t.exports=r.p+"assets/img/Plane.17754744.svg"},535:function(t,a,r){t.exports=r.p+"assets/img/Rover.e699d1e3.svg"},536:function(t,a,r){t.exports=r.p+"assets/img/VTOLPlane.2ffc44a4.svg"},537:function(t,a,r){t.exports=r.p+"assets/img/VTOLTiltRotor.61358391.svg"}}]);