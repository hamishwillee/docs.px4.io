(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{1840:function(e,t,a){"use strict";a.r(t);var r=a(18),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"파라미터-찾기-업데이트하기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#파라미터-찾기-업데이트하기"}},[e._v("#")]),e._v(" 파라미터 찾기/업데이트하기")]),e._v(" "),r("p",[e._v("PX4의 동작은 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html"}},[e._v("파라미터")]),e._v("를 사용하여 설정/조정될 수 있습니다(예. "),r("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[e._v("멀티콥터 PID 계수")]),e._v(", 캘리브레이션 정보, 등.).")],1),e._v(" "),r("p",[r("em",[e._v("QGroundControl 파라미터")]),e._v(" 화면은 기체와 관련된 **어떤 **파라미터든지 찾고 수정할 수 있도록 허용합니다. 상단 메뉴의 톱니 바퀴 아이콘을 클릭한 다음 좌측 메뉴의 파라미터를 클릭하여 파라미터 화면에 진입합니다.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("Most of the more commonly used parameters are more conveniently set using the dedicated setup screens described in the "),r("RouterLink",{attrs:{to:"/ko/config/"}},[e._v("Basic Configuration")]),e._v(" section. The "),r("em",[e._v("Parameters")]),e._v(" screen is needed when modifying less commonly modified parameters - for example while tuning a new vehicle.")],1)]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("While some parameters can be changed in flight, this is not recommended (except where explicitly stated in the guide).")])]),e._v(" "),r("p",[r("span",{attrs:{id:"finding"}})]),e._v(" "),r("h2",{attrs:{id:"finding-a-parameter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#finding-a-parameter"}},[e._v("#")]),e._v(" Finding a Parameter")]),e._v(" "),r("p",[e._v("You can search for a parameter by entering a term in the "),r("em",[e._v("Search")]),e._v(" field. This will show you a list of all parameter names and descriptions that contain the entered substring (press "),r("strong",[e._v("Clear")]),e._v(" to reset the search).")]),e._v(" "),r("p",[r("img",{attrs:{src:a(443),alt:"Parameters Search"}})]),e._v(" "),r("p",[e._v("You can also browse the parameters by group by clicking on the buttons to the left (in the image below the "),r("em",[e._v("Battery Calibration")]),e._v(" group is selected).")]),e._v(" "),r("p",[r("img",{attrs:{src:a(444),alt:"Parameters Screen"}})]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("If you can't find an expected parameter, see the "),r("a",{attrs:{href:"#missing"}},[e._v("next section")]),e._v(".")])]),e._v(" "),r("p",[r("span",{attrs:{id:"missing"}})]),e._v(" "),r("h2",{attrs:{id:"missing-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#missing-parameters"}},[e._v("#")]),e._v(" Missing Parameters")]),e._v(" "),r("p",[e._v("Parameters are usually not visible because either they are conditional on other parameters, or they are not present in the firmware (see below).")]),e._v(" "),r("h3",{attrs:{id:"conditional-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conditional-parameters"}},[e._v("#")]),e._v(" Conditional Parameters")]),e._v(" "),r("p",[e._v("A parameter may not be displayed if it is conditional on another parameter that is not enabled.")]),e._v(" "),r("p",[e._v("You can usually find out what parameters are conditional by searching the "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html"}},[e._v("full parameter reference")]),e._v(" and other documentation. In particular "),r("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[e._v("serial port configuration parameters")]),e._v(" depend on what service is assigned to a serial port.")],1),e._v(" "),r("h3",{attrs:{id:"parameter-not-in-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameter-not-in-firmware"}},[e._v("#")]),e._v(" Parameter Not In Firmware")]),e._v(" "),r("p",[e._v("A parameter may not be present in the firmware because you're using a different version of PX4 or because you're using a build in which the associated module is not included.")]),e._v(" "),r("p",[e._v("New parameters are added in each PX4 version, and existing parameters are sometimes removed or renamed. You can check whether a parameter "),r("em",[e._v("should")]),e._v(" be present by reviewing the "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html"}},[e._v("full parameter reference")]),e._v(" for the version you're targeting. You can also search for the parameter in the source tree and in the release notes.")],1),e._v(" "),r("p",[e._v("The other reason that a parameter might not be in firmware is if its associated module has not been included. This is a problem (in particular) for "),r("em",[e._v("FMUv2 firmware")]),e._v(", which omits many modules so that PX4 can fit into the 1MB of available flash. There are two options to solve this problem:")]),e._v(" "),r("ul",[r("li",[e._v("Check if you can update your board to run FMUv3 firmware, which includes all modules: "),r("RouterLink",{attrs:{to:"/ko/config/firmware.html#bootloader"}},[e._v("Firmware > FMUv2 Bootloader Update")])],1),e._v(" "),r("li",[e._v("If your board can only run FMUv2 firmware you will need to "),r("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[e._v("rebuild PX4")]),e._v(" with the missing modules enabled. You can see these commented out in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v2/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[e._v("boards/px4/fmu-v2/default.cmake"),r("OutboundLink")],1),e._v(":\nDRIVERS\nadc\n#barometer # all available barometer drivers\nbarometer/ms5611\n#batt_smbus\n#camera_capture :::note You may also need to disable other modules in order to fit the rebuilt firmware into 1MB flash. Finding modules to remove requires some trial/error and depends on what use cases you need the vehicle to meet.\n:::")],1)]),e._v(" "),r("p",[r("span",{attrs:{id:"changing"}})]),e._v(" "),r("h2",{attrs:{id:"changing-a-parameter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#changing-a-parameter"}},[e._v("#")]),e._v(" Changing a Parameter")]),e._v(" "),r("p",[e._v("To change the value of a parameter click on the parameter row in a group or search list. This will open a side dialog in which you can update the value (this dialog also provides additional detailed information about the parameter - including whether a reboot is required for the change to take effect).")]),e._v(" "),r("p",[r("img",{attrs:{src:a(445),alt:"Changing a parameter value"}})]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("When you click "),r("strong",[e._v("Save")]),e._v(" the parameter is automatically and silently uploaded to the connected vehicle. Depending on the parameter, you may then need to reboot the flight controller for the change to take effect.")])]),e._v(" "),r("h2",{attrs:{id:"tools"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[e._v("#")]),e._v(" Tools")]),e._v(" "),r("p",[e._v("You can select additional options from the "),r("strong",[e._v("Tools")]),e._v(" menu on the top right hand side of the screen.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(446),alt:"Tools menu"}})]),e._v(" "),r("p",[r("strong",[e._v("Refresh")]),e._v(" "),r("br"),e._v("Refresh the parameter values by re-requesting all of them from the vehicle.")]),e._v(" "),r("p",[r("strong",[e._v("Reset all to defaults")]),e._v(" "),r("br"),e._v("Reset all parameters to their original default values.")]),e._v(" "),r("p",[r("strong",[e._v("Load from file / Save to file")]),e._v(" "),r("br"),e._v("Load parameters from an existing file or save your current parameter settings to a file.")]),e._v(" "),r("p",[r("strong",[e._v("Clear RC to Param")]),e._v(" "),r("br"),e._v("This clears all associations between RC transmitter controls and parameters. For more information see: "),r("RouterLink",{attrs:{to:"/ko/config/radio.html#param-tuning-channels"}},[e._v("Radio Setup > Param Tuning Channels")]),e._v(".")],1),e._v(" "),r("p",[r("strong",[e._v("Reboot Vehicle")]),e._v(" "),r("br"),e._v("Reboot the vehicle (required after changing some parameters).")])])}),[],!1,null,null,null);t.default=o.exports},443:function(e,t,a){e.exports=a.p+"assets/img/parameters_search.2e60193b.jpg"},444:function(e,t,a){e.exports=a.p+"assets/img/parameters_px4.38575abe.jpg"},445:function(e,t,a){e.exports=a.p+"assets/img/parameters_changing.5e0d3746.png"},446:function(e,t,a){e.exports=a.p+"assets/img/parameters_tools_menu.c4a7442b.png"}}]);