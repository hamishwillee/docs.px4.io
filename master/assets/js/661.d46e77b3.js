(window.webpackJsonp=window.webpackJsonp||[]).push([[661],{2436:function(t,_,v){"use strict";v.r(_);var e=v(18),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"跟随模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跟随模式"}},[t._v("#")]),t._v(" 跟随模式")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[e("img",{attrs:{src:v(322),title:"需要定位（例如GPS）",width:"30px"}})])],1),t._v(" "),e("p",[e("em",[t._v("跟随")]),t._v("模式允许多旋翼无人机自主跟随并跟踪使用"),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#FOLLOW_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("FOLLOW_TARGET"),e("OutboundLink")],1),t._v(" MAVLink消息广播其位置的另一个系统。")]),t._v(" "),e("p",[t._v("无人机将自动偏航到朝向并跟随指定的"),e("a",{attrs:{href:"#NAV_FT_FS"}},[t._v("相对位置")]),t._v("目标，目标的"),e("a",{attrs:{href:"#NAV_FT_DST"}},[t._v("水平间距")]),t._v("和"),e("a",{attrs:{href:"#NAV_MIN_FT_HT"}},[t._v("高度")]),t._v("是从起始位置上方。 默认情况下跟随是从距离目标后面 8 米， 距离起始 / 解锁位置以上 8 米高的位置开始。 在此模式下不需要用户输入。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("PX4 当前忽略目标的高度 / 从目标开始的高度，并与高于起始位置的恒定高度跟随。 这一限制是因为来自地面站 GPS 的高度源通常不准确。")])]),t._v(" "),e("p",[t._v("该模式支持具有 GPS 模块的 安卓平板上的 "),e("em",[t._v("QGroundControl")]),t._v(" 和 "),e("a",{attrs:{href:"https://mavsdk.mavlink.io/develop/en/api_reference/classmavsdk_1_1_follow_me.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("ul",[e("li",[t._v("该模式需要 GPS。 * 该模式目前仅支持多旋翼。 * 跟随的目标必须能够提供位置信息。 * "),e("em",[t._v("QGroundControl")]),t._v(" 仅在有 GPS 的安卓设备上支持该模式。")])])]),t._v(" "),e("p",[t._v("{% youtube %} https://www.youtube.com/watch?v=RxDL4CtkzAQ {% endyoutube %}")]),t._v(" "),e("h2",{attrs:{id:"安全须知"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全须知"}},[t._v("#")]),t._v(" 安全须知")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[e("strong",[t._v("跟随模式")]),t._v("没有实现任何类型的避障功能，使用此模式是必须格外小心。")])]),t._v(" "),e("p",[t._v("应遵守以下飞行预防措施： - 跟随模式只能再不受树木，电线，房屋等遮挡的广阔区域中使用。 - 将 "),e("a",{attrs:{href:"#NAV_MIN_FT_HT"}},[t._v("跟随高度")]),t._v(" 设置为远高于周围障碍物的值。 "),e("em",[t._v("默认")]),t._v("这个值是高于起始（解锁）位置 8 米 / 26 英尺。 - 在进入跟随我模式之前，手动飞到安全高度比降落时进入跟随我模式更安全（即使该模式实现了自动起飞）。 - 给无人机留足够的空间来停止，尤其是在快速移动是。 许多安卓设备不会非常频繁的更新其位置，并且自驾仪对速度和方向的估计可能是不准确的。 如果第一次使用跟随模式时发生问题，随时准备手动遥控。 定位的准确性取决于目标系统使用的 GPS 的质量。 如果 GPS 不准确，这将反映在跟随模式中。")]),t._v(" "),e("h2",{attrs:{id:"配合qgroundcontrol使用跟随模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配合qgroundcontrol使用跟随模式"}},[t._v("#")]),t._v(" 配合QGroundControl使用跟随模式")]),t._v(" "),e("p",[e("em",[t._v("QGroundControl")]),t._v(" 在拥有 GPS 模块的地面站硬件上支持"),e("em",[t._v("跟随")]),t._v("模式。 推荐的配置是一个能使用 USB OTG 的安卓设备，配备两个数传。")]),t._v(" "),e("p",[t._v("配置 "),e("em",[t._v("跟随")]),t._v(" 模式： - 将一个数传连接到安卓设备，另外一个连接到无人机（这使得位置信息可以在两个数传之间中继）。 - 禁用安卓设备的休眠模式： - 这个设置通常可以在 "),e("strong",[t._v("设置 > 显示")]),t._v(" 中找到。 将安卓设备设置为不进入睡眠状态非常重要，因为这可能导致 GPS 信号停止定期发射。 - 起飞到至少 2-3 米的高度（及时支持自动起飞也建议使用）。 - 将飞机放在地面上，按下安全开关并向后退至少 10 米。 - 解锁并起飞。 - 切换到跟随模式。 - 无人机会上升到指定的"),e("a",{attrs:{href:"#NAV_MIN_FT_HT"}},[t._v("最小高度")]),t._v("， 然后暂停一段时间来评估数传链路。 如果链路更新速率正常， 多旋翼无人机将偏航到朝向目标。")]),t._v(" "),e("p",[t._v("此时应该可以移动了，并且无人机会跟随你的移动。")]),t._v(" "),e("p",[t._v("该模式已经在以下的安卓设备上测试过： - Nexus 5 - Nexus 7 平板")]),t._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("p",[t._v("可以使用以下参数配置跟随的行为：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("span",{attrs:{id:"NAV_FT_DST"}}),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_FT_DST"}},[t._v("NAV_FT_DST")])],1),t._v(" "),e("td",[t._v("无人机 / 地面站在"),e("em",[t._v("水平")]),t._v(" （x，y）平面上分离。最小允许间距为 1 米。默认距离为 8 米（约 26 英尺）。")])]),t._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"NAV_MIN_FT_HT"}}),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_MIN_FT_HT"}},[t._v("NAV_MIN_FT_HT")])],1),t._v(" "),e("td",[t._v("无人机跟随高度。 注意，此高度"),e("em",[t._v("相对起始/解锁位置")]),t._v("是固定的（不是目标无人机）。默认最小高度是 8 米（约 26 英尺）。")])]),t._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"NAV_FT_FS"}}),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_FT_FS"}},[t._v("NAV_FT_FS")])],1),t._v(" "),e("td",[t._v("当跟随模式处于激活状态，相对于用户的飞行位置。")])])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("0")]),t._v(" = 从右前方跟随。")]),t._v(" "),e("li",[e("code",[t._v("1")]),t._v(" = 从用户后方或者尾部跟随（默认）。")]),t._v(" "),e("li",[e("code",[t._v("2")]),t._v(" = 从正前方跟随。")]),t._v(" "),e("li",[e("code",[t._v("3")]),t._v(" = 从左前方跟随。 |")])]),t._v(" "),e("h2",{attrs:{id:"已知的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#已知的问题"}},[t._v("#")]),t._v(" 已知的问题")]),t._v(" "),e("ul",[e("li",[t._v("已知 SiK 915 Mhz "),e("RouterLink",{attrs:{to:"/zh/telemetry/sik_radio.html"}},[t._v("数传")]),t._v(" 会干扰某些安卓设备的 GPS 信号接收。 保持数传和安卓设备之间尽可能远的距离，避免使用跟随模式时受到干扰。")],1)])])}),[],!1,null,null,null);_.default=r.exports},322:function(t,_,v){t.exports=v.p+"assets/img/position_fixed.c1403cf0.svg"}}]);