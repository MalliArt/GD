gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.GDPlayerObjects2_2final = [];

gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDPlayerObjects5= [];
gdjs.GameCode.GDPlatformObjects1= [];
gdjs.GameCode.GDPlatformObjects2= [];
gdjs.GameCode.GDPlatformObjects3= [];
gdjs.GameCode.GDPlatformObjects4= [];
gdjs.GameCode.GDPlatformObjects5= [];
gdjs.GameCode.GDBugObjects1= [];
gdjs.GameCode.GDBugObjects2= [];
gdjs.GameCode.GDBugObjects3= [];
gdjs.GameCode.GDBugObjects4= [];
gdjs.GameCode.GDBugObjects5= [];
gdjs.GameCode.GDRightArrowObjects1= [];
gdjs.GameCode.GDRightArrowObjects2= [];
gdjs.GameCode.GDRightArrowObjects3= [];
gdjs.GameCode.GDRightArrowObjects4= [];
gdjs.GameCode.GDRightArrowObjects5= [];
gdjs.GameCode.GDLeftArrowObjects1= [];
gdjs.GameCode.GDLeftArrowObjects2= [];
gdjs.GameCode.GDLeftArrowObjects3= [];
gdjs.GameCode.GDLeftArrowObjects4= [];
gdjs.GameCode.GDLeftArrowObjects5= [];
gdjs.GameCode.GDEnemyParticleObjects1= [];
gdjs.GameCode.GDEnemyParticleObjects2= [];
gdjs.GameCode.GDEnemyParticleObjects3= [];
gdjs.GameCode.GDEnemyParticleObjects4= [];
gdjs.GameCode.GDEnemyParticleObjects5= [];
gdjs.GameCode.GDNewTiledSpriteObjects1= [];
gdjs.GameCode.GDNewTiledSpriteObjects2= [];
gdjs.GameCode.GDNewTiledSpriteObjects3= [];
gdjs.GameCode.GDNewTiledSpriteObjects4= [];
gdjs.GameCode.GDNewTiledSpriteObjects5= [];
gdjs.GameCode.GDHeartObjects1= [];
gdjs.GameCode.GDHeartObjects2= [];
gdjs.GameCode.GDHeartObjects3= [];
gdjs.GameCode.GDHeartObjects4= [];
gdjs.GameCode.GDHeartObjects5= [];
gdjs.GameCode.GDFishObjects1= [];
gdjs.GameCode.GDFishObjects2= [];
gdjs.GameCode.GDFishObjects3= [];
gdjs.GameCode.GDFishObjects4= [];
gdjs.GameCode.GDFishObjects5= [];
gdjs.GameCode.GDScoreObjects1= [];
gdjs.GameCode.GDScoreObjects2= [];
gdjs.GameCode.GDScoreObjects3= [];
gdjs.GameCode.GDScoreObjects4= [];
gdjs.GameCode.GDScoreObjects5= [];
gdjs.GameCode.GDDmObjects1= [];
gdjs.GameCode.GDDmObjects2= [];
gdjs.GameCode.GDDmObjects3= [];
gdjs.GameCode.GDDmObjects4= [];
gdjs.GameCode.GDDmObjects5= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getY() > 200 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}
}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateDownKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFishObjects1Objects = Hashtable.newFrom({"Fish": gdjs.GameCode.GDFishObjects1});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameCode.GDFishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFishObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11024836);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDFishObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.GameCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFishObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreObjects1[i].getBehavior("Text").setText("Счет:" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDmObjects2Objects = Hashtable.newFrom({"Dm": gdjs.GameCode.GDDmObjects2});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Dm"), gdjs.GameCode.GDDmObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDmObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDmObjects2 */
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDmObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDmObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", true);
}
}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPlayerObjects3, gdjs.GameCode.GDPlayerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


