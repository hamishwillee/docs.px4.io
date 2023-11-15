(window.webpackJsonp=window.webpackJsonp||[]).push([[755],{2571:function(e,t,n){"use strict";n.r(t);var o=n(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"auterion-skynode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#auterion-skynode"}},[e._v("#")]),e._v(" Auterion Skynode")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://auterion.com/product/skynode/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Skynode"),o("OutboundLink")],1),e._v(" is a powerful flight computer that combines a mission computer, flight controller, video streaming, networking, and cellular connection, in a single tightly integrated device.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(609),alt:"Auterion Skynode (Enterprise)"}})]),e._v(" "),o("p",[e._v('The onboard software is Auterion OS, consisting of an enterprise-hardened version of PX4 running on the flight controller, and an operating system with advanced management software running on the mission computer. The OS is managed by Auterion in production, with customer applications running as "add ons" in a safe sandbox within the mission computer.')]),e._v(" "),o("p",[e._v("Auterion OS and Skynode allow seamless integration with Auterion's other software and fleet management products.")]),e._v(" "),o("p",[e._v("For information about Auterion and Skynode:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://auterion.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("auterion.com"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://auterion.com/product/skynode/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Skynode"),o("OutboundLink")],1),e._v(" (auterion.com)")]),e._v(" "),o("li",[e._v("Skynode Guides:\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.auterion.com/manufacturers/getting-started/readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manufacturer's Guide"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.auterion.com/developers/getting-started/readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Developer's Guide"),o("OutboundLink")],1)])])])]),e._v(" "),o("h2",{attrs:{id:"skynode-with-vanilla-px4"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#skynode-with-vanilla-px4"}},[e._v("#")]),e._v(" Skynode with Vanilla PX4")]),e._v(" "),o("p",[e._v('Skynode comes with an Auterion-managed release of PX4. If you would like to try a more recent PX4 flight kernel, you can install the upstream "vanilla" PX4 from '),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Autopilot"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Upstream PX4 will generally work, with the following caveats:")]),e._v(" "),o("ul",[o("li",[e._v("Configuration for your exact product may not be present. You may lose the configuration for ESCs, batteries, sensor configuration, and so on.")]),e._v(" "),o("li",[e._v("Some parameters might have different default values in the PX4 release shipped with Auterion OS.")]),e._v(" "),o("li",[e._v("Features accessed by vendor-specific customisations running on the companion computer may not be present in PX4.")]),e._v(" "),o("li",[e._v("Auterion supports Skynode running its own Auterion-managed version of PX4.")])]),e._v(" "),o("h2",{attrs:{id:"building-uploading-firmware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-uploading-firmware"}},[e._v("#")]),e._v(" Building/Uploading Firmware")]),e._v(" "),o("p",[e._v("PX4 "),o("code",[e._v("px4_fmu-v5x")]),e._v(" binaries for Skynode are built from source using the normal "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[e._v("developer environment")]),e._v(" and "),o("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[e._v("build commands")]),e._v(", and are uploaded using either "),o("code",[e._v("upload_skynode_usb")]),e._v(" or "),o("code",[e._v("upload_skynode_wifi")]),e._v(" upload targets.")],1),e._v(" "),o("p",[o("code",[e._v("upload_skynode_usb")]),e._v(" and "),o("code",[e._v("upload_skynode_wifi")]),e._v(" connect to Skynode via SSH over a network interface using the default (fixed) IP addresses for "),o("a",{attrs:{href:"https://docs.auterion.com/manufacturers/avionics/skynode/advanced-configuration/connecting-to-skynode",target:"_blank",rel:"noopener noreferrer"}},[e._v("USB"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://docs.auterion.com/manufacturers/avionics/skynode/advanced-configuration/configuration",target:"_blank",rel:"noopener noreferrer"}},[e._v("WiFi"),o("OutboundLink")],1),e._v(", and upload a TAR compressed binary to the mission computer. The mission computer then decompresses the binary and installs it to the flight controller.")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("SSH and TAR are needed to use these upload targets, but are expected to be present by default on Ubuntu and Ubuntu running on Windows in WSL2. On macOS you should first install "),o("a",{attrs:{href:"https://formulae.brew.sh/formula/gnu-tar",target:"_blank",rel:"noopener noreferrer"}},[e._v("gnu-tar"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("p",[e._v("You will need to enter the password for the Skynode developer image password twice during the upload process.")]),e._v(" "),o("tabs",[o("tab",{attrs:{name:"Skynode connected via USB"}},[o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("make px4_fmu-v5x upload_skynode_usb\n")])])])]),e._v(" "),o("tab",{attrs:{name:"Skynode connected via WiFi"}},[o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("make px4_fmu-v5x upload_skynode_wifi\n")])])])]),e._v(" "),o("p",[e._v(":\n:::")]),e._v(" "),o("h2",{attrs:{id:"restoring-the-default-px4-firmware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#restoring-the-default-px4-firmware"}},[e._v("#")]),e._v(" Restoring the Default PX4 Firmware")]),e._v(" "),o("p",[e._v("To reinstall the original Skynode version of PX4 when connected via USB run the following command in the repository:")]),e._v(" "),o("tabs",[o("tab",{attrs:{name:"Skynode connected via USB"}},[o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("./Tools/auterion/upload_skynode.sh --revert\n")])])])]),e._v(" "),o("tab",{attrs:{name:"Skynode connected via WiFi"}},[o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("./Tools/auterion/upload_skynode.sh --revert --wifi\n")])])])]),e._v(" "),o("p",[e._v(":\n:::")])],1)],1)],1)}),[],!1,null,null,null);t.default=a.exports},609:function(e,t,n){e.exports=n.p+"assets/img/skynode_small.a3b8d984.png"}}]);