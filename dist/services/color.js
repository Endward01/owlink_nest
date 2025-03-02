export const background = "#232629";
export const primary = "#1d1c1a";
export const secondary = "#4d5860";
export const accent = "#c83c4c";
export const text = "#fafaf9";
class colorSheme {
    constructor(background, primary, secondary, accent, text) {
        this.background = background;
        this.primary = primary;
        this.secondary = secondary;
        this.accent = accent;
        this.text = text;
    }
    getColor() {
        return {
            background: (this.background = background),
            primary: (this.primary = primary),
            secondary: (this.secondary = secondary),
            accent: (this.accent = accent),
            text: (this.text = text),
        };
    }
}
export const newColorSheme = new colorSheme("#232629", "#1d1c1a", "#485c63", "#C83E4D", "#fafaf9");
const injectCSS = (css) => {
    let el = document.createElement("style");
    el.type = "text/css";
    el.innerText = css;
    document.head.appendChild(el);
};
injectCSS(".background { background-color:" +
    newColorSheme.getColor().background +
    "} .primary { background-color:" +
    newColorSheme.getColor().primary +
    "} .button:hover,.button:active {  background:" +
    newColorSheme.getColor().accent +
    "}.secondary { background-color:" +
    newColorSheme.getColor().secondary +
    "}  .textColor { color: " +
    newColorSheme.getColor().text +
    "; stroke:" +
    newColorSheme.getColor().text +
    "} .outlineFocus {outline:none; border-bottom: 1px solid;border-color:" +
    newColorSheme.getColor().text +
    "} .outlineFocus:focus-visible {border-bottom: 1px solid;box-shadow: 0 -8px 15px -20px " +
    newColorSheme.getColor().accent +
    " inset , 0 8px 10px -9px " +
    newColorSheme.getColor().accent +
    " ;border-color:" +
    newColorSheme.getColor().accent +
    "} .focus {box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 10px ; background: " +
    newColorSheme.getColor().primary +
    ";} .link:hover {box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 10px; background: " +
    newColorSheme.getColor().primary +
    ";}");
