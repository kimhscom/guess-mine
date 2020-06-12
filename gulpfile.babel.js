import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";

sass.compiler = require("node-sass");

const paths = {
  style: {
    src: "assets/scss/style.scss",
    dest: "src/static/style",
    watch: "assets/scss/**/*.scss",
  },
};

const style = () => {
  return gulp
    .src(paths.style.src)
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.style.dest));
};

const watchFiles = () => {
  gulp.watch(paths.style.watch, style);
};

const dev = gulp.series([style, watchFiles]);

export default dev;
