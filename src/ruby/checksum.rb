# For reading JSON files, see https://hackhands.com/ruby-read-json-file-hash/
# require 'json'
#
# file = File.read '/home/...'
# json = JSON.parse file
# calc_sum json["Preset"]
def calc_sum(json)
  mapped = {
    # Sources
    'None' => 0,
    'Pressure' => 1,
    'Tilt' => 2,

    # Output
    'USB 1' => 1,

    # Curve
    'Linear' => 0,
    'Logarithmic' => 1,
    'Sine' => 2,
    'Cosine' => 3,
    'Exponential' => 4,
    'Invert' => 5,

    # Mode_Pressure_Note
    # 'Normal' => 1

    # LED Refresh Mode
    'Normal' => 0,
    'Control Only' => 2,
    'All Off' => 3
  }
  # There are still some things we have not mapped yet.
  mapped.default = 0

  cs=0
  json.values.each_with_index do |x, i|
    if x.is_a? Numeric
      cs = cs + x
    else
      cs = cs + mapped[x]
    end
  end
  # Some things are still missing. Add an offset
  cs = cs + 59

  # Only keep the lowest 8 bits.
  cs = cs & 0xff

  # Overflow bit
  puts ((cs & 0x80) >> 3).to_s 16
  # 7bit checksum
  puts (cs & 0x7f).to_s 16
end
