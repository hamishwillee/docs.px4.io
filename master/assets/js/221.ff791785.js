(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1179:function(t,s,r){t.exports=r.p+"assets/img/lidar_lite_1.7a79e944.png"},3027:function(t,s,r){"use strict";r.r(s);var _=r(19),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"传感器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传感器"}},[t._v("#")]),t._v(" 传感器")]),t._v(" "),_("p",[t._v("基于 PX4 的系统使用传感器来确定飞行器状态（自稳和启用自主控制所需）。 飞行器状态包括：位置/高度，航向，速度，空速，方向（姿态），不同方向的旋转速率，电池电量等。")]),t._v(" "),_("p",[t._v("系统 "),_("em",[t._v("最低要求")]),t._v(" 陀螺仪，加速度计，磁力计（罗盘）和气压计。 需要 GPS 或其他定位系统来启用所有自动"),_("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#categories"}},[t._v("模式")]),t._v("和一些辅助模式。 固定翼和 VTOL 飞行器还应包括空速传感器（特别推荐）。")],1),t._v(" "),_("p",[t._v("最小的传感器组合集成在 "),_("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 系列")]),t._v(" 飞控上（并且也能存在其他飞控平台上）。 附加/外部传感器可以连接到控制器。")],1),t._v(" "),_("p",[t._v("下面我们介绍一些传感器。 最后有链接到关于 "),_("a",{attrs:{href:"#wiring"}},[t._v("传感器接线")]),t._v(" 的信息。")]),t._v(" "),_("p",[_("span",{attrs:{id:"gps_compass"}})]),t._v(" "),_("h2",{attrs:{id:"gps-罗盘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gps-罗盘"}},[t._v("#")]),t._v(" GPS&罗盘")]),t._v(" "),_("p",[t._v("PX4 支持许多全球导航卫星系统（GNSS）接收器和罗盘（磁力计）。 它还支持 "),_("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html"}},[t._v("实时动态（RTK）GPS接收器")]),t._v(" ，它将 GPS 系统扩展到厘米级精度。")],1),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[t._v(" Pixhawk 系列")]),t._v(" 飞控包括 "),_("em",[t._v("内置")]),t._v(" 罗盘。 这对于大型飞行器（例如 VTOL ） "),_("em",[t._v("可能")]),t._v(" 是有用的，其中可以通过远离电源线安装Pixhawk 来减少电磁干扰。 在小型飞行器上，几乎总是需要外置罗盘。")],1)]),t._v(" "),_("p",[t._v("我们建议使用安装在尽可能远离 电机/电调 电源线的外部“组合” 罗盘 / GPS 模块 - 通常在支座或机翼（固定翼）上。")]),t._v(" "),_("p",[t._v("常见的 GPS/罗盘硬件选项列于："),_("RouterLink",{attrs:{to:"/zh/gps_compass/"}},[t._v("GPS/罗盘")]),t._v("。")],1),t._v(" "),_("p",[_("img",{attrs:{src:r(390),alt:"GPS + Compass"}})]),t._v(" "),_("h2",{attrs:{id:"空速计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#空速计"}},[t._v("#")]),t._v(" 空速计")]),t._v(" "),_("p",[t._v("对于固定翼和 VTOL 机架，"),_("em",[t._v("强烈建议")]),t._v(" 使用空速传感器。")]),t._v(" "),_("p",[t._v("它们非常重要，因为自驾仪没有其他方法来检测失速。 对于固定翼飞行来说，保证升力的是空速而不是地速。")]),t._v(" "),_("p",[_("img",{attrs:{src:r(391),alt:"Digital airspeed sensor"}})]),t._v(" "),_("p",[t._v("有关更多信息和推荐的硬件，请参阅："),_("RouterLink",{attrs:{to:"/zh/sensor/airspeed.html"}},[t._v("空速传感器")]),t._v("。")],1),t._v(" "),_("h2",{attrs:{id:"转速计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#转速计"}},[t._v("#")]),t._v(" 转速计")]),t._v(" "),_("p",[t._v("对于旋翼，转速计 ("),_("a",{attrs:{href:"https://en.wikipedia.org/wiki/Tachometer#In_automobiles,_trucks,_tractors_and_aircraft",target:"_blank",rel:"noopener noreferrer"}},[t._v("转速计传感器"),_("OutboundLink")],1),t._v(") 是"),_("em",[t._v("强烈推荐的")]),t._v("， 因为它们可以让自动驾驶仪检测失速或另一个转子故障 (对于旋翼飞行器来说，是叶片的旋转保证了升力，而不是空速或地面速度)。")]),t._v(" "),_("p",[_("img",{attrs:{src:r(340),alt:"Digital RPM Sensor - TFRPM01A"}})]),t._v(" "),_("p",[t._v("有关更多信息和推荐的硬件，请参阅："),_("RouterLink",{attrs:{to:"/zh/sensor/tachometers.html"}},[t._v("转速计传感器")]),t._v("。")],1),t._v(" "),_("h2",{attrs:{id:"距离传感器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#距离传感器"}},[t._v("#")]),t._v(" 距离传感器")]),t._v(" "),_("p",[t._v("距离传感器用于精准着陆，避障和地形跟随。")]),t._v(" "),_("p",[t._v("PX4 支持许多实惠的距离传感器，使用不同的技术，并支持不同的范围和功能。 有关更多信息，请参阅："),_("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[t._v("距离传感器")]),t._v("。")],1),t._v(" "),_("img",{attrs:{src:r(1179),title:"lidar_lite_1",width:"500px"}}),t._v(" "),_("h2",{attrs:{id:"光流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#光流"}},[t._v("#")]),t._v(" 光流")]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/zh/sensor/optical_flow.html"}},[t._v("光流")]),t._v(" 传感器使用下视相机和向下的距离传感器进行速度估计。 PX4 将光流传感器输出与来自其他定位源（例如 GPS）的信息融合，以提供更准确的位置锁定。 该传感器可以用于没有 GPS 信号的室内。")],1),t._v(" "),_("p",[_("img",{attrs:{src:r(392),alt:"px4flow-bottom"}})]),t._v(" "),_("p",[t._v("一些选项包括：")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/zh/sensor/px4flow.html"}},[t._v("PX4Flow")]),t._v("内置声纳测距传感器。")],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/zh/sensor/pmw3901.html"}},[t._v("PMW3901")]),t._v(" 有着与光学鼠标非常相似的感应器.")],1)]),t._v(" "),_("p",[_("span",{attrs:{id:"wiring"}})]),t._v(" "),_("h2",{attrs:{id:"传感器接线"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传感器接线"}},[t._v("#")]),t._v(" 传感器接线")]),t._v(" "),_("p",[t._v("传感器接线信息通常在飞控和传感器本身的制造商文档中提供。")]),t._v(" "),_("p",[t._v("另外，请参阅：")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/zh/assembly/"}},[t._v("基本组件")]),t._v("包含飞控快速入门指南。 其包括核心传感器到特定飞控硬件的接线。")],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/zh/flight_controller/"}},[t._v("飞控")]),t._v(" 主题通常包含接线信息。")],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("外设硬件")]),t._v("包含其他传感器的文档。")],1)])])}),[],!1,null,null,null);s.default=a.exports},340:function(t,s,r){t.exports=r.p+"assets/img/tfrpm01_electronics.8e8882e1.jpg"},390:function(t,s,r){t.exports=r.p+"assets/img/gps_compass.34866df8.jpg"},391:function(t,s,r){t.exports=r.p+"assets/img/digital_airspeed_sensor.43319a0e.jpg"},392:function(t,s,r){t.exports=r.p+"assets/img/px4flow_bottom.915780e0.jpg"}}]);