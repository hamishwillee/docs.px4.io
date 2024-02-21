(window.webpackJsonp=window.webpackJsonp||[]).push([[1915],{3433:function(t,a,e){"use strict";e.r(a);var n=e(19),o=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"px4-metadata-translation-publishing-params-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-metadata-translation-publishing-params-events"}},[t._v("#")]),t._v(" PX4 Metadata: Translation & Publishing (Params, Events)")]),t._v(" "),e("p",[t._v("PX4 uses and generates data that has associated human- and machine- readable metadata:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("Parameters")]),t._v(" configure PX4 behaviour.\n"),e("ul",[e("li",[t._v("A parameter is represented by an ID string that maps to a value stored in PX4.")]),t._v(" "),e("li",[t._v("The associated metadata includes a description of the setting, its possible values, information about how the value might be presented (say for bitmasks).")])])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/concept/events_interface.html"}},[t._v("Events")]),t._v(" provide notification of events, such as reasons for a failsafe, low battery warnings, end of calibration, and so on.\n"),e("ul",[e("li",[t._v("An event is represented by an id, and is sent with a log level, some message, and arguments.")]),t._v(" "),e("li",[t._v("The associated metadata includes a description of the event and the arguments.")])])],1)]),t._v(" "),e("p",[t._v("The metadata and metadata translations are shared with external systems, such as QGroundControl, allowing them to display information about parameters and events as a string in the user's own language.")]),t._v(" "),e("p",[t._v('This topic explains how you can define metadata and help translate strings (and "just for your information", how it all works).')]),t._v(" "),e("h2",{attrs:{id:"metadata-translation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metadata-translation"}},[t._v("#")]),t._v(" Metadata Translation")]),t._v(" "),e("p",[t._v("Translations for PX4 metadata are done using Crowdin in the "),e("a",{attrs:{href:"https://crowdin.com/project/px4-metadata-translations",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Metadata-Translations"),e("OutboundLink")],1),t._v(" project.\nFor more information about working with PX4 and Crowdin see "),e("RouterLink",{attrs:{to:"/zh/contribute/translation.html"}},[t._v("Translation")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"defining-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defining-metadata"}},[t._v("#")]),t._v(" Defining Metadata")]),t._v(" "),e("p",[t._v("PX4 metadata is defined in PX4 source code alongside its associated data.\nOften this is done in a C/C++ comment with special markup to indicate metadata fields and their values.\nIn some cases YAML files are used.")]),t._v(" "),e("p",[t._v("For more information see the topics for each data type:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced/parameters_and_configurations.html#creating-defining-parameters"}},[t._v("Parameters & Configurations > Creating/Defining Parameters")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/concept/events_interface.html"}},[t._v("Events Interface")])],1)]),t._v(" "),e("h2",{attrs:{id:"metadata-toolchain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metadata-toolchain"}},[t._v("#")]),t._v(" Metadata Toolchain")]),t._v(" "),e("p",[t._v("The process for handling metadata is the same for both event and parameter metadata.")]),t._v(" "),e("p",[t._v("Metadata is collected into JSON and XML files every time PX4 is built.")]),t._v(" "),e("p",[t._v("For most flight controllers (as most have enough FLASH available), the JSON file is xz-compressed and stored within the generated binary.\nThe file is then shared to ground stations using the MAVLink "),e("a",{attrs:{href:"https://mavlink.io/en/services/component_information.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Component Information Protocol"),e("OutboundLink")],1),t._v(".\nUsing the component metadata protocol ensures that the recipient can always fetch up-to-date metadata for the code running on the vehicle.")]),t._v(" "),e("p",[t._v("Binaries for flight controller targets with constrained memory do not store the parameter metadata in the binary, but instead reference the same data stored on "),e("code",[t._v("px4-travis.s3.amazonaws.com")]),t._v(".\nThis applies, for example, to the "),e("RouterLink",{attrs:{to:"/zh/flight_controller/omnibus_f4_sd.html"}},[t._v("Omnibus F4 SD")]),t._v(".\nThe metadata is uploaded via "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/.github/workflows/metadata.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("github CI"),e("OutboundLink")],1),t._v(" for all build targets (and hence will only be available once parameters have been merged into main).")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("You can identify memory constrained boards because they specify "),e("code",[t._v("CONFIG_BOARD_CONSTRAINED_FLASH=y")]),t._v(" in their "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/boards/omnibus/f4sd/default.px4board",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4board definition file"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("If doing custom development on a FLASH-constrained board you can adjust the URL "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/component_information/CMakeLists.txt#L41",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(" to point to another server.")])]),t._v(" "),e("p",[t._v("The metadata on "),e("code",[t._v("px4-travis.s3.amazonaws.com")]),t._v(" is used if parameter metadata is not present on the vehicle.\nIt may also be used as a fallback to avoid a very slow download over a low-rate telemetry link.")]),t._v(" "),e("p",[t._v("The metadata JSON files for CI builds of "),e("code",[t._v("main")]),t._v(" are also copied to the github repo: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Metadata-Translations/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Metadata-Translations"),e("OutboundLink")],1),t._v(".\nThis integrates with Crowdin to get translations, which are stored in the "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Metadata-Translations/tree/main/translated",target:"_blank",rel:"noopener noreferrer"}},[t._v("translated"),e("OutboundLink")],1),t._v(" folder as xz-compressed translation files for each language.\nThese are referenced by the vehicle component metadata, and are downloaded when needed.\nFor more information see "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Metadata-Translations/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Metadata-Translations"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://mavlink.io/en/services/component_information.html#translation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Component Metadata Protocol > Translation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("The parameter XML file of the main branch is copied into the QGC source tree via CI and is used as a fallback in cases where no metadata is available via the component metadata protocol (this approach predates the existence of the component metadata protocol).")])]),t._v(" "),e("h2",{attrs:{id:"further-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced/parameters_and_configurations.html"}},[t._v("Parameters & Configurations")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/concept/events_interface.html"}},[t._v("Events Interface")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/contribute/translation.html"}},[t._v("Translation")])],1),t._v(" "),e("li",[e("a",{attrs:{href:"https://mavlink.io/en/services/component_information.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Component Metadata Protocol"),e("OutboundLink")],1),t._v(" (mavlink.io)")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Metadata-Translations/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Metadata-Translations"),e("OutboundLink")],1),t._v(" (Github)")])])])}),[],!1,null,null,null);a.default=o.exports}}]);