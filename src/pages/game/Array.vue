<template>
  <div class="game">
    <svg width="1600" height="500" id="mainsvg" class="svgs"></svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as d3 from 'd3';

interface ArrType {
  [index: string]: number;
}

export default defineComponent({
  setup() {
    const arr = [1, 2, 3, 4, 5, 6];
    const arr1 = [1, 2, 3, 4, 5, 6, 7];

    console.log(d3.min(arr), d3.min(arr1)); // 最小值
    console.log(d3.max(arr), d3.max(arr1)); // 最大值
    console.log(d3.extent(arr), d3.extent(arr1)); // 最小值和最大值
    console.log(d3.sum(arr), d3.sum(arr1)); // 去和
    console.log(d3.mean(arr), d3.mean(arr1)); // 均值
    console.log(d3.median(arr), d3.median(arr1)); // 中位数
    console.log(d3.quantile(arr, 0.5), d3.quantile(arr1, 0.5)); // 返回有序数组中的某个值，0-1之间的值
    console.log(d3.variance(arr), d3.variance(arr1)); // 无偏估计方差
    console.log(d3.deviation(arr), d3.deviation(arr1)); // 返回数组的平方根

    const arr2: ArrType[] = [{ foo: 42 }, { foo: 91 }];

    // 对指定的数组执行线性扫描, 根据指定的比较器返回最小元素的索引. 如果给定的数组中没有可比较的元素 ( 比如比较时返回 NaN ) 则返回 undefined. 如果没有指定 comparator 则默认为升序
    console.log(
      d3.scan(arr2),
      d3.scan(arr2, (a: ArrType, b: ArrType) => a.foo - b.foo),
      d3.scan(arr2, (a: ArrType, b: ArrType) => b.foo - a.foo),
    );

    var arr3 = [
      { date: new Date(2011, 1, 1), value: 0.5 },
      { date: new Date(2011, 2, 1), value: 0.6 },
      { date: new Date(2011, 3, 1), value: 0.7 },
      { date: new Date(2011, 4, 1), value: 0.8 },
    ];

    console.log(
      d3.bisectLeft(arr3, (d: any) => d.date),
      d3.bisectRight((d: any) => d.date),
      d3.bisector((d: any, x: number) => d.date - x).right,
    );

    console.log(
      d3.cross([1, 2], ['x', 'y']),
      d3.cross([1, 2], ['x', 'y'], (a: number, b: string) => a + b),
    );

    console.log(d3.merge([[1], [2, 3]]));

    console.log(
      d3.pairs([1, 2, 3, 4]),
      d3.pairs([1, 2, 3, 4], (a: number, b: number) => b - a),
    );

    return {};
  },
});
</script>
