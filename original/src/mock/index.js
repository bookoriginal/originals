import Mock from 'mockjs';

import bannerlist from './banner';
import newslist from './news';
import comment from './comment';

Mock.mock('/banner', 'get', bannerlist)
Mock.mock('/newslist', 'get', newslist.newslist)
Mock.mock('/newsdetail', 'post', newslist.newsdetail)

Mock.mock('/commentlists', 'get', comment.commentlists)
Mock.mock('/commentdetail', 'post', comment.commentdetail)
