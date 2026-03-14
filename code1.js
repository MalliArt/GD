gdjs.EndCode = {};
gdjs.EndCode.localVariables = [];
gdjs.EndCode.idToCallbackMap = new Map();
gdjs.EndCode.GDNewTextObjects1= [];
gdjs.EndCode.GDNewTextObjects2= [];


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDNewTextObjects1.length = 0;
gdjs.EndCode.GDNewTextObjects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
gdjs.EndCode.GDNewTextObjects1.length = 0;
gdjs.EndCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['EndCode'] = gdjs.EndCode;
