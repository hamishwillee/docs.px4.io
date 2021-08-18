(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{2065:function(t,a,_){"use strict";_.r(a);var s=_(19),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"查找-修改参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找-修改参数"}},[t._v("#")]),t._v(" 查找/修改参数")]),t._v(" "),s("p",[t._v("通过配置和调整"),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[t._v("参数")]),t._v("可以影响PX4的表现（例如: "),s("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("多轴无人机的PID增益")]),t._v("、校准信息等）。")],1),t._v(" "),s("p",[t._v("你可以在"),s("em",[t._v("QGroundControl 参数")]),t._v(" 界面查找和修改"),s("strong",[t._v("任何")]),t._v("与载具相关的参数。 点击顶部菜单 "),s("em",[t._v("齿轮")]),t._v(" 图标，然后点击侧边栏中的 "),s("em",[t._v("参数")]),t._v(" 访问屏幕。")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("大多数常用的参数可以通过"),s("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("基本设置")]),t._v("中的专用配置界面更方便的设置。 在修改不太常用的修改参数时需要 "),s("em",[t._v("参数")]),t._v(" 界面。例如，在调整新的载具时。")],1)]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("虽然又写参数可以在飞行中更改，但是不建议这样做（除非指南中又明确说明）。")])]),t._v(" "),s("p",[s("span",{attrs:{id:"finding"}})]),t._v(" "),s("h2",{attrs:{id:"查找参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找参数"}},[t._v("#")]),t._v(" 查找参数")]),t._v(" "),s("p",[t._v("可以在"),s("em",[t._v("搜索")]),t._v("框中输入一个词来搜索参数。 和搜索字眼相关的所有参数名称和说明将会以列表形式显示 (按 ** 清除(Clear) ** 重置搜索)。")]),t._v(" "),s("p",[s("img",{attrs:{src:_(450),alt:"参数搜索"}})]),t._v(" "),s("p",[t._v("您也可以点击左边的按钮来浏览参数组（下图显示了"),s("em",[t._v("电池校准")]),t._v("参数组被选中）。")]),t._v(" "),s("p",[s("img",{attrs:{src:_(451),alt:"参数界面"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("如果找不到想要的参数，请参阅"),s("a",{attrs:{href:"#missing"}},[t._v("下一节")]),t._v("。")])]),t._v(" "),s("p",[s("span",{attrs:{id:"missing"}})]),t._v(" "),s("h2",{attrs:{id:"找不到的参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#找不到的参数"}},[t._v("#")]),t._v(" 找不到的参数")]),t._v(" "),s("p",[t._v("参数通常不可见，因为它们要么以其他参数为条件，要么不存在于固件中（见下文）。")]),t._v(" "),s("h3",{attrs:{id:"条件参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件参数"}},[t._v("#")]),t._v(" 条件参数")]),t._v(" "),s("p",[t._v("如果一个参数是以未启用的另一个参数为条件，则该参数不会被显示。")]),t._v(" "),s("p",[t._v("您通常可以通过搜索 "),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[t._v("完整的参数参考")]),t._v(" 和其他文档来找到条件参数。 尤其是"),s("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[t._v("串口配置参数")]),t._v("，它依赖于分配给串口的服务。")],1),t._v(" "),s("h3",{attrs:{id:"固件中没有的参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#固件中没有的参数"}},[t._v("#")]),t._v(" 固件中没有的参数")]),t._v(" "),s("p",[t._v("参数可能不在固件中，因为您使用了不同版本的 PX4，或者因为您构建的固件中没有包含相关的模块。")]),t._v(" "),s("p",[t._v("每个PX4版本都添加了新参数，现有参数有时被删除或重命名。 您可以通过查阅对应版本的"),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html"}},[t._v("全部参数参考")]),t._v("来检查一个参数是否"),s("em",[t._v("应该")]),t._v("存在。 您还可以在源代码和发布说明中查找参数。")],1),t._v(" "),s("p",[t._v("参数可能不在固件中的另一个原因是如果其关联的模块没有被包含。 这个问题（特别是）对"),s("em",[t._v("FMUv2 固件")]),t._v("，该固件省略了许多模块，才能使 PX4 可以适用于 1MB的闪存。 解决此问题有两种方法：")]),t._v(" "),s("ul",[s("li",[t._v("检查你是否可以更新你的板来运行 FMUv3 固件，其中包括所有模块： "),s("RouterLink",{attrs:{to:"/zh/config/firmware.html#bootloader"}},[t._v("固件 > FMUv2 Bootloader 更新")])],1),t._v(" "),s("li",[t._v("如果你的控制板只能运行 FMUv2 固件，你需要 "),s("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("重新构建 PX4")]),t._v(" 并启用缺失的模块。 在"),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v2/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[t._v("boards/px4/fmu-v2/default.cmake"),s("OutboundLink")],1),t._v("文件中看到注释掉的模块:\nDRIVERS\nadc\n#barometer # 全部支持的气压计驱动\nbarometer/ms5611\n#batt_smbus\n#camera_capture :::note 您可能还需要禁用其他模块才能将重新构建的固件适用于 1MB 的闪存。 找到可以移除的模块需要一些试错， 还取决于你要求载具达到哪些使用案例。\n:::")],1)]),t._v(" "),s("p",[s("span",{attrs:{id:"changing"}})]),t._v(" "),s("h2",{attrs:{id:"更改参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改参数"}},[t._v("#")]),t._v(" 更改参数")]),t._v(" "),s("p",[t._v("要更改参数的值，请单击组或搜索列表中的参数行。 单击后屏幕侧边会显示一个对话框，您在其中更改参数的值（这个对话框还提供了该参数的额外细节信息——包括是否需要重启才能使参数生效）。")]),t._v(" "),s("p",[s("img",{attrs:{src:_(452),alt:"更改参数值"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("当您点击 "),s("strong",[t._v("保存")]),t._v(" 时，参数会自动上传到所连接的载具。 根据参数，您可能需要重新启动飞控才能使更改生效。")])]),t._v(" "),s("h2",{attrs:{id:"工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[t._v("#")]),t._v(" 工具")]),t._v(" "),s("p",[t._v("您可以在屏幕右上角的**工具 (Tools)**菜单中选择更多的选项。")]),t._v(" "),s("p",[s("img",{attrs:{src:_(453),alt:"工具菜单"}})]),t._v(" "),s("p",[s("strong",[t._v("刷新")]),t._v(" "),s("br"),t._v("用从载具上重新请求的所有参数值刷新地面站上的参数值。")]),t._v(" "),s("p",[s("strong",[t._v("重置所有参数为默认值")]),t._v(" "),s("br"),t._v("将全部参数重置为原始默认值。")]),t._v(" "),s("p",[s("strong",[t._v("从文件中载入/保存到文件")]),t._v(" "),s("br"),t._v("从现有文件中载入参数或将当前参数设置保存到一个文件。")]),t._v(" "),s("p",[s("strong",[t._v("清空遥控器参数")]),t._v(" "),s("br"),t._v("清除全部与遥控器相关的参数。 更多信息请参见："),s("RouterLink",{attrs:{to:"/zh/config/radio.html#param-tuning-channels"}},[t._v("遥控器设置 > 通道参数调校 ")]),t._v("。")],1),t._v(" "),s("p",[s("strong",[t._v("重启载具")]),t._v(" "),s("br"),t._v("重新启动载具（更改一些参数后需要）。")])])}),[],!1,null,null,null);a.default=r.exports},450:function(t,a,_){t.exports=_.p+"assets/img/parameters_search.2e60193b.jpg"},451:function(t,a,_){t.exports=_.p+"assets/img/parameters_px4.38575abe.jpg"},452:function(t,a,_){t.exports=_.p+"assets/img/parameters_changing.5e0d3746.png"},453:function(t,a,_){t.exports=_.p+"assets/img/parameters_tools_menu.c4a7442b.png"}}]);