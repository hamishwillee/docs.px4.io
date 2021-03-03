(window.webpackJsonp=window.webpackJsonp||[]).push([[1277],{2682:function(t,e,a){"use strict";a.r(e);var r=a(18),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"各种说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各种说明"}},[t._v("#")]),t._v(" 各种说明")]),t._v(" "),a("p",[t._v("这是在设置或使用 UAVCAN 时解决问题的一系列提示和技巧。")]),t._v(" "),a("h3",{attrs:{id:"解锁-但电机不旋转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解锁-但电机不旋转"}},[t._v("#")]),t._v(" 解锁，但电机不旋转")]),t._v(" "),a("p",[t._v("If the PX4 Firmware arms but the motors do not start to rotate, check the parameter "),a("strong",[t._v("UAVCAN_ENABLE")]),t._v(". It should be set to 3 in order to use the ESCs connected via UAVCAN as output. Moreover, if the motors do not start spinning before thrust is increased, check "),a("strong",[t._v("UAVCAN_ESC_IDLT")]),t._v(" and set it to one. 它应该设置为 3，以便使用通过 UAVCAN 连接的电调作为输出。 此外，如果电机在增加推力之前没有开始旋转，请检查 "),a("strong",[t._v("UAVCAN_ESC_IDLT")]),t._v(" 并将其设置为 1。")]),t._v(" "),a("h3",{attrs:{id:"用-zubax-babel-进行调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-zubax-babel-进行调试"}},[t._v("#")]),t._v(" 用 Zubax Babel 进行调试")]),t._v(" "),a("p",[t._v("A great tool to debug the transmission on the UAVCAN bus is the "),a("a",{attrs:{href:"https://docs.zubax.com/zubax_babel",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zubax Babel"),a("OutboundLink")],1),t._v(" in combination with the "),a("a",{attrs:{href:"http://uavcan.org/GUI_Tool/Overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GUI tool"),a("OutboundLink")],1),t._v(". They can also be used independently from Pixhawk hardware in order to test a node or manually control UAVCAN enabled ESCs. 它们还可以独立于 Pixhawk 硬件使用，以测试节点或手动控制启用了 UAVCAN 的电调。")]),t._v(" "),a("h3",{attrs:{id:"uavcan-devices-dont-get-node-id-fw-doesn-t-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-devices-dont-get-node-id-fw-doesn-t-update"}},[t._v("#")]),t._v(" UAVCAN devices dont get node ID/FW doesn't update")]),t._v(" "),a("p",[t._v("PX4 requires an SD card for UAVCAN node allocation and firmware upgrade (both of which happen during boot). Check that there is a (working) SD card present and reboot.")])])}),[],!1,null,null,null);e.default=o.exports}}]);