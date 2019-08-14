let dbFlightCommandsName = {
    CENTER_PEDESTAL: {
        HGSHUD: {
            Nr0: '0', Nr1: '1', Nr2: '2', Nr3: '3', Nr4: '4', Nr5: '5', Nr6: '6', Nr7: '7', Nr8: '8', Nr9: '9', Enter: 'ENTER',
            Mode: 'MODE', Blank: 'BLANK', Stb: 'STBY', Clr: 'CLR', Rnw: 'RNW', BrightAdd: 'BRIGHT +', Gs: 'G/S', DimLess: 'DIM -',
            Up: 'Up', Dn: 'Ner', Test: 'TEST'
        },
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
           Vhf1: 'VHF 1', Vhf2: 'VHF 2', Vhf3: 'VHF 3', Nf1: 'NF1', Nf2: 'NF2'
        },
        ATC: {},
        FIRE_panel: {},
        FLT_DK_DOOR: {},
        FIRE_panel: {},
        FLT_DK_DOOR: {},
        Radios: {},
        EEC1_2: {},
        WXRDR: {},
        MIC_Selector: {},
        Stab_Trim: {},

        HGS_HUD: {
            Nr0: '0', Nr1: '1', Nr2: '2', Nr3: '3', Nr4: '4', Nr5: '5', Nr6: '6', Nr7: '7', Nr8: '8', Nr9: '9', Blank: 'BLANK', 
            Enter: 'ENTER', Mode: 'MODE', Clr: 'CLR', Rnw: 'RNW', StbRnw: 'STBY RNW', BrightAdd: 'BRIGHT +', DimLess: 'DIM -', Gs: 'G/S', Test: 'TEST'
        }, 

        TCAS: {
            TCas: 'TCAS', Stb: 'STBY', AltRptigOff: 'ALT RPTIG OFF', IPNde: 'IPNDE', TaOnly: 'TA ONLY', TaRa: 'TA-RA'
        },
        Engine: {
            Engine1: 'Engine 1', Engine2: 'Engine 2', Shutdown: 'Shutdown', ParkingBrake: 'Parking Brake'
        },
    },
    OVERHEAD_UPEAR_PANEL: {
        IRS: {
            DsplSel: 'DSPL SEL', DsplSelYttreKnob: 'DSPL SEL Yttr Knob', BrightArrowL: '<-- BRT', BrightArrowR: 'BRT -->',
            DsplSelInnreKnob: 'DSPL SEL Innre Knob', Test: 'Test', TjGs: 'TK_GS', Pros: 'PPOS', Wind: 'WIND', HdgStr: 'HDG_STS',
            Nr0: '0', Nr1: '1', Nr2: '2 = N', Nr3: '3', Nr4: '4 = W',	Nr5: '5 = H', Nr6: '6 = E', Nr7: '7',	Nr8: '8 = S',
            Nr9: '9', Clr: 'CLR', Ent: 'ENT', SysDspl: 'SYS DSPL', AlignBiggLetter: 'ALIGN', AlignSmallLetter: 'Align',
            Nav: 'Nav', Att: 'Att', IrsDisplay: 'IRS Display',            
        },
        Test: {
            MachAirSpeddWT: 'MACH AIRSPEED - WARNING TEST', StallWT: 'STALL WARNING TEST', LeDevTest: 'LE DEVICES - TEST',
        },
        MICSelector: {},
        Engine_1_2_Reverser: {},
    },

    OVERHEAD_LOWER_PANEL: {
        AC_Power: {
            RotaryLeft: {
                StbPower: 'STBY PWR', BatBus: 'BAT BUS', Bat: 'BAT', AuxBat: 'AUX BAT', Tr1: 'TR1', Tr2: 'TR2', Tr3: 'TR3', Test: 'TEST'
            },
            RotaryRight: {
                StbPower: 'STBY PWR', Grd: 'GRD', Pwr: 'PWR', Gen1: 'GEN1', Gen2: 'GEN2',  ApuGen: 'APU GEN', Inv: 'INV', Test: 'TEST'
            },
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
        EMER_EXT_LIGHT: {},
        FLTCONTROL: {},
        FASTEN_SEATBELTS: {},
        Cockpit_Voice_Redorder: {},
        Flight_Recorder: {},
        Crew_Pass_Oxygen: {},
        PSEU: {},
        Service_inerphone: {},
        WLAN: {},
        SPOILER: {},
        GRDCALL: {},
        
        Anti_Ice: {
            Eng1: 'Eng 1', Eng1: 'Eng 2', AntiIce: 'Anti-Ice', Wing: 'Wing'       
        },
        Navigation: {
            VhfNav: 'VHF NAV', Irs: 'IRS', Fmc: 'FMC'
        },
        Probe_Heat: {
        //    Heat: Heat
        },
        Window_Heat: {		
           //Left Side Left FWD Right FWD Right Side
           Ovht: 'OVHT', PwrTest: 'PWR TEST',

        },
        Elektriska_pumpar: {                        
            Eng: 'ENG', Elec: 'ELEC'
        },
        Power: {
            GrdPwr: 'GRD PWR', Gen: 'Gen', ApuGen: 'APU Gen', BusTrans: 'Bus Trans', Disconnect: 'Disconnect', StbPower: 'Stanby Power',
        },
        Stb_Power: {},
        Fuel_Pumps: {
            CrossFeed: 'Cross Feed', Ctr: 'CTR', FuelPumps: 'Fuel pumps', Aft: 'AFT', Fwvd: 'FWD'
        },
        Displays: {
            ControlPanel: {
                ControlPanel: 'Control Panel', BothOn: 'BOTH ON', Normal: 'NORMAL'
            },
            Source: {
                Source: 'SOURCE', AllOn: 'ALL ON', Auto: 'AUTO'
            } 
            
        },
        FrontPanel: {
            ExtLights: {
                Landing_Light: {
                    Retract: 'retract', Extend: 'extend', Retractable: 'Retractable', Fixed: 'Fixed', RnwTuroff: 'Runway Turnoff',
                    Logo: 'Logo', Taxi: 'Taxi', PossLight: {
                        Pos: 'POS', StrobeSteady: 'Strobe & Steady', Steady: 'Steady'
                    },
                    AntiColl: 'Anti coll', Wing: 'Wing', WheelWell: 'Wheel Well'
                },
            },
            Engine: 'Engine', Starter: 'Starter', Ign: 'IGN', ApuStart: 'APU Start', Start: 'Start',
            
            
            Wipers: {
                Wipers: 'Wiper', Park: 'PARK', Int: 'INT', Low: 'LOW', High: 'HIGH'
            }
        },
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
        Mcp: {
            VNav: 'VNAV', LNav: 'LNAV',Speed: 'Speed',Co: 'C/O',N1: 'N1', CmdA: 'CMD A', CmdB: 'CMD B', 
            CswA: 'CWS A', CswB: 'CWS B', Ias_Mach: 'IAS/MACH', SpeedIntv: 'SPD INTV', LvlChg: 'LVL CHG', 
            Heading: 'Heading', BankEagle: 'Bank Agle', Nr10: '10', Nr15: '15', Nr20: '20', Nr25: '25', Nr30: '30',
            Vs: 'V/S', VorLock: 'VOR LOC', App: 'APP', HdgSel: 'HDG SEL', AtHold: 'AT HOLD', AltIntv: 'ALT INTV', 
            FlightDirector: 'Flight Director', FDMaster: 'Master', DisengageAp: 'Disengage AP', Hgs: 'HGS',
            Up: 'UP', Dn: 'DN'              
        },
        Efis: {
            Baro: 'BARO', In: 'IN', Hpa: 'HPA', Maps: 'MAPS', Ctr: 'CTR', Tfc: 'TFC', Vor1: 'VOR 1', Adf1: 'ADF - 1',
            Vor2: 'VOR 2', Off: 'OFF', Inop: 'INOP', Wpt: 'WPT', Arpt: 'ARPT', Mims: 'MIMS', Rst: 'RST', Std: 
            'STD', Fpv: 'FPV', Wxr: 'WXR', Sta: 'STA', Data: 'DATA', Pos: 'POS', Terr: 'TERR', Mtrs: 'MTRS',
            ModeSide: {
                Pilot: 'PILOT', Fo: 'FO', ModeChoice: 'Läges Väljare',
            },
        },
        Warnings: {
            FireWarning: 'Fire Warning', MasterCaution: 'Master Caution',
        },
        Flaps_Poss: 'Flap poss',
        Landing_Light: {		
            NooseWheel: 'NooseWheel', NooseWheelUp: 'Up', NooseWheelDn: 'Down', MainWheel: 'MainWheel', MainWheelLUp: 'Left Up', 
            MainWheelRUp: 'Right Up', MainWheelLDn: 'Left Down', MainWheelRDn: 'Right Down',
        },
        StatusLight: 'Läges lampa', 
        TEST: {
            Test: 'TEST', Nr1: '1', Nr2: '2', LightTest: 'LIGHT TEST', Bright: 'BRIGHT', Dim: 'DIM'
        },
        MONITORS: {
            MainPanelDu: 'Main Panel Dus', /*(Monitor 2?)*/	OutBdPfd: 'OUTBD PFD', Norm: 'NORM', Pfd: 'PFD', Mfd: 'MFD',
            LowerDU: 'Lower DU', /*(Monitor 1?)*/ EngPri: 'ENG PRI', Norm: 'NORM', Nd: 'ND'
        },
},
    LIGHT_CONTROL: {
        Cockpitlights: {
            Backgrund: 'BACKGROUND', AfdsFlood: 'AFDS FLOOD', Flood: 'FLOOD', Instrumentpanel: 'INSTRUMENTPANEL', Panel: 'PANEL', 
            CompassLight: 'COMPASS LIGHT', DomeWhite: 'DOME WHITE',
            CircuitBreaker: {
                CircuitBreaker: 'Circuit Breaker', CockpitLight: 'Cockpit light', PanelLight: 'Panel light', 
                Dim: 'DIM', Off: 'OFF', Bright: 'BRIGHT', //AntiIce: 'Anti - Ice', FlapInhbit: 'FLAP INHBIT', ?: '?', Norm: 'NORM',      
                Instrument_Panel: {
                    MainPanel: 'Main Panel', UpperDU: 'UPPER DU', LowerDu: 'LOWER DU', OutBdDu: 'OUTBD DU', InBdDu: 'INBD DU', InnerKnob: 'Innre knob', OuterKnob: 'Yttre knob',
                },
            },
        },
    },
    Generall: {
        NooseWheel: 'Noose Wheel', Off: 'OFF', On: 'ON', Nr1: '1', Nr2: '2', A: 'A', B: 'B', Left: 'Left', Right: 'Right', Auto: 'AUTO', Bat: 'BAT',
    },
};

export default dbFlightCommandsName;