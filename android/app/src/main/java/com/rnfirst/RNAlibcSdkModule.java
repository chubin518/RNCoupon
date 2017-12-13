package com.rnfirst;


import com.alibaba.baichuan.android.trade.AlibcTrade;
import com.alibaba.baichuan.android.trade.AlibcTradeSDK;
import com.alibaba.baichuan.android.trade.callback.AlibcTradeCallback;
import com.alibaba.baichuan.android.trade.model.AlibcShowParams;
import com.alibaba.baichuan.android.trade.model.AlibcTaokeParams;
import com.alibaba.baichuan.android.trade.model.OpenType;
import com.alibaba.baichuan.android.trade.model.TradeResult;
import com.alibaba.baichuan.android.trade.page.AlibcPage;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by lxw3311 on 2017/12/7.
 */

public class RNAlibcSdkModule extends ReactContextBaseJavaModule {
    public RNAlibcSdkModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "AlibcSdk";
    }

    @ReactMethod
    public void Show(String url) {
        AlibcTrade.show(getCurrentActivity(), new AlibcPage(url),
                new AlibcShowParams(OpenType.Native, false),
                new AlibcTaokeParams(getReactApplicationContext().getString(R.string.pid), "", ""),
                null,
                new AlibcTradeCallback() {

                    @Override
                    public void onFailure(int i, String s) {
//打开电商组件，用户操作中错误信息回调。code：错误码；msg：错误信息
                    }

                    @Override
                    public void onTradeSuccess(TradeResult tradeResult) {
                        //打开电商组件，用户操作中成功信息回调。tradeResult：成功信息（结果类型：加购，支付；支付结果）
                    }
                });
    }

    @ReactMethod
    public void PageDestory() {
        //调用了AlibcTrade.show方法的Activity都需要调用AlibcTradeSDK.destory()
        AlibcTradeSDK.destory();
    }
}
