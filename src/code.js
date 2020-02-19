var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
if (figma.command == 'start-playing') {
    figma.showUI(__html__, { width: 480, height: 330 });
}
if (figma.command == 'follow-me') {
    figma.showUI(__html__);
    figma.ui.postMessage('follow-me');
}
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg.type === 'close-ui') {
        figma.closePlugin();
    }
    if (msg.type === 'close-plugin') {
        figma.closePlugin();
    }
});
