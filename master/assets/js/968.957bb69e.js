(window.webpackJsonp=window.webpackJsonp||[]).push([[968],{1971:function(e,t,s){"use strict";s.r(t);var a=s(18),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ulog-file-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ulog-file-format"}},[e._v("#")]),e._v(" ULog File Format")]),e._v(" "),s("p",[e._v("ULog is the file format used for logging system data.")]),e._v(" "),s("p",[e._v("The format is self-describing, i.e. it contains the format and message types that are logged.")]),e._v(" "),s("p",[e._v("It can be used for logging device inputs (sensors, etc.), internal states (cpu load, attitude, etc.) and printf log messages.")]),e._v(" "),s("p",[e._v("The format uses Little Endian for all binary types.")]),e._v(" "),s("h2",{attrs:{id:"data-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-types"}},[e._v("#")]),e._v(" Data types")]),e._v(" "),s("p",[e._v("The following binary types are used. They all correspond to the types in C:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Size in Bytes")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("int8_t, uint8_t")]),e._v(" "),s("td",[e._v("1")])]),e._v(" "),s("tr",[s("td",[e._v("int16_t, uint16_t")]),e._v(" "),s("td",[e._v("2")])]),e._v(" "),s("tr",[s("td",[e._v("int32_t, uint32_t")]),e._v(" "),s("td",[e._v("4")])]),e._v(" "),s("tr",[s("td",[e._v("int64_t, uint64_t")]),e._v(" "),s("td",[e._v("8")])]),e._v(" "),s("tr",[s("td",[e._v("float")]),e._v(" "),s("td",[e._v("4")])]),e._v(" "),s("tr",[s("td",[e._v("double")]),e._v(" "),s("td",[e._v("8")])]),e._v(" "),s("tr",[s("td",[e._v("bool, char")]),e._v(" "),s("td",[e._v("1")])])])]),e._v(" "),s("p",[e._v("Additionally all can be used as an array, eg. "),s("code",[e._v("float[5]")]),e._v(". In general all strings ("),s("code",[e._v("char[length]")]),e._v(") do not contain a "),s("code",[e._v("'\\0'")]),e._v(" at the end. String comparisons are case sensitive.")]),e._v(" "),s("h2",{attrs:{id:"file-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file-structure"}},[e._v("#")]),e._v(" File structure")]),e._v(" "),s("p",[e._v("The file consists of three sections:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("----------------------\n|       Header       |\n----------------------\n|    Definitions     |\n----------------------\n|        Data        |\n----------------------\n")])])]),s("h3",{attrs:{id:"header-section"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header-section"}},[e._v("#")]),e._v(" Header Section")]),e._v(" "),s("p",[e._v("The header is a fixed-size section and has the following format (16 bytes):")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("----------------------------------------------------------------------\n| 0x55 0x4c 0x6f 0x67 0x01 0x12 0x35 | 0x01         | uint64_t       |\n| File magic (7B)                    | Version (1B) | Timestamp (8B) |\n----------------------------------------------------------------------\n")])])]),s("p",[e._v("Version is the file format version, currently 1. Timestamp is a "),s("code",[e._v("uint64_t")]),e._v(" integer, denotes the start of the logging in microseconds.")]),e._v(" "),s("h3",{attrs:{id:"definitions-section"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#definitions-section"}},[e._v("#")]),e._v(" Definitions Section")]),e._v(" "),s("p",[e._v("Variable length section, contains version information, format definitions, and (initial) parameter values.")]),e._v(" "),s("p",[e._v("The Definitions and Data sections consist of a stream of messages. Each starts with this header:")]),e._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("message_header_s")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    uint16_t msg_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    uint8_t msg_type\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[s("code",[e._v("msg_size")]),e._v(" is the size of the message in bytes without the header ("),s("code",[e._v("hdr_size")]),e._v("= 3 bytes). "),s("code",[e._v("msg_type")]),e._v(" defines the content and is one of the following:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("'B': Flag bitset message.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("struct ulog_message_flag_bits_s {\n    uint8_t compat_flags[8];\n    uint8_t incompat_flags[8];\n    uint64_t appended_offsets[3]; ///&#060; file offset(s) for appended data if appending bit is set\n};\n")])])]),s("p",[e._v("This message "),s("strong",[e._v("must")]),e._v(" be the first message, right after the header section, so that it has a fixed constant offset.")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("compat_flags")]),e._v(": compatible flag bits. None of them is currently defined and all must be set to 0. These bits can be used for future ULog changes that are compatible with existing parsers. It means parsers can just ignore the bits if one of the unknown bits is set.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("incompat_flags")]),e._v(": incompatible flag bits. The LSB bit of index 0 is set to one if the log contains appended data and at lease one of the "),s("code",[e._v("appended_offsets")]),e._v(" is non-zero. All other bits are undefined und must be set to 0. If a parser finds one of these bits set, it must refuse to parse the log. This can be used to introduce breaking changes that existing parsers cannot handle.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("appended_offsets")]),e._v(": File offsets (0-based) for appended data. If no data is appended, all offsets must be zero. This can be used to reliably append data for logs that may stop in the middle of a message.")]),e._v(" "),s("p",[e._v("A process appending data should do:")]),e._v(" "),s("ul",[s("li",[e._v("set the relevant "),s("code",[e._v("incompat_flags")]),e._v(" bit,")]),e._v(" "),s("li",[e._v("set the first "),s("code",[e._v("appended_offsets")]),e._v(" that is 0 to the length of the log file,")]),e._v(" "),s("li",[e._v("then append any type of messages that are valid for the Data section.")])])])]),e._v(" "),s("p",[e._v("It is possible that there are more fields appended at the end of this message in future ULog specifications. This means a parser must not assume a fixed length of this message. If the message is longer than expected (currently 40 bytes), the exceeding bytes must just be ignored.")])]),e._v(" "),s("li",[s("p",[e._v("'F': format definition for a single (composite) type that can be logged or used in another definition as a nested type.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("struct message_format_s {\nstruct message_header_s header;\nchar format[header.msg_size-hdr_size];\n")])])])])]),e._v(" "),s("p",[e._v("};")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("`format`: plain-text string with the following format: `message_name:field0;field1;` There can be an arbitrary amount of fields (at least 1), separated by `;`. A field has the format: `type field_name` or `type[array_length] field_name` for arrays (only fixed size arrays are supported). `type` is one of the basic binary types or a `message_name` of another format definition (nested usage). A type can be used before it's defined. There can be arbitrary nesting but no circular dependencies.\n\nSome field names are special:\n- `timestamp`: every logged message (`message_add_logged_s`) must include a timestamp field (does not need to be the first field). Its type can be: `uint64_t` (currently the only one used), `uint32_t`, `uint16_t` or `uint8_t`. The unit is always microseconds, except for `uint8_t` it's milliseconds. A log writer must make sure to log messages often enough to be able to detect wrap-arounds and a log reader must handle wrap-arounds (and take into account dropouts). The timestamp must always be monotonic increasing for a message serie with the same `msg_id`.\n- Padding: field names that start with `_padding` should not be displayed and their data must be ignored by a reader. These fields can be inserted by a writer to ensure correct alignment.\n\n  If the padding field is the last field, then this field will not be logged, to avoid writing unnecessary data. This means the `message_data_s.data` will be shorter by the size of the padding. However the padding is still needed when the message is used in a nested definition.\n\n- 'I': information message.\n```c\nstruct message_info_s {\nstruct message_header_s header;\nuint8_t key_len;\nchar key[key_len];\nchar value[header.msg_size-hdr_size-1-key_len]\n};\n")])])]),s("p",[s("code",[e._v("key")]),e._v(" is a plain string, as in the format message (can also be a custom type), but consists of only a single field without ending "),s("code",[e._v(";")]),e._v(", eg. "),s("code",[e._v("float[3] myvalues")]),e._v(". "),s("code",[e._v("value")]),e._v(" contains the data as described by "),s("code",[e._v("key")]),e._v(".")]),e._v(" "),s("p",[e._v("Note that an information message with a certain key must occur at most once in the entire log. Parsers can store information messages as a dictionary.")]),e._v(" "),s("p",[e._v("Predefined information messages are:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("key")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Example for value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("char[value_len] sys_name")]),e._v(" "),s("td",[e._v("Name of the system")]),e._v(" "),s("td",[e._v('"PX4"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] ver_hw")]),e._v(" "),s("td",[e._v("Hardware version (board)")]),e._v(" "),s("td",[e._v('"PX4FMU_V4"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] ver_hw_subtype")]),e._v(" "),s("td",[e._v("Board subversion (variation)")]),e._v(" "),s("td",[e._v('"V2"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] ver_sw")]),e._v(" "),s("td",[e._v("Software version (git tag)")]),e._v(" "),s("td",[e._v('"7f65e01"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] ver_sw_branch")]),e._v(" "),s("td",[e._v("git branch")]),e._v(" "),s("td",[e._v('"master"')])]),e._v(" "),s("tr",[s("td",[e._v("uint32_t ver_sw_release")]),e._v(" "),s("td",[e._v("Software version (see below)")]),e._v(" "),s("td",[e._v("0x010401ff")])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] sys_os_name")]),e._v(" "),s("td",[e._v("Operating System Name")]),e._v(" "),s("td",[e._v('"Linux"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] sys_os_ver")]),e._v(" "),s("td",[e._v("OS version (git tag)")]),e._v(" "),s("td",[e._v('"9f82919"')])]),e._v(" "),s("tr",[s("td",[e._v("uint32_t ver_os_release")]),e._v(" "),s("td",[e._v("OS version (see below)")]),e._v(" "),s("td",[e._v("0x010401ff")])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] sys_toolchain")]),e._v(" "),s("td",[e._v("Toolchain Name")]),e._v(" "),s("td",[e._v('"GNU GCC"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] sys_toolchain_ver")]),e._v(" "),s("td",[e._v("Toolchain Version")]),e._v(" "),s("td",[e._v('"6.2.1"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] sys_mcu")]),e._v(" "),s("td",[e._v("Chip name and revision")]),e._v(" "),s("td",[e._v('"STM32F42x, rev A"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] sys_uuid")]),e._v(" "),s("td",[e._v("Unique identifier for vehicle (eg. MCU ID)")]),e._v(" "),s("td",[e._v('"392a93e32fa3"...')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] log_type")]),e._v(" "),s("td",[e._v("Type of the log (full log if not specified)")]),e._v(" "),s("td",[e._v('"mission"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] replay")]),e._v(" "),s("td",[e._v("File name of replayed log if in replay mode")]),e._v(" "),s("td",[e._v('"log001.ulg"')])]),e._v(" "),s("tr",[s("td",[e._v("int32_t time_ref_utc")]),e._v(" "),s("td",[e._v("UTC Time offset in seconds")]),e._v(" "),s("td",[e._v("-3600")])])])]),e._v(" "),s("p",[e._v("The format of "),s("code",[e._v("ver_sw_release")]),e._v(" and "),s("code",[e._v("ver_os_release")]),e._v(" is: 0xAABBCCTT, where AA is major, BB is minor, CC is patch and TT is the type. Type is defined as following: "),s("code",[e._v(">= 0")]),e._v(": development, "),s("code",[e._v(">= 64")]),e._v(": alpha version, "),s("code",[e._v(">= 128")]),e._v(": beta version, "),s("code",[e._v(">= 192")]),e._v(": RC version, "),s("code",[e._v("== 255")]),e._v(": release version. So for example 0x010402ff translates into the release version v1.4.2.")]),e._v(" "),s("p",[e._v("This message can also be used in the Data section (this is however the preferred section).")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("'M': information message multi.")]),e._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ulog_message_info_multiple_header_s")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    uint8_t is_continued"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("///&#060; can be used for arrays")]),e._v("\n    uint8_t key_len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),e._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("key_len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),e._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("msg_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("hdr_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("key_len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("The same as the information message, except that there can be multiple messages with the same key (parsers store them as a list). The "),s("code",[e._v("is_continued")]),e._v(" can be used for split-up messages: if set to 1, it is part of the previous message with the same key. Parsers can store all information multi messages as a 2D list, using the same order as the messages occur in the log.")])]),e._v(" "),s("li",[s("p",[e._v("'P': parameter message. Same format as "),s("code",[e._v("message_info_s")]),e._v(". If a parameter dynamically changes during runtime, this message can also be used in the Data section. The data type is restricted to: "),s("code",[e._v("int32_t")]),e._v(", "),s("code",[e._v("float")]),e._v(".")])])]),e._v(" "),s("p",[e._v("This section ends before the start of the first "),s("code",[e._v("message_add_logged_s")]),e._v(" or "),s("code",[e._v("message_logging_s")]),e._v(" message, whichever comes first.")]),e._v(" "),s("h3",{attrs:{id:"data-section"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-section"}},[e._v("#")]),e._v(" Data Section")]),e._v(" "),s("p",[e._v("The following messages belong to this section:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("'A': subscribe a message by name and give it an id that is used in "),s("code",[e._v("message_data_s")]),e._v(". This must come before the first corresponding "),s("code",[e._v("message_data_s")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("message_add_logged_s")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("message_header_s")]),e._v(" header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    uint8_t multi_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    uint16_t msg_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),e._v(" message_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("msg_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("hdr_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[s("code",[e._v("multi_id")]),e._v(": the same message format can have multiple instances, for example if the system has two sensors of the same type. The default and first instance must be 0. "),s("code",[e._v("msg_id")]),e._v(": unique id to match "),s("code",[e._v("message_data_s")]),e._v(" data. The first use must set this to 0, then increase it. The same "),s("code",[e._v("msg_id")]),e._v(" must not be used twice for different subscriptions, not even after unsubscribing. "),s("code",[e._v("message_name")]),e._v(": message name to subscribe to. Must match one of the "),s("code",[e._v("message_format_s")]),e._v(" definitions.")])]),e._v(" "),s("li",[s("p",[e._v("'R': unsubscribe a message, to mark that it will not be logged anymore (not used currently).")]),e._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("message_remove_logged_s")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("message_header_s")]),e._v(" header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    uint16_t msg_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("'D': contains logged data.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("struct message_data_s {\n    struct message_header_s header;\n    uint16_t msg_id;\n    uint8_t data[header.msg_size-hdr_size];\n};\n")])])]),s("p",[s("code",[e._v("msg_id")]),e._v(": as defined by a "),s("code",[e._v("message_add_logged_s")]),e._v(" message. "),s("code",[e._v("data")]),e._v(" contains the logged binary message as defined by "),s("code",[e._v("message_format_s")]),e._v(". See above for special treatment of padding fields.")])]),e._v(" "),s("li",[s("p",[e._v("'L': Logged string message, i.e. printf output.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("struct message_logging_s {\n    struct message_header_s header;\n    uint8_t log_level;\n    uint64_t timestamp;\n    char message[header.msg_size-hdr_size-9]\n};\n")])])]),s("p",[s("code",[e._v("timestamp")]),e._v(": in microseconds, "),s("code",[e._v("log_level")]),e._v(": same as in the Linux kernel:")])])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Level value")]),e._v(" "),s("th",[e._v("Meaning")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("EMERG")]),e._v(" "),s("td",[e._v("'0'")]),e._v(" "),s("td",[e._v("System is unusable")])]),e._v(" "),s("tr",[s("td",[e._v("ALERT")]),e._v(" "),s("td",[e._v("'1'")]),e._v(" "),s("td",[e._v("Action must be taken immediately")])]),e._v(" "),s("tr",[s("td",[e._v("CRIT")]),e._v(" "),s("td",[e._v("'2'")]),e._v(" "),s("td",[e._v("Critical conditions")])]),e._v(" "),s("tr",[s("td",[e._v("ERR")]),e._v(" "),s("td",[e._v("'3'")]),e._v(" "),s("td",[e._v("Error conditions")])]),e._v(" "),s("tr",[s("td",[e._v("WARNING")]),e._v(" "),s("td",[e._v("'4'")]),e._v(" "),s("td",[e._v("Warning conditions")])]),e._v(" "),s("tr",[s("td",[e._v("NOTICE")]),e._v(" "),s("td",[e._v("'5'")]),e._v(" "),s("td",[e._v("Normal but significant condition")])]),e._v(" "),s("tr",[s("td",[e._v("INFO")]),e._v(" "),s("td",[e._v("'6'")]),e._v(" "),s("td",[e._v("Informational")])]),e._v(" "),s("tr",[s("td",[e._v("DEBUG")]),e._v(" "),s("td",[e._v("'7'")]),e._v(" "),s("td",[e._v("Debug-level messages")])])])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("'C': Tagged Logged string message")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("struct message_dropout_s {\n    struct message_header_s header;\n    uint16_t duration;\n};\n")])])]),s("p",[s("code",[e._v("tag")]),e._v(": id representing source of logged message string. It could represent a process, thread or a class depending upon the system architecture. For example, a reference implementation for an onboard computer running multiple processes to control different payloads, external disks, serial devices etc can encode these process identifiers using a "),s("code",[e._v("uint16_t enum")]),e._v(" into the tag attribute of "),s("code",[e._v("message_logging_tagged_s")]),e._v(" struct as follows:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code")])])])]),e._v(" "),s("p",[e._v("enum class ulog_tag : uint16_t {\nunassigned,\nmavlink_handler,\nppk_handler,\ncamera_handler,\nptp_handler,\nserial_handler,\nwatchdog,\nio_service,\ncbuf,\nulg\n};")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\n`timestamp`: in microseconds `log_level`: same as in the Linux kernel:\n\n| Name    | Level value | Meaning                          |\n| ------- | ----------- | -------------------------------- |\n| EMERG   | '0'         | System is unusable               |\n| ALERT   | '1'         | Action must be taken immediately |\n| CRIT    | '2'         | Critical conditions              |\n| ERR     | '3'         | Error conditions                 |\n| WARNING | '4'         | Warning conditions               |\n| NOTICE  | '5'         | Normal but significant condition |\n| INFO    | '6'         | Informational                    |\n| DEBUG   | '7'         | Debug-level messages             |\n\n- 'S': synchronization message so that a reader can recover from a corrupt message by searching for the next sync message (not used currently).\n")])])]),s("p",[e._v("struct message_sync_s {\nstruct message_header_s header;\nuint8_t sync_magic[8];\n};")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("`sync_magic`: to be defined.\n\n- 'O': mark a dropout (lost logging messages) of a given duration in ms. Dropouts can occur e.g. if the device is not fast enough.\n")])])]),s("p",[e._v("struct message_dropout_s {\nstruct message_header_s header;\nuint16_t duration;\n};")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\n- 'I': information message. See above.\n\n- 'M': information message multi. See above.\n\n- 'P': parameter message. See above.\n\n\n## Requirements for Parsers\n\nA valid ULog parser must fulfill the following requirements:\n- Must ignore unknown messages (but it can print a warning).\n- Parse future/unknown file format versions as well (but it can print a warning).\n- Must refuse to parse a log which contains unknown incompatibility bits set (`incompat_flags` of `ulog_message_flag_bits_s` message), meaning the log contains breaking changes that the parser cannot handle.\n- A parser must be able to correctly handle logs that end abruptly, in the middle of a message. The unfinished message should just be discarged.\n- For appended data: a parser can assume the Data section exists, i.e. the offset points to a place after the Definitions section.\n\nAppended data must be treated as if it was part of the regular Data section.\n\n\n## Known Implementations\n\n- PX4 Firmware: C++\n- [logger module](https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/logger)\n- [replay module](https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/replay)\n- [hardfault_log module](https://github.com/PX4/Firmware/tree/master/src/systemcmds/hardfault_log): append hardfault crash data.\n- [pyulog](https://github.com/PX4/pyulog): python, ULog parser library with CLI scripts.\n- [FlightPlot](https://github.com/PX4/FlightPlot): Java, log plotter.\n- [pyFlightAnalysis](https://github.com/Marxlp/pyFlightAnalysis): Python, log plotter and 3D visualization tool based on pyulog.\n- [MAVLink](https://github.com/mavlink/mavlink): Messages for ULog streaming via MAVLink (note that appending data is not supported, at least not for cut off messages).\n- [QGroundControl](https://github.com/mavlink/qgroundcontrol): C++, ULog streaming via MAVLink and minimal parsing for GeoTagging.\n- [mavlink-router](https://github.com/01org/mavlink-router): C++, ULog streaming via MAVLink.\n- [MAVGAnalysis](https://github.com/ecmnet/MAVGCL): Java, ULog streaming via MAVLink and parser for plotting and analysis.\n- [PlotJuggler](https://github.com/facontidavide/PlotJuggler): C++/Qt application to plot logs and time series. Supports ULog since version 2.1.3.\n- [ulogreader](https://github.com/maxsun/ulogreader): Javascript, ULog reader and parser outputs log in JSON object format.\n\n\n## File Format Version History\n\n### Changes in version 2\n\nAddition of `ulog_message_info_multiple_header_s` and `ulog_message_flag_bits_s` messages and the ability to append data to a log. This is used to add crash data to an existing log. If data is appended to a log that is cut in the middle of a message, it cannot be parsed with version 1 parsers. Other than that forward and backward compatibility is given if parsers ignore unknown messages.\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);