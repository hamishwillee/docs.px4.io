(window.webpackJsonp=window.webpackJsonp||[]).push([[1835],{3333:function(e,t,a){"use strict";a.r(t);var s=a(19),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"events-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events-interface"}},[e._v("#")]),e._v(" Events Interface")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Events Interface")]),e._v(" provides a system-wide API for notification of events, which are published to GCSs via the "),a("em",[e._v("MAVLink Events Service")]),e._v(" (to GCSs and other components) and also stored in "),a("RouterLink",{attrs:{to:"/zh/dev_log/logging.html"}},[e._v("system logs")]),e._v(".")],1),e._v(" "),a("p",[e._v("The interface can be used for publishing events for state changes or any other type of occurrence, including things like arming readiness, calibration completion, and reaching the target takeoff height.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("The events interface will replace the use of "),a("code",[e._v("mavlink_log_*")]),e._v(" calls in PX4 code, (and "),a("code",[e._v("STATUS_TEXT")]),e._v(" messages in MAVLink) for event notification in the release after PX4 v1.12. There will be an intermediate period where "),a("a",{attrs:{href:"#backward-compatibility"}},[e._v("both approaches are supported")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("h3",{attrs:{id:"basic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[e._v("#")]),e._v(" Basic")]),e._v(" "),a("p",[e._v("To use the API, add this include:")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("include")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("<px4_platform_common/events.h>")])]),e._v("\n")])])]),a("p",[e._v("And then define and send the event from the desired code location:")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[e._v("events"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[e._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("events"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[e._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mymodule_test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" events"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[e._v("::")]),e._v("Log"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[e._v("::")]),e._v("Info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Test Message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h4",{attrs:{id:"backward-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backward-compatibility"}},[e._v("#")]),e._v(" Backward compatibility")]),e._v(" "),a("p",[e._v("For older GCS versions without events interface support, PX4 currently sends out all events also as "),a("code",[e._v("mavlink_log_*")]),e._v(" "),a("code",[e._v("STATUSTEXT")]),e._v(" message. In addition, the message must be tagged with an appended tab ("),a("code",[e._v("\\t")]),e._v(") so that newer GCS's can ignore that and only show the event.")]),e._v(" "),a("p",[e._v("So whenever adding an event, be sure to also add a "),a("code",[e._v("mavlink_log_")]),e._v(" call. For example:")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mavlink_log_info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("mavlink_log_pub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Test Message\\t"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nevents"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[e._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("events"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[e._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mymodule_test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" events"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[e._v("::")]),e._v("Log"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[e._v("::")]),e._v("Info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Test Message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("All such "),a("code",[e._v("mavlink_log_")]),e._v(" calls will be removed after the next release.")]),e._v(" "),a("h3",{attrs:{id:"detailed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detailed"}},[e._v("#")]),e._v(" Detailed")]),e._v(" "),a("p",[e._v("The above is a minimal example, this is a more extensive one:")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("uint8_t")]),e._v(" arg1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("float")]),e._v(" arg2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* EVENT\n * @description\n * This is the detailed event description.\n *\n * - value of arg1: {1}\n * - value of arg2: {2:.1}\n *\n * <profile name="dev">\n * (This paragraph is only meant to be shown to developers).\n * This behavior can be configured with the parameter <param>COM_EXAMPLE</param>.\n * </profile>\n *\n * Link to documentation: <a>https://docs.px4.io</a>\n */')]),e._v("\nevents"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[e._v("::")]),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("send")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("uint8_t")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("float")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("events"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[e._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"event_name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("events"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[e._v("::")]),e._v("Log"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[e._v("::")]),e._v("Error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" events"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[e._v("::")]),e._v("LogInternal"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[e._v("::")]),e._v("Info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Event Message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" arg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" arg2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Explanations and requirements:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("/* EVENT")]),e._v(": This tag indicates that a comment defines metadata for the following event.")]),e._v(" "),a("li",[a("strong",[e._v("event_name")]),e._v(": the event name ("),a("code",[e._v("events::ID(event_name)")]),e._v(").\n"),a("ul",[a("li",[e._v("must be unique within the whole source code of PX4. As a general convention, prefix it with the module name, or the source file for larger modules.")]),e._v(" "),a("li",[e._v("must be a valid variable name, i.e. must not contain spaces, colons, etc.")]),e._v(" "),a("li",[e._v("from that name, a 24 bit event ID is derived using a hash function. This means as long as the event name stays the same, so will the ID.")])])]),e._v(" "),a("li",[a("strong",[e._v("Log Level")]),e._v(":\n"),a("ul",[a("li",[e._v("valid log levels are the same as used in the MAVLink "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_SEVERITY",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_SEVERITY"),a("OutboundLink")],1),e._v(" enum. In order of descending importance these are:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Emergency,\nAlert,\nCritical,\nError,\nWarning,\nNotice,\nInfo,\nDebug,\nDisabled,\n")])])])]),e._v(" "),a("li",[e._v("Above we specify a separate external and internal log level, which are the levels displayed to GCS users and in the log file, respectively: "),a("code",[e._v("{events::Log::Error, events::LogInternal::Info}")]),e._v(". For the majority of cases you can pass a single log level, and this will be used for both exernal and internal cases. There are cases it makes sense to have two different log levels. For example an RTL failsafe action: the user should see it as Warning/Error, whereas in the log, it is an expected system response, so it can be set to "),a("code",[e._v("Info")]),e._v(".")])])]),e._v(" "),a("li",[a("strong",[e._v("Event Message")]),e._v(":\n"),a("ul",[a("li",[e._v("Single-line, short message of the event. It may contain template placeholders for arguments (e.g. "),a("code",[e._v("{1}")]),e._v("). For more information see below.")])])]),e._v(" "),a("li",[a("strong",[e._v("Event Description")]),e._v(":\n"),a("ul",[a("li",[e._v("Detailed, optional event description.")]),e._v(" "),a("li",[e._v("Can be multiple lines/paragraphs.")]),e._v(" "),a("li",[e._v("It may contain template placeholders for arguments (e.g. "),a("code",[e._v("{2}")]),e._v(") and supported tags (see below)")])])])]),e._v(" "),a("h4",{attrs:{id:"arguments-and-enums"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-and-enums"}},[e._v("#")]),e._v(" Arguments and Enums")]),e._v(" "),a("p",[e._v("Events can have a fixed set of arguments that can be inserted into the message or description using template placeholders (e.g. "),a("code",[e._v("{2:.1m}")]),e._v(" - see next section).")]),e._v(" "),a("p",[e._v("Valid types: "),a("code",[e._v("uint8_t")]),e._v(", "),a("code",[e._v("int8_t")]),e._v(", "),a("code",[e._v("uint16_t")]),e._v(", "),a("code",[e._v("int16_t")]),e._v(", "),a("code",[e._v("uint32_t")]),e._v(", "),a("code",[e._v("int32_t")]),e._v(", "),a("code",[e._v("uint64_t")]),e._v(", "),a("code",[e._v("int64_t")]),e._v(" and "),a("code",[e._v("float")]),e._v(".")]),e._v(" "),a("p",[e._v("You can also use enumerations as arguments:")]),e._v(" "),a("ul",[a("li",[e._v("PX4-specific/custom enumerations for events should be defined in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/events/enums.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/lib/events/enums.json"),a("OutboundLink")],1),e._v(", and can then be used as event argument in the form of "),a("code",[e._v("events::send<events::px4::enums::my_enum_t>(...)")]),e._v(".")]),e._v(" "),a("li",[e._v('MAVLink "common" events are defined in '),a("a",{attrs:{href:"https://github.com/mavlink/libevents/blob/master/events/common.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("mavlink/libevents/events/common.json"),a("OutboundLink")],1),e._v(" and can be used as event argument in the form of "),a("code",[e._v("events::send<events::common::enums::my_enum_t>(...)")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"text-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-format"}},[e._v("#")]),e._v(" Text format")]),e._v(" "),a("p",[e._v("Text format for event message description:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("characters can be escaped with \\")]),e._v(" "),a("p",[e._v("These have to be escaped: '\\\\', '\\<', '\\{'.")])]),e._v(" "),a("li",[a("p",[e._v("supported tags:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Profiles: "),a("code",[e._v('<profile name="[!]NAME">CONTENT</profile>')])]),e._v(" "),a("p",[a("code",[e._v("CONTENT")]),e._v(" will only be shown if the name matches the configured profile. This can be used for example to hide developer information from end-users.")])]),e._v(" "),a("li",[a("p",[e._v("URLs: "),a("code",[e._v('<a [href="URL"]>CONTENT</a>')]),e._v(". If "),a("code",[e._v("href")]),e._v(" is not set, use "),a("code",[e._v("CONTENT")]),e._v(" as "),a("code",[e._v("URL")]),e._v(" (i.e."),a("code",[e._v("<a>https://docs.px4.io</a>")]),e._v(" is interpreted as "),a("code",[e._v('<a href="https://docs.px4.io">https://docs.px4.io</a>')]),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("Parameters: "),a("code",[e._v("<param>PARAM_NAME</param>")])])]),e._v(" "),a("li",[a("p",[e._v("no nested tags of the same type are allowed")])])])]),e._v(" "),a("li",[a("p",[e._v("arguments: template placeholders that follow python syntax, with 1-based indexing (instead of 0)")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("general form: "),a("code",[e._v("{ARG_IDX[:.NUM_DECIMAL_DIGITS][UNIT]}")])]),e._v(" "),a("p",[e._v("UNIT:")]),e._v(" "),a("ul",[a("li",[e._v("m: horizontal distance in meters")]),e._v(" "),a("li",[e._v("m_v: vertical distance in meters")]),e._v(" "),a("li",[e._v("m^2: area in m^2")]),e._v(" "),a("li",[e._v("m/s: speed in m/s")]),e._v(" "),a("li",[e._v("C: temperature in degrees celsius")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("NUM_DECIMAL_DIGITS")]),e._v(" only makes sense for real number arguments.")])])])])]),e._v(" "),a("h2",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[e._v("#")]),e._v(" Logging")]),e._v(" "),a("p",[e._v("Events are logged according to the internal log level, and "),a("RouterLink",{attrs:{to:"/zh/log/flight_review.html"}},[e._v("Flight Review")]),e._v(" displays events.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Flight review downloads metadata based on PX4 master, so if a definition is not yet on master, it will only be able to display the event ID.")])]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("During PX4 build, only the code is added directly to the binary by the compiler (i.e. the event ID, log level(s) and any arguments).")]),e._v(" "),a("p",[e._v("The metadata for all events is built into a separate JSON metadata file (using a python script that scans the whole source code for event calls).")]),e._v(" "),a("h3",{attrs:{id:"publishing-event-metadata-to-a-gcs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishing-event-metadata-to-a-gcs"}},[e._v("#")]),e._v(" Publishing Event Metadata to a GCS")]),e._v(" "),a("p",[e._v("The event metadata JSON file is compiled into firmware (or hosted on the Internet), and made available to ground stations via the "),a("a",{attrs:{href:"https://mavlink.io/en/services/component_information.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Component Information service"),a("OutboundLink")],1),e._v(". This ensures that metadata is always up-to-date with the code running on the vehicle.")]),e._v(" "),a("p",[e._v("This process is the same as for "),a("RouterLink",{attrs:{to:"/zh/advanced/parameters_and_configurations.html#publishing-parameter-metadata-to-a-gcs"}},[e._v("parameter metadata")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);