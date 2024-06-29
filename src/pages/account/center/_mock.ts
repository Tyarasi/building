import type { Request, Response } from 'express';
import type { ListItemDataType, ListItemWorkType } from './data.d';

const titles = [
  'PT.Infomedia Solusi Humanika',
  'PT.Bigs Integrasi Teknologi',
  'PT.Digital Otoma Solusi',
];
const avatars = [
  'images/rct.png', // React
  'images/ts.png', // Type Script
  'images/lrvl.png', // Laravel
  'images/php.png', // PHP
  'images/phytn.jpeg', // Python
  'images/fstapi.svg', // Fast API
  'images/bstrp.svg', // Bootstrap
  'images/css.png', // CSS
  'images/antdsgn.png', // Ant Design
  'images/pro.png' // Ant Design Pro
];



const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
  'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
  '那是一种内在的东西， 他们到达不了，也无法触及的',
  '希望是一个好东西，也许是最好的，好东西是不会消亡的',
  '生命就像一盒巧克力，结果往往出人意料',
  '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
  '那时候我只会想自己想要什么，从不想自己拥有什么',
];

const user = [
  '付小小',
  '曲丽丽',
  '林东东',
  '周星星',
  '吴加好',
  '朱偏右',
  '鱼酱',
  '乐哥',
  '谭小仪',
  '仲尼',
];

const content_pengalaman = [
  '- Membantu melaksanakan instalasi jaringan komputer - Membantu melakukan pemeliharaan jaringan komputer',
  '- Membangun Aplikasi ERP dengan Fitur Project Management untuk perusahaan',
  '-'
];

const description = [
  'PT.Infomedia Solusi Humanika (ISH) merupakan anak perusahaan PT. Infomedia Nusantara (Telkom Group) yang bergerak dalam bidang HR Process & Solutions serta sudah mengelola sekitar 18.000 orang tenaga kerja.ISH memiliki 3 Pilar bisnis, diantaranya: BPO HR Solution, BPO HR Process, dan BPO ConsultingBeberapa pekerjaan yang dilakukan',
  'PT.Bigs Integrasi Teknologi adalah perusahaan yang bergerak di IT Software. ahli dibidang Digital Transformation for Business.',
  'DGOS berupaya menghadirkan pengalaman otomasi terbaik bagi pengguna dan produsen dengan menawarkan alat yang diperlukan untuk memulai dengan cepat dan solid di sebagian besar proyek.',
];

const logoPerushaan = [
  'images/ISH.png', // PT. Infomedia Solusi Humanika
  'images/BIGS.png', // PT. Bigs Integrasi Teknologi
  'images/logo.svg', // PT. Digital Otoma Solusi
];

const link = [
  'https://ish.co.id/',
  'https://www.bigsgroup.co.id/',
  'https://dgos.id/',
];



