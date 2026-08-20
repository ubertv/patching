// Example patches, offered from the File menu.
//
// Loaded as a plain script, like the module libraries, so there's nothing to
// build and nothing to serve. This file is the single source of truth for them.
//
// Loading an example always creates a NEW patch, so it can never overwrite
// something you were working on.

window.PATCH_EXAMPLES = [

{
  name: "Basic voice",
  about: "The simplest complete patch. Start here.",
  src:
`// Basic example.
// Oscillator output to a filter, then to a VCA.
// An envelope CV out to both the filter cutoff and the VCA.

seq:cv p> vco:voct
seq:gate g> env:gate
vco:saw -> vcf:in
env:out >> vcf:cutoff
vcf:out -> vca:in
env:out >> vca:cv
vca:out -> out:in-l
`
},

{
  name: "Subtractive voice",
  about: "The same idea, filled out with modulation and an effect.",
  src:
`// Subtractive voice, all generic modules.
// The same voice as the basic example, plus a clocked sequencer, PWM from an
// LFO, sample & hold on the resonance, and a delay before the output.

VOICE 1:
	- Sequencer (CV) p> VCO (V/OCT)
	- Sequencer (GATE) g> Envelope (GATE)
	- VCO (SAW) -> VCF (IN)
	- Envelope (OUT) >> VCF (CUTOFF)
	- VCF (OUT) -> VCA (IN)
	- Envelope (OUT) >> VCA (CV)
	- VCA (OUT) -> Mixer (IN 1)

MODULATION:
	- Clock (OUT) c> Sequencer (CLOCK)
	- LFO (TRI) >> VCO (PWM)
	- Sample & hold (OUT) >> VCF (RES)
	- Clock (DIV) c> Sample & hold (TRIG)

OUTPUT:
	- Mixer (OUT) -> Delay (IN)
	- Delay (OUT) -> Output (IN L)

	* VCO: tune = C2 | pw = 50% | sub = -6dB
	* VCF:
	| cutoff = 40%
	| resonance = 3 o'clock
	| mode = 24dB lowpass
	* Envelope: attack = 5ms | decay = 200ms | sustain = 60% | release = 400ms
	* Clock: bpm = 112
	* Delay: time = 3:8 | feedback = 45% | mix = 30%
`
},

{
  name: "Generative",
  about: "Plays itself. All six cable types and a feedback loop.",
  src:
`// Generative patch. No sequencer.
// Pitch is sampled noise through a quantizer. Rhythm is one clock divided
// four ways, with XOR logic firing the drum. The delay's wet output feeds
// back into the VCO FM input.

CLOCK:
	- Clock (OUT) c> Clock divider (CLOCK)
	- Clock divider (/4) c> Sample & hold (TRIG)
	- Clock divider (/8) g> Envelope (GATE)
	- Clock divider (/2) g> Logic (A)
	- Clock divider (/16) g> Logic (B)

VOICE:
	- Noise (WHITE) -> Sample & hold (IN)
	- Sample & hold (OUT) -> Quantizer (IN)
	- Quantizer (OUT) p> VCO (V/OCT)
	- VCO (SAW) -> VCF (IN)
	- Envelope (OUT) >> VCF (CUTOFF)
	- VCF (OUT) -> VCA (IN)
	- Envelope (OUT) >> VCA (CV)

PERCUSSION:
	- Clock divider (/4) c> Random (CLOCK)
	- Logic (XOR) g> Drum voice (TRIG)
	- Random (OUT) >> Drum voice (DECAY)

OUTPUT:
	- VCA (OUT) -> Mixer (IN 1)
	- Drum voice (OUT) -> Mixer (IN 2)
	- Mixer (OUT) -> Delay (IN)
	- Delay (OUT) -> Output (IN L)
	- Delay (WET) >> VCO (FM) "the delay tail bends the next note"

	* Clock: bpm = 96
	* Quantizer:
	| scale = D minor pentatonic
	| range = 2 oct
	* Envelope: attack = 2ms | decay = 180ms | sustain = 0% | release = 180ms
	* VCF: cutoff = 30% | resonance = 55% | mode = 24dB lowpass
	* Random: amount = 60%
	* Drum voice: pitch = low | accent = 70%
	* Delay: time = 3:8 | feedback = 62% | mix = 35%
`
},

{
  name: "Krell",
  about: "The self-retriggering generative patch. A module patched into itself.",
  src:
`// Krell patch.
// The envelope's end-of-cycle output retriggers its own trigger input, so it
// free-runs. Random CV sets each cycle's attack and decay, and each cycle
// samples a new pitch.
// Named for the 1956 Forbidden Planet score by Louis and Bebe Barron. The
// modular version is Todd Barton's, on the Buchla Music Easel.

SELF-CYCLING CORE:
	- Envelope (EOC) g> Envelope (TRIG) "the whole patch is this one cable"
	- Random (SMOOTH) >> Envelope (ATTACK)
	- Random (STEPPED) >> Envelope (DECAY)
	- Envelope (EOC) c> Random (CLOCK)

PITCH:
	- Envelope (EOC) g> Sample & hold (TRIG) "new note each cycle"
	- Noise (WHITE) -> Sample & hold (IN)
	- Sample & hold (OUT) -> Quantizer (IN)
	- Quantizer (OUT) p> VCO (V/OCT)

VOICE:
	- VCO (TRI) -> Low pass gate (IN)
	- Envelope (OUT) >> Low pass gate (CV)
	- Low pass gate (OUT) -> Reverb (IN)
	- Reverb (OUT L) -> Output (IN L)
	- Reverb (OUT R) -> Output (IN R)

	* Envelope:
	| attack = short, under CV
	| decay = medium, under CV
	| mode = self-cycling
	* Random: amount = 70% | rate = follows EOC
	* Quantizer: scale = C minor | range = 3 oct
	* VCO: tune = C2 | wave = triangle
	* Low pass gate: response = 60% | mode = both
	* Reverb: size = 85% | mix = 45%
`
},

{
  name: "Stereo drone",
  about: "Stereo pairs, a mult feeding three destinations, two of one module.",
  src:
`// Stereo drone.
// Two detuned oscillators summed, folded and filtered, into reverb. One LFO
// through a mult drives the cutoff, the fold and the detune. The compressor's
// envelope output raises the filter resonance with the level.

DRONE:
	- VCO 1 (SAW) -> Mixer (IN 1)
	- VCO 2 (SAW) -> Mixer (IN 2)
	- VCO 2 (SUB) -> Mixer (IN 3)
	- Mixer (OUT) -> Wavefolder (IN)
	- Wavefolder (OUT) -> VCF (IN)
	- VCF (OUT) -> Reverb (IN)

MODULATION:
	- LFO (TRI) -> Mult (IN)
	- Mult (OUT 1) >> VCF (CUTOFF)
	- Mult (OUT 2) >> Wavefolder (FOLD)
	- Mult (OUT 3) -> VCO 2 (V/OCT) "slow detune against VCO 1"
	- LFO (SQUARE) >> Reverb (SIZE)

OUTPUT:
	- Reverb (OUT L) -> Compressor (IN L)
	- Reverb (OUT R) -> Compressor (IN R)
	- Compressor (OUT L) -> Output (IN L)
	- Compressor (OUT R) -> Output (IN R)
	- Compressor (ENV) >> VCF (RES) "it opens up as it gets louder"

	* VCO 1: tune = C1 | wave = saw
	* VCO 2:
	| tune = C1 +7 cents
	| sub = -6dB
	* Wavefolder: fold = 35% | symmetry = centred
	* VCF: cutoff = 25% | resonance = 40%
	* LFO: rate = 40s per cycle | shape = triangle
	* Reverb: size = 80% | mix = 60%
	* Compressor: threshold = -18dB | ratio = 4:1 | attack = slow
`
},

{
  name: "Lead and drone",
  about: "Two voices, named roles, and one LFO shared between them.",
  src:
`// Two voices.
// LEAD and DRONE are sections. vco#lead and vco#drone are named instances,
// drawn as separate boxes. lfo#drift feeds both sections, so it sits outside
// both. The drone's two oscillator outputs get their own mixer, because two
// cables cannot share one input.

LEAD:
	seq:cv p> vco#lead:voct
	seq:gate g> env#lead:gate
	vco#lead:saw -> vcf#lead:in
	env#lead:out >> vcf#lead:cutoff
	vcf#lead:lp -> vca#lead:in
	env#lead:out >> vca#lead:cv
	vca#lead:out -> mixer:in-1
	lfo#drift:tri >> vco#lead:pwm "the same LFO, over in the other part"

DRONE:
	vco#drone:saw -> mixer#drone:in-1
	vco#drone:sub -> mixer#drone:in-2
	mixer#drone:out -> vcf#drone:in
	vcf#drone:lp -> vca#drone:in
	vca#drone:out -> mixer:in-2
	lfo#drift:tri >> vco#drone:voct "slow drift against the lead"

OUTPUT:
	mixer:out -> reverb:in
	reverb:out-l -> out:in-l
	reverb:out-r -> out:in-r

	* vco#lead: tune = C3 | wave = saw
	* vco#drone:
	| tune = C1
	| sub = -6dB
	* vcf#lead: cutoff = 55% | resonance = 30%
	* vcf#drone: cutoff = 20% | resonance = 10%
	* env#lead: attack = short | decay = 400ms
	* lfo#drift: rate = 30s per cycle | shape = triangle
	* mixer#drone: in 1 = saw, full | in 2 = sub, -6dB
	* reverb: size = 70% | mix = 45%
`
}

];
