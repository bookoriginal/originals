import Mock from 'mockjs';

import bannerlist from './banner';
import newslist from './news';
import common from './common';

Mock.mock('/banner', 'get', bannerlist)
Mock.mock('/newslist', 'get', newslist.newslist)
Mock.mock('/newsdetail', 'post', newslist.newsdetail)

Mock.mock('/commonlists', 'get', common.commonlists)
