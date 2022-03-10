import React from 'react'
import {Layout} from 'antd'

const {Footer : AntdFooter} = Layout

const Footer = () => {
  return <AntdFooter style={{backgroundColor:'lightgray'}}>@copyrights 2022</AntdFooter>;
}

export default Footer