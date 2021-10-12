(window.webpackJsonp=window.webpackJsonp||[]).push([[1610],{3005:function(t,a,s){"use strict";s.r(a);var r=s(19),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"模块参考-仿真"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块参考-仿真"}},[t._v("#")]),t._v(" 模块参考：仿真")]),t._v(" "),s("h2",{attrs:{id:"sih"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sih"}},[t._v("#")]),t._v(" sih")]),t._v(" "),s("p",[t._v("源码："),s("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/sih",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/sih"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("本模块为四旋翼提供了一个完全在飞控内部运行的模拟器。")]),t._v(" "),s("p",[t._v("该模拟器订阅了主题 “actuator_outputs”，即混控器给出的控制执行器的 pwm 信号。")]),t._v(" "),s("p",[t._v("模拟器发布了被真实噪声污染的传感器信号以便在环路中加入状态估计器。")]),t._v(" "),s("h3",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("p",[t._v("模拟器运用矩阵代数方法实现了运动方程。 姿态采用四元数表示。 积分计算采用前向欧拉法。 为避免堆栈溢出，大部分变量在 .hpp 文件中声明为全局变量。")]),t._v(" "),s("p",[s("a",{attrs:{id:"sih_usage"}})]),t._v(" "),s("h3",{attrs:{id:"用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sih <command> [arguments...]\n wind_estimator &lt;command&gt; [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);