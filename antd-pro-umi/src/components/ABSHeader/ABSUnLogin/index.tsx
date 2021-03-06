import * as React from 'react';
import { ABSButton } from '../../ABSButton';
import './index.less';
import routerConfig from '../,,/../../../abs/config/routeConfig';

interface IProps {
  isLogin: boolean;
  history?: any;
}

class ABSUnLogin extends React.Component<IProps, any> {
  goLogin = () => {
    if (this.props.isLogin) {
      location.href = routerConfig.home;
    } else {
      location.href = routerConfig.login;
    }
  }

  goRegister = () => {
    location.href = routerConfig.registerOfHeader;
  }
  
  render() {
    return (
      <div className="abs-unlogin">
        <ABSButton className="btn-logion" onClick={this.goLogin} >登录</ABSButton>
        <ABSButton className="btn-register" type="default"  onClick={this.goRegister}>免费注册</ABSButton>
      </div>
    );
  }
}

export default ABSUnLogin; 