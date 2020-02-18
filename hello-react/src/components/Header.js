import React from 'react';

// 无状态组件重构
// export default class Header extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <div className="row"></div>
//                 <div className="col-xs-1 col-xs-offset-11">
//                     <div>Hello</div>
//                 </div>
//             </div>
//         );

//     }

// }

const Header = (props) => {
    return (
        <div className="container">
            <div className="row"></div>
            <div className="col-xs-1 col-xs-offset-11">
                <div>HelloWorld</div>
            </div>
        </div>
    );
}

export default Header;

// 高阶组件
// const HighComponent = (WrappedComponent) => {
//     return class WrappedComponent extends React.Component {
//         render() {
//             // do something with WrappedComponent
//         }
//     }
// }