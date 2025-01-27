var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const changeTitle = () => __awaiter(void 0, void 0, void 0, function* () {
    let titleName = document.title;
    const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";
    try {
        const response = yield fetch(url);
        const data = yield response.json();
        document.title = `${data.text} - Owlink Nest`;
        return;
    }
    catch (error) {
        console.error("An error occurred:", error);
        return null;
    }
});
