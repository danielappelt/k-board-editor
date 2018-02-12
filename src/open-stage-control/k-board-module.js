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
        "Keyboard": 1,
        "Keyboard_Global_LED_Mode": 1,
        "Keyboard_Global_Program_Change_A": -1,
        "Keyboard_Global_Program_Change_B": -1,
        "Keyboard_Global_Program_Change_C": -1,
        "Keyboard_Global_Program_Change_D": -1,
        "Globals_Gain": { value: 100, offset: 75 },
        "Globals_Off_Thresh": { value: 1, offset: 78 },
        "Globals_On_Thresh": { value: 15, offset: 81 },
        "Globals_Tilt_Sensitivity": { value: 50, offset: 84 },
        "Keyboard_Global_Mode": { value: "Off", offset: 87 },
        "Keyboard_Global_Channel_Rotation_Active": { value: 0, offset: 90 }, // 00 at 93
        "Keyboard_Global_USB_1_Channel": { value: 0, offset: 96 }, // MIDI channel
        "Keyboard_Global_USB_2_Channel": { value: 127, offset: 99 }, // upper bound of pitch bend range via pad?
        "Keyboard_Global_Key_Selection_Criteria": { value: 0, offset: 102 }, // lower bound of pitch bend range via pad?
        "Keyboard_Global_Velocity_Active": { value: 1, offset: 105 },
        "Keyboard_Global_Pressure_Active": { value: 1, offset: 108 },
        "Keyboard_Global_Pitch_Bend_Active": { value: 1, offset: 111 },
        "Keyboard_Global_Tilt_Active": { value: 1, offset: 114 }, // 00 at 117
        "Keyboard_Global_Channel_Pressure_Active": { value: 1, offset: 120 },
        "Keyboard_Global_Poly_Aftertouch_Active": { value: 1, offset: 123 },
        "Keyboard_Global_CC_Active": { value: 1, offset: 126 },
        "Keyboard_Global_Channel_Rotation_Offset": { value: 0, offset: 129 },
