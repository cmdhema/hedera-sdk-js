// ensure that all local imports go from .js to .cjs when moved to lib/
// https://github.com/liady/babel-plugin-module-rewrite
module.exports = function replaceImport(originalPath, callingFileName, options) {
    let path = originalPath;

    if (
        originalPath.startsWith(".") && 
        originalPath.endsWith(".js") &&
        !callingFileName.includes("/test/") &&
        path.includes("/src/")
    ) {
        path = path.replace(".js", ".cjs");
        path = path.replace("src/", "lib/");
    }

    return path;
}