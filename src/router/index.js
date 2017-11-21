import Vue from 'vue'
import Router from 'vue-router'
import find from '@/components/find/index'
import find_mbgc from '@/components/find/find_mbgc'
import find_zycp from '@/components/find/find_zycp'
import find_xymb from '@/components/find/find_xymb'
import mbgc_zr from '@/components/find/find_mbgc_zrxq'
import mbgc_zx from '@/components/find/find_mbgc_zxxq'
import mbgl_cptm from '@/components/find/find_mbgc_cptm'
import mbgc_result from '@/components/find/mbgc_result'
import mbgc_tjmb from '@/components/find/mbgc_tjmb'
import mbgc_search from '@/components/find/mbgc_search'
import xymb_search from '@/components/find/xymb_search'
import xymb_xq from '@/components/find/find_xymb_xq'
import mbgc_xq from '@/components/find/find_mbgc_xq'
import find_xymb_zmb from '@/components/find/find_xymb_zmb'
import mbgc_sycyz from '@/components/find/find_mbgc_sycyz'
import my from '@/components/my/index'
import studyplan from '@/components/my/studyplan/studyplan'
import mygrades from '@/components/my/mygrades/mygrades'
import lostsubject from '@/components/my/lostsubject/lostsubject'
import lost_xq from '@/components/my/lostsubject/lost_xq'
import completed from '@/components/my/completed/completed'
import college from '@/components/my/completed/college'
import personal from '@/components/my/completed/personal'
import incompleted from '@/components/my/incompleted/incompleted'
import incollege from '@/components/my/incompleted/incollege'
import inpersonal from '@/components/my/incompleted/inpersonal'
import fight from '@/components/my/fight/fight'
import collegegoaldetail from '@/components/my/collegegoaldetail/collegegoaldetail'
import updataimg from '@/components/my/collegegoaldetail/updataimg'
import collegegoaldetail_dt from '@/components/my/collegegoal/collegegoaldetail-dt'
import collegegoaldetail_xq from '@/components/my/collegegoal/collegegoaldetail-xq'
import collegegoal_addzmb from '@/components/my/collegegoal/collegegoal_addzmb'
import collegegoal_zmb from '@/components/my/collegegoal/collegegoal_zmb'
import collegegoal_zmb_xq from '@/components/my/collegegoal/collegegoal_zmb_xq'
import zmb_content_xq from '@/components/my/collegegoal/zmb_content_xq'
import collegegoal_xg_cyz from '@/components/my/collegegoal/collegegoal_xg_cyz'
import collegegoal_xg_yqcyz from '@/components/my/collegegoal/collegegoal_xg_yqcyz'
import collegegoal_addcyz from '@/components/my/collegegoal/collegegoal_addcyz'
import collegegoal_addcyz_xq from '@/components/my/collegegoal/collegegoal_addcyz_xq'
import collegegoal_bz from '@/components/my/collegegoal/collegegoal_bz'
import collegegoal_addlist from '@/components/my/collegegoal/collegegoal_addlist'
import add_zmb from '@/components/my/collegegoal/add_zmb'
import set_tx from '@/components/my/collegegoal/set_tx'
import set_tx_xtmb from '@/components/my/collegegoal/set_tx_xtmb'
import tx_other from '@/components/my/collegegoal/tx_other'
import tx_content from '@/components/my/collegegoal/tx_content'
import bjhy_search from '@/components/my/collegegoal/bjhy_search'
import search_list from '@/components/my/collegegoal/search_list'
import myclass from '@/components/my/collegegoal/myClass'
import set_goal from '@/components/my/collegegoal/set_goal'
import all_person_fz from '@/components/my/collegegoal/all_person_fz'
import personaldetail_xq from '@/components/my/collegegoal/personaldetail-xq'
import completedgoal_xq from '@/components/my/collegegoal/completedgoal-xq'
import collegegoal from '@/components/my/college'
import personalgoal from '@/components/my/personal'
import wdDetail from '@/components/my/wd-detail'
import notice from '@/components/notice/index'
import notice_xq from '@/components/notice/notice_xq'
// import notice_pl_gr from '@/components/notice/notice_pl_gr'
import ranking from '@/components/ranking/index'



