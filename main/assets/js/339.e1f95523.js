(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{3156:function(e,t,a){"use strict";a.r(t);var s=a(19),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"查找-修改参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找-修改参数"}},[e._v("#")]),e._v(" 查找/修改参数")]),e._v(" "),s("p",[e._v("通过配置和调整"),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[e._v("参数")]),e._v("可以影响PX4的表现（例如: "),s("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[e._v("多轴无人机的PID增益")]),e._v("、校准信息等）。")],1),e._v(" "),s("p",[e._v("The "),s("em",[e._v("QGroundControl Parameters")]),e._v(" screen allows you to find and modify "),s("strong",[e._v("any")]),e._v(" of the parameters associated with the vehicle. The screen is accessed by clicking the top menu "),s("em",[e._v("Gear")]),e._v(" icon and then "),s("em",[e._v("Parameters")]),e._v(" in the sidebar.")]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),s("p",[e._v("大多数常用的参数可以通过"),s("RouterLink",{attrs:{to:"/zh/config/"}},[e._v("基本设置")]),e._v("中的专用配置界面更方便的设置。 The "),s("em",[e._v("Parameters")]),e._v(" screen is needed when modifying less commonly modified parameters - for example while tuning a new vehicle.")],1)]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),s("p",[e._v("虽然又写参数可以在飞行中更改，但是不建议这样做（除非指南中又明确说明）。")])]),e._v(" "),s("p",[s("span",{attrs:{id:"finding"}})]),e._v(" "),s("h2",{attrs:{id:"查找参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找参数"}},[e._v("#")]),e._v(" 查找参数")]),e._v(" "),s("p",[e._v("You can search for a parameter by entering a term in the "),s("em",[e._v("Search")]),e._v(" field. This will show you a list of all parameter names and descriptions that contain the entered substring (press "),s("strong",[e._v("Clear")]),e._v(" to reset the search).")]),e._v(" "),s("p",[s("img",{attrs:{src:a(470),alt:"参数搜索"}})]),e._v(" "),s("p",[e._v("You can also browse the parameters by group by clicking on the buttons to the left (in the image below the "),s("em",[e._v("Battery Calibration")]),e._v(" group is selected).")]),e._v(" "),s("p",[s("img",{attrs:{src:a(471),alt:"参数界面"}})]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[e._v("如果找不到想要的参数，请参阅"),s("a",{attrs:{href:"#missing"}},[e._v("下一节")]),e._v("。")])]),e._v(" "),s("p",[s("span",{attrs:{id:"missing"}})]),e._v(" "),s("h2",{attrs:{id:"找不到的参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#找不到的参数"}},[e._v("#")]),e._v(" 找不到的参数")]),e._v(" "),s("p",[e._v("参数通常不可见，因为它们要么以其他参数为条件，要么不存在于固件中（见下文）。")]),e._v(" "),s("h3",{attrs:{id:"条件参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件参数"}},[e._v("#")]),e._v(" 条件参数")]),e._v(" "),s("p",[e._v("如果一个参数是以未启用的另一个参数为条件，则该参数不会被显示。")]),e._v(" "),s("p",[e._v("您通常可以通过搜索 "),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[e._v("完整的参数参考")]),e._v(" 和其他文档来找到条件参数。 尤其是"),s("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[e._v("串口配置参数")]),e._v("，它依赖于分配给串口的服务。")],1),e._v(" "),s("h3",{attrs:{id:"固件中没有的参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#固件中没有的参数"}},[e._v("#")]),e._v(" 固件中没有的参数")]),e._v(" "),s("p",[e._v("参数可能不在固件中，因为您使用了不同版本的 PX4，或者因为您构建的固件中没有包含相关的模块。")]),e._v(" "),s("p",[e._v("每个PX4版本都添加了新参数，现有参数有时被删除或重命名。 You can check whether a parameter "),s("em",[e._v("should")]),e._v(" be present by reviewing the "),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[e._v("full parameter reference")]),e._v(" for the version you're targeting. 您还可以在源代码和发布说明中查找参数。")],1),e._v(" "),s("p",[e._v("参数可能不在固件中的另一个原因是如果其关联的模块没有被包含。 This is a problem (in particular) for "),s("em",[e._v("FMUv2 firmware")]),e._v(", which omits many modules so that PX4 can fit into the 1MB of available flash. 解决此问题有两种方法：")]),e._v(" "),s("ul",[s("li",[e._v("Check if you can update your board to run FMUv3 firmware, which includes all modules: "),s("RouterLink",{attrs:{to:"/zh/config/firmware.html#bootloader"}},[e._v("Firmware > FMUv2 Bootloader Update")])],1),e._v(" "),s("li",[e._v("If your board can only run FMUv2 firmware you will need to "),s("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[e._v("rebuild PX4")]),e._v(" with the missing modules enabled. You need reconfigure the PX4 firmware itself through make px4_fmuv2_default boardconfig where you can enabled/disable modules ``` :::note\nYou may also need to disable other modules in order to fit the rebuilt firmware into 1MB flash.\nFinding modules to remove requires some trial/error and depends on what use cases you need the vehicle to meet.\n:::")],1)]),e._v(" "),s("p",[s("span",{attrs:{id:"changing"}})]),e._v(" "),s("h2",{attrs:{id:"更改参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改参数"}},[e._v("#")]),e._v(" 更改参数")]),e._v(" "),s("p",[e._v("要更改参数的值，请单击组或搜索列表中的参数行。 单击后屏幕侧边会显示一个对话框，您在其中更改参数的值（这个对话框还提供了该参数的额外细节信息——包括是否需要重启才能使参数生效）。")]),e._v(" "),s("p",[s("img",{attrs:{src:a(472),alt:"更改参数值"}})]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),s("p",[e._v("When you click "),s("strong",[e._v("Save")]),e._v(" the parameter is automatically and silently uploaded to the connected vehicle. 根据参数，您可能需要重新启动飞控才能使更改生效。")])]),e._v(" "),s("h2",{attrs:{id:"工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[e._v("#")]),e._v(" 工具")]),e._v(" "),s("p",[e._v("You can select additional options from the "),s("strong",[e._v("Tools")]),e._v(" menu on the top right hand side of the screen.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(473),alt:"工具菜单"}})]),e._v(" "),s("p",[s("strong",[e._v("Refresh")]),e._v(" "),s("br"),e._v("Refresh the parameter values by re-requesting all of them from the vehicle.")]),e._v(" "),s("p",[s("strong",[e._v("Reset all to defaults")]),e._v(" "),s("br"),e._v("Reset all parameters to their original default values.")]),e._v(" "),s("p",[s("strong",[e._v("Load from file / Save to file")]),e._v(" "),s("br"),e._v("Load parameters from an existing file or save your current parameter settings to a file.")]),e._v(" "),s("p",[s("strong",[e._v("Clear RC to Param")]),e._v(" "),s("br"),e._v("This clears all associations between RC transmitter controls and parameters. For more information see: "),s("RouterLink",{attrs:{to:"/zh/config/radio.html#param-tuning-channels"}},[e._v("Radio Setup > Param Tuning Channels")]),e._v(".")],1),e._v(" "),s("p",[s("strong",[e._v("Reboot Vehicle")]),e._v(" "),s("br"),e._v("Reboot the vehicle (required after changing some parameters).")])])}),[],!1,null,null,null);t.default=i.exports},470:function(e,t,a){e.exports=a.p+"assets/img/parameters_search.2e60193b.jpg"},471:function(e,t,a){e.exports=a.p+"assets/img/parameters_px4.2f1a5137.jpg"},472:function(e,t,a){e.exports=a.p+"assets/img/parameters_changing.d1ec7c77.png"},473:function(e,t){e.exports="data:image/png;base64,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"}}]);