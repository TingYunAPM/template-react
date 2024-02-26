import React from 'react';
import { TyStateClient, TyHttpClient, setTyTokenInfo } from '@ty-sdk/core';
import { isDev } from '@/utils/constants';

const cfg = process.env.CONFIG as any;
//获取配置信息 应用名称（必须）
const tyStateClient = new TyStateClient(cfg);

//创建自定义服务
const customeHttpClient = new TyHttpClient();

/**
 * setAppCredential 信息存储
 *
 * 1.在一些特殊场景需要访问听云环境信息函数服务，需要在下面 initAppInfo 调用此函数，实现本地模拟使用。
 * 下面函数是设置 default key 的value信息。
 */
const setInfo = async () => {
    try {
        let result1 = await tyStateClient.setAppCredential('default', `Basic YWRtaW46VHkxMjMhQCM=`);
    } catch (err) {
        console.log(err);
    }
};

/**
 * 项目初始信息
 *
 * 1.本地调试 并且 不在无界环境下调试，需要手动配置token才可以访问听云函数。
 * 2.token要根据package.json的apiRoot在那个环境下，需登录对应的环境从控制台获取到token
 */
export const initAppInfo = async (isWujie: boolean) => {
    try {
        if (isDev && !isWujie) {
            const tyToken = ''; //${token};
            setTyTokenInfo(tyToken);
            if (!tyToken) return true;
        }

        // await setInfo();

        // 使用获取授权信息
        const credential = await tyStateClient.getAppCredential('default');
        customeHttpClient.setRequestConfig({
            headers: { Authorization: credential?.default },
        });

        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const TyContext = React.createContext({
    customeHttpClient,
    tyStateClient,
    tyConfig: cfg,
});
