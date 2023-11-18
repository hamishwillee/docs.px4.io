(window.webpackJsonp=window.webpackJsonp||[]).push([[1088],{2163:function(e,t,s){"use strict";s.r(t);var i=s(19),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"uorb-publication-subscription-graph"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uorb-publication-subscription-graph"}},[e._v("#")]),e._v(" uORB Publication/Subscription Graph")]),e._v(" "),s("p",[e._v("This page provides a uORB publication/subscription graph that shows the communication between modules.\nIt is based on information that is extracted directly from the source code.\nUsage instructions are provided "),s("a",{attrs:{href:"#graph-properties"}},[e._v("below")]),e._v(".")]),e._v(" "),s("p",[e._v("Search: "),s("input",{attrs:{id:"search",type:"text"}}),e._v("\nPreset: "),s("select",{attrs:{id:"select-graph",name:"select-graph"}},[s("option",{attrs:{value:"graph_full_no_mavlink.json"}},[e._v("All Modules (w/o mavlink)")]),e._v(" "),s("option",{attrs:{value:"graph_full.json"}},[e._v("All Modules")]),e._v(" "),s("option",{attrs:{value:"graph_px4_sitl.json"}},[e._v("SITL Modules")]),e._v(" "),s("option",{attrs:{value:"graph_px4_fmu-v5.json"}},[e._v("FMUv5 Modules")]),e._v(" "),s("option",{attrs:{value:"graph_px4_fmu-v4.json"}},[e._v("FMUv4 Modules")]),e._v(" "),s("option",{attrs:{value:"graph_px4_fmu-v2.json"}},[e._v("FMUv2 Modules")])]),e._v(" "),s("br"),e._v(" "),s("svg",{staticStyle:{"text-align":"center","margin-left":"-230px","margin-right":"-230px"},attrs:{id:"svg-graph",width:"1200",height:"1400"}}),e._v(" "),s("script",{attrs:{type:"application/javascript",src:"https://d3js.org/d3.v4.min.js",asysc:""}}),e._v(" "),s("script",{attrs:{type:"application/javascript",src:"uorb_graph.js",asysc:""}})]),e._v(" "),s("h2",{attrs:{id:"graph-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#graph-properties"}},[e._v("#")]),e._v(" Graph Properties")]),e._v(" "),s("p",[e._v("The graph has the following properties:")]),e._v(" "),s("ul",[s("li",[e._v("Modules are shown in gray with rounded corners while topics are displayed as coloured rectangular boxes.")]),e._v(" "),s("li",[e._v("Associated modules and topics are connected by lines.\nDashed lines indicate that the module publishes the topic, solid lines indicate that the module subscribes to the topic, while dot-dashed lines indicate that the module both publishes and subscribes to the topic.")]),e._v(" "),s("li",[e._v("Some modules and topics are excluded:\n"),s("ul",[s("li",[e._v("Topics that are subscribed/published by many modules: "),s("code",[e._v("parameter_update")]),e._v(", "),s("code",[e._v("mavlink_log")]),e._v(" and "),s("code",[e._v("log_message")]),e._v(".")]),e._v(" "),s("li",[e._v("The set of logged topics.")]),e._v(" "),s("li",[e._v("Topics that have no subscriber or no publisher.")]),e._v(" "),s("li",[e._v("Modules in "),s("strong",[e._v("src/examples")]),e._v(".")])])]),e._v(" "),s("li",[e._v("Hovering over a module/topic highlights all its connections.")]),e._v(" "),s("li",[e._v("Double-clicking on a topic opens its message definition.")]),e._v(" "),s("li",[e._v("Make sure your browser window is wide enough to display the full graph (the sidebar menu can be hidden with the icon in the top-left corner).\nYou can also zoom the image.")]),e._v(" "),s("li",[e._v("The "),s("em",[e._v("Preset")]),e._v(" selection list allows you to refine the list of modules that are shown.")]),e._v(" "),s("li",[e._v("The "),s("em",[e._v("Search")]),e._v(" box can be used to find particular modules/topics (topics that are not selected by the search are greyed-out).")])])])}),[],!1,null,null,null);t.default=o.exports}}]);