//        "Keyboard_Global_Pitch_Bend_Range": { value: 12, offset:  },
        "Keyboard_Global_LED_Remote_Channel": { value: 0, offset: 135 },
        "Keyboard_Global_Polyphony_Number": { value: 10, offset: 138 }, // 00 at 141
        "Globals_LED_Refresh_Style": { value: "Normal", offset: 144 },
        "Keyboard_Global_Transpose": { value: 0, offset: 147 },
        "Keyboard_CC_00_Control_Number": { value: 1, offset: 150 },
        "Keyboard_CC_00_Curve": { value: "Linear", offset: 153 },
        "Keyboard_CC_00_Gain": { value: 100, offset: 156, length: 2 },
        "Keyboard_CC_00_Max": { value: 127, offset: 162 }, // 00 at 165
        "Keyboard_CC_00_Min": { value: 0, offset: 168 },
        "Keyboard_CC_00_Offset": { value: 0, offset: 171 },
        "Keyboard_CC_00_MIDI_Output_Device": "USB 1",
        "Keyboard_CC_00_Source": { value: "Pressure", offset: 177 },
        "Keyboard_CC_01_Control_Number": { value: -1, offset: 180 }, // value -1 => offset 180->7f, offset 189->10 => maybe sets device to "Off"
        "Keyboard_CC_01_Curve": { value: "Linear", offset: 183 },
        "Keyboard_CC_01_Gain": { value: 100, offset: 186, length: 2 }, // TODO: 00 at 189 -> in between
        "Keyboard_CC_01_Max": { value: 127, offset: 195 },
        "Keyboard_CC_01_Min": { value: 0, offset: 198 },
        "Keyboard_CC_01_Offset": { value: 0, offset: 201 },
        "Keyboard_CC_01_MIDI_Output_Device": "USB 1",
        "Keyboard_CC_01_Source": { value: "Tilt", offset: 207 },
        "Keyboard_CC_02_Control_Number": { value: 2, offset: 210 }, // 00 at 213
        "Keyboard_CC_02_Curve": { value: "Linear", offset: 216 },
        "Keyboard_CC_02_Gain": { value: 100, offset: 219, length: 2 },
        "Keyboard_CC_02_Max": { value: 127, offset: 225 },
        "Keyboard_CC_02_Min": { value: 0, offset: 228 },
        "Keyboard_CC_02_Offset": { value: 0, offset: 231 },
        "Keyboard_CC_02_MIDI_Output_Device": "USB 1", // 00 at 237
        "Keyboard_CC_02_Source": { value: "None", offset: 240 },
        // TODO: Maybe the editor and manual are right about the non-availability of a CC_03 mapping!?
        // "Keyboard_CC_03_Control_Number": { value: 1, offset: 243 },
        // "Keyboard_CC_03_Curve": { value: "Linear", offset: 246 },
        // "Keyboard_CC_03_Gain": { value: 100, offset: 249, length: 2 }, // TODO: this should be 249 + 252?!
        // "Keyboard_CC_03_Max": { value: 127, offset: 252 },
        // "Keyboard_CC_03_Min": { value: 0, offset: 255 },
        // "Keyboard_CC_03_Offset": { value: 0, offset: 258 }, // 00 at 261
        // "Keyboard_CC_03_MIDI_Output_Device": "USB 1",
        // "Keyboard_CC_03_Source": { value: "None", offset: 264 },
        "Keyboard_Channel_Pressure_Curve": { value: "Linear", offset: 243 },
        "Keyboard_Channel_Pressure_Gain": { value: 100, offset: 246, length: 2 },
        "Keyboard_Channel_Pressure_Max": { value: 127, offset: 252 },
        "Keyboard_Channel_Pressure_Min": { value: 0, offset: 255 },
        "Keyboard_Channel_Pressure_Offset": { value: 0, offset: 258 }, // 00 at 261
        "Keyboard_Channel_Pressure_MIDI_Output_Device": "USB 1",
        "Keyboard_Channel_Pressure_Source": { value: "None", offset: 267 },
        "Keyboard_Pitch_Bend_Curve": { value: "Linear", offset: 270 },
        "Keyboard_Pitch_Bend_Gain": { value: 100, offset: 273, length: 2 },
        "Keyboard_Pitch_Bend_Max": { value: 69, offset: 279 }, // Max/Min provide the supported range -> might be used for uneven scaling!
        "Keyboard_Pitch_Bend_Min": { value: 58, offset: 282 }, // 00 at 285
        "Keyboard_Pitch_Bend_Offset": { value: 0, offset: 288 },
        "Keyboard_Pitch_Bend_MIDI_Output_Device": "USB 1",
        "Keyboard_Pitch_Bend_Source": { value: "Tilt", offset: 294 },
        "Keyboard_Poly_Aftertouch_Curve": { value: "Linear", offset: 297 },
        "Keyboard_Poly_Aftertouch_Gain": { value: 100, offset: 300, length: 2 },
        "Keyboard_Poly_Aftertouch_Max": { value: 127, offset: 306 }, // 00 at 309
        "Keyboard_Poly_Aftertouch_Min": { value: 0, offset: 312 },
        "Keyboard_Poly_Aftertouch_Offset": { value: 0, offset: 315 },
        "Keyboard_Poly_Aftertouch_MIDI_Output_Device": "USB 1",
        "Keyboard_Poly_Aftertouch_Source": { value: "None", offset: 321 },
        "Keyboard_Velocity_Curve": { value: "Logarithmic", offset: 324 },
        "Keyboard_Velocity_Gain": { value: 60, offset: 327, length: 2 }, // 00 at 333
        "Keyboard_Velocity_Max": { value: 127, offset: 336 },
        "Keyboard_Velocity_Min": { value: 0, offset: 339 },
        "Keyboard_Velocity_Offset": { value: 0, offset: 342 },
        "Keyboard_Velocity_MIDI_Output_Device": "USB 1",
        "Controller_Global_MIDI_Output_Device": "USB 1 + Expander",
        "Controller_Key_0_Mode_Pressure_Note": "Normal",
        "Controller_Key_0_Controller_Layer_Enable_Disable": { value: 0, offset: 351 },
        "Controller_Key_0_Keyboard_Layer_Enable_Disable": { value: 1, offset: 354 }, // 00 at 357, every 8 bytes
        "Controller_Key_0_Note_Number": { value: 48, offset: 360 },
        "Controller_Key_0_Pressure_Control_Number": { value: 60, offset: 363 },
        "Controller_Key_0_Tilt_Control_Number": { value: 61, offset: 366 },
        "Controller_Key_0_Channel": { value: 0, offset: 369 },
        "Controller_Key_0_Note_Velocity": { value: 127, offset: 372 },
        "Controller_Key_0_Pressure_Return_Value": { value: 0, offset: 375 },
        "Controller_Key_0_Tilt_Return_Value": { value: 63, offset: 378 }, // 00 at 381
        "Controller_Key_0_Toggle_Control_Number": { value: 24, offset: 384 },
        "Controller_Key_0_Toggle_Value": { value: 127, offset: 387 },
        "Controller_Key_0_Toggle_Return_Value": { value: 0, offset: 390 },
        "Controller_Key_0_Toggle_On_Off": { value: 0, offset: 393 },
        "Controller_Key_1_Mode_Pressure_Note": "Normal",
        "Controller_Key_1_Controller_Layer_Enable_Disable": { value: 0, offset: 396 },
        "Controller_Key_1_Keyboard_Layer_Enable_Disable": { value: 1, offset: 399 },
        "Controller_Key_1_Note_Number": { value: 49, offset: 402 }, // 00 at 405
        "Controller_Key_1_Pressure_Control_Number": { value: 62, offset: 408 },
        "Controller_Key_1_Tilt_Control_Number": { value: 63, offset: 411 },
        "Controller_Key_1_Channel": { value: 0, offset: 414 },
        "Controller_Key_1_Note_Velocity": { value: 127, offset: 417 },
        "Controller_Key_1_Pressure_Return_Value": { value: 0, offset: 420 },
        "Controller_Key_1_Tilt_Return_Value": { value: 63, offset: 423 },
        "Controller_Key_1_Toggle_Control_Number": { value: 25, offset: 426 }, // 00 at 429
        "Controller_Key_1_Toggle_Value": { value: 127, offset: 432 },
        "Controller_Key_1_Toggle_Return_Value": { value: 0, offset: 435 },
        "Controller_Key_1_Toggle_On_Off": { value: 0, offset: 438 },
        "Controller_Key_2_Mode_Pressure_Note": "Normal",
        "Controller_Key_2_Controller_Layer_Enable_Disable": { value: 0, offset: 441 },
        "Controller_Key_2_Keyboard_Layer_Enable_Disable": { value: 1, offset: 444 },
        "Controller_Key_2_Note_Number": { value: 50, offset: 447 },
        "Controller_Key_2_Pressure_Control_Number": { value: 64, offset: 450 }, // 00 at 453
        "Controller_Key_2_Tilt_Control_Number": { value: 65, offset: 456 },
        "Controller_Key_2_Channel": { value: 0, offset: 459 },
        "Controller_Key_2_Note_Velocity": { value: 127, offset: 462 },
        "Controller_Key_2_Pressure_Return_Value": { value: 0, offset: 465 },
        "Controller_Key_2_Tilt_Return_Value": { value: 63, offset: 468 },
        "Controller_Key_2_Toggle_Control_Number": { value: 26, offset: 471 },
        "Controller_Key_2_Toggle_Value": { value: 127, offset: 474 }, // 00 at 477
        "Controller_Key_2_Toggle_Return_Value": { value: 0, offset: 480 },
        "Controller_Key_2_Toggle_On_Off": { value: 0, offset: 483 },
        "Controller_Key_3_Mode_Pressure_Note": "Normal",
        "Controller_Key_3_Controller_Layer_Enable_Disable": { value: 0, offset: 486 },
        "Controller_Key_3_Keyboard_Layer_Enable_Disable": { value: 1, offset: 489 },
        "Controller_Key_3_Note_Number": { value: 51, offset: 492 },
        "Controller_Key_3_Pressure_Control_Number": { value: 66, offset: 495 },
        "Controller_Key_3_Tilt_Control_Number": { value: 67, offset: 498 }, // 00 at 501
        "Controller_Key_3_Channel": { value: 0, offset: 504 },
        "Controller_Key_3_Note_Velocity": { value: 127, offset: 507 },
        "Controller_Key_3_Pressure_Return_Value": { value: 0, offset: 510 },
        "Controller_Key_3_Tilt_Return_Value": { value: 63, offset: 513 },
        "Controller_Key_3_Toggle_Control_Number": { value: 27, offset: 516 },
        "Controller_Key_3_Toggle_Value": { value: 127, offset: 519 },
        "Controller_Key_3_Toggle_Return_Value": { value: 0, offset: 522 }, // 00 at 525
        "Controller_Key_3_Toggle_On_Off": { value: 0, offset: 528 },
        "Controller_Key_4_Mode_Pressure_Note": "Normal",
        "Controller_Key_4_Controller_Layer_Enable_Disable": { value: 0, offset: 531 },
        "Controller_Key_4_Keyboard_Layer_Enable_Disable": { value: 1, offset: 534 },
        "Controller_Key_4_Note_Number": { value: 52, offset: 537 },
        "Controller_Key_4_Pressure_Control_Number": { value: 68, offset: 540 },
        "Controller_Key_4_Tilt_Control_Number": { value: 69, offset: 543 },
        "Controller_Key_4_Channel": { value: 0, offset: 546 }, // 00 at 549
        "Controller_Key_4_Note_Velocity": { value: 127, offset: 552 },
        "Controller_Key_4_Pressure_Return_Value": { value: 0, offset: 555 },
        "Controller_Key_4_Tilt_Return_Value": { value: 63, offset: 558 },
        "Controller_Key_4_Toggle_Control_Number": { value: 28, offset: 561 },
        "Controller_Key_4_Toggle_Value": { value: 127, offset: 564 },
        "Controller_Key_4_Toggle_Return_Value": { value: 0, offset: 567 },
        "Controller_Key_4_Toggle_On_Off": { value: 0, offset: 570 }, // 00 at 573
        "Controller_Key_5_Mode_Pressure_Note": "Normal",
        "Controller_Key_5_Controller_Layer_Enable_Disable": { value: 0, offset: 576 },
        "Controller_Key_5_Keyboard_Layer_Enable_Disable": { value: 1, offset: 579 },
        "Controller_Key_5_Note_Number": { value: 53, offset: 582 },
        "Controller_Key_5_Pressure_Control_Number": { value: 70, offset: 585 },
        "Controller_Key_5_Tilt_Control_Number": { value: 71, offset: 588 },
        "Controller_Key_5_Channel": { value; 0, offset: 591 },
        "Controller_Key_5_Note_Velocity": { value: 127, offset: 594 }, // 00 at 597
        "Controller_Key_5_Pressure_Return_Value": { value: 0, offset: 600 },
        "Controller_Key_5_Tilt_Return_Value": { value: 63, offset: 603 },
        "Controller_Key_5_Toggle_Control_Number": { value: 29, offset: 606 },
        "Controller_Key_5_Toggle_Value": { value: 127, offset: 609 },
        "Controller_Key_5_Toggle_Return_Value": { value: 0, offset: 612 },
        "Controller_Key_5_Toggle_On_Off": { value: 0, offset: 615 },
        "Controller_Key_6_Mode_Pressure_Note": "Normal",
        "Controller_Key_6_Controller_Layer_Enable_Disable": { value: 0, offset: 618 }, // 00 at 621
        "Controller_Key_6_Keyboard_Layer_Enable_Disable": { value: 1, offset: 624 },
        "Controller_Key_6_Note_Number": { value: 54, offset: 627 },
        "Controller_Key_6_Pressure_Control_Number": { value: 72, offset: 630 },
        "Controller_Key_6_Tilt_Control_Number": { value: 73, offset: 633 },
        "Controller_Key_6_Channel": { value: 0, offset: 636 },
        "Controller_Key_6_Note_Velocity": { value: 127, offset: 639 },
        "Controller_Key_6_Pressure_Return_Value": { value: 0, offset: 642 }, // 00 at 645
        "Controller_Key_6_Tilt_Return_Value": { value: 63, offset: 648 },
        "Controller_Key_6_Toggle_Control_Number": { value: 30, offset: 651 },
        "Controller_Key_6_Toggle_Value": { value: 127, offset: 654 },
        "Controller_Key_6_Toggle_Return_Value": { value: 0, offset: 657 },
        "Controller_Key_6_Toggle_On_Off": { value: 0, offset: 660 },
        "Controller_Key_7_Mode_Pressure_Note": "Normal",
        "Controller_Key_7_Controller_Layer_Enable_Disable": { value: 0, offset: 663 },
        "Controller_Key_7_Keyboard_Layer_Enable_Disable": { value: 1, offset: 666 }, // 00 at 669
        "Controller_Key_7_Note_Number": { value: 55, offset: 672 },
        "Controller_Key_7_Pressure_Control_Number": { value: 74, offset: 675 },
        "Controller_Key_7_Tilt_Control_Number": { value: 75, offset: 678 },
        "Controller_Key_7_Channel": { value: 0, offset: 681 },
        "Controller_Key_7_Note_Velocity": { value: 127, offset: 684 },
        "Controller_Key_7_Pressure_Return_Value": { value: 0, offset: 687 },
        "Controller_Key_7_Tilt_Return_Value": { value: 63, offset: 690 }, // 00 at 693
        "Controller_Key_7_Toggle_Control_Number": { value: 31, offset: 696 },
        "Controller_Key_7_Toggle_Value": { value: 127, offset: 699 },
        "Controller_Key_7_Toggle_Return_Value": { value: 0, offset: 702 },
        "Controller_Key_7_Toggle_On_Off": { value: 0, offset: 705 },
        "Controller_Key_8_Mode_Pressure_Note": "Normal",
        "Controller_Key_8_Controller_Layer_Enable_Disable": { value: 0, offset: 708 },
        "Controller_Key_8_Keyboard_Layer_Enable_Disable": { value: 1, offset: 711 },
        "Controller_Key_8_Note_Number": { value: 56, offset: 714 }, // 00 at 717
        "Controller_Key_8_Pressure_Control_Number": { value: 76, offset: 720 },
        "Controller_Key_8_Tilt_Control_Number": { value: 77, offset: 723 },
        "Controller_Key_8_Channel": { value: 0, offset: 726 },
        "Controller_Key_8_Note_Velocity": { value: 127, offset: 729 },
        "Controller_Key_8_Pressure_Return_Value": { value: 0, offset: 732 },
        "Controller_Key_8_Tilt_Return_Value": { value: 63, offset: 735 },
        "Controller_Key_8_Toggle_Control_Number": { value: 32, offset: 738 }, // 00 at 741
        "Controller_Key_8_Toggle_Value": { value: 127, offset: 744 },
        "Controller_Key_8_Toggle_Return_Value": { value: 0, offset: 747 },
        "Controller_Key_8_Toggle_On_Off": { value: 0, offset: 750 },
        "Controller_Key_9_Mode_Pressure_Note": "Normal",
        "Controller_Key_9_Controller_Layer_Enable_Disable": { value: 0, offset: 753 },
        "Controller_Key_9_Keyboard_Layer_Enable_Disable": { value: 1, offset: 756 },
        "Controller_Key_9_Note_Number": { value: 57, offset: 759 },
        "Controller_Key_9_Pressure_Control_Number": { value: 78, offset: 762 }, // 00 at 765
        "Controller_Key_9_Tilt_Control_Number": { value: 79, offset: 768 },
        "Controller_Key_9_Channel": { value: 0, offset: 771 },
        "Controller_Key_9_Note_Velocity": { value: 127, offset: 774 },
        "Controller_Key_9_Pressure_Return_Value": { value: 0, offset: 777 },
        "Controller_Key_9_Tilt_Return_Value": { value: 63, offset: 780 },
        "Controller_Key_9_Toggle_Control_Number": { value: 33, offset: 783 },
        "Controller_Key_9_Toggle_Value": { value: 127, offset: 786 }, // 00 at 789
        "Controller_Key_9_Toggle_Return_Value": { value: 0, offset: 792 },
        "Controller_Key_9_Toggle_On_Off": { value: 0, offset: 795 },
        "Controller_Key_10_Mode_Pressure_Note": "Normal",
        "Controller_Key_10_Controller_Layer_Enable_Disable": { value: 0, offset: 798 },
        "Controller_Key_10_Keyboard_Layer_Enable_Disable": { value: 1, offset: 801 },
        "Controller_Key_10_Note_Number": { value: 58, offset: 804 },
        "Controller_Key_10_Pressure_Control_Number": { value: 80, offset: 807 },
        "Controller_Key_10_Tilt_Control_Number": { value: 81, offset: 810 }, // 00 at 813
        "Controller_Key_10_Channel": { value: 0, offset: 816 },
        "Controller_Key_10_Note_Velocity": { value: 127, offset: 819 },
        "Controller_Key_10_Pressure_Return_Value": { value: 0, offset: 822 },
        "Controller_Key_10_Tilt_Return_Value": { value: 63, offset: 825 },
        "Controller_Key_10_Toggle_Control_Number": { value: 34, offset: 828 },
        "Controller_Key_10_Toggle_Value": { value: 127, offset: 831 },
        "Controller_Key_10_Toggle_Return_Value": { value: 0, offset: 834 }, // 00 at 837
        "Controller_Key_10_Toggle_On_Off": { value: 0, offset: 840 },
        "Controller_Key_11_Mode_Pressure_Note": "Normal",
        "Controller_Key_11_Controller_Layer_Enable_Disable": { value: 0, offset: 843 },
        "Controller_Key_11_Keyboard_Layer_Enable_Disable": { value: 1, offset: 847 },
        "Controller_Key_11_Note_Number": { value: 59, offset: 850 },
        "Controller_Key_11_Pressure_Control_Number": { value: 82, offset: 853 },
        "Controller_Key_11_Tilt_Control_Number": { value: 83, offset: 857 },
        "Controller_Key_11_Channel": { value: 0, offset: 860 }, // 00 at 863
        "Controller_Key_11_Note_Velocity": { value: 127, offset: 864 },
        "Controller_Key_11_Pressure_Return_Value": { value: 0, offset: 867 },
        "Controller_Key_11_Tilt_Return_Value": { value: 63, offset: 870 },
        "Controller_Key_11_Toggle_Control_Number": { value: 35, offset: 873 },
        "Controller_Key_11_Toggle_Value": { value: 127, offset: 876 },
        "Controller_Key_11_Toggle_Return_Value": { value: 0, offset: 879 },
        "Controller_Key_11_Toggle_On_Off": { value: 0, offset: 882 }, // 885
        "Controller_Key_12_Mode_Pressure_Note": "Normal",
        "Controller_Key_12_Controller_Layer_Enable_Disable": { value: 0, offset: 888 },
        "Controller_Key_12_Keyboard_Layer_Enable_Disable": { value: 1, offset: 891 },
        "Controller_Key_12_Note_Number": { value: 60, offset: 894 },
        "Controller_Key_12_Pressure_Control_Number": { value: 84, offset: 897 },
        "Controller_Key_12_Tilt_Control_Number": { value: 85, offset: 900 },
        "Controller_Key_12_Channel": { value: 0, offset: 903 },
        "Controller_Key_12_Note_Velocity": { value: 127, offset: 906 }, // 00 at 909
        "Controller_Key_12_Pressure_Return_Value": { value: 0, offset: 912 },
        "Controller_Key_12_Tilt_Return_Value": { value: 63, offset: 915 },
        "Controller_Key_12_Toggle_Control_Number": { value: 36, offset: 918 },
        "Controller_Key_12_Toggle_Value": { value: 127, offset: 921 },
        "Controller_Key_12_Toggle_Return_Value": { value: 0, offset: 924 },
        "Controller_Key_12_Toggle_On_Off": { value: 0, offset: 927 },
        "Controller_Key_13_Mode_Pressure_Note": "Normal",
        "Controller_Key_13_Controller_Layer_Enable_Disable": { value: 0, offset: 930 }, // 00 at 933
        "Controller_Key_13_Keyboard_Layer_Enable_Disable": { value: 1, offset: 936 },
        "Controller_Key_13_Note_Number": { value: 61, offset: 939 },
        "Controller_Key_13_Pressure_Control_Number": { value: 86, offset: 942 },
        "Controller_Key_13_Tilt_Control_Number": { value: 87, offset: 945 },
        "Controller_Key_13_Channel": { value: 0, offset: 948 },
        "Controller_Key_13_Note_Velocity": { value: 127, offset: 951 },
        "Controller_Key_13_Pressure_Return_Value": { value: 0, offset: 954 }, // 00 at 957
        "Controller_Key_13_Tilt_Return_Value": { value: 63, offset: 960 },
        "Controller_Key_13_Toggle_Control_Number": { value: 37, offset: 963 },
        "Controller_Key_13_Toggle_Value": { value: 127, offset: 966 },
        "Controller_Key_13_Toggle_Return_Value": { value: 0, offset: 969 },
        "Controller_Key_13_Toggle_On_Off": { value: 0, offset: 972 },
        "Controller_Key_14_Mode_Pressure_Note": "Normal",
        "Controller_Key_14_Controller_Layer_Enable_Disable": { value: 0, offset: 975 },
        "Controller_Key_14_Keyboard_Layer_Enable_Disable": { value: 1, offset: 978 }, // 00 at 981
        "Controller_Key_14_Note_Number": { value: 62, offset: 984 },
        "Controller_Key_14_Pressure_Control_Number": { value: 88, offset: 987 },
        "Controller_Key_14_Tilt_Control_Number": { value: 89, offset: 990 },
        "Controller_Key_14_Channel": { value: 0, offset: 993 },
        "Controller_Key_14_Note_Velocity": { value: 127, offset: 996 },
        "Controller_Key_14_Tilt_Return_Value": { value: 63, offset: 999 },
        "Controller_Key_14_Pressure_Return_Value": { value: 0, offset: 1002 }, // 00 at 1005
        "Controller_Key_14_Toggle_Control_Number": { value: 38, offset: 1008 },
        "Controller_Key_14_Toggle_Value": { value: 127, offset: 1011 },
        "Controller_Key_14_Toggle_Return_Value": { value: 0, offset: 1014 },
        "Controller_Key_14_Toggle_On_Off": { value: 0, offset: 1017 },
        "Controller_Key_15_Mode_Pressure_Note": "Normal",
        "Controller_Key_15_Controller_Layer_Enable_Disable": { value: 0, offset: 1020 },
        "Controller_Key_15_Keyboard_Layer_Enable_Disable": { value: 1, offset: 1023 },
        "Controller_Key_15_Note_Number": { value: 63, offset: 1026 }, // 00 at 1029
        "Controller_Key_15_Pressure_Control_Number": { value: 90, offset: 1032 },
        "Controller_Key_15_Tilt_Control_Number": { value: 91, offset: 1035 },
        "Controller_Key_15_Channel": { value: 0, offset: 1038 },
        "Controller_Key_15_Note_Velocity": { value: 127, offset: 1041 },
        "Controller_Key_15_Pressure_Return_Value": { value: 0, offset: 1044 },
        "Controller_Key_15_Tilt_Return_Value": { value: 63, offset: 1047 },
        "Controller_Key_15_Toggle_Control_Number": { value: 39, offset: 1050 }, // 00 at 1053
        "Controller_Key_15_Toggle_Value": { value: 127, offset: 1056 },
        "Controller_Key_15_Toggle_Return_Value": { value: 0, offset: 1059 },
        "Controller_Key_15_Toggle_On_Off": { value: 0, offset: 1062 },
        "Controller_Key_16_Mode_Pressure_Note": "Normal",
        "Controller_Key_16_Controller_Layer_Enable_Disable": { value: 0, offset: 1065 },
        "Controller_Key_16_Keyboard_Layer_Enable_Disable": { value: 1, offset: 1068 },
        "Controller_Key_16_Note_Number": { value: 64, offset: 1071 },
        "Controller_Key_16_Pressure_Control_Number": { value: 92, offset: 1074 }, // 00 at 1077
        "Controller_Key_16_Tilt_Control_Number": { value: 93, offset: 1080 },
        "Controller_Key_16_Channel": { value: 0, offset: 1083 },
        "Controller_Key_16_Note_Velocity": { value: 127, offset: 1086 },
        "Controller_Key_16_Pressure_Return_Value": { value: 0, offset: 1089 },
        "Controller_Key_16_Tilt_Return_Value": { value: 63, offset: 1092 },
        "Controller_Key_16_Toggle_Control_Number": { value: 40, offset: 1095 },
        "Controller_Key_16_Toggle_Value": { value: 127, offset: 1098 }, // 00 at 1101
        "Controller_Key_16_Toggle_Return_Value": { value: 0, offset: 1104 },
        "Controller_Key_16_Toggle_On_Off": { value: 0, offset: 1107 },
        "Controller_Key_17_Mode_Pressure_Note": "Normal",
        "Controller_Key_17_Controller_Layer_Enable_Disable": { value: 0, offset: 1110 },
        "Controller_Key_17_Keyboard_Layer_Enable_Disable": { value: 1, offset: 1113 },
        "Controller_Key_17_Note_Number": { value: 65, offset: 1116 },
        "Controller_Key_17_Pressure_Control_Number": { value: 94, offset: 1119 },
        "Controller_Key_17_Tilt_Control_Number": { value: 95, offset: 1122 }, // 00 at 1125
        "Controller_Key_17_Channel": { value: 0, offset: 1128 },
        "Controller_Key_17_Note_Velocity": { value: 127, offset: 1131 },
        "Controller_Key_17_Pressure_Return_Value": { value: 0, offset: 1134 },
        "Controller_Key_17_Tilt_Return_Value": { value: 63, offset: 1137 },
        "Controller_Key_17_Toggle_Control_Number": { value: 41, offset: 1140 },
        "Controller_Key_17_Toggle_Value": { value: 127, offset: 1143 },
        "Controller_Key_17_Toggle_Return_Value": { value: 0, offset: 1146 }, // 00 at 1149
        "Controller_Key_17_Toggle_On_Off": { value: 0, offset: 1152 },
        "Controller_Key_18_Mode_Pressure_Note": "Normal",
        "Controller_Key_18_Controller_Layer_Enable_Disable": { value: 0, offset: 1155 },
        "Controller_Key_18_Keyboard_Layer_Enable_Disable": { value: 1, offset: 1158 },
        "Controller_Key_18_Note_Number": { value: 66, offset: 1161 },
        "Controller_Key_18_Pressure_Control_Number": { value: 96, offset: 1164 },
        "Controller_Key_18_Tilt_Control_Number": { value: 97, offset: 1167 },
        "Controller_Key_18_Channel": { value: 0, offset: 1170 }, // 00 at 1173
        "Controller_Key_18_Note_Velocity": { value: 127, offset: 1176 },
        "Controller_Key_18_Pressure_Return_Value": { value: 0, offset: 1179 },
        "Controller_Key_18_Tilt_Return_Value": { value: 63, offset: 1182 },
        "Controller_Key_18_Toggle_Control_Number": { value: 42, offset: 1185 },
        "Controller_Key_18_Toggle_Value": { value: 127, offset: 1188 },
        "Controller_Key_18_Toggle_Return_Value": { value: 0, offset: 1191 },
        "Controller_Key_18_Toggle_On_Off": { value: 0, offset: 1194 }, // 00 at 1197
        "Controller_Key_19_Mode_Pressure_Note": "Normal",
        "Controller_Key_19_Controller_Layer_Enable_Disable": { value: 0, offset: 1200 },
        "Controller_Key_19_Keyboard_Layer_Enable_Disable": { value: 1, offset: 1203 },
        "Controller_Key_19_Note_Number": { value: 67, offset: 1206 },
        "Controller_Key_19_Pressure_Control_Number": { value: 98, offset: 1209 },
        "Controller_Key_19_Tilt_Control_Number": { value: 99, offset: 1212 },
        "Controller_Key_19_Channel": { value: 0, offset: 1215 },
        "Controller_Key_19_Note_Velocity": { value: 127, offset: 1218 }, // 00 at 1221
        "Controller_Key_19_Pressure_Return_Value": { value: 0, offset: 1224 },
        "Controller_Key_19_Tilt_Return_Value": { value: 63, offset: 1227 },
        "Controller_Key_19_Toggle_Control_Number": { value: 43, offset: 1230 },
        "Controller_Key_19_Toggle_Value": { value: 127, offset: 1233 },
        "Controller_Key_19_Toggle_Return_Value": { value: 0, offset: 1236 },
        "Controller_Key_19_Toggle_On_Off": { value: 0, offset: 1239 },
        "Controller_Key_20_Mode_Pressure_Note": "Normal",
        "Controller_Key_20_Controller_Layer_Enable_Disable": { value: 0, offset: 1242 }, // 00 at 1245
        "Controller_Key_20_Keyboard_Layer_Enable_Disable": { value: 1, offset: 1248 },
        "Controller_Key_20_Note_Number": { value: 68, offset: 1251 },
        "Controller_Key_20_Pressure_Control_Number": { value: 100, offset: 1254 },
        "Controller_Key_20_Tilt_Control_Number": { value: 101, offset: 1257 },
        "Controller_Key_20_Channel": { value: 0, offset: 1260 },
        "Controller_Key_20_Note_Velocity": { value: 127, offset: 1263 },
        "Controller_Key_20_Pressure_Return_Value": { value: 0, offset: 1266 }, // 00 at 1269
        "Controller_Key_20_Tilt_Return_Value": { value: 63, offset: 1272 },
        "Controller_Key_20_Toggle_Control_Number": { value: 44, offset: 1275 },
        "Controller_Key_20_Toggle_Value": { value: 127, offset: 1278 },
        "Controller_Key_20_Toggle_Return_Value": { value: 0, offset: 1281 },
        "Controller_Key_20_Toggle_On_Off": { value: 0, offset: 1284 },
        "Controller_Key_21_Mode_Pressure_Note": "Normal",
        "Controller_Key_21_Controller_Layer_Enable_Disable": { value: 0, offset: 1287 },
        "Controller_Key_21_Keyboard_Layer_Enable_Disable": { value: 1, offset: 1290 }, // 00 at 1293
        "Controller_Key_21_Note_Number": { value: 69, offset: 1296 },
        "Controller_Key_21_Pressure_Control_Number": { value: 102, offset: 1299 },
        "Controller_Key_21_Tilt_Control_Number": { value: 103, offset: 1302 },
        "Controller_Key_21_Channel": { value: 0, offset: 1305 },
        "Controller_Key_21_Note_Velocity": { value: 127, offset: 1308 },
        "Controller_Key_21_Pressure_Return_Value": { value: 0, offset: 1311 },
        "Controller_Key_21_Tilt_Return_Value": { value: 63, offset: 1314 }, // 00 at 1317
        "Controller_Key_21_Toggle_Control_Number": { value: 45, offset: 1320 },
        "Controller_Key_21_Toggle_Value": { value: 127, offset: 1323 },
        "Controller_Key_21_Toggle_Return_Value": { value: 0, offset: 1326 },
        "Controller_Key_21_Toggle_On_Off": { value: 0, offset: 1329 },
        "Controller_Key_22_Mode_Pressure_Note": "Normal",
        "Controller_Key_22_Controller_Layer_Enable_Disable": { value: 0, offset: 1332 },
        "Controller_Key_22_Keyboard_Layer_Enable_Disable": { value: 1, offset: 1335 },
        "Controller_Key_22_Note_Number": { value: 70, offset: 1338 }, // 00 at 1341
        "Controller_Key_22_Pressure_Control_Number": { value: 104, offset: 1344 },
        "Controller_Key_22_Tilt_Control_Number": { value: 105, offset: 1347 },
        "Controller_Key_22_Channel": { value: 0, offset: 1350 },
        "Controller_Key_22_Note_Velocity": { value: 127, offset: 1353 },
        "Controller_Key_22_Pressure_Return_Value": { value: 0, offset: 1356 },
        "Controller_Key_22_Tilt_Return_Value": { value: 63, offset: 1359 },
        "Controller_Key_22_Toggle_Control_Number": { value: 46, offset: 1362 }, // 00 at 1365
        "Controller_Key_22_Toggle_Value": { value: 127, offset: 1368 },
        "Controller_Key_22_Toggle_Return_Value": { value: 0, offset: 1371 },
        "Controller_Key_22_Toggle_On_Off": { value: 0, offset: 1374 },
        "Controller_Key_23_Mode_Pressure_Note": "Normal",
        "Controller_Key_23_Controller_Layer_Enable_Disable": { value: 0, offset: 1377 },
        "Controller_Key_23_Keyboard_Layer_Enable_Disable": { value: 1, offset: 1380 },
        "Controller_Key_23_Note_Number": { value: 71, offset: 1383 },
        "Controller_Key_23_Pressure_Control_Number": { value: 106, offset: 1386 }, // 00 at 1389
        "Controller_Key_23_Tilt_Control_Number": { value: 107, offset: 1392 },
        "Controller_Key_23_Channel": { value: 0, offset: 1395 },
        "Controller_Key_23_Note_Velocity": { value: 127, offset: 1398 },
        "Controller_Key_23_Pressure_Return_Value": { value: 0, offset: 1401 },
        "Controller_Key_23_Tilt_Return_Value": { value: 63, offset: 1404 },
        "Controller_Key_23_Toggle_Control_Number": { value: 47, offset: 1407 },
        "Controller_Key_23_Toggle_Value": { value: 127, offset: 1410 }, // 00 at 1413
        "Controller_Key_23_Toggle_Return_Value": { value: 0, offset: 1416 },
        "Controller_Key_23_Toggle_On_Off": { value: 0, offset: 1419 },
        "Controller_Key_24_Mode_Pressure_Note": "Normal",
        "Controller_Key_24_Controller_Layer_Enable_Disable": { value: 0, offset: 1422 },
        "Controller_Key_24_Keyboard_Layer_Enable_Disable": { value: 1, offset: 1425 },
        "Controller_Key_24_Note_Number": { value: 72, offset: 1428 },
        "Controller_Key_24_Pressure_Control_Number": { value: 108, offset: 1431 },
        "Controller_Key_24_Tilt_Control_Number": { value: 109, offset: 1434 }, // 00 at 1437
        "Controller_Key_24_Channel": { value: 0, offset: 1440 },
        "Controller_Key_24_Note_Velocity": { value: 127, offset: 1443 },
        "Controller_Key_24_Pressure_Return_Value": { value: 0, offset: 1446 },
        "Controller_Key_24_Tilt_Return_Value": { value: 63, offset: 1449 },
        "Controller_Key_24_Toggle_Control_Number": { value: 48, offset: 1452 },
        "Controller_Key_24_Toggle_Value": { value: 127, offset: 1455 },
        "Controller_Key_24_Toggle_Return_Value": { value: 0, offset: 1458 }, // 00 at 1461
        "Controller_Key_24_Toggle_On_Off": { value: 0, offset: 1464 },
        "Controller_Bend_Pad_00_Mode_Pressure_Note": "Normal",
        "Controller_Bend_Pad_00_Controller_Layer_Enable_Disable": { value: 0, offset: 1467 },
        "Controller_Bend_Pad_00_Keyboard_Layer_Enable_Disable": { value: 1, offset: 1470 },
        "Controller_Bend_Pad_00_Note_Number": { value: 127, offset: 1473 },
        "Controller_Bend_Pad_00_Pressure_Control_Number": { value: 110, offset: 1476 },
        "Controller_Bend_Pad_00_Tilt_Control_Number": { value: 111, offset: 1479 },
        "Controller_Bend_Pad_00_Channel": { value: 0, offset: 1482 }, // 00 at 1485
        "Controller_Bend_Pad_00_Note_Velocity": { value: 127, offset: 1488 },
        "Controller_Bend_Pad_00_Pressure_Return_Value": { value: 0, offset: 1491 },
        "Controller_Bend_Pad_00_Tilt_Return_Value": { value: 63, offset: 1494 },
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
            'Pressure' : 1, // 5
            'Tilt' : 2, // 6

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
            'Off' : 0,
            'On' : 1,
            'Legato' : 2
        };

        //console.log(value + ' -> ' + typeof value);
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

        //console.log(currValue);
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

            console.log(host + ':' + port + ' -> ' + prop);
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
                            //console.log(prop.value + ' -> ' + value);
                            bytes.inject(intToBytes(value, prop.length), prop.offset);
                        }
                    }
                }
                // Calculate preset checksum
                // TODO: Some things are still missing, we need to add a magic number.
                checksum += 59;

                // Create byte string from preset values + checksum
                checksum = 0; // TODO: test whether the checksum is actually needed
                bytes.inject(intToBytes(checksum, 2, 3).split(' ').join(' 00 00 '), 1668);
                console.log('checksum: ' + intToBytes(checksum, 2, 3));

                host = 'midi';
                address = '/sysex';
                args[0] = { type: 'string', value: bytes.toString() };
                console.log('bytes: ' + bytes);
            }

            // return data if you want the message to be and sent
            return {address, args, host, port}
        }
    };

})();
