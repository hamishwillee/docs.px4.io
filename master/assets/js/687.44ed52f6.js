(window.webpackJsonp=window.webpackJsonp||[]).push([[687],{2506:function(t,_,e){"use strict";e.r(_);var r=e(18),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"固定翼着陆"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#固定翼着陆"}},[t._v("#")]),t._v(" 固定翼着陆")]),t._v(" "),r("p",[t._v("PX4 允许自动驾驶控制固定翼 (FW) 在 "),r("RouterLink",{attrs:{to:"/zh/flying/missions.html"}},[t._v("任务模式")]),t._v("、"),r("RouterLink",{attrs:{to:"/zh/flight_modes/land.html"}},[t._v("着陆模式")]),t._v(" 和 "),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("返航模式")]),t._v(" 中着陆。")],1),t._v(" "),r("p",[t._v("着陆逻辑有几个阶段，如下所示。 在第一阶段，飞行器将遵循固定的轨道 ("),r("a",{attrs:{href:"#FW_LND_ANG"}},[t._v("FW_LND_ANG")]),t._v(") 朝向地面。 在 flare 着陆高度 ("),r("a",{attrs:{href:"#FW_LND_FLALT"}},[t._v("FW_LND_FLALT")]),t._v(") ，飞行器将开始遵循 flare 路径(曲线基于 "),r("a",{attrs:{href:"#FW_LND_HVIRT"}},[t._v("FW_LND_HVIRT")]),t._v(" 的值)。")]),t._v(" "),r("p",[r("img",{attrs:{src:e(845),alt:"Fixed Wing - Landing Path"}})]),t._v(" "),r("p",[t._v("Flare 着陆高度是相对于固定翼“认为”的地平面高度而言的。 在 "),r("RouterLink",{attrs:{to:"/zh/flight_modes/land.html"}},[t._v("着陆模式")]),t._v(" 地面高度是未知的，飞行器将假定地面高度在 0 米(海平面)。 通常情况下，地面高度将远远高于海平面，因此飞行器将在第一阶段着陆(在到达 flare 高度之前它将降落在地面上)。")],1),t._v(" "),r("p",[t._v("在任务中，"),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[t._v("返航模式")]),t._v("，或者如果飞行器安装了距离传感器，则可以准确估计地平面高度，着陆行为将如上图所示。")],1),t._v(" "),r("p",[t._v("着陆进一步受到下列参数的影响：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_ANG"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_LND_ANG"}},[t._v("FW_LND_ANG")])],1),t._v(" "),r("td",[t._v("flaring 前降落坡度角")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_HVIRT"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_LND_HVIRT"}},[t._v("FW_LND_HVIRT")])],1),t._v(" "),r("td",[t._v("用于计算 flare 轨迹的虚拟水平线/高度。这代表了 flare 路径曲线渐近接近的地下高度。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_FLALT"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_LND_FLALT"}},[t._v("FW_LND_FLALT")])],1),t._v(" "),r("td",[t._v("着陆 flare 高度 (相对于着陆高度)")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_TLALT"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_LND_TLALT"}},[t._v("FW_LND_TLALT")])],1),t._v(" "),r("td",[t._v("着陆油门限制高度(相对着陆高度)。 默认值 -1.0 允许系统默认在 2/3 flare 高度施加油门限制。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_HHDIST"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_LND_HHDIST"}},[t._v("FW_LND_HHDIST")])],1),t._v(" "),r("td",[t._v("着陆航向保持水平距离")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_USETER"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_LND_USETER"}},[t._v("FW_LND_USETER")])],1),t._v(" "),r("td",[t._v("在着陆时使用地形估计(从 GPS 获得地面高度)。 默认情况下，这是关闭的，通常使用一个航点或返航高度(或海平面用于任意的着陆位置)。")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_FL_PMIN"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_LND_FL_PMIN"}},[t._v("FW_LND_FL_PMIN")])],1),t._v(" "),r("td",[t._v("Minimum pitch during flare. A positive sign means nose up Applied once "),r("code",[t._v("FW_LND_TLALT")]),t._v(" is reached")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_FL_PMAX"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_LND_FL_PMAX"}},[t._v("FW_LND_FL_PMAX")])],1),t._v(" "),r("td",[t._v("Maximum pitch during flare. A positive sign means nose up Applied once "),r("code",[t._v("FW_LND_TLALT")]),t._v(" is reached")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_AIRSPD_SC"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_LND_AIRSPD_SC"}},[t._v("FW_LND_AIRSPD_SC")])],1),t._v(" "),r("td",[t._v("起飞时最小 airspeed scaling factor for landing. Comment: Multiplying this factor with the minimum airspeed of the plane gives the target airspeed the landing approach. "),r("code",[t._v("FW_AIRSPD_MIN x FW_LND_AIRSPD_SC")])])])])])])}),[],!1,null,null,null);_.default=a.exports},845:function(t,_,e){t.exports=e.p+"assets/img/fw_landing_path.8b853a08.png"}}]);