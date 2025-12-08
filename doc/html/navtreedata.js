/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Thermal Camera SDK", "index.html", [
    [ "Overview", "index.html", "index" ],
    [ "Features", "features.html", [
      [ "Contents", "features.html#autotoc_md1", null ],
      [ "Overview", "features.html#features-overview", null ],
      [ "Programming Languages", "features.html#features-programming-languages", null ],
      [ "Supported Cameras", "features.html#features-supported-cameras", [
        [ "PI 160", "features.html#autotoc_md2", null ],
        [ "PI 400(i)/450(i)", "features.html#autotoc_md3", null ],
        [ "PI 640(i)", "features.html#autotoc_md4", null ],
        [ "PI 05M", "features.html#autotoc_md5", null ],
        [ "PI 08M", "features.html#autotoc_md6", null ],
        [ "PI 1M", "features.html#autotoc_md7", null ],
        [ "Xi 80", "features.html#autotoc_md8", null ],
        [ "Xi 400", "features.html#autotoc_md9", null ],
        [ "Xi 320 MT", "features.html#features-supported-cameras-xi320mt", null ],
        [ "Xi 410", "features.html#features-supported-cameras-xi410", null ],
        [ "Xi 440", "features.html#autotoc_md10", null ],
        [ "Xi 640", "features.html#autotoc_md11", null ],
        [ "Xi 1M", "features.html#autotoc_md12", null ]
      ] ],
      [ "Supported Process Interfaces (PIFs)", "features.html#features-supported-pifs", [
        [ "Standard PIF", "features.html#autotoc_md13", null ],
        [ "Industrial PIF (mA)", "features.html#autotoc_md14", null ],
        [ "Industrial PIF (mV)", "features.html#autotoc_md15", null ],
        [ "Internal PIF", "features.html#autotoc_md16", null ],
        [ "Stackable PIF", "features.html#autotoc_md17", null ]
      ] ]
    ] ],
    [ "Installation", "installation.html", [
      [ "Contents", "installation.html#autotoc_md18", null ],
      [ "Download", "installation.html#installation-download", null ],
      [ "Windows", "installation.html#installation-windows", null ],
      [ "Linux (Ubuntu LTS)", "installation.html#installation-ubuntu", null ]
    ] ],
    [ "Basic Usage", "basic-usage.html", [
      [ "Contents", "basic-usage.html#autotoc_md19", null ],
      [ "First Steps", "basic-usage.html#basic-usage-first-steps", [
        [ "Display Window", "basic-usage.html#basic-usage-first-steps-display-window", null ],
        [ "Terminal Window", "basic-usage.html#basic-usage-first-steps-terminal-window", null ]
      ] ],
      [ "Startup Process", "basic-usage.html#basic-usage-startup-process", [
        [ "Locate the Device", "basic-usage.html#basic-usage-startup-process-locate-the-device", null ],
        [ "Load the Configuration", "basic-usage.html#basic-usage-startup-process-load-the-configuration", null ],
        [ "Establish the Device Connection", "basic-usage.html#basic-usage-startup-process-establish-the-device-connection", null ],
        [ "Load the Calibration", "basic-usage.html#basic-usage-startup-process-load-the-calibration", null ],
        [ "Determine the Operation Mode", "basic-usage.html#basic-usage-startup-process-determine-the-operation-mode", null ],
        [ "Startup Calibration", "basic-usage.html#basic-usage-startup-process-startup-calibration", null ]
      ] ],
      [ "Device Configuration", "basic-usage.html#basic-usage-device-configuration", [
        [ "Device Connection", "basic-usage.html#basic-usage-device-configuration-device-connection", null ],
        [ "Optics, Temperature Ranges, Video Formats", "basic-usage.html#basic-usage-device-configuration-optics-temperature-ranges-video-formats", [
          [ "Optics", "basic-usage.html#autotoc_md20", null ],
          [ "Temperature Ranges", "basic-usage.html#autotoc_md21", null ],
          [ "Video Formats", "basic-usage.html#autotoc_md22", null ]
        ] ]
      ] ],
      [ "Command Line Tools", "basic-usage.html#basic-usage-command-line-tools", [
        [ "otc_configure_ethernet", "basic-usage.html#basic-usage-command-line-tools-otc-configure-ethernet", null ],
        [ "otc_find_devices", "basic-usage.html#basic-usage-command-line-tools-otc-find-devices", null ],
        [ "otc_version", "basic-usage.html#basic-usage-command-line-tools-otc-version", null ]
      ] ]
    ] ],
    [ "Start Developing", "start-developing.html", [
      [ "Contents", "start-developing.html#autotoc_md23", null ],
      [ "Which Language to Choose?", "start-developing.html#start-developing-which-language-to-choose", null ],
      [ "Toolchains", "start-developing.html#start-developing-toolchains", [
        [ "C++", "start-developing.html#start-developing-toolchains-cpp", null ],
        [ "C Sharp", "start-developing.html#start-developing-toolchains-csharp", null ],
        [ "Python 3", "start-developing.html#start-developing-toolchains-python3", null ]
      ] ],
      [ "Project Integration", "start-developing.html#start-developing-project-integration", [
        [ "C++", "start-developing.html#start-developing-project-integration-cpp", [
          [ "CMake", "start-developing.html#autotoc_md24", null ],
          [ "Visual Studio Project", "start-developing.html#autotoc_md25", null ]
        ] ],
        [ "C Sharp", "start-developing.html#start-developing-project-integration-csharp", null ],
        [ "Python 3", "start-developing.html#start-developing-project-integration-python3", null ]
      ] ]
    ] ],
    [ "Public API", "public-api.html", [
      [ "Contents", "public-api.html#autotoc_md26", null ],
      [ "Architecture", "public-api.html#public-api-architecture", null ],
      [ "Device Enumeration", "public-api.html#public-api-device-enumeration", [
        [ "Prerequisites", "public-api.html#autotoc_md27", null ],
        [ "Usage", "public-api.html#autotoc_md28", null ]
      ] ],
      [ "Operation Modes", "public-api.html#public-api-operation-modes", [
        [ "Available And Active Modes", "public-api.html#autotoc_md29", null ],
        [ "Setting The Active Mode", "public-api.html#autotoc_md30", null ]
      ] ],
      [ "Thermal Data", "public-api.html#public-api-thermal-data", null ],
      [ "False Color Images", "public-api.html#public-api-false-color-images", null ],
      [ "Measurement Fields", "public-api.html#public-api-measurement-fields", null ],
      [ "Process Interface (PIF)", "public-api.html#public-api-process-interface", [
        [ "Device", "public-api.html#autotoc_md31", [
          [ "Type", "public-api.html#autotoc_md32", null ],
          [ "Count", "public-api.html#autotoc_md33", null ]
        ] ],
        [ "Channels", "public-api.html#public-api-process-interface-channels", [
          [ "Addressing", "public-api.html#public-api-process-interface-channels-addressing", null ],
          [ "Configuration", "public-api.html#autotoc_md34", null ],
          [ "Output Values", "public-api.html#public-api-process-interface-channels-output-values", null ],
          [ "Input Values", "public-api.html#public-api-process-interface-channels-input-values", null ]
        ] ]
      ] ],
      [ "Client Fail Safe", "public-api.html#public-api-client-fail-safe", null ]
    ] ],
    [ "Fail Safe", "fail-safe.html", [
      [ "Contents", "fail-safe.html#autotoc_md35", null ],
      [ "Overview", "fail-safe.html#fail-safe-overview", null ],
      [ "Conditions", "fail-safe.html#fail-safe-conditions", [
        [ "Processing Chain", "fail-safe.html#fail-safe-conditions-processing-chain", [
          [ "Fail Safe Conditions Check", "fail-safe.html#autotoc_md36", null ],
          [ "Timeouts", "fail-safe.html#autotoc_md37", null ]
        ] ],
        [ "Flag timeout", "fail-safe.html#fail-safe-conditions-flag-timeout", null ],
        [ "Client", "fail-safe.html#fail-safe-conditions-client", null ]
      ] ],
      [ "PIF Signals", "fail-safe.html#fail-safe-pif-signals", null ]
    ] ],
    [ "Process Interface (PIF)", "pif.html", [
      [ "Contents", "pif.html#autotoc_md38", null ],
      [ "Overview", "pif.html#pif-overview", null ],
      [ "Reading Inputs", "pif.html#pif-reading-inputs", null ],
      [ "Creating Outputs", "pif.html#pif-creating-outputs", null ],
      [ "Modes", "pif.html#pif-modes", [
        [ "Universal", "pif.html#pif-modes-universal", [
          [ "Off", "pif.html#autotoc_md39", null ]
        ] ],
        [ "Inputs", "pif.html#pif-modes-inputs", [
          [ "Ambient Temperature", "pif.html#autotoc_md40", null ],
          [ "Emissivity", "pif.html#autotoc_md41", null ],
          [ "Flag Control", "pif.html#autotoc_md42", null ],
          [ "Uncommitted Value", "pif.html#autotoc_md43", null ]
        ] ],
        [ "Outputs", "pif.html#pif-modes-outputs", [
          [ "External Communication", "pif.html#autotoc_md44", null ],
          [ "Fail Safe", "pif.html#autotoc_md45", null ],
          [ "Flag Status", "pif.html#autotoc_md46", null ],
          [ "Frame Sync", "pif.html#autotoc_md47", null ],
          [ "Internal Temperature", "pif.html#autotoc_md48", null ],
          [ "Measurement Field", "pif.html#autotoc_md49", null ]
        ] ],
        [ "Fail Safe", "pif.html#pif-modes-fail-safe", [
          [ "On", "pif.html#autotoc_md50", null ]
        ] ]
      ] ]
    ] ],
    [ "Device Communication", "device-communication.html", [
      [ "Contents", "device-communication.html#autotoc_md51", null ],
      [ "Overview", "device-communication.html#device-communication-overview", null ],
      [ "USB", "device-communication.html#device-communication-usb", [
        [ "Control", "device-communication.html#device-communication-usb-control", null ],
        [ "Streaming", "device-communication.html#device-communication-usb-streaming", null ]
      ] ],
      [ "Ethernet", "device-communication.html#device-communication-ethernet", [
        [ "Control", "device-communication.html#device-communication-ethernet-control", null ],
        [ "Streaming", "device-communication.html#device-communication-ethernet-streaming", null ]
      ] ]
    ] ],
    [ "Important Files", "important-files.html", [
      [ "Contents", "important-files.html#autotoc_md52", null ],
      [ "Configuration", "important-files.html#important-files-configuration", [
        [ "Version", "important-files.html#important-files-configuration-version", [
          [ "configuration", "important-files.html#autotoc_md53", null ],
          [ "sdk", "important-files.html#autotoc_md54", null ]
        ] ],
        [ "Serial Number", "important-files.html#important-files-configuration-serial-number", [
          [ "serial_number", "important-files.html#autotoc_md55", null ]
        ] ],
        [ "Connection", "important-files.html#important-files-configuration-connection", [
          [ "interface", "important-files.html#autotoc_md56", null ],
          [ "ip_address", "important-files.html#autotoc_md57", null ],
          [ "port", "important-files.html#autotoc_md58", null ],
          [ "check_ip", "important-files.html#autotoc_md59", null ],
          [ "timeout", "important-files.html#autotoc_md60", null ]
        ] ],
        [ "Buffer Queue Size", "important-files.html#important-files-configuration-buffer-queue-size", [
          [ "buffer_queue_size", "important-files.html#autotoc_md61", null ]
        ] ],
        [ "Optics", "important-files.html#important-files-configuration-optics", [
          [ "field_of_view", "important-files.html#autotoc_md62", null ],
          [ "text", "important-files.html#autotoc_md63", null ],
          [ "sos_correction", "important-files.html#autotoc_md64", null ]
        ] ],
        [ "Temperature Range", "important-files.html#important-files-configuration-temperature-range", [
          [ "min", "important-files.html#autotoc_md65", null ],
          [ "max", "important-files.html#autotoc_md66", null ],
          [ "extended", "important-files.html#autotoc_md67", null ],
          [ "enable_high_precision", "important-files.html#autotoc_md68", null ]
        ] ],
        [ "Video Format", "important-files.html#important-files-configuration-video-format", [
          [ "width", "important-files.html#autotoc_md69", null ],
          [ "height", "important-files.html#autotoc_md70", null ],
          [ "framerate", "important-files.html#autotoc_md71", null ],
          [ "subsampled_framerate", "important-files.html#autotoc_md72", null ]
        ] ],
        [ "Auto Flag", "important-files.html#important-files-configuration-auto-flag", [
          [ "enable", "important-files.html#autotoc_md73", null ],
          [ "min_interval", "important-files.html#autotoc_md74", null ],
          [ "max_interval", "important-files.html#autotoc_md75", null ]
        ] ],
        [ "Sensor Chip Heating", "important-files.html#important-files-configuration-sensor-chip-heating", [
          [ "mode", "important-files.html#autotoc_md76", null ],
          [ "temperature", "important-files.html#autotoc_md77", null ]
        ] ],
        [ "Focus Motor Position", "important-files.html#important-files-configuration-focus-motor-position", [
          [ "focus_motor_position", "important-files.html#autotoc_md78", null ]
        ] ],
        [ "Radiation Parameters", "important-files.html#important-files-configuration-radiation-parameters", [
          [ "emissivity", "important-files.html#autotoc_md79", null ],
          [ "transmissivity", "important-files.html#autotoc_md80", null ],
          [ "ambient", "important-files.html#autotoc_md81", null ]
        ] ],
        [ "Fail Safe", "important-files.html#important-files-configuration-fail-safe", [
          [ "flag_timeouts.enable", "important-files.html#autotoc_md82", null ],
          [ "flag_timeouts.max_cycle_failures", "important-files.html#autotoc_md83", null ],
          [ "processing_chain_timeouts.enable", "important-files.html#autotoc_md84", null ]
        ] ],
        [ "Measurement Fields", "important-files.html#important-files-configuration-measurement-fields", [
          [ "name", "important-files.html#autotoc_md85", null ],
          [ "shape", "important-files.html#autotoc_md86", null ],
          [ "mode", "important-files.html#autotoc_md87", null ],
          [ "position", "important-files.html#autotoc_md88", null ],
          [ "position.x", "important-files.html#autotoc_md89", null ],
          [ "position.y", "important-files.html#autotoc_md90", null ],
          [ "dimensions", "important-files.html#autotoc_md91", null ],
          [ "dimensions.width", "important-files.html#autotoc_md92", null ],
          [ "dimensions.height", "important-files.html#autotoc_md93", null ],
          [ "radiation.emissivity", "important-files.html#autotoc_md94", null ],
          [ "radiation.transmissivity", "important-files.html#autotoc_md95", null ],
          [ "radiation.ambient", "important-files.html#autotoc_md96", null ]
        ] ],
        [ "Process Interface (PIF)", "important-files.html#important-files-configuration-process-interface", [
          [ "Device", "important-files.html#autotoc_md97", [
            [ "device_type", "important-files.html#important-files-configuration-process-interface-device-type", null ],
            [ "device_count", "important-files.html#important-files-configuration-process-interface-device-count", null ]
          ] ],
          [ "Channels", "important-files.html#important-files-configuration-process-interface-channels", [
            [ "channel.device_index", "important-files.html#autotoc_md98", null ],
            [ "channel.pin_index", "important-files.html#autotoc_md99", null ]
          ] ],
          [ "analog_inputs", "important-files.html#important-files-configuration-process-interface-analog-inputs", [
            [ "mode", "important-files.html#autotoc_md100", null ],
            [ "slope", "important-files.html#autotoc_md101", null ],
            [ "slope.gain", "important-files.html#autotoc_md102", null ],
            [ "slope.offset", "important-files.html#autotoc_md103", null ],
            [ "trigger", "important-files.html#autotoc_md104", null ],
            [ "trigger.threshold", "important-files.html#autotoc_md105", null ],
            [ "trigger.low_active", "important-files.html#autotoc_md106", null ],
            [ "uncommitted_value", "important-files.html#autotoc_md107", null ],
            [ "uncommitted_value.name", "important-files.html#autotoc_md108", null ],
            [ "uncommitted_value.unit", "important-files.html#autotoc_md109", null ]
          ] ],
          [ "digital_inputs", "important-files.html#important-files-configuration-process-interface-digital-inputs", [
            [ "mode", "important-files.html#autotoc_md110", null ],
            [ "trigger", "important-files.html#autotoc_md111", null ],
            [ "trigger.low_active", "important-files.html#autotoc_md112", null ]
          ] ],
          [ "analog_outputs", "important-files.html#important-files-configuration-process-interface-analog-outputs", [
            [ "mode", "important-files.html#autotoc_md113", null ],
            [ "output_mode", "important-files.html#autotoc_md114", null ],
            [ "slope", "important-files.html#autotoc_md115", null ],
            [ "slope.gain", "important-files.html#autotoc_md116", null ],
            [ "slope.offset", "important-files.html#autotoc_md117", null ],
            [ "field_index", "important-files.html#autotoc_md118", null ],
            [ "output", "important-files.html#autotoc_md119", null ],
            [ "output.active", "important-files.html#autotoc_md120", null ],
            [ "output.intermediate", "important-files.html#autotoc_md121", null ],
            [ "output.inactive", "important-files.html#autotoc_md122", null ]
          ] ],
          [ "digital_outputs", "important-files.html#important-files-configuration-process-interface-digital-outputs", [
            [ "mode", "important-files.html#autotoc_md123", null ],
            [ "output", "important-files.html#autotoc_md124", null ],
            [ "low_active", "important-files.html#autotoc_md125", null ]
          ] ],
          [ "fail_safe", "important-files.html#important-files-configuration-process-interface-fail-safe", [
            [ "mode", "important-files.html#autotoc_md126", null ]
          ] ]
        ] ]
      ] ],
      [ "Calibration", "important-files.html#important-files-calibration", null ],
      [ "Normalization", "important-files.html#important-files-normalization", null ],
      [ "Formats Definitions", "important-files.html#important-files-format-definitions", null ],
      [ "Dynamic Dead Pixels", "important-files.html#important-files-dynamic-dead-pixels", null ]
    ] ],
    [ "Example Applications", "example-applications.html", [
      [ "Contents", "example-applications.html#autotoc_md127", null ],
      [ "Preparations", "example-applications.html#example-applications-preparations", null ],
      [ "Enumeration", "example-applications.html#example-applications-enumeration", null ],
      [ "Minimal", "example-applications.html#example-applications-minimal", null ],
      [ "PIF", "example-applications.html#example-applications-pif", [
        [ "Setting Modes", "example-applications.html#autotoc_md128", [
          [ "Analog Input", "example-applications.html#autotoc_md129", null ],
          [ "Analog Output", "example-applications.html#autotoc_md130", null ],
          [ "Digital Input", "example-applications.html#autotoc_md131", null ],
          [ "Digital Output", "example-applications.html#autotoc_md132", null ],
          [ "Fail Safe", "example-applications.html#autotoc_md133", null ]
        ] ],
        [ "Directly Accessing the Input Values", "example-applications.html#autotoc_md134", null ]
      ] ],
      [ "Simple View", "example-applications.html#example-applications-simple-view", null ]
    ] ],
    [ "Troubleshooting", "troubleshooting.html", [
      [ "Contents", "troubleshooting.html#autotoc_md135", null ],
      [ "Linux", "troubleshooting.html#troubleshooting-linux", [
        [ "User Groups", "troubleshooting.html#autotoc_md136", null ],
        [ "UVC Driver Settings", "troubleshooting.html#autotoc_md137", null ],
        [ "No device found", "troubleshooting.html#autotoc_md138", null ]
      ] ],
      [ "Windows", "troubleshooting.html#troubleshooting-windows", null ],
      [ "False Color Images", "troubleshooting.html#troubleshooting-false-color-images", [
        [ "Unexpected Colors", "troubleshooting.html#autotoc_md139", null ],
        [ "Tearing", "troubleshooting.html#autotoc_md140", null ]
      ] ],
      [ "Video Stream", "troubleshooting.html#troubleshooting-video-stream", null ],
      [ "Temperature Differences to PixConnect", "troubleshooting.html#troubleshooting-temperature-differences-to-pixconnect", null ],
      [ "Disconnecting in Callbacks", "troubleshooting.html#troubleshooting-disconnecting-in-callbacks", null ]
    ] ],
    [ "Changelog", "changelog.html", [
      [ "Contents", "changelog.html#autotoc_md141", null ],
      [ "Versions 10.x", "changelog.html#changelog_versions_10", [
        [ "Version 10.1.1", "changelog.html#autotoc_md142", [
          [ "Features", "changelog.html#autotoc_md143", null ],
          [ "Changes", "changelog.html#autotoc_md144", null ],
          [ "Bugs", "changelog.html#autotoc_md145", null ]
        ] ],
        [ "Version 10.1.0", "changelog.html#autotoc_md146", [
          [ "Features", "changelog.html#autotoc_md147", null ],
          [ "Changes", "changelog.html#autotoc_md148", null ],
          [ "Bugs", "changelog.html#autotoc_md149", null ]
        ] ],
        [ "Version 10.0.1", "changelog.html#autotoc_md150", [
          [ "Features", "changelog.html#autotoc_md151", null ],
          [ "Bugs", "changelog.html#autotoc_md152", null ]
        ] ],
        [ "Version 10.0.0", "changelog.html#autotoc_md153", null ]
      ] ]
    ] ],
    [ "Contact", "contact.html", [
      [ "Contents", "contact.html#autotoc_md154", null ],
      [ "Website", "contact.html#contact-website", null ],
      [ "E-Mail", "contact.html#contact-e-mail", null ],
      [ "GitHub", "contact.html#contact-github", null ]
    ] ],
    [ "↓ Code ↓", "code.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"Api_8h.html",
"classoptris_1_1DeviceNetworkConfig.html#a72f7ef5865d9bd9b2fe87810b82352c5",
"classoptris_1_1IRImager.html#a12044267e37883b418a58a673c6a8c31",
"classoptris_1_1IRImagerCreator.html#af29658f5f1ae46acf6d2e628b6e23657",
"classoptris_1_1MeasurementField.html#a26a0c2f137cbb9ab107eef997e1e65c1",
"classoptris_1_1PifDoConfig.html#a1fc102a290a745def1351014247c1bcf",
"classoptris_1_1ThermalFrame.html#af69d5813e6d3e78f172692fcd4811bc4",
"important-files.html#important-files-configuration-process-interface-device-type",
"public-api.html#public-api-thermal-data"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';