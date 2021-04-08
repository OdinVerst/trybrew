const fs = require('fs');
const htmlmin = require('html-minifier');
const markdown = require('markdown-it')({ html: true });

module.exports = (config) => {
    config.addPassthroughCopy('src/img/!svg');
    config.addPassthroughCopy('src/fonts');
    config.addPassthroughCopy('src/robots.txt');

    config.addPairedShortcode('markdown', (content) => {
        return markdown.render(content);
    });

    config.addFilter('length', (path) => {
        const stats = fs.statSync(path);

        return stats.size;
    });


    config.addFilter('htmlmin', (value) => {
        return htmlmin.minify(
            value, {
                removeComments: true,
                collapseWhitespace: true
            }
        );
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
