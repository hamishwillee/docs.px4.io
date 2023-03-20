(window.webpackJsonp=window.webpackJsonp||[]).push([[855],{3216:function(t,a,r){"use strict";r.r(a);var e=r(19),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"pwm-limit-状态机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pwm-limit-状态机"}},[t._v("#")]),t._v(" PWM_limit 状态机")]),t._v(" "),e("p",[t._v("[PWM_limit 状态机] 以锁定（pre-armed）和解锁（armed）模式作为功能函数的输入量对飞控的 PWM 输出进行控制， 并且会在解锁指令发出后、飞机油门增加之前引入一个延时。 并且会在解锁指令发出后、飞机油门增加之前引入一个延时。")]),t._v(" "),e("h2",{attrs:{id:"总览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总览"}},[t._v("#")]),t._v(" 总览")]),t._v(" "),e("p",[e("strong",[t._v("输入")])]),t._v(" "),e("ul",[e("li",[t._v("解锁（armed）模式：宣告允许执行危险的动作指令，如转动螺旋桨。")]),t._v(" "),e("li",[t._v("锁定（pre-armed）模式：宣告允许执行温和的动作指令，如移动控制舵面。")]),t._v(" "),e("li",[t._v("该输入会覆盖当前状态。")]),t._v(" "),e("li",[t._v("激活 锁定（pre-armed）模式后无论飞控当前处于什么状态，飞控都会立刻终止状态 ON 的运转。")]),t._v(" "),e("li",[t._v("取消 锁定（pre-armed）模式会使飞控返回到当前状态。")])]),t._v(" "),e("p",[e("strong",[t._v("状态")])]),t._v(" "),e("ul",[e("li",[t._v("INIT 和 OFF\n"),e("ul",[e("li",[t._v("pwm 输出设置为锁定状态的值。")])])]),t._v(" "),e("li",[t._v("RAMP\n"),e("ul",[e("li",[t._v("pwm outputs ramp from disarmed values to min values.")])])]),t._v(" "),e("li",[t._v("ON\n"),e("ul",[e("li",[t._v("根据实际控制量设定 pwm 的输出值。")])])])]),t._v(" "),e("h2",{attrs:{id:"状态转移图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态转移图"}},[t._v("#")]),t._v(" 状态转移图")]),t._v(" "),e("p",[e("img",{attrs:{src:r(672),alt:""}})])])}),[],!1,null,null,null);a.default=i.exports},672:function(t,a,r){t.exports=r.p+"assets/img/pwm_limit_state_diagram.be2288b1.png"}}]);