import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 55px;
    background: grey;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0px 15px;

    box-shadow: 2px 1px 6px #d7d7d7;
`

const Header = () => {
    return (
        <Wrapper>
            <div>로고가 드러갈 자리</div>
            <div>햄버거 아이콘</div>
        </Wrapper>
    );
};

export default Header;