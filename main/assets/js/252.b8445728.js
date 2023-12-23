(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{3377:function(e,t,a){"use strict";a.r(t);var r=a(19),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"查找-修改参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查找-修改参数"}},[e._v("#")]),e._v(" 查找/修改参数")]),e._v(" "),r("p",[e._v("通过配置和调整"),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[e._v("参数")]),e._v("可以影响PX4的表现（例如: "),r("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[e._v("多轴无人机的PID增益")]),e._v("、校准信息等）。")],1),e._v(" "),r("p",[e._v("The "),r("em",[e._v("QGroundControl Parameters")]),e._v(" screen allows you to find and modify "),r("strong",[e._v("any")]),e._v(" of the parameters associated with the vehicle. The screen is accessed by clicking the "),r("strong",[e._v("Q")]),e._v(" application icon > "),r("strong",[e._v("Vehicle Setup")]),e._v(", and then "),r("em",[e._v("Parameters")]),e._v(" in the sidebar.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("Most of the more commonly used parameters are more conveniently set using the dedicated setup screens, as described in the "),r("RouterLink",{attrs:{to:"/zh/config/"}},[e._v("Standard Configuration")]),e._v(" section. The "),r("em",[e._v("Parameters")]),e._v(" screen is needed when modifying less commonly modified parameters - for example while tuning a new vehicle.")],1)]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),r("p",[e._v("虽然又写参数可以在飞行中更改，但是不建议这样做（除非指南中又明确说明）。")])]),e._v(" "),r("p",[r("a",{attrs:{id:"finding"}})]),e._v(" "),r("h2",{attrs:{id:"查找参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查找参数"}},[e._v("#")]),e._v(" 查找参数")]),e._v(" "),r("p",[e._v("You can search for a parameter by entering a term in the "),r("em",[e._v("Search")]),e._v(" field. This will show you a list of all parameter names and descriptions that contain the entered substring (press "),r("strong",[e._v("Clear")]),e._v(" to reset the search, and use the "),r("strong",[e._v("Show modified only")]),e._v(" checkbox to filter out unchanged parameters).")]),e._v(" "),r("p",[r("img",{attrs:{src:a(474),alt:"参数搜索"}})]),e._v(" "),r("p",[e._v("You can also browse the parameters by type and group by clicking on the buttons to the left (in the image below the "),r("em",[e._v("DShot")]),e._v(" group in the "),r("em",[e._v("Standard")]),e._v(" parameters is selected).")]),e._v(" "),r("p",[r("img",{attrs:{src:a(475),alt:"参数界面"}})]),e._v(" "),r("p",[e._v('You can expand/collapse the "type" groupings as shown. Note that the groups at the bottom named '),r("em",[e._v("Component X")]),e._v(" are attached "),r("RouterLink",{attrs:{to:"/zh/dronecan/#qgc-cannode-parameter-configuration"}},[e._v("DroneCAN peripherals")]),e._v(' ("X" is the node id). '),r("RouterLink",{attrs:{to:"/zh/dronecan/#qgc-cannode-parameter-configuration"}},[e._v("QGC can set the parameters")]),e._v(" of these peripherals if they are attached to the Flight Controller when QGC is started.")],1),e._v(" "),r("p",[r("img",{attrs:{src:a(476),alt:"Parameters Types - collapsed"}})]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),r("p",[e._v("如果找不到想要的参数，请参阅"),r("a",{attrs:{href:"#missing"}},[e._v("下一节")]),e._v("。")])]),e._v(" "),r("p",[r("a",{attrs:{id:"missing"}})]),e._v(" "),r("h2",{attrs:{id:"找不到的参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#找不到的参数"}},[e._v("#")]),e._v(" 找不到的参数")]),e._v(" "),r("p",[e._v("参数通常不可见，因为它们要么以其他参数为条件，要么不存在于固件中（见下文）。")]),e._v(" "),r("h3",{attrs:{id:"条件参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#条件参数"}},[e._v("#")]),e._v(" 条件参数")]),e._v(" "),r("p",[e._v("如果一个参数是以未启用的另一个参数为条件，则该参数不会被显示。")]),e._v(" "),r("p",[e._v("您通常可以通过搜索 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[e._v("完整的参数参考")]),e._v(" 和其他文档来找到条件参数。 尤其是"),r("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[e._v("串口配置参数")]),e._v("，它依赖于分配给串口的服务。")],1),e._v(" "),r("h3",{attrs:{id:"固件中没有的参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#固件中没有的参数"}},[e._v("#")]),e._v(" 固件中没有的参数")]),e._v(" "),r("p",[e._v("参数可能不在固件中，因为您使用了不同版本的 PX4，或者因为您构建的固件中没有包含相关的模块。")]),e._v(" "),r("p",[e._v("每个PX4版本都添加了新参数，现有参数有时被删除或重命名。 You can check whether a parameter "),r("em",[e._v("should")]),e._v(" be present by reviewing the "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[e._v("full parameter reference")]),e._v(" for the version you're targeting. 您还可以在源代码和发布说明中查找参数。")],1),e._v(" "),r("p",[e._v("参数可能不在固件中的另一个原因是如果其关联的模块没有被包含。 This is a problem (in particular) for "),r("em",[e._v("FMUv2 firmware")]),e._v(", which omits many modules so that PX4 can fit into the 1MB of available flash. 解决此问题有两种方法：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Check if you can update your board to run FMUv3 firmware, which includes all modules: "),r("RouterLink",{attrs:{to:"/zh/config/firmware.html#bootloader"}},[e._v("Firmware > FMUv2 Bootloader Update")])],1)]),e._v(" "),r("li",[r("p",[e._v("If your board can only run FMUv2 firmware you will need to "),r("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[e._v("rebuild PX4")]),e._v(" with the missing modules enabled. You need reconfigure the PX4 firmware itself through make px4_fmuv2_default boardconfig where you can enabled/disable modules.")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")])])])]),e._v(" "),r("p",[e._v("You may also need to disable other modules in order to fit the rebuilt firmware into 1MB flash.\nFinding modules to remove requires some trial/error and depends on what use cases you need the vehicle to meet.\n:::")]),e._v(" "),r("p",[r("a",{attrs:{id:"changing"}})]),e._v(" "),r("h2",{attrs:{id:"更改参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更改参数"}},[e._v("#")]),e._v(" 更改参数")]),e._v(" "),r("p",[e._v("要更改参数的值，请单击组或搜索列表中的参数行。 单击后屏幕侧边会显示一个对话框，您在其中更改参数的值（这个对话框还提供了该参数的额外细节信息——包括是否需要重启才能使参数生效）。")]),e._v(" "),r("p",[r("img",{attrs:{src:a(477),alt:"更改参数值"}})]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("When you click "),r("strong",[e._v("Save")]),e._v(" the parameter is automatically and silently uploaded to the connected vehicle. 根据参数，您可能需要重新启动飞控才能使更改生效。")])]),e._v(" "),r("h2",{attrs:{id:"工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[e._v("#")]),e._v(" 工具")]),e._v(" "),r("p",[e._v("You can select additional options from the "),r("strong",[e._v("Tools")]),e._v(" menu on the top right hand side of the screen.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(478),alt:"工具菜单"}})]),e._v(" "),r("p",[r("strong",[e._v("Refresh")]),e._v(" "),r("br"),e._v("Refresh the parameter values by re-requesting all of them from the vehicle.")]),e._v(" "),r("p",[r("strong",[e._v("Reset all to firmware defaults")]),e._v(" "),r("br"),e._v("Reset all parameters to their original default values in the firmware.")]),e._v(" "),r("p",[r("strong",[e._v("Reset to vehicle's configuration defaults")]),e._v(" "),r("br"),e._v("Reset all parameters to their original default values for the particular selected airfame configuration.")]),e._v(" "),r("p",[r("strong",[e._v("Load from file / Save to file")]),e._v(" "),r("br"),e._v("Load parameters from an existing file or save your current parameter settings to a file.")]),e._v(" "),r("p",[r("strong",[e._v("Clear all RC to Param")]),e._v(" "),r("br"),e._v("This clears all associations between RC transmitter controls and parameters. For more information see: "),r("RouterLink",{attrs:{to:"/zh/config/radio.html#param-tuning-channels"}},[e._v("Radio Setup > Param Tuning Channels")]),e._v(".")],1),e._v(" "),r("p",[r("strong",[e._v("Reboot Vehicle")]),e._v(" "),r("br"),e._v("Reboot the vehicle (required after changing some parameters).")])])}),[],!1,null,null,null);t.default=o.exports},474:function(e,t,a){e.exports=a.p+"assets/img/parameters_search.d5857db5.png"},475:function(e,t,a){e.exports=a.p+"assets/img/parameters_px4.acd36084.png"},476:function(e,t){e.exports="data:image/png;base64,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"},477:function(e,t,a){e.exports=a.p+"assets/img/parameters_changing.995d131e.png"},478:function(e,t,a){e.exports=a.p+"assets/img/parameters_tools_menu.272cd196.png"}}]);