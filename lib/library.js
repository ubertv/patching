// Library
// What ships with Patching: 32 generic placeholders for sketching, and a few
// real modules a lot of people own.

window.MODULE_LIBRARIES = window.MODULE_LIBRARIES || [];
window.MODULE_LIBRARIES.push({
 id: "library",
 name: "Library",
 modules: [
 {
  "id": "vco",
  "name": "VCO",
  "kind": "voice",
  "generic": true,
  "tags": [
   "oscillator"
  ],
  "jacks": [
   {
    "id": "voct",
    "label": "V/OCT",
    "dir": "in",
    "sig": "pitch"
   },
   {
    "id": "fm",
    "label": "FM",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "pwm",
    "label": "PWM",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "sync",
    "label": "SYNC",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "lin-fm",
    "label": "LIN FM",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "saw",
    "label": "SAW",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "tri",
    "label": "TRI",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "sine",
    "label": "SINE",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "pulse",
    "label": "PULSE",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "sub",
    "label": "SUB",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "vcf",
  "name": "VCF",
  "kind": "voice",
  "generic": true,
  "tags": [
   "filter"
  ],
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "cutoff",
    "label": "CUTOFF",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "res",
    "label": "RES",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "voct",
    "label": "V/OCT",
    "dir": "in",
    "sig": "pitch"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "lp",
    "label": "LP",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "bp",
    "label": "BP",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "hp",
    "label": "HP",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "vca",
  "name": "VCA",
  "kind": "voice",
  "generic": true,
  "tags": [
   "vca"
  ],
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "cv",
    "label": "CV",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "multi"
   }
  ]
 },
 {
  "id": "lpg",
  "name": "Low pass gate",
  "kind": "voice",
  "generic": true,
  "tags": [
   "filter",
   "vca"
  ],
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "cv",
    "label": "CV",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "ping",
    "label": "PING",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "env",
  "name": "Envelope",
  "kind": "voice",
  "generic": true,
  "tags": [
   "envelope",
   "modulation"
  ],
  "jacks": [
   {
    "id": "gate",
    "label": "GATE",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "trig",
    "label": "TRIG",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "attack",
    "label": "ATTACK",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "decay",
    "label": "DECAY",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "inv",
    "label": "INV",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "eoc",
    "label": "EOC",
    "dir": "out",
    "sig": "gate"
   }
  ]
 },
 {
  "id": "lfo",
  "name": "LFO",
  "kind": "voice",
  "generic": true,
  "tags": [
   "lfo",
   "modulation"
  ],
  "jacks": [
   {
    "id": "rate",
    "label": "RATE",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "reset",
    "label": "RESET",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "tri",
    "label": "TRI",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "square",
    "label": "SQUARE",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "inv",
    "label": "INV",
    "dir": "out",
    "sig": "cv"
   }
  ]
 },
 {
  "id": "noise",
  "name": "Noise",
  "kind": "voice",
  "generic": true,
  "tags": [
   "noise"
  ],
  "jacks": [
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "white",
    "label": "WHITE",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "pink",
    "label": "PINK",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "folder",
  "name": "Wavefolder",
  "kind": "voice",
  "generic": true,
  "tags": [
   "wavefolder"
  ],
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "fold",
    "label": "FOLD",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "sym",
    "label": "SYM",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "ringmod",
  "name": "Ring mod",
  "kind": "voice",
  "generic": true,
  "tags": [
   "effect",
   "wavefolder"
  ],
  "jacks": [
   {
    "id": "x",
    "label": "X",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "y",
    "label": "Y",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "drum",
  "name": "Drum voice",
  "kind": "voice",
  "generic": true,
  "tags": [
   "drum",
   "voice"
  ],
  "jacks": [
   {
    "id": "trig",
    "label": "TRIG",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "accent",
    "label": "ACCENT",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "pitch",
    "label": "PITCH",
    "dir": "in",
    "sig": "pitch"
   },
   {
    "id": "decay",
    "label": "DECAY",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "seq",
  "name": "Sequencer",
  "kind": "timing",
  "generic": true,
  "tags": [
   "sequencer"
  ],
  "jacks": [
   {
    "id": "clock",
    "label": "CLOCK",
    "dir": "in",
    "sig": "clock"
   },
   {
    "id": "reset",
    "label": "RESET",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "run",
    "label": "RUN",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "cv",
    "label": "CV",
    "dir": "out",
    "sig": "pitch"
   },
   {
    "id": "cv-2",
    "label": "CV 2",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "gate",
    "label": "GATE",
    "dir": "out",
    "sig": "gate"
   },
   {
    "id": "eos",
    "label": "EOS",
    "dir": "out",
    "sig": "gate"
   }
  ]
 },
 {
  "id": "clock",
  "name": "Clock",
  "kind": "timing",
  "generic": true,
  "tags": [
   "clock"
  ],
  "jacks": [
   {
    "id": "ext",
    "label": "EXT",
    "dir": "in",
    "sig": "clock"
   },
   {
    "id": "run",
    "label": "RUN",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "reset",
    "label": "RESET",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "clock"
   },
   {
    "id": "div",
    "label": "DIV",
    "dir": "out",
    "sig": "clock"
   },
   {
    "id": "mult",
    "label": "MULT",
    "dir": "out",
    "sig": "clock"
   }
  ]
 },
 {
  "id": "divider",
  "name": "Clock divider",
  "kind": "timing",
  "generic": true,
  "tags": [
   "clock"
  ],
  "jacks": [
   {
    "id": "clock",
    "label": "CLOCK",
    "dir": "in",
    "sig": "clock"
   },
   {
    "id": "reset",
    "label": "RESET",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "out-2",
    "label": "/2",
    "dir": "out",
    "sig": "clock"
   },
   {
    "id": "out-4",
    "label": "/4",
    "dir": "out",
    "sig": "clock"
   },
   {
    "id": "out-8",
    "label": "/8",
    "dir": "out",
    "sig": "clock"
   },
   {
    "id": "out-16",
    "label": "/16",
    "dir": "out",
    "sig": "clock"
   }
  ]
 },
 {
  "id": "quantizer",
  "name": "Quantizer",
  "kind": "timing",
  "generic": true,
  "tags": [
   "quantizer"
  ],
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "pitch"
   },
   {
    "id": "trig",
    "label": "TRIG",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "transp",
    "label": "TRANSP",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "pitch"
   },
   {
    "id": "gate",
    "label": "GATE",
    "dir": "out",
    "sig": "gate"
   }
  ]
 },
 {
  "id": "sh",
  "name": "Sample & hold",
  "kind": "timing",
  "generic": true,
  "tags": [
   "random",
   "modulation"
  ],
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "trig",
    "label": "TRIG",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "multi"
   }
  ]
 },
 {
  "id": "random",
  "name": "Random",
  "kind": "timing",
  "generic": true,
  "tags": [
   "random",
   "modulation"
  ],
  "jacks": [
   {
    "id": "clock",
    "label": "CLOCK",
    "dir": "in",
    "sig": "clock"
   },
   {
    "id": "amount",
    "label": "AMOUNT",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "stepped",
    "label": "STEPPED",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "smooth",
    "label": "SMOOTH",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "gate",
    "label": "GATE",
    "dir": "out",
    "sig": "gate"
   }
  ]
 },
 {
  "id": "logic",
  "name": "Logic",
  "kind": "timing",
  "generic": true,
  "tags": [
   "utility",
   "clock"
  ],
  "jacks": [
   {
    "id": "a",
    "label": "A",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "b",
    "label": "B",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "and",
    "label": "AND",
    "dir": "out",
    "sig": "gate"
   },
   {
    "id": "or",
    "label": "OR",
    "dir": "out",
    "sig": "gate"
   },
   {
    "id": "xor",
    "label": "XOR",
    "dir": "out",
    "sig": "gate"
   },
   {
    "id": "not",
    "label": "NOT",
    "dir": "out",
    "sig": "gate"
   }
  ]
 },
 {
  "id": "comparator",
  "name": "Comparator",
  "kind": "timing",
  "generic": true,
  "tags": [
   "utility",
   "modulation"
  ],
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "thresh",
    "label": "THRESH",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "gate"
   },
   {
    "id": "inv",
    "label": "INV",
    "dir": "out",
    "sig": "gate"
   }
  ]
 },
 {
  "id": "mult",
  "name": "Mult",
  "kind": "utility",
  "generic": true,
  "tags": [
   "utility",
   "passive"
  ],
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "out-1",
    "label": "OUT 1",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "out-2",
    "label": "OUT 2",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "out-3",
    "label": "OUT 3",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "out-4",
    "label": "OUT 4",
    "dir": "out",
    "sig": "multi"
   }
  ]
 },
 {
  "id": "mixer",
  "name": "Mixer",
  "kind": "utility",
  "generic": true,
  "tags": [
   "mixer"
  ],
  "jacks": [
   {
    "id": "in-1",
    "label": "IN 1",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "in-2",
    "label": "IN 2",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "in-3",
    "label": "IN 3",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "in-4",
    "label": "IN 4",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "multi"
   }
  ]
 },
 {
  "id": "matrix",
  "name": "Matrix mixer",
  "kind": "utility",
  "generic": true,
  "tags": [
   "mixer",
   "utility"
  ],
  "jacks": [
   {
    "id": "in-1",
    "label": "IN 1",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "in-2",
    "label": "IN 2",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "in-3",
    "label": "IN 3",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "in-4",
    "label": "IN 4",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "out-1",
    "label": "OUT 1",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "out-2",
    "label": "OUT 2",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "out-3",
    "label": "OUT 3",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "out-4",
    "label": "OUT 4",
    "dir": "out",
    "sig": "multi"
   }
  ]
 },
 {
  "id": "atten",
  "name": "Attenuverter",
  "kind": "utility",
  "generic": true,
  "tags": [
   "utility"
  ],
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "cv",
    "label": "CV",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "multi"
   }
  ]
 },
 {
  "id": "offset",
  "name": "Offset",
  "kind": "utility",
  "generic": true,
  "tags": [
   "utility"
  ],
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "cv"
   }
  ]
 },
 {
  "id": "slew",
  "name": "Slew",
  "kind": "utility",
  "generic": true,
  "tags": [
   "utility",
   "modulation"
  ],
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "rise",
    "label": "RISE",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "fall",
    "label": "FALL",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "gate",
    "label": "GATE",
    "dir": "out",
    "sig": "gate"
   }
  ]
 },
 {
  "id": "switch",
  "name": "Switch",
  "kind": "utility",
  "generic": true,
  "tags": [
   "utility"
  ],
  "jacks": [
   {
    "id": "in-1",
    "label": "IN 1",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "in-2",
    "label": "IN 2",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "clock",
    "label": "CLOCK",
    "dir": "in",
    "sig": "clock"
   },
   {
    "id": "reset",
    "label": "RESET",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "multi"
   }
  ]
 },
 {
  "id": "delay",
  "name": "Delay",
  "kind": "fx",
  "generic": true,
  "tags": [
   "delay",
   "effect"
  ],
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "time",
    "label": "TIME",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "fb",
    "label": "FB",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "mix",
    "label": "MIX",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "clock",
    "label": "CLOCK",
    "dir": "in",
    "sig": "clock"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "wet",
    "label": "WET",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "reverb",
  "name": "Reverb",
  "kind": "fx",
  "generic": true,
  "tags": [
   "reverb",
   "effect"
  ],
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "size",
    "label": "SIZE",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "mix",
    "label": "MIX",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out-l",
    "label": "OUT L",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "out-r",
    "label": "OUT R",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "dist",
  "name": "Distortion",
  "kind": "fx",
  "generic": true,
  "tags": [
   "effect"
  ],
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "drive",
    "label": "DRIVE",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "comp",
  "name": "Compressor",
  "kind": "fx",
  "generic": true,
  "tags": [
   "effect"
  ],
  "jacks": [
   {
    "id": "in-l",
    "label": "IN L",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "in-r",
    "label": "IN R",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "sc",
    "label": "SIDECHAIN",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "out-l",
    "label": "OUT L",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "out-r",
    "label": "OUT R",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "env",
    "label": "ENV",
    "dir": "out",
    "sig": "cv"
   }
  ]
 },
 {
  "id": "out",
  "name": "Output",
  "kind": "fx",
  "generic": true,
  "tags": [
   "output"
  ],
  "jacks": [
   {
    "id": "in-l",
    "label": "IN L",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "in-r",
    "label": "IN R",
    "dir": "in",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "phones",
  "name": "Headphones",
  "kind": "fx",
  "generic": true,
  "tags": [
   "output"
  ],
  "jacks": [
   {
    "id": "in-l",
    "label": "IN L",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "in-r",
    "label": "IN R",
    "dir": "in",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "extin",
  "name": "External in",
  "kind": "fx",
  "generic": true,
  "tags": [
   "output"
  ],
  "jacks": [
   {
    "id": "out-l",
    "label": "OUT L",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "out-r",
    "label": "OUT R",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "quad-vca",
  "name": "Quad VCA",
  "mfr": "Intellijel",
  "hp": 12,
  "tags": [
   "vca",
   "mixer",
   "utility"
  ],
  "links": {
   "mfr": "https://intellijel.com/",
   "product": "https://intellijel.com/shop/eurorack/quad-vca/",
   "manual": "https://intellijel.com/downloads/manuals/quad-vca_manual_2021.08.02.pdf",
   "manualNote": "Revision 2021.08.02.",
   "mg": "https://modulargrid.net/e/intellijel-quad-vca"
  },
  "jacks": [
   {
    "id": "cv-1",
    "label": "CV 1",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "cv-2",
    "label": "CV 2",
    "dir": "in",
    "sig": "cv",
    "normalled": "Takes CV 1 when unpatched; the normal cascades left to right."
   },
   {
    "id": "cv-3",
    "label": "CV 3",
    "dir": "in",
    "sig": "cv",
    "normalled": "Takes CV 2 when unpatched; the normal cascades left to right."
   },
   {
    "id": "cv-4",
    "label": "CV 4",
    "dir": "in",
    "sig": "cv",
    "normalled": "Takes CV 3 when unpatched; the normal cascades left to right."
   },
   {
    "id": "in-1",
    "label": "IN 1",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "in-2",
    "label": "IN 2",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "in-3",
    "label": "IN 3",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "in-4",
    "label": "IN 4",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "out-1",
    "label": "OUT 1",
    "dir": "out",
    "sig": "multi",
    "normalled": "Summed into OUT 2 after channel 2's VCA, not through it. Patching pulls channel 1 out of the downstream mix."
   },
   {
    "id": "out-2",
    "label": "OUT 2",
    "dir": "out",
    "sig": "multi",
    "normalled": "Summed into OUT 3. Patching it takes channels 1+2 as a submix."
   },
   {
    "id": "out-3",
    "label": "OUT 3",
    "dir": "out",
    "sig": "multi",
    "normalled": "Summed into OUT 4."
   },
   {
    "id": "out-4",
    "label": "OUT 4/MIX",
    "dir": "out",
    "sig": "multi",
    "normalled": "Carries every channel not patched out further up the chain, so with the other three unpatched this is a four channel mix."
   }
  ]
 },
 {
  "id": "pamelas-pro-workout",
  "name": "Pamela's PRO Workout",
  "mfr": "ALM Busy Circuits",
  "hp": 8,
  "tags": [
   "clock",
   "modulation",
   "sequencer"
  ],
  "links": {
   "mfr": "https://busycircuits.com/",
   "product": "https://busycircuits.com/pages/alm034",
   "manual": "https://assets.busycircuits.com/docs/alm034-manual.pdf",
   "manualNote": "32 pages. ALM overwrite this file each release, so the version moves.",
   "mg": "https://modulargrid.net/e/alm-busy-circuits-pamela-s-pro-workout",
   "firmware": "https://busycircuits.com/pages/alm034"
  },
  "jacks": [
   {
    "id": "clk",
    "label": "Clk",
    "dir": "in",
    "sig": "clock",
    "normalled": "Reassignable in the settings menu: CLOCK, CV, or NEXT BANK. sig here assumes the default."
   },
   {
    "id": "run",
    "label": "Run",
    "dir": "in",
    "sig": "gate",
    "normalled": "Reassignable in the settings menu: RUN, RESET, CV, PREV BANK, or ROTATE. sig here assumes the default."
   },
   {
    "id": "cv-1",
    "label": "CV 1",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "cv-2",
    "label": "CV 2",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out-1",
    "label": "1",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "out-2",
    "label": "2",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "out-3",
    "label": "3",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "out-4",
    "label": "4",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "out-5",
    "label": "5",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "out-6",
    "label": "6",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "out-7",
    "label": "7",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "out-8",
    "label": "8",
    "dir": "out",
    "sig": "multi"
   }
  ]
 },
 {
  "id": "batumi",
  "name": "Batumi II",
  "mfr": "Xaoc Devices",
  "hp": 10,
  "tags": [
   "modulation",
   "lfo"
  ],
  "note": "Draws 90mA +12V, 50mA -12V. Reaches audio rates with 1V/oct tracking. The Poti II expander adds four SHAPE CV inputs, not covered here.",
  "links": {
   "mfr": "https://xaocdevices.com/",
   "product": "https://xaocdevices.com/main/batumi2/",
   "manual": "http://xaocdevices.com/manuals/xaoc_batumi2_poti2_manual_A4.pdf",
   "manualNote": "rev 1974/2.1. Covers Batumi II and the Poti II expander.",
   "mg": "https://www.modulargrid.net/e/xaoc-devices-batumi-ii",
   "firmware": "https://xaocdevices.com/main/support/"
  },
  "jacks": [
   {
    "id": "frq-1",
    "label": "FRQ·PH·RTO 1",
    "dir": "in",
    "sig": "cv",
    "normalled": "With a cable in this channel's RESET·SYNC and sync selected, this input picks discrete division factors instead of continuous frequency. Unplug RESET·SYNC for continuous control."
   },
   {
    "id": "frq-2",
    "label": "FRQ·PH·RTO 2",
    "dir": "in",
    "sig": "cv",
    "normalled": "With a cable in this channel's RESET·SYNC and sync selected, this input picks discrete division factors instead of continuous frequency. Unplug RESET·SYNC for continuous control."
   },
   {
    "id": "frq-3",
    "label": "FRQ·PH·RTO 3",
    "dir": "in",
    "sig": "cv",
    "normalled": "With a cable in this channel's RESET·SYNC and sync selected, this input picks discrete division factors instead of continuous frequency. Unplug RESET·SYNC for continuous control."
   },
   {
    "id": "frq-4",
    "label": "FRQ·PH·RTO 4",
    "dir": "in",
    "sig": "cv",
    "normalled": "With a cable in this channel's RESET·SYNC and sync selected, this input picks discrete division factors instead of continuous frequency. Unplug RESET·SYNC for continuous control."
   },
   {
    "id": "reset-1",
    "label": "RESET·SYNC 1",
    "dir": "in",
    "sig": "gate",
    "normalled": "Sync follows an external tempo on any channel in free mode, but only on this one in phase, divide and mult, where b, c and d follow it."
   },
   {
    "id": "reset-2",
    "label": "RESET·SYNC 2",
    "dir": "in",
    "sig": "gate",
    "normalled": "In phase, divide and mult modes this resets its own channel only. Channel a's reset moves all four."
   },
   {
    "id": "reset-3",
    "label": "RESET·SYNC 3",
    "dir": "in",
    "sig": "gate",
    "normalled": "In phase, divide and mult modes this resets its own channel only. Channel a's reset moves all four."
   },
   {
    "id": "reset-4",
    "label": "RESET·SYNC 4",
    "dir": "in",
    "sig": "gate",
    "normalled": "In phase, divide and mult modes this resets its own channel only. Channel a's reset moves all four."
   },
   {
    "id": "sine-1",
    "label": "SINE 1",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "sine-2",
    "label": "SINE 2",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "sine-3",
    "label": "SINE 3",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "sine-4",
    "label": "SINE 4",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "asgn-1",
    "label": "ASGN 1",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "asgn-2",
    "label": "ASGN 2",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "asgn-3",
    "label": "ASGN 3",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "asgn-4",
    "label": "ASGN 4",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "rect-1",
    "label": "RECT 1",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "rect-2",
    "label": "RECT 2",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "rect-3",
    "label": "RECT 3",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "rect-4",
    "label": "RECT 4",
    "dir": "out",
    "sig": "cv"
   }
  ]
 },
 {
  "id": "mimeophon",
  "name": "Mimeophon",
  "mfr": "Make Noise",
  "hp": 16,
  "tags": [
   "effect",
   "delay",
   "reverb"
  ],
  "links": {
   "mfr": "https://www.makenoisemusic.com/",
   "product": "https://www.makenoisemusic.com/modules/mimeophon/",
   "manual": "https://www.makenoisemusic.com/wp-content/uploads/2024/03/mimeophon-manual.pdf",
   "mg": "https://modulargrid.net/e/make-noise-mimeophon",
   "firmware": "https://www.makenoisemusic.com/firmware/"
  },
  "jacks": [
   {
    "id": "in-l",
    "label": "L[M]",
    "dir": "in",
    "sig": "audio",
    "normalled": "The [M] marking is the panel's own indication that this input is the mono one. Patching L alone feeds both sides."
   },
   {
    "id": "in-r",
    "label": "R",
    "dir": "in",
    "sig": "audio",
    "normalled": "Normalled to L. Patching only L feeds both channels."
   },
   {
    "id": "out-l",
    "label": "L",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "out-r",
    "label": "R",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "mix-cv",
    "label": "MIX CV",
    "dir": "in",
    "sig": "cv",
    "normalled": "Normalled to 8V. With nothing patched the knob sets the mix; patch it and the knob becomes an attenuator for the incoming voltage."
   },
   {
    "id": "repeats-cv",
    "label": "REPEATS CV",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "halo-cv",
    "label": "HALO CV",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "zone-cv",
    "label": "ZONE CV",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "color-cv",
    "label": "COLOR CV",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "rate-cv",
    "label": "RATE CV",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "urate",
    "label": "µRATE",
    "dir": "in",
    "sig": "cv",
    "normalled": "Tracks 1V/oct in Zone 0 only. Linear in the other seven zones."
   },
   {
    "id": "hold",
    "label": "HOLD",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "flip",
    "label": "FLIP",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "tempo",
    "label": "TEMPO",
    "dir": "in",
    "sig": "clock",
    "normalled": "With no clock for several seconds it holds the tempo until the Rate control moves, rather than de-syncing immediately."
   },
   {
    "id": "rate-out",
    "label": "RATE",
    "dir": "out",
    "sig": "clock"
   }
  ]
 },
 {
  "id": "wogglebug",
  "name": "Wogglebug",
  "mfr": "Make Noise",
  "hp": 10,
  "tags": [
   "random",
   "modulation"
  ],
  "links": {
   "mfr": "https://www.makenoisemusic.com/",
   "product": "https://www.makenoisemusic.com/modules/wogglebug/",
   "manual": "https://www.makenoisemusic.com/wp-content/uploads/2024/03/wogglebugmanual.pdf",
   "manualNote": "Richter Wogglebug.",
   "mg": "https://modulargrid.net/e/grayscale-make-noise-wogglebug-grayscale-panel"
  },
  "jacks": [
   {
    "id": "smooth-audio",
    "label": "SMOOTH (AUDIO)",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "ringmod",
    "label": "RING MOD",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "woggle-audio",
    "label": "WOGGLE (AUDIO)",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "ego",
    "label": "EGO",
    "dir": "in",
    "sig": "multi",
    "normalled": "With nothing patched the Ego/Id control sets the spread of internal random values. Patch it and that control balances your signal against the internal source."
   },
   {
    "id": "influence",
    "label": "INFLUENCE",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "stepped",
    "label": "STEPPED",
    "dir": "out",
    "sig": "cv",
    "normalled": "At audio-rate clock with audio in the Ego input this output becomes a bit-crusher rather than stepped random CV."
   },
   {
    "id": "smooth",
    "label": "SMOOTH",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "woggle",
    "label": "WOGGLE",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "speed",
    "label": "SPEED",
    "dir": "in",
    "sig": "cv",
    "normalled": "Internally normalled to +8V, which is why the attenuator beside it works as a second clock-rate control when nothing is patched. Patching breaks that."
   },
   {
    "id": "external",
    "label": "EXTERNAL",
    "dir": "in",
    "sig": "clock",
    "normalled": "Displaces the internal clock for the sample and hold only. INT CLK keeps running at its own rate, so it stays usable as a master clock."
   },
   {
    "id": "burst",
    "label": "BURST",
    "dir": "out",
    "sig": "gate"
   },
   {
    "id": "int-clk",
    "label": "INT CLK",
    "dir": "out",
    "sig": "clock"
   }
  ]
 },
 {
  "id": "plaits",
  "name": "Plaits",
  "mfr": "Mutable Instruments",
  "hp": 12,
  "tags": [
   "oscillator",
   "voice",
   "drum"
  ],
  "note": "Draws 50mA +12V, 5mA -12V.",
  "links": {
   "manual": "https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/manual/",
   "manualNote": "Archived by the designer after Mutable closed in 2022.",
   "source": "https://pichenettes.github.io/mutable-instruments-documentation/modules/plaits/open_source/"
  },
  "jacks": [
   {
    "id": "model",
    "label": "MODEL",
    "dir": "in",
    "sig": "cv",
    "normalled": "Sampled and held by TRIG when TRIG is patched, so the model only changes on a trigger."
   },
   {
    "id": "timbre",
    "label": "TIMBRE",
    "dir": "in",
    "sig": "cv",
    "normalled": "With TRIG patched and this input empty, the attenuverter sets how much of the internal decay envelope reaches the parameter. Patching it takes that over."
   },
   {
    "id": "fm",
    "label": "FM",
    "dir": "in",
    "sig": "cv",
    "normalled": "With TRIG patched and this input empty, the attenuverter sets how much of the internal decay envelope reaches the parameter. Patching it takes that over."
   },
   {
    "id": "morph",
    "label": "MORPH",
    "dir": "in",
    "sig": "cv",
    "normalled": "With TRIG patched and this input empty, the attenuverter sets how much of the internal decay envelope reaches the parameter. Patching it takes that over."
   },
   {
    "id": "harmo",
    "label": "HARMO",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "trig",
    "label": "TRIG",
    "dir": "in",
    "sig": "gate",
    "normalled": "Patched, MODEL becomes a sample and hold: the model only changes when a trigger arrives. Unpatched, the physical and drum models run continuously rather than being struck."
   },
   {
    "id": "level",
    "label": "LEVEL",
    "dir": "in",
    "sig": "cv",
    "normalled": "Patched, TRIG stops striking the internal low pass gate and this becomes an accent control instead."
   },
   {
    "id": "v-oct",
    "label": "V/OCT",
    "dir": "in",
    "sig": "pitch"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "aux",
    "label": "AUX",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "rings",
  "name": "Rings",
  "mfr": "Mutable Instruments",
  "hp": 14,
  "tags": [
   "oscillator",
   "voice",
   "effect"
  ],
  "note": "Draws 120mA +12V, 5mA -12V.",
  "links": {
   "manual": "https://pichenettes.github.io/mutable-instruments-documentation/modules/rings/manual/",
   "source": "https://pichenettes.github.io/mutable-instruments-documentation/modules/rings/open_source/"
  },
  "jacks": [
   {
    "id": "strum",
    "label": "STRUM",
    "dir": "in",
    "sig": "gate",
    "normalled": "Normalled to a step detector on V/OCT, and to a transient detector on IN when V/OCT is empty. Patching it takes over from both."
   },
   {
    "id": "v-oct",
    "label": "V/OCT",
    "dir": "in",
    "sig": "pitch"
   },
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "audio",
    "normalled": "Normalled to an internal exciter, a filtered pulse or a noise burst depending on the resonator. Patching it replaces that with your own signal."
   },
   {
    "id": "freq",
    "label": "FREQUENCY",
    "dir": "in",
    "sig": "cv",
    "normalled": "Normalled to a 1/12V reference, so with nothing patched the attenuverter beside it works as a fine tune."
   },
   {
    "id": "structure",
    "label": "STRUCTURE",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "brightness",
    "label": "BRIGHTNESS",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "damping",
    "label": "DAMPING",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "position",
    "label": "POSITION",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "odd",
    "label": "ODD",
    "dir": "out",
    "sig": "audio",
    "normalled": "Both voices are mixed here until EVEN is patched too."
   },
   {
    "id": "even",
    "label": "EVEN",
    "dir": "out",
    "sig": "audio",
    "normalled": "With only one output patched, both signals are mixed into it."
   }
  ]
 },
 {
  "id": "clouds",
  "name": "Clouds",
  "mfr": "Mutable Instruments",
  "hp": 18,
  "tags": [
   "effect",
   "granular",
   "sampler"
  ],
  "note": "Discontinued 2017, superseded by Beads. Widely cloned. Draws 120mA +12V, 10mA -12V.",
  "links": {
   "manual": "https://pichenettes.github.io/mutable-instruments-documentation/modules/clouds/manual/",
   "source": "https://pichenettes.github.io/mutable-instruments-documentation/modules/clouds/open_source/"
  },
  "jacks": [
   {
    "id": "freeze",
    "label": "FREEZE",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "trig",
    "label": "TRIG",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "position",
    "label": "POSITION",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "size",
    "label": "SIZE",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "v-oct",
    "label": "V/OCT",
    "dir": "in",
    "sig": "pitch"
   },
   {
    "id": "density",
    "label": "DENSITY",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "texture",
    "label": "TEXTURE",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "blend",
    "label": "BLEND",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "in-l",
    "label": "IN L",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "in-r",
    "label": "IN R",
    "dir": "in",
    "sig": "audio",
    "normalled": "Normals to IN L, so a mono source feeds both channels."
   },
   {
    "id": "out-l",
    "label": "OUT L",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "out-r",
    "label": "OUT R",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "maths",
  "name": "Maths",
  "mfr": "Make Noise",
  "hp": 20,
  "tags": [
   "envelope",
   "modulation",
   "utility"
  ],
  "note": "Draws 60mA +12V, 50mA -12V.",
  "links": {
   "product": "https://www.makenoisemusic.com/",
   "manual": "https://www.makenoisemusic.com/wp-content/uploads/2024/03/MATHSmanual2013.pdf",
   "manualNote": "2013 edition."
  },
  "jacks": [
   {
    "id": "ch1-signal",
    "label": "CH1 SIGNAL",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "ch1-trig",
    "label": "CH1 TRIG",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "ch1-rise",
    "label": "CH1 RISE",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "ch1-both",
    "label": "CH1 BOTH",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "ch1-fall",
    "label": "CH1 FALL",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "ch1-cycle",
    "label": "CH1 CYCLE",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "ch1-unity",
    "label": "CH1 UNITY",
    "dir": "out",
    "sig": "multi",
    "normalled": "Tapped straight off the channel core and not on the SUM or OR buses, so patching it removes nothing."
   },
   {
    "id": "ch1-eor",
    "label": "EOR",
    "dir": "out",
    "sig": "gate"
   },
   {
    "id": "ch4-signal",
    "label": "CH4 SIGNAL",
    "dir": "in",
    "sig": "multi"
   },
   {
    "id": "ch4-trig",
    "label": "CH4 TRIG",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "ch4-rise",
    "label": "CH4 RISE",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "ch4-both",
    "label": "CH4 BOTH",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "ch4-fall",
    "label": "CH4 FALL",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "ch4-cycle",
    "label": "CH4 CYCLE",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "ch4-unity",
    "label": "CH4 UNITY",
    "dir": "out",
    "sig": "multi",
    "normalled": "Tapped straight off the channel core and not on the SUM or OR buses, so patching it removes nothing."
   },
   {
    "id": "ch4-eoc",
    "label": "EOC",
    "dir": "out",
    "sig": "gate"
   },
   {
    "id": "ch2-signal",
    "label": "CH2 SIGNAL",
    "dir": "in",
    "sig": "multi",
    "normalled": "Normalled to a +10V reference, so with nothing patched the channel is a voltage offset generator. Patching it replaces the reference."
   },
   {
    "id": "ch3-signal",
    "label": "CH3 SIGNAL",
    "dir": "in",
    "sig": "multi",
    "normalled": "Normalled to a +5V reference, so with nothing patched the channel is a voltage offset generator. Patching it replaces the reference."
   },
   {
    "id": "out-1",
    "label": "1",
    "dir": "out",
    "sig": "multi",
    "normalled": "Normalled to the SUM, INV and OR buses. Patching it removes that channel from all three."
   },
   {
    "id": "out-2",
    "label": "2",
    "dir": "out",
    "sig": "multi",
    "normalled": "Normalled to the SUM, INV and OR buses. Patching it removes that channel from all three."
   },
   {
    "id": "out-3",
    "label": "3",
    "dir": "out",
    "sig": "multi",
    "normalled": "Normalled to the SUM, INV and OR buses. Patching it removes that channel from all three."
   },
   {
    "id": "out-4",
    "label": "4",
    "dir": "out",
    "sig": "multi",
    "normalled": "Normalled to the SUM, INV and OR buses. Patching it removes that channel from all three."
   },
   {
    "id": "or",
    "label": "OR",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "sum",
    "label": "SUM",
    "dir": "out",
    "sig": "multi"
   },
   {
    "id": "inv",
    "label": "INV",
    "dir": "out",
    "sig": "multi"
   }
  ]
 },
 {
  "id": "bard-quartet",
  "name": "Bard Quartet",
  "mfr": "Shakmat Modular",
  "hp": 10,
  "tags": [
   "quantizer",
   "sequencer",
   "utility"
  ],
  "note": "Draws 60mA +12V, 10mA -12V. Outputs can be set per channel to V/Oct, Hz/V or 1.2V/Oct. The 2HP Bard Quartet Expand is not covered here.",
  "links": {
   "mfr": "https://shakmat.com/",
   "product": "https://shakmat.com/products/bq.html",
   "manual": "https://shakmat.com/doc/bq/BQ-User_Manual.pdf",
   "manualNote": "13 pages. Bracketed numbers in the text refer to the panel diagram.",
   "mg": "https://modulargrid.net/e/shakmat-bard-quartet"
  },
  "jacks": [
   {
    "id": "cv-in-1",
    "label": "CV IN 1",
    "dir": "in",
    "sig": "pitch"
   },
   {
    "id": "cv-in-2",
    "label": "CV IN 2",
    "dir": "in",
    "sig": "pitch",
    "normalled": "Channels 2, 3 and 4 can be set to follow the previous channel when they see 0V at their own input: off, normalisation, or shift register on a gate. Set in the Options menu, so it depends on configuration rather than the jack."
   },
   {
    "id": "cv-in-3",
    "label": "CV IN 3",
    "dir": "in",
    "sig": "pitch",
    "normalled": "Channels 2, 3 and 4 can be set to follow the previous channel when they see 0V at their own input: off, normalisation, or shift register on a gate. Set in the Options menu, so it depends on configuration rather than the jack."
   },
   {
    "id": "cv-in-4",
    "label": "CV IN 4",
    "dir": "in",
    "sig": "pitch",
    "normalled": "Channels 2, 3 and 4 can be set to follow the previous channel when they see 0V at their own input: off, normalisation, or shift register on a gate. Set in the Options menu, so it depends on configuration rather than the jack."
   },
   {
    "id": "harmony",
    "label": "HARMONY",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "transpose",
    "label": "TRANSPOSE",
    "dir": "in",
    "sig": "cv",
    "normalled": "Assigned per channel in the Edit menu, and can transpose before quantising, after quantising, or by octaves."
   },
   {
    "id": "gate",
    "label": "GATE",
    "dir": "in",
    "sig": "gate",
    "normalled": "Track and hold by default, sample and hold if switched. On an arpeggiated channel it acts as a reset instead."
   },
   {
    "id": "cv-out-1",
    "label": "CV OUT 1",
    "dir": "out",
    "sig": "pitch"
   },
   {
    "id": "cv-out-2",
    "label": "CV OUT 2",
    "dir": "out",
    "sig": "pitch"
   },
   {
    "id": "cv-out-3",
    "label": "CV OUT 3",
    "dir": "out",
    "sig": "pitch"
   },
   {
    "id": "cv-out-4",
    "label": "CV OUT 4",
    "dir": "out",
    "sig": "pitch"
   },
   {
    "id": "trig-out",
    "label": "TRIG OUT",
    "dir": "out",
    "sig": "gate",
    "normalled": "Fires on a note change in whichever channel it is assigned to in the Edit menu."
   }
  ]
 },
 {
  "id": "a-103",
  "name": "A-103",
  "mfr": "Doepfer",
  "hp": 8,
  "tags": [
   "filter"
  ],
  "links": {
   "mfr": "https://doepfer.de/",
   "product": "https://doepfer.de/a103.htm",
   "manual": "https://doepfer.de/a100_man/A103_man.pdf",
   "manualNote": "6 pages, English.",
   "mg": "https://modulargrid.net/e/doepfer-a-103"
  },
  "jacks": [
   {
    "id": "cv-1",
    "label": "CV 1",
    "dir": "in",
    "sig": "pitch"
   },
   {
    "id": "cv-2",
    "label": "CV 2",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "cv-3",
    "label": "CV 3",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "audio-in",
    "label": "Audio In",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "audio-out",
    "label": "Audio Out",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "steppy-1u",
  "name": "Steppy 1U",
  "mfr": "Intellijel",
  "hp": 28,
  "tags": [
   "sequencer",
   "1u"
  ],
  "links": {
   "mfr": "https://intellijel.com/",
   "product": "https://intellijel.com/shop/eurorack/1u/steppy-1u/",
   "manual": "https://intellijel.com/downloads/manuals/steppy-1u_manual_1.2_2020.10.26.pdf",
   "manualNote": "v1.2. 1U and 3U share firmware and manual.",
   "mg": "https://modulargrid.net/e/intellijel-steppy-1u",
   "firmware": "https://intellijel.github.io/firmware/"
  },
  "jacks": [
   {
    "id": "clk",
    "label": "CLK",
    "dir": "in",
    "sig": "clock"
   },
   {
    "id": "rst",
    "label": "RST",
    "dir": "in",
    "sig": "gate",
    "normalled": "Holding SAVE/RST at power-up toggles this input between RESET and RUN behaviour, saved across power cycles."
   },
   {
    "id": "out-a",
    "label": "OUT A",
    "dir": "out",
    "sig": "gate"
   },
   {
    "id": "out-b",
    "label": "OUT B",
    "dir": "out",
    "sig": "gate"
   },
   {
    "id": "out-c",
    "label": "OUT C",
    "dir": "out",
    "sig": "gate"
   },
   {
    "id": "out-d",
    "label": "OUT D",
    "dir": "out",
    "sig": "gate"
   }
  ]
 },
 {
  "id": "ensemble-oscillator",
  "name": "Ensemble Oscillator",
  "mfr": "4ms Company",
  "hp": 16,
  "tags": [
   "oscillator"
  ],
  "links": {
   "mfr": "https://4mscompany.com/",
   "product": "https://4mscompany.com/p.php?p=984",
   "manual": "https://4mscompany.com/media/ENOSC/manual/Ensemble-Osc-manual-v1.1f.pdf",
   "manualNote": "v1.1f. Covers both panel colours.",
   "mg": "https://modulargrid.net/e/4ms-company-ensemble-oscillator-black-panel",
   "firmware": "https://4mscompany.com/enosc.php"
  },
  "jacks": [
   {
    "id": "pitch",
    "label": "Pitch 1V/oct",
    "dir": "in",
    "sig": "pitch"
   },
   {
    "id": "root",
    "label": "Root 1V/oct",
    "dir": "in",
    "sig": "pitch"
   },
   {
    "id": "scale",
    "label": "Scale",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "spread",
    "label": "Spread",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "cross-fm",
    "label": "Cross FM",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "learn",
    "label": "Learn",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "balance",
    "label": "Balance",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "twist",
    "label": "Twist",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "warp",
    "label": "Warp",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "freeze",
    "label": "Freeze",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "out-a",
    "label": "Out A",
    "dir": "out",
    "sig": "audio",
    "normalled": "Carries both oscillator groups summed until Out B is patched too, at which point they pan across the two."
   },
   {
    "id": "out-b",
    "label": "Out B",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "buchla-281t",
  "name": "281t Quad Function Generator",
  "mfr": "Buchla & Tiptop Audio",
  "hp": 28,
  "tags": [
   "envelope",
   "modulation",
   "lfo"
  ],
  "note": "Draws 160mA +12V, 55mA -12V. Four generators in two pairs, each switchable between Transient, Sustained and Cyclic. Attack and decay run from 1ms to 10s, so a generator in Cyclic mode is an LFO.",
  "links": {
   "mfr": "https://tiptopaudio.com/",
   "product": "https://tiptopaudio.com/buchla/",
   "manual": "https://tiptopaudio.com/manuals/Buchla_&_Tiptop_Audio_281t.pdf",
   "manualNote": "Two pages.",
   "mg": "https://modulargrid.net/e/tiptop-audio-buchla-281t"
  },
  "jacks": [
   {
    "id": "trig-a",
    "label": "TRIG A",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "cycle-a",
    "label": "CYCLE A",
    "dir": "in",
    "sig": "gate",
    "normalled": "Cycles the generator while a gate is held here, whatever the mode switch says. Releasing it returns the generator to the switch setting."
   },
   {
    "id": "attack-a",
    "label": "ATTACK A",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "decay-a",
    "label": "DECAY A",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out-a",
    "label": "OUT A",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "pulse-a",
    "label": "PULSE A",
    "dir": "out",
    "sig": "gate",
    "normalled": "Fires at the end of the decay, in every mode. In Cyclic that is also where the next cycle starts."
   },
   {
    "id": "trig-b",
    "label": "TRIG B",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "cycle-b",
    "label": "CYCLE B",
    "dir": "in",
    "sig": "gate",
    "normalled": "Cycles the generator while a gate is held here, whatever the mode switch says. Releasing it returns the generator to the switch setting."
   },
   {
    "id": "attack-b",
    "label": "ATTACK B",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "decay-b",
    "label": "DECAY B",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out-b",
    "label": "OUT B",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "pulse-b",
    "label": "PULSE B",
    "dir": "out",
    "sig": "gate",
    "normalled": "Fires at the end of the decay, in every mode. In Cyclic that is also where the next cycle starts."
   },
   {
    "id": "trig-c",
    "label": "TRIG C",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "cycle-c",
    "label": "CYCLE C",
    "dir": "in",
    "sig": "gate",
    "normalled": "Cycles the generator while a gate is held here, whatever the mode switch says. Releasing it returns the generator to the switch setting."
   },
   {
    "id": "attack-c",
    "label": "ATTACK C",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "decay-c",
    "label": "DECAY C",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out-c",
    "label": "OUT C",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "pulse-c",
    "label": "PULSE C",
    "dir": "out",
    "sig": "gate",
    "normalled": "Fires at the end of the decay, in every mode. In Cyclic that is also where the next cycle starts."
   },
   {
    "id": "trig-d",
    "label": "TRIG D",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "cycle-d",
    "label": "CYCLE D",
    "dir": "in",
    "sig": "gate",
    "normalled": "Cycles the generator while a gate is held here, whatever the mode switch says. Releasing it returns the generator to the switch setting."
   },
   {
    "id": "attack-d",
    "label": "ATTACK D",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "decay-d",
    "label": "DECAY D",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out-d",
    "label": "OUT D",
    "dir": "out",
    "sig": "cv"
   },
   {
    "id": "pulse-d",
    "label": "PULSE D",
    "dir": "out",
    "sig": "gate",
    "normalled": "Fires at the end of the decay, in every mode. In Cyclic that is also where the next cycle starts."
   },
   {
    "id": "quad-ab",
    "label": "QUAD A/B",
    "dir": "out",
    "sig": "cv",
    "normalled": "Carries the two generators of the pair ORed together, so the higher of the two voltages at any instant. Only meaningful with the pair in quadrature, where their functions run ninety degrees apart."
   },
   {
    "id": "quad-cd",
    "label": "QUAD C/D",
    "dir": "out",
    "sig": "cv",
    "normalled": "Carries the two generators of the pair ORed together, so the higher of the two voltages at any instant. Only meaningful with the pair in quadrature, where their functions run ninety degrees apart."
   }
  ]
 },
 {
  "id": "forbidden-planet",
  "name": "Forbidden Planet",
  "mfr": "Tiptop Audio",
  "hp": 8,
  "tags": [
   "filter"
  ],
  "links": {
   "mfr": "https://tiptopaudio.com/",
   "product": "https://tiptopaudio.com/forbidden-planet-analog-filter/",
   "manual": "https://www.tiptopaudio.com/manuals/Tiptop_Audio_forbiddenplanet.pdf",
   "manualNote": "3 pages.",
   "mg": "https://modulargrid.net/e/tiptop-audio-forbidden-planet"
  },
  "jacks": [
   {
    "id": "hp-in",
    "label": "HP IN",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "bp-in",
    "label": "BP IN",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "lp-in",
    "label": "LP IN",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "freq-cv",
    "label": "FREQ CV (full scale)",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "freq-cv-atten",
    "label": "FREQ CV (attenuated)",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "out",
    "label": "OUT",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "basimilus-iteritas-alter",
  "name": "Basimilus Iteritas Alter",
  "mfr": "Noise Engineering",
  "hp": 10,
  "tags": [
   "drum",
   "oscillator"
  ],
  "links": {
   "mfr": "https://noiseengineering.us/",
   "product": "https://noiseengineering.us/products/basimilus-iteritas-alter/",
   "manual": "https://manuals.noiseengineering.us/bia/",
   "manualNote": "The product page's English link now serves the newer ALIA manual. Alter text: manuals.noiseengineering.us/bia_german/",
   "mg": "https://modulargrid.net/e/noise-engineering-basimilus-iteritas-alter-"
  },
  "jacks": [
   {
    "id": "pitch",
    "label": "Pitch",
    "dir": "in",
    "sig": "pitch"
   },
   {
    "id": "attack",
    "label": "Attack",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "slm",
    "label": "S/L/M",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "spread",
    "label": "Spread",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "morph",
    "label": "Morph",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "decay",
    "label": "Decay",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "bat",
    "label": "B/A/T",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "harm",
    "label": "Harm",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "fold",
    "label": "Fold",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "trig",
    "label": "Trig",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "out",
    "label": "Out",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "fx-aid-xl",
  "name": "FX AID XL",
  "mfr": "Happy Nerding",
  "hp": 6,
  "tags": [
   "effect",
   "reverb",
   "delay"
  ],
  "links": {
   "mfr": "https://happynerding.com/",
   "product": "https://happynerding.com/fx-aid/",
   "manual": "https://happynerding.com/wp-content/uploads/2019/08/Happy_Nerding_FX_Aid.pdf",
   "manualNote": "Image-only PDF, no extractable text. Effect list: happynerding.com/wp-content/uploads/2019/08/FX-List.pdf",
   "mg": "https://modulargrid.net/e/happy-nerding-fx-aid-xl-black",
   "firmware": "https://happynerding.com/category/fx-aid/"
  },
  "jacks": [
   {
    "id": "cv-1",
    "label": "1",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "cv-2",
    "label": "2",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "cv-3",
    "label": "3",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "srr",
    "label": "SRR",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "dry-wet",
    "label": "D/W",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "in-l",
    "label": "L (in)",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "in-r",
    "label": "R (in)",
    "dir": "in",
    "sig": "audio"
   },
   {
    "id": "out-l",
    "label": "L (out)",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "out-r",
    "label": "R (out)",
    "dir": "out",
    "sig": "audio"
   }
  ]
 },
 {
  "id": "arbhar",
  "name": "arbhar",
  "mfr": "Instruo",
  "hp": 18,
  "tags": [
   "granular",
   "sampler",
   "effect"
  ],
  "links": {
   "mfr": "https://www.instruomodular.com/",
   "product": "https://www.instruomodular.com/product/arbhar/",
   "manual": "https://www.instruomodular.com/wp-content/uploads/2024/01/Arbhar-Manual-Firmware-2.0-web.pdf",
   "manualNote": "Firmware 2.0, web layout. A Firmware 2.1 quickstart also exists.",
   "mg": "https://modulargrid.net/e/instruo-arbhar",
   "firmware": "https://www.instruomodular.com/firmware/"
  },
  "jacks": [
   {
    "id": "in",
    "label": "IN",
    "dir": "in",
    "sig": "audio",
    "normalled": "With nothing patched here or at ONSET, the built-in condenser microphone reaches the input stage through ONSET. Patching either one breaks that chain."
   },
   {
    "id": "onset",
    "label": "ONSET",
    "dir": "in",
    "sig": "audio",
    "normalled": "Normalled to IN, and the condenser microphone normals through it. Patching it breaks the microphone's route to the input stage. In Stereo Input Mode this becomes the second input rather than a duplicate."
   },
   {
    "id": "capture",
    "label": "CAPTURE",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "strike",
    "label": "STRIKE",
    "dir": "in",
    "sig": "gate"
   },
   {
    "id": "intensity",
    "label": "INTENSITY",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "length",
    "label": "LENGTH",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "scan",
    "label": "SCAN",
    "dir": "in",
    "sig": "cv"
   },
   {
    "id": "voct",
    "label": "1V/OCT",
    "dir": "in",
    "sig": "pitch"
   },
   {
    "id": "pulse-out",
    "label": "⌐ OUT",
    "dir": "out",
    "sig": "gate"
   },
   {
    "id": "out-1",
    "label": "OUT 1",
    "dir": "out",
    "sig": "audio"
   },
   {
    "id": "out-2",
    "label": "OUT 2",
    "dir": "out",
    "sig": "audio",
    "normalled": "Normalled to OUT 1, which sums both. Patching it takes the module stereo, with independent effect processing per output."
   }
  ]
 }
]
});
