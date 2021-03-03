(window.webpackJsonp=window.webpackJsonp||[]).push([[899],{1837:function(t,e,o){"use strict";o.r(e);var n=o(18),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"various-notes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#various-notes"}},[t._v("#")]),t._v(" Various Notes")]),t._v(" "),o("p",[t._v("This is a collection of tips and tricks to solve issues when setting up or working with the UAVCAN.")]),t._v(" "),o("h3",{attrs:{id:"arm-but-motors-not-spinning"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arm-but-motors-not-spinning"}},[t._v("#")]),t._v(" Arm but motors not spinning")]),t._v(" "),o("p",[t._v("If the PX4 Firmware arms but the motors do not start to rotate, check the parameter "),o("strong",[t._v("UAVCAN_ENABLE")]),t._v(".\nIt should be set to 3 in order to use the ESCs connected via UAVCAN as output.\nMoreover, if the motors do not start spinning before thrust is increased, check "),o("strong",[t._v("UAVCAN_ESC_IDLT")]),t._v(" and set it to one.")]),t._v(" "),o("h3",{attrs:{id:"debugging-with-zubax-babel"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debugging-with-zubax-babel"}},[t._v("#")]),t._v(" Debugging with Zubax Babel")]),t._v(" "),o("p",[t._v("A great tool to debug the transmission on the UAVCAN bus is the "),o("a",{attrs:{href:"https://zubax.com/products/babel",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zubax Babel"),o("OutboundLink")],1),t._v(" in combination with the "),o("a",{attrs:{href:"http://uavcan.org/GUI_Tool/Overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GUI tool"),o("OutboundLink")],1),t._v(".\nThey can also be used independently from Pixhawk hardware in order to test a node or manually control UAVCAN enabled ESCs.")]),t._v(" "),o("h3",{attrs:{id:"uavcan-devices-dont-get-node-id-fw-doesn-t-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-devices-dont-get-node-id-fw-doesn-t-update"}},[t._v("#")]),t._v(" UAVCAN devices dont get node ID/FW doesn't update")]),t._v(" "),o("p",[t._v("PX4 requires an SD card for UAVCAN node allocation and firmware upgrade (both of which happen during boot).\nCheck that there is a (working) SD card present and reboot.")])])}),[],!1,null,null,null);e.default=a.exports}}]);