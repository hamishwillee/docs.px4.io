(window.webpackJsonp=window.webpackJsonp||[]).push([[1250],{2640:function(t,e,a){"use strict";a.r(e);var i=a(18),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基于gazebo的多飞行器仿真"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于gazebo的多飞行器仿真"}},[t._v("#")]),t._v(" 基于gazebo的多飞行器仿真")]),t._v(" "),a("p",[t._v("本主题介绍如何使用 gazebo 和 sitl (仅限 linux) 模拟多架无人机/车辆。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("注意")]),t._v("如果您不需要 gazebo 或 ros 提供的功能， "),a("RouterLink",{attrs:{to:"/zh/simulation/multi_vehicle_jmavsim.html"}},[t._v(" jmavsim的 Multi-车辆仿真")]),t._v("更容易设置。")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/simulation/multi_vehicle_flightgear.html"}},[t._v("MAVROS 包")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/simulation/multi_vehicle_jmavsim.html"}},[t._v("使用 JMAVSim 进行多飞行器仿真")])],1)]),t._v(" "),a("p",[t._v('The choice of the simulator depends on the vehicle to be simulated, how "good" the simulation needs to be (and for what features), and how many vehicles need to be simulated at a time:')]),t._v(" "),a("ul",[a("li",[t._v("FlightGear is the most accurate simulator, and as a result the most heavy weight. It might be used if you need a great simulation but not too many vehicles at a time. It can also be used if different types of vehicles need to be simulated at the same time.")]),t._v(" "),a("li",[t._v("Gazebo is less accurate and less heavy-weight and supports many features and vehicles that aren't available for FlightGear. It can only simulate a single type of vehicle at a time, but it can simulate many more vehicles at a time than FlightGear.")]),t._v(" "),a("li",[t._v("JMAVSim is a very light-weight simulator that supports only quadcopters. It is recommended if you need to support a lot of quadcopters, and the simulation only needs to be approximate.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);