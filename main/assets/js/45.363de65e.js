(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1349:function(t,s,a){t.exports=a.p+"assets/media/1_startup_tone.0ccaeec9.mp3"},1350:function(t,s,a){t.exports=a.p+"assets/media/16_make_fs.c8bb124e.mp3"},1351:function(t,s,a){t.exports=a.p+"assets/media/17_format_failed.cf47ae6e.mp3"},1352:function(t,s,a){t.exports=a.p+"assets/media/18_program_px4io.5a68a888.mp3"},1353:function(t,s,a){t.exports=a.p+"assets/media/19_program_px4io_success.898f5c0b.mp3"},1354:function(t,s,a){t.exports=a.p+"assets/media/20_program_px4io_fail.89749277.mp3"},1355:function(t,s,a){t.exports=a.p+"assets/media/3_notify_positive_tone.406154e9.mp3"},1356:function(t,s,a){t.exports=a.p+"assets/media/4_notify_neutral_tone.86353d53.mp3"},1357:function(t,s,a){t.exports=a.p+"assets/media/5_notify_negative_tone.cc788397.mp3"},1358:function(t,s,a){t.exports=a.p+"assets/media/6_arming_warning.cf27f57f.mp3"},1359:function(t,s,a){t.exports=a.p+"assets/media/10_arming_failure_tune.755f3d6e.mp3"},1360:function(t,s,a){t.exports=a.p+"assets/media/7_battery_warning_slow.a804958e.mp3"},1361:function(t,s,a){t.exports=a.p+"assets/media/8_battery_warning_fast.da0e8a39.mp3"},1362:function(t,s,a){t.exports=a.p+"assets/media/9_gps_warning_slow.f9b36b31.mp3"},1363:function(t,s,a){t.exports=a.p+"assets/media/11_parachute_release.71624fb6.mp3"},1364:function(t,s,a){t.exports=a.p+"assets/media/14_single_beep.66b57ba2.mp3"},1365:function(t,s,a){t.exports=a.p+"assets/media/15_home_set_tune.bb49c619.mp3"},1366:function(t,s,a){t.exports=a.p+"assets/media/power_off_tune.217a0e74.mp3"},3032:function(t,s,a){"use strict";a.r(s);var r=a(19),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"소리-설명-pixhawk-시리즈"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#소리-설명-pixhawk-시리즈"}},[t._v("#")]),t._v(" 소리 설명 (Pixhawk 시리즈)")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v(" Pixhawk 비행 콘트롤러 시리즈")]),t._v("는 가청 음향과 "),r("RouterLink",{attrs:{to:"/ko/getting_started/led_meanings.html"}},[t._v("LED")]),t._v("를 사용하여 기체 상태와 이벤트(예 : 시동 성공 및 실패, 배터리 부족 등)들을 표시합니다.")],1),t._v(" "),r("p",[t._v("표준 사운드 세트는 다음과 같습니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("strong",[t._v("개발자:")]),t._v(" 음향은 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("/lib/tunes/tune_definition.desc "),r("OutboundLink")],1),t._v("에 정의되어 있으며 "),r("RouterLink",{attrs:{to:"/ko/modules/modules_system.html#tune-control"}},[t._v("tune_control")]),t._v(" 모듈을 사용하여 테스트 할 수 있습니다. You can search for tune use using the string "),r("code",[t._v("TUNE_ID_name")]),t._v("(e.g. `TUNE_ID_PARACHUTE_RELEASE)")],1)]),t._v(" "),r("h2",{attrs:{id:"부팅-시작"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#부팅-시작"}},[t._v("#")]),t._v(" 부팅 / 시작")]),t._v(" "),r("p",[t._v("부팅중에 재생되는 톤들입니다.\n")]),t._v(" "),r("h4",{attrs:{id:"시작-톤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#시작-톤"}},[t._v("#")]),t._v(" 시작 톤")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1349),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("MicroSD 카드가 마운트 되었습니다.")])]),t._v(" "),r("h4",{attrs:{id:"에러-톤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#에러-톤"}},[t._v("#")]),t._v(" 에러 톤")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(436),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("중대 결함으로 인하여 시스템이 재부팅되었습니다.")]),t._v(" "),r("li",[t._v("PX4IO를 사용하도록 시스템이 설정되었지만 IO가 없습니다.")]),t._v(" "),r("li",[t._v("UAVCAN이 활성화되었지만 드라이버를 시작할 수 없습니다.")]),t._v(" "),r("li",[t._v("SITL/HITL이 활성화되었지만 "),r("em",[t._v("pwm_out_sim")]),t._v(" 드라이버를 시작할 수 없습니다.")]),t._v(" "),r("li",[t._v("FMU 시작에 실패했습니다.")])]),t._v(" "),r("h4",{attrs:{id:"파일-시스템-만들기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#파일-시스템-만들기"}},[t._v("#")]),t._v(" 파일 시스템 만들기")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1350),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("SD 카드 포맷하기")]),t._v(" "),r("li",[t._v("마운트 실패 (포맷이 성공하면 부팅 시퀀스가 다시 마운트를 시도합니다).")]),t._v(" "),r("li",[t._v("MicroSD 카드가 없습니다.")])]),t._v(" "),r("h4",{attrs:{id:"포맷-실패"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#포맷-실패"}},[t._v("#")]),t._v(" 포맷 실패")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1351),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("MicroSD 카드 포맷에 실패했습니다(이전 카드 마운트 시도 후).")])]),t._v(" "),r("h4",{attrs:{id:"프로그램-px4io"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#프로그램-px4io"}},[t._v("#")]),t._v(" 프로그램 PX4IO")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1352),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("PX4IO 프로그래밍을 시작합니다.")])]),t._v(" "),r("h4",{attrs:{id:"프로그램-px4io-성공"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#프로그램-px4io-성공"}},[t._v("#")]),t._v(" 프로그램 PX4IO 성공")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1353),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("PX4IO 프로그래밍이 성공했습니다.")])]),t._v(" "),r("h4",{attrs:{id:"프로그램-px4io-실패"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#프로그램-px4io-실패"}},[t._v("#")]),t._v(" 프로그램 PX4IO 실패")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1354),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("PX4IO 프로그래밍에 실패했습니다.")]),t._v(" "),r("li",[t._v("PX4IO를 시작할 수 없습니다.")]),t._v(" "),r("li",[t._v("AUX 믹서를 찾을 수 없습니다.")])]),t._v(" "),r("h2",{attrs:{id:"운영"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#운영"}},[t._v("#")]),t._v(" 운영")]),t._v(" "),r("p",[t._v("정상 작동시에 발생하는 톤들입니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"error_tune_operational"}})]),t._v(" "),r("h4",{attrs:{id:"에러-톤-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#에러-톤-2"}},[t._v("#")]),t._v(" 에러 톤")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(436),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("원격 조종기 연결 유실")])]),t._v(" "),r("h4",{attrs:{id:"긍정-음향-알림"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#긍정-음향-알림"}},[t._v("#")]),t._v(" 긍정 음향 알림")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1355),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("보정 성공")]),t._v(" "),r("li",[t._v("모드 변경 성공")]),t._v(" "),r("li",[t._v("명령이 접수되었습니다 (예 : MAVLink 명령 프로토콜에서).")]),t._v(" "),r("li",[t._v("안전 스위치를 끕니다 (차량 시동 가능).")])]),t._v(" "),r("h4",{attrs:{id:"중립-톤-알림"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#중립-톤-알림"}},[t._v("#")]),t._v(" 중립 톤 알림")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1356),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("임무가 유효하며 경고는 없습니다.")]),t._v(" "),r("li",[t._v("대기 속도 보정: 더 많은 공기 압력을 공급하거나 보정이 완료되었습니다.")]),t._v(" "),r("li",[t._v("안전 스위치 켜짐 / 꺼짐 (안전하게 차량 접근 가능).")])]),t._v(" "),r("h4",{attrs:{id:"부정-톤-알림"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#부정-톤-알림"}},[t._v("#")]),t._v(" 부정 톤 알림")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1357),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("보정 실패")]),t._v(" "),r("li",[t._v("보정 이미 완료")]),t._v(" "),r("li",[t._v("임무가 완전하지 않음.")]),t._v(" "),r("li",[t._v("명령이 거부, 실패, 일시적으로 거부되었습니다 (예 : MAVLink 명령 프로토콜에서).")]),t._v(" "),r("li",[t._v("시동/시동 해제가 거부되었습니다 (예 : 비행 전 점검 실패, 안전이 비활성화되지 않음, 시스템이 수동 모드가 아님).")]),t._v(" "),r("li",[t._v("모드 전환 거부")])]),t._v(" "),r("h4",{attrs:{id:"시동-경고"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#시동-경고"}},[t._v("#")]),t._v(" 시동 경고")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1358),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("기체의 시동이 완료되었습니다.")])]),t._v(" "),r("h4",{attrs:{id:"시동-실패음"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#시동-실패음"}},[t._v("#")]),t._v(" 시동 실패음")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1359),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("시동 실패")])]),t._v(" "),r("h4",{attrs:{id:"배터리-경고음"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#배터리-경고음"}},[t._v("#")]),t._v(" 배터리 경고음")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1360),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("배터리 부족 경고 ("),r("RouterLink",{attrs:{to:"/ko/config/safety.html#low-battery-failsafe"}},[t._v("사고 방지")]),t._v(").")],1)]),t._v(" "),r("h4",{attrs:{id:"배터리-심각-경고음"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#배터리-심각-경고음"}},[t._v("#")]),t._v(" 배터리 심각 경고음")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1361),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("배터리가 매우 부족("),r("RouterLink",{attrs:{to:"/ko/config/safety.html#low-battery-failsafe"}},[t._v("사고 방지")]),t._v(").")],1)]),t._v(" "),r("h4",{attrs:{id:"느린-gps-경고"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#느린-gps-경고"}},[t._v("#")]),t._v(" 느린 GPS 경고")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1362),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("h4",{attrs:{id:"낙하산-방출"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#낙하산-방출"}},[t._v("#")]),t._v(" 낙하산 방출")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1363),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("낙하산이 펼쳤졌음.")])]),t._v(" "),r("h4",{attrs:{id:"단일-경고음"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#단일-경고음"}},[t._v("#")]),t._v(" 단일 경고음")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1364),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("자력계/나침반 보정 : 차량 회전을 시작하도록 사용자에게 알립니다.")])]),t._v(" "),r("h4",{attrs:{id:"홈-지정-음"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#홈-지정-음"}},[t._v("#")]),t._v(" 홈 지정 음")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1365),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("홈 위치가 초기화되었습니다 (처음에만).")])]),t._v(" "),r("h4",{attrs:{id:"전원-꺼짐-음"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#전원-꺼짐-음"}},[t._v("#")]),t._v(" 전원 꺼짐 음")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1366),type:"audio/mpeg"}}),t._v("\n브라우저가 오디오 기능을 지원하지 않습니다. \n")]),t._v(" "),r("ul",[r("li",[t._v("차량 전원 꺼짐.")])])])}),[],!1,null,null,null);s.default=e.exports},436:function(t,s,a){t.exports=a.p+"assets/media/2_error_tune.328eda9c.mp3"}}]);