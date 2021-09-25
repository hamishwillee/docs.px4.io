(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{1532:function(t,a,e){"use strict";e.r(a);var s=e(19),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pwm-limit-state-machine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwm-limit-state-machine"}},[t._v("#")]),t._v(" PWM_limit State Machine")]),t._v(" "),s("p",[t._v('[PWM_limit State Machine] Controls PWM outputs as a function of pre-armed and armed inputs. Provides a delay between assertion of "armed" and a ramp-up of throttle on assertion of the armed signal.')]),t._v(" "),s("h2",{attrs:{id:"quick-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[t._v("#")]),t._v(" Quick Summary")]),t._v(" "),s("p",[s("strong",[t._v("Inputs")])]),t._v(" "),s("ul",[s("li",[t._v("armed: asserted to enable dangerous behaviors such as spinning propellers")]),t._v(" "),s("li",[t._v("pre-armed: asserted to enable benign behaviors such as moving control surfaces")]),t._v(" "),s("li",[t._v("this input overrides the current state")]),t._v(" "),s("li",[t._v("assertion of pre-armed immediately forces behavior of state ON, regardless of current state")]),t._v(" "),s("li",[t._v("deassertion of pre-armed reverts behavior to current state")])]),t._v(" "),s("p",[s("strong",[t._v("States")])]),t._v(" "),s("ul",[s("li",[t._v("INIT and OFF\n"),s("ul",[s("li",[t._v("pwm outputs set to disarmed values.")])])]),t._v(" "),s("li",[t._v("RAMP\n"),s("ul",[s("li",[t._v("pwm ouputs ramp from disarmed values to min values.")])])]),t._v(" "),s("li",[t._v("ON\n"),s("ul",[s("li",[t._v("pwm outputs set according to control values.")])])])]),t._v(" "),s("h2",{attrs:{id:"state-transition-diagram"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-transition-diagram"}},[t._v("#")]),t._v(" State Transition Diagram")]),t._v(" "),s("p",[s("img",{attrs:{src:e(609),alt:""}})])])}),[],!1,null,null,null);a.default=r.exports},609:function(t,a,e){t.exports=e.p+"assets/img/pwm_limit_state_diagram.be2288b1.png"}}]);