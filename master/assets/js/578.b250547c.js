(window.webpackJsonp=window.webpackJsonp||[]).push([[578],{2070:function(t,a,r){"use strict";r.r(a);var e=r(19),o=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"betaflight-시스템-부트로더-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#betaflight-시스템-부트로더-설치"}},[t._v("#")]),t._v(" Betaflight 시스템 부트로더 설치")]),t._v(" "),e("p",[t._v("이 페이지 문서는 Betaflight가 사전 설치되어 되어 있는 보드(예."),e("RouterLink",{attrs:{to:"/ko/flight_controller/omnibus_f4_sd.html"}},[t._v("OmnibusF4 SD")]),t._v("또는 "),e("RouterLink",{attrs:{to:"/ko/flight_controller/kakutef7.html"}},[t._v("Kakute F7")]),t._v(")에 PX4 부트로더를 설치하는 방법을 다룹니다.")],1),t._v(" "),e("p",[t._v("부트로더 설치에는 2가지 선택지가 있습니다: "),e("em",[t._v("Betaflight Configurator")]),t._v("를 이용하는 것(더 쉽습니다)과, 소스로 부터 빌드하는 방법이 있습니다.")]),t._v(" "),e("p",[e("span",{attrs:{id:"betaflight_configurator"}})]),t._v(" "),e("h3",{attrs:{id:"betaflight-configurator로-부트로더-업데이트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#betaflight-configurator로-부트로더-업데이트"}},[t._v("#")]),t._v(" Betaflight Configurator로 부트로더 업데이트")]),t._v(" "),e("p",[t._v("이제 보드에 PX4 펌웨어를 설치할 수 있습니다.")]),t._v(" "),e("ol",[e("li",[t._v("미리 빌드되어 있는 부트로더 바이너리를 다운 받아야 합니다. (보드에 따라 다를 수 있습니다.)")]),t._v(" "),e("li",[t._v("운영체제에 맞게 "),e("a",{attrs:{href:"https://github.com/betaflight/betaflight-configurator/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Betaflight Configurator"),e("OutboundLink")],1),t._v("를 다운로드 합니다. > "),e("strong",[t._v("Tip")]),t._v(" 만약 "),e("em",[t._v("Chrome")]),t._v(" 웹브라우저를 사용한다면, "),e("a",{attrs:{href:"https://chrome.google.com/webstore/detail/betaflight-configurator/kdaghagfopacdngbohiknlhcocjccjao",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기서"),e("OutboundLink")],1),t._v(" 크롬 확장 프로그램으로 Configurator를 설치하는 것으로 이 과정을 대체할 수 있습니다.\n:::")]),t._v(" "),e("li",[t._v("PC에 보드를 연결하고 Configurator를 실행합니다.")]),t._v(" "),e("li",[e("strong",[t._v("Load Firmware [Local]")]),t._v(" 버튼을 누릅니다. "),e("img",{attrs:{src:r(446),alt:"Betaflight Configurator - Local Firmware"}})]),t._v(" "),e("li",[t._v("파일시스템으로부터 부트로더 바이너리를 선택하고 보드에 설치(flash)합니다.")])]),t._v(" "),e("p",[t._v("다음 명령어로 "),e("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootloader"),e("OutboundLink")],1),t._v("를 다운로드하고 빌드하십시오:")]),t._v(" "),e("h3",{attrs:{id:"소스를-사용하여-부트로더-업데이트하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#소스를-사용하여-부트로더-업데이트하기"}},[t._v("#")]),t._v(" 소스를 사용하여 부트로더 업데이트하기")]),t._v(" "),e("h4",{attrs:{id:"부트로더-소스-다운로드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#부트로더-소스-다운로드"}},[t._v("#")]),t._v(" 부트로더 소스 다운로드")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://dfu-util.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("dfu-util"),e("OutboundLink")],1),t._v("또는 Windows의 그래픽 툴인 "),e("a",{attrs:{href:"https://www.st.com/en/development-tools/stsw-stm32080.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("dfuse"),e("OutboundLink")],1),t._v("로 PX4 부트로더를 설치할 수 있습니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("git clone --recursive  https://github.com/PX4/Bootloader.git\ncd Bootloader\nmake <target> # For example: omnibusf4sd_bl or kakutef7_bl\n")])])]),e("h4",{attrs:{id:"부트로더-설치하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#부트로더-설치하기"}},[t._v("#")]),t._v(" 부트로더 설치하기")]),t._v(" "),e("p",[t._v("아래 방법들로 설치를 시도하는 것은 무서워할 필요가 없습니다.")]),t._v(" "),e("p",[t._v("아래 방법 중 하나를 사용하여 플래시를 시도하는 것을 두려워하지 마십시오.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("STM32 MCU는 벽돌로 만들 수 없습니다. DFU는 플래싱으로 덮어쓸 수 없으며 플래싱이 실패하더라도, 항상 새 펌웨어를 설치할 수 있습니다.")])]),t._v(" "),e("h5",{attrs:{id:"dfu-모드로-진입"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dfu-모드로-진입"}},[t._v("#")]),t._v(" DFU 모드로 진입")]),t._v(" "),e("p",[t._v("두 방법 모두 보드가 DFU 모드에 있어야 합니다. DFU 모드로 들어가려면 USB 케이블을 컴퓨터에 연결하는 동안 부팅 버튼을 누르고 있습니다. 보드의 전원이 켜진 후 버튼을 놓을 수 있습니다.")]),t._v(" "),e("h5",{attrs:{id:"dfu-util"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dfu-util"}},[t._v("#")]),t._v(" dfu-util")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("dfu-util -a 0 --dfuse-address 0x08000000 -D  build/<target>/<target>.bin\n")])])]),e("p",[t._v("비행 컨트롤러를 재부팅하면 부팅 버튼을 누르지 않고 부팅됩니다.")]),t._v(" "),e("h5",{attrs:{id:"dfuse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dfuse"}},[t._v("#")]),t._v(" dfuse")]),t._v(" "),e("p",[t._v("여기에서 dfuse 설명서를 참조하십시오. https://www.st.com/resource/en/user_manual/cd00155676.pdf")]),t._v(" "),e("p",[e("strong",[e("target",[t._v(".bin")])],1),t._v(" 파일을 플래시합니다.")]),t._v(" "),e("p",[e("span",{attrs:{id:"reinstall_betaflight"}})]),t._v(" "),e("h2",{attrs:{id:"betaflight-재설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#betaflight-재설치"}},[t._v("#")]),t._v(" Betaflight 재설치")]),t._v(" "),e("p",[e("em",[t._v("Betaflight")]),t._v("로 다시 전환하려면:")]),t._v(" "),e("ul",[e("li",[t._v("PX4 매개변수를 백업하십시오. SD 카드로 "),e("RouterLink",{attrs:{to:"/ko/advanced/parameters_and_configurations.html#exporting-and-loading-parameters"}},[t._v("내보내기")])],1),t._v(" "),e("li",[e("strong",[t._v("bootloader")]),t._v(" 버튼을 누른 채 USB 케이블을 연결합니다.")]),t._v(" "),e("li",[t._v("그리고 "),e("em",[t._v("Betaflight-configurator")]),t._v("를 이용하여 원래대로 "),e("em",[t._v("Betaflight")]),t._v("를 플래시 합니다.")])])])}),[],!1,null,null,null);a.default=o.exports},446:function(t,a,r){t.exports=r.p+"assets/img/betaflight_configurator.bc7763bb.jpg"}}]);