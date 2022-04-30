import React, { useEffect } from 'react'
import { Carousel, Card, Button, Space, message } from 'antd'
const contentStyle = {
  height: '200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Order = ({ data, setData, setId,id }) => {
  useEffect(() => {
    if(window.location.search.split('?id=')[1]&&window.location.search.split('?id=')[1].length>0){
      setId(window.location.search.split('?id=')[1]);
    }
  }, [])

  const updataData = (key, active) => {
    setData(data.map(item => {
      if (item.key === key) {
        let chengeNum = item.num;
        if (active === "add" && chengeNum < 10) {
          return { ...item, num: chengeNum + 1 };
        } else if (active === "delect" && chengeNum > 0) {
          return { ...item, num: chengeNum - 1 };
        } else {
          message.info('请选择合适的数量');
          return item;
        }
      } else {
        return item;
      }
    }));
  }
  return (
    <>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img style={{ width: '100%', height: '200px' }} src="https://img-blog.csdnimg.cn/c3f8b19698854089b87731c5b75e4b5a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44GD5q6L5o2f44GlIOS5hg==,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img style={{ width: '100%', height: '200px' }} src="https://img-blog.csdnimg.cn/db26bc5320ad4a4a9877062c072379af.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA44GD5q6L5o2f44GlIOS5hg==,size_20,color_FFFFFF,t_70,g_se,x_16" alt="" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>我是凑数的</h3>
        </div>
      </Carousel>
      {
        data.map(item => (
          <Card key={item.key} style={{ width: '100%' }}>
            <img style={{ width: '180px', height: '110px', display: 'inline-block' }} src={item.url} alt="" />
            <div style={{ display: 'inline-block',position:'absolute',fontSize:'20px',fontFamily:'Monospace',marginLeft:'15px'}}>{item.name}</div>
            <div style={{ display: 'inline-block',position:'absolute',fontSize:'20px',fontFamily:'Monospace',bottom:'20px',marginLeft:'15px'}}>¥{item.jiage}</div>
            <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
              <Space>
                <Button onClick={() => updataData(item.key, "delect")} style={{ width: '35px', display: 'inline-block' }}>-</Button>
                <span style={{ width: '10px', display: 'inline-block' }}>{item.num}</span>
                <Button onClick={() => updataData(item.key, "add")} style={{ width: '35px', display: 'inline-block' }}>+</Button>
              </Space>
            </div>
          </Card>
        ))
      }
      <div style={{ height: '50px' }}>

      </div>
    </>
  )
}

export default Order;