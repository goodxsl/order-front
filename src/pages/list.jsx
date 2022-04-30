import React, { useState, useEffect } from 'react'
import { Card, Button, Space, Empty, message } from 'antd'
import axios from 'axios'

export default function List({ data, setData, id,setShow,show }) {
  const [count, setCount] = useState(0);
  const [prize, setPrize] = useState(0.00);
  useEffect(() => {
    let countNum = 0;
    let prizeTemp = 0;
    data.map(item => {
      if (item.num !== 0) {
        countNum++;
        prizeTemp = prizeTemp + item.num * item.jiage;
        console.log(prizeTemp);
      }
    })
    setCount(countNum);
    setPrize(prizeTemp);
  }, [])
  const onSumbit = () => {
    if (prize === 0) {
      message.info('快去点餐吧');
    } else {
      if(!show){
        message.info('你已经点过餐了');
        return;
      }
      axios.post('http://47.102.145.29:3000/order', { id: id }).then(res => {
        // this.setState({name:res.data.list[0].name})
        message.success('订单提交成功，请耐心等餐');
        setShow(false);
      }, err => {
        console.log(err);
      }).catch(() => {
        message.info('点餐失败，请刷新重新点餐');
      })
      axios.get('http://47.102.145.29:3000/users').then(res => {
        console.log(res.data.list);
      }, err => {
        console.log(err);
      })
    }
  }
  return (
    <>
      <div style={{ width: '100%', height: '50px', background: 'rgb(126, 139, 146)', fontSize: '20px', display: 'flex', justifyContent: 'center', alignItem: 'center', lineHeight: '50px' }}>订单列表</div>
      <div>
        {
          count === 0 ?
            <Empty style={{ marginTop: '200px' }} />
            : data.map(item => {
              if (item.num !== 0) {
                return (
                  <Card key={item.key} style={{ width: '100%' }}>
                    <img style={{ width: '180px', height: '110px', display: 'inline-block' }} src={item.url} alt="" />
                    <div style={{ display: 'inline-block', position: 'absolute', fontSize: '20px', fontFamily: 'Monospace', marginLeft: '15px' }}>{item.name}</div>
                    <div style={{ display: 'inline-block', position: 'absolute', fontSize: '20px', fontFamily: 'Monospace', bottom: '20px', marginLeft: '15px' }}>¥{item.jiage}</div>
                    <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
                      <Space>
                        <Button disabled={true} style={{ width: '35px', display: 'inline-block' }}>-</Button>
                        <span style={{ width: '10px', display: 'inline-block' }}>{item.num}</span>
                        <Button disabled={true} style={{ width: '35px', display: 'inline-block' }}>+</Button>
                      </Space>
                    </div>
                  </Card>
                )
              } else {
                return null;
              }
            })
        }
      </div>
      <div style={{ height: '100px' }}>

      </div>
      <div style={{ position: 'fixed', bottom: '50px', width: '100%', height: '50px', background: 'rgb(126, 139, 146)' }}>
        <div style={{ fontSize: '25px', position: 'absolute' }}>合计：{prize}¥</div>
        <Button onClick={onSumbit} style={{ border: 'none', borderRadius: '10px', width: '100px', float: 'right', position: 'relative', top: '-10px', background: '#808080' }}>提交订单</Button>
      </div>
    </>
  )
}
