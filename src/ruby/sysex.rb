require "unimidi"

# Prompts the user to select a MIDI output
# Sends a MIDI system exclusive message to that output
sysex_msg = [0xF0, 0x7E, 0x7F, 0x06, 0x01, 0xF7]

output = UniMIDI::Output.gets

output.puts(sysex_msg)

# K-Board Universal Inquiry reply
# System exclusive:
# F0 7E 00 06 02
# 00 01 5F        Manufacturer ID
# 1A 00           Device ID 
# 00 00           Device ID
# 01 01 00 01 00 00 Software version?!
# F7

