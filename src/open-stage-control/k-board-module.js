(function(){
    // This code is run by node's vm module (https://nodejs.org/api/vm.html). vm uses
    // the V8 engine which supports ECMAScript, 5th edition
    // (https://github.com/v8/v8/wiki/Introduction).
    var preset = {
        "CV_Gate_Articulation": 0,
        "CV_Gate_S_Trig": 0,
        "CV_In_CV_1_CC_Number": 112,
        "CV_In_CV_1_Channel": 1,
        "CV_In_CV_1_Curve": "Linear",
        "CV_In_CV_1_Gain": 100,
        "CV_In_CV_1_MIDI_Output_Device": "USB 3 + Expander",
        "CV_In_CV_1_Max": 127,
        "CV_In_CV_1_Min": 0,
        "CV_In_CV_1_Offset": 0,
        "CV_In_CV_2_CC_Number": 113,
        "CV_In_CV_2_Channel": 1,
        "CV_In_CV_2_Curve": "Linear",
        "CV_In_CV_2_Gain": 100,
        "CV_In_CV_2_MIDI_Output_Device": "USB 3 + Expander",
        "CV_In_CV_2_Max": 127,
        "CV_In_CV_2_Min": 0,
        "CV_In_CV_2_Offset": 0,
        "CV_Out_CV_1_Channel": 1,
        "CV_Out_CV_1_Curve": "Linear",
        "CV_Out_CV_1_Gain": 100,
        "CV_Out_CV_1_MIDI_Input_Device": "All",
        "CV_Out_CV_1_MIDI_Input_Type": "Note CV Out",
        "CV_Out_CV_1_Max": 127,
        "CV_Out_CV_1_Min": 0,
        "CV_Out_CV_1_Offset": 0,
        "CV_Out_CV_2_Channel": 1,
        "CV_Out_CV_2_Curve": "Linear",
        "CV_Out_CV_2_Gain": 100,
        "CV_Out_CV_2_MIDI_Input_Device": "All",
        "CV_Out_CV_2_MIDI_Input_Type": "CC#001",
        "CV_Out_CV_2_Max": 127,
        "CV_Out_CV_2_Min": 0,
        "CV_Out_CV_2_Offset": 0,
        "CV_Out_CV_3_Channel": 1,
        "CV_Out_CV_3_Curve": "Linear",
        "CV_Out_CV_3_Gain": 100,
        "CV_Out_CV_3_MIDI_Input_Device": "All",
        "CV_Out_CV_3_MIDI_Input_Type": "Pitch Bend CV Out",
        "CV_Out_CV_3_Max": 127,
        "CV_Out_CV_3_Min": 0,
        "CV_Out_CV_3_Offset": 0,
        "CV_Out_Gate_Channel": 1,
        "CV_Out_Gate_MIDI_Input_Device": "All",
        "CV_Pitch_Scaling_Scheme": "1 Volt/Octave",
        "Controller_Bend_Pad_00_Channel": 0,
        "Controller_Bend_Pad_00_Controller_Layer_Enable_Disable": false,
        "Controller_Bend_Pad_00_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Bend_Pad_00_Mode_Pressure_Note": "Normal",
        "Controller_Bend_Pad_00_Note_Number": 127,
        "Controller_Bend_Pad_00_Note_Velocity": 127,
        "Controller_Bend_Pad_00_Pressure_Control_Number": 110,
        "Controller_Bend_Pad_00_Pressure_Return_Value": 0,
        "Controller_Bend_Pad_00_Tilt_Control_Number": 111,
        "Controller_Bend_Pad_00_Tilt_Return_Value": 63,
        "Controller_Global_MIDI_Output_Device": "USB 1 + Expander",
        "Controller_Key_0_Channel": 0,
        "Controller_Key_0_Controller_Layer_Enable_Disable": false,
        "Controller_Key_0_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_0_Mode_Pressure_Note": "Normal",
        "Controller_Key_0_Note_Number": 48,
        "Controller_Key_0_Note_Velocity": 127,
        "Controller_Key_0_Pressure_Control_Number": 60,
        "Controller_Key_0_Pressure_Return_Value": 0,
        "Controller_Key_0_Tilt_Control_Number": 61,
        "Controller_Key_0_Tilt_Return_Value": 63,
        "Controller_Key_0_Toggle_Control_Number": 24,
        "Controller_Key_0_Toggle_On_Off": false,
        "Controller_Key_0_Toggle_Return_Value": 0,
        "Controller_Key_0_Toggle_Value": 127,
        "Controller_Key_10_Channel": 0,
        "Controller_Key_10_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_10_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_10_Mode_Pressure_Note": "Normal",
        "Controller_Key_10_Note_Number": 58,
        "Controller_Key_10_Note_Velocity": 127,
        "Controller_Key_10_Pressure_Control_Number": 80,
        "Controller_Key_10_Pressure_Return_Value": 0,
        "Controller_Key_10_Tilt_Control_Number": 81,
        "Controller_Key_10_Tilt_Return_Value": 63,
        "Controller_Key_10_Toggle_Control_Number": 34,
        "Controller_Key_10_Toggle_On_Off": 0,
        "Controller_Key_10_Toggle_Return_Value": 0,
        "Controller_Key_10_Toggle_Value": 127,
        "Controller_Key_11_Channel": 0,
        "Controller_Key_11_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_11_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_11_Mode_Pressure_Note": "Normal",
        "Controller_Key_11_Note_Number": 59,
        "Controller_Key_11_Note_Velocity": 127,
        "Controller_Key_11_Pressure_Control_Number": 82,
        "Controller_Key_11_Pressure_Return_Value": 0,
        "Controller_Key_11_Tilt_Control_Number": 83,
        "Controller_Key_11_Tilt_Return_Value": 63,
        "Controller_Key_11_Toggle_Control_Number": 35,
        "Controller_Key_11_Toggle_On_Off": 0,
        "Controller_Key_11_Toggle_Return_Value": 0,
        "Controller_Key_11_Toggle_Value": 127,
        "Controller_Key_12_Channel": 0,
        "Controller_Key_12_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_12_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_12_Mode_Pressure_Note": "Normal",
        "Controller_Key_12_Note_Number": 60,
        "Controller_Key_12_Note_Velocity": 127,
        "Controller_Key_12_Pressure_Control_Number": 84,
        "Controller_Key_12_Pressure_Return_Value": 0,
        "Controller_Key_12_Tilt_Control_Number": 85,
        "Controller_Key_12_Tilt_Return_Value": 63,
        "Controller_Key_12_Toggle_Control_Number": 36,
        "Controller_Key_12_Toggle_On_Off": 0,
        "Controller_Key_12_Toggle_Return_Value": 0,
        "Controller_Key_12_Toggle_Value": 127,
        "Controller_Key_13_Channel": 0,
        "Controller_Key_13_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_13_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_13_Mode_Pressure_Note": "Normal",
        "Controller_Key_13_Note_Number": 61,
        "Controller_Key_13_Note_Velocity": 127,
        "Controller_Key_13_Pressure_Control_Number": 86,
        "Controller_Key_13_Pressure_Return_Value": 0,
        "Controller_Key_13_Tilt_Control_Number": 87,
        "Controller_Key_13_Tilt_Return_Value": 63,
        "Controller_Key_13_Toggle_Control_Number": 37,
        "Controller_Key_13_Toggle_On_Off": 0,
        "Controller_Key_13_Toggle_Return_Value": 0,
        "Controller_Key_13_Toggle_Value": 127,
        "Controller_Key_14_Channel": 0,
        "Controller_Key_14_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_14_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_14_Mode_Pressure_Note": "Normal",
        "Controller_Key_14_Note_Number": 62,
        "Controller_Key_14_Note_Velocity": 127,
        "Controller_Key_14_Pressure_Control_Number": 88,
        "Controller_Key_14_Pressure_Return_Value": 0,
        "Controller_Key_14_Tilt_Control_Number": 89,
        "Controller_Key_14_Tilt_Return_Value": 63,
        "Controller_Key_14_Toggle_Control_Number": 38,
        "Controller_Key_14_Toggle_On_Off": 0,
        "Controller_Key_14_Toggle_Return_Value": 0,
        "Controller_Key_14_Toggle_Value": 127,
        "Controller_Key_15_Channel": 0,
        "Controller_Key_15_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_15_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_15_Mode_Pressure_Note": "Normal",
        "Controller_Key_15_Note_Number": 63,
        "Controller_Key_15_Note_Velocity": 127,
        "Controller_Key_15_Pressure_Control_Number": 90,
        "Controller_Key_15_Pressure_Return_Value": 0,
        "Controller_Key_15_Tilt_Control_Number": 91,
        "Controller_Key_15_Tilt_Return_Value": 63,
        "Controller_Key_15_Toggle_Control_Number": 39,
        "Controller_Key_15_Toggle_On_Off": 0,
        "Controller_Key_15_Toggle_Return_Value": 0,
        "Controller_Key_15_Toggle_Value": 127,
        "Controller_Key_16_Channel": 0,
        "Controller_Key_16_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_16_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_16_Mode_Pressure_Note": "Normal",
        "Controller_Key_16_Note_Number": 64,
        "Controller_Key_16_Note_Velocity": 127,
        "Controller_Key_16_Pressure_Control_Number": 92,
        "Controller_Key_16_Pressure_Return_Value": 0,
        "Controller_Key_16_Tilt_Control_Number": 93,
        "Controller_Key_16_Tilt_Return_Value": 63,
        "Controller_Key_16_Toggle_Control_Number": 40,
        "Controller_Key_16_Toggle_On_Off": 0,
        "Controller_Key_16_Toggle_Return_Value": 0,
        "Controller_Key_16_Toggle_Value": 127,
        "Controller_Key_17_Channel": 0,
        "Controller_Key_17_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_17_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_17_Mode_Pressure_Note": "Normal",
        "Controller_Key_17_Note_Number": 65,
        "Controller_Key_17_Note_Velocity": 127,
        "Controller_Key_17_Pressure_Control_Number": 94,
        "Controller_Key_17_Pressure_Return_Value": 0,
        "Controller_Key_17_Tilt_Control_Number": 95,
        "Controller_Key_17_Tilt_Return_Value": 63,
        "Controller_Key_17_Toggle_Control_Number": 41,
        "Controller_Key_17_Toggle_On_Off": 0,
        "Controller_Key_17_Toggle_Return_Value": 0,
        "Controller_Key_17_Toggle_Value": 127,
        "Controller_Key_18_Channel": 0,
        "Controller_Key_18_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_18_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_18_Mode_Pressure_Note": "Normal",
        "Controller_Key_18_Note_Number": 66,
        "Controller_Key_18_Note_Velocity": 127,
        "Controller_Key_18_Pressure_Control_Number": 96,
        "Controller_Key_18_Pressure_Return_Value": 0,
        "Controller_Key_18_Tilt_Control_Number": 97,
        "Controller_Key_18_Tilt_Return_Value": 63,
        "Controller_Key_18_Toggle_Control_Number": 42,
        "Controller_Key_18_Toggle_On_Off": 0,
        "Controller_Key_18_Toggle_Return_Value": 0,
        "Controller_Key_18_Toggle_Value": 127,
        "Controller_Key_19_Channel": 0,
        "Controller_Key_19_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_19_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_19_Mode_Pressure_Note": "Normal",
        "Controller_Key_19_Note_Number": 67,
        "Controller_Key_19_Note_Velocity": 127,
        "Controller_Key_19_Pressure_Control_Number": 98,
        "Controller_Key_19_Pressure_Return_Value": 0,
        "Controller_Key_19_Tilt_Control_Number": 99,
        "Controller_Key_19_Tilt_Return_Value": 63,
        "Controller_Key_19_Toggle_Control_Number": 43,
        "Controller_Key_19_Toggle_On_Off": 0,
        "Controller_Key_19_Toggle_Return_Value": 0,
        "Controller_Key_19_Toggle_Value": 127,
        "Controller_Key_1_Channel": 0,
        "Controller_Key_1_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_1_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_1_Mode_Pressure_Note": "Normal",
        "Controller_Key_1_Note_Number": 49,
        "Controller_Key_1_Note_Velocity": 127,
        "Controller_Key_1_Pressure_Control_Number": 62,
        "Controller_Key_1_Pressure_Return_Value": 0,
        "Controller_Key_1_Tilt_Control_Number": 63,
        "Controller_Key_1_Tilt_Return_Value": 63,
        "Controller_Key_1_Toggle_Control_Number": 25,
        "Controller_Key_1_Toggle_On_Off": 0,
        "Controller_Key_1_Toggle_Return_Value": 0,
        "Controller_Key_1_Toggle_Value": 127,
        "Controller_Key_20_Channel": 0,
        "Controller_Key_20_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_20_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_20_Mode_Pressure_Note": "Normal",
        "Controller_Key_20_Note_Number": 68,
        "Controller_Key_20_Note_Velocity": 127,
        "Controller_Key_20_Pressure_Control_Number": 100,
        "Controller_Key_20_Pressure_Return_Value": 0,
        "Controller_Key_20_Tilt_Control_Number": 101,
        "Controller_Key_20_Tilt_Return_Value": 63,
        "Controller_Key_20_Toggle_Control_Number": 44,
        "Controller_Key_20_Toggle_On_Off": 0,
        "Controller_Key_20_Toggle_Return_Value": 0,
        "Controller_Key_20_Toggle_Value": 127,
        "Controller_Key_21_Channel": 0,
        "Controller_Key_21_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_21_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_21_Mode_Pressure_Note": "Normal",
        "Controller_Key_21_Note_Number": 69,
        "Controller_Key_21_Note_Velocity": 127,
        "Controller_Key_21_Pressure_Control_Number": 102,
        "Controller_Key_21_Pressure_Return_Value": 0,
        "Controller_Key_21_Tilt_Control_Number": 103,
        "Controller_Key_21_Tilt_Return_Value": 63,
        "Controller_Key_21_Toggle_Control_Number": 45,
        "Controller_Key_21_Toggle_On_Off": 0,
        "Controller_Key_21_Toggle_Return_Value": 0,
        "Controller_Key_21_Toggle_Value": 127,
        "Controller_Key_22_Channel": 0,
        "Controller_Key_22_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_22_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_22_Mode_Pressure_Note": "Normal",
        "Controller_Key_22_Note_Number": 70,
        "Controller_Key_22_Note_Velocity": 127,
        "Controller_Key_22_Pressure_Control_Number": 104,
        "Controller_Key_22_Pressure_Return_Value": 0,
        "Controller_Key_22_Tilt_Control_Number": 105,
        "Controller_Key_22_Tilt_Return_Value": 63,
        "Controller_Key_22_Toggle_Control_Number": 46,
        "Controller_Key_22_Toggle_On_Off": 0,
        "Controller_Key_22_Toggle_Return_Value": 0,
        "Controller_Key_22_Toggle_Value": 127,
        "Controller_Key_23_Channel": 0,
        "Controller_Key_23_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_23_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_23_Mode_Pressure_Note": "Normal",
        "Controller_Key_23_Note_Number": 71,
        "Controller_Key_23_Note_Velocity": 127,
        "Controller_Key_23_Pressure_Control_Number": 106,
        "Controller_Key_23_Pressure_Return_Value": 0,
        "Controller_Key_23_Tilt_Control_Number": 107,
        "Controller_Key_23_Tilt_Return_Value": 63,
        "Controller_Key_23_Toggle_Control_Number": 47,
        "Controller_Key_23_Toggle_On_Off": 0,
        "Controller_Key_23_Toggle_Return_Value": 0,
        "Controller_Key_23_Toggle_Value": 127,
        "Controller_Key_24_Channel": 0,
        "Controller_Key_24_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_24_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_24_Mode_Pressure_Note": "Normal",
        "Controller_Key_24_Note_Number": 72,
        "Controller_Key_24_Note_Velocity": 127,
        "Controller_Key_24_Pressure_Control_Number": 108,
        "Controller_Key_24_Pressure_Return_Value": 0,
        "Controller_Key_24_Tilt_Control_Number": 109,
        "Controller_Key_24_Tilt_Return_Value": 63,
        "Controller_Key_24_Toggle_Control_Number": 48,
        "Controller_Key_24_Toggle_On_Off": 0,
        "Controller_Key_24_Toggle_Return_Value": 0,
        "Controller_Key_24_Toggle_Value": 127,
        "Controller_Key_2_Channel": 0,
        "Controller_Key_2_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_2_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_2_Mode_Pressure_Note": "Normal",
        "Controller_Key_2_Note_Number": 50,
        "Controller_Key_2_Note_Velocity": 127,
        "Controller_Key_2_Pressure_Control_Number": 64,
        "Controller_Key_2_Pressure_Return_Value": 0,
        "Controller_Key_2_Tilt_Control_Number": 65,
        "Controller_Key_2_Tilt_Return_Value": 63,
        "Controller_Key_2_Toggle_Control_Number": 26,
        "Controller_Key_2_Toggle_On_Off": 0,
        "Controller_Key_2_Toggle_Return_Value": 0,
        "Controller_Key_2_Toggle_Value": 127,
        "Controller_Key_3_Channel": 0,
        "Controller_Key_3_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_3_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_3_Mode_Pressure_Note": "Normal",
        "Controller_Key_3_Note_Number": 51,
        "Controller_Key_3_Note_Velocity": 127,
        "Controller_Key_3_Pressure_Control_Number": 66,
        "Controller_Key_3_Pressure_Return_Value": 0,
        "Controller_Key_3_Tilt_Control_Number": 67,
        "Controller_Key_3_Tilt_Return_Value": 63,
        "Controller_Key_3_Toggle_Control_Number": 27,
        "Controller_Key_3_Toggle_On_Off": 0,
        "Controller_Key_3_Toggle_Return_Value": 0,
        "Controller_Key_3_Toggle_Value": 127,
        "Controller_Key_4_Channel": 0,
        "Controller_Key_4_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_4_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_4_Mode_Pressure_Note": "Normal",
        "Controller_Key_4_Note_Number": 52,
        "Controller_Key_4_Note_Velocity": 127,
        "Controller_Key_4_Pressure_Control_Number": 68,
        "Controller_Key_4_Pressure_Return_Value": 0,
        "Controller_Key_4_Tilt_Control_Number": 69,
        "Controller_Key_4_Tilt_Return_Value": 63,
        "Controller_Key_4_Toggle_Control_Number": 28,
        "Controller_Key_4_Toggle_On_Off": 0,
        "Controller_Key_4_Toggle_Return_Value": 0,
        "Controller_Key_4_Toggle_Value": 127,
        "Controller_Key_5_Channel": 0,
        "Controller_Key_5_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_5_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_5_Mode_Pressure_Note": "Normal",
        "Controller_Key_5_Note_Number": 53,
        "Controller_Key_5_Note_Velocity": 127,
        "Controller_Key_5_Pressure_Control_Number": 70,
        "Controller_Key_5_Pressure_Return_Value": 0,
        "Controller_Key_5_Tilt_Control_Number": 71,
        "Controller_Key_5_Tilt_Return_Value": 63,
        "Controller_Key_5_Toggle_Control_Number": 29,
        "Controller_Key_5_Toggle_On_Off": 0,
        "Controller_Key_5_Toggle_Return_Value": 0,
        "Controller_Key_5_Toggle_Value": 127,
        "Controller_Key_6_Channel": 0,
        "Controller_Key_6_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_6_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_6_Mode_Pressure_Note": "Normal",
        "Controller_Key_6_Note_Number": 54,
        "Controller_Key_6_Note_Velocity": 127,
        "Controller_Key_6_Pressure_Control_Number": 72,
        "Controller_Key_6_Pressure_Return_Value": 0,
        "Controller_Key_6_Tilt_Control_Number": 73,
        "Controller_Key_6_Tilt_Return_Value": 63,
        "Controller_Key_6_Toggle_Control_Number": 30,
        "Controller_Key_6_Toggle_On_Off": 0,
        "Controller_Key_6_Toggle_Return_Value": 0,
        "Controller_Key_6_Toggle_Value": 127,
        "Controller_Key_7_Channel": 0,
        "Controller_Key_7_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_7_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_7_Mode_Pressure_Note": "Normal",
        "Controller_Key_7_Note_Number": 55,
        "Controller_Key_7_Note_Velocity": 127,
        "Controller_Key_7_Pressure_Control_Number": 74,
        "Controller_Key_7_Pressure_Return_Value": 0,
        "Controller_Key_7_Tilt_Control_Number": 75,
        "Controller_Key_7_Tilt_Return_Value": 63,
        "Controller_Key_7_Toggle_Control_Number": 31,
        "Controller_Key_7_Toggle_On_Off": 0,
        "Controller_Key_7_Toggle_Return_Value": 0,
        "Controller_Key_7_Toggle_Value": 127,
        "Controller_Key_8_Channel": 0,
        "Controller_Key_8_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_8_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_8_Mode_Pressure_Note": "Normal",
        "Controller_Key_8_Note_Number": 56,
        "Controller_Key_8_Note_Velocity": 127,
        "Controller_Key_8_Pressure_Control_Number": 76,
        "Controller_Key_8_Pressure_Return_Value": 0,
        "Controller_Key_8_Tilt_Control_Number": 77,
        "Controller_Key_8_Tilt_Return_Value": 63,
        "Controller_Key_8_Toggle_Control_Number": 32,
        "Controller_Key_8_Toggle_On_Off": 0,
        "Controller_Key_8_Toggle_Return_Value": 0,
        "Controller_Key_8_Toggle_Value": 127,
        "Controller_Key_9_Channel": 0,
        "Controller_Key_9_Controller_Layer_Enable_Disable": 0,
        "Controller_Key_9_Keyboard_Layer_Enable_Disable": 1,
        "Controller_Key_9_Mode_Pressure_Note": "Normal",
        "Controller_Key_9_Note_Number": 57,
        "Controller_Key_9_Note_Velocity": 127,
        "Controller_Key_9_Pressure_Control_Number": 78,
        "Controller_Key_9_Pressure_Return_Value": 0,
        "Controller_Key_9_Tilt_Control_Number": 79,
        "Controller_Key_9_Tilt_Return_Value": 63,
        "Controller_Key_9_Toggle_Control_Number": 33,
        "Controller_Key_9_Toggle_On_Off": 0,
        "Controller_Key_9_Toggle_Return_Value": 0,
        "Controller_Key_9_Toggle_Value": 127,
        "Globals_Gain": { value: 100, offset: 75 },
        "Globals_LED_Refresh_Style": { value: "Normal", offset: 144 },
        "Globals_Off_Thresh": { value: 1, offset: 78 },
        "Globals_On_Thresh": { value: 15, offset: 81 },
	"Globals_Tilt_Sensitivity": { value: 50, offset: 84, length: 2 }, // TODO: length 2 or 1?
        "Keyboard": 1,
        "Keyboard_CC_00_Control_Number": { value: 1, offset: 96 },
        "Keyboard_CC_00_Curve": "Linear",
        "Keyboard_CC_00_Gain": { value: 100, offset: 159, length: 2 },
        "Keyboard_CC_00_MIDI_Output_Device": "USB 1",
        "Keyboard_CC_00_Max": 127,
        "Keyboard_CC_00_Min": 0,
        "Keyboard_CC_00_Offset": 0,
        "Keyboard_CC_00_Source": "Pressure",
        "Keyboard_CC_01_Control_Number": { value: -1, offset: 150 },
        "Keyboard_CC_01_Curve": "Linear",
        "Keyboard_CC_01_Gain": 100,
        "Keyboard_CC_01_MIDI_Output_Device": "USB 1",
        "Keyboard_CC_01_Max": 127,
        "Keyboard_CC_01_Min": 0,
        "Keyboard_CC_01_Offset": 0,
        "Keyboard_CC_01_Source": "Tilt",
        "Keyboard_CC_02_Control_Number": 2,
        "Keyboard_CC_02_Curve": "Linear",
        "Keyboard_CC_02_Gain": 100,
        "Keyboard_CC_02_MIDI_Output_Device": "USB 1",
        "Keyboard_CC_02_Max": 127,
        "Keyboard_CC_02_Min": 0,
        "Keyboard_CC_02_Offset": 0,
        "Keyboard_CC_02_Source": "None",
        "Keyboard_CC_03_Control_Number": 1,
        "Keyboard_CC_03_Curve": "Linear",
        "Keyboard_CC_03_Gain": 100,
        "Keyboard_CC_03_MIDI_Output_Device": "USB 1",
        "Keyboard_CC_03_Max": 127,
        "Keyboard_CC_03_Min": 0,
        "Keyboard_CC_03_Offset": 0,
        "Keyboard_CC_03_Source": "None",
        "Keyboard_Channel_Pressure_Curve": "Linear",
        "Keyboard_Channel_Pressure_Gain": 100,
        "Keyboard_Channel_Pressure_MIDI_Output_Device": "USB 1",
        "Keyboard_Channel_Pressure_Max": 127,
        "Keyboard_Channel_Pressure_Min": 0,
        "Keyboard_Channel_Pressure_Offset": 0,
        "Keyboard_Channel_Pressure_Source": "None",
        "Keyboard_Global_CC_Active": 1,
        "Keyboard_Global_Channel_Pressure_Active": { value: 1, offset: 120 },
        "Keyboard_Global_Channel_Rotation_Active": { value: 0, offset: 90 },
        "Keyboard_Global_Channel_Rotation_Offset": 0,
        "Keyboard_Global_Key_Selection_Criteria": 0, // TODO: lower bound of pitch bend range via pad
        "Keyboard_Global_LED_Mode": 1,
        "Keyboard_Global_LED_Remote_Channel": 0,
        "Keyboard_Global_Mode": { value: "Off", offset: 87 },
        "Keyboard_Global_Pitch_Bend_Active": { value: 1, offset: 108 },
        "Keyboard_Global_Pitch_Bend_Range": 12,
        "Keyboard_Global_Poly_Aftertouch_Active": 1,
        "Keyboard_Global_Polyphony_Number": 10,
        "Keyboard_Global_Pressure_Active": { value: 1, offset: 105 },
        "Keyboard_Global_Program_Change_A": -1, //{ value: -1, offset:  },
        "Keyboard_Global_Program_Change_B": -1, //{ value: -1, offset:  },
        "Keyboard_Global_Program_Change_C": -1,
        "Keyboard_Global_Program_Change_D": -1,
        "Keyboard_Global_Tilt_Active": { value: 1, offset: 111 },
        "Keyboard_Global_Transpose": { value: 0, offset: 147 },
        "Keyboard_Global_USB_1_Channel": 0, // TODO: MIDI channel?!
        "Keyboard_Global_USB_2_Channel": 127, // TODO: upper bound of pitch bend range via pad
        "Keyboard_Global_Velocity_Active": 1,
        "Keyboard_Pitch_Bend_Curve": "Linear",
        "Keyboard_Pitch_Bend_Gain": 100,
        "Keyboard_Pitch_Bend_MIDI_Output_Device": "USB 1",
        "Keyboard_Pitch_Bend_Max": 69, // TODO: Max and Min provide the supported range -> might be used for uneven scaling!
        "Keyboard_Pitch_Bend_Min": 58,
        "Keyboard_Pitch_Bend_Offset": 0,
        "Keyboard_Pitch_Bend_Source": "Tilt",
        "Keyboard_Poly_Aftertouch_Curve": "Linear",
        "Keyboard_Poly_Aftertouch_Gain": 100,
        "Keyboard_Poly_Aftertouch_MIDI_Output_Device": "USB 1",
        "Keyboard_Poly_Aftertouch_Max": 127,
        "Keyboard_Poly_Aftertouch_Min": 0,
        "Keyboard_Poly_Aftertouch_Offset": 0,
        "Keyboard_Poly_Aftertouch_Source": "None",
        "Keyboard_Velocity_Curve": { value: "Logarithmic", offset: 324 },
        "Keyboard_Velocity_Gain": { value: 60, offset: 330, length: 2 },
        "Keyboard_Velocity_MIDI_Output_Device": "USB 1",
        "Keyboard_Velocity_Max": 127,
        "Keyboard_Velocity_Min": 0,
        "Keyboard_Velocity_Offset": 0,
        "Preset_Name": "Basic"
    }, bytes = {
        value : 'f0 00 01 5f 7a 1a 00 01 00 02 22 20 2e 46 00 10 ' +
            '21 01 56 00 7f 7f 7f 75 7f 64 01 0f 32 00 00 01 ' +
            '00 7f 00 01 01 01 01 00 01 01 01 00 01 00 0a 00 ' +
            '00 00 01 00 00 64 7f 00 00 00 00 05 7f 00 00 10 ' +
            '64 7f 00 00 00 06 02 00 00 00 64 7f 00 00 00 00 ' +
            '00 00 00 64 7f 00 00 00 00 00 00 00 64 45 3a 00 ' +
            '00 00 06 00 00 64 7f 00 00 00 00 00 01 00 3c 00 ' +
            '7f 00 00 00 02 00 01 00 30 3c 3d 00 7f 00 3f 00 ' +
            '18 7f 00 00 00 01 31 00 3e 3f 00 7f 00 3f 19 00 ' +
            '7f 00 00 00 01 32 40 00 41 00 7f 00 3f 1a 7f 00 ' +
            '00 00 00 01 33 42 43 00 00 7f 00 3f 1b 7f 00 00 ' +
            '00 00 01 34 44 45 00 00 7f 00 3f 1c 7f 00 00 00 ' +
            '00 01 35 46 47 00 7f 00 00 3f 1d 7f 00 00 00 00 ' +
            '01 36 48 49 00 7f 00 00 3f 1e 7f 00 00 00 01 00 ' +
            '37 4a 4b 00 7f 00 3f 00 1f 7f 00 00 00 01 38 00 ' +
            '4c 4d 00 7f 00 3f 20 00 7f 00 00 00 01 39 4e 00 ' +
            '4f 00 7f 00 3f 21 7f 00 00 00 00 01 3a 50 51 00 ' +
            '00 7f 00 3f 22 7f 00 00 00 00 01 3b 52 53 00 00 ' +
            '7f 00 3f 23 7f 00 00 00 00 01 3c 54 55 00 7f 00 ' +
            '00 3f 24 7f 00 00 00 00 01 3d 56 57 00 7f 00 00 ' +
            '3f 25 7f 00 00 00 01 00 3e 58 59 00 7f 00 3f 00 ' +
            '26 7f 00 00 00 01 3f 00 5a 5b 00 7f 00 3f 27 00 ' +
            '7f 00 00 00 01 40 5c 00 5d 00 7f 00 3f 28 7f 00 ' +
            '00 00 00 01 41 5e 5f 00 00 7f 00 3f 29 7f 00 00 ' +
            '00 00 01 42 60 61 00 00 7f 00 3f 2a 7f 00 00 00 ' +
            '00 01 43 62 63 00 7f 00 00 3f 2b 7f 00 00 00 00 ' +
            '01 44 64 65 00 7f 00 00 3f 2c 7f 00 00 00 01 00 ' +
            '45 66 67 00 7f 00 3f 00 2d 7f 00 00 00 01 46 00 ' +
            '68 69 00 7f 00 3f 2e 00 7f 00 00 00 01 47 6a 00 ' +
            '6b 00 7f 00 3f 2f 7f 00 00 00 00 01 48 6c 6d 00 ' +
            '00 7f 00 3f 30 7f 00 00 00 00 01 7f 6e 6f 00 00 ' +
            '7f 00 3f 01 00 00 64 00 7f 00 00 05 70 01 00 00 ' +
            '00 64 7f 00 00 05 71 00 01 00 00 64 7f 00 00 00 ' +
            '06 00 01 00 00 64 7f 02 00 00 06 01 01 00 00 00 ' +
            '64 7f 00 00 06 03 06 20 01 00 00 00 5c 00 00 10 ' +
            'f7',
        inject : function(value, offset) {
            this.value = this.value.substring(0, offset) + value + this.value.substring(offset + value.length);
        },
	toString : function() {
	    return this.value;
	}
    }, getChecksumValue = function(value) {
        var  mapped = {
            // Sources
            'None' : 0,
            'Pressure' : 1,
            'Tilt' : 2,

            // Output
            'USB 1' : 1,

            // Curve
            'Linear' : 0,
            'Logarithmic' : 1,
            'Sine' : 2,
            'Cosine' : 3,
            'Exponential' : 4,
            'Invert' : 5,

            // // Mode_Pressure_Note
            // 'Normal' : 1

            // LED Refresh Mode
            'Normal' : 0,
            'Control Only' : 2,
            'All Off' : 3,

            // Keyboard_Global_Mode
            'Off': 0,
            'On': 1,
            'Legato', 2
        };

        console.log(value + ' -> ' + typeof value);
        switch(typeof value) {
        case 'number':
            return value;
        case 'boolean':
            return value ? 1 : 0;
        case 'string':
            // Map preset property values to numbers
            return mapped[value] || 0;
        default:
            // TODO: There are still some things we have not mapped yet.
            return 0;
        }
    }, intToBytes = function(value, noOfBytes, highBitShift) {
	// Convert value into noOfBytes MIDI bytes. Given a length of 2 bytes, the
	// lower 7bit of an 8bit value will go into the first byte, and the most-
	// significant bit will go into the second byte (with the left-most bit
	// being 0 in each byte). For example, 200 (11001000) will be converted
	// to 48 40 (01001000 01000000).
	// Please note that there is no standard sysex format. This specific
	// conversion may only be relevant for certain manufacturers, for example
	// Keith McMillen.
        var currValue = Number(value),
            result = [], i, len, v;

	console.log(currValue);
        for(i = 0, len = noOfBytes || 1; i < len; i++) {
            if(i % 2 === 0) {
                v = currValue & 0x7f;
            } else {
                v = (currValue & 0x80) >> (highBitShift || 1);
                currValue >>= 8;
            }

            // Convert to 2-digit hex, adding a leading '0' if necessary.
            result.push(('0' + v.toString(16)).substr(-2));
        }

        return result.join(' ');
    };

    return {
        init: function(){
            // this will be executed once when the osc server starts
	    console.log('init');
        },
        oscInFilter: function(data){
            // Filter incomming osc messages
            var {address, args, host, port} = data

	    console.log(address);
            // address = string
            // args = array of {value, type} objects
            // host = string
            // port = integer

            // return data if you want the message to be processed
            return {address, args, host, port};
        },
        oscOutFilter:function(data){
            // Filter outgoing osc messages
            // Destructuring assignment, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
            var {address, args, host, port} = data,
                prop = address.substr(1),
                checksum = 0, value;

	    console.log(host + ' -> ' + prop);
            // Handle osc messages directed to target 'k-board'. Try to map prop
	    // into k-board preset.
            if(host === 'k-board' && preset[prop] && args[0]) {
                // Only accept value changes that we know how to handle
                if(preset[prop].offset) {
                    preset[prop].value = args[0].value;
                }

                // Update sysex byte string from preset values and calculate
		// checksum.
                for(prop in preset) {
                    if(preset.hasOwnProperty(prop)) {
                        prop = preset[prop];
			value = getChecksumValue(prop.value || prop);
                        checksum += value;

                        // Map preset properties into byte string
                        if(prop.offset) {
			    console.log(prop.value + ' -> ' + value);
                            bytes.inject(intToBytes(value, prop.length), prop.offset);
                        }
                    }
                }
                // Calculate preset checksum
                // TODO: Some things are still missing, we need to add a magic number.
                checksum += 59;

                // Create byte string from preset values + checksum
                bytes.inject(intToBytes(checksum, 2, 3).split(' ').join(' 00 00 '), 1668);
                console.log('checksum: ' + intToBytes(checksum, 2, 3));

                host = 'midi';
                address = '/sysex';
                args[0] = { type: 'string', value: bytes.toString() };
		// console.log('bytes: ' + bytes);
            }

            // return data if you want the message to be and sent
            return {address, args, host, port}
        }
    };

})();