{

/* Reuse gdjs.GameCode.GDPlayerObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Walk");
}
}

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.GameCode.GDHeartObjects3);
{for(var i = 0, len = gdjs.GameCode.GDHeartObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHeartObjects3[i].getBehavior("Animation").setAnimationName("Empty");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.GameCode.GDHeartObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)) >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDHeartObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDHeartObjects3[i].getVariableNumber(gdjs.GameCode.GDHeartObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDHeartObjects3[k] = gdjs.GameCode.GDHeartObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDHeartObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDHeartObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDHeartObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHeartObjects3[i].getBehavior("Animation").setAnimationName("Full");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.GameCode.GDHeartObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)) >= 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDHeartObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDHeartObjects3[i].getVariableNumber(gdjs.GameCode.GDHeartObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDHeartObjects3[k] = gdjs.GameCode.GDHeartObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDHeartObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDHeartObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDHeartObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHeartObjects3[i].getBehavior("Animation").setAnimationName("Full");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.GameCode.GDHeartObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDHeartObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDHeartObjects2[i].getVariableNumber(gdjs.GameCode.GDHeartObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDHeartObjects2[k] = gdjs.GameCode.GDHeartObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDHeartObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDHeartObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDHeartObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHeartObjects2[i].getBehavior("Animation").setAnimationName("Full");
}
}
}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).setNumber(3);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11120316);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\footstep_concrete_001.ogg", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "Walk" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11122260);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\impactWood_heavy_002.ogg", false, 100, 1);
}
}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
}

}


{

gdjs.GameCode.GDPlayerObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{gdjs.GameCode.GDPlayerObjects2_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_2final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_2final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_2final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_2final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDPlayerObjects2_2final, gdjs.GameCode.GDPlayerObjects2);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) < 2 ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isUsingControl("Jump") ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11128732);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}
}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDPlayerObjects1.length !== 0 ? gdjs.GameCode.GDPlayerObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 720, 180, "", 0);
}
}

}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList9(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


{


gdjs.GameCode.eventsList13(runtimeScene);
}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bug"), gdjs.GameCode.GDBugObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBugObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDBugObjects3[i].getBehavior("RectangleMovement").IsMovingLeft(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBugObjects3[k] = gdjs.GameCode.GDBugObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDBugObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBugObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDBugObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBugObjects3[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bug"), gdjs.GameCode.GDBugObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBugObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBugObjects2[i].getBehavior("RectangleMovement").IsMovingRight(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBugObjects2[k] = gdjs.GameCode.GDBugObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBugObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBugObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBugObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBugObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBugObjects2Objects = Hashtable.newFrom({"Bug": gdjs.GameCode.GDBugObjects2});
gdjs.GameCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPlayerObjects2, gdjs.GameCode.GDPlayerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11142972);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDBugObjects2, gdjs.GameCode.GDBugObjects3);

{for(var i = 0, len = gdjs.GameCode.GDBugObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBugObjects3[i].returnVariable(gdjs.GameCode.GDBugObjects3[i].getVariables().getFromIndex(0)).setString("Dead");
}
}
}

}


{

/* Reuse gdjs.GameCode.GDPlayerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11144084);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(1)).sub(1);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyParticleObjects1Objects = Hashtable.newFrom({"EnemyParticle": gdjs.GameCode.GDEnemyParticleObjects1});
gdjs.GameCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bug"), gdjs.GameCode.GDBugObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBugObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bug"), gdjs.GameCode.GDBugObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBugObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBugObjects1[i].getVariableString(gdjs.GameCode.GDBugObjects1[i].getVariables().getFromIndex(0)) == "Dead" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBugObjects1[k] = gdjs.GameCode.GDBugObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBugObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11145316);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBugObjects1 */
gdjs.GameCode.GDEnemyParticleObjects1.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDBugObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBugObjects1[i].getBehavior("Animation").setAnimationName("Dead");
}
}
{for(var i = 0, len = gdjs.GameCode.GDBugObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBugObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBugObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBugObjects1[i].activateBehavior("RectangleMovement", false);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEnemyParticleObjects1Objects, (( gdjs.GameCode.GDBugObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBugObjects1[0].getCenterXInScene()), (( gdjs.GameCode.GDBugObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBugObjects1[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.GameCode.GDEnemyParticleObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEnemyParticleObjects1[i].recreateParticleSystem();
}
}
{for(var i = 0, len = gdjs.GameCode.GDBugObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBugObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


gdjs.GameCode.eventsList15(runtimeScene);
}


{


gdjs.GameCode.eventsList17(runtimeScene);
}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.GameCode.GDLeftArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightArrow"), gdjs.GameCode.GDRightArrowObjects1);
{for(var i = 0, len = gdjs.GameCode.GDRightArrowObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRightArrowObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDLeftArrowObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDLeftArrowObjects1[i].hide();
}
}
}

}


{


gdjs.GameCode.eventsList14(runtimeScene);
}


{


gdjs.GameCode.eventsList18(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects5.length = 0;
gdjs.GameCode.GDPlatformObjects1.length = 0;
gdjs.GameCode.GDPlatformObjects2.length = 0;
gdjs.GameCode.GDPlatformObjects3.length = 0;
gdjs.GameCode.GDPlatformObjects4.length = 0;
gdjs.GameCode.GDPlatformObjects5.length = 0;
gdjs.GameCode.GDBugObjects1.length = 0;
gdjs.GameCode.GDBugObjects2.length = 0;
gdjs.GameCode.GDBugObjects3.length = 0;
gdjs.GameCode.GDBugObjects4.length = 0;
gdjs.GameCode.GDBugObjects5.length = 0;
gdjs.GameCode.GDRightArrowObjects1.length = 0;
gdjs.GameCode.GDRightArrowObjects2.length = 0;
gdjs.GameCode.GDRightArrowObjects3.length = 0;
gdjs.GameCode.GDRightArrowObjects4.length = 0;
gdjs.GameCode.GDRightArrowObjects5.length = 0;
gdjs.GameCode.GDLeftArrowObjects1.length = 0;
gdjs.GameCode.GDLeftArrowObjects2.length = 0;
gdjs.GameCode.GDLeftArrowObjects3.length = 0;
gdjs.GameCode.GDLeftArrowObjects4.length = 0;
gdjs.GameCode.GDLeftArrowObjects5.length = 0;
gdjs.GameCode.GDEnemyParticleObjects1.length = 0;
gdjs.GameCode.GDEnemyParticleObjects2.length = 0;
gdjs.GameCode.GDEnemyParticleObjects3.length = 0;
gdjs.GameCode.GDEnemyParticleObjects4.length = 0;
gdjs.GameCode.GDEnemyParticleObjects5.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects5.length = 0;
gdjs.GameCode.GDHeartObjects1.length = 0;
gdjs.GameCode.GDHeartObjects2.length = 0;
gdjs.GameCode.GDHeartObjects3.length = 0;
gdjs.GameCode.GDHeartObjects4.length = 0;
gdjs.GameCode.GDHeartObjects5.length = 0;
gdjs.GameCode.GDFishObjects1.length = 0;
gdjs.GameCode.GDFishObjects2.length = 0;
gdjs.GameCode.GDFishObjects3.length = 0;
gdjs.GameCode.GDFishObjects4.length = 0;
gdjs.GameCode.GDFishObjects5.length = 0;
gdjs.GameCode.GDScoreObjects1.length = 0;
gdjs.GameCode.GDScoreObjects2.length = 0;
gdjs.GameCode.GDScoreObjects3.length = 0;
gdjs.GameCode.GDScoreObjects4.length = 0;
gdjs.GameCode.GDScoreObjects5.length = 0;
gdjs.GameCode.GDDmObjects1.length = 0;
gdjs.GameCode.GDDmObjects2.length = 0;
gdjs.GameCode.GDDmObjects3.length = 0;
gdjs.GameCode.GDDmObjects4.length = 0;
gdjs.GameCode.GDDmObjects5.length = 0;

gdjs.GameCode.eventsList19(runtimeScene);
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects5.length = 0;
gdjs.GameCode.GDPlatformObjects1.length = 0;
gdjs.GameCode.GDPlatformObjects2.length = 0;
gdjs.GameCode.GDPlatformObjects3.length = 0;
gdjs.GameCode.GDPlatformObjects4.length = 0;
gdjs.GameCode.GDPlatformObjects5.length = 0;
gdjs.GameCode.GDBugObjects1.length = 0;
gdjs.GameCode.GDBugObjects2.length = 0;
gdjs.GameCode.GDBugObjects3.length = 0;
gdjs.GameCode.GDBugObjects4.length = 0;
gdjs.GameCode.GDBugObjects5.length = 0;
gdjs.GameCode.GDRightArrowObjects1.length = 0;
gdjs.GameCode.GDRightArrowObjects2.length = 0;
gdjs.GameCode.GDRightArrowObjects3.length = 0;
gdjs.GameCode.GDRightArrowObjects4.length = 0;
gdjs.GameCode.GDRightArrowObjects5.length = 0;
gdjs.GameCode.GDLeftArrowObjects1.length = 0;
gdjs.GameCode.GDLeftArrowObjects2.length = 0;
gdjs.GameCode.GDLeftArrowObjects3.length = 0;
gdjs.GameCode.GDLeftArrowObjects4.length = 0;
gdjs.GameCode.GDLeftArrowObjects5.length = 0;
gdjs.GameCode.GDEnemyParticleObjects1.length = 0;
gdjs.GameCode.GDEnemyParticleObjects2.length = 0;
gdjs.GameCode.GDEnemyParticleObjects3.length = 0;
gdjs.GameCode.GDEnemyParticleObjects4.length = 0;
gdjs.GameCode.GDEnemyParticleObjects5.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects5.length = 0;
gdjs.GameCode.GDHeartObjects1.length = 0;
gdjs.GameCode.GDHeartObjects2.length = 0;
gdjs.GameCode.GDHeartObjects3.length = 0;
gdjs.GameCode.GDHeartObjects4.length = 0;
gdjs.GameCode.GDHeartObjects5.length = 0;
gdjs.GameCode.GDFishObjects1.length = 0;
gdjs.GameCode.GDFishObjects2.length = 0;
gdjs.GameCode.GDFishObjects3.length = 0;
gdjs.GameCode.GDFishObjects4.length = 0;
gdjs.GameCode.GDFishObjects5.length = 0;
gdjs.GameCode.GDScoreObjects1.length = 0;
gdjs.GameCode.GDScoreObjects2.length = 0;
gdjs.GameCode.GDScoreObjects3.length = 0;
gdjs.GameCode.GDScoreObjects4.length = 0;
gdjs.GameCode.GDScoreObjects5.length = 0;
gdjs.GameCode.GDDmObjects1.length = 0;
gdjs.GameCode.GDDmObjects2.length = 0;
gdjs.GameCode.GDDmObjects3.length = 0;
gdjs.GameCode.GDDmObjects4.length = 0;
gdjs.GameCode.GDDmObjects5.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
