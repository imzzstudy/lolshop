
class Menu extends  React.Component {
    render(){
        return(
            <div className="menu">
                <img src="/images/logo.png" className="logo"/>
                <ul className="m_item">
                    <li><a className="menuLink" href="/">홈</a></li>
                    <li><a className="menuLink" href="/champion">챔피언</a></li>
                    <li><a className="menuLink" href="/skin">스킨</a></li>
                    <li><a className="menuLink" href="/wardSkin">와드 스킨</a></li>
                    <li><a className="menuLink" href="/serviceCenter">고객센터</a></li>
                </ul>
                <div className="login"><a className="loginLink" href="/join">회원가입</a><a className="loginLink"
                                                                                            href="/login">로그인</a>
                </div>
            </div>
        );
    }
}

