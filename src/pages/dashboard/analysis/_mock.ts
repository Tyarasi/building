import dayjs from 'dayjs';
import type { Request, Response } from 'express';
import type { AnalysisData, DataItem, RadarData } from './data.d';

// Mock All Data

const visitData: DataItem[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]
for (let i = 0; i < fakeY.length; i += 1) {
    visitData.push({
        x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
        y: fakeY[i],
    });
}

const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1){
    visitData2.push({
        x: dayjs(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
        y: fakeY2[i],
    })
}

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}

const searchData = [];
for (let i = 0; i < 50; i += 1){
    searchData.push({
        index: i + 1,
        keyword: `Search Value-${i}`,
        count: Math.floor(Math.random() * 1000),
        range: Math.floor(Math.random() * 100),
        status: Math.floor((Math.random() * 10) % 2),
      });
}

const salesTypeData = [
    {
      x: 'Type A',
      y: 4544,
    },
    {
      x: 'Type B',
      y: 3321,
    },
];

const salesTypeDataOnline = [
    {
      x: 'Data A Online',
      y: 244,
    },
    {
      x: 'Data B Online',
      y: 321,
    },
];

const salesTypeDataOffline = [
    {
      x: 'Data A Offline',
      y: 99,
    },
    {
      x: 'Data B Offline',
      y: 188,
    },
];

const offlineData = [];
for (let i = 0; i < 10; i += 1){
    offlineData.push({
        name: `Stores ${i}`,
        cvr: Math.ceil(Math.random() * 9) / 10,
    });
}
const offlineChartData = [];
for (let i = 0; i < 20; i += 1) {
  const date = dayjs(new Date().getTime() + 1000 * 60 * 30 * i).format('HH:mm');
  offlineChartData.push({
    date,
    type: 'AA',
    value: Math.floor(Math.random() * 100) + 10,
  });
  offlineChartData.push({
    date,
    type: 'BB',
    value: Math.floor(Math.random() * 100) + 10,
  });
}

const radarOriginData = [
    {
      name: 'Radar A',
      ref: 10,
      koubei: 8,
      output: 4,
      contribute: 5,
      hot: 7,
    },
    {
      name: 'Radar B',
      ref: 3,
      koubei: 9,
      output: 6,
      contribute: 3,
      hot: 1,
    },
    {
      name: 'Radar C',
      ref: 4,
      koubei: 1,
      output: 6,
      contribute: 5,
      hot: 7,
    },
];
  
const radarData: RadarData[] = [];
const radarTitleMap = {
  ref: '1',
  koubei: '2',
  output: '3',
  contribute: '4',
  hot: '5',
};
radarOriginData.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key as 'ref'],
        value: item[key as 'ref'],
      });
    }
  });
});

const getFakeChartData: AnalysisData = {
    visitData,
    visitData2,
    salesData,
    searchData,
    offlineData,
    offlineChartData,
    salesTypeData,
    salesTypeDataOnline,
    salesTypeDataOffline,
    radarData,
};

const fakeChartData = (_: Request, res: Response) => {
    return res.json({
      data: getFakeChartData,
    });
  };
  
export default {
   'GET  /api/fake_analysis_chart_data': fakeChartData,
};