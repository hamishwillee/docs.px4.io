(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{3412:function(t,e,s){"use strict";s.r(e);var a=s(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"磁罗盘功率补偿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁罗盘功率补偿"}},[t._v("#")]),t._v(" 磁罗盘功率补偿")]),t._v(" "),a("p",[t._v("罗盘（磁力计）应该安装在尽可能远离通过大电流的线缆的位置，因为大电流诱发的磁场会干扰罗盘的读数。")]),t._v(" "),a("p",[t._v("本文解释了如何在不能改变磁航向计安装位置的情况下如何补偿诱发磁场带来的影响。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("使磁航向计远离动力电缆是最简单和最有效的避免诱发磁场干扰的方法，因为磁场强度是按与电缆的距离的二次方衰减的。")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("下述过程基于多旋翼无人机演示，但同样适用于其他类型的载具。")])]),t._v(" "),a("p",[a("a",{attrs:{id:"when"}})]),t._v(" "),a("h2",{attrs:{id:"本节补偿方法可用的前提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本节补偿方法可用的前提"}},[t._v("#")]),t._v(" 本节补偿方法可用的前提")]),t._v(" "),a("p",[t._v("只有当下述的全部条件都满足时才建议采用功率补偿：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("磁航向计无法远离动力线缆。")])]),t._v(" "),a("li",[a("p",[t._v("There is a strong correlation between the compass readings and the thrust setpoint, and/or the battery current.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(468),alt:"失效的磁航向计"}})])]),t._v(" "),a("li",[a("p",[t._v("无人机的线缆都是固定的或不会移动的（当通电的线缆能够移动会导致计算出的补偿参数失效）。")])])]),t._v(" "),a("p",[a("a",{attrs:{id:"how"}})]),t._v(" "),a("h2",{attrs:{id:"如何实现罗盘补偿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何实现罗盘补偿"}},[t._v("#")]),t._v(" 如何实现罗盘补偿")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("确保无人机运行在支持电源补偿的固件版本上（当前的Master版，或v1.11.0之后的版本）。")])]),t._v(" "),a("li",[a("p",[t._v("执行标准的"),a("RouterLink",{attrs:{to:"/zh/config/compass.html#compass-calibration"}},[t._v("指南针校准")]),t._v("流程。")],1)]),t._v(" "),a("li",[a("p",[t._v("将参数"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_MODE"}},[t._v("SDLOG_MODE")]),t._v(" 设为2，使系统一启动就开始记录日志。")],1)]),t._v(" "),a("li",[a("p",[t._v("Set the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[t._v("SDLOG_PROFILE")]),t._v(" checkbox for "),a("em",[t._v("Sensor comparison")]),t._v(" (bit 6) to get more data points.")],1)]),t._v(" "),a("li",[a("p",[t._v("固定好无人机使其无法移动，然后装好螺旋桨（这样电机可以获得与实际飞行中同样大的电流）。 本例中用带子固定了无人机。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(469),alt:"带子"}})])]),t._v(" "),a("li",[a("p",[t._v("Power the vehicle and switch into "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/acro.html"}},[t._v("ACRO flight mode")]),t._v(" (using this mode ensures the vehicle won't attempt to compensate for movement resulting from the straps).")],1),t._v(" "),a("ul",[a("li",[t._v("解锁无人机，然后缓缓将油门推到最大。")]),t._v(" "),a("li",[t._v("慢慢将油门降到0")]),t._v(" "),a("li",[t._v("给无人机加锁 > "),a("strong",[t._v("Note")]),t._v(" 谨慎地进行测试，并密切注意振动情况。")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")])])])]),t._v(" "),a("p",[t._v("仔细测试并密切监视震动情况。\n:::")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Retrieve the ulog and use the python script "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/sensors/vehicle_magnetometer/mag_compensation/python/mag_compensation.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("mag_compensation.py"),a("OutboundLink")],1),t._v(" to identify the compensation parameters.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("python mag_compensation.py ~/path/to/log/logfile.ulg\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")])])])]),t._v(" "),a("p",[t._v("If your log does not contain battery current measurements, you will need to comment out the respective lines in the Python script, such that it does the calculation for thrust only.\n:::")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("这个脚本将返回基于推力和基于电流的补偿参数，并打印输出到控制台。 脚本弹出的数值显示了每个罗盘匹配的程度，以及使用了建议的补偿值后数据将是什么样的。 如果有电流测数，那么依据电流补偿通常可以获得更好的结果。 这里是一个日志的例子，电流匹配得很好，然而因为不是线性关系推力参数则完全不可用。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(470),alt:"线性匹配"}})])]),t._v(" "),a("li",[a("p",[t._v("一旦确定了参数，必须通过将"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_MAG_COMP_TYP"}},[t._v("CAL_MAG_COMP_TYP")]),t._v("设为1（使用推力参数时）或2（使用电流参数时）来激活电源补偿。 此外，还要设置好每个罗盘每个轴的补偿参数值。")],1),t._v(" "),a("p",[a("img",{attrs:{src:s(471),alt:"补偿参数"}})])])])])}),[],!1,null,null,null);e.default=o.exports},468:function(t,e,s){t.exports=s.p+"assets/img/corrupted_mag.0d8dbed4.png"},469:function(t,e,s){t.exports=s.p+"assets/img/strap.5c76a824.png"},470:function(t,e,s){t.exports=s.p+"assets/img/line_fit.09ad1ed1.png"},471:function(t,e,s){t.exports=s.p+"assets/img/comp_params.25fa50a0.png"}}]);