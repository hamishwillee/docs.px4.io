(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1397:function(t,e,a){t.exports=a.p+"assets/img/plotjuggler_timeseries_search_and_drop.c6fead06.svg"},1398:function(t,e,a){t.exports=a.p+"assets/img/plotjuggler_dragdrop_multipanel.6ea23157.gif"},1399:function(t,e,a){t.exports=a.p+"assets/img/plotjuggler_2d_graph.abb9f630.gif"},1400:function(t,e,a){t.exports=a.p+"assets/img/plotjuggler_2d_graph_pos_vel_analysis.40be16e6.gif"},1401:function(t,e,a){t.exports=a.p+"assets/img/plotjuggler_quaternion_to_roll_lua_script.7eaf49df.png"},1402:function(t,e,a){t.exports=a.p+"assets/img/plotjuggler_quaternion_roll_plotted.eee59be2.png"},2105:function(t,e,a){"use strict";a.r(e);var s=a(19),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"log-analysis-using-plotjuggler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-analysis-using-plotjuggler"}},[t._v("#")]),t._v(" Log Analysis using PlotJuggler")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/facontidavide/PlotJuggler",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlotJuggler"),s("OutboundLink")],1),t._v(" can be used to analyze ULogs for in-depth, development purposes.\nIt is incredibly useful as every uORB topic is exposed / can be graphed, as well as having custom functions to modify the data (e.g. from Quaternion values to Roll / Pitch / Yaw).")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("You can find the latest releases of the Plot Juggler "),s("a",{attrs:{href:"https://github.com/facontidavide/PlotJuggler/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"notes-on-windows-distribution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes-on-windows-distribution"}},[t._v("#")]),t._v(" Notes on Windows distribution")]),t._v(" "),s("p",[t._v("The latest version of PlotJuggler for Windows may not work.\nIn this case fallback to "),s("a",{attrs:{href:"https://github.com/facontidavide/PlotJuggler/releases/tag/2.8.4",target:"_blank",rel:"noopener noreferrer"}},[t._v("v2.8.4 here"),s("OutboundLink")],1),t._v(" (this is known to work with Windows).")]),t._v(" "),s("h4",{attrs:{id:"notes-on-appimage-for-linux-distributions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notes-on-appimage-for-linux-distributions"}},[t._v("#")]),t._v(" Notes on AppImage for Linux distributions")]),t._v(" "),s("p",[t._v("If the downloaded AppImage does not open, you may need to change its access settings.\nThis is done in the terminal using the following command:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Path-To-PlotJuggler-AppImage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"general-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-usage"}},[t._v("#")]),t._v(" General Usage")]),t._v(" "),s("p",[t._v('Two most common tasks are "Searching" for the logged uORB topic, and "Drag and Dropping" a field in a specific topic onto the graph view.\nThese are demonstrated in the diagram below.')]),t._v(" "),s("p",[s("img",{attrs:{src:a(1397),alt:"Plot Juggler basic usage"}})]),t._v(" "),s("h3",{attrs:{id:"splitting-horizontally-vertically-multi-panel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#splitting-horizontally-vertically-multi-panel"}},[t._v("#")]),t._v(" Splitting Horizontally / Vertically : Multi Panel")]),t._v(" "),s("p",[t._v("One of the most powerful feature is splitting the screen in either horizontal/vertical orientation and displaying different graphs at the same time ( with a synchronized time-bar on top, as you move the time cursor in the bottom).")]),t._v(" "),s("p",[t._v("This is demonstrated in an animation below:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1398),alt:"Plot Juggler Multi panel demonstration"}})]),t._v(" "),s("p",[t._v("In this example, "),s("code",[t._v("vehicle_local_position")]),t._v(" topic's "),s("code",[t._v("ax")]),t._v(", "),s("code",[t._v("ay")]),t._v(" and "),s("code",[t._v("az")]),t._v(" (Acceleration estimate) components were graphed first by splitting the screen in 3 sections.\nThen, the "),s("code",[t._v("vz")]),t._v(" (Velocity estimate) component was added under right pane, and finally "),s("code",[t._v("battery_status")]),t._v(" topic's "),s("code",[t._v("current_a")]),t._v(" (Battery current) was graphed in the lower-mid pane.")]),t._v(" "),s("p",[t._v("Although not obvious in the beginning you can observe that whenever the vehicle starts moving (battery current value goes high), the acceleration and velocity values start to move around as well.\nThis is because all the data is displayed as a time-series, which shows each value at on a specific timestamp.")]),t._v(" "),s("p",[t._v("This is useful for providing a broad view of what happened and why.\nIt is often hard to troubleshoot a problem just by looking at one graph, but by having multiple graphs displayed, it is much easier to figure out what was going on in the system.")]),t._v(" "),s("h3",{attrs:{id:"displaying-data-in-2d"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#displaying-data-in-2d"}},[t._v("#")]),t._v(" Displaying Data in 2D")]),t._v(" "),s("p",[t._v("Another powerful feature is the ability to display 2D data on a XY plane (each data on X, Y axis) in a scatter-plot manner.\nThis is done by selecting two data points by holding "),s("code",[t._v("Ctrl")]),t._v(" key while selecting each of them (e.g. "),s("code",[t._v("vehicle_local_position")]),t._v(" topic's "),s("code",[t._v("x")]),t._v(" and "),s("code",[t._v("y")]),t._v(" components), and drag & dropping it with the "),s("code",[t._v("Right mouse cursor")]),t._v(" pressed.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1399),alt:"Plot Juggler 2D graphing"}})]),t._v(" "),s("p",[t._v("In this example, the estimated vehicle's position in local coordinate frame is graphed onto a XY-plane which shows a 2D view of the estimated position, and the "),s("code",[t._v("vx")]),t._v(" and "),s("code",[t._v("vy")]),t._v(" components (Velocity estimate) are graphed on the right, with the "),s("code",[t._v("vz")]),t._v(" (Vertical velocity estimate) graphed underneath it in a split view.")]),t._v(" "),s("p",[t._v("This in turn shows the relationship between position and the velocity of the vehicle intuitively.\nFor example, note how when the vehicle moves in the X-axis direction, the "),s("code",[t._v("vx")]),t._v(" value goes high, and as the vehicle turns to the Y-axis direction, the "),s("code",[t._v("vy")]),t._v(" value starts to change as well.")]),t._v(" "),s("h4",{attrs:{id:"using-the-play-button"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-play-button"}},[t._v("#")]),t._v(" Using the 'Play' button")]),t._v(" "),s("p",[t._v("Here the "),s("strong",[t._v("Play")]),t._v(" button is used to play the recorded data in real time (speed factor can be adjusted in the lower-right corner).\nThis shows the position / velocity relationship described above in detail.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1400),alt:"Plot Juggler 2D in-depth analysis"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Try out the boat testing log analysis yourself by downloading the ULog and Layout file used above!")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/main/assets/flight_log_analysis/plot_juggler/sample_log_boat_testing_2022-7-28-13-31-16.ulg",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boat testing ULog"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/PX4-user_guide/main/assets/flight_log_analysis/plot_juggler/sample_log_boat_testing_layout.xml",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boat testing Analysis Layout"),s("OutboundLink")],1)])])]),t._v(" "),s("h3",{attrs:{id:"layout-templates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layout-templates"}},[t._v("#")]),t._v(" Layout Templates")]),t._v(" "),s("p",[t._v("There are a number of PlotJuggler layout files shared by PX4 Developers.\nEach can be used for a specific purpose (Multicopter tuning, VTOL tuning, Boat debugging, etc.):")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/blob/main/assets/flight_log_analysis/plot_juggler/plotjuggler_sample_view.xml",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sample View layout"),s("OutboundLink")],1),t._v(" : Template used in the "),s("a",{attrs:{href:"#splitting-horizontally-vertically-multi-panel"}},[t._v("Multi-panel example")]),t._v(" above.")])]),t._v(" "),s("h2",{attrs:{id:"advanced-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-usage"}},[t._v("#")]),t._v(" Advanced Usage")]),t._v(" "),s("h3",{attrs:{id:"creating-custom-time-series-using-lua-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-custom-time-series-using-lua-script"}},[t._v("#")]),t._v(" Creating custom time series using LUA script")]),t._v(" "),s("p",[t._v("Plot Juggler supports having LUA scripts to process and display data.\nThis is a powerful feature that can do things like integrating the curve, averaging two curves, removing offsets, etc.")]),t._v(" "),s("h4",{attrs:{id:"calculating-roll-pitch-yaw-from-quaternion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#calculating-roll-pitch-yaw-from-quaternion"}},[t._v("#")]),t._v(" Calculating Roll/Pitch/Yaw from Quaternion")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1401),alt:"Quaternion to Roll using Lua script"}})]),t._v(" "),s("p",[t._v("To know vehicle's attitude, PX4 logs the estimated attitude's quaternion in the "),s("code",[t._v("vehicle_attitude")]),t._v(" topic in an array of floating point values (q[4]).\nSince these values don't give contextual information (e.g. "),s("code",[t._v("roll")]),t._v("), it needs a transformation involving trigonometric functions.")]),t._v(" "),s("ol",[s("li",[t._v("Search for "),s("code",[t._v("vehicle_attitude")]),t._v(" topic in Timeseries List panel on the left")]),t._v(" "),s("li",[t._v("Select 4 quaternion members ("),s("code",[t._v("q.00, q.01, q.02, q.03")]),t._v(") by clicking "),s("code",[t._v("q.00")]),t._v(" first, then holding Shift + clicking "),s("code",[t._v("q.03")]),t._v(". They should all be selected")]),t._v(" "),s("li",[t._v("Click the '+' symbol in the lower-left 'Custom Series' section to create new series")]),t._v(" "),s("li",[t._v("Select 4 quaternion members again, and drag them to 'Input timeseries + Additional source timeseries' tab on upper-left corner")]),t._v(" "),s("li",[t._v("Double click on the "),s("code",[t._v("quat_to_roll")]),t._v(" from the Function Library. Now you should have the plot on upper section")]),t._v(" "),s("li",[t._v("Assign the name for the plot (e.g. "),s("code",[t._v("roll")]),t._v(") in the text box in upper-right corner")]),t._v(" "),s("li",[t._v("Click 'Create New Timeseries'. You should now have the plot in 'Custom Series'")])]),t._v(" "),s("p",[t._v("Here the custom series "),s("code",[t._v("Roll")]),t._v(" is displayed along with other timeseries, including it's original form in Quaternion on the right, which is not human-readable (using PlotJuggler 3.5.0):")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1402),alt:"Quaternion Roll plotted"}})]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("quat_to_roll")]),t._v(" function looks like this:")]),t._v(" "),s("div",{staticClass:"language-lua extra-class"},[s("pre",{pre:!0,attrs:{class:"language-lua"}},[s("code",[t._v("w "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\nx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" v1\ny "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" v2\nz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" v3\n\ndcm21 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndcm22 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("w "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("z\n\nroll "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("atan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dcm21"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dcm22"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" roll\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);