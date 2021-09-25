(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{1140:function(_,t,v){_.exports=v.p+"assets/img/pixhawk_led_meanings.d8221e50.gif"},1141:function(_,t,v){_.exports=v.p+"assets/img/pixhawk4_status_leds.d352ada4.jpg"},2938:function(_,t,v){"use strict";v.r(t);var s=v(19),a=Object(s.a)({},(function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"led-含义-pixhawk系列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#led-含义-pixhawk系列"}},[_._v("#")]),_._v(" LED 含义（Pixhawk系列）")]),_._v(" "),s("p",[s("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[_._v("Pixhawk系列飞行控制器")]),_._v(" 使用LED来显示当前飞行器的状态。")],1),_._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#ui_led"}},[_._v("UI LED")]),_._v(" 提供了与 "),s("em",[_._v("起飞准备")]),_._v("相关的面向用户的状态信息。")]),_._v(" "),s("li",[s("a",{attrs:{href:"#status_led"}},[_._v("LEDs状态")]),_._v(" 提供PX4IO 和 FMU SoC的状态。 它们表示电量、驱动模式和活动以及错误。")])]),_._v(" "),s("p",[s("span",{attrs:{id:"ui_led"}})]),_._v(" "),s("h2",{attrs:{id:"led-界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#led-界面"}},[_._v("#")]),_._v(" LED 界面")]),_._v(" "),s("p",[_._v("RGB "),s("em",[_._v("UI LED")]),_._v("显示当前 飞行器"),s("em",[_._v("起飞准备")]),_._v(" 的状态。 这通常是一个超亮的I2C外设，可能安装在飞控板上（例如，FMUv4飞控板上没有，通常使用安装在GPS上的LED）。")]),_._v(" "),s("p",[_._v("下图显示LED和飞行器状态的关系。")]),_._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),s("p",[_._v("有可能出现GPS锁定 (绿色LED) 但仍然无法解锁的情况，这是因为PX4还没有"),s("RouterLink",{attrs:{to:"/zh/flying/pre_flight_checks.html"}},[_._v("通过起飞前检查")]),_._v(". "),s("strong",[_._v("起飞需要有效的全球位置估计!")])],1)]),_._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),s("p",[_._v("在遇到错误 (红色LED闪烁), 或者飞行器GPS无法锁定 (LED从蓝色变为绿色) 时， 在"),s("em",[_._v("QGroundControl")]),_._v("中查看详细的状态信息，包括校准状态，"),s("RouterLink",{attrs:{to:"/zh/flying/pre_flight_checks.html"}},[_._v("飞行前检查(内部)")]),_._v("报告的错误信息。 还要检查GPS模块是否正确连接，Pixhawk是否正确读取GPS信息，GPS是否发送正确的GPS位置。")],1)]),_._v(" "),s("p",[s("img",{attrs:{src:v(1140),alt:"LED meanings"}})]),_._v(" "),s("ul",[s("li",[s("p",[s("strong",[_._v("[蓝色LED常亮] 解锁， GPS未锁定：")]),_._v(" 表上飞行器已经解锁并且GPS模块没有位置锁。 当飞行器已经解锁，PX4会解锁对电机的控制，允许你操纵无人机飞行。 像往常一样，在解锁时要小心，因为大型螺旋桨在高速旋转时可能很危险。 飞行器在这种模式下无法执行引导任务。")])]),_._v(" "),s("li",[s("p",[s("strong",[_._v("[蓝色LED闪烁] 未解锁, 没有GPS锁：")]),_._v(" 与之前类似，但是你的飞行器没有解锁。 这意味着你将不能控制电机，但是其他子系统正在工作。")])]),_._v(" "),s("li",[s("p",[s("strong",[_._v("[绿色LED常亮] 解锁，GPS锁定：")]),_._v(" 表示飞行器已经解锁，但是GPS模块有位置锁。 当飞行器解锁，PX4将会解锁对电机的控制，允许你操纵无人机飞行。 像往常一样，在解锁时要小心，因为大型螺旋桨在高速旋转时可能很危险。 在这种模式下，飞行器可以执行引导任务。")])]),_._v(" "),s("li",[s("p",[s("strong",[_._v("[绿色LED闪烁] 未解锁，GPS锁定：")]),_._v(" 与之前类似，但是你的飞行器没有解锁。 这意味着你讲无法控制电机，但是其他子系统包括GPS位置锁正在工作。")])]),_._v(" "),s("li",[s("p",[s("strong",[_._v("[紫色LED闪烁] 故障保护模式：")]),_._v(" 当你的飞行器在飞行时遇到问题，此模式将激活，比如飞行器失去手动控制、电量过低或内部错误。 在故障保护模式时，飞行器将试图返回起飞位置，或者降落在当前位置。")])]),_._v(" "),s("li",[s("p",[s("strong",[_._v("[黄褐色LED常亮] 低电量警告：")]),_._v(" 表示飞行器电量极低。 在某一点之后，飞行器将进入故障保护模式。 但是，此模式警告此次飞行应该结束。")])]),_._v(" "),s("li",[s("p",[s("strong",[_._v("[红色LED闪烁] 错误/设置需要：")]),_._v(" 表示飞行器在飞行前需要配置或校准。 将飞行器连接到地面站以找出问题所在。 如果您已经完成设置过程，飞行器仍然闪烁红色，这表明还有其他错误。")])])]),_._v(" "),s("p",[s("span",{attrs:{id:"status_led"}})]),_._v(" "),s("h2",{attrs:{id:"led-状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#led-状态"}},[_._v("#")]),_._v(" LED 状态")]),_._v(" "),s("p",[_._v("三种"),s("em",[_._v("LED 状态")]),_._v(" 指示FMU SoC状态，另外三个指示 PX4IO 的状态(如果存在)。 它们表示电源、引导模式和激活以及错误状态。")]),_._v(" "),s("p",[s("img",{attrs:{src:v(1141),alt:"Pixhawk 4"}})]),_._v(" "),s("p",[_._v("从上电开始，FMU和PX4IO的CPU首先运行引导程序(BL) 然后运行程序(APP)。 下表显示了Bootloader 和 APP 如何使用 LED 指示状态。")]),_._v(" "),s("table",[s("thead",[s("tr",[s("th",[_._v("颜色")]),_._v(" "),s("th",[_._v("标签")]),_._v(" "),s("th",[_._v("引导加载程序使用")]),_._v(" "),s("th",[_._v("APP使用")])])]),_._v(" "),s("tbody",[s("tr",[s("td",[_._v("蓝色")]),_._v(" "),s("td",[_._v("ACT(激活)")]),_._v(" "),s("td",[_._v("引导加载程序接收数据的时候闪烁")]),_._v(" "),s("td",[_._v("表示ARM状态")])]),_._v(" "),s("tr",[s("td",[_._v("红色/琥珀色")]),_._v(" "),s("td",[_._v("B/E(在引导加载程序/错误)")]),_._v(" "),s("td",[_._v("在引导加载程序时闪烁")]),_._v(" "),s("td",[_._v("表示错误状态")])]),_._v(" "),s("tr",[s("td",[_._v("绿色")]),_._v(" "),s("td",[_._v("PWR(电源)")]),_._v(" "),s("td",[_._v("引导加载程序不使用")]),_._v(" "),s("td",[_._v("表示ARM状态")])])])]),_._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),s("p",[_._v("上面所列的 LED 标签是常用的，但是在一些飞控板上可能有所不同。")])]),_._v(" "),s("p",[_._v("下面给出了LED更详细的信息(“x”表示任意状态)")]),_._v(" "),s("table",[s("thead",[s("tr",[s("th",[_._v("红色/琥珀色")]),_._v(" "),s("th",[_._v("蓝色")]),_._v(" "),s("th",[_._v("绿色")]),_._v(" "),s("th",[_._v("含义")])])]),_._v(" "),s("tbody",[s("tr",[s("td",[_._v("10Hz")]),_._v(" "),s("td",[_._v("x")]),_._v(" "),s("td",[_._v("x")]),_._v(" "),s("td",[_._v("过载 CPU 负载 > 80%，或者内存使用率 > 98%")])]),_._v(" "),s("tr",[s("td",[_._v("关闭")]),_._v(" "),s("td",[_._v("x")]),_._v(" "),s("td",[_._v("x")]),_._v(" "),s("td",[_._v("过载 CPU 负载 <= 80%, or RAM usage <= 98%")])]),_._v(" "),s("tr",[s("td",[_._v("不可用")]),_._v(" "),s("td",[_._v("关闭")]),_._v(" "),s("td",[_._v("4 赫兹")]),_._v(" "),s("td",[_._v("电机解锁并且故障保护")])]),_._v(" "),s("tr",[s("td",[_._v("不可用")]),_._v(" "),s("td",[_._v("打开")]),_._v(" "),s("td",[_._v("4 赫兹")]),_._v(" "),s("td",[_._v("电机解锁并且未故障保护")])]),_._v(" "),s("tr",[s("td",[_._v("不可用")]),_._v(" "),s("td",[_._v("关闭")]),_._v(" "),s("td",[_._v("1 赫兹")]),_._v(" "),s("td",[_._v("电机未解锁并且电机准备解锁")])]),_._v(" "),s("tr",[s("td",[_._v("不可用")]),_._v(" "),s("td",[_._v("关闭")]),_._v(" "),s("td",[_._v("10 赫兹")]),_._v(" "),s("td",[_._v("电机未解锁并且电机未准备解锁")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);