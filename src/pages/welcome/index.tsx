import React, { useContext, useEffect, useState } from 'react';
import { TyContext } from '@/tyContext';
import { message } from 'antd';
import { TyHttpClient } from '@ty-sdk/core';
import { TyTopSubmenu } from '@ty-sdk/components';

export default () => {
    const { tyStateClient, tyConfig } = useContext(TyContext);
    useEffect(() => {
        let a = new TyHttpClient();
        console.log(a);
    }, []);
    const click = () => {};
    return (
        <div >
            <TyTopSubmenu />
            <h2 style={{textAlign:"center"}}>欢迎页</h2>
            <div onClick={click} style={{textAlign:"center"}}>{tyConfig.appName}</div>
        </div>
    );
};
