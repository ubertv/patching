// Generic modules
// Placeholders for sketching a patch without committing to specific gear. Use them when the exact module doesn't matter, or when you want a diagram someone else can follow without owning your rack.
//
// Licensed CC BY 4.0, not MIT like the rest of the repo. This is a database,
// not software. See lib/LICENSE.
// Copyright (c) 2026 Gavin Sade and contributors.

window.MODULE_LIBRARIES = window.MODULE_LIBRARIES || [];
window.MODULE_LIBRARIES.push({
 id: "generics",
 name: "Generic modules",
 modules: [
 {
  "id": "vco",
  "name": "VCO",
  "kind": "voice",
  "generic": true,
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
  ],
  "tags": [
   "oscillator"
  ]
 },
 {
  "id": "vcf",
  "name": "VCF",
  "kind": "voice",
  "generic": true,
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
  ],
  "tags": [
   "filter"
  ]
 },
 {
  "id": "vca",
  "name": "VCA",
  "kind": "voice",
  "generic": true,
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
  ],
  "tags": [
   "vca"
  ]
 },
 {
  "id": "lpg",
  "name": "Low pass gate",
  "kind": "voice",
  "generic": true,
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
  ],
  "tags": [
   "filter",
   "vca"
  ]
 },
 {
  "id": "env",
  "name": "Envelope",
  "kind": "voice",
  "generic": true,
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
  ],
  "tags": [
   "envelope",
   "modulation"
  ]
 },
 {
  "id": "lfo",
  "name": "LFO",
  "kind": "voice",
  "generic": true,
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
  ],
  "tags": [
   "lfo",
   "modulation"
  ]
 },
 {
  "id": "noise",
  "name": "Noise",
  "kind": "voice",
  "generic": true,
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
  ],
  "tags": [
   "noise"
  ]
 },
 {
  "id": "folder",
  "name": "Wavefolder",
  "kind": "voice",
  "generic": true,
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
  ],
  "tags": [
   "wavefolder"
  ]
 },
 {
  "id": "ringmod",
  "name": "Ring mod",
  "kind": "voice",
  "generic": true,
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
  ],
  "tags": [
   "effect",
   "wavefolder"
  ]
 },
 {
  "id": "drum",
  "name": "Drum voice",
  "kind": "voice",
  "generic": true,
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
  ],
  "tags": [
   "drum",
   "voice"
  ]
 },
 {
  "id": "seq",
  "name": "Sequencer",
  "kind": "timing",
  "generic": true,
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
  ],
  "tags": [
   "sequencer"
  ]
 },
 {
  "id": "clock",
  "name": "Clock",
  "kind": "timing",
  "generic": true,
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
  ],
  "tags": [
   "clock"
  ]
 },
 {
  "id": "divider",
  "name": "Clock divider",
  "kind": "timing",
  "generic": true,
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
  ],
  "tags": [
   "clock"
  ]
 },
 {
  "id": "quantizer",
  "name": "Quantizer",
  "kind": "timing",
  "generic": true,
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
  ],
  "tags": [
   "quantizer"
  ]
 },
 {
  "id": "sh",
  "name": "Sample & hold",
  "kind": "timing",
  "generic": true,
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
  ],
  "tags": [
   "random",
   "modulation"
  ]
 },
 {
  "id": "random",
  "name": "Random",
  "kind": "timing",
  "generic": true,
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
  ],
  "tags": [
   "random",
   "modulation"
  ]
 },
 {
  "id": "logic",
  "name": "Logic",
  "kind": "timing",
  "generic": true,
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
  ],
  "tags": [
   "utility",
   "clock"
  ]
 },
 {
  "id": "comparator",
  "name": "Comparator",
  "kind": "timing",
  "generic": true,
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
  ],
  "tags": [
   "utility",
   "modulation"
  ]
 },
 {
  "id": "mult",
  "name": "Mult",
  "kind": "utility",
  "generic": true,
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
  ],
  "tags": [
   "utility",
   "passive"
  ]
 },
 {
  "id": "mixer",
  "name": "Mixer",
  "kind": "utility",
  "generic": true,
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
  ],
  "tags": [
   "mixer"
  ]
 },
 {
  "id": "matrix",
  "name": "Matrix mixer",
  "kind": "utility",
  "generic": true,
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
  ],
  "tags": [
   "mixer",
   "utility"
  ]
 },
 {
  "id": "atten",
  "name": "Attenuverter",
  "kind": "utility",
  "generic": true,
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
  ],
  "tags": [
   "utility"
  ]
 },
 {
  "id": "offset",
  "name": "Offset",
  "kind": "utility",
  "generic": true,
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
  ],
  "tags": [
   "utility"
  ]
 },
 {
  "id": "slew",
  "name": "Slew",
  "kind": "utility",
  "generic": true,
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
  ],
  "tags": [
   "utility",
   "modulation"
  ]
 },
 {
  "id": "switch",
  "name": "Switch",
  "kind": "utility",
  "generic": true,
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
  ],
  "tags": [
   "utility"
  ]
 },
 {
  "id": "delay",
  "name": "Delay",
  "kind": "fx",
  "generic": true,
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
  ],
  "tags": [
   "delay",
   "effect"
  ]
 },
 {
  "id": "reverb",
  "name": "Reverb",
  "kind": "fx",
  "generic": true,
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
  ],
  "tags": [
   "reverb",
   "effect"
  ]
 },
 {
  "id": "dist",
  "name": "Distortion",
  "kind": "fx",
  "generic": true,
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
  ],
  "tags": [
   "effect"
  ]
 },
 {
  "id": "comp",
  "name": "Compressor",
  "kind": "fx",
  "generic": true,
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
  ],
  "tags": [
   "effect"
  ]
 },
 {
  "id": "out",
  "name": "Output",
  "kind": "fx",
  "generic": true,
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
  ],
  "tags": [
   "output"
  ]
 },
 {
  "id": "phones",
  "name": "Headphones",
  "kind": "fx",
  "generic": true,
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
  ],
  "tags": [
   "output"
  ]
 },
 {
  "id": "extin",
  "name": "External in",
  "kind": "fx",
  "generic": true,
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
  ],
  "tags": [
   "output"
  ]
 }
]
});
