(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{1834:function(t,e,a){"use strict";a.r(e);var r=a(18),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"betaflight-시스템에-부트로더-설치하기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#betaflight-시스템에-부트로더-설치하기"}},[t._v("#")]),t._v(" Betaflight 시스템에 부트로더 설치하기")]),t._v(" "),r("p",[t._v("이 페이지 문서는 Betaflight가 사전 설치되어 되어 있는 보드(예."),r("RouterLink",{attrs:{to:"/ko/flight_controller/omnibus_f4_sd.html"}},[t._v("OmnibusF4 SD")]),t._v("또는 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/kakutef7.html"}},[t._v("Kakute F7")]),t._v(")에 PX4 부트로더를 설치하는 방법을 다룹니다.")],1),t._v(" "),r("p",[t._v("부트로더 설치에는 2가지 선택지가 있습니다: "),r("em",[t._v("Betaflight Configurator")]),t._v("를 이용하는 것(더 쉽습니다)과, 소스로 부터 빌드하는 방법이 있습니다.")]),t._v(" "),r("p",[r("span",{attrs:{id:"betaflight_configurator"}})]),t._v(" "),r("h3",{attrs:{id:"bootloader-update-using-betaflight-configurator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bootloader-update-using-betaflight-configurator"}},[t._v("#")]),t._v(" Bootloader Update using Betaflight Configurator")]),t._v(" "),r("p",[t._v("이제 보드에 PX4 펌웨어를 설치할 수 있습니다.")]),t._v(" "),r("ol",[r("li",[t._v("미리 빌드되어 있는 부트로더 바이너리를 다운 받아야 합니다. (보드에 따라 다를 수 있습니다.)")]),t._v(" "),r("li",[t._v("운영체제에 맞게 "),r("a",{attrs:{href:"https://github.com/betaflight/betaflight-configurator/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Betaflight Configurator"),r("OutboundLink")],1),t._v("를 다운로드 합니다. > "),r("strong",[t._v("Tip")]),t._v(" 만약 "),r("em",[t._v("Chrome")]),t._v(" 웹브라우저를 사용한다면, "),r("a",{attrs:{href:"https://chrome.google.com/webstore/detail/betaflight-configurator/kdaghagfopacdngbohiknlhcocjccjao",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기서"),r("OutboundLink")],1),t._v(" 크롬 확장 프로그램으로 Configurator를 설치하는 것으로 이 과정을 대체할 수 있습니다.\n:::")]),t._v(" "),r("li",[t._v("PC에 보드를 연결하고 Configurator를 실행합니다.")]),t._v(" "),r("li",[r("strong",[t._v("Load Firmware [Local]")]),t._v(" 버튼을 누릅니다. "),r("img",{attrs:{src:a(432),alt:"Betaflight Configurator - Local Firmware"}})]),t._v(" "),r("li",[t._v("파일시스템으로부터 부트로더 바이너리를 선택하고 보드에 설치(flash)합니다.")])]),t._v(" "),r("p",[t._v("다음 명령어로 "),r("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootloader"),r("OutboundLink")],1),t._v("를 다운로드하고 빌드하십시오:")]),t._v(" "),r("h3",{attrs:{id:"소스를-사용하여-부트로더-업데이트하기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#소스를-사용하여-부트로더-업데이트하기"}},[t._v("#")]),t._v(" 소스를 사용하여 부트로더 업데이트하기")]),t._v(" "),r("h4",{attrs:{id:"부트로더-소스-다운로드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#부트로더-소스-다운로드"}},[t._v("#")]),t._v(" 부트로더 소스 다운로드")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://dfu-util.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("dfu-util"),r("OutboundLink")],1),t._v("또는 Windows의 그래픽 툴인 "),r("a",{attrs:{href:"https://www.st.com/en/development-tools/stsw-stm32080.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("dfuse"),r("OutboundLink")],1),t._v("로 PX4 부트로더를 설치할 수 있습니다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("git clone --recursive  https://github.com/PX4/Bootloader.git\ncd Bootloader\nmake <target> # For example: omnibusf4sd_bl or kakutef7_bl\n")])])]),r("h4",{attrs:{id:"부트로더-설치하기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#부트로더-설치하기"}},[t._v("#")]),t._v(" 부트로더 설치하기")]),t._v(" "),r("p",[t._v("아래 방법들로 설치를 시도하는 것은 무서워할 필요가 없습니다.")]),t._v(" "),r("p",[t._v("Don't be afraid to try flashing using any of the methods below.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The STM32 MCU cannot be bricked. DFU cannot be overwritten by flashing and will always allow you to install a new firmware, even if flashing fails.")])]),t._v(" "),r("h5",{attrs:{id:"dfu-모드로-진입"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dfu-모드로-진입"}},[t._v("#")]),t._v(" DFU 모드로 진입")]),t._v(" "),r("p",[t._v("Both methods require the board to be in DFU mode. To enter DFU mode, hold the boot button down while connecting the USB cable to your computer. The button can be released after the board is powered up.")]),t._v(" "),r("h5",{attrs:{id:"dfu-util"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dfu-util"}},[t._v("#")]),t._v(" dfu-util")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("dfu-util -a 0 --dfuse-address 0x08000000 -D  build/<target>/<target>.bin\n")])])]),r("p",[r("strong",[r("target",[t._v(".bin")])],1),t._v(" 파일을 설치합니다.")]),t._v(" "),r("h5",{attrs:{id:"dfuse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dfuse"}},[t._v("#")]),t._v(" dfuse")]),t._v(" "),r("p",[r("em",[t._v("Betaflight")]),t._v("로 다시 돌아가려면:")]),t._v(" "),r("p",[t._v("Flash the "),r("strong",[r("target",[t._v(".bin")])],1),t._v(" file.")]),t._v(" "),r("p",[r("span",{attrs:{id:"reinstall_betaflight"}})]),t._v(" "),r("h2",{attrs:{id:"reinstall-betaflight"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reinstall-betaflight"}},[t._v("#")]),t._v(" Reinstall Betaflight")]),t._v(" "),r("p",[t._v("In order to switch back to "),r("em",[t._v("Betaflight")]),t._v(":")]),t._v(" "),r("ul",[r("li",[t._v("PX4 파라미터를 백업하십시오. 예) 파라미터를 "),r("a",{attrs:{href:"https://dev.px4.io/master/en/advanced/parameters_and_configurations.html#exporting-and-loading-parameters",target:"_blank",rel:"noopener noreferrer"}},[t._v("추출"),r("OutboundLink")],1),t._v("하여 SD 카드로 옮깁니다.")]),t._v(" "),r("li",[r("strong",[t._v("bootloader")]),t._v(" 버튼을 누른 채 USB 케이블을 연결합니다.")]),t._v(" "),r("li",[t._v("그리고 "),r("em",[t._v("Betaflight-configurator")]),t._v("를 이용하여 원래대로 "),r("em",[t._v("Betaflight")]),t._v("를 플래시 합니다.")])])])}),[],!1,null,null,null);e.default=o.exports},432:function(t,e,a){t.exports=a.p+"assets/img/betaflight_configurator.bc7763bb.jpg"}}]);