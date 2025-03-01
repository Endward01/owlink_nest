export const background = "#232629";
export const primary = "#1d1c1a";
export const secondary = "#413573";
export const accent = "#c5b84f";
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
injectCSS(".primary { background-color:" +
    newColorSheme.getColor().background +
    "} .secondary { background-color:" +
    newColorSheme.getColor().primary +
    "} .tertiary { background-color:" +
    newColorSheme.getColor().primary +
    "} .tertiary:hover {  background:" +
    newColorSheme.getColor().secondary +
    "} .textColor { color: " +
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
    "};");
