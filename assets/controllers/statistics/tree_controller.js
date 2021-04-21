import { Controller } from 'stimulus';
import echarts from "echarts/lib/echarts";
import tree from 'echarts/lib/chart/tree';
import tooltip from 'echarts/lib/component/tooltip';
import Translator from "../../js/translator.min";

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    chart = null;
    isDarkMode =  document.getElementById('settings').dataset.theme === 'dark';

    connect() {
        let data = JSON.parse(this.element.dataset.json);

        this.chart = echarts.init(this.element);
        this.chart.setOption({
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',
                    data: [data],
                    layout: 'radial',
                    symbol: 'emptyCircle',
                    symbolSize: 7,
                    initialTreeDepth: -1,
                    animationDurationUpdate: 750,
                    itemStyle: {
                        borderColor: this.isDarkMode ? '#00ce99' : '#009688',
                    },
                    lineStyle: {
                        color: this.isDarkMode ? '#4a4b4d' : '#ccc'
                    },
                    label: {
                        color: this.isDarkMode ? '#a6a7a8' : '#555'
                    }
                }
            ]
        });
    }

    resize() {
        this.chart.resize();
    }
}
