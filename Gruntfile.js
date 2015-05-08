module.exports = function(grunt){
    //project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "bootstrap/dis/css/bootstrap.min.css",
                    "bootstrap/dis/css/bootstrap-theme.min.css",
                    "bootstrap/dist/js/bootstrap.min.js",
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map"
                ],
                "dest": "server/public/vendor/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['copy']);

};
