(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1100:function(t,e,o){t.exports=o.p+"assets/img/x500-kit.db716e34.png"},1101:function(t,e,o){t.exports=o.p+"assets/img/x500_v2_whats_inside.45ceda06.png"},1102:function(t,e,o){t.exports=o.p+"assets/img/payload_holder_required_stuff.01f6713c.png"},1103:function(t,e,o){t.exports=o.p+"assets/img/payload_holder_assembled.6da5d19f.png"},1104:function(t,e,o){t.exports=o.p+"assets/img/topplate_holder_stuff.559152d0.png"},1105:function(t,e,o){t.exports=o.p+"assets/img/powerboard-mountbase.573983e6.png"},1106:function(t,e,o){t.exports=o.p+"assets/img/pdb_bottom_plate.ea60102a.png"},1107:function(t,e,o){t.exports=o.p+"assets/img/bottom_plate_holder_final.a62d9250.png"},1108:function(t,e,o){t.exports=o.p+"assets/img/landing_gear_materials.c9218cf3.png"},1109:function(t,e,o){t.exports=o.p+"assets/img/attached_landing_gear.46eadb9e.png"},1110:function(t,e,o){t.exports=o.p+"assets/img/needed_stuff_top_plate.947cb8ea.png"},1111:function(t,e,o){t.exports=o.p+"assets/img/guide_for_arm_mount.afbdf2da.png"},1112:function(t,e,o){t.exports=o.p+"assets/img/finalized_top_plate.4be7bc1f.png"},1113:function(t,e,o){t.exports=o.p+"assets/img/pixhawk5x_stickertapes.fadddda8.png"},1114:function(t,e,o){t.exports=o.p+"assets/img/gps_mount_plate.4099d572.png"},1115:function(t,e,o){t.exports=o.p+"assets/img/finalized_x500v2_kit.2c832220.png"},2692:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"holybro-x500-v2-pixhawk-5x-조립"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#holybro-x500-v2-pixhawk-5x-조립"}},[t._v("#")]),t._v(" Holybro X500 V2 (Pixhawk 5X 조립)")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("Holybro initially supplied this kit with a "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk5x.html"}},[t._v("Pixhawk 5X")]),t._v(", but at time of writing this has been upgraded to a "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk6c.html"}},[t._v("Holybro Pixhawk 6C")]),t._v(". This build log is still relevant as the kit assembly is virtually the same, and likely to remain so as the flight controller is upgraded.")],1)]),t._v(" "),r("p",[t._v("This topic provides full instructions for building the "),r("a",{attrs:{href:"https://holybro.com/collections/x500-kits",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro X500 V2 ARF Kit"),r("OutboundLink")],1),t._v(" and configuring PX4 using "),r("em",[t._v("QGroundControl")]),t._v(".")]),t._v(" "),r("p",[t._v('ARF("거의 비행 준비 완료") 키트는 하드웨어 설정에 많은 시간을 할애하지 않고, 드론 개발에 입문자들이 간편하고 간단한 조립할 수 있습니다. 여기에는 프레임, 모터, ESC, 프로펠러 및 배전반이 포함됩니다.')]),t._v(" "),r("p",[t._v("키트 외에도 비행 콘트롤러, 무선 송신기, GPS 및 RC 콘트롤러가 필요합니다. ARF 키트는 PX4와 호환되는 대부분의 비행 콘트롤러를 지원합니다.")]),t._v(" "),r("h2",{attrs:{id:"주요-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#주요-정보"}},[t._v("#")]),t._v(" 주요 정보")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Kit:")]),t._v(" "),r("a",{attrs:{href:"https://holybro.com/collections/x500-kits",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro X500 V2 ARF Kit"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("strong",[t._v("비행 콘트롤러:")]),t._v(" "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk5x.html"}},[t._v("Pixhawk 5X")])],1),t._v(" "),r("li",[r("strong",[t._v("조립 시간(약):")]),t._v(" 55분(프레임 25분, 자동조종장치 설치/설성은 30분)")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(1100),alt:"전체 X500 V2 키트"}})]),t._v(" "),r("h2",{attrs:{id:"부품-명세서"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#부품-명세서"}},[t._v("#")]),t._v(" 부품 명세서")]),t._v(" "),r("p",[t._v("The Holybro "),r("a",{attrs:{href:"https://holybro.com/collections/x500-kits",target:"_blank",rel:"noopener noreferrer"}},[t._v("X500 V2 Kit"),r("OutboundLink")],1),t._v(" includes almost all the required components:")]),t._v(" "),r("ul",[r("li",[t._v("X500V2 프레임 키트\n"),r("ul",[r("li",[t._v("바디 - 풀 카본 파이버 탑 & 바닥판(144 x 144mm, 두께 2mm)")]),t._v(" "),r("li",[t._v("암 - 고강도 & 초경량 16mm 탄소 섬유 튜브")]),t._v(" "),r("li",[t._v("랜딩 기어 - 16mm & 10mm 직경의 탄소 섬유 튜브")]),t._v(" "),r("li",[t._v("플랫폼 보드 - GPS & 인기있는 보조 컴퓨터")]),t._v(" "),r("li",[t._v("이중 10mm Ø 로드 x 250mm 롱 레일 마운팅 시스템")]),t._v(" "),r("li",[t._v("2개의 배터리 스트랩이 있는 배터리 마운트")]),t._v(" "),r("li",[t._v("설치용 수공구")])])]),t._v(" "),r("li",[t._v("Holybro Motors - 2216 KV880 x6 (superseded - check "),r("a",{attrs:{href:"https://holybro.com/products/spare-parts-x500-v2-kit",target:"_blank",rel:"noopener noreferrer"}},[t._v("spare parts list"),r("OutboundLink")],1),t._v(" for current version).")]),t._v(" "),r("li",[t._v("Holybro BLHeli S ESC 20A x4 (superseded - check "),r("a",{attrs:{href:"https://holybro.com/products/spare-parts-x500-v2-kit",target:"_blank",rel:"noopener noreferrer"}},[t._v("spare parts list"),r("OutboundLink")],1),t._v(" for current version).")]),t._v(" "),r("li",[t._v("Propellers - 1045 x4 (superseded - check "),r("a",{attrs:{href:"https://holybro.com/products/spare-parts-x500-v2-kit",target:"_blank",rel:"noopener noreferrer"}},[t._v("spare parts list"),r("OutboundLink")],1),t._v(" for current version).")]),t._v(" "),r("li",[t._v("배전반 – 배터리 및 배터리용 XT60 플러그 ESC &용 XT30 플러그 주변기기")]),t._v(" "),r("li",[t._v("카메라 마운트(선택 사항 및 3D 파일은 "),r("a",{attrs:{href:"http://www.holybro.com/3D_Print/Holybro_X500_V2_3D%20Print.rar",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),r("OutboundLink")],1),t._v("에서 다운로드할 수 있음)")])]),t._v(" "),r("p",[t._v("Other parts in this build("),r("strong",[t._v("Not included in the ARF kit")]),t._v("):")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk5x.html"}},[t._v("Pixhawk 5X 자동조종장치")])],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://holybro.com/products/m8n-gps",target:"_blank",rel:"noopener noreferrer"}},[t._v("M8N GPS"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/power_module/holybro_pm02d.html"}},[t._v("전원 모듈 - PM02D")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/telemetry/holybro_sik_radio.html"}},[t._v("433/915 MHz 무선 텔레메트리")])],1)]),t._v(" "),r("p",[t._v("Additionally you will need a battery (Holybro recommends a 4S 5000mAh) and receiver ("),r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("compatible radio system")]),t._v(") if you want to control the drone manually.")],1),t._v(" "),r("h2",{attrs:{id:"키트-하드웨어"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#키트-하드웨어"}},[t._v("#")]),t._v(" 키트 하드웨어")]),t._v(" "),r("p",[t._v("This section lists all hardware for the frame and the autopilot installation.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("항목")]),t._v(" "),r("th",[t._v("설명")]),t._v(" "),r("th",[t._v("수량")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("하판")]),t._v(" "),r("td",[t._v("탄소 섬유(두께 2mm)")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("상판")]),t._v(" "),r("td",[t._v("탄소 섬유(두께 1.5mm)")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Arm")]),t._v(" "),r("td",[t._v("탄소 섬유 튜브(모터 장착 조립)")]),t._v(" "),r("td",[t._v("4")])]),t._v(" "),r("tr",[r("td",[t._v("착륙 기어 - 수직 막대")]),t._v(" "),r("td",[t._v("탄소 섬유 튜브 + 엔지니어링 플라스틱")]),t._v(" "),r("td",[t._v("2")])]),t._v(" "),r("tr",[r("td",[t._v("착륙 기어 - 크로스바")]),t._v(" "),r("td",[t._v("탄소 섬유 튜브 + 엔지니어링 플라스틱 + 폼")]),t._v(" "),r("td",[t._v("2")])]),t._v(" "),r("tr",[r("td",[t._v("장착 레일")]),t._v(" "),r("td",[t._v("직경 : 10mm, 길이 : 250mm")]),t._v(" "),r("td",[t._v("2")])]),t._v(" "),r("tr",[r("td",[t._v("배터리 장착 보드")]),t._v(" "),r("td",[t._v("두께: 2mm")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("배터리 패드")]),t._v(" "),r("td",[t._v("3mm 실리콘 시트 검정")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("플팻폼 보드")]),t._v(" "),r("td",[t._v("두께: 2mm")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("옷걸이 & 고무 링 개스킷")]),t._v(" "),r("td",[t._v("내부 구멍 직경 : 10mm 검정")]),t._v(" "),r("td",[t._v("8")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:o(1101),alt:"X500V2 ARF Kit Full Package Contents"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 1")]),t._v(": X500 V2 ARF Kit what's inside")]),t._v(" "),r("h3",{attrs:{id:"전자부품"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#전자부품"}},[t._v("#")]),t._v(" 전자부품")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("품목 설명")]),t._v(" "),r("th",[t._v("수량")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Pixhawk5x & 다양한 케이블")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("M8N GPS 모듈")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("전원 모듈 PM02D(사전 납땜된 ESC 전원 케이블 포함)")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("모터스 2216 KV880(V2 업데이트)")]),t._v(" "),r("td",[t._v("4")])]),t._v(" "),r("tr",[r("td",[t._v("Holybro BLHeli S ESC 20A x4")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Holybro BLHeli S ESC 20A x4")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("433 MHz / 915 MHz "),r("RouterLink",{attrs:{to:"/ko/telemetry/holybro_sik_radio.html"}},[t._v("Holybro Telemetry Radio")])],1),t._v(" "),r("td",[t._v("1")])])])]),t._v(" "),r("h3",{attrs:{id:"필요-공구"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#필요-공구"}},[t._v("#")]),t._v(" 필요 공구")]),t._v(" "),r("p",[t._v("Tools are included to do the assembly, however you may need:")]),t._v(" "),r("ul",[r("li",[t._v("전선 커터")]),t._v(" "),r("li",[t._v("정밀 트위저")])]),t._v(" "),r("h2",{attrs:{id:"조립"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#조립"}},[t._v("#")]),t._v(" 조립")]),t._v(" "),r("p",[t._v("Estimate time to assemble is 55 min (25 minutes for frame, 30 minutes for autopilot installation/configuration)")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Start by assembling the payload & battery holder. Push the rubbers into grippers (Do not use sharp items to push them in!). Next, pass the holders through the holder bars with the battery holder bases as Figure 3.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1102),alt:"Landing Figure 1: Components"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 2")]),t._v(": Payload holder components")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1103),alt:"Landing Figure 2: Assembled"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 3")]),t._v(": Payload holder assembled")])]),t._v(" "),r("li",[r("p",[t._v("The next is to go for attaching the bottom plate to the payload holder.")]),t._v(" "),r("p",[t._v("You will need the parts as shown in Figure 4. Then mount the base for power distribution board using nylon nuts as Figure 5. Finally using 8 hex screws you can join the bottom plate to the payload holder (Figure 7)")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1104),alt:"Materials to attach bottom plate"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 4")]),t._v(": Needed Materials")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1105),alt:"PDB mountbase"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 5")]),t._v(": PDB mount base")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1106),alt:"PDB attachment"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 6")]),t._v(": Mounted pdb with nylon nuts")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1107),alt:"Bottom plate Final"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 7")]),t._v(": Mounted Plate on payload holder")])]),t._v(" "),r("li",[r("p",[t._v("Let's gather the stuff needed for mounting landing gear as Figure 8. Use the hex screws to join landing gears to the bottom plate. You also need to open three hex screws on each of the leg stands so you can push them into carbon fiber pipes. Do not forget to tighten them back again.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1108),alt:"Attach Landing Gear Stuff"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 8")]),t._v(": Required parts for landing gear attachment")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1109),alt:"Lanfing great to bottom plate"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 9")]),t._v(": Landing gear attachment to the body")])]),t._v(" "),r("li",[r("p",[t._v("We will gather all the arms now to mount the top plate. Please pay attention that the motor numbers on arms are a match with the ones mentioned on the top plate. Fortunately, motors are mounted and ESCs have been connected in advance. Start by passing through all the screws as you have the arms fixed in their own places (They have a guide as shown in Figure 11 to ensure they are in place) and tighten all nylon nuts a bit. Then you can connect XT30 power connectors to the power board. Please keep in mind that the signal wires have to be passed through the top plate such that we can connect them later to Pixhawk.")]),t._v(" "),r("img",{attrs:{src:o(1110),width:"700",title:"Arms and top plate materials"}}),t._v(" "),r("p",[r("em",[t._v("Figure 10")]),t._v(": Connecting arms needed materials.")]),t._v(" "),r("img",{attrs:{src:o(1111),width:"700",title:"Guide for the arms mount"}}),t._v(" "),r("p",[r("em",[t._v("Figure 11")]),t._v(": Guide for the arms mount")])]),t._v(" "),r("li",[r("p",[t._v("Tighten all 16 screws and nuts by using both hex wrench and nut driver.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1112),alt:"Top plae mounted"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 12")]),t._v(": Mounted top plate")])]),t._v(" "),r("li",[r("p",[t._v("Next you can mount your pixhawk on the top plate by using the stickers. It is recommended to have the direction of your Pixhawk's arrow the same as the one mentioned on the top plate.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1113),alt:"Flight controller mounting stickers"}})]),t._v(" "),r("p",[r("em",[t._v("Figure 13")]),t._v(": Sticker tapes on Pixhawk")])]),t._v(" "),r("li",[r("p",[t._v("If you want to mount the GPS on the companion computer plate, you can now secure the GPS mount onto it using 4 screws and nuts.")]),t._v(" "),r("img",{attrs:{src:o(1114),width:"400",title:"Secure GPS mount onto companion plate"}}),t._v(" "),r("p",[r("em",[t._v("Figure 14")]),t._v(": Secure GPS mount onto companion plate")])]),t._v(" "),r("li",[r("p",[t._v("Use the tape and stick the GPS to the top of the GPS mast and mount the GPS mast. Make sure the arrow on the gps is pointing forward (Figure 15).")]),t._v(" "),r("img",{attrs:{src:o(405),width:"400",title:"Figure 16: GPS and mast"}}),t._v(" "),r("p",[r("em",[t._v("Figure 15")]),t._v(": GPS and mast")])]),t._v(" "),r("li",[r("p",[t._v("Finally, you can connect the Pixhawk interfaces such as telemetry radio to 'TELEM1' and motors signal cables accordingly.")])])]),t._v(" "),r("p",[t._v("Please refer to "),r("RouterLink",{attrs:{to:"/ko/assembly/quick_start_pixhawk5x.html"}},[t._v("Pixhawk 5X Quick Start")]),t._v(" for more information.")],1),t._v(" "),r("p",[t._v("That's it. The fully assembled kit is shown below (Depth camera not included in the kit):")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1115),alt:"Assembled Kit"}})]),t._v(" "),r("h2",{attrs:{id:"px4-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("Full instructions for installing and configuring PX4 can be found in "),r("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("Basic Configuration")]),t._v(".")],1)]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v(" is used to install the PX4 autopilot and configure/tune it for the X500 frame. "),r("a",{attrs:{href:"http://qgroundcontrol.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download and install"),r("OutboundLink")],1),t._v(" "),r("em",[t._v("QGroundControl")]),t._v(" for your platform.")]),t._v(" "),r("p",[t._v("First update the firmware, airframe, and actuator mappings:")]),t._v(" "),r("ul",[r("li",[r("p",[r("RouterLink",{attrs:{to:"/ko/config/firmware.html"}},[t._v("펌웨어")])],1)]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[t._v("Airframe")])],1),t._v(" "),r("p",[t._v("You will need to select the "),r("em",[t._v("Holybro X500 V2")]),t._v(" airframe ("),r("strong",[t._v("Quadrotor x > Holybro 500 V2")]),t._v(")")]),t._v(" "),r("p",[r("img",{attrs:{src:o(406),alt:"QGroundControl - Select HolyBro 500 airframe"}})])]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuators")])],1),t._v(" "),r("ul",[r("li",[t._v("You should not need to update the vehicle geometry (as this is a preconfigured airframe).")]),t._v(" "),r("li",[t._v("Assign actuator functions to outputs to match your wiring.")]),t._v(" "),r("li",[t._v("Test the configuration using the sliders.")])])])]),t._v(" "),r("p",[t._v("Then perform the mandatory setup/calibration:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("센서 방향")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/config/compass.html"}},[t._v("나침반")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/config/accelerometer.html"}},[t._v("가속도계")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/config/level_horizon_calibration.html"}},[t._v("수평 보정")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/config/radio.html"}},[t._v("라디오 설정")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[t._v("비행 모드")])],1)]),t._v(" "),r("p",[t._v("Ideally you should also do:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/esc_calibration.html"}},[t._v("ESC 보정")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/config/battery.html"}},[t._v("배터리")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/config/safety.html"}},[t._v("안전")])],1)]),t._v(" "),r("h2",{attrs:{id:"튜닝"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#튜닝"}},[t._v("#")]),t._v(" 튜닝")]),t._v(" "),r("p",[t._v("Airframe selection sets "),r("em",[t._v("default")]),t._v(" autopilot parameters for the frame. These are good enough to fly with, but it is a good idea to tune the parameters for a specific frame build.")]),t._v(" "),r("p",[t._v("For instructions on how, start from "),r("RouterLink",{attrs:{to:"/ko/config/autotune.html"}},[t._v("Autotune")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"감사의-글"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#감사의-글"}},[t._v("#")]),t._v(" 감사의 글")]),t._v(" "),r("p",[t._v("This build log was provided by PX4 Team.")])])}),[],!1,null,null,null);e.default=a.exports},405:function(t,e,o){t.exports=o.p+"assets/img/gps2.552fdb1d.jpg"},406:function(t,e,o){t.exports=o.p+"assets/img/x500v2_airframe_qgc.a629fd92.png"}}]);