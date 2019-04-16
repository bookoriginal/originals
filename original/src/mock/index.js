import Mock from 'mockjs'

import bannerlist from './banner'

Mock.mock('/banner', 'get', bannerlist)
