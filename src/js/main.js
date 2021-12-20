import documentReady from "./helpers/documentReady";
import lazyImages from "./modules/lazyImages";
import indexSlider from "./modules/indexSlider";
import teamSlider from "./modules/teamSlider";
import projectsSlider from "./modules/projectsSlider";

documentReady(() => {
	lazyImages();
	indexSlider();
	teamSlider();
	projectsSlider();
});
