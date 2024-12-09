import { ChartOptions, ColorType, createChart, LineSeriesOptions } from 'lightweight-charts';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';

import styles from './JettonChart.module.scss'

const chartOptions: ChartOptions = {
    height: 300,
    layout: {
        textColor: '#757576',
        background: {
            type: ColorType.Solid,
            color: 'transparent'
        },
        fontSize: 12,
        fontFamily: '',
        attributionLogo: false
    },
    grid: {
        horzLines: {
            visible: false,
        },
        vertLines: {
            visible: false,
        }
    }
};

const lineOptions: LineSeriesOptions = {
    priceLineColor: "#000",
    color: "#F53D0F",
    lineWidth: 2,
}

export const JettonChart = observer(({ jetton }) => {
    const chartContainer = useRef();

    useEffect(() => {
        let chart

        if (jetton && jetton?.chart?.items) {
            chart = createChart(chartContainer?.current, chartOptions);
            chart.timeScale().fitContent();

            const lineSeries = chart.addLineSeries(lineOptions);
            lineSeries.setData(jetton?.chart?.items)
        }

        return () => {
            chart?.remove()
        }
    }, [jetton]);

    return (
        <div className={styles.wrapper}>
            <div id="chart" ref={chartContainer}></div>
            <img src="/assets/chart_bg.png" alt="" className={styles.chart_bg} />
        </div>
    )
})