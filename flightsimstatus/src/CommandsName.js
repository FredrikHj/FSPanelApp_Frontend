import { insertGlobal } from "glamor";

let dbFlightCommandsName = {
    CENTER_PEDESTAL: {
        HGSHUD: [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'ENTER', 'MODE', 'BLANK', 'STBY', 'CLR', 'RNW', 'BRIGHT +', 'G/S', 'DIM -', 'Up', 'Ner', 'TEST'
        ],
        Radios: {
            NAV: {
                Active: 'Active', Standby: 'Standby', FreqAdd: 'Freq +', FreqLess: 'Freq -', NavSet: '<-->', 
                Nav1: 'NAV1', Nav2: 'NAV2', StatusLight:'Läges Lampor', StatusSpdt: 'Läges Väljare', Test: 'Test', 
            },
            COM: {
                Com1: 'COM1', Com2: 'COM2', Com3: 'COM3', Active: 'Active', Standby: 'Standby', FreqAdd: 'Freq +', FreqLess: 'Freq -', ComSet: '<-->',
                StatusLight:'Läges Lampor', StatusSpdt: 'Läges Väljare', Test: 'Test', 
            }
        },
        ADF: {
            adf: 'ADF', Ant: 'ANT', Active: 'Active', Standby: 'Standby', FreqAdd: 'Freq +', Freq: 'FreqLess', FreqSet: '<-->', 
            Test: 'Test', Knob1: 'Knob Inners', Knob2: 'Knob Mellan', Knob3: 'Knob Ytterst',
        },
        SECAL: {
            StatusLight: [
                'VHF 1', 'VHF 2', 'VHF 3', 'NF1', 'NF2'
            ],
            Generall:  [
                'VHF 1', 'VHF 2', 'VHF 3', 'NF1', 'NF2'
            ]
        },
        ATC: {},
        FIRE_panel: {},
        FLT_DK_DOOR: {},
        FIRE_panel: {},
        FLT_DK_DOOR: {},
        Radios: {},
        EEC1_2: {},
        WXRDR: {},
        MIC Selector: {},
        Stab_Trim: {},

        HGS_HUD: {
            Nr0: '0', Nr1: '1', Nr2: '2', Nr3: '3', Nr4: '4', Nr5: '5', Nr6: '6', Nr7: '7', Nr8: '8', Nr9: '9', Blank: 'BLANK', 
            Enter: 'ENTER', Mode: 'MODE', Clr: 'CLR', Rnw: 'RNW', StbRnw: 'STBY RNW', BrightAdd: 'BRIGHT +', DimLess: 'DIM -', Gs: 'G/S', Test: 'TEST'
        }, 

        TCAS: {
            TCas: 'TCAS', Stb: 'STBY', AltRptigOff: 'ALT RPTIG OFF', IPNde: 'IPNDE', TaOnly: 'TA ONLY', TaRa: 'TA-RA'
        },
        Throttle: {
            Throttle1: Throttle 1
            Throttle1Rev: Throttle 1 - Reverser
            Throttle2: Throttle 2
            Throttle2Rev: Throttle 2 - Reverser
            Engine1CutOff: Engine 1 - (Cutoff)
            Engine2CutOff: Engine 2 - (Cutoff)
            Parking Brake
        },


    },

    OVERHEAD_LOWER_PANEL: {
        AC_Power: {
            RotaryLeft: [
                'STBY PWR', 'BAT BUS', 'BAT', 'AUX BAT', 'TR1', 'TR2', 'TR3', 'TEST'
            ],
            RotaryRight: [
                'STBY PWR', 'GRD', 'PWR', 'GEN1', 'APU GEN', 'GEN2', 'INV', 'TEST'
            ],
            Maint: 'MAINT', Bat: 'BAT', CabUtil: 'CAB/UTIL', IfePassSeat: 'IFE/PASS SEAT', On: 'ON', Off: 'OFF'
        },
        Air_Condition: {
            RecircFans: {
                L: 'L RECIRC FAN', R: 'R RECIRC FAN', Off: 'OFF', Auto: 'AUTO' 
            },
            Ovht: {
                Ovht: 'OVHT', Test: 'TEST'
            },
            WingAntiICE: {
                WINGaNTIice: 'Wing - Anti ICE', PackL: 'L Pack', PackR: 'R Pack', L: 'L', R: 'R', On: 'ON', Off: 'OFF', Auto: 'AUTO', High: 'HIGH'
            },
            Isolation_Valve: { 
                    Isolation_Valve: 'ISOLATION VALVE', Close: 'CLOSE', Auto: 'Auto', Open: 'OPEN'
            },    
            ApuBled: {
                ApuBled: 'APU BLED', On: 'On', Off: 'OFF'
            },
            Trip: {
                trip: 'TRIP', Test: 'TEST',
            }
        },
        ALT_Auto_Manual: {
            ManualVALVE: 'Manual - VALVE', Auto: 'AUTO', Alt: 'ALTN', Man: 'MAN',
            FltAlt: 'FLT ALT', LandAlt: 'LAND ALT', ManualVALVE: [
                    'CLOSE', 'OFF', 'OPEN'
            ]
        },
        AIR_TEMP: {},
        ALTERNATIVE_FLAPS: {},
        ALT_HORN_CUTOUT: {},
        ATTEND: {},
        FLTCONTROL: {},
        EQUIP_COOLING: {},
        FLTCONTROL: {},
        FASTEN_SEATBELTS: {},
        Cockpit_Voice_Redorder: {},
        Flight_Recorder: {},
        Crew_Pass_Oxygen: {},
        PSEU: {},
        Service_inerphone: {},
        WLAN: {},
        Anti_Ice: {
            Eng1: 'Eng 1', Eng1: 'Eng 2', AntiIce: 'Anti-Ice', Off: 'OFF', On: 'ON', Wing: 'Wing'       
        },
        Navigation: {
            VhfNav: 'VHF NAV', Irs: 'IRS', Fmc: 'FMC'
        },
        FrontPanel:{

        }
    },
    INSTRUMENT_PANEL: {
        CenterControl: {
            AutoBrake: {
                Rto: 'RTO', Off: 'OFF', Nr1: '1', Nr2: '2', Nr3: '3', Max: 'MAX'
            },
            N1: {
                Nr1: '1', Nr2: '2', Auto: 'Auto', Both: 'Both'
            },
            SPDRef: {
                Set: 'SET', Auto: 'AUTO', V1: 'V1', Vr: 'VR', Wt: 'WT', Vref: 'VREF', ArrowLeft: '<--', 
            },      
            FuelFlow: {
                FuelFlow: 'FuelFlow', Reset: 'Reset', Rate: 'Rate', Used: 'used'
            },
            SysSet: 'SYS Set', CR_Set: 'C/R Set', N1Set: 'N1 SET', SpeedBrakePoss: 'Speedbrake Poss',
        },

    },
    LIGHT_CONTROL: {
        Cockpitlights: {
            Backgrund: 'BACKGROUND', AfdsFlood: 'AFDS FLOOD', Flood: 'FLOOD', Instrumentpanel: 'INSTRUMENTPANEL', Panel: 'PANEL', 
            CompassLight: 'COMPASS LIGHT', DomeWhite: 'DOME WHITE',
            CircuitBreaker: {
                CircuitBreaker: 'Circuit Breaker', CockpitLight: 'Cockpit light', PanelLight: 'Panel light', 
            },
            Dim: 'DIM', Off: 'OFF', Bright: 'BRIGHT', //AntiIce: 'Anti - Ice', FlapInhbit: 'FLAP INHBIT', ?: '?', Norm: 'NORM',      
        },
        Instrument_Panel: {
            MainPanel: 'Main Panel',            
            UpperDU: 'UPPER DU',
            OutBdDu: 'OUTBD DU',
            InBdDu: 'INBD DU', 'Innre knob Yttre', 'knob',
            LowerDu: 'LOWER DU', 'Innre knob', 'Yttre knob',
        },
    },    
};

export default dbFlightCommandsName;