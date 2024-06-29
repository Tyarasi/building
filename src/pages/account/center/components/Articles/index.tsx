import { LikeOutlined, MessageFilled, StarTwoTone } from '@ant-design/icons';
import { useRequest } from '@umijs/max';
import { List, Tag } from 'antd';
import React from 'react';
import type { ListItemDataType, ListItemWorkType } from '../../data.d';
import { queryFakeList, queryListWork } from '../../service';
import ArticleListContent from '../ArticleListContent';
import useStyles from './index.style';
const Articles: React.FC = () => {
  const { styles } = useStyles();
  const IconText: React.FC<{
    icon: React.ReactNode;
    text: React.ReactNode;
  }> = ({ icon, text }) => (
    <span>
      {icon} {text}
    </span>
  );

  const { data: listData } = useRequest(() => {
    return queryFakeList({
      count: 30,
    });
  });

  const { data: listDataWork } = useRequest(() => {
    return queryListWork({
      count: 30,
    });
  });

  console.log("cek data",listDataWork)
  
  return (
    <List<ListItemWorkType>
      size="large"
      className={styles.articleList}
      rowKey="id"
      itemLayout="vertical"
      dataSource={listDataWork?.list || []}
      renderItem={(item) => (
        <List.Item
          key={item.id}
        >
          <List.Item.Meta
            title={
              <a className={styles.listItemMetaTitle} href={item.href}>
                {item.title}
              </a>
            }
            description={
              <span>
                <Tag></Tag>
                <Tag>b</Tag>
                <Tag>c</Tag>
              </span>
            }
          />
          <ArticleListContent data={item} />
        </List.Item>
      )}
    />
  );
};
export default Articles;
