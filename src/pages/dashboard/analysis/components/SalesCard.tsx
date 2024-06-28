import { Column } from '@ant-design/plots';
import { Card, Col, DatePicker, Row, Tabs } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import type dayjs from 'dayjs';
import numeral from 'numeral';
import type { DataItem } from '../data.d';
import useStyles from '../style.style';
import ReactPlayer from 'react-player';

export type TimeType = 'today' | 'week' | 'month' | 'year';
const { RangePicker } = DatePicker;

const title = ['Happy Song', 'Watch The World Burn', 'King For A Day']
const band = ['BMTH', 'Falling in Reverse', 'Pierce The Veil']
const link = ['https://music.youtube.com/watch?v=58LeVo7j46w&si=rfkmiWOqeL0WAJIW', 'https://music.youtube.com/watch?v=gOdBRGvXhkM&si=KeCM1op40aQLX5T1', 'https://music.youtube.com/watch?v=g10qKRsi28U&si=PFJ7hi7qR8698To-']

const rankingListData: {
  title: string;
  link: string;
}[] = [];

for (let i = 0; i < title.length; i += 1) {
  rankingListData.push({
    title: `${band[i]} - ${title[i]}`,
    link: `${link[i]}`,
  });
}

const SalesCard = ({
  rangePickerValue,
  salesData,
  isActive,
  handleRangePickerChange,
  loading,
  selectDate,
}: {
  rangePickerValue: RangePickerProps<dayjs.Dayjs>['value'];
  isActive: (key: TimeType) => string;
  salesData: DataItem[];
  loading: boolean;
  handleRangePickerChange: RangePickerProps<dayjs.Dayjs>['onChange'];
  selectDate: (key: TimeType) => void;
}) => {
  const { styles } = useStyles();
  return (
    <Card
      loading={loading}
      bordered={false}
      bodyStyle={{
        padding: 0,
      }}
    >
      <div className={styles.salesCard}>
        <Tabs
          // tabBarExtraContent={
          //   <div className={styles.salesExtraWrap}>
          //     <div className={styles.salesExtra}>
          //       <a className={isActive('today')} onClick={() => selectDate('today')}>
          //         today
          //       </a>
          //       <a className={isActive('week')} onClick={() => selectDate('week')}>
          //         week
          //       </a>
          //       <a className={isActive('month')} onClick={() => selectDate('month')}>
          //         month
          //       </a>
          //       <a className={isActive('year')} onClick={() => selectDate('year')}>
          //         year
          //       </a>
          //     </div>
          //     <RangePicker
          //       value={rangePickerValue}
          //       onChange={handleRangePickerChange}
          //       style={{
          //         width: 256,
          //       }}
          //     />
          //   </div>
          // }
          size="large"
          tabBarStyle={{
            marginBottom: 24,
          }}
          items={[
            {
              key: 'song',
              label: 'song',
              children: (
                <Row>
                  <Col xl={14} lg={12} md={12} sm={24} xs={24}>
                  <div className={styles.videoBar}>
                  <ReactPlayer url="/videos/happy.mp4" controls width="80%"/> 
                  </div>
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesRank}>
                      <h4 className={styles.rankingTitle}>Top Song Playlist</h4>
                      <ul className={styles.rankingList}>
                        {rankingListData.map((item, i) => (
                          <li key={item.title}>
                            <span
                              className={`${
                                i < 3 ? styles.rankingItemNumberActive : styles.rankingItemNumber
                              }`}
                            >
                              {i + 1}
                            </span>
                            <span className={styles.rankingItemTitle} title={item.title}>
                              {item.title}
                            </span>
                            <a href={item.link} target="_blank">
                              Watch in youtube
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              ),
            },
            {
              key: 'views',
              label: 'views',
              children: (
                <Row>
                  <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesBar}>
                      <Column
                        height={300}
                        data={salesData}
                        xField="x"
                        yField="y"
                        paddingBottom={12}
                        axis={{
                          x: {
                            title: false,
                          },
                          y: {
                            title: false,
                          },
                        }}
                        scale={{
                          x: { paddingInner: 0.4 },
                        }}
                        tooltip={{
                          name: 'Total Produk',
                          channel: 'y',
                        }}
                      />
                    </div>
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesRank}>
                      <h4 className={styles.rankingTitle}>Posisi Teratas</h4>
                      <ul className={styles.rankingList}>
                        {rankingListData.map((item, i) => (
                          <li key={item.title}>
                            <span
                              className={`${
                                i < 3 ? styles.rankingItemNumberActive : styles.rankingItemNumber
                              }`}
                            >
                              {i + 1}
                            </span>
                            <span className={styles.rankingItemTitle} title={item.title}>
                              {item.title}
                            </span>
                            <span></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              ),
            },
          ]}
        />
      </div>
    </Card>
  );
};
export default SalesCard;
