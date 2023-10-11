import { ResponsiveBar } from '@nivo/bar'
import { useChartsDefs } from '../config/chartsDefs'

const BarChart = ({ data, isDashboard = false }) => {
    const {
        barChartDefinitions
    } = useChartsDefs(isDashboard)

    return (
        <ResponsiveBar
            data={data}
            theme={barChartDefinitions.theme}
            keys={barChartDefinitions.keys}
            indexBy={barChartDefinitions.styles.indexBy}
            margin={barChartDefinitions.styles.margin}
            padding={0.3}
            valueScale={barChartDefinitions.styles.valueScale}
            indexScale={barChartDefinitions.styles.indexScale}
            colors={barChartDefinitions.styles.colors}
            defs={barChartDefinitions.styles.defs}
            fill={barChartDefinitions.styles.fill}
            borderColor={barChartDefinitions.styles.borderColor}
            axisTop={null}
            axisRight={null}
            axisBottom={barChartDefinitions.styles.axisBottom}
            axisLeft={barChartDefinitions.styles.axisLeft}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={barChartDefinitions.styles.labelTextColor}
            legends={barChartDefinitions.styles.legends}
            role={barChartDefinitions.role}
            ariaLabel={barChartDefinitions.ariaLabel}
            barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
        />
    )
}

export default BarChart