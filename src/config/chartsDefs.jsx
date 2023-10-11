import { useEffect } from 'react'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'

export const useChartsDefs = ({isDashboard = false}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const barChartDefinitions = {
        theme: {
            axis: {
                domain: {
                    line: {
                        stroke: colors.grey[100]
                    }
                },
                legend: {
                    text: {
                        fill: colors.grey[100]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1
                    }
                },
                text: {
                    fill: colors.grey[100]
                }
            },
            legends: {
                text: {
                    fill: colors.grey[100]
                }
            }
        },

        keys: [
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ],
        styles: {
            indexBy: "country",
            margin: { top: 50, right: 130, bottom: 50, left: 60 },
            valueScale: { type: 'linear' },
            indexScale: { type: 'band', round: true },
            colors: { scheme: 'nivo' },
            defs: [
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ],
            fill: [
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ],
            borderColor: {
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            },
            axisBottom: {
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : 'country',
                legendPosition: 'middle',
                legendOffset: 32
            },
            axisLeft: {
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : 'food',
                legendPosition: 'middle',
                legendOffset: -40
            },
            labelTextColor: {
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            },
            legends: [
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ],
            role: "application",
            ariaLabel: "Nivo bar chart demo",
        }
    }

    const pieChartDefinitions = {
        theme: {
            axis: {
                domain: {
                    line: {
                        stroke: colors.grey[100]
                    }
                },
                legend: {
                    text: {
                        fill: colors.grey[100]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1
                    }
                },
                text: {
                    fill: colors.grey[100]
                }
            },
            legends: {
                text: {
                    fill: colors.grey[100]
                }
            }
        },
        styles: {
            indexBy: "country",
            margin: { top: 40, right: 80, bottom: 80, left: 80 },
            valueScale: { type: 'linear' },
            indexScale: { type: 'band', round: true },
            colors: { scheme: 'nivo' },
            defs: [
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ],
            fill: [
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ],
            borderColor: {
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            },
            arcLinkLabelsTextColor: colors.grey[100],
            axisBottom: {
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : 'country',
                legendPosition: 'middle',
                legendOffset: 32
            },
            axisLeft: {
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : 'food',
                legendPosition: 'middle',
                legendOffset: -40
            },
            labelTextColor: {
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            },
            legends: [
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ],
            role: "application",
            ariaLabel: "Nivo bar chart demo",
        }
    }
    useEffect(() => { }, [])

    return {
        barChartDefinitions,
        pieChartDefinitions
    }
}

