(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{2898:function(t,v,_){"use strict";_.r(v);var e=_(19),o=Object(e.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"地理围栏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#地理围栏"}},[t._v("#")]),t._v(" 地理围栏")]),t._v(" "),e("p",[t._v("围栏是一个虚拟边界，用于定义机体可以在哪些地方行驶。 围栏可用于防止机体飞出遥控器的范围，或进入不安全或受限制的空域。")]),t._v(" "),e("p",[t._v("PX4提供了两个独立的机制来指定围栏：")]),t._v(" "),e("ul",[e("li",[t._v("一个是基本的“故障保护”地理围栏，定义了一个简单的圆柱体。")]),t._v(" "),e("li",[t._v("可以使用围栏规划("),e("em",[t._v("QGroundControl")]),t._v(")定义更复杂的几何图形。")])]),t._v(" "),e("p",[t._v("地理围栏适用于所有模式，包括任务和手动飞行。\n:::")]),t._v(" "),e("h2",{attrs:{id:"故障保护地理围栏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#故障保护地理围栏"}},[t._v("#")]),t._v(" 故障保护地理围栏")]),t._v(" "),e("p",[t._v("故障保护围栏定义了一个圆心在home点的圆柱，它具有指定的最大半径和高度。")]),t._v(" "),e("p",[t._v("设置中还包括越界时的故障保护动作。 可能只是一个警告通知，但更常见的是机体会立即"),e("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("返回")]),t._v("一个安全位置。")],1),t._v(" "),e("p",[t._v("有关更多信息，请参阅："),e("RouterLink",{attrs:{to:"/zh/config/safety.html#geofence-failsafe"}},[t._v("安全 > 地理围栏故障保护。")])],1),t._v(" "),e("h2",{attrs:{id:"地理围栏规划"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#地理围栏规划"}},[t._v("#")]),t._v(" 地理围栏规划")]),t._v(" "),e("p",[t._v("PX4 支持由多个圆形和多边形区域组成的复杂地理围栏边界，这些区域可以定义为包含（禁出）或排除（禁入）区域。")]),t._v(" "),e("p",[t._v("围栏被放置在"),e("em",[t._v("QGroundControl")]),t._v("与任务和集结并列。")]),t._v(" "),e("p",[e("img",{attrs:{src:_(848),alt:"围栏规划"}})]),t._v(" "),e("p",[t._v("围栏规划在"),e("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/PlanView/PlanGeoFence.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("规划视图 > 地理围栏"),e("OutboundLink")],1),t._v("中有完整记录（QGroundControl 用户指南）")]),t._v(" "),e("p",[t._v("总结：")]),t._v(" "),e("ol",[e("li",[t._v("打开"),e("em",[t._v("QGroundControl > 规划视图")]),t._v("。")]),t._v(" "),e("li",[t._v("选择 "),e("em",[t._v("规划类型")]),t._v(" 单选按钮： "),e("strong",[t._v("围栏")]),t._v("。 这将显示 "),e("em",[t._v("地理围栏编辑器")]),t._v("。 "),e("img",{attrs:{src:_(849),alt:"围栏规划"}})]),t._v(" "),e("li",[t._v("选择多边形围栏或圆形围栏按钮，可将添加所需基本类型的围栏到地图中。 这也在编辑器中增加了此类围栏的条目。")]),t._v(" "),e("li",[t._v("在地图上调整围栏的形状和位置。\n"),e("ul",[e("li",[t._v("围栏中心的圆点可以用来调整围栏的位置。")]),t._v(" "),e("li",[t._v("边界上的圆点可以用来调整半径。")]),t._v(" "),e("li",[t._v("角（顶点）上的圆点可以用来改变多边形的形状。 点击线段中间可以在两个顶点中添加新的顶点。")])])]),t._v(" "),e("li",[e("em",[t._v("围栏编辑器")]),t._v("可以设置围栏是包含还是排除，还可以通过（"),e("strong",[t._v("编辑")]),t._v("单选按钮）选择一个围栏来编辑或者通过（"),e("strong",[t._v("删除")]),t._v("按钮）来删除。")]),t._v(" "),e("li",[t._v("可添加任意数量的围栏")]),t._v(" "),e("li",[t._v("完成后，点击(右上角) "),e("strong",[t._v("上传")]),t._v(" 按钮向车辆发送围栏(连同集结和任务)。")]),t._v(" "),e("li",[t._v("在围栏故障保护中设置越界动作。")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("PX4 实现了 MAVLink [微服务](https://mavlink.io/en/services/mission.html), 其中包括支持围栏.")])])])}),[],!1,null,null,null);v.default=o.exports},848:function(t,v,_){t.exports=_.p+"assets/img/geofence_overview.15716237.jpg"},849:function(t,v,_){t.exports=_.p+"assets/img/geofence_editor.8103f26e.jpg"}}]);