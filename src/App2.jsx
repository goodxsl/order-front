import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link   } from 'react-router-dom';
import List from './pages/list';
import { Redirect } from 'react-router'
import MyInfo from './pages/myInfo';
import Order from './pages/order';
const orderList = [
  {
    key: 1,
    url: 'https://img-blog.csdnimg.cn/ce2f9d388fea456b94004c1470447c67.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44GD5q6L5o2f44GlIOS5hg==,size_20,color_FFFFFF,t_70,g_se,x_16',
    num: 0,
    name: '蟹脚捞粉',
    jiage: 56.00,
  },
  {
    key: 2,
    url: 'https://img-blog.csdnimg.cn/18b286113d164b0cbaf66abd8d3e4e0e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44GD5q6L5o2f44GlIOS5hg==,size_20,color_FFFFFF,t_70,g_se,x_16',
    num: 0,
    name: '红豆汤',
    jiage: 3.00,
  },
  {
    key: 3,
    url: 'https://img-blog.csdnimg.cn/e484bc58b5e24875859372ef570b99e0.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44GD5q6L5o2f44GlIOS5hg==,size_20,color_FFFFFF,t_70,g_se,x_16',
    num: 0,
    name: '红烧鸡爪',
    jiage: 39.00,
  },
  {
    key: 4,
    url: 'https://img-blog.csdnimg.cn/49b3c4524c9445008c33134db2574053.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44GD5q6L5o2f44GlIOS5hg==,size_20,color_FFFFFF,t_70,g_se,x_16',
    num: 0,
    name: '嫩豆腐烧牛蛙',
    jiage: 48,
  },
  {
    key: 5,
    url: 'https://img-blog.csdnimg.cn/f8a8f87eeddf4eaeaa35e430515a9809.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44GD5q6L5o2f44GlIOS5hg==,size_20,color_FFFFFF,t_70,g_se,x_16',
    num: 0,
    name: '油爆皮皮虾',
    jiage: 48,
  },
  {
    key: 6,
    url: 'https://img-blog.csdnimg.cn/9e06b049daed44d69ad58de109803fb4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44GD5q6L5o2f44GlIOS5hg==,size_20,color_FFFFFF,t_70,g_se,x_16',
    num: 0,
    name: '小石斑鱼',
    jiage: 38.00,
  }
];
export default function App2() {
  const [data, setData] = useState(orderList);
  const [show, setShow] = useState(true);
  const [id, setId] = useState(1);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/list" element={<List data={data} setData={setData} id={id} show={show} setShow={setShow} />}></Route>
          <Route path="/myInfo" element={<MyInfo data={data} setData={setData} />}></Route>
          <Route path="/orders" element={<Order data={data} setData={setData} setId={setId} id={id} />}></Route>
        </Routes>
        <div style={{ background: '#fff', borderTop: '1px solid #7E8B92', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px', position: 'fixed', bottom: '0px', width: '100%' }}>
          <div style={{ flex: '1', display: 'flex', justifyContent: 'center', borderRight: '1px solid #7E8B92 ' }}>
            <Link to="/orders" style={{ color: '#000', textDecoration: 'none' }}>
              点餐
            </Link>
          </div>
          <div style={{ flex: '1', display: 'flex', justifyContent: 'center', borderRight: '1px solid #7E8B92 ' }}>
            <Link to="/list" style={{ color: '#000', textDecoration: 'none' }}>
              订单
            </Link>
          </div>
          <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
            <Link to="/myInfo" style={{ color: '#000', textDecoration: 'none' }}>
              我的
            </Link>
          </div>
        </div>
      </Router>

    </>
  )
}
