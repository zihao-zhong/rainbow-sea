<template>
  <div class="game">
    <svg width="1600" height="500" id="mainsvg" class="svgs"></svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import * as d3 from 'd3';

interface CsvData {
  platform: string;
  globalsale: number;
}

export default defineComponent({
  setup() {
    const initSvg = () => {
      const svg = d3.select('#mainsvg');
      const width = svg.attr('width');
      const height = svg.attr('height');
      const margin = {
        top: 60,
        right: 30,
        bottom: 60,
        left: 150,
      };
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;
      const mainGroup = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);
      const xScale = d3.scaleLinear();
      const yScale = d3.scaleBand();

      d3.csv('game.csv').then((data: CsvData[]) => {
        yScale
          .domain(data.map((d: CsvData) => d.platform))
          .range([0, innerHeight])
          .padding(0.1);

        xScale.domain([0, d3.max(data, (d: CsvData) => d.globalsale)]).range([0, innerWidth]);

        mainGroup
          .selectAll('rect')
          .data(data)
          .join('rect')
          .attr('height', yScale.bandwidth())
          .attr('width', (d: CsvData) => xScale(d.globalsale))
          .attr('x', 0)
          .attr('y', (d: CsvData) => yScale(d.platform));

        const xAxisMethod = d3.axisBottom(xScale);
        const yAxisMethod = d3.axisLeft(yScale);
        const xAxisGroup = mainGroup.append('g').call(xAxisMethod);
        const yAxisGroup = mainGroup.append('g').call(yAxisMethod);
        console.log(yAxisGroup);
        xAxisGroup.attr('transform', `translate(${0}, %{innerHeight})`);
        // xAxisGroup.translate().duration(1000).attr('color', 'red');
      });
    };

    onMounted(() => {
      initSvg();
    });

    return {};
  },
});
</script>
