# k-board-editor
Alternative editor for KMI K-Board settings

## Setting up the editor

The editor is based on [Open Stage Control](http://osc.ammd.net/).

An Open Stage Control session file ([k-board.json](src/open-stage-control/k-board.json)) together with a custom-module ([k-board-module.js](src/open-stage-control/k-board-module.js)) make up the editor for your KMI K-Board.

The session connects to the output port of virtual MIDI device `osc`. You have to create this device using Open Stage Control's [MIDI setup](http://osc.ammd.net/extras/midi/#setup) options:

```
-midi osc:0,0
```

where `osc:0,0` is your definition of `device_name:input,output` given in the MIDI setup documentation.
