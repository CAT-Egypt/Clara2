/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"Draggable.min.js",
            js+"ThrowPropsPlugin.min.js",
            js+"TweenMax.js",
            js+"TweenMax.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'pageContainer',
                            type: 'rect',
                            rect: ['0px', '0px', '1280px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            borderRadius: ["0px", "0px", "0px", "0px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: ""
                        },
                        {
                            id: 'Sections_Bar',
                            symbolName: 'Sections_Bar',
                            type: 'rect',
                            rect: ['114px', '685', '1167', '49', 'auto', 'auto']
                        },
                        {
                            id: 'prevBtn',
                            type: 'image',
                            rect: ['20px', '10px', '57px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Previous.png",'0px','0px']
                        },
                        {
                            id: 'nextBtn',
                            type: 'image',
                            rect: ['1193px', '10px', '57px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Next.png",'0px','0px']
                        },
                        {
                            id: 'plyHome',
                            type: 'image',
                            rect: ['1025px', '5px', '57px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"btnHome.png",'0px','0px']
                        },
                        {
                            id: 'plyIndex',
                            type: 'ellipse',
                            rect: ['920px', '10px', '104px', '52px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['0px', '3px', '105px', '49px', 'auto', 'auto'],
                                text: "index",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "900", "none", "", "break-word", "normal"],
                                textStyle: ["", "", "52px", ""]
                            }]
                        },
                        {
                            id: 'index',
                            symbolName: 'index',
                            type: 'rect',
                            rect: ['0px', '0px', '367', '768', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280', '768', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Slide_00": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'S0_04',
                            opacity: '0.20325175609756',
                            rect: ['4', '82', '1280px', '594px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S0_04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S0_03',
                            rect: ['0', '0', '1284px', '353px', 'auto', 'auto'],
                            clip: 'rect(0px -2px 353px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S0_03.png', '0px', '0px']
                        },
                        {
                            id: 'S0_01',
                            type: 'image',
                            rect: ['64', '83', '265px', '114px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S0_01.png', '-276.265625px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S0_08',
                            rect: ['3', '440', '1281px', '332px', 'auto', 'auto'],
                            clip: 'rect(0px -3px 332px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S0_08.png', '0px', '0px']
                        },
                        {
                            id: 'S0_07',
                            type: 'image',
                            rect: ['1012px', '574px', '184px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S0_07.png', '202.0546875px', '51.9609375px']
                        },
                        {
                            id: 'S0_05',
                            type: 'image',
                            rect: ['834', '394', '139px', '283px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S0_05.png', '0.453125px', '-288.359375px']
                        },
                        {
                            type: 'image',
                            id: 'S0_06',
                            opacity: '0',
                            rect: ['893', '423', '21px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S0_06.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid61",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${S0_04}",
                            '0.20325175609756',
                            '1'
                        ],
                        [
                            "eid63",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S0_03}",
                            [0,-2,353,0],
                            [0,1284,353,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid520",
                            "background-position",
                            1750,
                            250,
                            "swing",
                            "${S0_07}",
                            [202.0546875,51.9609375],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid522",
                            "background-position",
                            1000,
                            500,
                            "easeOutBack",
                            "${S0_05}",
                            [0.453125,-288.359375],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid516",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${S0_01}",
                            [-276.265625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid76",
                            "opacity",
                            1500,
                            250,
                            "linear",
                            "${S0_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S0_08}",
                            [0,-3,332,0],
                            [0,1281,332,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_inside14',
                            type: 'image',
                            rect: ['0', '0', '1281px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside2.jpg', '0px', '0px']
                        },
                        {
                            rect: ['73', '86', '1030px', '124px', 'auto', 'auto'],
                            id: 'S1_03',
                            type: 'image',
                            clip: 'rect(0px 1030px -8px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S1_03.png', '0px', '0px']
                        },
                        {
                            id: 'S1_02',
                            type: 'image',
                            rect: ['140', '29', '31px', '18px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S1_02.png', '0px', '0px']
                        },
                        {
                            rect: ['73', '234', '562px', '317px', 'auto', 'auto'],
                            id: 'S1_04',
                            type: 'image',
                            clip: 'rect(0px -8px 317px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S1_04.png', '0px', '0px']
                        },
                        {
                            rect: ['776', '312', '359px', '136px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S1_10',
                            opacity: '1',
                            clip: 'rect(0px 359px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S1_10.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'G',
                            symbolName: 'G',
                            opacity: '0',
                            rect: ['24', '235', '682', '346', 'auto', 'auto']
                        },
                        {
                            rect: ['578', '462', '97px', '97px', 'auto', 'auto'],
                            id: 'S1_07',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/circleBack.png', '0px', '0px']
                        },
                        {
                            id: 'S1_08',
                            type: 'image',
                            rect: ['598', '482', '51px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/plan.png', '-62.96875px', '72.7421875px']
                        },
                        {
                            rect: ['1085px', '10px', '57px', '57px', 'auto', 'auto'],
                            id: 'btn_info',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_info.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'S2_re',
                            rect: ['0px', '0px', '1280', '768', 'auto', 'auto'],
                            id: 'S2_re'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280px', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: false,
                    data: [
                        [
                            "eid496",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S2_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid302",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${S1_03}",
                            [0,1030,-8,0],
                            [0,1030,124,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid140",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${G}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "clip",
                            500,
                            500,
                            "linear",
                            "${S1_04}",
                            [0,-8,317,0],
                            [0,562,317,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid305",
                            "clip",
                            1500,
                            250,
                            "linear",
                            "${S1_10}",
                            [0,359,0,0],
                            [0,359,136,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid528",
                            "background-position",
                            1250,
                            250,
                            "linear",
                            "${S1_08}",
                            [-62.96875,72.7421875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid108",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${S1_07}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Slide_02": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_inside2',
                            type: 'image',
                            rect: ['0', '0', '1280', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside2.jpg', '0px', '0px']
                        },
                        {
                            id: 'S2_01',
                            type: 'image',
                            rect: ['144', '24', '43px', '18px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_01.png', '0px', '0px']
                        },
                        {
                            rect: ['69', '82', '1030px', '124px', 'auto', 'auto'],
                            id: 'S2_02',
                            type: 'image',
                            clip: 'rect(0px 1030px -8px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S2_02.png', '0px', '0px']
                        },
                        {
                            rect: ['69', '228', '562px', '317px', 'auto', 'auto'],
                            id: 'S2_03',
                            type: 'image',
                            clip: 'rect(0px 0px 317px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S2_03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'G2',
                            symbolName: 'G2',
                            opacity: '0',
                            rect: ['210', '304', '294', '141', 'auto', 'auto']
                        },
                        {
                            rect: ['582', '460', '97px', '97px', 'auto', 'auto'],
                            id: 'S2_06',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/circleBack.png', '0px', '0px']
                        },
                        {
                            id: 'S2_07',
                            type: 'image',
                            rect: ['605', '480', '51px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/plan.png', '-68.5078125px', '67.96875px']
                        },
                        {
                            rect: ['741', '292', '358px', '136px', 'auto', 'auto'],
                            id: 'S2_08',
                            type: 'image',
                            clip: 'rect(0px 358px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S2_08.png', '0px', '0px']
                        },
                        {
                            rect: ['1085px', '10px', '57px', '57px', 'auto', 'auto'],
                            id: 'btn_infoCopy',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_info.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'S2_re',
                            rect: ['0px', '0', '1280', '768', 'auto', 'auto'],
                            id: 'S2_re'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid132",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${S2_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid313",
                            "clip",
                            1250,
                            250,
                            "linear",
                            "${S2_08}",
                            [0,358,-6,0],
                            [0,358,136,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid130",
                            "clip",
                            250,
                            500,
                            "linear",
                            "${S2_03}",
                            [0,0,317,0],
                            [0,562,317,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid308",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S2_02}",
                            [0,1030,-8,0],
                            [0,1030,124,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid138",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${G2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid556",
                            "background-position",
                            1000,
                            250,
                            "linear",
                            "${S2_07}",
                            [-68.5078125,67.96875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid497",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S2_re}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Slide_03": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_inside3',
                            type: 'image',
                            rect: ['0', '0', '1280', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside2.jpg', '0px', '0px']
                        },
                        {
                            rect: ['108', '24', '43px', '18px', 'auto', 'auto'],
                            id: 'S3_01',
                            type: 'image',
                            clip: 'rect(0px 43px 18px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S3_01.png', '0px', '0px']
                        },
                        {
                            rect: ['69', '87', '960px', '132px', 'auto', 'auto'],
                            id: 'S3_02',
                            type: 'image',
                            clip: 'rect(0px 960px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S3_02.png', '0px', '0px']
                        },
                        {
                            rect: ['69', '239', '562px', '290px', 'auto', 'auto'],
                            id: 'S3_03',
                            type: 'image',
                            clip: 'rect(0px 0px 290px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S3_03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'G3',
                            symbolName: 'G3',
                            opacity: '0',
                            rect: ['66', '239', '570', '290', 'auto', 'auto']
                        },
                        {
                            rect: ['665', '335', '353px', '101px', 'auto', 'auto'],
                            id: 'S3_05',
                            type: 'image',
                            clip: 'rect(0px 353px -5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S3_05.png', '0px', '0px']
                        },
                        {
                            rect: ['582', '466', '97px', '97px', 'auto', 'auto'],
                            id: 's',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/circleBack.png', '0px', '0px']
                        },
                        {
                            id: 'p1',
                            type: 'image',
                            rect: ['600', '486', '51px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/plan.png', '-57.953125px', '76.0546875px']
                        },
                        {
                            rect: ['1085px', '10px', '57px', '57px', 'auto', 'auto'],
                            id: 'btn_infoCopy2',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_info.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'S3_re',
                            rect: ['0px', '0px', '1280', '768', 'auto', 'auto'],
                            id: 'S3_re'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid316",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S3_02}",
                            [0,960,-6,0],
                            [0,960,132,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid153",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S3_03}",
                            [0,0,290,0],
                            [0,562,290,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid530",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${p1}",
                            [-57.953125,76.0546875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid159",
                            "opacity",
                            365,
                            135,
                            "linear",
                            "${G3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid498",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S3_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid155",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${s}",
                            '0',
                            '1'
                        ],
                        [
                            "eid319",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S3_05}",
                            [0,353,-5,0],
                            [0,353,101,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_04": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_inside4',
                            type: 'image',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside2.jpg', '0px', '0px']
                        },
                        {
                            rect: ['68', '92', '1046px', '124px', 'auto', 'auto'],
                            id: 'S4_02',
                            type: 'image',
                            clip: 'rect(0px 1046px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S4_02.png', '0px', '0px']
                        },
                        {
                            rect: ['68', '239', '562px', '290px', 'auto', 'auto'],
                            id: 'S4_03',
                            type: 'image',
                            clip: 'rect(0px 0px 290px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S4_03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'G4',
                            symbolName: 'G4',
                            opacity: '0',
                            rect: ['68', '254', '562', '280', 'auto', 'auto']
                        },
                        {
                            rect: ['706', '293', '408px', '170px', 'auto', 'auto'],
                            id: 'S4_06',
                            type: 'image',
                            clip: 'rect(0px 408px -8px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S4_06.png', '0px', '0px']
                        },
                        {
                            id: 'S4_01',
                            type: 'image',
                            rect: ['91', '32', '73px', '18px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S4_012.png', '0px', '0px']
                        },
                        {
                            rect: ['574', '468', '97px', '97px', 'auto', 'auto'],
                            id: 's2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/circleBack.png', '0px', '0px']
                        },
                        {
                            id: 'p12',
                            type: 'image',
                            rect: ['597', '488', '51px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/plan.png', '-60.96875px', '68.5078125px']
                        },
                        {
                            rect: ['818', '394', '148px', '108px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'play_re',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.851)']
                        },
                        {
                            rect: ['716', '131', '148px', '108px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'play_reCopy',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.851)']
                        },
                        {
                            rect: ['1085px', '10px', '57px', '57px', 'auto', 'auto'],
                            id: 'btn_infoCopy3',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_info.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0', '1280', '768', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'S4_re',
                            cursor: 'pointer',
                            id: 'S4_re'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid499",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S4_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid174",
                            "opacity",
                            365,
                            135,
                            "linear",
                            "${G4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid176",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${s2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid170",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S4_03}",
                            [0,0,290,0],
                            [0,562,290,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid322",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S4_02}",
                            [0,1046,-6,0],
                            [0,1046,124,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid532",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${p12}",
                            [-60.96875,68.5078125],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid325",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S4_06}",
                            [0,408,-8,0],
                            [0,408,170,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_05": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_inside5',
                            type: 'image',
                            rect: ['0', '0', '1281px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside2.jpg', '0px', '0px']
                        },
                        {
                            id: 'S5_01',
                            type: 'image',
                            rect: ['105', '27', '298px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S5_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S5_02',
                            rect: ['69', '98', '825px', '72px', 'auto', 'auto'],
                            clip: 'rect(0px 825px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S5_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S5_03',
                            rect: ['360', '178', '562px', '290px', 'auto', 'auto'],
                            clip: 'rect(0px 0px 290px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S5_03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['340', '184', '600', '290', 'auto', 'auto'],
                            id: 'G5',
                            opacity: '0',
                            cursor: 'pointer',
                            symbolName: 'G5'
                        },
                        {
                            type: 'image',
                            id: 's3',
                            opacity: '0',
                            rect: ['873', '419', '97px', '97px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/circleBack.png', '0px', '0px']
                        },
                        {
                            id: 'p13',
                            type: 'image',
                            rect: ['896', '439', '51px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/plan.png', '-59.34375px', '76.046875px']
                        },
                        {
                            type: 'image',
                            id: 'btn_infoCopy4',
                            rect: ['1085px', '10px', '57px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_info.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0', '1280', '768', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'S5_re',
                            id: 'S5_re',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid534",
                            "background-position",
                            750,
                            250,
                            "linear",
                            "${p13}",
                            [-59.34375,76.046875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid500",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S5_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid193",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${s3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid191",
                            "opacity",
                            361,
                            139,
                            "linear",
                            "${G5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid328",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S5_02}",
                            [0,825,-6,0],
                            [0,825,72,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid189",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S5_03}",
                            [0,0,290,0],
                            [0,562,290,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_06": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_inside6',
                            type: 'image',
                            rect: ['0', '0', '1280', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside2.jpg', '0px', '0px']
                        },
                        {
                            id: 'S6_01',
                            type: 'image',
                            rect: ['100', '29', '298px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S6_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S6_02',
                            rect: ['69', '96', '314px', '524px', 'auto', 'auto'],
                            clip: 'rect(0px 314px -0.96875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S6_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S6_03',
                            rect: ['398', '233', '517px', '117px', 'auto', 'auto'],
                            clip: 'rect(0px 517px -7px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S6_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn_infoCopy5',
                            rect: ['1085px', '10px', '57px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_info.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '1280', '768', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'S6_re',
                            id: 'S6_re',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid538",
                            "clip",
                            0,
                            750,
                            "linear",
                            "${S6_02}",
                            [0,314,-0.96875,0],
                            [0,314,524,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid501",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S6_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid331",
                            "clip",
                            750,
                            750,
                            "linear",
                            "${S6_03}",
                            [0,517,-7,0],
                            [0,517,117,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_07": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_inside7',
                            type: 'image',
                            rect: ['0', '0', '1280', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside2.jpg', '0px', '0px']
                        },
                        {
                            id: 'S7_01',
                            type: 'image',
                            rect: ['85', '29', '295px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7_01.png', '0px', '0px']
                        },
                        {
                            rect: ['67', '118', '36px', '36px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S7_02',
                            opacity: '1',
                            clip: 'rect(64px -24px 36px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_02.png', '0px', '0px']
                        },
                        {
                            rect: ['137', '118', '450px', '136px', 'auto', 'auto'],
                            id: 'S7_03',
                            type: 'image',
                            clip: 'rect(0px 450px -10px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_03.png', '0px', '0px']
                        },
                        {
                            rect: ['67', '286', '36px', '36px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S7_04',
                            opacity: '1',
                            clip: 'rect(48px 4px 36px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_04.png', '0px', '0px']
                        },
                        {
                            rect: ['137', '289', '464px', '65px', 'auto', 'auto'],
                            id: 'S7_05',
                            type: 'image',
                            clip: 'rect(0px 464px -5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_05.png', '0px', '0px']
                        },
                        {
                            rect: ['645', '186', '563px', '276px', 'auto', 'auto'],
                            id: 'S7_07',
                            type: 'image',
                            clip: 'rect(0px 563px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_07.png', '0px', '0px']
                        },
                        {
                            rect: ['690', '276', '465px', '19px', 'auto', 'auto'],
                            id: 'S7_08',
                            type: 'image',
                            clip: 'rect(0px 0px 19px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_08.png', '0px', '0px']
                        },
                        {
                            rect: ['690', '324', '461px', '23px', 'auto', 'auto'],
                            id: 'S7_09',
                            type: 'image',
                            clip: 'rect(0px 0px 23px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_09.png', '0px', '0px']
                        },
                        {
                            rect: ['690', '374', '461px', '24px', 'auto', 'auto'],
                            id: 'S7_10',
                            type: 'image',
                            clip: 'rect(0px 0px 24px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_10.png', '0px', '0px']
                        },
                        {
                            rect: ['690', '424', '461px', '24px', 'auto', 'auto'],
                            id: 'S7_11',
                            type: 'image',
                            clip: 'rect(0px 0px 24px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_11.png', '0px', '0px']
                        },
                        {
                            rect: ['601', '148', '97px', '97px', 'auto', 'auto'],
                            id: 'S7_06',
                            type: 'image',
                            clip: 'rect(100px 5px 97px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_06.png', '0px', '0px']
                        },
                        {
                            rect: ['1085px', '10px', '57px', '57px', 'auto', 'auto'],
                            id: 'btn_infoCopy6',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_info.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'S7_re',
                            rect: ['0px', '0', '1280', '768', 'auto', 'auto'],
                            id: 'S7_re'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid339",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S7_03}",
                            [0,450,-10,0],
                            [0,450,136,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid221",
                            "clip",
                            1250,
                            250,
                            "linear",
                            "${S7_07}",
                            [0,563,0,0],
                            [0,563,276,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid219",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S7_06}",
                            [100,5,97,0],
                            [0,97,97,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid227",
                            "clip",
                            2000,
                            250,
                            "linear",
                            "${S7_10}",
                            [0,0,24,0],
                            [0,461,24,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid341",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S7_04}",
                            [48,4,36,0],
                            [0,36,36,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid223",
                            "clip",
                            1500,
                            250,
                            "linear",
                            "${S7_08}",
                            [0,0,19,0],
                            [0,465,19,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid225",
                            "clip",
                            1750,
                            250,
                            "linear",
                            "${S7_09}",
                            [0,0,23,0],
                            [0,461,23,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid502",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S7_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid343",
                            "clip",
                            750,
                            250,
                            "linear",
                            "${S7_05}",
                            [0,464,-5,0],
                            [0,464,65,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid229",
                            "clip",
                            2250,
                            250,
                            "linear",
                            "${S7_11}",
                            [0,0,24,0],
                            [0,461,24,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid337",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S7_02}",
                            [64,-24,36,0],
                            [0,36,36,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_08": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_inside8',
                            type: 'image',
                            rect: ['0', '0', '1280', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside2.jpg', '0px', '0px']
                        },
                        {
                            id: 'S8_01',
                            type: 'image',
                            rect: ['86', '29', '407px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S8_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S8_02',
                            rect: ['476', '94', '317px', '189px', 'auto', 'auto'],
                            clip: 'rect(0px 317px -1px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S8_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S8_03',
                            rect: ['169', '292', '932px', '152px', 'auto', 'auto'],
                            clip: 'rect(0px 932px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S8_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn_infoCopy7',
                            rect: ['1085px', '10px', '57px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_info.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0', '1280', '768', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'S8_re',
                            id: 'S8_re',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid346",
                            "clip",
                            750,
                            750,
                            "linear",
                            "${S8_03}",
                            [0,932,-6,0],
                            [0,932,152,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid235",
                            "clip",
                            0,
                            750,
                            "linear",
                            "${S8_02}",
                            [0,317,-1,0],
                            [0,317,189,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid503",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S8_re}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Slide_09": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_inside9',
                            type: 'image',
                            rect: ['0', '0', '1280px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside2.jpg', '0px', '0px']
                        },
                        {
                            id: 'S9_01',
                            type: 'image',
                            rect: ['87', '30', '349px', '22px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S9_01.png', '0px', '0px']
                        },
                        {
                            rect: ['436', '69', '292px', '291px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px'],
                            transform: [[], ['360']],
                            id: 'S9_02',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S9_02.png', '0px', '0px']
                        },
                        {
                            rect: ['487', '119', '190px', '191px', 'auto', 'auto'],
                            id: 'S9_03',
                            type: 'image',
                            clip: 'rect(80.8203125px 190px 77.546875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S9_03.png', '0px', '0px']
                        },
                        {
                            rect: ['92', '372', '980px', '104px', 'auto', 'auto'],
                            id: 'S9_04',
                            type: 'image',
                            clip: 'rect(0px 980px -4px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S9_04.png', '0px', '0px']
                        },
                        {
                            rect: ['1085px', '10px', '57px', '57px', 'auto', 'auto'],
                            id: 'btn_infoCopy8',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_info.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'S9_re',
                            rect: ['0px', '0', '1280', '768', 'auto', 'auto'],
                            id: 'S9_re'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid247",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${S9_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid249",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${S9_02}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid504",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S9_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid257",
                            "clip",
                            750,
                            250,
                            "linear",
                            "${S9_04}",
                            [0,980,-4,0],
                            [0,980,104,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid544",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S9_03}",
                            [80.8203125,190,77.546875,0],
                            [0,190,191,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_10": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_inside10',
                            type: 'image',
                            rect: ['0', '0', '1280px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside2.jpg', '0px', '0px']
                        },
                        {
                            id: 'S10_01',
                            type: 'image',
                            rect: ['92', '27', '212px', '22px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S10_01.png', '0px', '0px']
                        },
                        {
                            rect: ['244px', '162', '738px', '115px', 'auto', 'auto'],
                            id: 'S10_03',
                            type: 'image',
                            clip: 'rect(0px 738px -5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S10_03.png', '0px', '0px']
                        },
                        {
                            rect: ['244px', '349px', '471px', '155px', 'auto', 'auto'],
                            id: 'S10_04',
                            type: 'image',
                            clip: 'rect(0px 471px -7px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S10_04.png', '0px', '0px']
                        },
                        {
                            id: 'S10_05',
                            type: 'image',
                            rect: ['830', '269', '385px', '258px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S10_05.png', '0px', '0px']
                        },
                        {
                            rect: ['58', '103', '170px', '491px', 'auto', 'auto'],
                            id: 'S10_022',
                            type: 'image',
                            clip: 'rect(0px 170px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S10_022.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280px', '768']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid269",
                            "clip",
                            1500,
                            1000,
                            "linear",
                            "${S10_04}",
                            [0,471,-7,0],
                            [0,471,155,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid267",
                            "clip",
                            500,
                            1000,
                            "linear",
                            "${S10_03}",
                            [0,738,-5,0],
                            [0,738,115,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid546",
                            "clip",
                            0,
                            1000,
                            "linear",
                            "${S10_022}",
                            [0,170,0,0],
                            [0,170,491,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_11": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_inside11',
                            type: 'image',
                            rect: ['0', '0', '1280px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside2.jpg', '0px', '0px']
                        },
                        {
                            id: 'S11_01',
                            type: 'image',
                            rect: ['94', '29', '333px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S11_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S11_02',
                            rect: ['23', '104', '322px', '485px', 'auto', 'auto'],
                            clip: 'rect(0px 322px -6.265625px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S11_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S11_03',
                            rect: ['306', '246', '891px', '161px', 'auto', 'auto'],
                            clip: 'rect(0px 891px -3px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S11_03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: false,
                    data: [
                        [
                            "eid279",
                            "clip",
                            875,
                            875,
                            "linear",
                            "${S11_03}",
                            [0,891,-3,0],
                            [0,891,161,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid550",
                            "clip",
                            0,
                            1000,
                            "linear",
                            "${S11_02}",
                            [0,322,-6.265625,0],
                            [0,322,485,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_12": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_inside12',
                            type: 'image',
                            rect: ['0', '0', '1280px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside2.jpg', '0px', '0px']
                        },
                        {
                            id: 'S12_01',
                            type: 'image',
                            rect: ['96', '30', '82px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S12_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S12_02',
                            rect: ['71', '102px', '1066px', '376px', 'auto', 'auto'],
                            clip: 'rect(0px 1089px 395px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S12_02.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '768']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid285",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${S12_02}",
                            [0,1066,-6,0],
                            [0,1089,395,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_13": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_inside13',
                            type: 'image',
                            rect: ['0', '0', '1280px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside2.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S13_02',
                            rect: ['72', '205', '404px', '181px', 'auto', 'auto'],
                            clip: 'rect(0px 404px -9px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S13_02.png', '0px', '0px']
                        },
                        {
                            id: 'S13_01',
                            type: 'image',
                            rect: ['90', '30', '111px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S13_01.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid287",
                            "clip",
                            0,
                            1000,
                            "linear",
                            "${S13_02}",
                            [0,404,-9,0],
                            [0,404,181,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_14": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_inside_2',
                            type: 'image',
                            rect: ['0', '0', '1280px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside1.jpg', '0px', '0px']
                        },
                        {
                            id: 'S14_01',
                            type: 'image',
                            rect: ['88', '26', '111px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S14_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S14_02',
                            rect: ['68', '228', '564px', '276px', 'auto', 'auto'],
                            clip: 'rect(0px 564px -2px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S14_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S14_03',
                            rect: ['79', '386', '261px', '84px', 'auto', 'auto'],
                            clip: 'rect(0px 261px -4px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S14_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S14_04',
                            rect: ['354px', '402', '273px', '51px', 'auto', 'auto'],
                            clip: 'rect(0px 273px -9px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S14_04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S14_05',
                            rect: ['658', '163', '589px', '342px', 'auto', 'auto'],
                            clip: 'rect(0px -2.5546875px 342px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S14_05.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['242', '554', '831px', '63px', 'auto', 'auto'],
                            id: 'S14_06',
                            opacity: '1',
                            clip: 'rect(0px 831px -11.6640625px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S14_06.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid554",
                            "clip",
                            1250,
                            750,
                            "linear",
                            "${S14_06}",
                            [0,831,-11.6640625,0],
                            [0,831,63,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid289",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S14_02}",
                            [0,564,-2,0],
                            [0,564,276,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid291",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S14_03}",
                            [0,261,-4,0],
                            [0,261,84,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid552",
                            "clip",
                            750,
                            500,
                            "linear",
                            "${S14_05}",
                            [0,-2.5546875,342,0],
                            [0,589,342,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid293",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S14_04}",
                            [0,273,-9,0],
                            [0,273,51,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group2',
                            cursor: 'pointer',
                            rect: ['191', '74', '301', '141', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S1_05',
                                rect: [0, 0, '86px', '141px', 'auto', 'auto'],
                                clip: 'rect(144px 86px 141px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S1_05.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S1_06',
                                rect: [215, 24, '86px', '116px', 'auto', 'auto'],
                                clip: 'rect(120px 86px 116px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S1_06.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            rect: [262, 110, 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0.21951267479675',
                            id: 'Text',
                            text: 'Tap here',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 682, 346]
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid115",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S1_06}",
                            [120,86,116,0],
                            [0,86,116,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid113",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S1_05}",
                            [144,86,141,0],
                            [0,86,141,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid111",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            '0.21951267479675',
                            '0'
                        ]
                    ]
                }
            },
            "G2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group3',
                            cursor: 'pointer',
                            rect: ['0', '0', '294', '141', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S2_04',
                                rect: [0, 0, '86px', '141px', 'auto', 'auto'],
                                clip: 'rect(141px 86px 141px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S2_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S2_05',
                                rect: [208, 22, '86px', '116px', 'auto', 'auto'],
                                clip: 'rect(116px 86px 116px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S2_05.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: [87, 49, 'auto', 'auto', 'auto', 'auto'],
                            type: 'text',
                            id: 'Text2',
                            opacity: '0.25203208130081',
                            align: 'left',
                            text: 'Tap here',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [31, 'px'], 'rgba(104,104,104,0.65)', '400', 'none', 'normal', '', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 294, 141]
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid125",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S2_05}",
                            [116,86,116,0],
                            [0,86,116,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid123",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S2_04}",
                            [141,86,141,0],
                            [0,86,141,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid355",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text2}",
                            '0.25203208130081',
                            '0'
                        ]
                    ]
                }
            },
            "G3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['194', '75', '164px', '177px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S3_04',
                            cursor: 'pointer',
                            clip: 'rect(177px 164px 177px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S3_04.png', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            text: 'Tap here',
                            id: 'Text3',
                            opacity: '0.17886226829268',
                            cursor: 'pointer',
                            rect: ['210', '146', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '570', '290']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid151",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S3_04}",
                            [177,164,177,0],
                            [0,164,177,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid149",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text3}",
                            '0.17886226829268',
                            '0'
                        ]
                    ]
                }
            },
            "G4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['127', '56', '307', '173', 'auto', 'auto'],
                            id: 'Group4',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                rect: [0, 0, '86px', '173px', 'auto', 'auto'],
                                id: 'S4_04',
                                type: 'image',
                                clip: 'rect(173px 86px 173px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S4_04.png', '0px', '0px']
                            },
                            {
                                rect: [221, 46, '86px', '127px', 'auto', 'auto'],
                                id: 'S4_05',
                                type: 'image',
                                clip: 'rect(127px 86px 127px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S4_05.png', '0px', '0px']
                            }]
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            text: 'Tap here',
                            id: 'Text4',
                            opacity: '0.2926829159259796',
                            cursor: 'pointer',
                            rect: [221, '122', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 562, 280]
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid166",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S4_04}",
                            [173,86,173,0],
                            [0,86,173,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid164",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text4}",
                            '0.2926829159259796',
                            '0'
                        ],
                        [
                            "eid168",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S4_05}",
                            [127,86,127,0],
                            [0,86,127,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['122', '50', '293', '139', 'auto', 'auto'],
                            id: 'Group5',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                rect: [0, 0, '293px', '39px', 'auto', 'auto'],
                                id: 'S5_04',
                                type: 'image',
                                clip: 'rect(0px 0px 39px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S5_04.png', '0px', '0px']
                            },
                            {
                                rect: [0, 100, '44px', '39px', 'auto', 'auto'],
                                id: 'S5_05',
                                type: 'image',
                                clip: 'rect(0px 0px 39px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S5_05.png', '0px', '0px']
                            }]
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [30, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            text: 'Tap here',
                            id: 'Text5',
                            opacity: '0.2926829159259796',
                            cursor: 'pointer',
                            rect: [234, 114, 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 600, 290]
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid183",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text5}",
                            '0.2926829159259796',
                            '0'
                        ],
                        [
                            "eid187",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S5_05}",
                            [0,0,39,0],
                            [0,44,39,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid185",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S5_04}",
                            [0,0,39,0],
                            [0,293,39,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "S2_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(208,229,244,0.85)']
                        },
                        {
                            rect: ['439px', '277px', '402px', '214px', 'auto', 'auto'],
                            id: 'S2_10_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S2_10_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S3_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(208,229,244,0.851)']
                        },
                        {
                            rect: ['438px', '276px', '403px', '215px', 'auto', 'auto'],
                            id: 'S3_07_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S3_07_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S4_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(208,229,244,0.851)']
                        },
                        {
                            rect: ['438', '217', '403px', '334px', 'auto', 'auto'],
                            id: 'S4_08_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S4_08_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "S5_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(208,229,244,0.851)']
                        },
                        {
                            rect: ['438', '277', '403px', '214px', 'auto', 'auto'],
                            id: 'S5_10_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S5_10_ref.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S6_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(208,229,244,0.851)']
                        },
                        {
                            rect: ['438', '276', '403px', '215px', 'auto', 'auto'],
                            id: 'S6_06_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S6_06_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S7_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(208,229,244,0.851)']
                        },
                        {
                            id: 'S7_14_re',
                            type: 'image',
                            rect: ['438', '267', '403px', '214px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7_14_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S8_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(208,229,244,0.851)']
                        },
                        {
                            id: 'S8_06_re',
                            type: 'image',
                            rect: ['438', '277', '403px', '214px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S8_06_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S9_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            id: 'RectangleCopy6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(208,229,244,0.851)']
                        },
                        {
                            rect: ['439', '256', '402px', '255px', 'auto', 'auto'],
                            id: 'S9_07_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S9_07_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "BottomBar": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            fill: ['rgba(12,141,11,1.00)'],
                            rect: ['0px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['11%', '11%', '11%', '11% 11%'],
                            type: 'ellipse',
                            id: 'S0',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            fill: ['rgba(255,255,255,0.00)'],
                            rect: ['58px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'S1',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            fill: ['rgba(255,255,255,0.00)'],
                            rect: ['116px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'S2',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            fill: ['rgba(255,255,255,0.00)'],
                            rect: ['174px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'S3',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            fill: ['rgba(255,255,255,0.00)'],
                            rect: ['232px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'S4',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            fill: ['rgba(255,255,255,0.00)'],
                            rect: ['290px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'S5',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            fill: ['rgba(255,255,255,0.00)'],
                            rect: ['348px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'S6',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            fill: ['rgba(255,255,255,0.00)'],
                            rect: ['406px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'S7',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            fill: ['rgba(255,255,255,0.00)'],
                            rect: ['465px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'S8',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            fill: ['rgba(255,255,255,0.00)'],
                            rect: ['523px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'S9',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            fill: ['rgba(255,255,255,0.00)'],
                            rect: ['581px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'S10',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            fill: ['rgba(255,255,255,0.00)'],
                            rect: ['639px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'S11',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            fill: ['rgba(255,255,255,0.00)'],
                            rect: ['697px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'S12',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            fill: ['rgba(255,255,255,0.00)'],
                            rect: ['755px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'S13',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            fill: ['rgba(255,255,255,0.00)'],
                            rect: ['813px', '0px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'S14',
                            stroke: [2, 'rgb(255, 255, 255)', 'solid'],
                            cursor: 'pointer',
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '865px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    labels: {
                        "S0": 0,
                        "S1": 500,
                        "S2": 1000,
                        "S3": 1500,
                        "S4": 2000,
                        "S5": 2500,
                        "S6": 3000,
                        "S7": 3500,
                        "S8": 4000,
                        "S9": 4500,
                        "S10": 5000,
                        "S11": 5500,
                        "S12": 6000,
                        "S13": 6500,
                        "S14": 7000
                    },
                    data: [
                        [
                            "eid471",
                            "background-color",
                            5500,
                            500,
                            "linear",
                            "${S12}",
                            'rgba(255,255,255,0)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid472",
                            "background-color",
                            6000,
                            500,
                            "linear",
                            "${S12}",
                            'rgba(0,0,0,1)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid1709",
                            "background-color",
                            4000,
                            500,
                            "linear",
                            "${S9}",
                            'rgba(255,255,255,0)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid466",
                            "background-color",
                            4500,
                            500,
                            "linear",
                            "${S9}",
                            'rgba(0,0,0,1)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid475",
                            "background-color",
                            6500,
                            500,
                            "linear",
                            "${S14}",
                            'rgba(255,255,255,0)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid1694",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${S0}",
                            'rgba(12,141,11,1)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid1696",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${S2}",
                            'rgba(255,255,255,0)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid1698",
                            "background-color",
                            1000,
                            500,
                            "linear",
                            "${S2}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid1705",
                            "background-color",
                            2500,
                            500,
                            "linear",
                            "${S6}",
                            'rgba(255,255,255,0)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid1706",
                            "background-color",
                            3000,
                            500,
                            "linear",
                            "${S6}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid467",
                            "background-color",
                            4500,
                            500,
                            "linear",
                            "${S10}",
                            'rgba(255,255,255,0)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid468",
                            "background-color",
                            5000,
                            500,
                            "linear",
                            "${S10}",
                            'rgba(0,0,0,1)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid1708",
                            "background-color",
                            3500,
                            500,
                            "linear",
                            "${S8}",
                            'rgba(255,255,255,0)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid1711",
                            "background-color",
                            4000,
                            500,
                            "linear",
                            "${S8}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid1703",
                            "background-color",
                            2000,
                            500,
                            "linear",
                            "${S5}",
                            'rgba(255,255,255,0)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid1704",
                            "background-color",
                            2500,
                            500,
                            "linear",
                            "${S5}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid469",
                            "background-color",
                            5000,
                            500,
                            "linear",
                            "${S11}",
                            'rgba(255,255,255,0)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid470",
                            "background-color",
                            5500,
                            500,
                            "linear",
                            "${S11}",
                            'rgba(0,0,0,1)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid1700",
                            "background-color",
                            1500,
                            500,
                            "linear",
                            "${S4}",
                            'rgba(255,255,255,0)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid1702",
                            "background-color",
                            2000,
                            500,
                            "linear",
                            "${S4}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid1699",
                            "background-color",
                            1000,
                            500,
                            "linear",
                            "${S3}",
                            'rgba(255,255,255,0)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid1701",
                            "background-color",
                            1500,
                            500,
                            "linear",
                            "${S3}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid473",
                            "background-color",
                            6000,
                            500,
                            "linear",
                            "${S13}",
                            'rgba(255,255,255,0)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid474",
                            "background-color",
                            6500,
                            500,
                            "linear",
                            "${S13}",
                            'rgba(0,0,0,1)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid1695",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${S1}",
                            'rgba(255,255,255,0)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid1697",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${S1}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid1707",
                            "background-color",
                            3000,
                            500,
                            "linear",
                            "${S7}",
                            'rgba(255,255,255,0)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid1710",
                            "background-color",
                            3500,
                            500,
                            "linear",
                            "${S7}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,0.00)'
                        ]
                    ]
                }
            },
            "Sections_Bar": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['68px', '-49px', '546px', '49px', 'auto', 'auto'],
                            id: 'navBarBackProfile',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/navBarBackProfile.png', '0px', '0px']
                        },
                        {
                            rect: ['521px', '-48px', '92px', '34px', 'auto', 'auto'],
                            id: 'navBarBackProfile_06',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/navBarBackProfile_06.png', '0px', '0px']
                        },
                        {
                            rect: ['429px', '-48px', '93px', '33px', 'auto', 'auto'],
                            id: 'navBarBackProfile_05',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/navBarBackProfile_05.png', '0px', '0px']
                        },
                        {
                            rect: ['336px', '-48px', '93px', '33px', 'auto', 'auto'],
                            id: 'navBarBackProfile_04',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/navBarBackProfile_04.png', '0px', '0px']
                        },
                        {
                            rect: ['243px', '-48px', '93px', '33px', 'auto', 'auto'],
                            id: 'navBarBackProfile_03',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/navBarBackProfile_03.png', '0px', '0px']
                        },
                        {
                            rect: ['150px', '-48px', '93px', '33px', 'auto', 'auto'],
                            id: 'navBarBackProfile_02',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/navBarBackProfile_02.png', '0px', '0px']
                        },
                        {
                            rect: ['69px', '-48px', '80px', '34px', 'auto', 'auto'],
                            id: 'navBarBackProfile_01',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/navBarBackProfile_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'navBarBack',
                            rect: ['0px', '0px', '1167px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/navBarBack.png', '0px', '0px']
                        },
                        {
                            rect: ['946px', '0px', '136px', '47px', 'auto', 'auto'],
                            type: 'image',
                            id: 'btn_S8',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_S8.png', '0px', '0px']
                        },
                        {
                            rect: ['807px', '0px', '137px', '47px', 'auto', 'auto'],
                            type: 'image',
                            id: 'btn_S7',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_S7.png', '0px', '0px']
                        },
                        {
                            rect: ['669px', '0px', '137px', '47px', 'auto', 'auto'],
                            type: 'image',
                            id: 'btn_S6',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_S6.png', '0px', '0px']
                        },
                        {
                            rect: ['532px', '0px', '137px', '47px', 'auto', 'auto'],
                            type: 'image',
                            id: 'btn_S5',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_S5.png', '0px', '0px']
                        },
                        {
                            rect: ['395px', '0px', '136px', '47px', 'auto', 'auto'],
                            type: 'image',
                            id: 'btn_S4',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_S4.png', '0px', '0px']
                        },
                        {
                            rect: ['257px', '0px', '137px', '47px', 'auto', 'auto'],
                            type: 'image',
                            id: 'btn_S3',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_S3.png', '0px', '0px']
                        },
                        {
                            rect: ['119px', '0px', '137px', '47px', 'auto', 'auto'],
                            type: 'image',
                            id: 'btn_S2',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_S2.png', '0px', '0px']
                        },
                        {
                            rect: ['1px', '0px', '118px', '46px', 'auto', 'auto'],
                            type: 'image',
                            id: 'btn_S1',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_S1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1167px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid509",
                            "display",
                            0,
                            0,
                            "linear",
                            "${navBarBackProfile_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid510",
                            "display",
                            0,
                            0,
                            "linear",
                            "${navBarBackProfile_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid511",
                            "display",
                            0,
                            0,
                            "linear",
                            "${navBarBackProfile_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid512",
                            "display",
                            0,
                            0,
                            "linear",
                            "${navBarBackProfile_06}",
                            'none',
                            'none'
                        ],
                        [
                            "eid495",
                            "display",
                            0,
                            0,
                            "linear",
                            "${navBarBackProfile}",
                            'none',
                            'none'
                        ],
                        [
                            "eid508",
                            "display",
                            0,
                            0,
                            "linear",
                            "${navBarBackProfile_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid507",
                            "display",
                            0,
                            0,
                            "linear",
                            "${navBarBackProfile_01}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "index": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '62px', '367px', '706px', 'auto', 'auto'],
                            userClass: 'scroll',
                            overflow: 'visible',
                            id: 'indexListContainer',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.00)']
                        },
                        {
                            rect: ['0', '0px', '367px', '61', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(47,47,47,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['21', '20', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text3',
                            text: 'index',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['315px', '0px', '52px', '60px', 'auto', 'auto'],
                            id: 'closeBtn',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/closeBtn3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '367', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "IndexItemSymbol": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '367px', '120px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'bg',
                            opacity: '0.86991869918699',
                            type: 'rect',
                            fill: ['rgba(135,135,135,1.00)']
                        },
                        {
                            rect: ['17px', '15px', '119px', '89px', 'auto', 'auto'],
                            id: 'imageHolder',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0)']
                        },
                        {
                            type: 'text',
                            text: 'Cervarix',
                            id: 'titleText',
                            textStyle: ['', '', '20px', ''],
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                            rect: ['147px', '38px', '208px', '24px', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            text: 'Cover',
                            id: 'bodyText',
                            textStyle: ['', '', '18px', ''],
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '300', 'none', '', 'break-word', ''],
                            rect: ['147px', '62px', '208px', '42px', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '119px', '333px', '1px', 'auto', 'auto'],
                            id: 'line',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '367px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-867178188");
