import { insertGlobal } from "glamor";

let dbFlightCommandsName = {
    CENTER_PEDESTAL: {
        HGSHUD: [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'ENTER', 'MODE', 'BLANK', 'STBY', 'CLR', 'RNW', 'BRIGHT +', 'G/S', 'DIM -', 'Up', 'Ner', 'TEST'
        ],
        Radios: {
            NAV: [
                'Active', 'Standby', 'Freq +', 'Freq -', '<-->', 'Test', 'NAV1', 'NAV2', 'Läges Lampor', 'Läges väljare'
            ],
            COM: [
                'Active', 'Standby', 'Freq +', 'Freq -', '<-->', 'Test', 'COM1', 'COM2', 'COM3', 'Läges Lampor', 'Läges Väljare'
            ]
        },
        ADF: {
            adf: 'ADF', Ant: 'ANT', Active: 'Active', Standby: 'Standby', FreqAdd: 'Freq +', Freq: 'FreqLess', FreqSet: '<-->', Test: 'Test', 
            Knob1: 'Knob Inners', Knob2: 'Knob Mellan', Knob3: 'Knob Ytterst',
        },
        SECAL: {
            StatusLight: [
                'VHF 1', 'VHF 2', 'VHF 3', 'NF1', 'NF2'
            ],
            Generall:  [
                'VHF 1', 'VHF 2', 'VHF 3', 'NF1', 'NF2'
            ]
        },
    }

    OVERHEAD_LOWER_PANEL: {
        ACPower: {
            RotaryLeft: [
                STBY PWR / BAT BUS / BAT / AUX BAT / TR1 / TR2 / TR3 / TEST
            ],
            RotaryRight: [
                STBY PWR / GRD PWR / GEN1 / APU GEN / GEN2 / INV / TEST
            ],
            Maint: 'MAINT', Bat: 'BAT', CabUtil: 'CAB/UTIL', IfePassSeat: 'IFE/PASS SEAT', On: 'ON', Off: 'OFF'
        },
        AirCondition: {
            RecPacks: {
                L: 'L REC PACK', R: 'R REC PACK', Off: 'OFF', Auto: 'AUTO' 
            },

            Wing Anti ICE - L Pack
            	OFF / AUTO / HIGH
            
            Isolation_Valve: { 
                    Isolation_Valve: 'ISOLATION VALVE', Close: 'CLOSE', 'Auto', Open: 'OPEN'
            },    
            Wing:. Anti ICE- R Pack
            		OFF / AUTO / HIGH
            
            Wing:. Anti ICE- L Pack
            		on / off
            
            ApuBled: {
                ApuBled: 'APU BLED', On: 'On', Off: 'OFF'
            },
            Ovht: {
                Ovht: 'OVHT', Test: 'TEST'
            },
            Trip: {
                trip: 'TRIP', Test: 'TEST',
            }

        },

        


    }

    COMPONENTS: {
        SPDT: [
            'NORMAL BAT', 'ON', 'OFF', 'OPEN', 'CLOSE', 'MOM', 'AUTO', ' HIGH', 'START', { 
                EngSpdt: [ 
                    'ENGINE-STARTER', 'GRD', 'CONT', 'FLT', 'BOTH', 'IGN' 
                ],
                DomWhite: ['DIM', 'OFF', 'BRIGHT']

            }
        ],
        ParkingBrake: {
            name: 'Parking Brake', on: 'ON', off: 'OFF'
        },


        AntiIce: [
            'Wing Anti-Ice', { Eng: ['1', '2']}
        ],         
        ProbeHeat: [
            'Left', 'Right'
        ],
        WindowHeat: [
            'FWD', 'Side', 'OVHT', 'PWR TEST'
        ],

        CockpitLights: [
            'Ice FLAP', 'INHBIT', 'Ice Gear', 'Ice Terr', 'Sys Test', 'COMPASS LIGHT'
        ],
        ACPower: [
            'Maint', 'Bat', 'CAB/UTIL', 'IFE/PASS SEAT'
        ],
        Elektriskapumpar: [
            'ENG', 'ELEC'
        ],
        GroundPower: [
            'GRD PWR', 'Bus Trans', 'Gen', 'APU Gen', 'Disconnect', 'Stanby Power'
        ],
        FuelPumps: [
            'CTR', 'Fuel pumps', 'Cross Feed', 'FWD', 'AFT'
        ],
        Navigation: [
            'VHF NAV', 'IRS', 'FMC'
        ],
        Displays: [
            'Control Panel', 'Source'
        ],
        PushBtn: [
            'GRD CALL'
        ],


        OVERHEAD_LOWER_PANEL: {
            ExternalLights: [
                'APU Start', 'Engine starter', 'Engine', 'IGN', 'Rotary switch', 'L', 'R'
            ],
            Generall: [
                'Cockpit Video Sys', 'GRD CALL', 'Left' , 'Right', '1', '2', 'A', 'B', {
                 }
            ],
        },


        RotarySpdt: {
            Source: [
                'ALL ON 1', 'AUTO', 'ALL ON 2'
            ],
            Manual_VALVE: [
                'Auto', 'ALTN', 'Man'
            ],
            Wiper: [
                'PARK', 'INT', 'LOW', 'HIGH'
            ],
            ALTAutoManual: [
                'FLT ALT', 'LAND ALT', { 
                    ManualVALVE: [
                        'CLOSE', 'OFF', 'OPEN'
                    ]
                }
            ],
        }
    },
    // Diff panels
    PANELS: {

        CenterControl: {
            AutoBrake: [
                'RTO', 'OFF', '1', '2', '3', 'MAX'
            ],
            N1: [
                '2', '1', 'Auto', 'Both'
            ],
            SPDRef: [
                'SET', 'AUTO', 'V1', 'VR', 'WT', 'VREF', '<--', 'N1 Set', 'SYS Set', 'C/R Set'
            ],      
            FuelFlow: [
                'Reset', 'Rate', 'used'
            ]
        },
        Test: {
            TEST: [
                '1', '2'
            ],
            LIGHT: [
                'TEST', 'BRIGHT', 'DIM'
            ]
        },
        IRS: [
            '1', '2 = N', '3', '4 = W', '5 = H', '6 = E', 'DSPL SEL =  Innre Knob', '7', '8 = S', '9', '0', 'CLR', 'ENT', 'SYS DSPL', {
                ALIGN: [
                    'L', 'R', 'Off', 'Align', 'Nav', 'Att', 'IRS Display', {
                        DSPL: [
                            'DSPL', 'SEL BRT', '<--', '-->', { 
                                DSPLRotary: [
                                    'Test', 'TK_GS', 'PPOS', 'WIND', 'HDG_STS'
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        INSTRUMENT: {
            monitors: {
                Main_Panel_DU: [
                    'OUTBD PFD', 'NORM', 'ENG PRI', 'PFD', 'MFD'
                ],
                Lower_DU: [
                    'ENG', 'PRI', 'NORM', 'ND'
                ]
            },
            MCP: [
                'A/T Arm', 'N1', 'Speed', 'C/O', 'VNAV', 'LNAV', 'VOR LOC', 'SPD INTV', 'LVL CHG', 'HDG SEL', 'APP', 'AT HOLD', 'ALT INTV', 'V/S', 'Vit lampa', 'Course', 'IAS/MACH', 'Heading', 'Altitude', 'Vert Speed', 'Course - Knob', 'IAS/MACH - Knob', 'Heading - Knob', 'Altitude - Knob', 'Vert Speed - Knob', 'CMD A', 'CWS A', 'CMD B', 'CWS B', 'Flight Director', 'MA', 'AP Disconnect', {
                    modeLight: [
                        'Pilot', 'FO'
                    ]
                }
            ],
            EFIS: [
                'FPV', 'Maps', 'Maps', 'MTRS', {
                    radioMode: { 
                        spdt1: [
                            'VOR  1', 'OFF', 'ADF - 1'
                        ], 
                        spdt2: [
                            'VOR 2', 'OFF', 'INOP'
                        ] 
                    },
                    modeLight: [
                        'Pilot', 'FO'
                    ]   
                }, 'WXR', 'STA', 'FO', 'FO', 'WPT', 'ARPT', 'MIMS', 'MIMS', 'BARO', 'DATA', 'POS', 'BARO', 'RST', 'STD', { 
                    TypeVisare: [
                        'APP', 'VOR', 'MAP', 'PLN'
                    ], 
                    TopDistanceVisare: [
                        '5', '10', '20', '40', '80', '160', '320', '640'
                    ],
                    MIMS: [
                        'Radio', 'Baro'
                    ],
                    BARO: [
                        'In', 'HPA'
                    ] 
                }
            ],
            mode: [
                'Pilot', 'FO'
            ]
        }
        // ==============================================================================
    },
    LIGHT_CONTROL: {
        Cockpitlights: [
            'BACKGROUND', 'AFDS FLOOD','FLOOD', 'INSTRUMENTPANEL', 'PANEL', {
                CircuitBreaker: { 
                    Cockpitlight: [
                        'OFF', 'BRIGHT'
                    ],
                    Panellight: [
                        'OFF', 'BRIGHT'
                    ]
                },
                LandingLight: [
                    'Nosewheel', 'Headwheel', 'Up', 'Down'
                ],
            }
        ],
        ExternalLights: [
            'RunwayTurnoff', 'Taxi', 'Logo', 'Anti-Collision', 'Wing', {
                LandingLight: [
                    'retract', 'extend', 'Retractable', 'off', 'fixed'
                ],
                Position: [
                    'Strobe & Steady', 'Off', 'Steady'
                ]
            }
        ],
        INSTRUMENTPANEL: [
            'Main Panel: 2:1', 'UPPER DU', 'OUTBD DU: 2:1', 'INBD DU: 2:1 = Innre knob', 'INBD DU: 2:1 = Yttre knob', 'LOWER DU = Innre knob', 'LOWER DU = Yttre knob'
        ],
    },
    StatusLight: {
        Engine: {
            Shutdown: [
                '1', '2'
            ],   
            Reverser: [
                '1', '2'
            ]
        },
        HGSHUD: [
            'RNW'
        ],

    }, 
    Engine: {
        Shutdown: [
            '1', '2'
        ],
        Reverser: [
            '1', '2'
        ]
    }, 
    
    Generall: ['NoosewheelSteering', 'Flaps Poss', 'Speddbrake Poss'],
    
    Glaresheeld: [
        'Fire Warning', 'Master Caution Warning'
    ],
    LED_SEGMENT: [
    'FLT ALT', 'LAND ALT'
    ],
    LCD_Display: {
        power: [
            'Rotary Switch', 'stb power'
        ],
    }
};

export default dbFlightCommandsName;