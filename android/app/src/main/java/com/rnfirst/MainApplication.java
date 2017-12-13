package com.rnfirst;

import android.app.Application;
import android.util.Log;

import com.alibaba.baichuan.android.trade.AlibcTradeSDK;
import com.alibaba.baichuan.android.trade.callback.AlibcTradeInitCallback;
import com.alibaba.baichuan.android.trade.model.AlibcTaokeParams;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new RNAlibcSdkPackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        AlibcTradeSDK.asyncInit(this, new AlibcTradeInitCallback() {
            @Override
            public void onSuccess() {
                //初始化成功，设置相关的全局配置参数
                /**
                 * 设置是否使用同步淘客打点。true：使用淘客同步打点；false：关闭同步打点，使用异步打点；
                 * 注意：初始化完成后调用才能生效；在加购场景下，只有异步淘客打点
                 *
                 * @param isSyncForTaoke（默认为true）
                 * @return 返回同步淘客打点策略是否设置成功
                 */
                AlibcTradeSDK.setSyncForTaoke(true);

                /**
                 * 设置全局淘客参数，方便开发者用同一个淘客参数，不需要在show接口重复传入
                 * 注意：初始化完成后调用才能生效
                 *
                 * @param taokeParams 淘客参数
                 */
                AlibcTradeSDK.setTaokeParams(new AlibcTaokeParams(getApplicationContext().getString(R.string.pid), "", ""));

//                Log.d("", "success");
            }

            @Override
            public void onFailure(int i, String s) {
                //初始化失败，可以根据code和msg判断失败原因，详情参见错误说明
//                Log.d("", s);
            }
        });
    }
}