Vue.use(Router)
export default new Router({
  routes: [
    {path: '/notice_xq',name: 'notice_xq',component: notice_xq,meta:{title:"评论详情"}},
    // {path: '/notice_pl_gr',name: 'notice_pl_gr',component: notice_pl_gr,meta:{title:"评论详情"}},
    {path: '/notice',name: 'notice',component: notice,meta:{title:"消息"}},
    {path: '/ranking',name: 'ranking',component: ranking,meta:{title:"目标排行榜"}},
    {path: '/my',name: 'my',component: my,meta:{title:"目标"},redirect:'/college'},
    {path: '/find',name: 'find',component: find,meta:{title:"发现"}},

    {path: '/wdDetail',name: 'wdDetail',component: wdDetail,meta:{title:"目标"},
         children:[{path: '/college',name: 'collegegoal',component: collegegoal},
                   {path: '/personal',name: 'personalgoal',component:personalgoal}]
    },
  {path: '/studyplan',component: studyplan,meta:{title:"学习计划"}},
  {path: '/mygrades',component: mygrades,meta:{title:"我的成绩"}},
  {path: '/lostsubject',component: lostsubject,meta:{title:"已挂科目"}},
  {path: '/lost_xq',component: lost_xq,meta:{title:"挂科详情"}},
  {path: '/updataimg',component: updataimg,meta:{title:"发表动态"}},
  {path: '/collegegoaldetail/collegegoaldetail',component: collegegoaldetail,redirect: '/collegegoal/collegegoaldetail-xq',meta:{title:"目标详情"},
    children:[{path: '/collegegoal/collegegoaldetail-xq',name: 'collegegoaldetail_xq',component: collegegoaldetail_xq},
             {path: '/collegegoal/collegegoaldetail-dt',name: 'collegegoaldetail_dt',component:collegegoaldetail_dt}]
  },
  {path: '/completed',component: completed,redirect: '/completed/college',meta:{title:"已完成"},
    children:[{path: '/completed/college',name: 'college',component: college},
             {path: '/completed/personal',name: 'personal',component: personal}]
  },
  {path: '/incompleted',component: incompleted,redirect: '/incompleted/incollege',meta:{title:"未完成"},
    children:[{path: '/incompleted/incollege',name: 'incollege',component: incollege},
             {path: '/incompleted/inpersonal',name: 'inpersonal',component: inpersonal}]
  },
  {path: '/fight',component: fight,meta:{title:"谁赞过我"}},
  {path: '/find_mbgc',component: find_mbgc,redirect:'/find/find_mbgc_zrxq',meta:{title:"目标广场"},
    children:[{path: '/find/find_mbgc_zrxq',name: 'mbgc_zr',component: mbgc_zr},
             {path: '/find/find_mbgc_zxxq',name: 'mbgc_zx',component: mbgc_zx}]
  },
  {path: '/collegegoal/zmb_content_xq',component: zmb_content_xq,meta:{title:"子目标详情"}},
  {path: '/collegegoal/collegegoal_xg_cyz',component: collegegoal_xg_cyz,meta:{title:"设置提醒"}},
  {path: '/collegegoal/collegegoal_xg_yqcyz',component: collegegoal_xg_yqcyz,meta:{title:"邀请参与者"}},
  {path: '/collegegoal/collegegoal_addcyz_xq',component: collegegoal_addcyz_xq,meta:{title:"邀请参与者"}},
  {path: '/collegegoal/collegegoal_addcyz',component: collegegoal_addcyz,meta:{title:"参与者"}},
  {path: '/collegegoal/collegegoal_bz',component: collegegoal_bz,meta:{title:"备注"}},
  {path: '/collegegoal/collegegoal_addzmb',component: collegegoal_addzmb,meta:{title:"添加子目标"}},
  {path: '/collegegoal/collegegoal_zmb',component: collegegoal_zmb,meta:{title:"子目标"}},
  {path: '/collegegoal/collegegoal_addlist',component: collegegoal_addlist,meta:{title:"创建子目标"}},
  {path: '/collegegoal/add_zmb',component: add_zmb,meta:{title:"创建子目标"}},
  {path: '/collegegoal/set_tx',component: set_tx,meta:{title:"设置提醒"}},
  {path: '/collegegoal/set_tx_xtmb',component: set_tx_xtmb,meta:{title:"设置提醒"}},
  {path: '/collegegoal/tx_other',component: tx_other,meta:{title:"提醒谁"}},
  {path: '/collegegoal/tx_content',component: tx_content,meta:{title:"提醒内容"}},
  {path: '/collegegoal/bjhy_search',component: bjhy_search,meta:{title:"搜索"}},
  {path: '/collegegoal/search_list',component: search_list,meta:{title:"搜索"}},
  {path: '/collegegoal/myClass',component: myclass,meta:{title:"我的班级"}},
  {path: '/collegegoal/set_goal',component: set_goal,meta:{title:"添加子目标"}},
  {path: '/collegegoal/all_person_fz',component: all_person_fz,meta:{title:"选择负责人"}},
  {path: '/collegegoal/personaldetail_xq',component: personaldetail_xq,meta:{title:"目标详情"}},
  {path: '/collegegoal/completedgoal-xq',component: completedgoal_xq,meta:{title:"目标详情"}},
  {path: '/collegegoal_zmb_xq',component: collegegoal_zmb_xq,meta:{title:"子目标详情"}},
  {path: '/find_xymb',component: find_xymb,meta:{title:"学院目标"}},
  {path: '/find_zycp',component: find_zycp,meta:{title:"职业测评"}},
  {path: '/find_mbgc_cptm',name:'mbgl_cptm',component: mbgl_cptm},
  {path: '/mbgc_result',name:'mbgc_result',component: mbgc_result},
  {path: '/mbgc_tjmb',name:'mbgc_tjmb',component: mbgc_tjmb},
  {path: '/mbgc_search',name:'mbgc_search',component: mbgc_search},
  {path: '/xymb_search',name:'xymb_search',component: xymb_search},
  {path: '/find_xymb_xq',name:'xymb_xq',component: xymb_xq},
  {path: '/find_mbgc_xq',name:'mbgc_xq',component: mbgc_xq},
  {path: '/find_xymb_zmb',name:'find_xymb_zmb',component: find_xymb_zmb,meta:{title:"子目标"}},
  {path: '/find_mbgc_sycyz',component: mbgc_sycyz,meta:{title:"所有参与者"}}
  ]
})
const router = new Router();
// router.push('/my');