(window.webpackJsonp=window.webpackJsonp||[]).push([[1627],{3075:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"modules-reference-transponder-driver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-reference-transponder-driver"}},[e._v("#")]),e._v(" Modules Reference: Transponder (Driver)")]),e._v(" "),a("h2",{attrs:{id:"sagetech-mxs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sagetech-mxs"}},[e._v("#")]),e._v(" sagetech_mxs")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/transponder/sagetech_mxs",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/transponder/sagetech_mxs"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("### Description\n\nThis driver integrates the Sagetech MXS Certified Transponder to send and receive ADSB messages and traffic.\n\n### Examples\n\nAttempt to start driver on a specified serial device.\n$ sagetech_mxs start -d /dev/ttyS1\nStop driver\n$ sagetech_mxs stop\nSet Flight ID (8 char max)\n$ sagetech_mxs flight_id MXS12345\nSet MXS Operating Mode\n$ sagetech_mxs opmode off/on/stby/alt\n$ sagetech_mxs opmode 0/1/2/3\nSet the Squawk Code\n$ sagetech_mxs squawk 1200\n")])])]),a("p",[a("a",{attrs:{id:"sagetech_mxs_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sagetech_mxs <command> [arguments...]\n Commands:\n   start         Start driver\n     -d <val>    Serial device\n\n   stop          Stop driver\n\n   flightid      Set Flight ID (8 char max)\n\n   ident         Set the IDENT bit in ADSB-Out messages\n\n   opmode        Set the MXS operating mode. ('off', 'on', 'stby', 'alt', or\n                 numerical [0-3])\n\n   squawk        Set the Squawk Code. [0-7777] Octal (no digit larger than 7)\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);