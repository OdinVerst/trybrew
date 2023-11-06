const fs = require('fs');
const htmlmin = require('html-minifier');
const markdown = require('markdown-it')({ html: true });

const { EleventyI18nPlugin } = require("@11ty/eleventy");
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite")
const SvgSpritePlugin = require("eleventy-plugin-svg-sprite");

module.exports = (config) => {
    config.addPassthroughCopy('src/img/!svg');
    config.addPassthroughCopy('src/fonts');
    config.addPassthroughCopy({ 'src/public': "/" });

    config.addPairedShortcode('markdown', (content) => {
        return markdown.render(content);
    });

    config.addFilter('length', (path) => {
        const stats = fs.statSync(path);

        return stats.size;
    });

    config.addFilter('filterIndexArticles', (array) => {
        return array.sort((a, b) => {
              if (a.data.featured > b.data.featured) {
                    return 1;
                }
                if (a.data.featured < b.data.featured) {
                    return -1;
                }
                return 0;
        })
    });

    config.addTransform('htmlmin', (content, outputPath) => {
        if(outputPath && outputPath.endsWith('.html')) {
            return  htmlmin.minify(
                content, {
                    removeComments: true,
                    collapseWhitespace: true
                }
            );
        }

        return content;
    });

    config.addPassthroughCopy("src/styles");
    config.addPassthroughCopy("src/scripts");
    config.addPlugin(EleventyVitePlugin, {
        appType: "custom",
        server: {
            mode: "development",
        },
        build: {
            mode: "production",
        },
    });

    config.addPlugin(SvgSpritePlugin, {
        path: "./src/img/svg"
    })

    config.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "ru",
        filters: {
          url: "locale_url",
          links: "locale_links",
        },
        errorMode: "never",
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'includes',
            layouts: 'layouts'
        },
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,
        templateFormats: [
            'md', 'njk'
        ],
    };
};
