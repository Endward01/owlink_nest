import { createNavbar } from "./components/navbar.js";
import { createSection } from "./components/section.js";
import  {createFooter} from "./components/footer.js"
import { changeTitle } from "./services/changePageTitle.js";

const htmlBody:any = document.querySelector("body");
htmlBody.classList.add("h-lvh","container","mx-auto");

createNavbar(htmlBody);
createSection(htmlBody)
createFooter(htmlBody)


changeTitle()

