(window.webpackJsonp=window.webpackJsonp||[]).push([[1455],{2714:function(t,e,i){"use strict";i.r(e);var o=i(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"generic-standard-vtol-quadplane-configuration-tuning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#generic-standard-vtol-quadplane-configuration-tuning"}},[t._v("#")]),t._v(" Generic Standard VTOL (QuadPlane) Configuration & Tuning")]),t._v(" "),i("p",[t._v("This is the configuration documentation for a "),i("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#vtol_standard_vtol_generic_standard_vtol"}},[t._v("Generic Standard VTOL")]),t._v(', also known as a "QuadPlane VTOL". This is essentially a fixed-wing vehicle with the addition of quadcopter motors.')],1),t._v(" "),i("p",[t._v("기체별 문서와 조립 방법은 "),i("RouterLink",{attrs:{to:"/ko/frames_vtol/"}},[t._v("VTOL 프레임 조립")]),t._v("를 참고하십시오.")],1),t._v(" "),i("h2",{attrs:{id:"펌웨어-및-기본-설정"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-및-기본-설정"}},[t._v("#")]),t._v(" 펌웨어 및 기본 설정")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Run "),i("em",[t._v("QGroundControl")])])]),t._v(" "),i("li",[i("p",[t._v("Flash the firmware for your current release or master (PX4 "),i("code",[t._v("main")]),t._v(" branch build).")])]),t._v(" "),i("li",[i("p",[t._v("In the "),i("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[t._v("Frame setup")]),t._v(" section select the appropriate VTOL airframe.")],1),t._v(" "),i("p",[t._v("If your airframe is not listed select the "),i("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#vtol_standard_vtol_generic_standard_vtol"}},[t._v("Generic Standard VTOL")]),t._v(" frame.")],1)])]),t._v(" "),i("h3",{attrs:{id:"비행-전환-모드-스위치"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#비행-전환-모드-스위치"}},[t._v("#")]),t._v(" 비행 / 전환 모드 스위치")]),t._v(" "),i("p",[t._v("You should assign a switch on your RC controller for switching between the multicopter- and fixed-wing modes.")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("While PX4 allows flight without an RC controller, you must have one when tuning/configuring up a new airframe.")])]),t._v(" "),i("p",[t._v("This is done in "),i("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[t._v("Flight Mode")]),t._v(" configuration, where you "),i("RouterLink",{attrs:{to:"/ko/config/flight_mode.html#what-flight-modes-and-switches-should-i-set"}},[t._v("assign flight modes and other functions")]),t._v(" to switches on your RC controller. The switch can also be assigned using the parameter "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_MAP_TRANS_SW"}},[t._v("RC_MAP_TRANS_SW")]),t._v(".")],1),t._v(" "),i("p",[t._v("The switch in the off-position means that you are flying in multicopter mode.")]),t._v(" "),i("h3",{attrs:{id:"multirotor-fixed-wing-tuning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#multirotor-fixed-wing-tuning"}},[t._v("#")]),t._v(" Multirotor / Fixed-wing Tuning")]),t._v(" "),i("p",[t._v("Before you attempt your first transition to fixed-wing flight you need to make absolutely sure that your VTOL is well tuned in multirotor mode. One reason is this is the mode you will return to if something goes wrong with a transition and it could be it will be moving fairly quickly already. If it isn’t well tuned bad things might happen.")]),t._v(" "),i("p",[t._v("If you have a runway available and the total weight isn’t too high you will also want to tune fixed-wing flight as well. If not then you will be attempting this when it switches to fixed-wing mode. If something goes wrong you need to be ready (and able) to switch back to multirotor mode.")]),t._v(" "),i("p",[t._v("Follow the respective tuning guides on how to tune multirotors and fixed-wings.")]),t._v(" "),i("h3",{attrs:{id:"전환-튜닝"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#전환-튜닝"}},[t._v("#")]),t._v(" 전환 튜닝")]),t._v(" "),i("p",[t._v("While it might seem that you are dealing with a vehicle that can fly in two modes (multirotor for vertical takeoffs and landings and fixed-wing for forwards flight) there is an additional state you also need to tune: transition.")]),t._v(" "),i("p",[t._v("Getting your transition tuning right is important for obtaining a safe entry into fixed-wing mode, for example, if your airspeed is too slow when it transitions it might stall.")]),t._v(" "),i("h4",{attrs:{id:"전환-스로틀"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#전환-스로틀"}},[t._v("#")]),t._v(" 전환 스로틀")]),t._v(" "),i("p",[t._v("Parameter: "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_F_TRANS_THR"}},[t._v("VT_F_TRANS_THR")])],1),t._v(" "),i("p",[t._v("Front transition throttle defines the target throttle for the pusher/puller motor during the front transition.")]),t._v(" "),i("p",[t._v("This must be set high enough to ensure that the transition airspeed is reached. If your vehicle is equipped with an airspeed sensor then you can increase this parameter to make the front transition complete faster. For your first transition you are better off setting the value higher than lower.")]),t._v(" "),i("h4",{attrs:{id:"forward-transition-pusher-puller-slew-rate"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#forward-transition-pusher-puller-slew-rate"}},[t._v("#")]),t._v(" Forward Transition Pusher/Puller Slew Rate")]),t._v(" "),i("p",[t._v("Parameter: "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_PSHER_SLEW"}},[t._v("VT_PSHER_SLEW")])],1),t._v(" "),i("p",[t._v("A forward transition refers to the transition from multirotor to fixed-wing mode. The forward transition pusher/puller slew rate is the amount of time in seconds that should be spent ramping up the throttle to the target value (defined by "),i("code",[t._v("VT_F_TRANS_THR")]),t._v(").")]),t._v(" "),i("p",[t._v("A value of 0 will result in commanding the transition throttle value being set immediately. By default the slew rate is set to 0.33, meaning that it will take 3s to ramp up to 100% throttle. If you wish to make throttling-up smoother you can reduce this value.")]),t._v(" "),i("p",[t._v("Note that once the ramp up period ends throttle will be at its target setting and will remain there until (hopefully) the transition speed is reached.")]),t._v(" "),i("h4",{attrs:{id:"블렌딩-속도"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#블렌딩-속도"}},[t._v("#")]),t._v(" 블렌딩 속도")]),t._v(" "),i("p",[t._v("Parameter: "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_ARSP_BLEND"}},[t._v("VT_ARSP_BLEND")])],1),t._v(" "),i("p",[t._v("By default, as the airspeed gets close to the transition speed, multirotor attitude control will be reduced and fixed-wing control will start increasing continuously until the transition occurs.")]),t._v(" "),i("p",[t._v("Disable blending by setting this parameter to 0 which will keep full multirotor control and zero fixed-wing control until the transition occurs.")]),t._v(" "),i("h4",{attrs:{id:"전환-대기속도"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#전환-대기속도"}},[t._v("#")]),t._v(" 전환 대기속도")]),t._v(" "),i("p",[t._v("Parameter: "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_ARSP_TRANS"}},[t._v("VT_ARSP_TRANS")])],1),t._v(" "),i("p",[t._v("This is the airspeed which, when reached, will trigger the transition out of multirotor mode into fixed-wing mode. It is critical that you have properly calibrated your airspeed sensor. It is also important that you pick an airspeed that is comfortably above your airframes stall speed (check "),i("code",[t._v("FW_AIRSPD_MIN")]),t._v(") as this is currently not checked.")]),t._v(" "),i("h3",{attrs:{id:"전환-팁"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#전환-팁"}},[t._v("#")]),t._v(" 전환 팁")]),t._v(" "),i("p",[t._v("As already mentioned make sure you have a well tuned multirotor mode. If during a transition something goes wrong you will switch back to this mode and it should be quite smooth.")]),t._v(" "),i("p",[t._v("Before you fly have a plan for what you will do in each of the three phases (multirotor, transition, fixed-wing) when you are in any of them and something goes wrong.")]),t._v(" "),i("p",[t._v("Battery levels: leave enough margin for a multirotor transition for landing at the end of your flight. Don’t run your batteries too low as you will need more power in multirotor mode to land. Be conservative.")]),t._v(" "),i("h4",{attrs:{id:"전환-준비하기"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#전환-준비하기"}},[t._v("#")]),t._v(" 전환: 준비하기")]),t._v(" "),i("p",[t._v("Make sure you are at least 20 meters above ground and have enough room to complete a transition. It could be that your VTOL will lose height when it switches to fixed-wing mode, especially if the airspeed isn’t high enough.")]),t._v(" "),i("p",[t._v("Transition into the wind, whenever possible otherwise it will travel further from you before it transitions.")]),t._v(" "),i("p",[t._v("Make sure the VTOL is in a stable hover before you start the transition.")]),t._v(" "),i("h4",{attrs:{id:"transition-multirotor-to-fixed-wing-front-transition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#transition-multirotor-to-fixed-wing-front-transition"}},[t._v("#")]),t._v(" Transition: Multirotor to Fixed-wing (Front-transition)")]),t._v(" "),i("p",[t._v("Start your transition. It should transition within 50 – 100 meters. If it doesn’t or it isn’t flying in a stable fashion abort the transition (see below) and land or hover back to the start position and land. Try increasing the "),i("a",{attrs:{href:"#transition-throttle"}},[t._v("transition throttle")]),t._v(" ("),i("code",[t._v("VT_F_TRANS_THR")]),t._v(") value. Also consider reducing the transition duration ("),i("code",[t._v("VT_F_TRANS_DUR")]),t._v(") if you are not using an airspeed sensor. If you are using an airspeed sensor consider lowering the transition airspeed but stay well above the stall speed.")]),t._v(" "),i("p",[t._v("As soon as you notice the transition happen be ready to handle height loss which may include throttling up quickly.")]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("p",[t._v("The following feature has been discussed but not implemented yet:")]),t._v(" "),i("ul",[i("li",[t._v("Once the transition happens the multirotor motors will stop and the pusher/puller throttle will remain at the "),i("code",[t._v("VT_F_TRANS_THR")]),t._v(" level until you move the throttle stick, assuming you are in manual mode.")])])]),t._v(" "),i("h4",{attrs:{id:"transition-fixed-wing-to-multirotor-back-transition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#transition-fixed-wing-to-multirotor-back-transition"}},[t._v("#")]),t._v(" Transition: Fixed-wing to Multirotor (Back-transition)")]),t._v(" "),i("p",[t._v("When you transition back to multirotor mode bring your aircraft in on a straight level approach and reduce its speed, flip the transition switch and it will start the multirotor motors and stop the pusher/puller prop immediately and should result in a fairly smooth gliding transition.")]),t._v(" "),i("p",[t._v("Consider that the throttle value you have when you transition will command the amount of thrust your multirotor has at the moment of the switch. Because the wing will still be flying you’ll find you have plenty of time to adjust your throttle to achieve/hold a hover.")]),t._v(" "),i("p",[t._v("For advanced tuning of the back-transition please refer to the "),i("RouterLink",{attrs:{to:"/ko/config_vtol/vtol_back_transition_tuning.html"}},[t._v("Back-transition Tuning Guide")])],1),t._v(" "),i("h4",{attrs:{id:"전환-중지"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#전환-중지"}},[t._v("#")]),t._v(" 전환 중지")]),t._v(" "),i("p",[t._v("It’s important to know what to expect when you revert a transition command "),i("em",[t._v("during")]),t._v(" a transition.")]),t._v(" "),i("p",[t._v("When transitioning from "),i("strong",[t._v("multirotor to fixed-wing")]),t._v(" (transition switch is on/fixed-wing) then reverting the switch back (off/multirotor position) "),i("em",[t._v("before")]),t._v(" the transition happens it will immediately return to multirotor mode.")]),t._v(" "),i("p",[t._v("When transitioning from "),i("strong",[t._v("fixed-wing to multirotor")]),t._v(" for this type of VTOL the switch is immediate so there isn’t really a backing out option here, unlike for tilt rotor VTOLs. If you want it to go back into fixed-wing you will need to go through the full transition. If it’s still travelling fast this should happen quickly.")]),t._v(" "),i("h3",{attrs:{id:"지원"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#지원"}},[t._v("#")]),t._v(" 지원")]),t._v(" "),i("p",[t._v("If you have any questions regarding your VTOL conversion or configuration please see "),i("a",{attrs:{href:"https://discuss.px4.io/c/px4/vtol",target:"_blank",rel:"noopener noreferrer"}},[t._v("discuss.px4.io/c/px4/vtol"),i("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=r.exports}}]);