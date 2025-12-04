import styled from "styled-components";
import {Button, Modal} from "antd";

export const SModalWrapper = styled(Modal)`
    && {
        width: 100%;
        max-width: calc(100dvw - 60px); /* 30px слева и справа */
    }
    
    .ant-modal-content {
        min-height: 80dvh;
        max-height: 80dvh;
        border-radius: 16px;
        background: #282729;

        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: 0;
    }
    
    .ant-modal-header {
        background: #282729;
        padding: 28px;
        position: sticky;
        top: 0;
        z-index: 10;
        margin-bottom: 0;
    }

    .ant-modal-close {
        top: 18px;
        width: 50px;
        height: 50px;
    }

    .ant-modal-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-height: 0;
        padding: 0 16px 16px 16px;
        background: #282729;
    }

    .ant-modal-footer {
        padding: 16px;
        background: #282729;
    }
`;

export const STitle = styled.h5`
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text.main};
    font-weight: 900;
    font-size: 18px;
`;

export const SContent = styled.div`
    flex: 1;
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({theme}) => theme.colors.text.main};
    border-radius: 16px;
    overflow-y: auto;
    padding: 16px;
`;

export const SButton = styled(Button)`
    &.ant-btn{
        border-radius: 99%;
        width: 50px;
        height: 50px;
    }
`
