export default {
	root: "./src",
	build: {
		outDir: "dist",
		emptyOutDir: true,
		rollupOptions: {
			input: {
				index: "./src/index.html",
				blog: "./src/blog.html",
				about: "./src/about.html",
			},
		},
	},
};