// 当前用户信息
const currentUseDetail = {
  name: 'Teguh Amanah Putra',
  avatar: '/images/ff-012.jpg',
  userid: '00000001',
  email: 'teguhamanah8@gmail.com',
  signature: 'D4 Sistem Informasi，Politeknik Caltex Riau',
  title: 'Padang, 22 Juni 2000',
  group: 'Web Developer, Programmer',
  tags: [
    {
      key: '0',
      label: 'React',
    },
    {
      key: '1',
      label: 'Typescript',
    },
    {
      key: '2',
      label: 'Framework Laravel',
    },
    {
      key: '3',
      label: 'PHP',
    },
    {
      key: '4',
      label: 'Python',
    },
    {
      key: '5',
      label: 'Framework FastAPI',
    },
    {
        key: '6',
        label: 'Bootstrap',
    },
    {
        key: '7',
        label: 'CSS',
    },
    {
        key: '8',
        label: 'Framework UI Ant Design',
    },
    {
        key: '9',
        label: 'Framework UI Ant Design Pro',
    },
  ],
  notice: [
    {
      id: 'xxx1',
      title: titles[0],
      logo: avatars[0],
      updatedAt: new Date(),
      member: 'React',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx2',
      title: titles[1],
      logo: avatars[1],
      updatedAt: new Date('2017-07-24'),
      member: 'Type Script',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx3',
      title: titles[2],
      logo: avatars[2],
      updatedAt: new Date(),
      member: 'Laravel',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx4',
      title: titles[3],
      logo: avatars[3],
      updatedAt: new Date('2017-07-23'),
      member: 'PHP',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx5',
      title: titles[4],
      logo: avatars[4],
      updatedAt: new Date('2017-07-23'),
      member: 'Python',
      href: '',
      memberLink: '',
    },
    {
      id: 'xxx6',
      title: titles[5],
      logo: avatars[5],
      updatedAt: new Date('2017-07-23'),
      member: 'FastAPI',
      href: '',
      memberLink: '',
      },
      {
        id: 'xxx7',
        title: titles[6],
        logo: avatars[6],
        updatedAt: new Date('2017-07-23'),
        member: 'Bootstrap',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx8',
        title: titles[7],
        logo: avatars[7],
        updatedAt: new Date('2017-07-23'),
        member: 'CSS',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx9',
        title: titles[8],
        logo: avatars[8],
        updatedAt: new Date('2017-07-23'),
        member: 'Ant Design',
        href: '',
        memberLink: '',
      },
      {
        id: 'xxx10',
        title: titles[9],
        logo: avatars[9],
        updatedAt: new Date('2017-07-23'),
        member: 'Ant Design Pro',
        href: '',
        memberLink: '',
      },
  ],
  notifyCount: 12,
  unreadCount: 11,
  country: 'China',
  geographic: {
    province: {
      label: '浙江省',
      key: '330000',
    },
    city: {
      label: '杭州市',
      key: '330100',
    },
  },
  address: '西湖区工专路 77 号',
  phone: '0752-268888888',
};

function fakeList(count: number): ListItemDataType[] {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      owner: user[i % 10],
      title: titles[i % 8],
      avatar: avatars[i % 8],
      cover: parseInt(`${i / 4}`, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      status: ['active', 'exception', 'normal'][i % 3] as
        | 'normal'
        | 'exception'
        | 'active'
        | 'success',
      percent: Math.ceil(Math.random() * 50) + 50,
      logo: avatars[i % 8],
      href: 'https://ant.design',
      updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
      createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
      subDescription: desc[i % 5],
      description:
        '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
      activeUser: Math.ceil(Math.random() * 100000) + 100000,
      newUser: Math.ceil(Math.random() * 1000) + 1000,
      star: Math.ceil(Math.random() * 100) + 100,
      like: Math.ceil(Math.random() * 100) + 100,
      message: Math.ceil(Math.random() * 10) + 10,
      content:
        'ABC',
      members: [
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
          name: '曲丽丽',
          id: 'member1',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
          name: '王昭君',
          id: 'member2',
        },
        {
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
          name: '董娜娜',
          id: 'member3',
        },
      ],
    });
  }

  return list;
}

function workList(count: number): ListItemWorkType[] {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `${i}`,
      title: titles[i % 3],
      logo: logoPerushaan[i % 3],
      cover: parseInt(`${i / 4}`, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
      href: link[i % 3],
      description: description[i % 3],
      message: Math.ceil(Math.random() * 10) + 10,
      content: content_pengalaman[i % 3],
    });
  }

  return list;
}

function getFakeList(req: Request, res: Response) {
  const params = req.query as any;

  const count = 3;

  const result = fakeList(count);
  return res.json({
    data: {
      list: result,
    },
  });
}

function getWorkList(req: Request, res: Response) {
  const params = req.query as any;

  const count = 3;
  const result = workList(count);
  return res.json({
    data: {
      list: result,
    },
  })
}

// 获取用户信息
function getCurrentUser(req: Request, res: Response) {
  return res.json({
    data: currentUseDetail,
  });
}

export default {
  'GET  /api/fake_list_Detail': getFakeList,
  'Get /api/work_list_Detail': getWorkList,
  'GET  /api/currentUserDetail': getCurrentUser,
};
