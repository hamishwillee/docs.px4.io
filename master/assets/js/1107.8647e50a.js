(window.webpackJsonp=window.webpackJsonp||[]).push([[1107],{2331:function(t,e,i){"use strict";i.r(e);var o=i(18),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"quadplane-vtol-配置-调参"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#quadplane-vtol-配置-调参"}},[t._v("#")]),t._v(" QuadPlane VTOL 配置 & 调参")]),t._v(" "),i("p",[t._v("这是一份垂直起降固定翼飞行器的的配置文档（固定翼+四旋翼）。 对于具体的机型和构建指南请看"),i("RouterLink",{attrs:{to:"/zh/frames_vtol/"}},[t._v("VTOL Framebuilds")]),t._v("。")],1),t._v(" "),i("h2",{attrs:{id:"固件-基础设置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#固件-基础设置"}},[t._v("#")]),t._v(" 固件 & 基础设置")]),t._v(" "),i("ol",[i("li",[t._v("运行 "),i("em",[t._v("QGroundControl")])]),t._v(" "),i("li",[t._v("刷固件")]),t._v(" "),i("li",[t._v("再启动界面选择合适的VTOL机型，如果你的机型没有列出的话，请选择Fun Cub VTOL机型。")])]),t._v(" "),i("h3",{attrs:{id:"飞行模式-模式转换"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式-模式转换"}},[t._v("#")]),t._v(" 飞行模式/模式转换")]),t._v(" "),i("p",[t._v("In "),i("em",[t._v("QGroundControl")]),t._v(" assign a switch of your remote to the transition function during the RC calibration step or by setting "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC_MAP_TRANS_SW"}},[t._v("RC_MAP_TRANS_SW")]),t._v(".")],1),t._v(" "),i("p",[t._v("这个按钮可以让你在固定翼和多旋翼两个模式进行切换。 The switch in the off-position means that you are flying in multicopter mode.")]),t._v(" "),i("h3",{attrs:{id:"多旋翼-固定翼调参"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼-固定翼调参"}},[t._v("#")]),t._v(" 多旋翼/固定翼调参")]),t._v(" "),i("p",[t._v("Before you attempt your first transition to fixed wing flight you need to make absolutely sure that your VTOL is well tuned in multirotor mode. One reason is this is the mode you will return to if something goes wrong with a transition and it could be it will be moving fairly quickly already. 如果你多旋翼模式没调好的话，可能会炸机。")]),t._v(" "),i("p",[t._v("If you have a runway available and the total weight isn’t too high you will also want to tune fixed wing flight as well. If not then you will be attempting this when it switches to fixed wing mode. If something goes wrong you need to be ready (and able) to switch back to multirotor mode.")]),t._v(" "),i("p",[t._v("Follow the respective tuning guides on how to tune multirotors and fixed wings.")]),t._v(" "),i("h3",{attrs:{id:"转换调参"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#转换调参"}},[t._v("#")]),t._v(" 转换调参")]),t._v(" "),i("p",[t._v("While it might seem that you are dealing with a vehicle that can fly in two modes (multirotor for vertical takeoffs and landings and fixed wing for forwards flight) there is an additional state you also need to tune: transition.")]),t._v(" "),i("p",[t._v("Getting your transition tuning right is important for obtaining a safe entry into fixed wing mode, for example, if your airspeed is too slow when it transitions it might stall.")]),t._v(" "),i("p",[i("span",{attrs:{id:"transition_throttle"}})]),t._v(" "),i("h4",{attrs:{id:"过渡阶段油门"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#过渡阶段油门"}},[t._v("#")]),t._v(" 过渡阶段油门")]),t._v(" "),i("p",[t._v("Parameter: "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_F_TRANS_THR"}},[t._v("VT_F_TRANS_THR")])],1),t._v(" "),i("p",[t._v("Front transition throttle defines the target throttle for the pusher/puller motor during the front transition.")]),t._v(" "),i("p",[t._v("This must be set high enough to ensure that the transition airspeed is reached. If your vehicle is equipped with an airspeed sensor then you can increase this parameter to make the front transition complete faster. For your first transition you are better off setting the value higher than lower.")]),t._v(" "),i("p",[t._v("Parameter: "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_TRANS_THR"}},[t._v("VT_B_TRANS_THR")])],1),t._v(" "),i("p",[t._v("Generally back-transition throttle can be set to 0 since forward thrust is not (in most cases) desirable. If the motor controller supports reverse thrust however, you can achieve this by setting a negative value.")]),t._v(" "),i("h4",{attrs:{id:"forward-transition-pusher-puller-ramp-up-time"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#forward-transition-pusher-puller-ramp-up-time"}},[t._v("#")]),t._v(" Forward Transition Pusher/Puller Ramp-up Time")]),t._v(" "),i("p",[t._v("Parameter: "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_PSHER_RMP_DT"}},[t._v("VT_PSHER_RMP_DT")])],1),t._v(" "),i("p",[t._v("A forward transition refers to the transition from multirotor to fixed wing mode. This is the amount of time in seconds that should be spent ramping up the throttle to the target value (defined by "),i("code",[t._v("VT_F_TRANS_THR")]),t._v("). A value of 0 will result in commanding the transition throttle value being set immediately. If you wish to smooth the throttling up you can increase this to a larger value, such as 3.")]),t._v(" "),i("p",[t._v("Note that once the ramp up period ends throttle will be at its target setting and will remain there until (hopefully) the transition speed is reached.")]),t._v(" "),i("h4",{attrs:{id:"混合控制空速"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#混合控制空速"}},[t._v("#")]),t._v(" 混合控制空速")]),t._v(" "),i("p",[t._v("参数: "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_ARSP_BLEND"}},[t._v("VT_ARSP_BLEND")])],1),t._v(" "),i("p",[t._v("By default, as the airspeed gets close to the transition speed, multirotor attitude control will be reduced and fixed wing control will start increasing continuously until the transition occurs.")]),t._v(" "),i("p",[t._v("Disable blending by setting this parameter to 0 which will keep full multirotor control and zero fixed wing control until the transition occurs.")]),t._v(" "),i("h4",{attrs:{id:"转换空速"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#转换空速"}},[t._v("#")]),t._v(" 转换空速")]),t._v(" "),i("p",[t._v("参数: "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_ARSP_TRANS"}},[t._v("VT_ARSP_TRANS")])],1),t._v(" "),i("p",[t._v("This is the airspeed which, when reached, will trigger the transition out of multirotor mode into fixed wing mode. It is critical that you have properly calibrated your airspeed sensor. It is also important that you pick an airspeed that is comfortably above your airframes stall speed (check "),i("code",[t._v("FW_AIRSPD_MIN")]),t._v(") as this is currently not checked.")]),t._v(" "),i("h4",{attrs:{id:"固定翼永久稳定模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#固定翼永久稳定模式"}},[t._v("#")]),t._v(" 固定翼永久稳定模式")]),t._v(" "),i("p",[t._v("参数: "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_FW_PERM_STAB"}},[t._v("VT_FW_PERM_STAB")])],1),t._v(" "),i("p",[t._v("Activating permanent stabilisation will result in fixed wing flight being stabilised by the autopilot at all times. As soon as a transition to fixed wing occurs it will be stabilised.")]),t._v(" "),i("p",[t._v("Note that if you have not yet tuned your fixed wing mode you should leave this off until you are sure it behaves well in this mode.")]),t._v(" "),i("p",[i("span",{attrs:{id:"transitioning_tips"}})]),t._v(" "),i("h3",{attrs:{id:"过渡模式小提示"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#过渡模式小提示"}},[t._v("#")]),t._v(" 过渡模式小提示")]),t._v(" "),i("p",[t._v("正如之前已经说过的，确保你的多旋翼模式已经调好了。 If during a transition something goes wrong you will switch back to this mode and it should be quite smooth.")]),t._v(" "),i("p",[t._v("Before you fly have a plan for what you will do in each of the three phases (multirotor, transition, fixed wing) when you are in any of them and something goes wrong.")]),t._v(" "),i("p",[t._v("Battery levels: leave enough margin for a multirotor transition for landing at the end of your flight. Don’t run your batteries too low as you will need more power in multirotor mode to land. 稳住，不要浪。")]),t._v(" "),i("h4",{attrs:{id:"过渡模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#过渡模式"}},[t._v("#")]),t._v(" 过渡模式：")]),t._v(" "),i("p",[t._v("Make sure you are at least 20 meters above ground and have enough room to complete a transition. It could be that your VTOL will lose height when it switches to fixed wing mode, especially if the airspeed isn’t high enough.")]),t._v(" "),i("p",[t._v("Transition into the wind, whenever possible otherwise it will travel further from you before it transitions.")]),t._v(" "),i("p",[t._v("确保你的垂起固定翼在开始转换之前悬停得很稳。")]),t._v(" "),i("h4",{attrs:{id:"过渡-从多旋翼过渡到固定翼模式-前过渡"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#过渡-从多旋翼过渡到固定翼模式-前过渡"}},[t._v("#")]),t._v(" 过渡：从多旋翼过渡到固定翼模式（前过渡）")]),t._v(" "),i("p",[t._v("开始你的过渡。 飞机应该在50~100m之间进行过渡。 If it doesn’t or it isn’t flying in a stable fashion abort the transition (see below) and land or hover back to the start position and land. Try increasing the "),i("a",{attrs:{href:"#transition_throttle"}},[t._v("transition throttle")]),t._v(" ("),i("code",[t._v("VT_F_TRANS_THR")]),t._v(") value. Also consider reducing the transition duration ("),i("code",[t._v("VT_F_TRANS_DUR")]),t._v(") if you are not using an airspeed sensor. If you are using an airspeed sensor consider lowering the transition airspeed but stay well above the stall speed.")]),t._v(" "),i("p",[t._v("As soon as you notice the transition happen be ready to handle height loss which may include throttling up quickly.")]),t._v(" "),i("p",[t._v(":::caution\nThe following feature has been discussed but not implemented yet: Once the transition happens the multirotor motors will stop and the pusher/puller throttle will remain at the "),i("code",[t._v("VT_F_TRANS_THR")]),t._v(" level until you move the throttle stick, assuming you are in manual mode.\n:::")]),t._v(" "),i("h4",{attrs:{id:"过渡-从固定翼模式过渡到多旋翼模式-后转换"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#过渡-从固定翼模式过渡到多旋翼模式-后转换"}},[t._v("#")]),t._v(" 过渡：从固定翼模式过渡到多旋翼模式（后转换）")]),t._v(" "),i("p",[t._v("When you transition back to multirotor mode bring your aircraft in on a straight level approach and reduce its speed, flip the transition switch and it will start the multirotor motors and stop the pusher/puller prop immediately and should result in a fairly smooth gliding transition.")]),t._v(" "),i("p",[t._v("Consider that the throttle value you have when you transition will command the amount of thrust your multirotor has at the moment of the switch. Because the wing will still be flying you’ll find you have plenty of time to adjust your throttle to achieve/hold a hover.")]),t._v(" "),i("p",[t._v("For advanced tuning of the back-transition please refer to the "),i("RouterLink",{attrs:{to:"/zh/config_vtol/vtol_back_transition_tuning.html"}},[t._v("Back-transition Tuning Guide")])],1),t._v(" "),i("p",[i("span",{attrs:{id:"aborting_a_transition"}})]),t._v(" "),i("h4",{attrs:{id:"紧急切出过渡模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#紧急切出过渡模式"}},[t._v("#")]),t._v(" 紧急切出过渡模式")]),t._v(" "),i("p",[t._v("It’s important to know what to expect when you revert a transition command "),i("em",[t._v("during")]),t._v(" a transition.")]),t._v(" "),i("p",[t._v("When transitioning from "),i("strong",[t._v("multirotor to fixed wing")]),t._v(" (transition switch is on/fixed wing) then reverting the switch back (off/multirotor position) "),i("em",[t._v("before")]),t._v(" the transition happens it will immediately return to multirotor mode.")]),t._v(" "),i("p",[t._v("When transitioning from "),i("strong",[t._v("fixed wing to multirotor")]),t._v(" for this type of VTOL the switch is immediate so there isn’t really a backing out option here, unlike for tilt rotor VTOLs. If you want it to go back into fixed wing you will need to go through the full transition. If it’s still travelling fast this should happen quickly.")]),t._v(" "),i("h3",{attrs:{id:"技术支持"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#技术支持"}},[t._v("#")]),t._v(" 技术支持")]),t._v(" "),i("p",[t._v("If you have any questions regarding your VTOL conversion or configuration please see "),i("a",{attrs:{href:"https://discuss.px4.io/c/px4/vtol",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://discuss.px4.io/c/px4/vtol"),i("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=a.exports}}]);