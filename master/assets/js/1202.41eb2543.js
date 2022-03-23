(window.webpackJsonp=window.webpackJsonp||[]).push([[1202],{2257:function(t,e,a){"use strict";a.r(e);var r=a(19),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"고정익-튜닝-가이드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고정익-튜닝-가이드"}},[t._v("#")]),t._v(" 고정익 튜닝 가이드")]),t._v(" "),a("p",[t._v("This guide explains how to manually tune the fixed wing PID loop. It is intended for advanced users / experts, as incorrect PID tuning may crash your aircraft.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/config/autotune.html"}},[t._v("Autotune")]),t._v(" is recommended for most users, as it is far faster, easier and provides good tuning for most frames. Manual tuning is recommended for frames where autotuning does not work, or where fine-tuning is essential.")],1)]),t._v(" "),a("h2",{attrs:{id:"preconditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),a("ul",[a("li",[t._v("Trims must be configured first (before PID turning). The "),a("RouterLink",{attrs:{to:"/ko/config_fw/trimming_guide_fixedwing.html"}},[t._v("Fixed-Wing Trimming Guide")]),t._v(" explains how.")],1),t._v(" "),a("li",[t._v("Incorrectly set gains during tuning can make attitude control unstable. A pilot tuning gains should therefore be able to fly and land the plane in "),a("RouterLink",{attrs:{to:"/ko/flight_modes/manual_fw.html"}},[t._v("manual")]),t._v(" (override) control.")],1),t._v(" "),a("li",[t._v("Excessive gains (and rapid servo motion) can violate the maximum forces of your airframe - increase gains carefully.")]),t._v(" "),a("li",[t._v("Roll and pitch tuning follow the same sequence. The only difference is that pitch is more sensitive to trim offsets, so "),a("RouterLink",{attrs:{to:"/ko/config_fw/trimming_guide_fixedwing.html"}},[t._v("trimming")]),t._v(" has to be done carefully and integrator gains need more attention to compensate this.")],1)]),t._v(" "),a("h2",{attrs:{id:"establishing-the-airframe-baseline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#establishing-the-airframe-baseline"}},[t._v("#")]),t._v(" Establishing the Airframe Baseline")]),t._v(" "),a("p",[t._v("If a pilot capable of manual flight is available, its best to establish a few core system properties on a manual trial. To do this, fly these maneuvers. Even if you can't note all the quantities immediately on paper, the log file will be very useful for later tuning.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("All these quantities will be automatically logged. You only need to take notes if you want to directly move on to tuning without looking at the log files.")]),t._v(" "),a("ul",[a("li",[t._v("편리한 속도로 수평 비행하십시오. 스로틀 스틱 위치와 대기 속도를 기록하십시오 (예 : 70 % → 0.7 스로틀, 15m/s 대기 속도).")]),t._v(" "),a("li",[t._v("최대 스로틀과 10-30 초 동안 충분한 대기 속도로 상승하십시오 (예 : 12m/s 대기 속도, 30초에 100m 상승).")]),t._v(" "),a("li",[t._v("스로틀이 0이고 적절한 대기 속도로 10-30초 동안 하강합니다 (예 : 18m/s 대기 속도, 30초에 80m 하강).")]),t._v(" "),a("li",[t._v("60도 롤이 될 때까지 전체 롤 스틱을 사용하여 오른쪽으로 강하게 쌓은 다음 반대쪽에서 60도까지 전체 롤 스틱으로 왼쪽으로 강하게 저장합니다.")]),t._v(" "),a("li",[t._v("45도를 높이고 45도를 낮춥니다.")])])]),t._v(" "),a("p",[t._v("This guide will use these quantities to set some of the controller gains later on.")]),t._v(" "),a("h2",{attrs:{id:"tune-roll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tune-roll"}},[t._v("#")]),t._v(" Tune Roll")]),t._v(" "),a("p",[t._v("Tune first the roll axis, then pitch. The roll axis is safer as an incorrect tuning leads only to motion, but not a loss of altitude.")]),t._v(" "),a("h3",{attrs:{id:"피드포워드-게인-조정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#피드포워드-게인-조정"}},[t._v("#")]),t._v(" 피드포워드 게인 조정")]),t._v(" "),a("p",[t._v("To tune this gain, set the other gains to zero.")]),t._v(" "),a("h4",{attrs:{id:"_0으로-설정하는-게인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0으로-설정하는-게인"}},[t._v("#")]),t._v(" 0으로 설정하는 게인")]),t._v(" "),a("ul",[a("li",[t._v("FW_RR_I = 0")]),t._v(" "),a("li",[t._v("FW_RR_P = 0")])]),t._v(" "),a("h4",{attrs:{id:"튜닝-대상-게인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#튜닝-대상-게인"}},[t._v("#")]),t._v(" 튜닝 대상 게인")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_RR_FF"}},[t._v("FW_RR_FF")]),t._v(" - 0.4에서 시작합니다. 비행기가 만족스럽게 구르고 설정 값에 도달시까지 이 값을 늘립니다 (매번 두 배로 증가). 프로세스가 끝나면 게인을 20% 낮춥니 다.")],1)]),t._v(" "),a("h3",{attrs:{id:"속도-게인-조정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#속도-게인-조정"}},[t._v("#")]),t._v(" 속도 게인 조정")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_RR_P"}},[t._v("FW_RR_P")]),t._v(" - 0.06 값에서 시작합니다. 시스템이 흔들리거나 트위치를 시작할 때까지 이 값을 늘립니다 (매번 두 배로 증가). 그런 다음 게인을 50% 줄입니다.")],1)]),t._v(" "),a("h3",{attrs:{id:"적분기-게인으로-트림-오프셋-조정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#적분기-게인으로-트림-오프셋-조정"}},[t._v("#")]),t._v(" 적분기 게인으로 트림 오프셋 조정")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_RR_I"}},[t._v("FW_RR_I")]),t._v(" - 0.01의 값에서 시작합니다. 명령된 롤 값과 실제 롤 값 사이에 오프셋이 없을 때까지이 값을 늘립니다 (매번 두 배로 증가) (로그 파일을 확인해야 할 가능성이 높음).")],1)]),t._v(" "),a("h2",{attrs:{id:"tune-pitch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tune-pitch"}},[t._v("#")]),t._v(" Tune Pitch")]),t._v(" "),a("p",[t._v("The pitch axis might need more integrator gain and a correctly set pitch offset.")]),t._v(" "),a("h3",{attrs:{id:"피드포워드-게인-조정-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#피드포워드-게인-조정-2"}},[t._v("#")]),t._v(" 피드포워드 게인 조정")]),t._v(" "),a("p",[t._v("To tune this gain, set the other gains to zero.")]),t._v(" "),a("h4",{attrs:{id:"_0으로-설정하는-게인-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0으로-설정하는-게인-2"}},[t._v("#")]),t._v(" 0으로 설정하는 게인")]),t._v(" "),a("ul",[a("li",[t._v("FW_PR_I = 0")]),t._v(" "),a("li",[t._v("FW_PR_P = 0")])]),t._v(" "),a("h4",{attrs:{id:"튜닝-대상-게인-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#튜닝-대상-게인-2"}},[t._v("#")]),t._v(" 튜닝 대상 게인")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_PR_FF"}},[t._v("FW_PR_FF")]),t._v(" - 0.4 값에서 시작합니다. 평면 피치가 만족스럽고 설정 값에 도달시 까지이 값을 늘립니다 (매번 두 배로 증가). 프로세스가 끝나면 게인을 20% 낮춥니 다.")],1)]),t._v(" "),a("h3",{attrs:{id:"속도-게인-조정-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#속도-게인-조정-2"}},[t._v("#")]),t._v(" 속도 게인 조정")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_PR_P"}},[t._v("FW_PR_P")]),t._v(" - 0.04의 값에서 시작합니다. 시스템이 흔들리거나 트위치를 시작할 때까지 이 값을 늘립니다 (매번 두 배로 증가). 그런 다음 게인을 50% 줄입니다.")],1)]),t._v(" "),a("h3",{attrs:{id:"적분기-게인으로-트림-오프셋-조정-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#적분기-게인으로-트림-오프셋-조정-2"}},[t._v("#")]),t._v(" 적분기 게인으로 트림 오프셋 조정")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_PR_I"}},[t._v("FW_PR_I")]),t._v(" - 0.01의 값에서 시작합니다. 명령된 피치 값과 실제 피치 값 사이에 오프셋이 없을 때까지이 값을 늘립니다 (매번 두 배로 증가) (로그 파일을 확인해야 할 가능성이 높음).")],1)]),t._v(" "),a("h2",{attrs:{id:"adjusting-the-time-constant-of-the-outer-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adjusting-the-time-constant-of-the-outer-loop"}},[t._v("#")]),t._v(" Adjusting the Time Constant of the Outer Loop")]),t._v(" "),a("p",[t._v("The overall softness / hardness of the control loop can be adjusted by the time constant. The default of 0.5 seconds should be fine for normal fixed-wing setups and usually does not require adjustment.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_P_TC"}},[t._v("FW_P_TC")]),t._v("-기본값 0.5 초로 설정하고, 피치 응답을 부드럽게하려면 증가시키고, 응답을 둔화하려면 감소시킵니다.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_R_TC"}},[t._v("FW_R_TC")]),t._v(" -기본값 0.5 초로 설정하고, 롤 응답을 부드럽게하려면 증가시키고, 응답을 둔화하려면 감소시킵니다.")],1)]),t._v(" "),a("h2",{attrs:{id:"other-tuning-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-tuning-parameters"}},[t._v("#")]),t._v(" Other Tuning Parameters")]),t._v(" "),a("p",[t._v("The most important parameters are covered in this guide. Additional tuning parameters are documented in the "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html"}},[t._v("Parameter Reference")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=i.exports}}]);