(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{2058:function(_,v,t){"use strict";t.r(v);var i=t(19),l=Object(i.a)({},(function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[i("h1",{attrs:{id:"飞控方向的高级调参"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#飞控方向的高级调参"}},[_._v("#")]),_._v(" 飞控方向的高级调参")]),_._v(" "),i("p",[_._v("可以通过手动调参来修正无人机的方向和地平线水准，以校正传感器芯片存在的微小不对准或校准误差。")]),_._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),i("p",[_._v("不推荐普通用户使用该教程。 对于基本设置，请遵循下面链接的说明：")]),_._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[_._v("飞行控制器方向")])],1),_._v(" "),i("li",[i("RouterLink",{attrs:{to:"/zh/config/level_horizon_calibration.html"}},[_._v("水平校准")])],1)])]),_._v(" "),i("p",[_._v("如果存在持续的漂移偏差(通常存在于多旋翼中，但不仅限于多旋翼)，一个比较好的方法是可以通过微调偏移角度参数的帮助，去除该偏差，而不是使用遥控发射器的微调器。 这样，飞机在完全自主的飞行中将保持调整修正。")]),_._v(" "),i("h2",{attrs:{id:"方向参数设置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#方向参数设置"}},[_._v("#")]),_._v(" 方向参数设置")]),_._v(" "),i("p",[_._v("更改方向参数：")]),_._v(" "),i("ol",[i("li",[_._v("打开 QGroundControl 菜单: "),i("strong",[_._v("Settings > Parameters > Sensor Calibration")]),_._v(".")]),_._v(" "),i("li",[_._v("更改以下参数： "),i("img",{attrs:{src:t(440),alt:"FC Orientation QGC v2"}})])]),_._v(" "),i("h2",{attrs:{id:"参数信息"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#参数信息"}},[_._v("#")]),_._v(" 参数信息")]),_._v(" "),i("p",[_._v("参数"),i("strong",[_._v("SENS_BOARD_ROT")]),_._v(" 定义了相对于平台的旋转方式，而X，Y 和 Z 微调偏移量相对于本身是固定的。 实质上是微调的偏移量被添加到了 SENS_BOARD_ROT 角度中， 为了获得飞控的偏航，俯仰和横滚方向的总偏移角度。")]),_._v(" "),i("p",[i("strong",[_._v("SENS_BOARD_ROT")])]),_._v(" "),i("p",[_._v("该参数定义了 FMU 飞控板相对于飞机平台的旋转角。 可选值有：")]),_._v(" "),i("ul",[i("li",[_._v("0 = 无旋转")]),_._v(" "),i("li",[_._v("1 = 偏航 45°")]),_._v(" "),i("li",[_._v("2 = 偏航 90°")]),_._v(" "),i("li",[_._v("3 = 偏航 135°")]),_._v(" "),i("li",[_._v("4 = 偏航 180°")]),_._v(" "),i("li",[_._v("5 = 偏航 225°")]),_._v(" "),i("li",[_._v("6 = 偏航 270°")]),_._v(" "),i("li",[_._v("7 = 偏航 315°")]),_._v(" "),i("li",[_._v("8 = 滚转 180°")]),_._v(" "),i("li",[_._v("9 = 滚转 180°, 偏航 45°")]),_._v(" "),i("li",[_._v("10 = 滚转 180°, 偏航 90°")]),_._v(" "),i("li",[_._v("11 = 滚转 180°, 偏航 135°")]),_._v(" "),i("li",[_._v("12 = 俯仰 180°")]),_._v(" "),i("li",[_._v("13 = 滚转 180°, 偏航 225°")]),_._v(" "),i("li",[_._v("14 = 滚转 180°, 偏航 270°")]),_._v(" "),i("li",[_._v("15 = 滚转 180°, 偏航 315°")]),_._v(" "),i("li",[_._v("16 = 滚转 90°")]),_._v(" "),i("li",[_._v("17 = 滚转 90°, 偏航 45°")]),_._v(" "),i("li",[_._v("18 = 滚转 90°, 偏航 90°")]),_._v(" "),i("li",[_._v("19 = 滚转 90°, 偏航 135°")]),_._v(" "),i("li",[_._v("20 = 滚转 270°")]),_._v(" "),i("li",[_._v("21 = 滚转 270°, 偏航 45°")]),_._v(" "),i("li",[_._v("22 = 滚转 270°, 偏航 90°")]),_._v(" "),i("li",[_._v("23 = 滚转 270°, 偏航 135°")]),_._v(" "),i("li",[_._v("24 = 俯仰 90°")]),_._v(" "),i("li",[_._v("25 = 俯仰角 270°")])]),_._v(" "),i("p",[i("strong",[_._v("SENS_BOARD_X_OFF")])]),_._v(" "),i("p",[_._v("绕 PX4FMU 的 X 轴或者 横滚轴旋转角度。 正角度增加在逆时针方向，负角度增加在顺时针方向。")]),_._v(" "),i("p",[i("strong",[_._v("SENS_BOARD_Y_OFF")])]),_._v(" "),i("p",[_._v("绕 PX4FMU 的 Y 轴或者俯仰轴旋转角度。 正角度值增加在逆时针方向，负角度增加在顺时针方向。")]),_._v(" "),i("p",[i("strong",[_._v("SENS_BOARD_Z_OFF")])]),_._v(" "),i("p",[_._v("绕 PX4FMU 的 Z 轴或者偏航轴旋转角度。 正角度增加在逆时针方向，负角度增加在顺时针方向。")])])}),[],!1,null,null,null);v.default=l.exports},440:function(_,v,t){_.exports=t.p+"assets/img/fc_orientation_qgc_v2.25c30665.png"}}]);