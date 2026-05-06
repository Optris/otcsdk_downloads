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
        [ "Xi 320 MT", "features.html#features-supported-cameras-xi320mt", null ],
        [ "Xi 400", "features.html#autotoc_md9", null ],
        [ "Xi 410", "features.html#features-supported-cameras-xi410", null ],
        [ "Xi 440", "features.html#autotoc_md10", null ],
        [ "Xi 640", "features.html#autotoc_md11", null ],
        [ "Xi 05M", "features.html#autotoc_md12", null ],
        [ "Xi 1M", "features.html#autotoc_md13", null ]
      ] ],
      [ "Supported Process Interfaces (PIFs)", "features.html#features-supported-pifs", [
        [ "Standard", "features.html#autotoc_md14", null ],
        [ "Industrial PIF (mA)", "features.html#autotoc_md15", null ],
        [ "Industrial PIF (mV)", "features.html#autotoc_md16", null ],
        [ "Internal PIF", "features.html#autotoc_md17", null ],
        [ "Stackable PIF", "features.html#autotoc_md18", null ]
      ] ]
    ] ],
    [ "Installation", "installation.html", [
      [ "Contents", "installation.html#autotoc_md19", null ],
      [ "Download", "installation.html#installation-download", null ],
      [ "Windows", "installation.html#installation-windows", null ],
      [ "Linux (Ubuntu LTS)", "installation.html#installation-ubuntu", null ]
    ] ],
    [ "Basic Usage", "basic-usage.html", [
      [ "Contents", "basic-usage.html#autotoc_md20", null ],
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
          [ "Optics", "basic-usage.html#autotoc_md21", null ],
          [ "Temperature Ranges", "basic-usage.html#autotoc_md22", null ],
          [ "Video Formats", "basic-usage.html#autotoc_md23", null ]
        ] ]
      ] ],
      [ "Command Line Tools", "basic-usage.html#basic-usage-command-line-tools", [
        [ "otc_configure_ethernet", "basic-usage.html#basic-usage-command-line-tools-otc-configure-ethernet", null ],
        [ "otc_find_devices", "basic-usage.html#basic-usage-command-line-tools-otc-find-devices", null ],
        [ "otc_version", "basic-usage.html#basic-usage-command-line-tools-otc-version", null ]
      ] ]
    ] ],
    [ "Start Developing", "start-developing.html", [
      [ "Contents", "start-developing.html#autotoc_md24", null ],
      [ "Which Language to Choose?", "start-developing.html#start-developing-which-language-to-choose", null ],
      [ "Toolchains", "start-developing.html#start-developing-toolchains", [
        [ "C++", "start-developing.html#start-developing-toolchains-cpp", null ],
        [ "C Sharp", "start-developing.html#start-developing-toolchains-csharp", null ],
        [ "Python 3", "start-developing.html#start-developing-toolchains-python3", null ]
      ] ],
      [ "Project Integration", "start-developing.html#start-developing-project-integration", [
        [ "C++", "start-developing.html#start-developing-project-integration-cpp", [
          [ "CMake", "start-developing.html#autotoc_md25", null ],
          [ "Visual Studio Project", "start-developing.html#autotoc_md26", null ]
        ] ],
        [ "C Sharp", "start-developing.html#start-developing-project-integration-csharp", null ],
        [ "Python 3", "start-developing.html#start-developing-project-integration-python3", null ]
      ] ]
    ] ],
    [ "Public API", "public-api.html", [
      [ "Contents", "public-api.html#autotoc_md27", null ],
      [ "Architecture", "public-api.html#public-api-architecture", null ],
      [ "Thermal Data", "public-api.html#public-api-thermal-data", null ],
      [ "False Color Images", "public-api.html#public-api-false-color-images", null ]
    ] ],
    [ "Important Files", "important-files.html", [
      [ "Contents", "important-files.html#autotoc_md28", null ],
      [ "Overview", "important-files.html#important-files-overview", null ],
      [ "Configuration", "important-files.html#important-files-configuration", [
        [ "Version", "important-files.html#important-files-configuration-version", [
          [ "configuration", "important-files.html#autotoc_md29", null ],
          [ "sdk", "important-files.html#autotoc_md30", null ]
        ] ],
        [ "Serial Number", "important-files.html#important-files-configuration-serial-number", [
          [ "serial_number", "important-files.html#autotoc_md31", null ]
        ] ],
        [ "Connection", "important-files.html#important-files-configuration-connection", [
          [ "interface", "important-files.html#autotoc_md32", null ],
          [ "ip_address", "important-files.html#autotoc_md33", null ],
          [ "port", "important-files.html#autotoc_md34", null ],
          [ "check_ip", "important-files.html#autotoc_md35", null ],
          [ "timeout", "important-files.html#autotoc_md36", null ]
        ] ],
        [ "Buffer Queue Size", "important-files.html#important-files-configuration-buffer-queue-size", [
          [ "buffer_queue_size", "important-files.html#autotoc_md37", null ]
        ] ],
        [ "Processing", "important-files.html#important-files-configuration-processing", [
          [ "outputs", "important-files.html#autotoc_md38", [
            [ "raw_frames", "important-files.html#autotoc_md39", null ],
            [ "thermal_frame", "important-files.html#autotoc_md40", null ],
            [ "fields", "important-files.html#important-files-configuration-processing-fields", null ]
          ] ],
          [ "max_result_pool_size", "important-files.html#autotoc_md41", null ]
        ] ],
        [ "Optics", "important-files.html#important-files-configuration-optics", [
          [ "field_of_view", "important-files.html#autotoc_md42", null ],
          [ "text", "important-files.html#autotoc_md43", null ],
          [ "rdc_mode", "important-files.html#important-files-configuration-optics-rdc-mode", null ],
          [ "sos_correction", "important-files.html#autotoc_md44", null ]
        ] ],
        [ "Temperature Range", "important-files.html#important-files-configuration-temperature-range", [
          [ "min", "important-files.html#autotoc_md45", null ],
          [ "max", "important-files.html#autotoc_md46", null ],
          [ "extended", "important-files.html#autotoc_md47", null ],
          [ "enable_high_precision", "important-files.html#autotoc_md48", null ]
        ] ],
        [ "Video Format", "important-files.html#important-files-configuration-video-format", [
          [ "width", "important-files.html#autotoc_md49", null ],
          [ "height", "important-files.html#autotoc_md50", null ],
          [ "framerate", "important-files.html#autotoc_md51", null ],
          [ "subsampled_framerate", "important-files.html#important-files-configuration-video-format-subsampled-framerate", null ]
        ] ],
        [ "Auto Flag", "important-files.html#important-files-configuration-auto-flag", [
          [ "enable", "important-files.html#autotoc_md52", null ],
          [ "min_interval", "important-files.html#autotoc_md53", null ],
          [ "max_interval", "important-files.html#autotoc_md54", null ]
        ] ],
        [ "Sensor Chip Heating", "important-files.html#important-files-configuration-sensor-chip-heating", [
          [ "mode", "important-files.html#autotoc_md55", null ],
          [ "temperature", "important-files.html#autotoc_md56", null ]
        ] ],
        [ "Focus Motor Position", "important-files.html#important-files-configuration-focus-motor-position", [
          [ "focus_motor_position", "important-files.html#autotoc_md57", null ]
        ] ],
        [ "Radiation Parameters", "important-files.html#important-files-configuration-radiation-parameters", [
          [ "emissivity", "important-files.html#autotoc_md58", null ],
          [ "transmissivity", "important-files.html#autotoc_md59", null ],
          [ "ambient", "important-files.html#autotoc_md60", null ]
        ] ],
        [ "Fail Safe", "important-files.html#important-files-configuration-fail-safe", [
          [ "flag_timeouts.enable", "important-files.html#autotoc_md61", null ],
          [ "flag_timeouts.max_cycle_failures", "important-files.html#autotoc_md62", null ],
          [ "processing_chain_timeouts.enable", "important-files.html#autotoc_md63", null ]
        ] ],
        [ "Alarms", "important-files.html#important-files-configuration-alarms", [
          [ "name", "important-files.html#autotoc_md64", null ],
          [ "input", "important-files.html#autotoc_md65", null ],
          [ "field", "important-files.html#autotoc_md66", null ],
          [ "field.index", "important-files.html#autotoc_md67", null ],
          [ "field.stat", "important-files.html#autotoc_md68", null ],
          [ "uncommitted_value", "important-files.html#autotoc_md69", null ],
          [ "uncommitted_value.device_index", "important-files.html#autotoc_md70", null ],
          [ "uncommitted_value.pin_index", "important-files.html#autotoc_md71", null ],
          [ "enabled", "important-files.html#autotoc_md72", null ],
          [ "pre_alarm", "important-files.html#autotoc_md73", null ],
          [ "pre_alarm.enabled", "important-files.html#autotoc_md74", null ],
          [ "pre_alarm.min", "important-files.html#autotoc_md75", null ],
          [ "pre_alarm.max", "important-files.html#autotoc_md76", null ],
          [ "alarm", "important-files.html#autotoc_md77", null ],
          [ "alarm.min", "important-files.html#autotoc_md78", null ],
          [ "alarm.max", "important-files.html#autotoc_md79", null ],
          [ "part_of_composite", "important-files.html#autotoc_md80", null ],
          [ "pif_analog_outputs & pif_digital_outputs", "important-files.html#autotoc_md81", [
            [ "output", "important-files.html#autotoc_md82", null ],
            [ "output.device_index", "important-files.html#autotoc_md83", null ],
            [ "output.pin_index", "important-files.html#autotoc_md84", null ]
          ] ]
        ] ],
        [ "Measurement Fields", "important-files.html#important-files-configuration-measurement-fields", [
          [ "name", "important-files.html#autotoc_md85", null ],
          [ "shape", "important-files.html#autotoc_md86", null ],
          [ "position", "important-files.html#autotoc_md87", null ],
          [ "position.x", "important-files.html#autotoc_md88", null ],
          [ "position.y", "important-files.html#autotoc_md89", null ],
          [ "dimensions", "important-files.html#autotoc_md90", null ],
          [ "dimensions.x", "important-files.html#autotoc_md91", null ],
          [ "dimensions.y", "important-files.html#autotoc_md92", null ],
          [ "vertices", "important-files.html#autotoc_md93", null ],
          [ "vertices.vertex.x", "important-files.html#autotoc_md94", null ],
          [ "vertices.vertex.y", "important-files.html#autotoc_md95", null ],
          [ "normalized", "important-files.html#autotoc_md96", null ],
          [ "radiation", "important-files.html#important-files-configuration-measurement-field-radiation", null ],
          [ "radiation.emissivity", "important-files.html#autotoc_md97", null ]
        ] ],
        [ "Process Interface (PIF)", "important-files.html#important-files-configuration-process-interface", [
          [ "Device", "important-files.html#autotoc_md98", [
            [ "device_type", "important-files.html#important-files-configuration-process-interface-device-type", null ],
            [ "device_count", "important-files.html#important-files-configuration-process-interface-device-count", null ]
          ] ],
          [ "Channels", "important-files.html#important-files-configuration-process-interface-channels", [
            [ "channel.device_index", "important-files.html#autotoc_md99", null ],
            [ "channel.pin_index", "important-files.html#autotoc_md100", null ]
          ] ],
          [ "analog_inputs", "important-files.html#important-files-configuration-process-interface-analog-inputs", [
            [ "mode", "important-files.html#autotoc_md101", null ],
            [ "slope", "important-files.html#autotoc_md102", null ],
            [ "slope.gain", "important-files.html#autotoc_md103", null ],
            [ "slope.offset", "important-files.html#autotoc_md104", null ],
            [ "trigger", "important-files.html#autotoc_md105", null ],
            [ "trigger.threshold", "important-files.html#autotoc_md106", null ],
            [ "trigger.low_active", "important-files.html#autotoc_md107", null ],
            [ "uncommitted_value", "important-files.html#autotoc_md108", null ],
            [ "uncommitted_value.name", "important-files.html#autotoc_md109", null ],
            [ "uncommitted_value.unit", "important-files.html#autotoc_md110", null ]
          ] ],
          [ "digital_inputs", "important-files.html#important-files-configuration-process-interface-digital-inputs", [
            [ "mode", "important-files.html#autotoc_md111", null ],
            [ "trigger", "important-files.html#autotoc_md112", null ],
            [ "trigger.", "important-files.html#autotoc_md113", null ]
          ] ],
          [ "analog_outputs", "important-files.html#important-files-configuration-process-interface-analog-outputs", [
            [ "mode", "important-files.html#autotoc_md114", null ],
            [ "output_mode", "important-files.html#autotoc_md115", null ],
            [ "slope", "important-files.html#autotoc_md116", null ],
            [ "slope.gain", "important-files.html#autotoc_md117", null ],
            [ "slope.offset", "important-files.html#autotoc_md118", null ],
            [ "field", "important-files.html#autotoc_md119", null ],
            [ "field.index", "important-files.html#autotoc_md120", null ],
            [ "field.stat", "important-files.html#autotoc_md121", null ],
            [ "output", "important-files.html#autotoc_md122", null ],
            [ "output.active", "important-files.html#autotoc_md123", null ],
            [ "output.intermediate", "important-files.html#autotoc_md124", null ],
            [ "output.inactive", "important-files.html#autotoc_md125", null ]
          ] ],
          [ "digital_outputs", "important-files.html#important-files-configuration-process-interface-digital-outputs", [
            [ "mode", "important-files.html#autotoc_md126", null ],
            [ "output", "important-files.html#autotoc_md127", null ],
            [ "low_active", "important-files.html#autotoc_md128", null ]
          ] ],
          [ "fail_safe", "important-files.html#important-files-configuration-process-interface-fail-safe", [
            [ "mode", "important-files.html#autotoc_md129", null ]
          ] ]
        ] ]
      ] ],
      [ "Calibration", "important-files.html#important-files-calibration", null ],
      [ "Normalization", "important-files.html#important-files-normalization", null ],
      [ "Formats Definitions", "important-files.html#important-files-format-definitions", null ],
      [ "Color Palettes", "important-files.html#important-files-color-palettes", null ],
      [ "Dynamic Dead Pixels", "important-files.html#important-files-dynamic-dead-pixels", null ],
      [ "Logs", "important-files.html#important-files-logs", [
        [ "Custom Log Callback", "important-files.html#important-files-logs-callback", null ]
      ] ]
    ] ],
    [ "Example Applications", "example-applications.html", [
      [ "Contents", "example-applications.html#autotoc_md130", null ],
      [ "Preparations", "example-applications.html#example-applications-preparations", null ],
      [ "Enumeration", "example-applications.html#example-applications-enumeration", null ],
      [ "Minimal", "example-applications.html#example-applications-minimal", null ],
      [ "PIF", "example-applications.html#example-applications-pif", [
        [ "Setting Modes", "example-applications.html#autotoc_md131", [
          [ "Analog Input", "example-applications.html#autotoc_md132", null ],
          [ "Analog Output", "example-applications.html#autotoc_md133", null ],
          [ "Digital Input", "example-applications.html#autotoc_md134", null ],
          [ "Digital Output", "example-applications.html#autotoc_md135", null ],
          [ "Fail Safe", "example-applications.html#autotoc_md136", null ]
        ] ],
        [ "Directly Accessing the Input Values", "example-applications.html#autotoc_md137", null ]
      ] ],
      [ "Simple View", "example-applications.html#example-applications-simple-view", null ]
    ] ],
    [ "Changelog", "changelog.html", [
      [ "Contents", "changelog.html#autotoc_md138", null ],
      [ "Versions 11.x", "changelog.html#changelog_versions_11", [
        [ "Version 11.3.0", "changelog.html#autotoc_md139", [
          [ "Features", "changelog.html#autotoc_md140", null ],
          [ "Changes", "changelog.html#autotoc_md141", null ]
        ] ],
        [ "API changes", "changelog.html#autotoc_md142", [
          [ "Bugs", "changelog.html#autotoc_md143", null ]
        ] ]
      ] ],
      [ "Versions 10.x", "changelog.html#changelog_versions_10", [
        [ "Version 10.1.1", "changelog.html#autotoc_md144", [
          [ "Features", "changelog.html#autotoc_md145", null ],
          [ "Changes", "changelog.html#autotoc_md146", null ],
          [ "Bugs", "changelog.html#autotoc_md147", null ]
        ] ],
        [ "Version 10.1.0", "changelog.html#autotoc_md148", [
          [ "Features", "changelog.html#autotoc_md149", null ],
          [ "Changes", "changelog.html#autotoc_md150", null ],
          [ "Bugs", "changelog.html#autotoc_md151", null ]
        ] ],
        [ "Version 10.0.1", "changelog.html#autotoc_md152", [
          [ "Features", "changelog.html#autotoc_md153", null ],
          [ "Bugs", "changelog.html#autotoc_md154", null ]
        ] ],
        [ "Version 10.0.0", "changelog.html#autotoc_md155", null ]
      ] ]
    ] ],
    [ "Troubleshooting", "troubleshooting.html", [
      [ "Contents", "troubleshooting.html#autotoc_md156", null ],
      [ "Terminology", "troubleshooting.html#troubleshooting-terminology", null ],
      [ "Linux", "troubleshooting.html#troubleshooting-linux", [
        [ "User Groups", "troubleshooting.html#autotoc_md157", null ],
        [ "UVC Driver Settings", "troubleshooting.html#autotoc_md158", null ],
        [ "No device found", "troubleshooting.html#autotoc_md159", null ],
        [ "No video stream due to Linux kernel issues", "troubleshooting.html#autotoc_md160", null ]
      ] ],
      [ "Windows", "troubleshooting.html#troubleshooting-windows", null ],
      [ "False Color Images", "troubleshooting.html#troubleshooting-false-color-images", [
        [ "Unexpected Colors", "troubleshooting.html#autotoc_md161", null ],
        [ "Tearing", "troubleshooting.html#autotoc_md162", null ]
      ] ],
      [ "Video Stream", "troubleshooting.html#troubleshooting-video-stream", null ],
      [ "Temperature Differences to PixConnect", "troubleshooting.html#troubleshooting-temperature-differences-to-pixconnect", null ]
    ] ],
    [ "Contact", "contact.html", [
      [ "Contents", "contact.html#autotoc_md163", null ],
      [ "Website", "contact.html#contact-website", null ],
      [ "E-Mail", "contact.html#contact-e-mail", null ],
      [ "GitHub", "contact.html#contact-github", null ]
    ] ],
    [ "↓ Specific Topics ↓", "sdk-topics.html", null ],
    [ "Alarms", "alarms.html", [
      [ "Contents", "alarms.html#autotoc_md164", null ],
      [ "Overview", "alarms.html#alarms-overview", null ],
      [ "Alarm Channel", "alarms.html#alarms-channel", [
        [ "Inputs", "alarms.html#alarms-channel-inputs", [
          [ "Availability", "alarms.html#autotoc_md165", null ],
          [ "Update Rate", "alarms.html#autotoc_md166", null ]
        ] ],
        [ "States", "alarms.html#alarm-channel-states", null ],
        [ "Outputs", "alarms.html#alarms-channel-outputs", [
          [ "IRImager Client Callback", "alarms.html#autotoc_md167", null ],
          [ "Composite Alarm", "alarms.html#alarms-channel-outputs-composite-alarm", null ],
          [ "PIF Output Channels", "alarms.html#autotoc_md168", null ]
        ] ]
      ] ],
      [ "Creating Channels", "alarms.html#alarms-creating-channels", null ],
      [ "Modifying Channels", "alarms.html#alarms-modifying-channels", null ],
      [ "Removing Channels", "alarms.html#alarms-removing-channels", null ]
    ] ],
    [ "Calibration File Acquisition", "calibration-file-acquisition.html", [
      [ "Contents", "calibration-file-acquisition.html#autotoc_md169", null ],
      [ "Overview", "calibration-file-acquisition.html#calibration-file-acquisition-overview", null ],
      [ "Sources", "calibration-file-acquisition.html#calibration-file-acquisition-sources", [
        [ "Device", "calibration-file-acquisition.html#calibration-file-acquisition-sources-device", null ],
        [ "Filesystem", "calibration-file-acquisition.html#calibration-file-acquisition-sources-filesystem", null ],
        [ "Internet", "calibration-file-acquisition.html#calibration-file-acquisition-sources-internet", null ]
      ] ],
      [ "Configuration", "calibration-file-acquisition.html#calibration-file-acquisition-configuration", [
        [ "Calibration File Sources", "calibration-file-acquisition.html#calibration-file-acquisition-configuration-sources", null ],
        [ "Calibration File Source Directory", "calibration-file-acquisition.html#calibration-file-acquisition-configuration-source-directory", null ]
      ] ],
      [ "Runtime Behavior", "calibration-file-acquisition.html#calibration-file-acquisition-runtime-behavior", [
        [ "Device", "calibration-file-acquisition.html#calibration-file-acquisition-runtime-behavior-device", null ],
        [ "Filesystem", "calibration-file-acquisition.html#calibration-file-acquisition-runtime-behavior-filesystem", null ],
        [ "Internet", "calibration-file-acquisition.html#calibration-file-acquisition-runtime-behavior-internet", null ]
      ] ]
    ] ],
    [ "Color Palettes", "color-palettes.html", [
      [ "Contents", "color-palettes.html#autotoc_md170", null ],
      [ "Overview", "color-palettes.html#color-palettes-overview", null ],
      [ "Built-in Palettes", "color-palettes.html#color-palettes-builtin", null ],
      [ "Palette Files", "color-palettes.html#color-palettes-files", null ],
      [ "Loading Palettes", "color-palettes.html#color-palettes-loading", [
        [ "Initial Palettes Loading", "color-palettes.html#color-palettes-loading-initial", null ],
        [ "Reload Palettes", "color-palettes.html#color-palettes-loading-reload", null ]
      ] ],
      [ "Selecting a Palette", "color-palettes.html#color-palettes-selecting", null ],
      [ "Creating Custom Palettes", "color-palettes.html#color-palettes-custom", null ],
      [ "Saving Palettes", "color-palettes.html#color-palettes-saving", null ]
    ] ],
    [ "Device Communication", "device-communication.html", [
      [ "Contents", "device-communication.html#autotoc_md171", null ],
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
    [ "Device Enumeration", "device-enumeration.html", [
      [ "Contents", "device-enumeration.html#autotoc_md172", null ],
      [ "Overview", "device-enumeration.html#device-enumeration-overview", null ],
      [ "Prerequisites", "device-enumeration.html#device-enumeration-prerequisites", null ],
      [ "Usage", "device-enumeration.html#device-enumeration-usage", [
        [ "Detection Loop", "device-enumeration.html#device-enumeration-usage-detection-loop", null ],
        [ "Detectors", "device-enumeration.html#device-enumeration-usage-detectors", null ],
        [ "Callbacks", "device-enumeration.html#device-enumeration-usage-callbacks", null ]
      ] ],
      [ "Detection Details & Limitations", "device-enumeration.html#device-enumeration-detection-details-limitations", [
        [ "USB", "device-enumeration.html#device-enumeration-detection-details-limitations-usb", null ],
        [ "Ethernet", "device-enumeration.html#device-enumeration-detection-details-limitations-ethernet", null ],
        [ "File Locks", "device-enumeration.html#device-enumeration-detection-details-limitations-file-locks", null ]
      ] ]
    ] ],
    [ "Fail Safe", "fail-safe.html", [
      [ "Contents", "fail-safe.html#autotoc_md173", null ],
      [ "Overview", "fail-safe.html#fail-safe-overview", null ],
      [ "Conditions", "fail-safe.html#fail-safe-conditions", [
        [ "Processing Chain", "fail-safe.html#fail-safe-conditions-processing-chain", [
          [ "Fail Safe Conditions", "fail-safe.html#autotoc_md174", null ],
          [ "Timeouts", "fail-safe.html#autotoc_md175", null ]
        ] ],
        [ "Flag timeout", "fail-safe.html#fail-safe-conditions-flag-timeout", null ],
        [ "Client", "fail-safe.html#fail-safe-conditions-client", null ]
      ] ],
      [ "PIF Signals", "fail-safe.html#fail-safe-pif-signals", null ]
    ] ],
    [ "Measurement Fields", "measurement-fields.html", [
      [ "Contents", "measurement-fields.html#autotoc_md176", null ],
      [ "Overview", "measurement-fields.html#measurement-fields-overview", null ],
      [ "Adding fields", "measurement-fields.html#measurement-fields-adding-fields", null ],
      [ "Manipulating fields", "measurement-fields.html#measurement-fields-manipulating-fields", null ],
      [ "Removing fields", "measurement-fields.html#measurement-fields-removing-fields", null ]
    ] ],
    [ "Operation Modes", "operation-modes.html", [
      [ "Contents", "operation-modes.html#autotoc_md177", null ],
      [ "Operation Modes", "operation-modes.html#operation-modes-overview", null ],
      [ "Getting Available And Active Modes", "operation-modes.html#operation-modes-available-active-modes", null ],
      [ "Setting The Active Mode", "operation-modes.html#operation-modes-setting-active-mode", null ]
    ] ],
    [ "Process Interface (PIF)", "pif.html", [
      [ "Contents", "pif.html#autotoc_md178", null ],
      [ "Overview", "pif.html#pif-overview", null ],
      [ "Device", "pif.html#pif-device", [
        [ "Type", "pif.html#pif-device-type", null ],
        [ "Count", "pif.html#pif-device-count", null ]
      ] ],
      [ "Channels", "pif.html#pif-channels", [
        [ "Addressing", "pif.html#pif-channels-addressing", null ],
        [ "Configuration", "pif.html#pif-channels-configuration", null ],
        [ "Reading Inputs", "pif.html#pif-channels-reading-inputs", null ],
        [ "Creating Outputs", "pif.html#pif-channels-creating-outputs", null ]
      ] ],
      [ "Modes", "pif.html#pif-modes", [
        [ "Universal", "pif.html#pif-modes-universal", [
          [ "Off", "pif.html#autotoc_md179", null ]
        ] ],
        [ "Inputs", "pif.html#pif-modes-inputs", [
          [ "Ambient Temperature", "pif.html#autotoc_md180", null ],
          [ "Emissivity", "pif.html#autotoc_md181", null ],
          [ "Flag Control", "pif.html#autotoc_md182", null ],
          [ "Uncommitted Value", "pif.html#pif-modes-inputs-uncommitted-value", null ]
        ] ],
        [ "Outputs", "pif.html#pif-modes-outputs", [
          [ "Alarm", "pif.html#pif-modes-outputs-alarm", null ],
          [ "External Communication", "pif.html#autotoc_md183", null ],
          [ "Fail Safe", "pif.html#autotoc_md184", null ],
          [ "Flag Status", "pif.html#autotoc_md185", null ],
          [ "Frame Sync", "pif.html#autotoc_md186", null ],
          [ "Internal Temperature", "pif.html#autotoc_md187", null ],
          [ "Measurement Field", "pif.html#autotoc_md188", null ]
        ] ],
        [ "Fail Safe", "pif.html#pif-modes-fail-safe", [
          [ "On", "pif.html#autotoc_md189", null ]
        ] ]
      ] ]
    ] ],
    [ "↓ Code ↓", "code.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
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
"AlarmChannelConfig_8h.html",
"classoptris_1_1CompositeAlarmStatus.html",
"classoptris_1_1FrameMetadata.html#a1fd7008930f2130f88c777b61a7e2397",
"classoptris_1_1IRImagerClient.html#a328a9a0e2f413abf928e59ff3f58732a",
"classoptris_1_1MacAddress.html#a8f11a6b1a255e75e358fa721744e4d07",
"classoptris_1_1Sdk.html#a4c0332561b4f300c2bf0d8c733a0adca",
"files.html",
"namespaceoptris.html#a23ddb213a1599a8ca715eab2198833f8a9bd99a0beea48f10663fc4a7d7a33140",
"public-api.html#public-api-false-color-images",
"structoptris_1_1PifAoConfig.html#a59dc4a870d7fc460f2ca835033e1d240"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';