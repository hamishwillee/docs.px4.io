(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{3118:function(e,t,a){"use strict";a.r(t);var r=a(19),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"查找-修改参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查找-修改参数"}},[e._v("#")]),e._v(" 查找/修改参数")]),e._v(" "),r("p",[e._v("通过配置和调整"),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[e._v("参数")]),e._v("可以影响PX4的表现（例如: "),r("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[e._v("多轴无人机的PID增益")]),e._v("、校准信息等）。")],1),e._v(" "),r("p",[e._v("The "),r("em",[e._v("QGroundControl Parameters")]),e._v(" screen allows you to find and modify "),r("strong",[e._v("any")]),e._v(" of the parameters associated with the vehicle. The screen is accessed by clicking the top menu "),r("em",[e._v("Gear")]),e._v(" icon and then "),r("em",[e._v("Parameters")]),e._v(" in the sidebar.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("大多数常用的参数可以通过"),r("RouterLink",{attrs:{to:"/zh/config/"}},[e._v("基本设置")]),e._v("中的专用配置界面更方便的设置。 The "),r("em",[e._v("Parameters")]),e._v(" screen is needed when modifying less commonly modified parameters - for example while tuning a new vehicle.")],1)]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),r("p",[e._v("虽然又写参数可以在飞行中更改，但是不建议这样做（除非指南中又明确说明）。")])]),e._v(" "),r("p",[r("span",{attrs:{id:"finding"}})]),e._v(" "),r("h2",{attrs:{id:"查找参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查找参数"}},[e._v("#")]),e._v(" 查找参数")]),e._v(" "),r("p",[e._v("You can search for a parameter by entering a term in the "),r("em",[e._v("Search")]),e._v(" field. This will show you a list of all parameter names and descriptions that contain the entered substring (press "),r("strong",[e._v("Clear")]),e._v(" to reset the search).")]),e._v(" "),r("p",[r("img",{attrs:{src:a(470),alt:"参数搜索"}})]),e._v(" "),r("p",[e._v("You can also browse the parameters by group by clicking on the buttons to the left (in the image below the "),r("em",[e._v("Battery Calibration")]),e._v(" group is selected).")]),e._v(" "),r("p",[r("img",{attrs:{src:a(471),alt:"参数界面"}})]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),r("p",[e._v("如果找不到想要的参数，请参阅"),r("a",{attrs:{href:"#missing"}},[e._v("下一节")]),e._v("。")])]),e._v(" "),r("p",[r("span",{attrs:{id:"missing"}})]),e._v(" "),r("h2",{attrs:{id:"找不到的参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#找不到的参数"}},[e._v("#")]),e._v(" 找不到的参数")]),e._v(" "),r("p",[e._v("参数通常不可见，因为它们要么以其他参数为条件，要么不存在于固件中（见下文）。")]),e._v(" "),r("h3",{attrs:{id:"条件参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#条件参数"}},[e._v("#")]),e._v(" 条件参数")]),e._v(" "),r("p",[e._v("如果一个参数是以未启用的另一个参数为条件，则该参数不会被显示。")]),e._v(" "),r("p",[e._v("您通常可以通过搜索 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[e._v("完整的参数参考")]),e._v(" 和其他文档来找到条件参数。 尤其是"),r("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[e._v("串口配置参数")]),e._v("，它依赖于分配给串口的服务。")],1),e._v(" "),r("h3",{attrs:{id:"固件中没有的参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#固件中没有的参数"}},[e._v("#")]),e._v(" 固件中没有的参数")]),e._v(" "),r("p",[e._v("参数可能不在固件中，因为您使用了不同版本的 PX4，或者因为您构建的固件中没有包含相关的模块。")]),e._v(" "),r("p",[e._v("每个PX4版本都添加了新参数，现有参数有时被删除或重命名。 You can check whether a parameter "),r("em",[e._v("should")]),e._v(" be present by reviewing the "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[e._v("full parameter reference")]),e._v(" for the version you're targeting. 您还可以在源代码和发布说明中查找参数。")],1),e._v(" "),r("p",[e._v("参数可能不在固件中的另一个原因是如果其关联的模块没有被包含。 This is a problem (in particular) for "),r("em",[e._v("FMUv2 firmware")]),e._v(", which omits many modules so that PX4 can fit into the 1MB of available flash. 解决此问题有两种方法：")]),e._v(" "),r("ul",[r("li",[e._v("Check if you can update your board to run FMUv3 firmware, which includes all modules: "),r("RouterLink",{attrs:{to:"/zh/config/firmware.html#bootloader"}},[e._v("Firmware > FMUv2 Bootloader Update")])],1),e._v(" "),r("li",[e._v("If your board can only run FMUv2 firmware you will need to "),r("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[e._v("rebuild PX4")]),e._v(" with the missing modules enabled. You need reconfigure the PX4 firmware itself through make px4_fmuv2_default boardconfig where you can enabled/disable modules ``` :::note\nYou may also need to disable other modules in order to fit the rebuilt firmware into 1MB flash.\nFinding modules to remove requires some trial/error and depends on what use cases you need the vehicle to meet.\n:::")],1)]),e._v(" "),r("p",[r("span",{attrs:{id:"changing"}})]),e._v(" "),r("h2",{attrs:{id:"更改参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更改参数"}},[e._v("#")]),e._v(" 更改参数")]),e._v(" "),r("p",[e._v("要更改参数的值，请单击组或搜索列表中的参数行。 单击后屏幕侧边会显示一个对话框，您在其中更改参数的值（这个对话框还提供了该参数的额外细节信息——包括是否需要重启才能使参数生效）。")]),e._v(" "),r("p",[r("img",{attrs:{src:a(472),alt:"更改参数值"}})]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("When you click "),r("strong",[e._v("Save")]),e._v(" the parameter is automatically and silently uploaded to the connected vehicle. 根据参数，您可能需要重新启动飞控才能使更改生效。")])]),e._v(" "),r("h2",{attrs:{id:"工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[e._v("#")]),e._v(" 工具")]),e._v(" "),r("p",[e._v("You can select additional options from the "),r("strong",[e._v("Tools")]),e._v(" menu on the top right hand side of the screen.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(473),alt:"工具菜单"}})]),e._v(" "),r("p",[r("strong",[e._v("Refresh")]),e._v(" "),r("br"),e._v("Refresh the parameter values by re-requesting all of them from the vehicle.")]),e._v(" "),r("p",[r("strong",[e._v("Reset all to defaults")]),e._v(" "),r("br"),e._v("Reset all parameters to their original default values.")]),e._v(" "),r("p",[r("strong",[e._v("Load from file / Save to file")]),e._v(" "),r("br"),e._v("Load parameters from an existing file or save your current parameter settings to a file.")]),e._v(" "),r("p",[r("strong",[e._v("Clear RC to Param")]),e._v(" "),r("br"),e._v("This clears all associations between RC transmitter controls and parameters. For more information see: "),r("RouterLink",{attrs:{to:"/zh/config/radio.html#param-tuning-channels"}},[e._v("Radio Setup > Param Tuning Channels")]),e._v(".")],1),e._v(" "),r("p",[r("strong",[e._v("Reboot Vehicle")]),e._v(" "),r("br"),e._v("Reboot the vehicle (required after changing some parameters).")])])}),[],!1,null,null,null);t.default=s.exports},470:function(e,t,a){e.exports=a.p+"assets/img/parameters_search.2e60193b.jpg"},471:function(e,t,a){e.exports=a.p+"assets/img/parameters_px4.38575abe.jpg"},472:function(e,t,a){e.exports=a.p+"assets/img/parameters_changing.5e0d3746.png"},473:function(e,t,a){e.exports=a.p+"assets/img/parameters_tools_menu.c4a7442b.png"}}]);