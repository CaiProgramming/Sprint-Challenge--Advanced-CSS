grunt.loadNpmTasks("grunt-contrib-cssmin");

cssmin: {
  options: {
    mergeIntoShorthands: false,
    roundingPrecision: -1,
  },
  target: {
    files: {
      './css/index.css': ['./css/less.css', './css/sass.css']
    }
  }
}
