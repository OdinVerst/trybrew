const EleventyFetch = require("@11ty/eleventy-fetch");

async function getContributors() {
    try {
        const url = "https://api.github.com/repos/OdinVerst/trybrew/contributors";

        return EleventyFetch(url, {
            duration: "1w",
            type: "json"
        });
    } catch(e) {
        return []
    }
}

module.exports = getContributors;
