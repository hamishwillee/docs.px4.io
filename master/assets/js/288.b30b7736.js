(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{2728:function(t,s,a){"use strict";a.r(s);var _=a(19),e=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"磁罗盘功率补偿"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#磁罗盘功率补偿"}},[t._v("#")]),t._v(" 磁罗盘功率补偿")]),t._v(" "),_("p",[t._v("罗盘（磁力计）应该安装在尽可能远离通过大电流的线缆的位置，因为大电流诱发的磁场会干扰罗盘的读数。")]),t._v(" "),_("p",[t._v("本文解释了如何在不能改变磁航向计安装位置的情况下如何补偿诱发磁场带来的影响。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("使磁航向计远离动力电缆是最简单和最有效的避免诱发磁场干扰的方法，因为磁场强度是按与电缆的距离的二次方衰减的。")])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),_("p",[t._v("下述过程基于多旋翼无人机演示，但同样适用于其他类型的载具。")])]),t._v(" "),_("p",[_("span",{attrs:{id:"when"}})]),t._v(" "),_("h2",{attrs:{id:"本节补偿方法可用的前提"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本节补偿方法可用的前提"}},[t._v("#")]),t._v(" 本节补偿方法可用的前提")]),t._v(" "),_("p",[t._v("只有当下述的全部条件都满足时才建议采用功率补偿：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("磁航向计无法远离动力线缆。")])]),t._v(" "),_("li",[_("p",[t._v("磁航向计读数与油门杆位与/或电池电流有强相关性。"),_("img",{attrs:{src:a(451),alt:"失效的磁航向计"}})])]),t._v(" "),_("li",[_("p",[t._v("无人机的线缆都是固定的或不会移动的（当通电的线缆能够移动会导致计算出的补偿参数失效）。")])])]),t._v(" "),_("p",[_("span",{attrs:{id:"how"}})]),t._v(" "),_("h2",{attrs:{id:"如何实现罗盘补偿"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何实现罗盘补偿"}},[t._v("#")]),t._v(" 如何实现罗盘补偿")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("确保无人机运行在支持电源补偿的固件版本上（当前的Master版，或v1.11.0之后的版本）。")])]),t._v(" "),_("li",[_("p",[t._v("执行标准的"),_("RouterLink",{attrs:{to:"/zh/config/compass.html#compass-calibration"}},[t._v("指南针校准")]),t._v("流程。")],1)]),t._v(" "),_("li",[_("p",[t._v("将参数"),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_MODE"}},[t._v("SDLOG_MODE")]),t._v(" 设为2，使系统一启动就开始记录日志。")],1)]),t._v(" "),_("li",[_("p",[t._v("将参数"),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[t._v("SDLOG_PROFILE")]),t._v(" 复选框的"),_("em",[t._v("高采样率 (high rate)")]),t._v(" (bit 2)选中，以获得更多的数据采样点。")],1)]),t._v(" "),_("li",[_("p",[t._v("固定好无人机使其无法移动，然后装好螺旋桨（这样电机可以获得与实际飞行中同样大的电流）。 本例中用带子固定了无人机。")]),t._v(" "),_("p",[_("img",{attrs:{src:a(452),alt:"带子"}})])]),t._v(" "),_("li",[_("p",[t._v("给无人机上电，并切换到"),_("RouterLink",{attrs:{to:"/zh/flight_modes/acro_mc.html"}},[t._v("特技 (ACRO) 飞行模式")]),t._v(" （此模式下无人机不会试图去补偿带子对运动造成的影响）。")],1),t._v(" "),_("ul",[_("li",[t._v("解锁无人机，然后缓缓将油门推到最大。")]),t._v(" "),_("li",[t._v("慢慢将油门降到0")]),t._v(" "),_("li",[t._v("给无人机加锁 > "),_("strong",[t._v("Note")]),t._v(" 谨慎地进行测试，并密切注意振动情况。")])])])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),_("p",[t._v("仔细测试并密切监视震动情况。")])]),t._v(" "),_("ol",[_("li",[t._v("回收 ulog 并使用 python 脚本 "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/sensors/vehicle_magnetometer/mag_compensation/python/mag_compensation.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("mag_compensation.py"),_("OutboundLink")],1),t._v(" 来验证补偿参数。"),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("python mag_compensation.py ~/path/to/log/logfile.ulg\n")])])])])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),_("p",[t._v("如果日志中不包含电池电流测量，你需要注释掉 python 脚本中相关的代码，这样就只能进行推力计算。")])]),t._v(" "),_("ol",[_("li",[_("p",[t._v("这个脚本将返回基于推力和基于电流的补偿参数，并打印输出到控制台。 脚本弹出的数值显示了每个罗盘匹配的程度，以及使用了建议的补偿值后数据将是什么样的。 如果有电流测数，那么依据电流补偿通常可以获得更好的结果。 这里是一个日志的例子，电流匹配得很好，然而因为不是线性关系推力参数则完全不可用。 "),_("img",{attrs:{src:a(453),alt:"线性匹配"}})])]),t._v(" "),_("li",[_("p",[t._v("一旦确定了参数，必须通过将"),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_MAG_COMP_TYP"}},[t._v("CAL_MAG_COMP_TYP")]),t._v("设为1（使用推力参数时）或2（使用电流参数时）来激活电源补偿。 此外，还要设置好每个罗盘每个轴的补偿参数值。")],1),t._v(" "),_("p",[_("img",{attrs:{src:a(454),alt:"补偿参数"}})])])])])}),[],!1,null,null,null);s.default=e.exports},451:function(t,s,a){t.exports=a.p+"assets/img/corrupted_mag.3142e358.png"},452:function(t,s,a){t.exports=a.p+"assets/img/strap.5d8b1475.png"},453:function(t,s,a){t.exports=a.p+"assets/img/line_fit.5e701615.png"},454:function(t,s,a){t.exports=a.p+"assets/img/comp_params.7b7a8729.png"}}]);