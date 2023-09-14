(window.webpackJsonp=window.webpackJsonp||[]).push([[836],{3259:function(t,a,e){"use strict";e.r(a);var i=e(19),r=Object(i.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"pwm-limit-状态机"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pwm-limit-状态机"}},[t._v("#")]),t._v(" PWM_limit 状态机")]),t._v(" "),i("p",[t._v("The"),i("code",[t._v("PWM_limit State Machine")]),t._v(" controls PWM outputs as a function of pre-armed and armed inputs. 并且会在解锁指令发出后、飞机油门增加之前引入一个延时。")]),t._v(" "),i("h2",{attrs:{id:"总览"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#总览"}},[t._v("#")]),t._v(" 总览")]),t._v(" "),i("p",[i("strong",[t._v("输入")])]),t._v(" "),i("ul",[i("li",[t._v("解锁（armed）模式：宣告允许执行危险的动作指令，如转动螺旋桨。")]),t._v(" "),i("li",[t._v("锁定（pre-armed）模式：宣告允许执行温和的动作指令，如移动控制舵面。")]),t._v(" "),i("li",[t._v("该输入会覆盖当前状态。")]),t._v(" "),i("li",[t._v("激活 锁定（pre-armed）模式后无论飞控当前处于什么状态，飞控都会立刻终止状态 ON 的运转。")]),t._v(" "),i("li",[t._v("取消 锁定（pre-armed）模式会使飞控返回到当前状态。")])]),t._v(" "),i("p",[i("strong",[t._v("状态")])]),t._v(" "),i("ul",[i("li",[t._v("INIT 和 OFF\n"),i("ul",[i("li",[t._v("pwm 输出设置为锁定状态的值。")])])]),t._v(" "),i("li",[t._v("RAMP\n"),i("ul",[i("li",[t._v("pwm outputs ramp from disarmed values to min values.")])])]),t._v(" "),i("li",[t._v("ON\n"),i("ul",[i("li",[t._v("根据实际控制量设定 pwm 的输出值。")])])])]),t._v(" "),i("h2",{attrs:{id:"状态转移图"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#状态转移图"}},[t._v("#")]),t._v(" 状态转移图")]),t._v(" "),i("p",[i("img",{attrs:{src:e(640),alt:"PWM Limit state machine diagram"}})])])}),[],!1,null,null,null);a.default=r.exports},640:function(t,a,e){t.exports=e.p+"assets/img/pwm_limit_state_diagram.60e5262b.svg"}}]);