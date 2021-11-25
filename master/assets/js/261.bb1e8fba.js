(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{2200:function(_,t,v){"use strict";v.r(t);var e=v(19),r=Object(e.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"mc-필터-튜닝과-제어-지연"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mc-필터-튜닝과-제어-지연"}},[_._v("#")]),_._v(" MC 필터 튜닝과 제어 지연")]),_._v(" "),e("p",[_._v("필터를 사용하여 비행 성능에 영향을 미치는 "),e("a",{attrs:{href:"#control-latency"}},[_._v("제어 지연")]),_._v("과 비행 성능과 모터 상태에 영향을 미치는 소음 필터링을 절충할 수 있습니다.")]),_._v(" "),e("p",[_._v("제어 지연과 PX4 필터 튜닝에 관한 개요를 제공합니다.")]),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),e("p",[_._v("필터 튜닝전에 "),e("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter_basic.html"}},[_._v("기본 MC PID 튜닝")]),_._v("에서 첫 번째 패스를 수행하여야 합니다. 차량은 저 조율 ("),e("strong",[_._v("P")]),_._v(" 및 "),e("strong",[_._v("D")]),_._v(" 게인을 너무 낮게 설정해야 함)하여 컨트롤러에서 소음으로 해석될 수있는 진동을 제거하여야 합니다 (기본 이득이 충분할 수 있습니다).")],1)]),_._v(" "),e("h2",{attrs:{id:"제어-지연"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#제어-지연"}},[_._v("#")]),_._v(" 제어 지연")]),_._v(" "),e("p",[e("em",[_._v("제어 지연")]),_._v("은 모터가 변화에 반응할 때까지 기체의 물리적 장애로 인한 지연을 의미합니다.")]),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),e("p",[_._v("지연 시간을 줄이면 "),e("strong",[_._v("P")]),_._v(" 증가율을 높일 수 있으므로 비행 성능이 향상됩니다. 1/1000초의 지연 시간도 큰 영향을 미칠 수 있습니다.")])]),_._v(" "),e("p",[_._v("다음의 요소들은 제어 지연에 영향을 끼칩니다.")]),_._v(" "),e("ul",[e("li",[_._v("부드러운 기체 또는 부드러운 진동 장착은 대기 시간을 증가시킵니다 (필터 역할을 함).")]),_._v(" "),e("li",[_._v("소프트웨어 및 센서 칩의 저역 통과 필터는 대기 시간 증가분을 상쇄하여 노이즈 필터링을 원활하게합니다.")]),_._v(" "),e("li",[_._v("PX4 소프트웨어 내부 : 센서 신호를 드라이버에서 읽은 다음 컨트롤러를 통해 출력 드라이버로 전달하여야 합니다.")]),_._v(" "),e("li",[_._v("최대 자이로 게시 속도 ("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#IMU_GYRO_RATEMAX"}},[_._v("IMU_GYRO_RATEMAX")]),_._v("로 설정됨). 속도가 높을수록 지연 시간이 줄어들지만 증간된 연산량으로 인하여 다른 프로세스를 방해할 수 있습니다. 4kHz 이상은 STM32H7 프로세서 이상의 컨트롤러에서만 권장됩니다 (2kHz 값은 성능이 낮은 프로세서의 최대치입니다).")],1),_._v(" "),e("li",[_._v("IO 칩 (MAIN 핀)은 AUX 핀 사용에 비해 약 5.4ms의 지연 시간을 추가합니다 ("),e("em",[_._v("Pixracer")]),_._v(" 또는 "),e("em",[_._v("Omnibus F4")]),_._v("에는 적용되지 않지만 Pixhawk에는 적용됨) IO 지연을 방지하려면 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_USE_IO"}},[_._v("SYS_USE_IO")]),_._v("를 비활성화하고 모터를 AUX 핀에 대신 연결하십시오.")],1),_._v(" "),e("li",[_._v("PWM 출력 신호 : 대기 시간을 줄이기 위하여 "),e("RouterLink",{attrs:{to:"/ko/config_mc/.../en/peripherals/dshot.html"}},[_._v("Dshot")]),_._v(" 또는 One-Shot ("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_RATE"}},[_._v("PWM_AUX_RATE = 0")]),_._v(" 또는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_RATE"}},[_._v("PWM_MAIN_RATE = 0")]),_._v(")을 활성화합니다.")],1)]),_._v(" "),e("p",[_._v("아래에서는 저역 통과 필터의 효과에 대하여 설명합니다.")]),_._v(" "),e("h2",{attrs:{id:"필터"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#필터"}},[_._v("#")]),_._v(" 필터")]),_._v(" "),e("p",[_._v("다음은 PX4 컨트롤러의 필터링 파이프 라인입니다.")]),_._v(" "),e("ul",[e("li",[_._v("자이로 센서용 온칩 DLPF. 비활성화가 가능한 모든 칩에서 비활성화됩니다 (그렇지 않은 경우, 차단 주파수가 칩의 최고 수준으로 설정됨).")]),_._v(" "),e("li",[_._v("로터 블레이드 통과 주파수의 고조파와 같은 협대역 노이즈를 필터링을 위한 자이로 센서 데이터의 노치 필터입니다. 이 필터는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#IMU_GYRO_NF_BW"}},[_._v("IMU_GYRO_NF_BW")]),_._v(" 및 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#IMU_GYRO_NF_FREQ"}},[_._v("IMU_GYRO_NF_FREQ")]),_._v("를 사용하여 설정할 수 있습니다.")],1),_._v(" "),e("li",[_._v("자이로 센서 데이터에 대한 저주파 통과 필터. "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#IMU_GYRO_CUTOFF"}},[_._v("IMU_GYRO_CUTOFF")]),_._v(" 매개변수로 설정할 수 있습니다. :::note 샘플링과 필터링은 항상 전체 원시 센서 속도(일반적으로 IMU에 따라 8kHz)에서 수행됩니다.\n:::")],1),_._v(" "),e("li",[_._v("D-term에 대한 별도의 저역 통과 필터. D-term은 노이즈에 가장 취약하지만 대기 시간이 약간 증가해도 성능에 나쁜 영향을 주지 않습니다. 이러한 이유로 D-term에는 별도로 구성 가능한 저역 통과 필터 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#IMU_DGYRO_CUTOFF"}},[_._v("IMU_DGYRO_CUTOFF")]),_._v("가 있습니다.")],1),_._v(" "),e("li",[_._v("모터 출력의 슬루 레이트 필터 ("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MOT_SLEW_MAX"}},[_._v("MOT_SLEW_MAX")]),_._v("). 일반적으로 사용되지 않습니다.")],1)]),_._v(" "),e("p",[_._v("제어 지연을 줄이기 위해 저역 통과 필터의 차단 주파수를 높이려고 합니다. "),e("code",[_._v("IMU_GYRO_CUTOFF")]),_._v(" 증가로 인한 지연 시간에 미치는 영향은 대략 다음과 같습니다.")]),_._v(" "),e("table",[e("thead",[e("tr",[e("th",[_._v("컷오프 (Hz)")]),_._v(" "),e("th",[_._v("지연(대략). (ms)")])])]),_._v(" "),e("tbody",[e("tr",[e("td",[_._v("30")]),_._v(" "),e("td",[_._v("8")])]),_._v(" "),e("tr",[e("td",[_._v("60")]),_._v(" "),e("td",[_._v("3.8")])]),_._v(" "),e("tr",[e("td",[_._v("120")]),_._v(" "),e("td",[_._v("1.9")])])])]),_._v(" "),e("p",[_._v("그러나 "),e("code",[_._v("IMU_GYRO_CUTOFF")]),_._v("를 증가시키면 모터에 공급되는 신호의 노이즈도 증가합니다. 모터 소음은 다음과 같은 결과를 가져옵니다.")]),_._v(" "),e("ul",[e("li",[_._v("모터와 ESC는 손상될 정도로 뜨거워 질 수 있습니다.")]),_._v(" "),e("li",[_._v("모터가 계속 속도를 변경하므로 비행 시간이 단축됩니다.")]),_._v(" "),e("li",[_._v("가시적인 임의의 작은 트위치.")])]),_._v(" "),e("p",[_._v("상당한 저주파 노이즈 스파이크가있는 설정 (예 : 로터 블레이드 통과 주파수의 고조파로 인한)은 노치 필터를 사용하여 신호가 저역 통과 필터로 전달되기 전에 신호를 제거하는 것이 좋습니다 (이러한 고조파는 다른 소음원으로 모터에서 비슷한 해로운 영향을 미칩니다). 노치 필터가 없으면이 노이즈가 모터로 전달되는 것을 방지하기 위하여 저역 통과 필터 컷오프를 매우 낮게 설정해야합니다 (대기 시간 증가).")]),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),e("p",[_._v("노치 필터는 하나만 제공됩니다. 하나 이상의 저주파 노이즈 스파이크가 있는 기체는 일반적으로 노치 필터로 첫 번째 스파이크를 청소하며 저역 통과 필터를 사용하여 후속 스파이크를 청소합니다.")])]),_._v(" "),e("p",[_._v("최적의 필터 설정은 기체에 따라 달라집니다. 기본값은 낮은 품질 설정에서도 작동하도록 보수적으로 설정됩니다.")]),_._v(" "),e("h2",{attrs:{id:"필터-튜닝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#필터-튜닝"}},[_._v("#")]),_._v(" 필터 튜닝")]),_._v(" "),e("p",[_._v("먼저 고속 로깅 프로필이 활성화되었는 지 확인하십시오 ("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[_._v("SDLOG_PROFILE")]),_._v(" 매개 변수). 그러면 "),e("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[_._v("Flight Review")]),_._v("가 롤, 피치 및 요 컨트롤에 대한 FFT 플롯을 표시합니다.")],1),_._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),e("ul",[e("li",[_._v("기체의 심한 진동 문제를 필터 튜닝만으로  해결하는 것은 적절하지 않습니다. 기체의 하드웨어 설정을 수정하는 것이 바람직합니다.")]),_._v(" "),e("li",[_._v("PID 게인, 특히 D가 진동으로 나타날 수 있으므로 너무 높게 설정되지 않았는 지 확인하십시오.")])])]),_._v(" "),e("p",[_._v("필터 튜닝은 비행 로그를 검토하는 것이 제일 좋은 방법입니다. 서로 다른 매개 변수를 사용하여 여러 차례 비행후 로그를 분석할 수 있지만, 별도의 로그 파일이 생성되도록 중간에 시동을 꺼야합니다.")]),_._v(" "),e("p",[_._v("비행 기동은 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[_._v("수동/안정화 모드")]),_._v("에서 단순히 모든 방향으로 롤링 및 피칭하고 스로틀 기간을 늘리면서 호버링할 수 있습니다. 전체 시간은 30초를 넘지 않아도 됩니다. 정확한 비교를 위해서 모든 테스트에서 기동이 유사하여야 합니다.")],1),_._v(" "),e("p",[_._v("먼저 낮은 D-term 필터값 ("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#IMU_DGYRO_CUTOFF"}},[_._v("IMU_DGYRO_CUTOFF")]),_._v(" = 30)을 사용하면서 10Hz 단위로 자이로 필터 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#IMU_GYRO_CUTOFF"}},[_._v("IMU_GYRO_CUTOFF")]),_._v("를 조정합니다. 로그를 "),e("a",{attrs:{href:"https://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[_._v("Flight Review"),e("OutboundLink")],1),_._v("에 업로드하여 "),e("em",[_._v("Actuator Controls FFT")]),_._v(" 플롯을 비교합니다. 노이즈가 눈에 띄게 증가하기 전에 차단 주파수를 설정하십시오 (60Hz 주변 및 그 이상의 주파수).")],1),_._v(" "),e("p",[_._v("그런 다음 동일한 방식으로 D-term 필터 ("),e("code",[_._v("IMU_DGYRO_CUTOFF")]),_._v(")를 조정합니다. "),e("code",[_._v("IMU_GYRO_CUTOFF")]),_._v("와 "),e("code",[_._v("IMU_DGYRO_CUTOFF")]),_._v("가 차이가 많이 나면, 성능에 부정적인 영향을 미칠 수 있습니다 (그 차이는 중요합니다. 예 : D = 15, gyro = 80).")]),_._v(" "),e("p",[_._v("다음은 세 가지 다른 "),e("code",[_._v("IMU_DGYRO_CUTOFF")]),_._v(" 필터값 (40Hz, 70Hz, 90Hz)에 대한 예입니다. 90Hz에서는 일반적인 소음이 증가하기 시작하므로 (특히 롤의 경우) 차단 주파수 70Hz가 안전합니다. "),e("img",{attrs:{src:v(665),alt:"IMU_DGYRO_CUTOFF=40"}}),_._v(" "),e("img",{attrs:{src:v(666),alt:"IMU_DGYRO_CUTOFF=70"}}),_._v(" "),e("img",{attrs:{src:v(667),alt:"IMU_DGYRO_CUTOFF=90"}})]),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),e("p",[_._v("y 축 스케일이 다를 수 있으므로 다른 차량간에 플롯을 비교할 수 없습니다. 동일한 기체에서 일관적이며 비행 시간과는 무관합니다.")])]),_._v(" "),e("p",[_._v("아래 다이어그램에 표시된 것과 같이 비행 플롯에 상당한 저주파 스파이크가 나타되는 경우에는 노치 필터를 사용하여 제거할 수 있습니다. 이 경우 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#IMU_GYRO_NF_FREQ"}},[_._v("IMU_GYRO_NF_FREQ = 32")]),_._v(" 및 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#IMU_GYRO_NF_BW"}},[_._v("IMU_GYRO_NF_BW = 5")]),_._v(" 설정을 사용할 수 있습니다 (이 스파이크는 평소보다 좁습니다). 저역 통과 필터와 노치 필터는 독립적으로 조정할 수 있습니다 (즉, 저역 통과 필터를 조정하기 전에 노치 필터를 설정할 필요는 없습니다).")],1),_._v(" "),e("p",[e("img",{attrs:{src:v(668),alt:"IMU_GYRO_NF_FREQ=32 IMU_GYRO_NF_BW=5"}})]),_._v(" "),e("h2",{attrs:{id:"추가-팁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추가-팁"}},[_._v("#")]),_._v(" 추가 팁")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("허용 가능한 지연 시간은 기체 크기와 기대치에 따라 달라집니다. FPV 레이서는 일반적으로 절대 최소 대기 시간 (약 120의 야구장 "),e("code",[_._v("IMU_GYRO_CUTOFF")]),_._v(", 50에서 80의 "),e("code",[_._v("IMU_DGYRO_CUTOFF")]),_._v(")으로 조정합니다. 대형 기체의 지연 시간의 중요성은 작습니다. 약 80의 "),e("code",[_._v("IMU_GYRO_CUTOFF")]),_._v("가 허용될 수 있습니다.")])]),_._v(" "),e("li",[e("p",[_._v("더 높은 "),e("code",[_._v("IMU_GYRO_CUTOFF")]),_._v(" 값 (예 : 100Hz)에서 튜닝을 시작할 수 있으며, 이는 "),e("code",[_._v("IMU_GYRO_CUTOFF")]),_._v("의 기본 튜닝이 매우 낮게 (30Hz) 설정되어 있기 때문에 바람직 할 수 있습니다. 유일한 주의 사항은 위험을 알고 있어야한다는 것입니다.")]),_._v(" "),e("ul",[e("li",[_._v("20 ~ 30 초 이상 비행하지 마십시오")]),_._v(" "),e("li",[_._v("모터가 과열되지 않는 지 확인하십시오.")]),_._v(" "),e("li",[_._v("위의 설명처럼 이상한 소리와 과도한 소음을 체크하십시오.")])])])])])}),[],!1,null,null,null);t.default=r.exports},665:function(_,t,v){_.exports=v.p+"assets/img/actuator_controls_fft_dgyrocutoff_40.40af7ca7.png"},666:function(_,t,v){_.exports=v.p+"assets/img/actuator_controls_fft_dgyrocutoff_70.a879efd6.png"},667:function(_,t,v){_.exports=v.p+"assets/img/actuator_controls_fft_dgyrocutoff_90.e21d7d49.png"},668:function(_,t,v){_.exports=v.p+"assets/img/actuator_controls_fft_gyro_notch_32.669c74bb.png"}}]);