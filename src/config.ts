import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
	home: {
		path: "/",
		title: "today",
	},
	blog: {
		path: "/blog",
		title: "blog",
	},
	tags: {
		path: "/tags",
		title: "tags",
	},
	about: {
		path: "/about",
		title: "about",
	},
};

export const SITE = {
	name: "AI News Radar",
	title: "Saad Namoune",
	description: "Daily AI, cybersecurity and open-source digest — curated by Mistral AI",
	url: "https://ai-news-radar.vercel.app",
	githubUrl: "https://github.com/SaadNamoune/ai-news-radar",
	listDrafts: true,
	image: "https://avatars.githubusercontent.com/u/SaadNamoune",
	ytChannelId: "",
	author: "Saad Namoune",
	authorTwitter: "",
	authorImage: "https://avatars.githubusercontent.com/u/SaadNamoune",
	authorBio: "Software Engineer · ESI Alger · AI, Cybersecurity & Distributed Systems",
};

// Ink - Theme configuration
export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = false;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false; /* works only when USE_AUTHOR_CARD is true */

export const USE_VIEW_STATS = false;
