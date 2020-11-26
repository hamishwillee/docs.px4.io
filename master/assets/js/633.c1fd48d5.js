(window.webpackJsonp=window.webpackJsonp||[]).push([[633],{2295:function(t,r,a){"use strict";a.r(r);var _=a(18),e=Object(_.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"pwm-limit-状态机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pwm-limit-状态机"}},[t._v("#")]),t._v(" PWM_limit 状态机")]),t._v(" "),_("p",[t._v("[PWM_limit 状态机] 以锁定（pre-armed）和解锁（armed）模式作为功能函数的输入量对飞控的 PWM 输出进行控制， 并且会在解锁指令发出后、飞机油门增加之前引入一个延时。 并且会在解锁指令发出后、飞机油门增加之前引入一个延时。")]),t._v(" "),_("h2",{attrs:{id:"总览"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总览"}},[t._v("#")]),t._v(" 总览")]),t._v(" "),_("p",[_("strong",[t._v("输入")])]),t._v(" "),_("ul",[_("li",[t._v("解锁（armed）模式：宣告允许执行危险的动作指令，如转动螺旋桨。")]),t._v(" "),_("li",[t._v("锁定（pre-armed）模式：宣告允许执行温和的动作指令，如移动控制舵面。")]),t._v(" "),_("li",[t._v("该输入会覆盖当前状态。")]),t._v(" "),_("li",[t._v("激活 锁定（pre-armed）模式后无论飞控当前处于什么状态，飞控都会立刻终止状态 ON 的运转。")]),t._v(" "),_("li",[t._v("取消 锁定（pre-armed）模式会使飞控返回到当前状态。")])]),t._v(" "),_("p",[_("strong",[t._v("状态")])]),t._v(" "),_("ul",[_("li",[t._v("INIT 和 OFF\n"),_("ul",[_("li",[t._v("pwm 输出设置为锁定状态的值。")])])]),t._v(" "),_("li",[t._v("RAMP\n"),_("ul",[_("li",[t._v("pwm 输出从锁定状态的值上升到解锁状态的最小值。")])])]),t._v(" "),_("li",[t._v("ON\n"),_("ul",[_("li",[t._v("根据实际控制量设定 pwm 的输出值。")])])])]),t._v(" "),_("h2",{attrs:{id:"状态转移图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态转移图"}},[t._v("#")]),t._v(" 状态转移图")]),t._v(" "),_("p",[_("img",{attrs:{src:a(599),alt:""}})])])}),[],!1,null,null,null);r.default=e.exports},599:function(t,r,a){t.exports=a.p+"assets/img/pwm_limit_state_diagram.be2288b1.png"}}]);