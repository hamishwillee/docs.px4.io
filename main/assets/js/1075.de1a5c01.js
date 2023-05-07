(window.webpackJsonp=window.webpackJsonp||[]).push([[1075],{2113:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"controlallocatorstatus-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controlallocatorstatus-uorb-message"}},[t._v("#")]),t._v(" ControlAllocatorStatus (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/ControlAllocatorStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp                        # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbool torque_setpoint_achieved           # Boolean indicating whether the "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("D torque setpoint was correctly allocated to actuators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" not achieved"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" achieved"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" unallocated_torque           # Unallocated torque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Equal to "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the setpoint was achieved"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n                                        "),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Computed as"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" unallocated_torque "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torque_setpoint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" allocated_torque")])]),t._v("\n\nbool thrust_setpoint_achieved           # Boolean indicating whether the "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("D thrust setpoint was correctly allocated to actuators"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" not achieved"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" achieved"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" unallocated_thrust           # Unallocated thrust"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Equal to "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the setpoint was achieved"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n                                        "),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Computed as"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" unallocated_thrust "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" thrust_setpoint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" allocated_thrust")])]),t._v("\n\nint8 ACTUATOR_SATURATION_OK        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" # The actuator is not saturated\nint8 ACTUATOR_SATURATION_UPPER_DYN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # The actuator is "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("saturated")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("with a value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" the desired value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" because it cannot increase its value faster\nint8 ACTUATOR_SATURATION_UPPER     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # The actuator is "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("saturated")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("with a value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" the desired value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" because it has reached its maximum value\nint8 ACTUATOR_SATURATION_LOWER_DYN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # The actuator is "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("saturated")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("with a value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" the desired value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" because it cannot decrease its value faster\nint8 ACTUATOR_SATURATION_LOWER     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # The actuator is "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("saturated")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("with a value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" the desired value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" because it has reached its minimum value\n\nint8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" actuator_saturation            # Indicates actuator saturation status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n                                        "),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Note "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" actuator saturation does not necessarily imply that the thrust setpoint or the torque setpoint were not achieved"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n                                        "),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Note "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" an actuator with limited dynamics can be indicated as upper"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("saturated even "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" it as not reached its maximum value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nuint16 handled_motor_failure_mask        # Bitmask of failed motors that were removed from the allocation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" effectiveness matrix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Not necessarily identical to the report from FailureDetector\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);