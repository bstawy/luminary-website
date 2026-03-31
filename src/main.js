// 1. Import your CSS (Vite will bundle these for you)
import "./shared/styles/reset.css";
import "./shared/styles/variables.css";
import "./shared/styles/globals.css";
import "./shared/styles/utilities.css";
import "./shared/styles/animations.css";
import "./shared/styles/helpers.css";

// Import your feature-specific CSS
import "./features/01.header/header.css";
import "./features/02.hero/hero.css";
import "./features/03.marquee/marquee.css";
import "./features/04.services/services.css";
import "./features/05.projects/projects.css";

// 2. Import your Logic
import "./shared/js/utilities.js";
import "./features/header/header.js";
import "./features/nav_menu/nav_menu.js";
import "./features/showcase_video/showcase_video.js";
import "./features/clients/clients.js";
import "./features/services/services.js";
import "./features/works/works.js";
